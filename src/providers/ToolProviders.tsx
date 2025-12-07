import { TodoProvider, ToolIdProvider } from '@context';

const ToolProviders = ({ children }: { children: React.ReactNode }) => (
  <ToolIdProvider>
    <TodoProvider>{children}</TodoProvider>
  </ToolIdProvider>
);

export default ToolProviders;
