import { useWorkspaceStore } from '@core/store/useWorkspaceStore';
import { useMemo } from 'react';
import { useTeamId } from './useWorkspaceParams';
import { useUserStore } from '@core/store/useUserStore';

export function useCurrentWorkspace() {
  const teamId = useTeamId();
  const userId = useUserStore((state) => state.user?.id);
  const teamData = useWorkspaceStore((state) => state.teamData);
  const membershipData = useWorkspaceStore((state) => state.membershipData);

  return useMemo(() => {
    const teamInfo = teamData.find((t) => t.id === teamId);
    const membership = membershipData.find(
      (m) => m.teamId === teamId && m.userId === userId,
    );
    const memberCount = membershipData.filter(
      (m) => m.teamId === teamId && m.status === 'ACCEPTED',
    ).length;

    return {
      teamId,
      selectTeamName: teamInfo?.name || '',
      currentRule: membership?.rule || 'MEMBER',
      memberCount,
      exists: !!teamInfo,
    };
  }, [teamId, teamData, membershipData, userId]);
}
