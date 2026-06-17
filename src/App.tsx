import AppRoutes from '@core/routes/AppRoutes';
import '@core/styles/globalVariables.css';
import '@core/styles/global.css';
import { Tooltip } from '@shared/components';
import ToastViewport from '@shared/components/Toast';

const App: React.FC = () => {
  return (
    <Tooltip.Provider>
      <AppRoutes />
      <ToastViewport />
    </Tooltip.Provider>
  );
};

export default App;
