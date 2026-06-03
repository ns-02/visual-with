import ChatInputArea from '@shared/components/ChatInputArea';
import { useTeamChatThread } from '../hooks/useTeamChatThread';
import styles from './TeamChatLayout.module.css';
import MessageList from '@shared/components/MessageList';
import { useTeamFileManager } from '@features/fileSharing/hooks/useTeamFileManager';
import { useTeamChatStore } from '../store/useTeamChatStore';
import { useEffect, useState } from 'react';
import { useTeamId } from '@core/hooks/useWorkspaceParams';

function TeamChatPage() {
  const { allChat, handleTeamChatSend } = useTeamChatThread();
  const { loadAndUploadFile } = useTeamFileManager();
  const messages = useTeamChatStore((state) => state.messages);
  const isConnected = useTeamChatStore((state) => state.isConnected);
  const sendTestMessage = useTeamChatStore((state) => state.sendTestMessage);
  const subscribeToTeam = useTeamChatStore((state) => state.subscribeToTeam);
  const [value, setValue] = useState('');
  const teamId = useTeamId();

  useEffect(() => {
    if (!teamId) return;

    if (isConnected) {
      subscribeToTeam(teamId);
    }
  }, [subscribeToTeam, teamId, isConnected]);

  return (
    <div className={styles.team_chat_root}>
      {/* <div className={styles.team_chat_panel}>
        <MessageList allChat={allChat} />
      </div>

      <ChatInputArea
        itemClassName={styles.bottom}
        onSend={handleTeamChatSend}
        onUpload={loadAndUploadFile}
      /> */}
      <div>{JSON.stringify(messages)};</div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button
        onClick={() => {
          sendTestMessage(value, teamId ?? '');
          setValue('');
        }}
      >
        전송
      </button>
    </div>
  );
}

export default TeamChatPage;
