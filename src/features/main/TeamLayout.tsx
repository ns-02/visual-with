import { useTeamMembersBootstrap } from '@core/hooks/useTeamMembersBootstrap';
import { useTeamAccessGuard } from '@features/teamManager/hooks/useTeamAccessGuard';
import { Outlet } from 'react-router-dom';
import MainHeader from '@features/main/MainHeader';
import styles from './Layouts.module.css';

function TeamLayout() {
  useTeamAccessGuard();
  useTeamMembersBootstrap();

  return (
    <>
      <MainHeader />
      <div className={styles.body}>
        <Outlet />
      </div>
    </>
  );
}

export default TeamLayout;
