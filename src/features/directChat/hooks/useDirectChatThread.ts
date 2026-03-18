import { FriendIdChatMap, useFriend, useUser } from '@core/contexts';
import useChatThread from '@shared/chat/useChatThread';
import { ChatItem } from '@shared/models/Chat';
import getMaxId from '@shared/utils/getMaxId';
import { getItem } from '@shared/utils/sessionStorage';
import { useEffect, useState } from 'react';

const useDirectChatThread = () => {
  const { selectFriendData, setFriendIdChatMap } = useFriend();
  const { userId } = useUser();
  const [allChat, setAllChat] = useState<ChatItem[]>([]);
  const [currentId, setCurrentId] = useState(1);

  useEffect(() => {
    if (!selectFriendData?.id) return;

    const stored =
      getItem(`directChats_${selectFriendData?.id || ''}`, '') || [];

    const nextAllChat: ChatItem[] = stored.map((chat: ChatItem) => ({
      ...chat,
      isMe: chat.authorId === userId,
    }));

    setAllChat(nextAllChat);

    const maxId = getMaxId(nextAllChat);
    setCurrentId(maxId + 1);
  }, [selectFriendData?.id]);

  const { handleSend } = useChatThread(
    allChat,
    setAllChat,
    currentId,
    setCurrentId,
    `directChats_${selectFriendData?.id || ''}`,
  );

  const handleDirectChatSend = (chatToSend: string) => {
    if (!selectFriendData?.id) return;
    handleSend(chatToSend);
    handleAddLastChat(selectFriendData?.id, chatToSend);
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
