import { useWorkspaceStore } from '@core/store/useWorkspaceStore';
import { useMemo } from 'react';
import { useTeamId } from './useWorkspaceParams';

export function useCurrentWorkspace() {
  const teamId = useTeamId();
  const teamData = useWorkspaceStore((state) => state.teamData);
  const membershipData = useWorkspaceStore((state) => state.membershipData);

  return useMemo(() => {
    const teamInfo = teamData.find((t) => t.id === teamId);
    const membership = membershipData.find((m) => m.teamId === teamId);

    return {
      teamId,
      selectTeamName: teamInfo?.name || '',
      currentRule: membership?.rule || 'MEMBER',
      exists: !!teamInfo,
    };
  }, [teamId, teamData, membershipData]);
}
