import { Prop } from "./DialogUI";
import styles from "./Row.module.css";

function Row({ children }: Prop) {
  return (
    <div className={styles.row}>
      {children}
    </div>
  )
}

export default Row;