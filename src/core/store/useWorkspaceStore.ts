import { teamDataMocks } from '@mocks/TeamDataMocks';
import { teamMembershipMocks } from '@mocks/TeamMembershipDataMocks';
import { TeamData, TeamMembershipData } from '@shared/models/Workspace';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface WorkspaceState {
  teamData: TeamData[];
  membershipData: TeamMembershipData[];

  selectTeamId: string | null;
  isTeamInit: boolean;
  isWorkspaceBootstrapped: boolean;

  setSelectTeam: (teamId: string | null) => void;
  setWorkspaceBootstrapped: (value: boolean) => void;
  setTeamList: (
    userId: string,
    teams: TeamData[],
    memberships: TeamMembershipData[],
  ) => void;
  createTeamInStore: (teamId: string, teamName: string) => void;
  deleteTeamFromStore: (teamId: string) => void;

  addTeamRule: (membership: TeamMembershipData) => void;
  updateTeamRule: (membership: TeamMembershipData) => void;
  deleteTeamRule: (teamId: string) => void;
  setTeamMembers: (teamId: string, memberships: TeamMembershipData[]) => void;
}

export const useWorkspaceStore = create<WorkspaceState>()(
  persist(
    (set, get) => ({
      teamData: teamDataMocks || [],
      membershipData: teamMembershipMocks || [],

      selectTeamId: '',
      isTeamInit: false,
      isWorkspaceBootstrapped: false,

      setSelectTeam: (teamId) => {
        const { isTeamInit } = get();

        if (!isTeamInit) set({ isTeamInit: true });

        set({
          selectTeamId: teamId,
        });
      },

      setWorkspaceBootstrapped: (value) => set({ isWorkspaceBootstrapped: value }),

      setTeamList: (userId, teams, memberships) => {
        set((state) => {
          const teamMap = new Map(
            state.teamData.map((item) => [item.id, item]),
          );
          teams.forEach((team) => teamMap.set(team.id, team));

          const otherMemberships = state.membershipData.filter(
            (item) => item.userId !== userId,
          );

          return {
            teamData: Array.from(teamMap.values()),
            membershipData: [...otherMemberships, ...memberships],
            isTeamInit: true,
          };
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

      setTeamMembers: (teamId, memberships) =>
        set((state) => ({
          membershipData: [
            ...state.membershipData.filter((item) => item.teamId !== teamId),
            ...memberships,
          ],
        })),

      updateTeamRule: (membership) => {
        const { teamId, userId } = membership;

        set((state) => ({
          membershipData: state.membershipData.map((item) =>
            item.teamId === teamId && item.userId === userId
              ? { ...item, ...membership }
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
