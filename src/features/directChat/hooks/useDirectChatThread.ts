import { useUserStore } from '@core/store/useUserStore';
import { useFriendStore } from '@features/friendList/store/useFriendStore';
import { useChatThread } from '@shared/hooks/useChatThread';
import getMaxId from '@shared/utils/getMaxId';
import { getItem } from '@shared/utils/sessionStorage';
import { useEffect, useState } from 'react';
import {
  FriendIdChatMap,
  useDirectChatStore,
} from '../store/useDirectChatStore';
import { ChatData } from '@shared/models/Workspace';

export const useDirectChatThread = () => {
  const selectFriendId = useFriendStore((state) => state.selectFriendId);
  const setFriendIdChatMap = useDirectChatStore(
    (state) => state.setFriendIdChatMap,
  );
  const userId = useUserStore((state) => state.user?.id);
  const [allChat, setAllChat] = useState<ChatData[]>([]);
  const [currentId, setCurrentId] = useState(1);

  useEffect(() => {
    if (!selectFriendId) return;

    const stored = getItem(`directChats_${selectFriendId || ''}`, '') || [];

    const nextAllChat: ChatData[] = stored.map((chat: ChatData) => ({
      ...chat,
      isMe: chat.authorId === userId,
    }));

    setAllChat(nextAllChat);

    const maxId = getMaxId(nextAllChat);
    setCurrentId(maxId + 1);
  }, [selectFriendId, userId]);

  const { handleSend } = useChatThread(
    allChat,
    setAllChat,
    currentId,
    setCurrentId,
    `directChats_${selectFriendId || ''}`,
  );

  const handleDirectChatSend = (chatToSend: string) => {
    if (!selectFriendId) return;
    handleSend(chatToSend);
    handleAddLastChat(selectFriendId, chatToSend);
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
