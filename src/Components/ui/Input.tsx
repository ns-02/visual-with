import { Dispatch, KeyboardEvent, SetStateAction, useEffect, useState } from "react";
import "./Input.css"
import { debounce } from "../../utils/debounce";

type Prop = {
  setChat: Dispatch<SetStateAction<string>>;
  onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
  clearId: number;
}

function Input({ setChat, onKeyDown, clearId }: Prop) {
  const [ localValue, setLocalValue ] = useState("");
  const debounced = debounce(setChat, 250);

  useEffect(() => {
    console.log("리셋 신호 보냄!");
    setLocalValue("");
  }, [clearId]);

  return (
    <div className="input-container">
      <input
        className="input-content"
        placeholder="채팅 입력"
        value={localValue}
        onChange={(e) => {
          setLocalValue(e.target.value);
          debounced(e.target.value);
        }}
        onKeyDown={(e) => onKeyDown(e)}
      />
    </div>
    
  )
}

export default Input;