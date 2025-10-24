import './Section.css'

function ChatWrapper() {
  return (
    <div className="chat-footer">
      <span className="chat-wrapper">
        <span>
          <button>+</button>
        </span>
        <input placeholder="채팅 입력"></input>
        <span>
          <button>전송</button>
        </span>
      </span>
    </div>
  )
}

export default ChatWrapper;