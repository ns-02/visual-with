import './Section.css'

type ChatItem = {
  chat: string;
  time: string;
};

type Props = {
  allChat: ChatItem[];
};

function ChatContents({ allChat }: Props) {
  return (
    <div className="chat-container">
      <div className="chat-contents">
        {
          allChat.map((chatItem, index) => {
            return (
              <div key={index}>
                <p>{chatItem.chat}</p>
                <p>[ {chatItem.time} ]</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ChatContents;