import { Outlet } from 'react-router-dom';
import LeftMenu from './LeftMenu';
import styles from './Layouts.module.css';
import { useSettingsManager } from '@features/settings/hooks/useSettingsManager';
import { useTeamChatStore } from '@features/chat/store/useTeamChatStore';
import { useWorkspaceBootstrap } from '@core/hooks/useWorkspaceBootstrap';
import { useEffect } from 'react';

function MainLayout() {
  // 사용자 bootstrap은 App 상위에서 완료된 뒤 이 layout에 도달한다.
  // MainLayout은 workspace/team bootstrap만 책임진다.
  useWorkspaceBootstrap();
  useSettingsManager();
  const connectSocket = useTeamChatStore((state) => state.connectSocket);
  const disconnectSocket = useTeamChatStore((state) => state.disconnectSocket);

  // useEffect(() => {
  //   connectSocket();
  //   return () => {
  //     disconnectSocket();
  //   };
  // }, [connectSocket, disconnectSocket]);

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
