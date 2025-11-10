import styles from "./Input.module.css";

type Prop = {
  value?: string;
  placeholder?: string;
}

function Input({value, placeholder}: Prop) {
  return (
    <input 
      name="input" 
      className={styles.input} 
      value={value}
      placeholder={placeholder}
    />
  )
}

export default Input;