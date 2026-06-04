import { teamChatMockFactories } from '@mocks/TeamChatMocks';
import { ChatData } from '@shared/models/Workspace';
import { formatDate } from '@shared/utils/formatDate';
import getMaxId from '@shared/utils/getMaxId';
import { create } from 'zustand';
import { Client, StompSubscription } from '@stomp/stompjs';
// import SockJS from 'sockjs-client';

interface TeamChatThread {
  allChat: ChatData[];
  currentId: number;
}

const EMPTY_TEAM_CHAT: ChatData[] = [];

const getTeamAllChat = (
  threadsByTeamId: Map<string, TeamChatThread>,
  teamId: string | null | undefined,
): ChatData[] => {
  if (!teamId) return EMPTY_TEAM_CHAT;

  return threadsByTeamId.get(teamId)?.allChat ?? EMPTY_TEAM_CHAT;
};

interface TeamChatState {
  stompClient: Client | null;
  isConnected: boolean;
  stompSub: StompSubscription | null;

  threadsByTeamId: Map<string, TeamChatThread>;
  initThread: (
    teamId: string,
    userId: string | undefined,
    userName: string | undefined,
  ) => void;
  sendMessage: (
    teamId: string,
    chatToSend: string,
    userId: string,
    userName: string,
  ) => void;

  connectSocket: () => void;
  disconnectSocket: () => void;
  subscribeToTeam: (teamId: string) => void;
  unsubscribeFromTeam: () => void;
}

export const selectTeamAllChat =
  (teamId: string | null | undefined) => (state: TeamChatState) =>
    getTeamAllChat(state.threadsByTeamId, teamId);

const withIsMe = (chats: ChatData[], userId: string | undefined) =>
  chats.map((chat) => ({
    ...chat,
    isMe: chat.authorId === userId,
  }));

export const useTeamChatStore = create<TeamChatState>((set, get) => ({
  stompClient: null as Client | null,
  isConnected: false,
  stompSub: null as StompSubscription | null,
  threadsByTeamId: new Map(),

  initThread: (teamId, userId, userName) =>
    set((state) => {
      const nextMap = new Map(state.threadsByTeamId);
      const existing = nextMap.get(teamId);

      if (existing) {
        nextMap.set(teamId, {
          ...existing,
          allChat: withIsMe(existing.allChat, userId),
        });
        return { threadsByTeamId: nextMap };
      }

      const createMocks = teamChatMockFactories[teamId];
      const seeded = createMocks ? createMocks({ userId, userName }) : [];
      const nextAllChat = withIsMe(seeded, userId);
      const maxId = getMaxId(nextAllChat);

      nextMap.set(teamId, {
        allChat: nextAllChat,
        currentId: maxId + 1,
      });

      return { threadsByTeamId: nextMap };
    }),

  sendMessage: (teamId, chatToSend, userId, userName) =>
    set((state) => {
      const { stompClient } = state;
      const thread = state.threadsByTeamId.get(teamId);
      if (!thread) return state;

      const today = new Date();
      const createdAt = formatDate();
      const time = today.toLocaleTimeString().slice(0, -3);

      const newMessage: ChatData = {
        id: thread.currentId,
        chat: chatToSend,
        time,
        authorId: userId,
        authorName: userName,
        isMe: true,
        createdAt,
      };

      stompClient?.publish({
        destination: `/app/chat/${teamId}`,
        body: JSON.stringify(newMessage),
      });

      const nextAllChat: ChatData[] = [...thread.allChat, newMessage];
      const nextMap = new Map(state.threadsByTeamId);
      nextMap.set(teamId, {
        allChat: nextAllChat,
        currentId: thread.currentId + 1,
      });

      return { threadsByTeamId: nextMap };
    }),

  connectSocket: () => {
    const client = new Client({
      // 백엔드 연결 시 brokerURL 대신 webSocketFactory로 변경, SockJS 사용
      // webSocketFactory: () => new SockJS('/ws-stomp'),
      brokerURL: 'ws://localhost:8080',
      reconnectDelay: 5000, // 재연결 시도

      onConnect: () => {
        set({ isConnected: true });
      },

      onDisconnect: () => {
        set({ isConnected: false });
      },

      onStompError: (frame) => console.error('STOMP 오류:', frame),
    });

    client.activate();
    set({ stompClient: client });
  },

  disconnectSocket: () => {
    const { stompClient } = get();

    stompClient?.deactivate();

    set({ stompClient: null, isConnected: false });
  },

  subscribeToTeam: (teamId) => {
    const { stompClient, stompSub, threadsByTeamId } = get();

    if (!stompClient?.connected) return;

    const thread = threadsByTeamId.get(teamId);
    if (!thread) return;

    stompSub?.unsubscribe();

    const topicDestination = `/topic/chat/${teamId}`;

    const newStompSub = stompClient.subscribe(
      topicDestination,
      (message) => {
        const destination = message.headers.destination;
        if (destination && destination !== topicDestination) return;

        const body = JSON.parse(message.body) as ChatData;

        set((state) => {
          const currentThreadsByTeamId = state.threadsByTeamId;
          const currentThread = currentThreadsByTeamId.get(teamId);

          if (!currentThread) return {};

          if (currentThread.allChat.some((chat) => chat.id === body.id)) {
            return {};
          }

          const nextAllChat: ChatData[] = [...currentThread.allChat, body];

          const nextMap = new Map(currentThreadsByTeamId);

          nextMap.set(teamId, {
            allChat: nextAllChat,
            currentId: currentThread.currentId + 1,
          });

          return { threadsByTeamId: nextMap };
        });
      },
    );

    set({ stompSub: newStompSub });
  },

  unsubscribeFromTeam: () => {
    const { stompSub } = get();

    if (!stompSub) return;

    stompSub.unsubscribe();

    set({ stompSub: null });
  },
}));
