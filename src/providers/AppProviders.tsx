import { AuthProvider } from "../context/AuthContext";
import { UserProvider } from "../context/UserContext";
import { ToolProvider } from "../context/ToolContext";
import { FriendProvider } from "../context/FriendContext";
import { TeamProvider } from "../context/TeamContext";

const AppProviders = ({ children }: { children: React.ReactNode }) => (
  <TeamProvider>
    <FriendProvider>
      <ToolProvider>
        <AuthProvider>
          <UserProvider>
            {children}
          </UserProvider>
        </AuthProvider>
      </ToolProvider>
    </FriendProvider>
  </TeamProvider>
);

export default AppProviders;