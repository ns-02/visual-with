import { ScheduleData } from '@shared/models/Workspace';

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
