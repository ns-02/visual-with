import { ContentButton } from '@components/ui';
import { ScheduleCardProps } from '..';
import styles from './ScheduleCard.module.css';
import { EllipsisVertical } from 'lucide-react';

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
      <div className={styles.navigation}>
        <label className={styles.label}>{state}</label>
        <ContentButton>
          <EllipsisVertical size={16} />
        </ContentButton>
      </div>
    </div>
  );
};

export default ScheduleCard;
