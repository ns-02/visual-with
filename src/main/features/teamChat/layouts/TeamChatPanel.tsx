import { MessageList } from '@components/ui';
import { ChatItem } from '@models/Chat';
import styles from './TeamChatLayout.module.css';

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
