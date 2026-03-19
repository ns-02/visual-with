import { FileProvider, ScheduleProvider, ToolIdProvider } from '@core/contexts';

const ToolProviders = ({ children }: { children: React.ReactNode }) => (
  <ToolIdProvider>
    <ScheduleProvider>
      <FileProvider>{children}</FileProvider>
    </ScheduleProvider>
  </ToolIdProvider>
);

export default ToolProviders;
