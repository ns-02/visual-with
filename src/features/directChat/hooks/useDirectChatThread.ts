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
  const initChats: ChatItem[] = getItem(`directChats_${id}`, '') || [];

  let maxId = getMaxId(initChats);
  const [allChat, setAllChat] = useState(initChats);
  const [currentId, setCurrentId] = useState(maxId + 1);

  useEffect(() => {
    setAllChat(initChats);
    maxId = getMaxId(initChats);
    setCurrentId(maxId + 1);
  }, [id]);

  const { handleSend } = useChatThread(
    allChat,
    setAllChat,
    currentId,
    setCurrentId,
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
