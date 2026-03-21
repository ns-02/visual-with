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
  const containerKey = `container--${sizeMode}` as keyof typeof styles;
  const inputKey = `input--${sizeMode}` as keyof typeof styles;
  const containerStyle = `${styles.container} ${styles[containerKey]} ${className ?? ''}`;
  const inputStyle = `${styles.input} ${styles[inputKey]}`;

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
