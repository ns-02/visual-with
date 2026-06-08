import { UserTeamRule } from '../baseModel';

export interface ViewScheduleRequest {
  teamId: string;
}

export interface ViewScheduleResponse {
  id: number;
  userId: string;
  title: string;
  content: string;
  startDate: string;
  startTime: string;
  completeDate: string;
  completeTime: string;
}

export interface AddScheduleRequest {
  teamId: string;
  userId: string;
  title: string;
  content: string;
  startDate: string;
  startTime: string;
  completeDate: string;
  completeTime: string;
  wholeDay: boolean;
  createdDate: string;
  createdTime: string;
}

export interface AddScheduleResponse {
  id: number;
}

export interface UpdateScheduleRequest {
  id: number;
  teamId: string;
  userId: string;
  userTeamRole: UserTeamRule;
  title: string;
  content: string;
  startDate: string;
  startTime: string;
  completeDate: string;
  completeTime: string;
  wholeDay: boolean;
}

export interface DeleteScheduleRequest {
  id: number;
  teamId: string;
  userId: string;
  userTeamRole: UserTeamRule;
}
