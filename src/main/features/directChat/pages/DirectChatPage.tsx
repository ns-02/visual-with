import { useEffect, useState } from 'react';
import { useFriend } from '@context/FriendContext';
import { ChatItem } from '@models/Chat';
import { getItem, setItem } from '@utils/sessionStorage';
import getMaxId from '@utils/getMaxId';
import {
  BottomInputArea,
  LeftFriendsPanel,
  ChatViewPanel,
  DirectChatArea,
} from '../';

import styles from './DirectChatPage.module.css';
import RightFileListArea from '../layouts/RightFileListArea';

function DirectChatPage() {
  const { selectFriendData, setFriendIdChatMap } = useFriend();

  const initChats: ChatItem[] =
    getItem(`directChats_${selectFriendData?.id}`, '') || [];

  let maxId = getMaxId(initChats);
  const [allChat, setAllChat] = useState(initChats);
  const [currentId, setCurrentId] = useState(maxId + 1);

  useEffect(() => {
    setAllChat(initChats);
    maxId = getMaxId(initChats);
    setCurrentId(maxId + 1);
  }, [selectFriendData]);

  const handleSend = (chatToSend: string) => {
    if (!selectFriendData?.id) return;

    let today = new Date();
    let time = today.toLocaleTimeString().slice(0, -3);

    const nextChat: ChatItem[] = [
      ...allChat,
      { id: currentId, chat: chatToSend, time },
    ];

    setItem(`directChats_${selectFriendData?.id}`, JSON.stringify(nextChat));
    handleAddLastChat(selectFriendData?.id, chatToSend);
    setAllChat(nextChat);
    setCurrentId(currentId + 1);
  };

  const handleAddLastChat = (id: number, chat: string) => {
    setFriendIdChatMap((prevIdChatMap) => {
      const nextIdChatMap = new Map(prevIdChatMap);
      nextIdChatMap.set(id, chat);
      return nextIdChatMap;
    });
  };

  return (
    <div className={styles.page}>
      <LeftFriendsPanel />
      <ChatViewPanel>
        <div className={styles.container}>
          <DirectChatArea allChat={allChat} />
          <RightFileListArea />
        </div>
        <BottomInputArea onSend={handleSend} />
      </ChatViewPanel>
    </div>
  );
}

export default DirectChatPage;
