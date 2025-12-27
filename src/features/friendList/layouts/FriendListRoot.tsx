import React from 'react';
import styles from './FriendListLayout.module.css';

type Prop = {
  children: React.ReactNode;
};

function FriendListRoot({ children }: Prop) {
  return <div className={styles.friend_list_root}>{children}</div>;
}

export default FriendListRoot;
