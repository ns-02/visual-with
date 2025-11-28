import { TeamData } from '@models/Team';

export type TeamContextType = {
  teamData: TeamData[] | undefined;
  setTeamData: (item: TeamData[] | undefined) => void;
  selectTeamData: TeamData | null;
  setSelectTeamData: (item: TeamData | null) => void;
  isTeamMember: boolean;
  setIsTeamMember: (value: boolean) => void;
};
