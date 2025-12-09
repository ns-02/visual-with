import { useTeam } from '@context/TeamContext';
import { TeamData, TeamId, TeamName } from '@models/Team';
import { useEffect } from 'react';

const useTeamManager = () => {
  const {
    teamData,
    dispatch,
    setIsTeamMember,
    setSelectTeamId,
    setSelectTeamName,
  } = useTeam();

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

  const selectTeam = (selectedTeam: TeamData) => {
    if (selectedTeam) setIsTeamMember(true);
    setSelectTeamId(selectedTeam.id);
    setSelectTeamName(selectedTeam.name);
  };

  return { createTeam, deleteTeam, selectTeam };
};

export default useTeamManager;
