import { User, UserPlus } from 'lucide-react';
import FriendListCard from '../ui/FriendListCard';
import FriendRequestCard from '../ui/FriendRequestCard';
import FriendListLabel from '../ui/FriendListLabel';
import styles from './FriendListLayout.module.css';
import { useEffect } from 'react';
import { useFriendStore } from '../store/useFriendStore';

let isInit = false;

function FriendContents() {
  const friendData = useFriendStore((state) => state.friends);
  const friendRequestData = useFriendStore((state) => state.friendRequests);
  const requestedFriend = useFriendStore((state) => state.requestedFriend);
  const handleAccept = useFriendStore((state) => state.acceptFriend);
  const handleReject = useFriendStore((state) => state.rejectFriend);

  useEffect(() => {
    if (isInit) return;
    setTimeout(() => {
      requestedFriend();
      isInit = true;
    }, 3000);
  }, []);

  return (
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
  );
}

export default FriendContents;
