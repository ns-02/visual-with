import MainHeader from '@features/main/MainHeader';
import { Outlet } from 'react-router-dom';
import styles from './Layouts.module.css';

function StandardLayout() {
  return (
    <>
      <MainHeader />
      <div className={styles.body}>
        <Outlet />
      </div>
    </>
  );
}

export default StandardLayout;
