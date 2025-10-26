import { useState } from "react";
import ChatContents from "../section/ChatContents";
import ChatWrapper from "../section/ChatWrapper";
import './ChatPage.css'

function ChatPage() {
  const [ allChat, setAllChat ] = useState("");
  const [ chat, setChat ] = useState("");

  return (
    <div className="chat-frame">
      <ChatContents allChat={allChat}></ChatContents>
      <ChatWrapper
        chat={chat}
        setChat={setChat}
        onSend={() => {
          setAllChat(`${allChat}${chat}\n`);
          setChat("");
        }}
      />
    </div>
  )
}

export default ChatPage;
