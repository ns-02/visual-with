import { ScheduleData } from '@models/Schedule';

export const scheduleDataMocks: ScheduleData[] = [
  {
    id: 1,
    title: '요구사항 인터뷰',
    startDate: '2025-11-19',
    startTime: '09:30',
    state: '완료',
  },
  {
    id: 2,
    title: '코드 리뷰',
    startDate: '2025-11-20',
    startTime: '14:00',
    state: '진행중',
  },
  {
    id: 3,
    title: '주간 팀 작업 계획',
    startDate: '2025-11-20',
    startTime: '16:30',
    state: '진행중',
  },
  {
    id: 4,
    title: '프로젝트 미팅',
    startDate: '2025-11-21',
    startTime: '10:00',
    state: '예정',
  },
  {
    id: 5,
    title: '디자인 리뷰',
    startDate: '2025-11-22',
    startTime: '15:00',
    state: '예정',
  },
  {
    id: 6,
    title: '클라이언트 미팅',
    startDate: '2025-11-23',
    startTime: '11:00',
    state: '예정',
  },
];
