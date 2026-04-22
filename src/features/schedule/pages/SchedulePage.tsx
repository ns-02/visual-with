import { useTeamId } from '@core/hooks/useWorkspaceParams';
import { useScheduleStore } from '../store/useScheduleStore';
import ScheduleCard from '../components/ScheduleCard';
import styles from './ScheduleLayout.module.css';
import { useMemo, useState } from 'react';
import Calendar from '../components/Calendar';
import { formatDate } from '@shared/utils/formatDate';

function SchedulePage() {
  const scheduleData = useScheduleStore((state) => state.scheduleData);
  const teamId = useTeamId();

  const teamScheduleData = useMemo(
    () => scheduleData.filter((item) => item.teamId === teamId),
    [scheduleData, teamId],
  );

  const completedData = useMemo(
    () => teamScheduleData.filter((item) => item.state === '완료'),
    [teamScheduleData],
  );

  const inProgressData = useMemo(
    () => teamScheduleData.filter((item) => item.state === '진행중'),
    [teamScheduleData],
  );

  const upcomingData = useMemo(
    () => teamScheduleData.filter((item) => item.state === '예정'),
    [teamScheduleData],
  );

  const [selected, setSelected] = useState<Date>();
  const day = new Date().getDate();

  const filteredSchedules = teamScheduleData.filter((item) => {
    const selectedFormattedDate = selected
      ? formatDate(selected)
      : formatDate();
    return item.startDate === selectedFormattedDate;
  });

  return (
    <div className={styles.schedule_root}>
      <div className={styles.left_calendar_panel}>
        <div className={styles.calendar_container}>
          <Calendar selected={selected} setSelected={setSelected} />
        </div>
        <br />
        <div>
          <p>{selected ? `${selected.getDate()}일` : `${day}일 (오늘)`}</p>
          {filteredSchedules.length > 0 ? (
            filteredSchedules.map((item) => {
              return <p key={item.id}>{item.title}</p>;
            })
          ) : (
            <p style={{ color: '#777' }}>일정 없음</p>
          )}
        </div>
      </div>

      <div className={styles.schedule_view_panel}>
        <div style={{ marginTop: '24px', marginBottom: '12px' }}>
          완료된 일정
        </div>
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
        <div style={{ marginTop: '24px', marginBottom: '12px' }}>
          예정된 일정
        </div>
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
    </div>
  );
}

export default SchedulePage;
