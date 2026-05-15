import { Check, X } from 'lucide-react';
import Button from '@shared/components/Button';
import styles from './FriendListUI.module.css';
import Avatar from '@shared/components/Avatar';

interface FriendRequestCardProps {
  name?: string;
  description?: string;
  onAccept?: () => void;
  onReject?: () => void;
}

const FriendRequestCard = ({
  name,
  description,
  onAccept,
  onReject,
}: FriendRequestCardProps) => {
  return (
    <div className='common_card'>
      <div className='common_card_info'>
        <Avatar />
        <div>
          <p>{name}</p>
          <p className={styles.info_sub_text}>{description}</p>
        </div>
      </div>
      <div className={styles.navigation}>
        <Button
          text='수락'
          className={styles.button_secondary_600}
          onClick={onAccept}
        >
          <Check size={16} />
        </Button>
        <Button
          text='거절'
          className={styles.button_secondary_400}
          onClick={onReject}
        >
          <X size={16} />
        </Button>
      </div>
    </div>
  );
};

export default FriendRequestCard;
