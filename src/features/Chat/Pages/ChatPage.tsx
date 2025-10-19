import ChatContents from "../Components/ChatContents";
import ChatWrapper from "../Components/ChatWrapper";
import './ChatPage.css'

type Prop = {
  children: React.ReactNode;
}

function ChatPage({ children }: Prop) {
  return (
    <div className="chat-frame">
      {children}
      <ChatContents></ChatContents>
      <ChatWrapper></ChatWrapper>
    </div>
  )
}

export default ChatPage;
