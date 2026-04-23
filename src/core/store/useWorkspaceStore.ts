import { teamDataMocks } from '@mocks/TeamDataMocks';
import { teamMembershipMocks } from '@mocks/TeamMembershipDataMocks';
import {
  createTeamMembershipData,
  getTeamRuleName,
  TeamData,
  TeamId,
  TeamMembershipData,
  TeamName,
  TeamRule,
} from '@shared/models/Workspace';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface WorkspaceState {
  teamData: TeamData[];
  membershipData: TeamMembershipData[];

  selectTeamId: TeamId | null;
  isTeamInit: boolean;

  setSelectTeam: (teamId: TeamId | null) => void;
  createTeamInStore: (teamId: TeamId, teamName: TeamName) => void;
  deleteTeamFromStore: (teamId: TeamId) => void;

  addTeamRule: (userId: string, teamId: TeamId, rule: TeamRule) => void;
  deleteTeamRule: (teamId: TeamId) => void;
  updateTeamRule: (teamId: TeamId, rule: TeamRule) => void;
}

export const useWorkspaceStore = create<WorkspaceState>()(
  persist(
    (set, get) => ({
      teamData: teamDataMocks || [],
      membershipData: teamMembershipMocks || [],

      selectTeamId: '',
      selectTeamName: '',
      currentRule: 'MEMBER',
      isTeamInit: false,

      setSelectTeam: (teamId) => {
        const { isTeamInit } = get();

        if (!isTeamInit) set({ isTeamInit: true });

        set({
          selectTeamId: teamId,
        });
      },

      createTeamInStore: (teamId, teamName) => {
        const { isTeamInit } = get();

        if (!isTeamInit) set({ isTeamInit: true });

        set((state) => ({
          teamData: [...state.teamData, { id: teamId, name: teamName }],
        }));
      },

      deleteTeamFromStore: (teamId) =>
        set((state) => ({
          teamData: [...state.teamData.filter((item) => item.id !== teamId)],
        })),

      addTeamRule: (userId, teamId, rule) =>
        set((state) => ({
          membershipData: [
            ...state.membershipData,
            createTeamMembershipData(userId, teamId, rule),
          ],
        })),

      deleteTeamRule: (teamId) =>
        set((state) => ({
          membershipData: state.membershipData.filter(
            (item) => item.teamId !== teamId,
          ),
        })),

      updateTeamRule: (teamId, rule) =>
        set((state) => ({
          membershipData: state.membershipData.map((item) =>
            item.teamId === teamId
              ? { ...item, rule, name: getTeamRuleName(rule) }
              : item,
          ),
        })),
    }),
    {
      name: 'workspace-storage',
      partialize: (state) => ({
        selectTeamId: state.selectTeamId,
        isTeamInit: state.isTeamInit,
      }),
    },
  ),
);
