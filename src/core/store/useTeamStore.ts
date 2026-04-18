import { teamDataMocks } from '@mocks/TeamDataMocks';
import { TeamData, TeamId, TeamName } from '@shared/models/Team';
import { create } from 'zustand';

interface TeamState {
  teamData: TeamData[];
  // selectTeamData: TeamData | null; // 현재 선택된 팀 데이터
  selectTeamId: TeamId | null;
  selectTeamName: TeamName;
  createTeamInStore: (teamId: TeamId, teamName: TeamName) => void;
  deleteTeamFromStore: (teamId: TeamId) => void;
  // setSelectTeamData: (teamData: TeamData | null) => void;
  setSelectTeamId: (teamId: TeamId | null) => void;
}

export const useTeamStore = create<TeamState>((set) => ({
  teamData: teamDataMocks || [],
  // selectTeamData: null,
  selectTeamId: '',
  selectTeamName: '',

  createTeamInStore: (teamId, teamName) =>
    set((state) => ({
      teamData: [...state.teamData, { id: teamId, name: teamName }],
    })),

  deleteTeamFromStore: (teamId) =>
    set((state) => ({
      teamData: [...state.teamData.filter((item) => item.id !== teamId)],
    })),

  // setSelectTeamData: (teamData) => set({ selectTeamData: teamData }),

  setSelectTeamId: (teamId) =>
    set((state) => ({
      selectTeamId: teamId,
      selectTeamName: state.teamData.find((item) => item.id === teamId)?.name,
    })),
}));
