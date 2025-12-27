import { useEffect, useState } from 'react';
import { useFriend } from '@core/context/FriendContext';
import SelectFriendCard from '../ui/SelectFriendCard';
import { FriendItem } from '..';
import styles from './DirectChatLayout.module.css';

function LeftFriendsPanel() {
  const { friendData, selectFriendData, setSelectFriendData, friendIdChatMap } =
    useFriend();
  const [friendItems, setFriendItems] = useState<FriendItem[]>([]);

  useEffect(() => {
    const nextFriendItems = friendData?.map((data) => {
      return data.id === selectFriendData?.id
        ? { ...data, chat: friendIdChatMap.get(data.id) || '', selected: true }
        : {
            ...data,
            chat: friendIdChatMap.get(data.id) || '',
            selected: false,
          };
    });

    nextFriendItems && setFriendItems(nextFriendItems);
  }, [friendData, friendIdChatMap]);

  const handleCardSelect = (id: string) => {
    const nextFriendItems = friendItems.map((item) =>
      item.id === id
        ? { ...item, selected: true }
        : { ...item, selected: false },
    );

    setFriendItems(nextFriendItems);
    setSelectFriendData(friendData?.find((item) => item.id === id));
  };

  return (
    <div className={styles.left_friends_panel}>
      {friendItems.map((item) => {
        return (
          <SelectFriendCard
            key={item.id}
            name={item.name}
            chat={item.chat}
            selected={item.selected}
            onSelect={() => handleCardSelect(item.id)}
          />
        );
      })}
    </div>
  );
}

export default LeftFriendsPanel;
