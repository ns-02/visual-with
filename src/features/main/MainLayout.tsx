import { Outlet } from 'react-router-dom';
import LeftMenu from './LeftMenu';
import MainHeader from './MainHeader';
import styles from './Layouts.module.css';
import { useSettingsManager } from '@features/settings/hooks/useSettingsManager';
// import { useTeamChatStore } from '@features/teamChat/store/useTeamChatStore';
// import { useEffect } from 'react';

function MainLayout() {
  useSettingsManager();
  // const connectSocket = useTeamChatStore((state) => state.connectSocket);
  // const disconnectSocket = useTeamChatStore((state) => state.disconnectSocket);

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
        <MainHeader />
        <div className={styles.body}>
          <Outlet />
        </div>
      </section>
    </>
  );
}

export default MainLayout;
