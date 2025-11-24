export interface TeamData {
  id: number;
  name: string;
}

export type TeamContextType = { 
  teamData: TeamData[] | null; 
  setTeamData: (item: TeamData[] | null) => void;
  selectTeamData: TeamData | null;
  setSelectTeamData: (item: TeamData | null) => void;
  isTeamMember: boolean;
  setIsTeamMember: (value: boolean) => void;
};