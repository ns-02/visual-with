import { selectTeamList } from '@shared/api/baseApi';
import { createMembership } from '@shared/models/Workspace';
import { useUserStore } from '@core/store/useUserStore';
import { useWorkspaceStore } from '@core/store/useWorkspaceStore';
import { useEffect } from 'react';

export const useWorkspaceBootstrap = () => {
  const userId = useUserStore((state) => state.user?.id);
  const setTeamList = useWorkspaceStore((state) => state.setTeamList);

  useEffect(() => {
    if (!userId) return;

    const loadTeamList = async () => {
      try {
        const res = await selectTeamList({ userId });

        const teams = res.map((item) => ({
          id: item.teamId,
          name: item.teamName,
        }));
        const memberships = res.map((item) =>
          createMembership(
            item.userId,
            item.teamId,
            item.userTeamRole,
            'ACCEPTED',
          ),
        );

        setTeamList(userId, teams, memberships);
      } catch (e) {
        console.error(e);
      }
    };

    loadTeamList();
  }, [userId, setTeamList]);
};
