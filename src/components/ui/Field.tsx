import FieldProps from "./FieldProps";
import styles from "./Field.module.css";

const Field = ({ label, input }: FieldProps) => {
  return (
    <div className={styles.field}>
      <label className={styles.label}>{label}</label>
      <input className={styles.input} name="input" placeholder={input} />
    </div>
  )
}

export default Field;