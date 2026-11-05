import { create } from 'zustand';
import { Client, StompSubscription } from '@stomp/stompjs';
import { toast } from '@core/store/useToastStore';
import { getTeamChat } from '@shared/api/chat/ChatApi';
import { TeamChatMessage } from '@shared/api/chat/ChatModel';
import { ChatData } from '@shared/models/Workspace';

interface ChatEntry {
  id: number;
  message: TeamChatMessage;
}

interface TeamChatThread {
  entries: ChatEntry[];
  nextId: number;
  loadToken: object | null;
  liveDuringLoad: ChatEntry[];
}

interface TeamChatState {
  stompClient: Client | null;
  isConnected: boolean;
  stompSub: StompSubscription | null;
  threadsByTeamId: Map<string, TeamChatThread>;
  initThread: (teamId: string) => void;
  sendMessage: (teamId: string, message: string, userId: string) => void;
  connectSocket: () => void;
  disconnectSocket: () => void;
  subscribeToTeam: (teamId: string) => void;
  unsubscribeFromTeam: () => void;
  reset: () => void;
}

const EMPTY_CHAT: ChatData[] = [];
const chatCache = new WeakMap<ChatEntry[], ChatData[]>();
const signature = (message: TeamChatMessage) =>
  JSON.stringify([
    message.roomId,
    message.sender,
    message.message,
    message.receivedDate,
    message.receivedTime,
  ]);

const isTeamChatMessage = (value: unknown): value is TeamChatMessage => {
  if (!value || typeof value !== 'object') return false;
  const message = value as Record<string, unknown>;
  return ['roomId', 'sender', 'message', 'receivedDate', 'receivedTime'].every(
    (key) => typeof message[key] === 'string',
  );
};

export const selectTeamAllChat =
  (teamId: string | null | undefined) =>
  (state: TeamChatState): ChatData[] => {
    const entries = teamId
      ? state.threadsByTeamId.get(teamId)?.entries
      : undefined;
    if (!entries) return EMPTY_CHAT;
    const cached = chatCache.get(entries);
    if (cached) return cached;
    const chats = entries.map(({ id, message }) => ({
      id,
      authorId: message.sender,
      authorName: message.sender,
      chat: message.message,
      createdAt: message.receivedDate,
      time: message.receivedTime.slice(0, 5),
      isMe: false,
    }));
    chatCache.set(entries, chats);
    return chats;
  };

export const useTeamChatStore = create<TeamChatState>((set, get) => ({
  stompClient: null,
  isConnected: false,
  stompSub: null,
  threadsByTeamId: new Map(),

  initThread: (teamId) => {
    const token = {};
    set((state) => {
      const threads = new Map(state.threadsByTeamId);
      const existing = threads.get(teamId);
      threads.set(teamId, {
        entries: existing?.entries ?? [],
        nextId: existing?.nextId ?? 1,
        loadToken: token,
        liveDuringLoad: [],
      });
      return { threadsByTeamId: threads };
    });

    void getTeamChat({ teamId })
      .then((messages) => {
        if (!Array.isArray(messages) || !messages.every(isTeamChatMessage)) {
          throw new Error('잘못된 채팅 기록 응답입니다.');
        }
        set((state) => {
          const thread = state.threadsByTeamId.get(teamId);
          if (!thread || thread.loadToken !== token) return state;
          let nextId = thread.nextId;
          const entries = messages.map((message) => ({
            id: nextId++,
            message,
          }));
          // Only compare events received during this request, consuming one match per event.
          const counts = new Map<string, number>();
          for (const message of messages) {
            const key = signature(message);
            counts.set(key, (counts.get(key) ?? 0) + 1);
          }
          for (const entry of thread.liveDuringLoad) {
            const key = signature(entry.message);
            const count = counts.get(key) ?? 0;
            if (count > 0) counts.set(key, count - 1);
            else entries.push(entry);
          }
          const threads = new Map(state.threadsByTeamId);
          threads.set(teamId, {
            entries,
            nextId,
            loadToken: null,
            liveDuringLoad: [],
          });
          return { threadsByTeamId: threads };
        });
      })
      .catch(() => {
        const thread = get().threadsByTeamId.get(teamId);
        if (!thread || thread.loadToken !== token) return;
        set((state) => {
          const threads = new Map(state.threadsByTeamId);
          threads.set(teamId, {
            ...thread,
            loadToken: null,
            liveDuringLoad: [],
          });
          return { threadsByTeamId: threads };
        });
        toast.error('채팅 기록을 불러오지 못했습니다.');
      });
  },

  sendMessage: (teamId, message, userId) => {
    const { stompClient } = get();
    if (!stompClient?.connected) {
      toast.error('채팅 서버에 연결되지 않았습니다.');
      return;
    }
    try {
      stompClient.publish({
        destination: `/pub/message/${teamId}`,
        body: JSON.stringify({ id: teamId, name: userId, message }),
      });
    } catch {
      toast.error('메시지를 전송하지 못했습니다.');
    }
  },

  connectSocket: () => {
    if (get().stompClient) return;
    const client = new Client({
      brokerURL: 'ws://localhost:8080/ws',
      reconnectDelay: 5000,
      onConnect: () => {
        if (get().stompClient === client) set({ isConnected: true });
      },
      onDisconnect: () => {
        if (get().stompClient === client)
          set({ isConnected: false, stompSub: null });
      },
      onWebSocketClose: () => {
        if (get().stompClient === client)
          set({ isConnected: false, stompSub: null });
      },
      onWebSocketError: () => {
        if (get().stompClient === client) set({ isConnected: false });
      },
      onStompError: () => toast.error('채팅 서버 연결 오류가 발생했습니다.'),
    });
    set({ stompClient: client });
    client.activate();
  },

  disconnectSocket: () => {
    const { stompClient } = get();
    set({ stompClient: null, isConnected: false, stompSub: null });
    void stompClient?.deactivate();
  },

  subscribeToTeam: (teamId) => {
    const { stompClient, stompSub } = get();
    if (!stompClient?.connected || !get().threadsByTeamId.has(teamId)) return;
    stompSub?.unsubscribe();
    const destination = `/sub/chatroom/${teamId}`;
    const subscription = stompClient.subscribe(destination, (frame) => {
      if (
        frame.headers.destination &&
        frame.headers.destination !== destination
      )
        return;
      let message: unknown;
      try {
        message = JSON.parse(frame.body);
      } catch {
        return;
      }
      if (!isTeamChatMessage(message) || message.roomId !== teamId) return;
      const validMessage = message;
      set((state) => {
        const thread = state.threadsByTeamId.get(teamId);
        if (!thread) return state;
        const entry = { id: thread.nextId, message: validMessage };
        const threads = new Map(state.threadsByTeamId);
        threads.set(teamId, {
          ...thread,
          entries: [...thread.entries, entry],
          nextId: thread.nextId + 1,
          liveDuringLoad: thread.loadToken
            ? [...thread.liveDuringLoad, entry]
            : [],
        });
        return { threadsByTeamId: threads };
      });
    });
    set({ stompSub: subscription });
  },

  unsubscribeFromTeam: () => {
    const { stompSub, stompClient } = get();
    if (stompSub && stompClient?.connected) stompSub.unsubscribe();
    set({ stompSub: null });
  },

  reset: () => {
    get().unsubscribeFromTeam();
    get().disconnectSocket();
    set({ threadsByTeamId: new Map() });
  },
}));
