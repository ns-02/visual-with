import useChatThread from '@shared/chat/useChatThread';
import { ChatItem } from '@shared/models/Chat';
import getMaxId from '@shared/utils/getMaxId';
import { getItem } from '@shared/utils/sessionStorage';
import { useEffect, useState } from 'react';

const useTeamChatThread = (id: string | undefined) => {
  const [allChat, setAllChat] = useState<ChatItem[]>([]);
  const [currentId, setCurrentId] = useState(1);

  useEffect(() => {
    if (!id) return;

    const nextAllChat = getItem(`teamChats_${id || ''}`, '') || [];
    setAllChat(nextAllChat);

    const maxId = getMaxId(nextAllChat);
    setCurrentId(maxId + 1);
  }, [id]);

  const { handleSend } = useChatThread(
    allChat,
    setAllChat,
    currentId,
    setCurrentId,
    `teamChats_${id || ''}`,
  );

  const handleTeamChatSend = (chatToSend: string) => {
    if (!id) return;
    handleSend(chatToSend);
  };

  return { allChat, handleTeamChatSend };
};

export default useTeamChatThread;
