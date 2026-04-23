import { Outlet } from 'react-router-dom';
import LeftMenu from './LeftMenu';
import MainHeader from './MainHeader';
import styles from './Layouts.module.css';

function MainLayout() {
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
