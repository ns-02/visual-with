import { Prop } from '..';
import styles from './DirectChatLayout.module.css';

function RightChats({ children }: Prop) {
  return <div className={styles['right-chats']}>{children}</div>;
}

export default RightChats;
