import { Outlet } from 'react-router-dom';
import GuardPage from '../../pages/auth/GuardPage';
import { useUserStore } from '@core/store/useUserStore';
import { Spinner } from '@shared/components';
import styles from './PrivateRoute.module.css';

const PrivateRoute = () => {
  const user = useUserStore((state) => state.user);
  const isUserBootstrapped = useUserStore((state) => state.isUserBootstrapped);

  if (import.meta.env.DEV) {
    return <Outlet />;
  }

  if (!isUserBootstrapped) {
    return (
      <div className={styles.bootstrap_loading}>
        <Spinner />
        <p>사용자 확인 중입니다...</p>
      </div>
    );
  }

  if (!user) {
    return <GuardPage type='login' />;
  }

  return <Outlet />;
};

export default PrivateRoute;
