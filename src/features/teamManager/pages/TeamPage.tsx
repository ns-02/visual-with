import { useTeamStore } from '@core/store/useTeamStore';
import styles from './TeamPage.module.css';
import { Button } from '@shared/components/ui';

function TeamPage() {
  const selectTeamName = useTeamStore((state) => state.selectTeamName);

  return (
    <div className={styles.page}>
      <div className={styles.contents}>
        <h2>{`${selectTeamName}`}</h2>
        <Button>팀 관리</Button>
        <p>역할: </p>
        <p>멤버 수: </p>
        <p>이 영역은 데이터 대시보드가 들어갈 예정입니다</p>
      </div>
    </div>
  );
}

export default TeamPage;
