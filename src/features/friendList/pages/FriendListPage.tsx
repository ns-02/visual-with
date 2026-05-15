import { ReactNode } from 'react';
import { User, UserPlus } from 'lucide-react';
import styles from './FriendListLayout.module.css';
import FriendRequestCard from '../components/FriendRequestCard';
import FriendListCard from '../components/FriendListCard';
import { useFriendStore } from '../store/useFriendStore';

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

        {friendRequestData?.map((item) => {
          return (
            <FriendRequestCard
              key={item.id}
              name={item.name}
              description={item.description}
              onAccept={() => handleAccept(item)}
              onReject={() => handleReject(item)}
            />
          );
        })}

        <FriendListLabel text='친구 목록' count={friendData?.length}>
          <User size={16} />
        </FriendListLabel>

        {friendData?.map((item) => {
          return (
            <FriendListCard
              key={item.id}
              id={item.id}
              name={item.name}
              description={item.description}
            />
          );
        })}
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
