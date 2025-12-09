import { ChangeEvent } from 'react';
import styles from './DialogInput.module.css';

interface InputProps {
  type?: string;
  value?: string;
  setValue?: (value: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  readOnly?: boolean;
}

function Input({ type, value, setValue, placeholder, readOnly }: InputProps) {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (setValue) setValue(e);
  };

  return (
    <input
      type={type}
      name='input'
      className={styles.input}
      value={value}
      onChange={handleInputChange}
      placeholder={placeholder}
      readOnly={readOnly}
    />
  );
}

export default Input;
