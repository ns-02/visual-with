import { EllipsisVertical } from 'lucide-react';
import { ContentButton } from '@shared/components/ui';
import FriendListDropdown from './FriendListDropdown';
import styles from './FriendListCard.module.css';
import Avatar from '@shared/components/ui/Avatar';

interface FriendListCardProps {
  id?: string;
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
