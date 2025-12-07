import { EllipsisVertical, User } from 'lucide-react';
import Button from '@components/ui/Button';
import { ContentButton } from '@components/ui';
import FriendListDropdown from './FriendListDropdown';
import styles from './FriendListCard.module.css';

interface FriendListCardProps {
  id?: number;
  name?: string;
  description?: string;
}

const FriendListCard = ({ id, name, description }: FriendListCardProps) => {
  const triggerElement = (
    <ContentButton>
      <EllipsisVertical size={16} />
    </ContentButton>
  );

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
        <FriendListDropdown friendId={id} triggerElement={triggerElement} />
      </div>
    </div>
  );
};

export default FriendListCard;
