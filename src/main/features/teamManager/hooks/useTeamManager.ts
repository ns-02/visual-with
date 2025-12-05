import { useState } from 'react';
import { useTeam } from '@context/TeamContext';
import getMaxId from '@utils/getMaxId';
import { TeamData, TeamId, TeamName } from '@models/Team';

interface TeamManagerType {
  teamData: TeamData[] | undefined;
}

const useTeamManager = ({ teamData }: TeamManagerType) => {
  const { setTeamData, setIsTeamMember } = useTeam();

  const maxId = (teamData && getMaxId(teamData)) ?? 0;
  const [currentItemId, setcurrentItemId] = useState(maxId + 1);
  const [deleteTeamId, setDeleteTeamId] = useState<TeamId>(0);
  const [deleteTeamName, setDeleteTeamName] = useState<TeamName>('');

  const createTeam = (teamName: TeamName) => {
    const newData = { id: currentItemId, name: teamName };
    const nextTeamData = teamData ? [...teamData, newData] : [newData];

    setTeamData(nextTeamData);
    setcurrentItemId(currentItemId + 1);
  };

  const deleteTeam = () => {
    const nextTeamData = teamData?.filter(
      (item) => item.id !== deleteTeamId && item,
    );
    setTeamData(nextTeamData);
    if (!nextTeamData?.length) setIsTeamMember(false);
  };

  const setDeleteTeamData = (teamData: TeamData) => {
    setDeleteTeamId(teamData.id);
    setDeleteTeamName(teamData.name);
  };

  return { deleteTeamName, setDeleteTeamData, createTeam, deleteTeam };
};

export default useTeamManager;
