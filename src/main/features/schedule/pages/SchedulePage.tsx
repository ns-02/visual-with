import { useTeam } from "@context/TeamContext";
import { LeftCalendar, RightContents } from "../section";
import styles from './SchedulePage.module.css'

function SchedulePage() {
  // 현재 선택된 팀 데이터
  const { selectTeamData } = useTeam();
  
  return (
    <div className={styles.page}>
      <LeftCalendar></LeftCalendar>
      <RightContents></RightContents>
    </div>
  )
}

export default SchedulePage;
