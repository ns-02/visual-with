import { useChatThread } from '@shared/domain/chat/useChatThread';

import getMaxId from '@shared/utils/getMaxId';
import { getItem, setItem } from '@shared/utils/sessionStorage';
import { useEffect, useState } from 'react';
import { teamChatMockFactories } from '@mocks/TeamChatMocks';
import { useUserStore } from '@core/store/useUserStore';
import { useWorkspaceParams } from '@core/hooks/useWorkspaceParams';
import { ChatData } from '@shared/models/Workspace';

export const useTeamChatThread = () => {
  const { teamId } = useWorkspaceParams();

  const userId = useUserStore((state) => state.user?.id);
  const userName = useUserStore((state) => state.user?.name);
  const [allChat, setAllChat] = useState<ChatData[]>([]);
  const [currentId, setCurrentId] = useState(1);

  useEffect(() => {
    if (!teamId) return;

    const storageKey = `teamChats_${teamId}`;
    let stored = getItem(storageKey, '') || [];

    const createMocks = teamChatMockFactories[teamId];
    if (Array.isArray(stored) && stored.length === 0 && createMocks) {
      const seeded = createMocks({ userId, userName });
      setItem(storageKey, JSON.stringify(seeded));
      stored = seeded;
    }

    const nextAllChat: ChatData[] = stored.map((chat: ChatData) => ({
      ...chat,
      isMe: chat.authorId === userId,
    }));

    setAllChat(nextAllChat);

    const maxId = getMaxId(nextAllChat);
    setCurrentId(maxId + 1);
  }, [teamId, userId, userName]);

  const { handleSend } = useChatThread(
    allChat,
    setAllChat,
    currentId,
    setCurrentId,
    `teamChats_${teamId}`,
  );

  const handleTeamChatSend = (chatToSend: string) => {
    if (!teamId) return;
    handleSend(chatToSend);
  };

  return { allChat, handleTeamChatSend };
};
