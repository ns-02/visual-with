import { teamChatMockFactories } from '@mocks/TeamChatMocks';
import { ChatData } from '@shared/models/Workspace';
import { formatDate } from '@shared/utils/formatDate';
import getMaxId from '@shared/utils/getMaxId';
import { create } from 'zustand';
import { Client } from '@stomp/stompjs';
// import SockJS from 'sockjs-client';

interface TeamChatThread {
  allChat: ChatData[];
  currentId: number;
}

interface ChatMessage {
  senderId: string;
  content: string;
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

  // 테스트용
  messages: ChatMessage[];
  sendTestMessage: (content: string, teamId: string) => void;
  subscribeToTeam: (teamId: string) => void;

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
  threadsByTeamId: new Map(),
  messages: [],

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
      const thread = state.threadsByTeamId.get(teamId);
      if (!thread) return state;

      const today = new Date();
      const createdAt = formatDate();
      const time = today.toLocaleTimeString().slice(0, -3);

      const nextAllChat: ChatData[] = [
        ...thread.allChat,
        {
          id: thread.currentId,
          chat: chatToSend,
          time,
          authorId: userId,
          authorName: userName,
          isMe: true,
          createdAt,
        },
      ];

      const nextMap = new Map(state.threadsByTeamId);
      nextMap.set(teamId, {
        allChat: nextAllChat,
        currentId: thread.currentId + 1,
      });

      return { threadsByTeamId: nextMap };
    }),

  sendTestMessage: (content, teamId) => {
    const { stompClient } = get();

    stompClient?.publish({
      destination: `/app/chat/${teamId}`,
      body: JSON.stringify({ senderId: 'me', content }),
    });
  },

  subscribeToTeam: (teamId) => {
    const { stompClient } = get();

    if (!stompClient?.connected) return;

    stompClient.subscribe(`/topic/chat/${teamId}`, (message) => {
      const body = JSON.parse(message.body) as ChatMessage;

      set((state) => ({ messages: [...state.messages, body] }));
    });
  },

  connectSocket: () => {
    const client = new Client({
      // 백엔드 연결 시 brokerURL 대신 webSocketFactory로 변경, SockJS 사용
      // webSocketFactory: () => new SockJS('/ws-stomp'),
      brokerURL: 'ws://localhost:8080',
      reconnectDelay: 5000, // 재연결 시도

      onConnect: () => {
        console.log('STOMP 연결됨');
        set({ isConnected: true });
      },

      onDisconnect: () => {
        console.log('STOMP 연결 끊김');
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
}));
