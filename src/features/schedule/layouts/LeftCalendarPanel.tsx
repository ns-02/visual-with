import { useEffect, useState } from 'react';
import { getDate } from '@shared/utils/dateUtils';
import Calendar from '../ui/Calendar';
import styles from './ScheduleLayout.module.css';
import { useScheduleStore } from '../store/useScheduleStore';

function LeftCalendarPanel() {
  const scheduleData = useScheduleStore((state) => state.schedules);
  const [selected, setSelected] = useState<Date>();
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const { day } = getDate();

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

  const filteredSchedules = scheduleData.filter((item) => {
    const selectedFormattedDate = `${selectedYear}-${selectedMonth}-${selectedDay}`;
    return item.startDate === selectedFormattedDate;
  });

  return (
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
  );
}

export default LeftCalendarPanel;
