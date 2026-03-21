import type { ReactNode } from 'react';
import styles from './ScheduleLayout.module.css';

type Prop = {
  children: ReactNode;
};

function ScheduleRoot({ children }: Prop) {
  return <div className={styles.schedule_root}>{children}</div>;
}

export default ScheduleRoot;
