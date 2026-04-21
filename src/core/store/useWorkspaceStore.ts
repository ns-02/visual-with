import { teamDataMocks } from '@mocks/TeamDataMocks';
import { teamMembershipMocks } from '@mocks/TeamMembershipDataMocks';
import { TeamData, TeamId, TeamName } from '@shared/models/Team';
import {
  createTeamMembershipData,
  getTeamRuleName,
  TeamMembershipData,
  TeamRule,
} from '@shared/models/TeamMembership';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface WorkspaceState {
  teamData: TeamData[];
  membershipData: TeamMembershipData[];

  selectTeamId: TeamId | null;
  selectTeamName: TeamName;
  currentRule: TeamRule;

  isTeamInit: boolean;

  setSelectTeam: (teamId: TeamId | null) => void;
  createTeamInStore: (teamId: TeamId, teamName: TeamName) => void;
  deleteTeamFromStore: (teamId: TeamId) => void;

  addTeamRule: (userId: string, teamId: TeamId, rule: TeamRule) => void;
  deleteTeamRule: (teamId: TeamId) => void;
  updateTeamRule: (teamId: TeamId, rule: TeamRule) => void;

  setCurrentRule: (rule: TeamRule) => void;
  setIsTeamInit: (init: boolean) => void;
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
        const team = get().teamData.find((t) => t.id === teamId);
        const membership = get().membershipData.find(
          (m) => m.teamId === teamId,
        );

        set({
          selectTeamId: teamId,
          selectTeamName: team?.name || '',
          currentRule: membership?.rule || 'MEMBER',
        });
      },

      createTeamInStore: (teamId, teamName) =>
        set((state) => ({
          teamData: [...state.teamData, { id: teamId, name: teamName }],
        })),

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

      setCurrentRule: (rule) => set({ currentRule: rule }),

      setIsTeamInit: (init) => set({ isTeamInit: init }),
    }),
    {
      name: 'workspace-storage',
      partialize: (state) => ({
        selectTeamId: state.selectTeamId,
        selectTeamName: state.selectTeamName,
        currentRule: state.currentRule,
        isTeamInit: state.isTeamInit,
      }),
    },
  ),
);
