import { scheduleDataMocks } from '@mocks/ScheduleDataMocks';
import { ScheduleData } from '@shared/models/Workspace';

import { create } from 'zustand';

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

interface ScheduleState {
  scheduleData: ScheduleData[];
  addSchedule: (schedule: AddScheduleInput) => void;
  updateSchedule: (schedule: UpdateScheduleInput) => void;
  deleteSchedule: (scheduleId: number) => void;
}

export const useScheduleStore = create<ScheduleState>((set) => ({
  scheduleData: scheduleDataMocks || [],

  addSchedule: (schedule) =>
    set((state) => ({
      scheduleData: [
        ...state.scheduleData,
        {
          id:
            state.scheduleData.reduce(
              (max, item) => Math.max(max, item.id),
              0,
            ) + 1,
          title: schedule.title,
          authorId: schedule.authorId,
          authorName: schedule.authorName,
          startDate: schedule.startDate,
          startTime: schedule.startTime,
          finishDate: schedule.finishDate,
          finishTime: schedule.finishTime,
          description: schedule.description,
          state: '예정',
          teamId: schedule.teamId,
        },
      ],
    })),

  updateSchedule: (schedule) =>
    set((state) => ({
      scheduleData: state.scheduleData.map((item) =>
        item.id === schedule.id
          ? {
              ...item,
              ...schedule,
            }
          : item,
      ),
    })),

  deleteSchedule: (scheduleId) =>
    set((state) => ({
      scheduleData: state.scheduleData.filter((item) => item.id !== scheduleId),
    })),
}));
