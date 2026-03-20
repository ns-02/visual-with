import { Tooltip } from '@shared/components/ui';

const AppProviders = ({ children }: { children: React.ReactNode }) => (
  <Tooltip.Provider>{children}</Tooltip.Provider>
);

export default AppProviders;
