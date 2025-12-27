import { useEffect, useState } from 'react';
import { useSchedule } from '@core/context/ScheduleContext';
import { getDate } from '@shared/utils/dateUtils';
import Calender from '../ui/Calender';
import styles from './ScheduleLayout.module.css';

function LeftCalendarPanel() {
  const { scheduleData } = useSchedule();
  const [selected, setSelected] = useState<Date>();
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const { year, month, day } = getDate();

  useEffect(() => {
    if (!selected) {
      setSelectedYear(year.toString());
      setSelectedMonth(month.toString());
      setSelectedDay(day.toString());
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
    <div className={styles.left_calender_panel}>
      <div className={styles.calender_container}>
        <Calender selected={selected} setSelected={setSelected} />
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
