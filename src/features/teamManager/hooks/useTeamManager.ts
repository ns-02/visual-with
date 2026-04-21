import { useLocation, useNavigate } from 'react-router-dom';
import {
  createTeam,
  deleteTeam,
  inviteTeamByUserId,
  searchUser,
} from '@shared/api/api';
import { TeamData, TeamId, TeamName } from '@shared/models/Team';
import { getPathFromToolId, getToolIdFromPath } from '@core/routes/routeMap';
import { useUserStore } from '@core/store/useUserStore';
import { useWorkspaceStore } from '@core/store/useWorkspaceStore';

export const useTeamManager = () => {
  const selectTeamId = useWorkspaceStore((state) => state.selectTeamId);
  const createTeamInStore = useWorkspaceStore(
    (state) => state.createTeamInStore,
  );
  const deleteTeamFromStore = useWorkspaceStore(
    (state) => state.deleteTeamFromStore,
  );
  const isTeamInit = useWorkspaceStore((state) => state.isTeamInit);
  const setIsTeamInit = useWorkspaceStore((state) => state.setIsTeamInit);

  const addTeamRule = useWorkspaceStore((state) => state.addTeamRule);
  const deleteTeamRule = useWorkspaceStore((state) => state.deleteTeamRule);

  const userId = useUserStore((state) => state.user?.id);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onCreateTeam = async (teamName: TeamName) => {
    if (!userId) return;

    try {
      const res = await createTeam({ userId, teamName });

      createTeamInStore(res.id, res.teamName);
      addTeamRule(userId, res.id, 'ADMIN');

      if (!isTeamInit) setIsTeamInit(true);
    } catch (e) {
      console.log(e);
    }
  };

  const onDeleteTeam = async (teamId: TeamId) => {
    if (!userId) return;

    try {
      const res = await deleteTeam({ userId, teamId });
      console.log(res);
      // console.log(res.message);

      deleteTeamFromStore(teamId);
      deleteTeamRule(teamId);
    } catch (e) {
      console.log(e);
    }
  };

  const selectTeam = (selectedTeam: TeamData) => {
    const toolId = getToolIdFromPath(pathname);

    if (!isTeamInit) setIsTeamInit(true);

    if (toolId) {
      const toolPath = getPathFromToolId({ id: toolId });

      if (toolPath !== 'directchat' && toolPath !== 'friendlist') {
        navigate(`${selectedTeam.id}/${toolPath}`);
      } else {
        navigate(`${toolPath}`);
      }
    } else {
      navigate(`${selectedTeam.id}`);
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
    if (!userId || !selectTeamId) return;
    try {
      const res = await inviteTeamByUserId({
        userId,
        invitedUserId,
        teamId: selectTeamId,
      });
      console.log(res);
    } catch (e) {
      console.error(e);
    }
  };

  return {
    onCreateTeam,
    onDeleteTeam,
    selectTeam,
    onSearchUser,
    onInviteTeamByUserId,
  };
};
