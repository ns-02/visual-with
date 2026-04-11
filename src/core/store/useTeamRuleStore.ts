import { teamRuleDataMocks } from '@mocks/TeamRuleDataMocks';
import { TeamId } from '@shared/models/Team';
import {
  TeamRule,
  TeamRuleData,
  createTeamRuleData,
  getTeamRuleName,
} from '@shared/models/TeamRule';
import { create } from 'zustand';

interface TeamRuleState {
  teamRuleData: TeamRuleData[];
  addTeamRule: (teamId: TeamId, rule: TeamRule) => void;
  deleteTeamRule: (teamId: TeamId) => void;
  updateTeamRule: (teamId: TeamId, rule: TeamRule) => void;
}

export const useTeamRuleStore = create<TeamRuleState>((set) => ({
  teamRuleData: teamRuleDataMocks || [],

  addTeamRule: (teamId, rule) =>
    set((state) => ({
      teamRuleData: [...state.teamRuleData, createTeamRuleData(teamId, rule)],
    })),

  deleteTeamRule: (teamId) =>
    set((state) => ({
      teamRuleData: state.teamRuleData.filter((item) => item.id !== teamId),
    })),

  updateTeamRule: (teamId, rule) =>
    set((state) => ({
      teamRuleData: state.teamRuleData.map((item) =>
        item.id === teamId
          ? { ...item, rule, name: getTeamRuleName(rule) }
          : item,
      ),
    })),
}));
