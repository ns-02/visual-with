import { TeamId } from '@shared/models/Team';

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

export type AddScheduleInput = Pick<
  ScheduleData,
  | 'title'
  | 'authorId'
  | 'authorName'
  | 'startDate'
  | 'startTime'
  | 'finishDate'
  | 'finishTime'
  | 'description'
  | 'teamId'
>;

export type UpdateScheduleInput = Pick<ScheduleData, 'id'> &
  Partial<
    Pick<
      ScheduleData,
      | 'title'
      | 'authorId'
      | 'authorName'
      | 'startDate'
      | 'startTime'
      | 'finishDate'
      | 'finishTime'
      | 'description'
    >
  >;
