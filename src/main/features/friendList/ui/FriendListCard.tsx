import { EllipsisVertical, User } from 'lucide-react';
import Button from '@components/ui/Button';
import { FriendListCardProps } from '..';
import styles from './FriendListCard.module.css';

const FriendListCard = ({ name, description }: FriendListCardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.info_contents}>
        <Button shape='circle'>
          <User size={24} />
        </Button>
        <div>
          <p>{name}</p>
          <p style={{ fontSize: '15px', color: '#555' }}>{description}</p>
        </div>
      </div>
      <div className={styles.navigation}>
        <Button>
          <EllipsisVertical size={16} />
        </Button>
      </div>
    </div>
  );
};

export default FriendListCard;
