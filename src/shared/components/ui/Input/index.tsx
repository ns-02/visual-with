import { Dispatch, KeyboardEvent, SetStateAction } from 'react';
import styles from './Input.module.css';

type SizeMode = 'fixed' | 'flexible';

interface InputProps {
  className?: string;
  value: string;
  placeholder?: string;
  sizeMode: SizeMode;
  name?: string;
  setChat?: Dispatch<SetStateAction<string>>;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  clearId?: number;
  children?: React.ReactNode;
}

function Input({
  className,
  value,
  placeholder,
  sizeMode,
  name,
  setChat,
  onKeyDown,
  children,
}: InputProps) {
  const containerStyle = `${styles.container} ${(styles as any)[`container--${sizeMode}`]} ${className}`;
  const inputStyle = `${styles.input} ${(styles as any)[`input--${sizeMode}`]}`;

  return (
    <div className={containerStyle}>
      {children}
      <input
        className={inputStyle}
        name={name ?? 'input'}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setChat && setChat(e.target.value)}
        onKeyDown={(e) => onKeyDown && onKeyDown(e)}
      />
    </div>
  );
}

export default Input;
