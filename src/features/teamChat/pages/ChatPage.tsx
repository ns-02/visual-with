import { useState } from "react";
import ChatContents from "../section/ChatContents";
import ChatWrapper from "../section/ChatWrapper";
import './ChatPage.css'

function ChatPage() {
  const [ allChat, setAllChat ] = useState("");
  const [ chat, setChat ] = useState("");

  const onSend = () => {
    setAllChat(`${allChat}${chat}\n`);
    setChat("");
  };

  return (
    <div className="chat-frame">
      <ChatContents allChat={allChat}></ChatContents>
      <ChatWrapper
        chat={chat}
        setChat={setChat}
        onClick2={onSend}
        onKeyDown={(e) => e.key === 'Enter' && onSend()}
      />
    </div>
  )
}

export default ChatPage;
