import { useTeam } from '@context/TeamContext';
import { BottomSection, TopFileNavBar } from '../section';
import styles from './FileSharingPage.module.css'

function FileSharingPage() {
  // 현재 선택된 팀 데이터
  const { selectTeamData } = useTeam();

  return (
    <div className={styles.page}>
      <TopFileNavBar></TopFileNavBar>
      <BottomSection></BottomSection>
    </div>
  )
}

export default FileSharingPage;
