import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { createTeam, deleteTeam } from '@shared/api/api';
import { TeamData, TeamId, TeamName } from '@shared/models/Team';
import { getPathFromToolId, getToolIdFromPath } from '@core/routes/routeMap';
import { useUserStore } from '@core/store/useUserStore';
import { useTeamStore } from '@core/store/useTeamStore';

const useTeamManager = () => {
  const teamData = useTeamStore((state) => state.teamData);
  const createTeamInStore = useTeamStore((state) => state.createTeamInStore);
  const deleteTeamFromStore = useTeamStore(
    (state) => state.deleteTeamFromStore,
  );
  const setIsTeamMember = useTeamStore((state) => state.setIsTeamMember);
  const setSelectTeamId = useTeamStore((state) => state.setSelectTeamId);
  const setSelectTeamName = useTeamStore((state) => state.setSelectTeamName);

  const userId = useUserStore((state) => state.userId);
  const setUserId = useUserStore((state) => state.setUserId);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // 임시로 유저 아이디를 amugae(아무개)로 설정함. 반드시 지울 것
  useEffect(() => {
    setUserId('amugae');
  }, [setUserId]);

  useEffect(() => {
    if (teamData && teamData.length === 0) {
      setIsTeamMember(false);
    }
  }, [teamData, setIsTeamMember]);

  const onCreateTeam = async (teamName: TeamName) => {
    if (!userId) return;

    try {
      const res = await createTeam({ userId, teamName });

      createTeamInStore(res.id, res.teamName);
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
    } catch (e) {
      console.log(e);
    }
  };

  const selectTeam = (selectedTeam: TeamData) => {
    const toolId = getToolIdFromPath(pathname);

    if (selectedTeam) setIsTeamMember(true);

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

    setSelectTeamId(selectedTeam.id);
    setSelectTeamName(selectedTeam.name);
  };

  return { onCreateTeam, onDeleteTeam, selectTeam };
};

export default useTeamManager;
