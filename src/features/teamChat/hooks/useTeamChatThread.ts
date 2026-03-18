import { useTeam, useUser } from '@core/contexts';
import useChatThread from '@shared/chat/useChatThread';
import { ChatItem } from '@shared/models/Chat';
import getMaxId from '@shared/utils/getMaxId';
import { getItem } from '@shared/utils/sessionStorage';
import { useEffect, useState } from 'react';

const useTeamChatThread = () => {
  const { selectTeamId } = useTeam();
  const { userId } = useUser();
  const [allChat, setAllChat] = useState<ChatItem[]>([]);
  const [currentId, setCurrentId] = useState(1);

  useEffect(() => {
    if (!selectTeamId) return;

    const stored = getItem(`teamChats_${selectTeamId}`, '') || [];

    const nextAllChat: ChatItem[] = stored.map((chat: ChatItem) => ({
      ...chat,
      isMe: chat.authorId === userId,
    }));

    setAllChat(nextAllChat);

    const maxId = getMaxId(nextAllChat);
    setCurrentId(maxId + 1);
  }, [selectTeamId]);

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

export default useTeamChatThread;
