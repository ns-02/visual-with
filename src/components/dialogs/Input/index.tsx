import { ChangeEvent } from 'react';
import { InputProps } from '..';
import styles from './Input.module.css';

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
