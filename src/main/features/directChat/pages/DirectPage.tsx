import { useState } from 'react';
import DirectBottom from '../section/DirectBottom';
import LeftFriends from '../section/LeftFriends';
import RightChats from '../section/RightChats';
import ChatView from '../../../../components/ChatView';
import { getItem, setItem } from '../../../../utils/sessionStorage';
import styles from './DirectPage.module.css'

interface ChatItem {
  chat: string,
  time: string,
}

function DirectPage() {
  const initChats: ChatItem[] = getItem('directChats', "") || [];
  
  const [ allChat, setAllChat ] = useState(initChats);
  const [ chat, setChat ] = useState("");
  const [ clearId, setClearId ] = useState(1);

  const onSend = () => {
    if (!chat) {
      return;
    }

    let today = new Date();
    let time = (today.toLocaleTimeString().slice(0, -3));

    const nextChat: ChatItem[] = [
      ...allChat, { chat, time }
    ];

    setItem('directChats', JSON.stringify(nextChat));
    setAllChat(nextChat);
    setChat("");
    reset();
  };

  const reset = () => {
    setClearId(clearId + 1);
  }

  return (
    <div className={styles.page}>
      <LeftFriends></LeftFriends>
      <RightChats>
        <div className={styles.container}>
          <ChatView allChat={allChat} />
        </div>
        <DirectBottom
          setChat={setChat}
          onClick={onSend}
          onKeyDown={(e) => e.key === 'Enter' && onSend()}
          clearId={clearId}
        />
      </RightChats>
    </div>
  )
}

export default DirectPage;
