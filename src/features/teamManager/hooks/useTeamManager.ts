import {
  createTeam,
  deleteTeam,
  inviteTeamByUserId,
  searchUser,
} from '@shared/api/api';
import { useUserStore } from '@core/store/useUserStore';
import { useWorkspaceParams } from '@core/hooks/useWorkspaceParams';
import { useWorkspaceStore } from '@core/store/useWorkspaceStore';
import { TeamId, TeamName } from '@shared/models/Workspace';

export const useTeamManager = () => {
  const { teamId } = useWorkspaceParams();
  const createTeamInStore = useWorkspaceStore(
    (state) => state.createTeamInStore,
  );
  const deleteTeamFromStore = useWorkspaceStore(
    (state) => state.deleteTeamFromStore,
  );

  const addTeamRule = useWorkspaceStore((state) => state.addTeamRule);
  const deleteTeamRule = useWorkspaceStore((state) => state.deleteTeamRule);

  const userId = useUserStore((state) => state.user?.id);

  const onCreateTeam = async (teamName: TeamName) => {
    if (!userId) return;

    try {
      const res = await createTeam({ userId, teamName });

      createTeamInStore(res.id, res.teamName);
      addTeamRule(userId, res.id, 'ADMIN');
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
      console.log(res);
    } catch (e) {
      console.error(e);
    }
  };

  return {
    onCreateTeam,
    onDeleteTeam,
    onSearchUser,
    onInviteTeamByUserId,
  };
};
