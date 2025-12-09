import React from 'react';
import styles from './ScheduleLayout.module.css';

type Prop = {
  children: React.ReactNode;
};

function ScheduleRoot({ children }: Prop) {
  return <div className={styles.schedule_root}>{children}</div>;
}

export default ScheduleRoot;
