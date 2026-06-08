export type UserTeamRule = 'ADMIN' | 'SUB_ADMIN' | 'MEMBER';

export interface CreateTeamRequest {
  userId: string;
  teamName: string;
}

export interface CreateTeamResponse {
  id: string;
  teamName: string;
  creatorId: string;
}

export interface DeleteTeamRequest {
  userId: string;
  teamId: string;
}

export interface DeleteTeamResponse {
  message: string;
}

export interface SearchUserRequest {
  userId: string; // 검색할 유저 아이디
}

export interface SearchUserResponse {
  userId: string;
  name: string;
  email: string;
}

type InvitationStatus = 'PENDING' | 'ACCEPTED' | 'REJECTED';

// 팀 ID 초대
export interface InviteTeamByUserIdRequest {
  userId: string; // 유저 아이디
  invitedUserId: string; // 초대받은 유저 아이디
  teamId: string; // 팀 아이디
}

export interface InviteTeamByUserIdResponse {
  invitationId: number;
  teamId: string;
  userId: string;
  status: InvitationStatus;
}

// 팀 ID 초대 수락
export interface AcceptTeamInvitationByUserIdRequest {
  teamId: string;
  userId: string;
}

export interface AcceptTeamInvitationByUserIdResponse {
  message: string;
}

// 팀 URL 초대
export interface InviteTeamByURLRequest {
  teamId: string; // 팀 아이디
}

export interface InviteTeamByURLResponse {
  url: string;
}

// 팀 URL 초대 수락
export interface AcceptTeamInvitationByURLRequest {
  teamId: string;
  invitationCode: string;
  userId: string;
}

export interface AcceptTeamInvitationByURLResponse {
  message: string;
}

export interface SelectTeamMemberListRequest {
  teamId: string;
}

export interface SelectTeamMemberListResponse {
  userId: string;
  teamId: string;
  userTeamRole: UserTeamRule;
  invitationStatus: InvitationStatus;
}

export interface SelectTeamListRequest {
  userId: string;
}

export interface SelectTeamListResponse {
  userId: string;
  teamId: string;
  teamName: string;
  userTeamRole: UserTeamRule;
}
