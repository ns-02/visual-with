import { useEffect, useState } from 'react';
import { ChatView } from '@components/ui';
import { useFriend } from '@context/FriendContext';
import { ChatItem } from '@models/Chat';
import { getItem, setItem } from '@utils/sessionStorage';
import getMaxId from '@utils/getMaxId';
import { DirectChatBottom, LeftFriends, RightChats } from '../';
import styles from './DirectChatPage.module.css';

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
      <LeftFriends />
      <RightChats>
        <div className={styles.container}>
          <ChatView allChat={allChat} />
        </div>
        <DirectChatBottom onSend={handleSend} />
      </RightChats>
    </div>
  );
}

export default DirectChatPage;
