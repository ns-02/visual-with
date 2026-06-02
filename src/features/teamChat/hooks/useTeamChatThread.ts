import { useUserStore } from '@core/store/useUserStore';
import { useWorkspaceParams } from '@core/hooks/useWorkspaceParams';
import { useEffect } from 'react';
import { useTeamChatStore } from '../store/useTeamChatStore';

export const useTeamChatThread = () => {
  const { teamId } = useWorkspaceParams();

  const userId = useUserStore((state) => state.user?.id);
  const userName = useUserStore((state) => state.user?.name);
  const allChat = useTeamChatStore((state) =>
    teamId ? (state.threadsByTeamId.get(teamId)?.allChat ?? []) : [],
  );
  const initThread = useTeamChatStore((state) => state.initThread);
  const sendMessage = useTeamChatStore((state) => state.sendMessage);

  useEffect(() => {
    if (!teamId) return;

    initThread(teamId, userId, userName);
  }, [teamId, userId, userName, initThread]);

  const handleTeamChatSend = (chatToSend: string) => {
    if (!teamId || !userId || !userName) return;

    sendMessage(teamId, chatToSend, userId, userName);
  };

  return { allChat, handleTeamChatSend };
};
