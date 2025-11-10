import styles from "./Row.module.css";

type Prop = {
  children?: React.ReactNode;
}

function Row({ children }: Prop) {
  return (
    <div className={styles.row}>
      {children}
    </div>
  )
}

export default Row;