import Header from "../../../Layouts/Header";
import ChatContents from "../Components/ChatContents";
import ChatWrapper from "../Components/ChatWrapper";
import './ChatPage.css'

function ChatPage() {
  return (
    <div className="chat-frame">
      <Header></Header>
      <ChatContents></ChatContents>
      <ChatWrapper></ChatWrapper>
    </div>
  )
}

export default ChatPage;
