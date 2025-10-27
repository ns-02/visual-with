import './Section.css'

type Prop = {
  allChat: string;
}

function ChatContents({ allChat }: Prop) {
  const chats = allChat.split('\n');
  return (
    <div className="chat-container">
      <div className="chat-contents">
        {
          chats.map((chat, index) => {
            return <p key={index}>{chat}</p>
          })
        }
      </div>
    </div>
    
  )
}

export default ChatContents;