import { Check, X } from 'lucide-react';
import Button from '@shared/components/Button';
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
          <p className='text_sec_100'>{description}</p>
        </div>
      </div>
      <div className='common_card_nav'>
        <Button text='수락' className='bg_blue_400' onClick={onAccept}>
          <Check size={16} />
        </Button>
        <Button text='거절' className='bg_blue_200' onClick={onReject}>
          <X size={16} />
        </Button>
      </div>
    </div>
  );
};

export default FriendRequestCard;
