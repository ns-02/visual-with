import './Section.css'

function ChatWrapper() {
  return (
    <div className="chat-wrapper">
      <span>
        <button>+</button>
      </span>
      <input placeholder="채팅 입력"></input>
      <span>
        <button>전송</button>
      </span>
    </div>
  )
}

export default ChatWrapper;