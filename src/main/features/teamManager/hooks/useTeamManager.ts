import { useTeam } from '@context/TeamContext';
import { TeamId, TeamName } from '@models/Team';
import { useEffect } from 'react';

const useTeamManager = () => {
  const { teamData, dispatch, setIsTeamMember } = useTeam();

  useEffect(() => {
    if (teamData && teamData.length === 0) {
      setIsTeamMember(false);
    }
  }, [teamData, setIsTeamMember]);

  const createTeam = (teamName: TeamName) => {
    dispatch({
      type: 'CREATE_TEAM',
      payload: { name: teamName },
    });
  };

  const deleteTeam = (teamId: TeamId) => {
    dispatch({
      type: 'DELETE_TEAM',
      payload: { id: teamId },
    });
  };

  return { createTeam, deleteTeam };
};

export default useTeamManager;
