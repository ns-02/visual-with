import { Link, Outlet } from 'react-router-dom';
import styles from './Auth.module.css';

function AuthPageLayout() {
  return (
    <div className={styles.auth_layout}>
      <span></span>
      <div className={styles.auth_container}>
        <Outlet />
      </div>

      <Link className={styles.link} to={'/'}>
        ← 홈으로 돌아가기
      </Link>
    </div>
  );
}

export default AuthPageLayout;
