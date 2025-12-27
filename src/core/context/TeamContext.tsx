import React, { createContext, useContext, useReducer, useState } from 'react';
import { TeamData, TeamId, TeamName } from '@shared/models/Team';
import { teamDataMocks } from '@mocks/TeamDataMocks';
import teamReducer, {
  TeamAction,
} from '@features/teamManager/store/teamReducer';

export type TeamContextType = {
  teamData: TeamData[];
  dispatch: React.Dispatch<TeamAction>;
  selectTeamId: TeamId;
  setSelectTeamId: (item: TeamId) => void;
  selectTeamName: TeamName;
  setSelectTeamName: (item: TeamName) => void;
  isTeamMember: boolean;
  setIsTeamMember: (value: boolean) => void;
};

const TeamContext = createContext<TeamContextType | undefined>(undefined);

export const TeamProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [teamData, dispatch] = useReducer(teamReducer, teamDataMocks || []);
  const [selectTeamId, setSelectTeamId] = useState<TeamId>('');
  const [selectTeamName, setSelectTeamName] = useState<TeamName>('');
  const [isTeamMember, setIsTeamMember] = useState<boolean>(false);

  return (
    <TeamContext.Provider
      value={{
        teamData,
        dispatch,
        selectTeamId,
        setSelectTeamId,
        selectTeamName,
        setSelectTeamName,
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
