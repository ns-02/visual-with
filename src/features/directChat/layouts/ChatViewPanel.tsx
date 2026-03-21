import { useFriendStore } from '@features/friendList/store/useFriendStore';
import { Prop } from '..';
import styles from './DirectChatLayout.module.css';

function ChatViewPanel({ children }: Prop) {
  const selectFriendData = useFriendStore((state) => state.selectFriendData);

  if (!selectFriendData) {
    return (
      <div className={styles.chat_view_panel}>
        <div className={styles.overview}>준비 중인 화면입니다</div>
      </div>
    );
  }

  return <div className={styles.chat_view_panel}>{children}</div>;
}

export default ChatViewPanel;
