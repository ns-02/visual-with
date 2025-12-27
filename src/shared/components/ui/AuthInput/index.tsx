import { ChangeEvent } from 'react';
import styles from './AuthInput.module.css';

interface InputProps {
  name?: string;
  type?: string;
  value?: string;
  onChange?: (value: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

function Input({ type, value, onChange, placeholder }: InputProps) {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(e);
  };

  return (
    <input
      type={type}
      name='input'
      className={styles.input}
      value={value}
      onChange={handleInputChange}
      placeholder={placeholder}
    />
  );
}

export default Input;
