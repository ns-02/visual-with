import { Prop } from "./DialogUI";
import styles from "./Group.module.css";

function Group({ children }: Prop) {
  return (
    <div className={styles.group}>
      {children}
    </div>
  )
}

export default Group;