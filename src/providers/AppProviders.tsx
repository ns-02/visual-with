import { AuthProvider } from "../context/AuthContext";
import { ToolProvider } from "../context/ToolContext";
import { FriendProvider } from "../context/FriendContext";
import { TeamProvider } from "../context/TeamContext";

const AppProviders = ({ children }: { children: React.ReactNode }) => (
  <AuthProvider>
    <ToolProvider>
      <FriendProvider>
        <TeamProvider>
          {children}
        </TeamProvider>
      </FriendProvider>
    </ToolProvider>
  </AuthProvider>
);

export default AppProviders;