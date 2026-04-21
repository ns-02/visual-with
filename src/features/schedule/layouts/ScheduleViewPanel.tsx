import { useWorkspaceParams } from '@core/hooks/useWorkspaceParams';
import { useEffect, useMemo, useState } from 'react';
import ScheduleCard from '../ui/ScheduleCard';
import styles from './ScheduleLayout.module.css';
import { useScheduleStore } from '../store/useScheduleStore';
import { ScheduleData } from '@shared/models/Schedule';

function ScheduleViewPanel() {
  const scheduleData = useScheduleStore((state) => state.scheduleData);
  const { teamId } = useWorkspaceParams();
  const teamScheduleData = useMemo(
    () => scheduleData.filter((item) => item.teamId === teamId),
    [scheduleData, teamId],
  );
  const [completedData, setCompletedData] = useState<ScheduleData[] | null>(
    null,
  );
  const [inProgressData, setInProgressData] = useState<ScheduleData[] | null>(
    null,
  );
  const [upcomingData, setUpcomingData] = useState<ScheduleData[] | null>(null);

  useEffect(() => {
    if (!teamScheduleData.length && !teamId) {
      setCompletedData([]);
      setInProgressData([]);
      setUpcomingData([]);
      return;
    }

    const nextCompletedData = teamScheduleData.filter(
      (item) => item.state === '완료',
    );
    const nextInProgressData = teamScheduleData.filter(
      (item) => item.state === '진행중',
    );
    const nextUpcomingData = teamScheduleData.filter(
      (item) => item.state === '예정',
    );

    setCompletedData(nextCompletedData);
    setInProgressData(nextInProgressData);
    setUpcomingData(nextUpcomingData);
  }, [teamScheduleData, teamId]);

  return (
    <div className={styles.schedule_view_panel}>
      <div style={{ marginTop: '24px', marginBottom: '12px' }}>완료된 일정</div>
      {completedData?.map((item) => {
        return (
          <ScheduleCard
            key={item.id}
            id={item.id}
            title={item.title}
            authorId={item.authorId}
            authorName={item.authorName}
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
            authorId={item.authorId}
            authorName={item.authorName}
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
            authorId={item.authorId}
            authorName={item.authorName}
            date={item.startDate}
            time={item.startTime}
            state={item.state}
          />
        );
      })}
    </div>
  );
}

export default ScheduleViewPanel;
