import { useEffect, useState } from 'react';
import { useSchedule } from '@context/ScheduleContext';
import { getDate } from '@utils/dateUtils';
import Calender from '../ui/Calender';
import styles from './ScheduleLayout.module.css';

interface ScheduleTitle {
  id: number;
  title: string;
}

function LeftCalendar() {
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

  return (
    <div className={styles['left-calender']}>
      <div className={styles.calender_container}>
        <Calender selected={selected} setSelected={setSelected} />
      </div>
      <br />
      <div>
        <p>{selected ? `${selected.getDate()}일` : `${day}일 (오늘)`}</p>
        {scheduleData
          .filter((item) => {
            const selectedFormattedDate = `${selectedYear}-${selectedMonth}-${selectedDay}`;
            return item.startDate === selectedFormattedDate;
          })
          .map((item) => {
            return <p key={item.id}>{item.title}</p>;
          })}
      </div>
    </div>
  );
}

export default LeftCalendar;
