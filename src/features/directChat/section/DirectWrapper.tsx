import './Section.css'

function DirectWrapper() {
  return (
    <div className="direct-wrapper">
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

export default DirectWrapper;