import { useState } from 'react';
import DirectChatBottom from '../section/DirectChatBottom';
import LeftFriends from '../section/LeftFriends';
import RightChats from '../section/RightChats';
import ChatView from '../../../../components/ChatView';
import { getItem, setItem } from '../../../../utils/sessionStorage';
import styles from './DirectChatPage.module.css'
import { ChatItem } from '../../../../types/Chat';

function DirectChatPage() {
  const initChats: ChatItem[] = getItem('directChats', "") || [];
  
  const [ allChat, setAllChat ] = useState(initChats);
  const [ chat, setChat ] = useState("");
  const [ clearId, setClearId ] = useState(1);

  const handleFriendSelect = (id: number) => {
    if (id === 1) {
      setAllChat([
        { chat: "안녕하세요. 저는 김철수입니다.", time: "오후 10:43" }
      ]);
    } else if (id === 2) {
      setAllChat([
        { chat: "반가워요! 이영희라고 해요.", time: "오후 10:51" }
      ]);
    } else if (id === 3) {
      setAllChat([
        { chat: "제 소개가 늦었네요. 전 박영수고, 영수라고 불러주세요.", time: "오후 11:13" },
        { chat: "앞으로 잘 부탁해요.", time: "오후 11:14" },
      ]);
    }
    
  };

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
      <LeftFriends onSelect={handleFriendSelect} />
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
