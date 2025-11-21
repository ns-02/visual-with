import SelectFriendCard from '../components/SelectFriendCard';
import styles from './DirectChatSection.module.css'

function LeftFriends() {
  const friendItems = [
    { id: 1, name: '김철수', chat: '안녕하세요', selected: true },
    { id: 2, name: '이영희', chat: '감사합니다', selected: false },
    { id: 3, name: '박영수', chat: '수고하셨어요', selected: false },
  ];

  return (
    <div className={styles["left-friends"]}>
      {
        friendItems.map((item) => {
          return (
            <SelectFriendCard key={item.id} name={item.name} chat={item.chat} selected={item.selected} />
          )
        })
      }
    </div>
  )
}

export default LeftFriends;