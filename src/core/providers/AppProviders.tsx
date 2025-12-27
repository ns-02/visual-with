import {
  AreaOpenProvider,
  AuthProvider,
  FriendProvider,
  TeamProvider,
  UserProvider,
} from '@core/contexts';
import { Tooltip } from '@shared/components/ui';
import ToolProviders from './ToolProviders';

const AppProviders = ({ children }: { children: React.ReactNode }) => (
  <Tooltip.Provider>
    <AreaOpenProvider>
      <ToolProviders>
        <TeamProvider>
          <FriendProvider>
            <AuthProvider>
              <UserProvider>{children}</UserProvider>
            </AuthProvider>
          </FriendProvider>
        </TeamProvider>
      </ToolProviders>
    </AreaOpenProvider>
  </Tooltip.Provider>
);

export default AppProviders;
