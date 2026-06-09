import { selectTeamList } from '@shared/api/baseApi';
import { createMembership } from '@shared/models/Workspace';
import { useUserStore } from '@core/store/useUserStore';
import { useWorkspaceStore } from '@core/store/useWorkspaceStore';
import { useEffect } from 'react';

export const useWorkspaceBootstrap = () => {
  const userId = useUserStore((state) => state.user?.id);
  const isUserBootstrapped = useUserStore((state) => state.isUserBootstrapped);
  const setTeamList = useWorkspaceStore((state) => state.setTeamList);
  const setWorkspaceBootstrapped = useWorkspaceStore(
    (state) => state.setWorkspaceBootstrapped,
  );

  useEffect(() => {
    if (!userId || !isUserBootstrapped) {
      setWorkspaceBootstrapped(false);
      return;
    }

    let cancelled = false;

    const loadTeamList = async () => {
      setWorkspaceBootstrapped(false);

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

        if (!cancelled) {
          setTeamList(userId, teams, memberships);
        }
      } catch (e) {
        console.error(e);
      } finally {
        if (!cancelled) {
          setWorkspaceBootstrapped(true);
        }
      }
    };

    loadTeamList();

    return () => {
      cancelled = true;
    };
  }, [userId, isUserBootstrapped, setTeamList, setWorkspaceBootstrapped]);
};
