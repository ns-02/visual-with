import { ChatData } from '@shared/models/Workspace';
import styles from './TeamChatLayout.module.css';
import MessageList from '@shared/domain/MessageList';

interface TeamChatPanelProps {
  allChat: ChatData[];
}

const TeamChatPanel = ({ allChat }: TeamChatPanelProps) => {
  return (
    <div className={styles.team_chat_panel}>
      <MessageList allChat={allChat} />
    </div>
  );
};

export default TeamChatPanel;
