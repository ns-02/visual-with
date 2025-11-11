import Calender from '../components/Calendar';
import styles from './ScheduleSection.module.css'

function LeftCalendar() {
  return (
    <div className={styles["left-calender"]}>
      <div className={styles.calender_container}>
        <Calender />
      </div>
    </div>
  )
}

export default LeftCalendar;