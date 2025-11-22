import { Dispatch, KeyboardEvent, SetStateAction, useEffect, useRef, useState } from "react";
import { debounce } from "../../utils/debounce";
import styles from "./Input.module.css"

type SizeMode = 'fixed' | 'flexible'

type Prop = {
  placeholder?: string;
  sizeMode: SizeMode;
  name?: string;
  setChat?: Dispatch<SetStateAction<string>>;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  clearId?: number;
  children?: React.ReactNode;
}

function Input({ placeholder, sizeMode, name, setChat, onKeyDown, clearId, children }: Prop) {
  const containerStyle = `${styles.container} ${(styles as any)[`container--${sizeMode}`]}`;
  const inputStyle = `${styles.input} ${(styles as any)[`input--${sizeMode}`]}`;
  const [ localValue, setLocalValue ] = useState("");
  const debouncedRef = useRef((value: any) => {});

  if (setChat) {
    useEffect(() => {
      debouncedRef.current = debounce(setChat, 300);
    }, []);
  }
  
  if (clearId) {
    useEffect(() => {
      setLocalValue("");
    }, [clearId]);
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (onKeyDown) onKeyDown(e);
  }

  return (
    <div className={containerStyle}>
      {children}
      <input
        className={inputStyle}
        name={name ?? "input"}
        placeholder={placeholder}
        value={localValue}
        onChange={(e) => {
          setLocalValue(e.target.value);
          debouncedRef.current(e.target.value);
        }}
        onKeyDown={handleKeyDown}
      />
    </div>
    
  )
}

export default Input;