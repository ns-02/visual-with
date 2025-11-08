import { Dispatch, KeyboardEvent, SetStateAction, useEffect, useRef, useState } from "react";
import { Plus } from "lucide-react";
import { debounce } from "../../utils/debounce";
import { IconSize } from "./Button";
import styles from "./Input.module.css"

type SizeMode = 'fixed' | 'flexible'

type Prop = {
  placeholder?: string;
  sizeMode: SizeMode;
  icon?: typeof Plus;
  iconSize?: IconSize;
  setChat?: Dispatch<SetStateAction<string>>;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  clearId?: number;
}

function Input({ placeholder, sizeMode, icon: Icon, iconSize, setChat, onKeyDown, clearId }: Prop) {
  const containerStyle = `${styles.container} ${(styles as any)[`container--${sizeMode}`]}`;
  const inputStyle = `${styles.input} ${(styles as any)[`input--${sizeMode}`]}`;
  const iconStyle = (Icon && iconSize) ? `${(styles as any)[`icon--size-${iconSize}`]}` : undefined;
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

  const handleKeyDown = () => {
    if (onKeyDown) (e: KeyboardEvent<HTMLInputElement>) => onKeyDown(e);
  }

  return (
    <div className={containerStyle}>
      {Icon && <Icon className={iconStyle} />}
      <input
        className={inputStyle}
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