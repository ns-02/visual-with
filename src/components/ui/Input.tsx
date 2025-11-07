import { Dispatch, KeyboardEvent, SetStateAction, useEffect, useRef, useState } from "react";
import { debounce } from "../../utils/debounce";
import "./Input.css"

type Prop = {
  setChat: Dispatch<SetStateAction<string>>;
  onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
  clearId: number;
}

function Input({ setChat, onKeyDown, clearId }: Prop) {
  const [ localValue, setLocalValue ] = useState("");
  const debouncedRef = useRef((value: any) => {});

  useEffect(() => {
    debouncedRef.current = debounce(setChat, 300);
  }, []);

  useEffect(() => {
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
          debouncedRef.current(e.target.value);
        }}
        onKeyDown={(e) => onKeyDown(e)}
      />
    </div>
    
  )
}

export default Input;