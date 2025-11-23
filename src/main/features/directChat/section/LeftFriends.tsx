import { useState } from 'react';
import SelectFriendCard from '../components/SelectFriendCard';
import { FriendItem, LeftFriendProps } from '../types';
import styles from './DirectChatSection.module.css'

function LeftFriends({ onSelect }: LeftFriendProps) {
  const initFriendItem: FriendItem[] = [
    { id: 1, name: '김철수', chat: '안녕하세요', selected: true },
    { id: 2, name: '이영희', chat: '감사합니다', selected: false },
    { id: 3, name: '박영수', chat: '수고하셨어요', selected: false },
  ];

  const [friendItems, setFriendItems] = useState<FriendItem[]>(initFriendItem);

  const handleCardSelect = (id: number) => {
    const nextFriendItems = friendItems.map((item) => 
      item.id === id ? {...item, selected: true} : {...item, selected: false}
    );

    setFriendItems(nextFriendItems);
    if (onSelect) onSelect(id);
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