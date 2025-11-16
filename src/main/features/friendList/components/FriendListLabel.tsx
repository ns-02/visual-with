import React from "react";
import styles from './FriendListLabel.module.css';

interface Props {
  text?: string;
  count?: number;
  children?: React.ReactNode;
}

const FriendListLabel = ({ text, count, children }: Props) => {
  return (
    <div className={styles.label}>
      {children}
      <span>{text}</span>
      <span className={styles.count}>{count}</span>
    </div>
  )
}

export default FriendListLabel;