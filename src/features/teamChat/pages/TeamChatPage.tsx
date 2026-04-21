import { useTeamChatThread } from '../hooks/useTeamChatThread';
import ChatInputArea from '@shared/domain/chat/ChatInputArea';
import styles from './TeamChatLayout.module.css';
import MessageList from '@shared/domain/MessageList';

function TeamChatPage() {
  const { allChat, handleTeamChatSend } = useTeamChatThread();

  return (
    <div className={styles.team_chat_root}>
      <div className={styles.team_chat_panel}>
        <MessageList allChat={allChat} />
      </div>

      <ChatInputArea
        itemClassName={styles.bottom}
        onSend={handleTeamChatSend}
      />
    </div>
  );
}

export default TeamChatPage;
