import { ChatItem } from '@shared/models/Chat';
import styles from './TeamChatLayout.module.css';
import { MessageList } from '@shared/components';

interface TeamChatPanelProps {
  allChat: ChatItem[];
}

const TeamChatPanel = ({ allChat }: TeamChatPanelProps) => {
  return (
    <div className={styles.team_chat_panel}>
      <MessageList allChat={allChat} />
    </div>
  );
};

export default TeamChatPanel;
