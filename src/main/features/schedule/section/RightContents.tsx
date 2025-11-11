import styles from './Section.module.css'

function RightContents() {
  return (
    <div className={styles["right-contents"]}>
      <div>
        오늘 (XX월 XX일)
      </div>
      <div>
        예정된 일정
      </div>
    </div>
  )
}

export default RightContents;