import { ReactNode } from 'react';
import styles from './FriendListUI.module.css';

const FriendListLabel = ({
  text,
  count,
  children,
}: {
  text?: string;
  count?: number;
  children?: ReactNode;
}) => {
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
