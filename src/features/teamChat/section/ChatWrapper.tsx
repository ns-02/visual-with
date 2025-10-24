import './Section.css'

function ChatWrapper() {
  return (
    <div className="chat-footer">
      <span className="chat-wrapper">
        <span>
          <button className="btn-01">+</button>
        </span>
        <input className="input-01" placeholder="채팅 입력"></input>
        <span>
          <button className="btn-02">전송</button>
        </span>
      </span>
    </div>
  )
}

export default ChatWrapper;