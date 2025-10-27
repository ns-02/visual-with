import { Dispatch, KeyboardEvent, SetStateAction } from "react";
import "./Input.css"

type Prop = {
  chat: string;
  setChat: Dispatch<SetStateAction<string>>;
  onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
}

function Input({ chat, setChat, onKeyDown }: Prop) {
  return (
    <div className="input-container">
      <input
        className="input-content"
        placeholder="채팅 입력"
        value={chat}
        onChange={(e) => setChat(e.target.value)}
        onKeyDown={(e) => onKeyDown(e)}
      />
    </div>
    
  )
}

export default Input;