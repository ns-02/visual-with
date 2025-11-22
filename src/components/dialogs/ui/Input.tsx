import { InputProps } from "./DialogUI";
import styles from "./Input.module.css";

function Input({type, value, placeholder, readOnly}: InputProps) {
  return (
    <input
      type={type}
      name="input" 
      className={styles.input} 
      value={value}
      placeholder={placeholder}
      readOnly={readOnly}
    />
  )
}

export default Input;