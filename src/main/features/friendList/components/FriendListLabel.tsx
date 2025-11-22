import { FriendListLabelProps } from "../types";
import styles from './FriendListLabel.module.css';

const FriendListLabel = ({ text, count, children }: FriendListLabelProps) => {
  return (
    <div className={styles.label}>
      {children}
      <span>{text}</span>
      <span className={styles.count}>{count}</span>
    </div>
  )
}

export default FriendListLabel;