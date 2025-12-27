import { Prop } from '..';
import styles from './DirectChatLayout.module.css';
import { useFriend } from '@core/context/FriendContext';

function ChatViewPanel({ children }: Prop) {
  const { selectFriendData } = useFriend();

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
