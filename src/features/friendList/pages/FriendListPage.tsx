import { ReactNode } from 'react';
import { Check, User, UserPlus, X } from 'lucide-react';
import styles from './FriendListLayout.module.css';
import { useFriendStore } from '../store/useFriendStore';
import { Avatar, Button, InfoCard, DropdownTrigger } from '@shared/components';
import FriendListDropdown from '../components/FriendListDropdown';

function FriendListPage() {
  const friendData = useFriendStore((state) => state.friendData);
  const friendRequestData = useFriendStore((state) => state.friendRequestData);
  const handleAccept = useFriendStore((state) => state.acceptFriend);
  const handleReject = useFriendStore((state) => state.rejectFriend);

  return (
    <div className={styles.friend_list_root}>
      <div className={styles.contents}>
        <FriendListLabel text='친구 요청' count={friendRequestData?.length}>
          <UserPlus size={16} />
        </FriendListLabel>

        <div className='card_list'>
          {friendRequestData?.map((item) => {
            return (
              <InfoCard
                key={item.id}
                title={item.name}
                content={item.description}
                iconElement={<Avatar />}
              >
                <Button
                  text='수락'
                  className='bg_blue_400'
                  onClick={() => handleAccept(item)}
                >
                  <Check size={16} />
                </Button>
                <Button
                  text='거절'
                  className='bg_blue_200'
                  onClick={() => handleReject(item)}
                >
                  <X size={16} />
                </Button>
              </InfoCard>
            );
          })}
        </div>

        <FriendListLabel text='친구 목록' count={friendData?.length}>
          <User size={16} />
        </FriendListLabel>

        <div className='card_list'>
          {friendData?.map((item) => {
            return (
              <InfoCard
                key={item.id}
                title={item.name}
                content={item.description}
                iconElement={<Avatar />}
              >
                <FriendListDropdown
                  friendId={item.id}
                  triggerElement={<DropdownTrigger />}
                />
              </InfoCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const FriendListLabel = ({
  text,
  count,
  children,
}: {
  text?: string;
  count?: number;
  children?: ReactNode;
}) => {
  if (text === '친구 요청' && !count) {
    return null;
  }

  return (
    <div className='common_card_label'>
      {children}
      <span>{text}</span>
      <span className='text_sec_200'>{count}</span>
    </div>
  );
};

export default FriendListPage;
