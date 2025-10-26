import './Section.css'

type Prop = {
  allChat: string;
}

function ChatContents({ allChat }: Prop) {
  const chats = allChat.split('\n');
  return (
    <div className="chat-contents">
      {
        chats.map((chat) => {
          return <p>{chat}</p>
        })
      }
    </div>
  )
}

export default ChatContents;