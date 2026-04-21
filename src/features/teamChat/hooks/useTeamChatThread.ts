import { useChatThread } from '@shared/domain/chat/useChatThread';
import { ChatItem } from '@shared/models/Chat';
import getMaxId from '@shared/utils/getMaxId';
import { getItem, setItem } from '@shared/utils/sessionStorage';
import { useEffect, useState } from 'react';
import { teamChatMockFactories } from '@mocks/TeamChatMocks';
import { useUserStore } from '@core/store/useUserStore';
import { useTeamStore } from '@core/store/useTeamStore';

export const useTeamChatThread = () => {
  const selectTeamId = useTeamStore((state) => state.selectTeamId);

  const userId = useUserStore((state) => state.userId);
  const userName = useUserStore((state) => state.userName);
  const [allChat, setAllChat] = useState<ChatItem[]>([]);
  const [currentId, setCurrentId] = useState(1);

  useEffect(() => {
    if (!selectTeamId) return;

    const storageKey = `teamChats_${selectTeamId}`;
    let stored = getItem(storageKey, '') || [];

    const createMocks = teamChatMockFactories[selectTeamId];
    if (Array.isArray(stored) && stored.length === 0 && createMocks) {
      const seeded = createMocks({ userId, userName });
      setItem(storageKey, JSON.stringify(seeded));
      stored = seeded;
    }

    const nextAllChat: ChatItem[] = stored.map((chat: ChatItem) => ({
      ...chat,
      isMe: chat.authorId === userId,
    }));

    setAllChat(nextAllChat);

    const maxId = getMaxId(nextAllChat);
    setCurrentId(maxId + 1);
  }, [selectTeamId, userId, userName]);

  const { handleSend } = useChatThread(
    allChat,
    setAllChat,
    currentId,
    setCurrentId,
    `teamChats_${selectTeamId}`,
  );

  const handleTeamChatSend = (chatToSend: string) => {
    if (!selectTeamId) return;
    handleSend(chatToSend);
  };

  return { allChat, handleTeamChatSend };
};
