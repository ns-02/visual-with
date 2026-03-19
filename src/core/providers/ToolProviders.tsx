import { FileProvider, ToolIdProvider } from '@core/contexts';

const ToolProviders = ({ children }: { children: React.ReactNode }) => (
  <ToolIdProvider>
    <FileProvider>{children}</FileProvider>
  </ToolIdProvider>
);

export default ToolProviders;
