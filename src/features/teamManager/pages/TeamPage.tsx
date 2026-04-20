import { useTeamStore } from '@core/store/useTeamStore';
import styles from './TeamPage.module.css';
import { Button } from '@shared/components/ui';
import { useTeamRuleStore } from '@core/store/useTeamRuleStore';
import { useEffect, useState } from 'react';
import { TeamRuleName } from '@shared/models/TeamMembership';

function TeamPage() {
  const selectTeamId = useTeamStore((state) => state.selectTeamId);
  const selectTeamName = useTeamStore((state) => state.selectTeamName);
  const teamRuleData = useTeamRuleStore((state) => state.teamRuleData);
  const [currentRuleName, setCurrentRuleName] = useState<TeamRuleName | null>(
    null,
  );

  useEffect(() => {
    const nextRuleName = teamRuleData.find(
      (item) => item.teamId === selectTeamId,
    )?.name;

    if (!nextRuleName) return;

    setCurrentRuleName(nextRuleName);
  }, [selectTeamId, teamRuleData]);

  return (
    <div className={styles.page}>
      <div className={styles.contents}>
        <div className={styles.team_header}>
          <div className={styles.team_info}>
            <h2>{`${selectTeamName}`}</h2>
            <p>역할: {currentRuleName}</p>
            <p>멤버 수: 미구현</p>
          </div>
          <div className={styles.team_button_area}>
            <Button>팀 관리</Button>
          </div>
        </div>
        <div className={styles.dashboard_area}>
          <p>이 영역은 데이터 대시보드가 들어갈 예정입니다</p>
        </div>
      </div>
    </div>
  );
}

export default TeamPage;
