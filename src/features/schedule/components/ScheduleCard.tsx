import { Button } from '@shared/components';
import styles from './ScheduleUI.module.css';
import { EllipsisVertical } from 'lucide-react';
import ScheduleDropdown from './ScheduleDropdown';

interface ScheduleCardProps {
  id?: number;
  title?: string;
  authorId?: string;
  authorName?: string;
  date?: string;
  time?: string;
  state?: string;
}

const ScheduleCard = ({
  id,
  title,
  authorId,
  authorName,
  date,
  time,
}: ScheduleCardProps) => {
  const triggerElement = (
    <Button variant='content'>
      <EllipsisVertical size={16} />
    </Button>
  );

  return (
    <div className={styles.container}>
      <div className={styles.info_contents}>
        <p>{title}</p>
        <div className={styles.info_sub_text}>
          <span>{authorName}</span>
          <span>{date}</span>
          <span>{time}</span>
        </div>
      </div>
      <div className={styles.navigation}>
        <ScheduleDropdown
          scheduleId={id}
          authorId={authorId}
          triggerElement={triggerElement}
        />
      </div>
    </div>
  );
};

export default ScheduleCard;
