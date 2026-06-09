import { useTeamId } from '@core/hooks/useWorkspaceParams';
import { useUserStore } from '@core/store/useUserStore';
import { useWorkspaceStore } from '@core/store/useWorkspaceStore';
import { useMemo } from 'react';

export function useTeamWorkspaceAccess() {
  const teamId = useTeamId();
  const userId = useUserStore((state) => state.user?.id);
  const isWorkspaceBootstrapped = useWorkspaceStore(
    (state) => state.isWorkspaceBootstrapped,
  );
  const membershipData = useWorkspaceStore((state) => state.membershipData);

  const showTeamMenu = useMemo(() => {
    if (!isWorkspaceBootstrapped || !userId || !teamId) return false;

    return membershipData.some(
      (m) =>
        m.userId === userId &&
        m.teamId === teamId &&
        m.status === 'ACCEPTED',
    );
  }, [isWorkspaceBootstrapped, userId, teamId, membershipData]);

  return { showTeamMenu };
}
