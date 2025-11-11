import styles from './ScheduleSection.module.css'

function LeftCalendar() {
  return (
    <div className={styles["left-calender"]}>
      <div>
        <input name="schedule-date" type='date'></input>
      </div>
    </div>
  )
}

export default LeftCalendar;