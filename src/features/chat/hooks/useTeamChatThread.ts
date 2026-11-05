import { useUserStore } from '@core/store/useUserStore';
import { useWorkspaceStore } from '@core/store/useWorkspaceStore';
import { useWorkspaceParams } from '@core/hooks/useWorkspaceParams';
import { useEffect, useMemo } from 'react';
import { selectTeamAllChat, useTeamChatStore } from '../store/useTeamChatStore';

export const useTeamChatThread = () => {
  const { teamId } = useWorkspaceParams();
  const userId = useUserStore((state) => state.user?.id);
  const memberships = useWorkspaceStore((state) => state.membershipData);
  const selectAllChat = useMemo(() => selectTeamAllChat(teamId), [teamId]);
  const chats = useTeamChatStore(selectAllChat);
  const initThread = useTeamChatStore((state) => state.initThread);
  const sendMessage = useTeamChatStore((state) => state.sendMessage);

  useEffect(() => {
    if (teamId) initThread(teamId);
  }, [teamId, initThread]);

  const allChat = useMemo(() => {
    const names = new Map(
      memberships
        .filter((member) => member.teamId === teamId)
        .map((member) => [member.userId, member.userName]),
    );
    return chats.map((chat) => ({
      ...chat,
      authorName: names.get(chat.authorId) || chat.authorId,
      isMe: chat.authorId === userId,
    }));
  }, [chats, memberships, teamId, userId]);

  const handleTeamChatSend = (chatToSend: string) => {
    if (teamId && userId) sendMessage(teamId, chatToSend, userId);
  };

  return { allChat, handleTeamChatSend };
};
