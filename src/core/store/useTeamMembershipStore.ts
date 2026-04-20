import { teamMembershipMocks } from '@mocks/TeamMembershipDataMocks';
import { TeamId } from '@shared/models/Team';
import {
  TeamRule,
  TeamMembershipData,
  createTeamMembershipData,
  getTeamRuleName,
} from '@shared/models/TeamMembership';
import { create } from 'zustand';

interface TeamMembershipState {
  teamRuleData: TeamMembershipData[];
  currentRule: TeamRule;
  addTeamRule: (userId: string, teamId: TeamId, rule: TeamRule) => void;
  deleteTeamRule: (teamId: TeamId) => void;
  updateTeamRule: (teamId: TeamId, rule: TeamRule) => void;
  setCurrentRule: (rule: TeamRule) => void;
}

export const useTeamMembershipStore = create<TeamMembershipState>((set) => ({
  teamRuleData: teamMembershipMocks || [],
  currentRule: 'MEMBER',

  addTeamRule: (userId, teamId, rule) =>
    set((state) => ({
      teamRuleData: [
        ...state.teamRuleData,
        createTeamMembershipData(userId, teamId, rule),
      ],
    })),

  deleteTeamRule: (teamId) =>
    set((state) => ({
      teamRuleData: state.teamRuleData.filter((item) => item.teamId !== teamId),
    })),

  updateTeamRule: (teamId, rule) =>
    set((state) => ({
      teamRuleData: state.teamRuleData.map((item) =>
        item.teamId === teamId
          ? { ...item, rule, name: getTeamRuleName(rule) }
          : item,
      ),
    })),

  setCurrentRule: (rule) => set({ currentRule: rule }),
}));
