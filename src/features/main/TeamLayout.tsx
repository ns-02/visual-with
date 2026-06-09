import { useTeamMembersBootstrap } from '@core/hooks/useTeamMembersBootstrap';
import { useTeamAccessGuard } from '@features/teamManager/hooks/useTeamAccessGuard';
import { Outlet } from 'react-router-dom';
import MainHeader from '@features/main/MainHeader';
import styles from './Layouts.module.css';
import TeamMemberList from '@features/teamManager/components/TeamMemberList';

function TeamLayout() {
  useTeamAccessGuard();
  useTeamMembersBootstrap();

  return (
    <div className={styles.team_workspace}>
      <div className={styles.content_column}>
        <MainHeader />
        <div className={styles.body}>
          <Outlet />
        </div>
      </div>

      <div className={styles.team_aside}>
        <TeamMemberList />
      </div>
    </div>
  );
}

export default TeamLayout;
