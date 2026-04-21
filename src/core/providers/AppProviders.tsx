import { Tooltip } from '@shared/components';

const AppProviders = ({ children }: { children: React.ReactNode }) => (
  <Tooltip.Provider>{children}</Tooltip.Provider>
);

export default AppProviders;
