import {
  createTeam,
  deleteTeam,
  inviteTeamByUserId,
  searchUser,
} from '@shared/api/api';
import { useUserStore } from '@core/store/useUserStore';
import { useTeamId } from '@core/hooks/useWorkspaceParams';
import { useWorkspaceStore } from '@core/store/useWorkspaceStore';
import { createMembership, TeamId, TeamName } from '@shared/models/Workspace';
import { useEffect, useState } from 'react';

export const useTeamManager = () => {
  const teamId = useTeamId();
  const createTeamInStore = useWorkspaceStore(
    (state) => state.createTeamInStore,
  );
  const deleteTeamFromStore = useWorkspaceStore(
    (state) => state.deleteTeamFromStore,
  );
  const addTeamRule = useWorkspaceStore((state) => state.addTeamRule);
  const updateTeamRule = useWorkspaceStore((state) => state.updateTeamRule);
  const deleteTeamRule = useWorkspaceStore((state) => state.deleteTeamRule);
  const teamData = useWorkspaceStore((state) => state.teamData);
  const isTeamInit = useWorkspaceStore((state) => state.isTeamInit);

  const userId = useUserStore((state) => state.user?.id);
  const [isTeamMember, setIsTeamMember] = useState(false);

  useEffect(() => {
    if ((teamData && teamData.length === 0) || !isTeamInit) {
      setIsTeamMember(false);
    } else {
      setIsTeamMember(true);
    }
  }, [teamData, setIsTeamMember, isTeamInit]);

  const onCreateTeam = async (teamName: TeamName) => {
    if (!userId) return;

    try {
      const res = await createTeam({ userId, teamName });

      createTeamInStore(res.id, res.teamName);
      addTeamRule(createMembership(userId, res.id, 'ADMIN', 'ACCEPTED'));
    } catch (e) {
      console.log(e);
    }
  };

  const onDeleteTeam = async (teamId: TeamId) => {
    if (!userId) return;

    try {
      const res = await deleteTeam({ userId, teamId });
      console.log(res);

      deleteTeamFromStore(teamId);
      deleteTeamRule(teamId);
    } catch (e) {
      console.log(e);
    }
  };

  const onSearchUser = async (userId: string) => {
    if (!userId) return;

    try {
      const res = await searchUser({ userId });
      console.log(res);
    } catch (e) {
      console.error(e);
    }
  };

  const onInviteTeamByUserId = async (invitedUserId: string) => {
    if (!userId || !teamId) return;
    try {
      const res = await inviteTeamByUserId({
        userId,
        invitedUserId,
        teamId,
      });
      addTeamRule(createMembership(invitedUserId, teamId, 'MEMBER', 'PENDING'));
      console.log(res);
    } catch (e) {
      console.error(e);
    }
  };

  const onTeamInvitationByUserId = async (
    currentTeamId: TeamId,
    accepted: boolean,
  ) => {
    if (!userId) return;

    if (accepted) {
      updateTeamRule(
        createMembership(userId, currentTeamId, 'MEMBER', 'ACCEPTED'),
      );
    } else {
      updateTeamRule(
        createMembership(userId, currentTeamId, 'MEMBER', 'DECLINED'),
      );
    }
  };

  return {
    onCreateTeam,
    onDeleteTeam,
    onSearchUser,
    onInviteTeamByUserId,
    onTeamInvitationByUserId,
    isTeamMember,
  };
};
