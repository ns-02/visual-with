import { useEffect, useState } from 'react';
import { useSchedule } from '@context/ScheduleContext';
import { ScheduleData } from '@models/Schedule';
import { getDate } from '@utils/dateUtils';
import ScheduleCard from '../ui/ScheduleCard';
import styles from './ScheduleLayout.module.css';

function RightContents() {
  const { month, day } = getDate();
  const { scheduleData } = useSchedule();
  const [completedData, setCompletedData] = useState<ScheduleData[] | null>(
    null,
  );
  const [inProgressData, setInProgressData] = useState<ScheduleData[] | null>(
    null,
  );
  const [upcomingData, setUpcomingData] = useState<ScheduleData[] | null>(null);

  useEffect(() => {
    if (!scheduleData) return;

    const nextCompletedData = scheduleData.filter(
      (item) => item.state === '완료',
    );
    const nextInProgressData = scheduleData.filter(
      (item) => item.state === '진행중',
    );
    const nextUpcomingData = scheduleData.filter(
      (item) => item.state === '예정',
    );

    setCompletedData(nextCompletedData);
    setInProgressData(nextInProgressData);
    setUpcomingData(nextUpcomingData);
  }, [scheduleData]);

  return (
    <div className={styles['right-contents']}>
      <div style={{ marginTop: '24px', marginBottom: '12px' }}>완료된 일정</div>
      {completedData?.map((item) => {
        return (
          <ScheduleCard
            key={item.id}
            id={item.id}
            title={item.title}
            date={item.startDate}
            time={item.startTime}
            state={item.state}
          />
        );
      })}
      <div style={{ marginTop: '24px', marginBottom: '12px' }}>
        진행 중인 일정
      </div>
      {inProgressData?.map((item) => {
        return (
          <ScheduleCard
            key={item.id}
            id={item.id}
            title={item.title}
            date={item.startDate}
            time={item.startTime}
            state={item.state}
          />
        );
      })}
      <div style={{ marginTop: '24px', marginBottom: '12px' }}>예정된 일정</div>
      {upcomingData?.map((item) => {
        return (
          <ScheduleCard
            key={item.id}
            id={item.id}
            title={item.title}
            date={item.startDate}
            time={item.startTime}
            state={item.state}
          />
        );
      })}
    </div>
  );
}

export default RightContents;
