import { teamDataMocks } from '@mocks/TeamDataMocks';
import { TeamData, TeamId, TeamName } from '@shared/models/Team';
import { create } from 'zustand';

interface TeamState {
  teams: TeamData[];
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
  teams: teamDataMocks || [],
  selectTeamId: '',
  selectTeamName: '',
  isTeamMember: false,

  createTeamInStore: (teamId, teamName) =>
    set((state) => ({
      teams: [...state.teams, { id: teamId, name: teamName }],
    })),

  deleteTeamFromStore: (teamId) =>
    set((state) => ({
      teams: [...state.teams.filter((item) => item.id !== teamId)],
    })),

  setSelectTeamId: (teamId) => set({ selectTeamId: teamId }),

  setSelectTeamName: (teamName) => set({ selectTeamName: teamName }),

  setIsTeamMember: (value) => set({ isTeamMember: value }),
}));
