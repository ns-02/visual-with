import styles from "./Field.module.css";

type Prop = {
  label?: string;
  input?: string;
}

const Field = ({ label, input }: Prop) => {
  return (
    <div className={styles.field}>
      <label className={styles.label}>{label}</label>
      <input className={styles.input} name="input" placeholder={input} />
    </div>
  )
}

export default Field;