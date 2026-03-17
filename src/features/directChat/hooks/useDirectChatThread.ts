import { FriendIdChatMap } from '@core/contexts';
import useChatThread from '@shared/chat/useChatThread';
import { ChatItem } from '@shared/models/Chat';
import getMaxId from '@shared/utils/getMaxId';
import { getItem } from '@shared/utils/sessionStorage';
import { useEffect, useState } from 'react';

const useDirectChatThread = (
  id: string | undefined,
  setFriendIdChatMap: React.Dispatch<React.SetStateAction<FriendIdChatMap>>,
) => {
  const [allChat, setAllChat] = useState<ChatItem[]>([]);
  const [currentId, setCurrentId] = useState(1);

  useEffect(() => {
    if (!id) return;

    const nextAllChat = getItem(`directChats_${id || ''}`, '') || [];
    setAllChat(nextAllChat);

    const maxId = getMaxId(nextAllChat);
    setCurrentId(maxId + 1);
  }, [id]);

  const { handleSend } = useChatThread(
    allChat,
    setAllChat,
    currentId,
    setCurrentId,
    `directChats_${id || ''}`,
  );

  const handleDirectChatSend = (chatToSend: string) => {
    if (!id) return;
    handleSend(chatToSend);
    handleAddLastChat(id, chatToSend);
  };

  const handleAddLastChat = (id: string, chat: string) => {
    setFriendIdChatMap((prevIdChatMap: FriendIdChatMap) => {
      const nextIdChatMap = new Map(prevIdChatMap);
      nextIdChatMap.set(id, chat);
      return nextIdChatMap;
    });
  };

  return { allChat, handleDirectChatSend };
};

export default useDirectChatThread;
