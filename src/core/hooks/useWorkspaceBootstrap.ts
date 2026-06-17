import { selectTeamList } from '@shared/api/baseApi';
import { createMembership } from '@shared/models/Workspace';
import { useUserStore } from '@core/store/useUserStore';
import { useWorkspaceStore } from '@core/store/useWorkspaceStore';
import { useEffect } from 'react';
import { toast } from '@core/store/useToastStore';

export const useWorkspaceBootstrap = () => {
  const userId = useUserStore((state) => state.user?.id);
  const userName = useUserStore((state) => state.user?.name);
  const isUserBootstrapped = useUserStore((state) => state.isUserBootstrapped);
  const setTeamList = useWorkspaceStore((state) => state.setTeamList);
  const setWorkspaceBootstrapped = useWorkspaceStore(
    (state) => state.setWorkspaceBootstrapped,
  );

  useEffect(() => {
    if (!userId || !userName || !isUserBootstrapped) {
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
            userId,
            userName,
            item.teamId,
            item.userTeamRole,
            item.invitationStatus === 'REJECTED'
              ? 'DECLINED'
              : item.invitationStatus,
          ),
        );

        if (!cancelled) {
          setTeamList(userId, teams, memberships);
        }
      } catch (e) {
        toast.error(`${e}`);
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
  }, [
    userId,
    userName,
    isUserBootstrapped,
    setTeamList,
    setWorkspaceBootstrapped,
  ]);
};
