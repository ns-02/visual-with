import { useTeam } from '@core/contexts';
import useChatThread from '@shared/chat/useChatThread';
import { ChatItem } from '@shared/models/Chat';
import getMaxId from '@shared/utils/getMaxId';
import { getItem } from '@shared/utils/sessionStorage';
import { useEffect, useState } from 'react';

const useTeamChatThread = () => {
  const { selectTeamId } = useTeam();
  const [allChat, setAllChat] = useState<ChatItem[]>([]);
  const [currentId, setCurrentId] = useState(1);

  useEffect(() => {
    if (!selectTeamId) return;

    const nextAllChat = getItem(`teamChats_${selectTeamId}`, '') || [];
    setAllChat(nextAllChat);

    const maxId = getMaxId(nextAllChat);
    setCurrentId(maxId + 1);
  }, [selectTeamId]);

  const { handleSend, isMyMessage } = useChatThread(
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

  return { allChat, handleTeamChatSend, isMyMessage };
};

export default useTeamChatThread;
