import styles from "./Field.module.css";

const Field = () => {
  return (
    <div className={styles.field}>
      <label className={styles.label}>라벨</label>
      <input className={styles.input} name="input" placeholder="입력" />
    </div>
  )
}

export default Field;