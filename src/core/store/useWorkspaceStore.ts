import { teamDataMocks } from '@mocks/TeamDataMocks';
import { teamMembershipMocks } from '@mocks/TeamMembershipDataMocks';
import {
  TeamData,
  TeamId,
  TeamMembershipData,
  TeamName,
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

  addTeamRule: (membership: TeamMembershipData) => void;
  updateTeamRule: (membership: TeamMembershipData) => void;
  deleteTeamRule: (teamId: TeamId) => void;
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

      addTeamRule: (membership) =>
        set((state) => ({
          membershipData: [...state.membershipData, membership],
        })),

      deleteTeamRule: (teamId) =>
        set((state) => ({
          membershipData: state.membershipData.filter(
            (item) => item.teamId !== teamId,
          ),
        })),

      updateTeamRule: (membership) => {
        const { teamId, userId } = membership;

        set((state) => ({
          membershipData: state.membershipData.map((item) =>
            item.teamId === teamId && item.userId === userId
              ? { ...item, membership }
              : item,
          ),
        }));
      },
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
