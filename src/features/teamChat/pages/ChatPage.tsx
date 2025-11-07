import { useState } from "react";
import ChatBottom from "../section/ChatBottom";
import ChatView from "../../../components/ChatView";
import { getItem, setItem } from "../../../utils/sessionStorage";
import styles from './ChatPage.module.css'

interface ChatItem {
  chat: string,
  time: string,
}

function ChatPage() {
  const initChats: ChatItem[] = getItem('teamChats', "") || [];

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

    setItem('teamChats', JSON.stringify(nextChat));
    setAllChat(nextChat);
    setChat("");
    reset();   
  };

  const reset = () => {
    setClearId(clearId + 1);
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <ChatView allChat={allChat} />
      </div>
      <ChatBottom
        setChat={setChat}
        onClick={onSend}
        onKeyDown={(e) => e.key === 'Enter' && onSend()}
        clearId={clearId}
      />
    </div>
  )
}

export default ChatPage;
