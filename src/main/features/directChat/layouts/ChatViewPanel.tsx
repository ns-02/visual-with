import { Prop } from '..';
import styles from './DirectChatLayout.module.css';

function ChatViewPanel({ children }: Prop) {
  return <div className={styles.chat_view_panel}>{children}</div>;
}

export default ChatViewPanel;
