import { useTeam } from '../../../../context/TeamContext';
import TopFiles from "../section/TopFiles";
import BottomSection from "../section/BottomSection";
import styles from './FileSharingPage.module.css'

function FileSharingPage() {
  // 현재 선택된 팀 데이터
  const { selectTeamData } = useTeam();

  return (
    <div className={styles.page}>
      <TopFiles></TopFiles>
      <BottomSection></BottomSection>
    </div>
  )
}

export default FileSharingPage;
