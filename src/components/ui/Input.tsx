import { KeyboardEvent, useEffect, useRef, useState } from "react";
import { debounce } from "../../utils/debounce";
import InputProps from "./InputProps";
import styles from "./Input.module.css"

function Input({ value, placeholder, sizeMode, name, setChat, onKeyDown, children }: InputProps) {
  const containerStyle = `${styles.container} ${(styles as any)[`container--${sizeMode}`]}`;
  const inputStyle = `${styles.input} ${(styles as any)[`input--${sizeMode}`]}`;
  // const [ localValue, setLocalValue ] = useState("");
  // const debouncedRef = useRef((value: any) => {});

  // if (setChat) {
  //   useEffect(() => {
  //     debouncedRef.current = debounce(setChat, 300);
  //   }, []);
  // }
  
  // if (clearId) {
  //   useEffect(() => {
  //     setLocalValue("");
  //   }, [clearId]);
  // }

  return (
    <div className={containerStyle}>
      {children}
      <input
        className={inputStyle}
        name={name ?? "input"}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setChat && setChat(e.target.value)}
        onKeyDown={(e) => onKeyDown && onKeyDown(e)}
      />
    </div>
    
  )
}

export default Input;