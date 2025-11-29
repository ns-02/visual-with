import { useTeam } from '@context/TeamContext';
import LeftCalendar from '../layouts/LeftCalendar';
import RightContents from '../layouts/RightContents';
import styles from './SchedulePage.module.css';

function SchedulePage() {
  // 현재 선택된 팀 데이터
  const { selectTeamData } = useTeam();

  return (
    <div className={styles.page}>
      <LeftCalendar></LeftCalendar>
      <RightContents></RightContents>
    </div>
  );
}

export default SchedulePage;
