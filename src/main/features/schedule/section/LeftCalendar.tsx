import { useState } from 'react';
import Calender from '../components/Calendar';
import styles from './ScheduleSection.module.css'

function LeftCalendar() {
  const [selected, setSelected] = useState<Date>();
  let today = new Date().getDate();

  return (
    <div className={styles["left-calender"]}>
      <div className={styles.calender_container}>
        <Calender selected={selected} setSelected={setSelected} />
      </div>
      <br />
      <div>
        <p>{selected ? `${selected.getDate()}일` : `${today}일 (오늘)`}</p>
        <p>일정 제목 1</p>
        <p>일정 제목 2</p>
        <p>일정 제목 3</p>
      </div>
    </div>
  )
}

export default LeftCalendar;