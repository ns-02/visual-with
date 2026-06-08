import { selectTeamMemberList } from '@shared/api/baseApi';
import { createMembership } from '@shared/models/Workspace';
import { useWorkspaceStore } from '@core/store/useWorkspaceStore';
import { useTeamId } from '@core/hooks/useWorkspaceParams';
import { useEffect } from 'react';

export const useTeamMembersBootstrap = () => {
  const teamId = useTeamId();
  const setTeamMembers = useWorkspaceStore((state) => state.setTeamMembers);

  useEffect(() => {
    if (!teamId) return;

    const loadTeamMembers = async () => {
      try {
        const res = await selectTeamMemberList({ teamId });

        const memberships = res.map((item) =>
          createMembership(
            item.userId,
            item.teamId,
            item.userTeamRole,
            item.invitationStatus === 'REJECTED'
              ? 'DECLINED'
              : item.invitationStatus,
          ),
        );

        setTeamMembers(teamId, memberships);
      } catch (e) {
        console.error(e);
      }
    };

    loadTeamMembers();
  }, [teamId, setTeamMembers]);
};
