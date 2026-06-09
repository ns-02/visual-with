import { Outlet } from 'react-router-dom';
import LeftMenu from './LeftMenu';
import styles from './Layouts.module.css';
import { useSettingsManager } from '@features/settings/hooks/useSettingsManager';
import { useTeamChatStore } from '@features/teamChat/store/useTeamChatStore';
import { useWorkspaceBootstrap } from '@core/hooks/useWorkspaceBootstrap';
import { useEffect } from 'react';
import { useUserBootstrap } from '@core/hooks/useUserBootstrap';

function MainLayout() {
  useUserBootstrap();
  useWorkspaceBootstrap();
  useSettingsManager();
  const connectSocket = useTeamChatStore((state) => state.connectSocket);
  const disconnectSocket = useTeamChatStore((state) => state.disconnectSocket);

  useEffect(() => {
    connectSocket();
    return () => {
      disconnectSocket();
    };
  }, [connectSocket, disconnectSocket]);

  return (
    <>
      <LeftMenu />
      <section className={styles.rightsection}>
        <Outlet />
      </section>
    </>
  );
}

export default MainLayout;
