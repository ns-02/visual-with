import styles from './TeamPage.module.css';
import { Button } from '@shared/components';
import { getIsAdmin } from '@shared/utils/permitUtils';
import { getTeamRuleName } from '@shared/models/Workspace';
import { useCurrentWorkspace } from '@core/hooks/useCurrentWorkspace';

function TeamPage() {
  const { selectTeamName, currentRule } = useCurrentWorkspace();

  return (
    <div className={styles.team_page}>
      <div className={styles.contents}>
        <div className={styles.team_header}>
          <div className={styles.team_info}>
            <h2>{`${selectTeamName}`}</h2>
            <p>역할: {getTeamRuleName(currentRule)}</p>
            <p>멤버 수: 미구현</p>
          </div>
          {currentRule && getIsAdmin(currentRule) && (
            <div className={styles.team_button_area}>
              <Button>팀 관리</Button>
            </div>
          )}
        </div>
        <div className={styles.dashboard_area}>
          <p>이 영역은 데이터 대시보드가 들어갈 예정입니다</p>
        </div>
      </div>
    </div>
  );
}

export default TeamPage;
