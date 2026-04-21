import { ChatData } from '@shared/models/Workspace';
import styles from './DirectChatLayout.module.css';
import MessageList from '@shared/domain/MessageList';

interface DirectChatAreaProps {
  allChat: ChatData[];
}

const DirectChatArea = ({ allChat }: DirectChatAreaProps) => {
  return (
    <div className={styles.direct_chat_area}>
      <MessageList allChat={allChat} />
    </div>
  );
};

export default DirectChatArea;
