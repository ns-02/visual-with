import AppRoutes from '@core/routes/AppRoutes';
import '@core/styles/globalVariables.css';
import '@core/styles/global.css';
import { Tooltip } from '@shared/components';
import ToastViewport from '@shared/components/Toast';
import { useUserBootstrap } from '@core/hooks/useUserBootstrap';

const App: React.FC = () => {
  useUserBootstrap();

  return (
    <Tooltip.Provider>
      <AppRoutes />
      <ToastViewport />
    </Tooltip.Provider>
  );
};

export default App;
