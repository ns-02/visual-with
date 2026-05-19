import { EllipsisVertical } from 'lucide-react';
import { Button } from '@shared/components';
import FriendListDropdown from './FriendListDropdown';
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
    <div className='common_card'>
      <div className='common_card_info'>
        <Avatar />
        <div>
          <p>{name}</p>
          <p className='text_sec_100'>{description}</p>
        </div>
      </div>
      <div className='common_card_nav'>
        <FriendListDropdown friendId={id} triggerElement={triggerElement} />
      </div>
    </div>
  );
};

export default FriendListCard;
