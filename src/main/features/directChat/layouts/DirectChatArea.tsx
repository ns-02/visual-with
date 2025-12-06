import { MessageList } from '@components/ui';
import { ChatItem } from '@models/Chat';
import styles from './DirectChatLayout.module.css';

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
