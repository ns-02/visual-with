import { ScheduleCardProps } from '../types';
import styles from './ScheduleCard.module.css';

const ScheduleCard = ({ title, date, time, state }: ScheduleCardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.info_contents}>
        <p>{title}</p>
        <div className={styles.datetime}>
          <span style={{ fontSize: '15px', color: '#555' }}>{date}</span>
          <span style={{ fontSize: '15px', color: '#555' }}>{time}</span>
        </div>
      </div>
      <div className={styles.state}>
        <label className={styles.label}>{state}</label>
      </div>
    </div>
  );
};

export default ScheduleCard;
