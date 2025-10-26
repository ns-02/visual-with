import { Dispatch, SetStateAction } from "react";
import "./Input.css"

type Prop = {
  chat: string;
  setChat: Dispatch<SetStateAction<string>>;
}

function Input({ chat, setChat }: Prop) {
  return (
    <div className="input-container">
      <input
        className="input-content"
        placeholder="채팅 입력"
        value={chat}
        onChange={(e) => setChat(e.target.value)}
      />
    </div>
    
  )
}

export default Input;