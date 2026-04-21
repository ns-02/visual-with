import { useUserStore } from '@core/store/useUserStore';
import { useFriendStore } from '@features/friendList/store/useFriendStore';
import { useChatThread } from '@shared/domain/chat/useChatThread';
import getMaxId from '@shared/utils/getMaxId';
import { getItem } from '@shared/utils/sessionStorage';
import { useEffect, useState } from 'react';
import {
  FriendIdChatMap,
  useDirectChatStore,
} from '../store/useDirectChatStore';
import { ChatData } from '@shared/models/Workspace';

export const useDirectChatThread = () => {
  const selectFriendData = useFriendStore((state) => state.selectFriendData);
  const setFriendIdChatMap = useDirectChatStore(
    (state) => state.setFriendIdChatMap,
  );
  const userId = useUserStore((state) => state.user?.id);
  const [allChat, setAllChat] = useState<ChatData[]>([]);
  const [currentId, setCurrentId] = useState(1);

  useEffect(() => {
    if (!selectFriendData?.id) return;

    const stored =
      getItem(`directChats_${selectFriendData?.id || ''}`, '') || [];

    const nextAllChat: ChatData[] = stored.map((chat: ChatData) => ({
      ...chat,
      isMe: chat.authorId === userId,
    }));

    setAllChat(nextAllChat);

    const maxId = getMaxId(nextAllChat);
    setCurrentId(maxId + 1);
  }, [selectFriendData?.id, userId]);

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
