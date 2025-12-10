import React from 'react';
import styles from './FileSharingLayout.module.css';

type Prop = {
  children: React.ReactNode;
};

function FileSharingRoot({ children }: Prop) {
  return <div className={styles.file_sharing_root}>{children}</div>;
}

export default FileSharingRoot;
