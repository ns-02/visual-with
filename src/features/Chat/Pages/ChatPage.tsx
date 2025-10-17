import Header from "../../../layouts/Header";
import ChatContents from "../components/ChatContents";
import ChatWrapper from "../components/ChatWrapper";
import './ChatPage.css'

function ChatPage() {
  return (
    <div className="chatframe">
      <Header></Header>
      <ChatContents></ChatContents>
      <ChatWrapper></ChatWrapper>
    </div>
  )
}

export default ChatPage;
