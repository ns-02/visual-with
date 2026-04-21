import { FriendListLabelProps } from '..';
import styles from './FriendListLabel.module.css';

const FriendListLabel = ({ text, count, children }: FriendListLabelProps) => {
  if (text === '친구 요청' && !count) {
    return null;
  }

  return (
    <div className={styles.label}>
      {children}
      <span>{text}</span>
      <span className={styles.count}>{count}</span>
    </div>
  );
};

export default FriendListLabel;
