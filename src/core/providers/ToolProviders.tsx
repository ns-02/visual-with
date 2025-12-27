import {
  FileProvider,
  ScheduleProvider,
  TodoProvider,
  ToolIdProvider,
} from '@core/contexts';

const ToolProviders = ({ children }: { children: React.ReactNode }) => (
  <ToolIdProvider>
    <ScheduleProvider>
      <FileProvider>
        <TodoProvider>{children}</TodoProvider>
      </FileProvider>
    </ScheduleProvider>
  </ToolIdProvider>
);

export default ToolProviders;
