import { useTeamStore } from '@core/store/useTeamStore';
import styles from './TeamPage.module.css';

function TeamPage() {
  const selectTeamName = useTeamStore((state) => state.selectTeamName);

  return (
    <div className={styles.page}>
      <div className={styles.contents}>
        <p>준비 중인 화면입니다</p>
        <p>{`이 페이지는 ${selectTeamName} 팀의 메인 페이지입니다`}</p>
      </div>
    </div>
  );
}

export default TeamPage;
