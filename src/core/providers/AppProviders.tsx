import { TeamProvider } from '@core/contexts';
import { Tooltip } from '@shared/components/ui';

const AppProviders = ({ children }: { children: React.ReactNode }) => (
  <Tooltip.Provider>
    <TeamProvider>{children}</TeamProvider>
  </Tooltip.Provider>
);

export default AppProviders;
