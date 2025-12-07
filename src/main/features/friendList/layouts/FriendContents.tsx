import { User, UserPlus } from 'lucide-react';
import { FriendData } from '@models/Friend';
import { useFriend } from '@context/FriendContext';
import FriendListCard from '../ui/FriendListCard';
import FriendRequestCard from '../ui/FriendRequestCard';
import FriendListLabel from '../ui/FriendListLabel';
import styles from './FriendContents.module.css';

function FriendContents() {
  const { friendData, setFriendData, friendRequestData, setFriendRequestData } =
    useFriend();

  const handleAccept = (data: FriendData) => {
    const nextFriendRequestData = friendRequestData?.filter(
      (item) => item.id !== data.id && item,
    );
    const nextFriendData = friendData && [...friendData, data];

    setFriendRequestData(nextFriendRequestData);
    setFriendData(nextFriendData);
  };

  const handleReject = (data: FriendData) => {
    const nextFriendRequestData = friendRequestData?.filter(
      (item) => item.id !== data.id && item,
    );
    setFriendRequestData(nextFriendRequestData);
  };

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
