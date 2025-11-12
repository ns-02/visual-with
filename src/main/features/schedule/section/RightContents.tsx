import styles from './ScheduleSection.module.css'

function RightContents() {
  let month = new Date().getMonth() + 1;
  let today = new Date().getDate();

  return (
    <div className={styles["right-contents"]}>
      <div>
        {`오늘 (${month}월 ${today}일)`}
      </div>
      <div>
        예정된 일정
      </div>
    </div>
  )
}

export default RightContents;