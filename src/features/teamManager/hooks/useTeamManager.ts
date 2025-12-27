import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { createTeam } from '@shared/api/api';
import { useTeam } from '@core/contexts/TeamContext';
import { useUser } from '@core/contexts/UserContext';
import { TeamData, TeamId, TeamName } from '@shared/models/Team';
import { getPathFromToolId, getToolIdFromPath } from '@core/routes/routeMap';

const useTeamManager = () => {
  const {
    teamData,
    dispatch,
    setIsTeamMember,
    setSelectTeamId,
    setSelectTeamName,
  } = useTeam();

  const { userId, setUserId } = useUser();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // 임시로 유저 아이디를 amugae(아무개)로 설정함. 반드시 지울 것
  useEffect(() => {
    setUserId('amugae');
  }, []);

  useEffect(() => {
    if (teamData && teamData.length === 0) {
      setIsTeamMember(false);
    }
  }, [teamData, setIsTeamMember]);

  const onCreateTeam = async (teamName: TeamName) => {
    if (!userId) return;

    try {
      const res = await createTeam({ userId, teamName });

      dispatch({
        type: 'CREATE_TEAM',
        payload: { id: res.id, name: res.teamName },
      });
    } catch (e) {
      console.log(e);
    }
  };

  const deleteTeam = (teamId: TeamId) => {
    dispatch({
      type: 'DELETE_TEAM',
      payload: { id: teamId },
    });
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

  return { onCreateTeam, deleteTeam, selectTeam };
};

export default useTeamManager;
