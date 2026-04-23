import { EllipsisVertical } from 'lucide-react';
import { Button } from '@shared/components';
import FriendListDropdown from './FriendListDropdown';
import styles from './FriendListUI.module.css';
import Avatar from '@shared/components/Avatar';

interface FriendListCardProps {
  id?: string;
  name?: string;
  description?: string;
}

const FriendListCard = ({ id, name, description }: FriendListCardProps) => {
  const triggerElement = (
    <Button variant='content'>
      <EllipsisVertical size={16} />
    </Button>
  );

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
        <FriendListDropdown friendId={id} triggerElement={triggerElement} />
      </div>
    </div>
  );
};

export default FriendListCard;
