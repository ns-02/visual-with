import { teamDataMocks } from '@mocks/TeamDataMocks';
import { TeamData, TeamId, TeamName } from '@shared/models/Team';
import { create } from 'zustand';

interface TeamState {
  teamData: TeamData[];
  selectTeamId: TeamId;
  selectTeamName: TeamName;
  isTeamMember: boolean;
  createTeamInStore: (teamId: TeamId, teamName: TeamName) => void;
  deleteTeamFromStore: (teamId: TeamId) => void;
  setSelectTeamId: (teamId: TeamId) => void;
  setSelectTeamName: (teamName: TeamName) => void;
  setIsTeamMember: (value: boolean) => void;
}

export const useTeamStore = create<TeamState>((set) => ({
  teamData: teamDataMocks || [],
  selectTeamId: '',
  selectTeamName: '',
  isTeamMember: false,

  createTeamInStore: (teamId, teamName) =>
    set((state) => ({
      teamData: [...state.teamData, { id: teamId, name: teamName }],
    })),

  deleteTeamFromStore: (teamId) =>
    set((state) => ({
      teamData: [...state.teamData.filter((item) => item.id !== teamId)],
    })),

  setSelectTeamId: (teamId) => set({ selectTeamId: teamId }),

  setSelectTeamName: (teamName) => set({ selectTeamName: teamName }),

  setIsTeamMember: (value) => set({ isTeamMember: value }),
}));
