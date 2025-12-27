import { User, UserPlus } from 'lucide-react';
import { FriendData } from '@shared/models/Friend';
import { useFriend } from '@core/context/FriendContext';
import FriendListCard from '../ui/FriendListCard';
import FriendRequestCard from '../ui/FriendRequestCard';
import FriendListLabel from '../ui/FriendListLabel';
import styles from './FriendListLayout.module.css';
import { useEffect } from 'react';
import { futureRequestDataMocks } from '@mocks/FriendDataMocks';

let isInit = false;

function FriendContents() {
  const { friendData, setFriendData, friendRequestData, setFriendRequestData } =
    useFriend();

  useEffect(() => {
    if (isInit) return;
    setTimeout(() => {
      handleRequested();
      isInit = true;
    }, 3000);
  }, []);

  const handleRequested = () => {
    // 요청받는 로직
    const newFriendData = futureRequestDataMocks.shift();
    if (!newFriendData) return;

    const nextFriendRequestData = friendRequestData && [
      ...friendRequestData,
      newFriendData,
    ];

    setFriendRequestData(nextFriendRequestData);
  };

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
