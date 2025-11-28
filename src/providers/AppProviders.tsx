import {
  AuthProvider,
  FriendProvider,
  TeamProvider,
  ToolProvider,
  UserProvider,
} from '@context';

const AppProviders = ({ children }: { children: React.ReactNode }) => (
  <TeamProvider>
    <FriendProvider>
      <ToolProvider>
        <AuthProvider>
          <UserProvider>{children}</UserProvider>
        </AuthProvider>
      </ToolProvider>
    </FriendProvider>
  </TeamProvider>
);

export default AppProviders;
