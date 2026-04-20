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
import { useTeamStore } from '@core/store/useTeamStore';
import { useTeamRuleStore } from '@core/store/useTeamRuleStore';
import { useEffect } from 'react';

export const useTeamManager = () => {
  const selectTeamId = useTeamStore((state) => state.selectTeamId);
  const createTeamInStore = useTeamStore((state) => state.createTeamInStore);
  const deleteTeamFromStore = useTeamStore(
    (state) => state.deleteTeamFromStore,
  );
  const isTeamInit = useTeamStore((state) => state.isTeamInit);
  const setIsTeamInit = useTeamStore((state) => state.setIsTeamInit);

  const teamRuleData = useTeamRuleStore((state) => state.teamRuleData);
  const addTeamRule = useTeamRuleStore((state) => state.addTeamRule);
  const deleteTeamRule = useTeamRuleStore((state) => state.deleteTeamRule);
  const setCurrentRule = useTeamRuleStore((state) => state.setCurrentRule);

  const userId = useUserStore((state) => state.userId);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const nextRule = teamRuleData.find(
      (item) => item.teamId === selectTeamId,
    )?.rule;

    if (!nextRule) return;

    setCurrentRule(nextRule);
  }, [selectTeamId, teamRuleData, setCurrentRule]);

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
