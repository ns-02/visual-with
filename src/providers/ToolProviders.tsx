import { ScheduleProvider, TodoProvider, ToolIdProvider } from '@context';

const ToolProviders = ({ children }: { children: React.ReactNode }) => (
  <ToolIdProvider>
    <ScheduleProvider>
      <TodoProvider>{children}</TodoProvider>
    </ScheduleProvider>
  </ToolIdProvider>
);

export default ToolProviders;
