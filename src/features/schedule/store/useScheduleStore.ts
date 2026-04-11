import { ScheduleData } from '@features/schedule/models/Schedule';
import { scheduleDataMocks } from '@mocks/ScheduleDataMocks';
import { TeamId } from '@shared/models/Team';
import { create } from 'zustand';

interface ScheduleState {
  scheduleData: ScheduleData[];
  addSchedule: (
    title: string,
    description: string,
    startDate: string,
    startTime: string,
    finishDate: string,
    finishTime: string,
    teamId: TeamId,
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
  scheduleData: scheduleDataMocks || [],

  addSchedule: (
    title,
    description,
    startDate,
    startTime,
    finishDate,
    finishTime,
    teamId,
  ) =>
    set((state) => ({
      scheduleData: [
        ...state.scheduleData,
        {
          id:
            state.scheduleData.reduce(
              (max, item) => Math.max(max, item.id),
              0,
            ) + 1,
          title,
          startDate,
          startTime,
          finishDate,
          finishTime,
          description,
          state: '예정',
          teamId,
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
      scheduleData: state.scheduleData.map((item) =>
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
      scheduleData: state.scheduleData.filter((item) => item.id !== scheduleId),
    })),
}));
