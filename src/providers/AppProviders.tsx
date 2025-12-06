import {
  AreaOpenProvider,
  AuthProvider,
  FriendProvider,
  TeamProvider,
  ToolProvider,
  UserProvider,
} from '@context';

const AppProviders = ({ children }: { children: React.ReactNode }) => (
  <AreaOpenProvider>
    <TeamProvider>
      <FriendProvider>
        <ToolProvider>
          <AuthProvider>
            <UserProvider>{children}</UserProvider>
          </AuthProvider>
        </ToolProvider>
      </FriendProvider>
    </TeamProvider>
  </AreaOpenProvider>
);

export default AppProviders;
