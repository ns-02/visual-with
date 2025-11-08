import styles from './Section.module.css'

function LeftCalendar() {
  return (
    <div className={styles["left-calender"]}>
      <div>
        <input type='date'></input>
      </div>
    </div>
  )
}

export default LeftCalendar;