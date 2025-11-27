import React, { createContext, useContext, useState } from "react";
import { TeamData } from "@models/Team";
import { TeamContextType } from "./TeamContextType";

const TeamContext = createContext<TeamContextType | undefined>(undefined);

export const TeamProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [teamData, setTeamData] = useState<TeamData[] | undefined>(undefined);
  const [selectTeamData, setSelectTeamData] = useState<TeamData | null>(null);
  const [isTeamMember, setIsTeamMember] = useState<boolean>(false);
  
  return <TeamContext.Provider value={
    { teamData, setTeamData, selectTeamData, setSelectTeamData, isTeamMember, setIsTeamMember }
  }>{children}</TeamContext.Provider>;
};

export function useTeam() {
  const v = useContext(TeamContext);
  if (!v) throw new Error('useTeam은 반드시 TeamProvider 내부에서 사용해야 합니다.');
  return v;
};