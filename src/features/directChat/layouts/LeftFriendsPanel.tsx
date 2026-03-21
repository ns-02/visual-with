import { useEffect, useState } from 'react';
import SelectFriendCard from '../ui/SelectFriendCard';
import { FriendItem } from '..';
import styles from './DirectChatLayout.module.css';
import { useFriendStore } from '@features/friendList/store/useFriendStore';
import { useDirectChatStore } from '../store/useDirectChatStore';

function LeftFriendsPanel() {
  const friendData = useFriendStore((state) => state.friendData);
  const selectFriendData = useFriendStore((state) => state.selectFriendData);
  const friendIdChatMap = useDirectChatStore((state) => state.friendIdChatMap);
  const updateSelectFriend = useFriendStore(
    (state) => state.updateSelectFriend,
  );
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

    if (nextFriendItems) {
      setFriendItems(nextFriendItems);
    }
  }, [friendData, selectFriendData, friendIdChatMap]);

  const handleCardSelect = (id: string) => {
    const nextFriendItems = friendItems.map((item) =>
      item.id === id
        ? { ...item, selected: true }
        : { ...item, selected: false },
    );

    setFriendItems(nextFriendItems);
    updateSelectFriend(id);
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
