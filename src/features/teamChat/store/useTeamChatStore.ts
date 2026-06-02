import { teamChatMockFactories } from '@mocks/TeamChatMocks';
import { ChatData, TeamId } from '@shared/models/Workspace';
import { formatDate } from '@shared/utils/formatDate';
import getMaxId from '@shared/utils/getMaxId';
import { create } from 'zustand';

interface TeamChatThread {
  allChat: ChatData[];
  currentId: number;
}

interface TeamChatState {
  threadsByTeamId: Map<TeamId, TeamChatThread>;
  initThread: (
    teamId: TeamId,
    userId: string | undefined,
    userName: string | undefined,
  ) => void;
  sendMessage: (
    teamId: TeamId,
    chatToSend: string,
    userId: string,
    userName: string,
  ) => void;
}

const withIsMe = (chats: ChatData[], userId: string | undefined) =>
  chats.map((chat) => ({
    ...chat,
    isMe: chat.authorId === userId,
  }));

export const useTeamChatStore = create<TeamChatState>((set) => ({
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
}));
