import React, { createContext, useContext, useState } from 'react';
import { TeamData } from '@models/Team';
import { teamDataMocks } from '../mocks/TeamDataMocks';

export type TeamContextType = {
  teamData: TeamData[] | undefined;
  setTeamData: (item: TeamData[] | undefined) => void;
  selectTeamData: TeamData | null;
  setSelectTeamData: (item: TeamData | null) => void;
  isTeamMember: boolean;
  setIsTeamMember: (value: boolean) => void;
};

const TeamContext = createContext<TeamContextType | undefined>(undefined);

export const TeamProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [teamData, setTeamData] = useState<TeamData[] | undefined>(
    teamDataMocks,
  );
  const [selectTeamData, setSelectTeamData] = useState<TeamData | null>(null);
  const [isTeamMember, setIsTeamMember] = useState<boolean>(false);

  return (
    <TeamContext.Provider
      value={{
        teamData,
        setTeamData,
        selectTeamData,
        setSelectTeamData,
        isTeamMember,
        setIsTeamMember,
      }}
    >
      {children}
    </TeamContext.Provider>
  );
};

export function useTeam() {
  const v = useContext(TeamContext);
  if (!v)
    throw new Error('useTeam은 반드시 TeamProvider 내부에서 사용해야 합니다.');
  return v;
}
