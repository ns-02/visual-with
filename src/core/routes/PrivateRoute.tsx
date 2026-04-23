import { Outlet } from 'react-router-dom';
import GuardPage from '../../pages/auth/GuardPage';
import { useUserStore } from '@core/store/useUserStore';

const PrivateRoute = () => {
  const user = useUserStore((state) => state.user);

  if (import.meta.env.DEV) {
    return <Outlet />;
  }

  if (!user) {
    return <GuardPage />;
  }

  return <Outlet />;
};

export default PrivateRoute;
