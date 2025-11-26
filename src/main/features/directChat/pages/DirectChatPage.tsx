import { useEffect, useState } from 'react';
import { useFriend } from '../../../../context/FriendContext';
import DirectChatBottom from '../section/DirectChatBottom';
import LeftFriends from '../section/LeftFriends';
import RightChats from '../section/RightChats';
import ChatView from '../../../../components/ChatView';
import { getItem, setItem } from '../../../../utils/sessionStorage';
import styles from './DirectChatPage.module.css'
import { ChatItem } from '../../../../types/Chat';
import { IdChatMap } from '../types';

function DirectChatPage() {
  const { selectFriendData, setFriendIdChatMap } = useFriend();

  const initChats: ChatItem[] = getItem(`directChats_${selectFriendData?.id}`, "") || [];
  
  const getMaxId = () => {
    return initChats.length > 0 
      ? Math.max(...initChats.map(item => item.id)) 
      : 0;
  };
  
  let maxId = getMaxId();
  const [ allChat, setAllChat ] = useState(initChats);
  const [ chat, setChat ] = useState("");
  const [ clearId, setClearId ] = useState(1);
  const [ currentId, setCurrentId ] = useState(maxId + 1);
  // const [ idChatMap, setIdChatMap ] = useState<IdChatMap>(() => new Map());

  useEffect(() => {
    setAllChat(initChats);
    maxId = getMaxId();
    setCurrentId(maxId + 1);
  }, [selectFriendData]);

  const onSend = () => {
    if (!chat || !selectFriendData?.id) {
      return;
    }

    let today = new Date();
    let time = (today.toLocaleTimeString().slice(0, -3));

    const nextChat: ChatItem[] = [
      ...allChat, { id: currentId, chat, time }
    ];

    setItem(`directChats_${selectFriendData?.id}`, JSON.stringify(nextChat));
    handleAddLastChat(selectFriendData?.id, chat);
    setAllChat(nextChat);
    setChat("");
    setCurrentId(currentId + 1);
    reset();
  };

  const handleAddLastChat = (id: number, chat: string) => {
    setFriendIdChatMap((prevIdChatMap) => {
      const nextIdChatMap = new Map(prevIdChatMap);
      nextIdChatMap.set(id, chat);
      return nextIdChatMap;
    });
  };

  const reset = () => {
    setClearId(clearId + 1);
  };

  return (
    <div className={styles.page}>
      <LeftFriends />
      <RightChats>
        <div className={styles.container}>
          <ChatView allChat={allChat} />
        </div>
        <DirectChatBottom
          setChat={setChat}
          onClick={onSend}
          onKeyDown={(e) => e.key === 'Enter' && onSend()}
          clearId={clearId}
        />
      </RightChats>
    </div>
  )
}

export default DirectChatPage;
