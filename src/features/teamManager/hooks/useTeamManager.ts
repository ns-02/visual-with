import {
  acceptTeamInvitationByURL,
  acceptTeamInvitationByUserId,
  createTeam,
  deleteTeam,
  inviteTeamByURL,
  inviteTeamByUserId,
  searchUser,
} from '@shared/api/baseApi';
import { useUserStore } from '@core/store/useUserStore';
import { useTeamId } from '@core/hooks/useWorkspaceParams';
import { buildTeamInviteLink } from '@core/routes/routeUtils';
import { useWorkspaceStore } from '@core/store/useWorkspaceStore';
import { createMembership } from '@shared/models/Workspace';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from '@core/store/useToastStore';

export const useTeamManager = () => {
  const teamId = useTeamId();
  const navigate = useNavigate();

  const createTeamInStore = useWorkspaceStore(
    (state) => state.createTeamInStore,
  );
  const deleteTeamFromStore = useWorkspaceStore(
    (state) => state.deleteTeamFromStore,
  );

  const setSelectTeam = useWorkspaceStore((state) => state.setSelectTeam);
  const addTeamRule = useWorkspaceStore((state) => state.addTeamRule);
  const updateTeamRule = useWorkspaceStore((state) => state.updateTeamRule);
  const deleteTeamRule = useWorkspaceStore((state) => state.deleteTeamRule);

  const userId = useUserStore((state) => state.user?.id);
  const userName = useUserStore((state) => state.user?.name);

  const onCreateTeam = async (teamName: string) => {
    if (!userId || !userName) return;

    try {
      const res = await createTeam({ userId, teamName });

      createTeamInStore(res.id, res.teamName);
      addTeamRule(
        createMembership(userId, userName, res.id, 'ADMIN', 'ACCEPTED'),
      );
      setSelectTeam(res.id);
      navigate(`/main/${res.id}`);
    } catch (e) {
      toast.error(`${e}`);
    }
  };

  const onDeleteTeam = async (teamId: string) => {
    if (!userId) return;

    try {
      const res = await deleteTeam({ userId, teamId });
      console.log(res);

      deleteTeamFromStore(teamId);
      deleteTeamRule(teamId);

      toast.success('팀이 삭제되었습니다.');
      navigate('/main', { replace: true });
    } catch (e) {
      console.error(e);
      toast.error('팀 삭제에 실패했습니다.');
    }
  };

  const onSearchUser = async (userId: string) => {
    if (!userId) return null;

    try {
      const res = await searchUser({ userId });

      return {
        userId: res.user_id,
        userName: res.name,
        userEmail: res.email,
      };
    } catch (e) {
      toast.error(`${e}`);
      return null;
    }
  };

  const onInviteTeamByUserId = async (invitedUserId: string) => {
    if (!userId || !userName || !teamId) return;
    try {
      const res = await inviteTeamByUserId({
        userId,
        invitedUserId,
        teamId,
      });
      addTeamRule(
        createMembership(invitedUserId, userName, teamId, 'MEMBER', 'PENDING'),
      );
      console.log(res);
    } catch (e) {
      toast.error(`${e}`);
    }
  };

  const onInviteTeamByURL = useCallback(async (): Promise<string | null> => {
    if (!userId || !teamId) return null;
    try {
      const res = await inviteTeamByURL({ teamId });
      return buildTeamInviteLink(res.url);
    } catch (e) {
      toast.error(`${e}`);
      return null;
    }
  }, [userId, teamId]);

  const onAcceptTeamInvitationByURL = async (
    currentTeamId: string,
    invitationCode: string,
  ): Promise<boolean> => {
    if (!userId || !userName) return false;

    try {
      await acceptTeamInvitationByURL({
        teamId: currentTeamId,
        invitationCode,
        userId,
      });

      const existing = useWorkspaceStore
        .getState()
        .membershipData.some(
          (item) => item.teamId === currentTeamId && item.userId === userId,
        );

      const membership = createMembership(
        userId,
        userName,
        currentTeamId,
        'MEMBER',
        'ACCEPTED',
      );

      if (existing) {
        updateTeamRule(membership);
      } else {
        addTeamRule(membership);
      }

      return true;
    } catch (e) {
      toast.error(`${e}`);
      return false;
    }
  };

  const onTeamInvitationByUserId = async (
    currentTeamId: string,
    accepted: boolean,
  ) => {
    if (!userId || !userName) return;

    if (accepted) {
      await acceptTeamInvitationByUserId({ teamId: currentTeamId, userId });

      updateTeamRule(
        createMembership(userId, userName, currentTeamId, 'MEMBER', 'ACCEPTED'),
      );
    } else {
      updateTeamRule(
        createMembership(userId, userName, currentTeamId, 'MEMBER', 'DECLINED'),
      );
    }
  };

  return {
    onCreateTeam,
    onDeleteTeam,
    onSearchUser,
    onInviteTeamByUserId,
    onInviteTeamByURL,
    onAcceptTeamInvitationByURL,
    onTeamInvitationByUserId,
  };
};
