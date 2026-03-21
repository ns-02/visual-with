import { ReactNode } from 'react';
import styles from './DirectChatLayout.module.css';

interface ChatContentAreaProps {
  children: ReactNode;
}

const ChatContentArea = ({ children }: ChatContentAreaProps) => {
  return <div className={styles.chat_content_area}>{children}</div>;
};

export default ChatContentArea;
