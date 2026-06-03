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
  const subscribeToTeam = useTeamChatStore((state) => state.subscribeToTeam);
  const unsubscribeFromTeam = useTeamChatStore(
    (state) => state.unsubscribeFromTeam,
  );

  const teamId = useTeamId();

  useEffect(() => {
    if (!teamId) return;

    if (isConnected) {
      subscribeToTeam(teamId);
    }

    return () => {
      unsubscribeFromTeam();
    };
  }, [subscribeToTeam, unsubscribeFromTeam, teamId, isConnected]);

  return (
    <div className={styles.team_chat_root}>
      <div className={styles.team_chat_panel}>
        <MessageList allChat={allChat} />
      </div>

      <ChatInputArea
        itemClassName={styles.bottom}
        onSend={handleTeamChatSend}
        onUpload={loadAndUploadFile}
      />
    </div>
  );
}

export default TeamChatPage;
