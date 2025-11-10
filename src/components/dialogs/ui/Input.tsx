import styles from "./Input.module.css";

type Prop = {
  type?: string;
  value?: string;
  placeholder?: string;
  readOnly?: boolean;
}

function Input({type, value, placeholder, readOnly}: Prop) {
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