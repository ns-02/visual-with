// 조회

import { UserTeamRule } from '../baseModel';

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
