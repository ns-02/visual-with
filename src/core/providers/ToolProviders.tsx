import { ToolIdProvider } from '@core/contexts';

const ToolProviders = ({ children }: { children: React.ReactNode }) => (
  <ToolIdProvider>{children}</ToolIdProvider>
);

export default ToolProviders;
