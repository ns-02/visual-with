import { User, UserPlus } from 'lucide-react';
import FriendListCard from '../components/FriendListCard';
import FriendRequestCard from '../components/FriendRequestCard';
import styles from './FriendListSection.module.css'
import FriendListLabel from '../components/FriendListLabel';

function FriendContents() {
  const friendRequestItems = [
    { id: 1, name: '정수진', description: '안녕하세요' },
    { id: 2, name: '강민호', description: '파이팅!' },
  ];

  const friendListItems = [
    { id: 1, name: '김철수', description: '프론트엔드 개발자' },
    { id: 2, name: '이영희', description: 'UX 디자이너' },
    { id: 3, name: '박영수', description: '백엔드 개발자' },
  ];

  return (
    <div className={styles.contents}>
      <FriendListLabel text='친구 요청' count={2}>
        <UserPlus size={16} />
      </FriendListLabel>
      {
        friendRequestItems.map((item) => {
          return (
            <FriendRequestCard key={item.id} name={item.name} description={item.description} />
          )
        })
      }
      <FriendListLabel text='친구 목록' count={3}>
        <User size={16} />
      </FriendListLabel>
      {
        friendListItems.map((item) => {
          return (
            <FriendListCard key={item.id} name={item.name} description={item.description} />
          )
        })
      }
    </div>
  )
}

export default FriendContents;