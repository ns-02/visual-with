import { ChatItem } from '@shared/models/Chat';
import styles from './DirectChatLayout.module.css';
import MessageList from '@shared/domain/MessageList';

interface DirectChatAreaProps {
  allChat: ChatItem[];
}

const DirectChatArea = ({ allChat }: DirectChatAreaProps) => {
  return (
    <div className={styles.direct_chat_area}>
      <MessageList allChat={allChat} />
    </div>
  );
};

export default DirectChatArea;
