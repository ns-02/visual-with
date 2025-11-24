import { FriendProvider } from "../context/FriendContext";
import { TeamProvider } from "../context/TeamContext";
import { ToolProvider } from "../context/ToolContext";

const AppProviders = ({ children }: { children: React.ReactNode }) => (
  <ToolProvider>
    <FriendProvider>
      <TeamProvider>
        {children}
      </TeamProvider>
    </FriendProvider>
  </ToolProvider>
);

export default AppProviders;