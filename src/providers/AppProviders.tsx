import {
  AreaOpenProvider,
  AuthProvider,
  FriendProvider,
  TeamProvider,
  UserProvider,
} from '@context';
import ToolProviders from './ToolProviders';

const AppProviders = ({ children }: { children: React.ReactNode }) => (
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
);

export default AppProviders;
