import { useState } from 'react';
import Calender from '../ui/Calender';
import styles from './ScheduleLayout.module.css';
import { getDate } from '@utils/dateUtils';

function LeftCalendar() {
  const [selected, setSelected] = useState<Date>();
  const [day] = getDate();

  return (
    <div className={styles['left-calender']}>
      <div className={styles.calender_container}>
        <Calender selected={selected} setSelected={setSelected} />
      </div>
      <br />
      <div>
        <p>{selected ? `${selected.getDate()}일` : `${day}일 (오늘)`}</p>
        <p>일정 제목 1</p>
        <p>일정 제목 2</p>
        <p>일정 제목 3</p>
      </div>
    </div>
  );
}

export default LeftCalendar;
