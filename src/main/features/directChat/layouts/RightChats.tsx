import { Prop } from '..';
import styles from './DirectChat.module.css';

function RightChats({ children }: Prop) {
  return <div className={styles['right-chats']}>{children}</div>;
}

export default RightChats;
