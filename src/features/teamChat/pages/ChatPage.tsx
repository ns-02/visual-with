import { useState } from "react";
import ChatBottom from "../section/ChatBottom";
import { getItem, setItem } from "../../../utils/sessionStorage";
import './ChatPage.css'
import ChatView from "../../../components/ChatView";

interface ChatItem {
  chat: string,
  time: string,
}

function ChatPage() {
  const initChats: ChatItem[] = getItem('teamChats', "") || [];

  const [ allChat, setAllChat ] = useState(initChats);
  const [ chat, setChat ] = useState("");

  // 채팅을 입력할 때마다 ChatPage()가 계속 재랜더링됨
  console.log("랜더링!");

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
  };

  return (
    <div className="chat-frame">
      <div className="chat-container">
        <ChatView allChat={allChat} />
      </div>
      <ChatBottom
        chat={chat}
        setChat={setChat}
        onClick={onSend}
        onKeyDown={(e) => e.key === 'Enter' && onSend()}
      />
    </div>
  )
}

export default ChatPage;
