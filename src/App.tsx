import AppRoutes from '@core/routes/AppRoutes';
import '@core/styles/globalVariables.css';
import '@core/styles/global.css';
import { Tooltip } from '@shared/components';

const App: React.FC = () => {
  return (
    <Tooltip.Provider>
      <AppRoutes />
    </Tooltip.Provider>
  );
};

export default App;
