import AppProviders from '@core/providers/AppProviders';
import AppRoutes from '@core/routes/AppRoutes';
import '@core/styles/globalVariables.css';
import '@core/styles/global.css';

const App: React.FC = () => {
  return (
    <AppProviders>
      <AppRoutes />
    </AppProviders>
  );
};

export default App;
