import { Outlet } from 'react-router-dom';
import { useAuth } from '@context/AuthContext';
import GuardPage from '../pages/auth/GuardPage';

const PrivateRoute = () => {
  const { isLoggedin } = useAuth();

  // if (!isLoggedin) {
  //   return <GuardPage />;
  // }

  return <Outlet />;
};

export default PrivateRoute;
