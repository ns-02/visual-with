import { Check, X } from 'lucide-react';
import Button from '@shared/components/ui/Button';
import styles from './FriendRequestCard.module.css';
import Avatar from '@shared/components/ui/Avatar';

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
    <div className={styles.container}>
      <div className={styles.info_contents}>
        <Avatar />
        <div>
          <p>{name}</p>
          <p style={{ fontSize: '15px', color: '#555' }}>{description}</p>
        </div>
      </div>
      <div className={styles.navigation}>
        <Button
          text='수락'
          className={styles.button_secondary_600}
          onCustomClick={onAccept}
        >
          <Check size={16} />
        </Button>
        <Button
          text='거절'
          className={styles.button_secondary_400}
          onCustomClick={onReject}
        >
          <X size={16} />
        </Button>
      </div>
    </div>
  );
};

export default FriendRequestCard;
