import { Prop } from '../types';
import styles from './DirectChatSection.module.css';

function RightChats({ children }: Prop) {
  return <div className={styles['right-chats']}>{children}</div>;
}

export default RightChats;
