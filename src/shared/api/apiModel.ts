export interface checkIdRequest {
  userId: string;
}

export interface checkIdResponse {
  available: boolean;
}

// 회원가입 요청
export interface SignupRequest {
  userId: string;
  password: string;
  email: string;
  name: string;
}

// 회원가입 응답 (성공)
export interface SignupResponse {
  id: number;
  user_id: string;
}

// 로그인 요청
export interface LoginRequest {
  userId: string;
  password: string;
}

// 로그인 응답 (성공)
export interface LoginResponse {
  userId: string;
  name: string;
  userEmail: string;
  token: string;
  message: string;
}

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

export interface InviteTeamByUserIdRequest {
  userId: string; // 유저 아이디
  invitedUserId: string; // 초대받은 유저 아이디
  teamId: string; // 팀 아이디
}

export interface InviteTeamByUserIdResponse {
  invitationId: number;
  teamId: string;
  userId: string;
}

// 할 일 관련 API
// 조회
export interface ViewTodoRequest {
  teamId: string;
}

export interface ViewTodoResponse {
  id: number;
  userId: string;
  title: string;
  content: string;
  completed: boolean;
}

// 생성
export interface AddTodoRequest {
  teamId: string;
  userId: string;
  title: string;
  content: string;
  createdDate: string;
  createdTime: string;
}

export interface AddTodoResponse {
  id: number;
}

type UserTeamRule = 'ADMIN' | 'SUB_ADMIN' | 'MEMBER';

// 내용 수정
export interface UpdateTodoContentRequest {
  id: number;
  teamId: string;
  userId: string;
  title: string;
  userTeamRole: UserTeamRule;
  content: string;
}

// 할 일 여부 수정
export interface UpdateTodoCompleteRequest {
  id: number;
  teamId: string;
  userId: string;
  userTeamRole: UserTeamRule;
  complete: boolean;
  completeDate: string;
  completeTime: string;
}

// 삭제
export interface DeleteTodoRequest {
  id: number;
  teamId: string;
  userId: string;
  userTeamRole: UserTeamRule;
}
