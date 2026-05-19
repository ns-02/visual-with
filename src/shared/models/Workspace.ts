export type TeamId = string;
export type TeamName = string;
export type TeamRule = 'ADMIN' | 'SUB_ADMIN' | 'MEMBER';
export type ToolId =
  | 'home'
  | 'team-chat'
  | 'files'
  | 'schedule'
  | 'todos'
  | 'friends'
  | 'direct-chat';

export const TEAM_RULE_DISPLAY_NAME = {
  ADMIN: '리더',
  SUB_ADMIN: '공동리더',
  MEMBER: '멤버',
} as const satisfies Record<TeamRule, string>;

export type TeamRuleName = (typeof TEAM_RULE_DISPLAY_NAME)[TeamRule];

export function getTeamRuleName(rule: TeamRule): TeamRuleName {
  return TEAM_RULE_DISPLAY_NAME[rule];
}

export interface TeamData {
  id: TeamId;
  name: TeamName;
}

export type MembershipStatus = 'PENDING' | 'ACCEPTED' | 'DECLINED';

export interface TeamMembershipData {
  userId: string;
  teamId: TeamId;
  rule: TeamRule;
  ruleName: TeamRuleName;
  status: MembershipStatus;
}

export function createMembership(
  userId: string,
  teamId: TeamId,
  rule: TeamRule,
  status: MembershipStatus,
): TeamMembershipData {
  return { userId, teamId, rule, ruleName: getTeamRuleName(rule), status };
}

export interface ChatData {
  id: number;
  authorId: string;
  authorName: string;
  chat: string;
  createdAt: string;
  time: string;
  isMe: boolean;
}

export interface BaseFileData {
  id: number;
  authorId: string;
  authorName: string;
  fileName: string;
  fileSize: string;
  fileType: string;
  date: string;
  timeAgo?: string;
}

// 팀 파일
export interface TeamFileData extends BaseFileData {
  teamId: TeamId;
}

// 친구 간 파일
export interface DirectFileData extends BaseFileData {
  friendId: string;
}

export type ScheduleState = '완료' | '진행중' | '예정';

export interface ScheduleData {
  id: number;
  title: string;
  authorId: string;
  authorName: string;
  startDate: string;
  startTime: string;
  finishDate?: string;
  finishTime?: string;
  description?: string;
  state: ScheduleState;
  teamId: TeamId;
}

export interface TodoData {
  id: number;
  title: string;
  description?: string;
  checked: boolean;
  teamId: TeamId;
  authorId: string;
  authorName: string;
}
