import { teamChatMockFactories } from '@mocks/TeamChatMocks';
import { ChatData } from '@shared/models/Workspace';
import { formatDate } from '@shared/utils/formatDate';
import getMaxId from '@shared/utils/getMaxId';
import { create } from 'zustand';
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

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

  connectSocket: () => {
    const client = new Client({
      webSocketFactory: () => new SockJS('/ws-stomp'),
      reconnectDelay: 5000, // 재연결 시도
      onConnect: () => {
        set({ isConnected: true });
      },
      onDisconnect: () => {
        set({ isConnected: false });
      },
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
