import { Outlet } from 'react-router-dom';
import GuardPage from '@pages/auth/GuardPage';
import { useUserStore } from '@core/store/useUserStore';
import { useWorkspaceStore } from '@core/store/useWorkspaceStore';
import { useTeamId } from '@core/hooks/useWorkspaceParams';

const TeamAccessRoute = () => {
  const teamId = useTeamId();
  const userId = useUserStore((state) => state.user?.id);
  const membershipData = useWorkspaceStore((state) => state.membershipData);
  const isUserBootstrapped = useUserStore((state) => state.isUserBootstrapped);
  const isWorkspaceBootstrapped = useWorkspaceStore(
    (state) => state.isWorkspaceBootstrapped,
  );

  const isReady = isUserBootstrapped && isWorkspaceBootstrapped;

  if (!isReady) {
    return null;
  }

  const isMember = membershipData.some(
    (item) =>
      item.teamId === teamId &&
      item.userId === userId &&
      item.status === 'ACCEPTED',
  );

  if (!isMember) {
    return <GuardPage type='team' />;
  }

  return <Outlet />;
};

export default TeamAccessRoute;
