import { Dispatch, KeyboardEvent, SetStateAction } from "react";
import "./Input.css"
import { debounce } from "../../utils/debounce";

type Prop = {
  chat: string;
  setChat: Dispatch<SetStateAction<string>>;
  onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
}

function Input({ chat, setChat, onKeyDown }: Prop) {
  const debounced = debounce(setChat, 250);

  return (
    <div className="input-container">
      <input
        className="input-content"
        placeholder="채팅 입력"
        onChange={(e) => {
          debounced(e.target.value);
        }}
        onKeyDown={(e) => onKeyDown(e)}
      />
    </div>
    
  )
}

export default Input;