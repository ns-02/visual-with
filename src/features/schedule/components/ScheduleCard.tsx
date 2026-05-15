import { Button } from '@shared/components';
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
    <div className='common_card'>
      <div className='common_card_info gap_4 flex_col'>
        <p>{title}</p>
        <div className='text_sec_100 d_flex gap_12'>
          <span>{authorName}</span>
          <span>{date}</span>
          <span>{time}</span>
        </div>
      </div>
      <div className='common_card_nav'>
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
