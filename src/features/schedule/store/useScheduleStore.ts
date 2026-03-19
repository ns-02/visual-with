import { ScheduleData } from '@features/schedule/models/Schedule';
import { scheduleDataMocks } from '@mocks/ScheduleDataMocks';
import { create } from 'zustand';

interface ScheduleState {
  schedules: ScheduleData[];
  addSchedule: (
    title: string,
    description: string,
    startDate: string,
    startTime: string,
    finishDate: string,
    finishTime: string,
  ) => void;
  updateSchedule: (
    title: string,
    description: string,
    scheduleId: number,
    startDate: string,
    startTime: string,
    finishDate: string,
    finishTime: string,
  ) => void;
  deleteSchedule: (scheduleId: number) => void;
}

export const useScheduleStore = create<ScheduleState>((set) => ({
  schedules: scheduleDataMocks || [],

  addSchedule: (
    title,
    description,
    startDate,
    startTime,
    finishDate,
    finishTime,
  ) =>
    set((state) => ({
      schedules: [
        ...state.schedules,
        {
          id:
            state.schedules.reduce((max, item) => Math.max(max, item.id), 0) +
            1,
          title,
          startDate,
          startTime,
          finishDate,
          finishTime,
          description,
          state: '예정',
        },
      ],
    })),

  updateSchedule: (
    title,
    description,
    scheduleId,
    startDate,
    startTime,
    finishDate,
    finishTime,
  ) =>
    set((state) => ({
      schedules: state.schedules.map((item) =>
        item.id === scheduleId
          ? {
              ...item,
              title,
              startDate,
              startTime,
              finishDate,
              finishTime,
              description,
            }
          : item,
      ),
    })),

  deleteSchedule: (scheduleId) =>
    set((state) => ({
      schedules: state.schedules.filter((item) => item.id !== scheduleId),
    })),
}));
