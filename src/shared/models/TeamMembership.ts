import { TeamId } from './Team';

export type TeamRule = 'ADMIN' | 'SUB_ADMIN' | 'MEMBER';

/** `TeamRule`과 1:1 대응하는 표시 이름. 키는 `TeamRule`에 종속된다. */

export const TEAM_RULE_DISPLAY_NAME = {
  ADMIN: '리더',
  SUB_ADMIN: '공동리더',
  MEMBER: '멤버',
} as const satisfies Record<TeamRule, string>;

export type TeamRuleName = (typeof TEAM_RULE_DISPLAY_NAME)[TeamRule];

export function getTeamRuleName(rule: TeamRule): TeamRuleName {
  return TEAM_RULE_DISPLAY_NAME[rule];
}

// 추가될 수 있는 속성
// status: 초대 수락 상태 여부(pending, active)
// joinedAt: 팀에 언제 들어왔는지
// nickname: 팀 내 별명
export interface TeamMembershipData {
  userId: string;
  teamId: TeamId;
  rule: TeamRule;

  /** `rule`에 1:1로 대응; 변경 시 `getTeamRuleName(rule)`과 동일하게 맞출 것 */
  name: TeamRuleName;
}

/** `name`을 `rule`에서 채워 일관된 `TeamMembershipData`를 만든다. */

export function createTeamMembershipData(
  userId: string,
  teamId: TeamId,
  rule: TeamRule,
): TeamMembershipData {
  return { userId, teamId, rule, name: getTeamRuleName(rule) };
}
