import { ContentButton } from '@components/ui';
import { ScheduleCardProps } from '..';
import styles from './ScheduleCard.module.css';
import { EllipsisVertical } from 'lucide-react';
import ScheduleDropdown from './ScheduleDropdown';

const ScheduleCard = ({ title, date, time, state }: ScheduleCardProps) => {
  const triggerElement = (
    <ContentButton>
      <EllipsisVertical size={16} />
    </ContentButton>
  );

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
        <ScheduleDropdown triggerElement={triggerElement} />
      </div>
    </div>
  );
};

export default ScheduleCard;
