export type ScheduleState = '완료' | '진행중' | '예정';

export interface ScheduleData {
  id: number;
  title: string;
  startDate: string;
  startTime: string;
  finishDate?: string;
  finishTime?: string;
  description?: string;
  state: ScheduleState;
}
