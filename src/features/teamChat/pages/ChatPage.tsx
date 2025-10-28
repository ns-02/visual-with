import { useState } from "react";
import ChatContents from "../section/ChatContents";
import ChatBottom from "../section/ChatBottom";
import './ChatPage.css'
import { getItem, setItem } from "../../../utils/sessionStorage";

function ChatPage() {
  const initialState = getItem('teamChats', "");

  const [ allChat, setAllChat ] = useState(initialState);
  const [ chat, setChat ] = useState("");

  // 채팅을 입력할 때마다 ChatPage()가 계속 재랜더링됨

  const onSend = () => {
    let today = new Date();
    let time = (today.toLocaleTimeString() + "");

    let nextAllChat = `${allChat}${chat}\n [ ${time.slice(0, time.length - 3)} ]\n`;

    setItem('teamChats', JSON.stringify(nextAllChat));
    setAllChat(nextAllChat);
    setChat("");    
  };

  return (
    <div className="chat-frame">
      <ChatContents allChat={allChat}></ChatContents>
      <ChatBottom
        chat={chat}
        setChat={setChat}
        onClick2={onSend}
        onKeyDown={(e) => e.key === 'Enter' && onSend()}
      />
    </div>
  )
}

export default ChatPage;
