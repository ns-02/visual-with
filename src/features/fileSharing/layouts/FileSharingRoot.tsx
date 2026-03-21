import type { ReactNode } from 'react';
import styles from './FileSharingLayout.module.css';

type Prop = {
  children: ReactNode;
};

function FileSharingRoot({ children }: Prop) {
  return <div className={styles.file_sharing_root}>{children}</div>;
}

export default FileSharingRoot;
