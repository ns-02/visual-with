import { Outlet } from 'react-router-dom';
import GuardPage from '../../pages/auth/GuardPage';
import { useAuthStore } from '@core/store/useAuthStore';

const PrivateRoute = () => {
  const isLoggedin = useAuthStore((state) => state.isLoggedin);

  // if (!isLoggedin) {
  //   return <GuardPage />;
  // }

  return <Outlet />;
};

export default PrivateRoute;
