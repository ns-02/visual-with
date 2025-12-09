import { Prop } from '..';
import styles from './DirectChatLayout.module.css';

function DirectChatRoot({ children }: Prop) {
  return <div className={styles.direct_chat_root}>{children}</div>;
}

export default DirectChatRoot;
