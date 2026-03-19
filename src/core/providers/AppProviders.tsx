import { FriendProvider, TeamProvider } from '@core/contexts';
import { Tooltip } from '@shared/components/ui';

const AppProviders = ({ children }: { children: React.ReactNode }) => (
  <Tooltip.Provider>
    <TeamProvider>
      <FriendProvider>{children}</FriendProvider>
    </TeamProvider>
  </Tooltip.Provider>
);

export default AppProviders;
