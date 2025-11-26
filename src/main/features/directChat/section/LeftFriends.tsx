import { useEffect, useState } from 'react';
import { useFriend } from '../../../../context/FriendContext';
import SelectFriendCard from '../components/SelectFriendCard';
import { FriendItem, LeftFriendProps } from '../types';
import styles from './DirectChatSection.module.css'

function LeftFriends({ idChatMap } : LeftFriendProps) {
  const { friendData, selectFriendData ,setSelectFriendData } = useFriend();
  const [friendItems, setFriendItems] = useState<FriendItem[]>([]);

  useEffect(() => {
    const nextFriendItems = friendData?.map((data) => {
      return data.id === selectFriendData?.id ? 
      {...data, chat: idChatMap.get(data.id) || "", selected: true} : 
      {...data, chat: idChatMap.get(data.id) || "", selected: false};
    });

    nextFriendItems && setFriendItems(nextFriendItems);
  }, [friendData, idChatMap]);

  const handleCardSelect = (id: number) => {
    const nextFriendItems = friendItems.map((item) => 
      item.id === id ? {...item, selected: true} : {...item, selected: false}
    );

    setFriendItems(nextFriendItems);
    setSelectFriendData(friendData?.find((item) => item.id === id));
  };

  return (
    <div className={styles["left-friends"]}>
      {
        friendItems.map((item) => {
          return (
            <SelectFriendCard
              key={item.id} 
              name={item.name}
              chat={item.chat} 
              selected={item.selected}
              onSelect={() => handleCardSelect(item.id)}
            />
          )
        })
      }
    </div>
  )
}

export default LeftFriends;