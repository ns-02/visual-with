import { useWorkspaceParams } from '@core/hooks/useWorkspaceParams';
import { useScheduleStore } from '../store/useScheduleStore';
import ScheduleCard from '../components/ScheduleCard';
import styles from './ScheduleLayout.module.css';
import { useEffect, useMemo, useState } from 'react';
import { ScheduleData } from '@shared/models/Workspace';
import Calendar from '../components/Calendar';
import { getDate } from '@shared/utils/dateUtils';

function SchedulePage() {
  const scheduleData = useScheduleStore((state) => state.scheduleData);
  const { teamId } = useWorkspaceParams();
  const teamScheduleData = useMemo(
    () => scheduleData.filter((item) => item.teamId === teamId),
    [scheduleData, teamId],
  );

  const [selected, setSelected] = useState<Date>();
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const { day } = getDate();

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

  useEffect(() => {
    if (!selected) {
      const { year: y, month: m, day: d } = getDate();
      setSelectedYear(y.toString());
      setSelectedMonth(m.toString());
      setSelectedDay(d.toString());
    } else {
      setSelectedYear(selected.getFullYear().toString());
      setSelectedMonth((selected.getMonth() + 1).toString());
      setSelectedDay(selected.getDate().toString());
    }
  }, [selected]);

  const filteredSchedules = teamScheduleData.filter((item) => {
    const selectedFormattedDate = `${selectedYear}-${selectedMonth}-${selectedDay}`;
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
