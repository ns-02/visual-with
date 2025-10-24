import ChatContents from "../section/ChatContents";
import ChatWrapper from "../section/ChatWrapper";
import './ChatPage.css'

function ChatPage() {
  return (
    <div className="chat-frame">
      <ChatContents></ChatContents>
      <ChatWrapper></ChatWrapper>
    </div>
  )
}

export default ChatPage;
