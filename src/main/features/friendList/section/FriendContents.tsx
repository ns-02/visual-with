import { User, UserPlus } from 'lucide-react';
import { FriendData } from '../../../../types/Friend';
import FriendListCard from '../components/FriendListCard';
import FriendRequestCard from '../components/FriendRequestCard';
import styles from './FriendListSection.module.css'
import FriendListLabel from '../components/FriendListLabel';
import { useFriend } from '../../../../context/FriendContext';
import { useState } from 'react';

function FriendContents() {
  const { friendData, setFriendData } = useFriend();

  const initFriendRequestData: FriendData[] = [
    { id: 4, name: '정수진', description: '소프트웨어 아키텍트' },
    { id: 5, name: '강민호', description: '보안 엔지니어' },
  ];

  const [friendRequestData, setFriendRequestData] = useState<FriendData[] | null | undefined>(initFriendRequestData);

  const handleAccept = (data: FriendData) => {
    const nextFriendRequestData = friendRequestData?.filter((item) => item.id !== data.id && item );
    const nextFriendData =  friendData && [...friendData, data];

    setFriendRequestData(nextFriendRequestData);
    setFriendData(nextFriendData);
  };

  const handleReject = (data: FriendData) => {
    const nextFriendRequestData = friendRequestData?.filter((item) => item.id !== data.id && item );
    setFriendRequestData(nextFriendRequestData);
  };

  return (
    <div className={styles.contents}>
      <FriendListLabel text='친구 요청' count={friendRequestData?.length}>
        <UserPlus size={16} />
      </FriendListLabel>
      {
        friendRequestData?.map((item) => {
          return (
            <FriendRequestCard 
              key={item.id}
              name={item.name}
              description={item.description}
              onAccept={() => handleAccept(item)}
              onReject={() => handleReject(item)}
            />
          )
        })
      }
      <FriendListLabel text='친구 목록' count={friendData?.length}>
        <User size={16} />
      </FriendListLabel>
      {
        friendData?.map((item) => {
          return (
            <FriendListCard key={item.id} name={item.name} description={item.description} />
          )
        })
      }
    </div>
  )
}

export default FriendContents;