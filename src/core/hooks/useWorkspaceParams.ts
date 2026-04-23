import { useParams, useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import { useWorkspaceStore } from '@core/store/useWorkspaceStore';
import { useFriendStore } from '@features/friendList/store/useFriendStore';
import { getToolIdFromPath } from '@core/routes/routeUtils';

export function useFriendId() {
  const { friendId: urlFriendId } = useParams();
  const selectFriendId = useFriendStore((state) => state.selectFriendId);

  return urlFriendId || selectFriendId;
}

export function useTeamId() {
  const { teamId: urlTeamId } = useParams();
  const selectTeamId = useWorkspaceStore((state) => state.selectTeamId);

  return urlTeamId || selectTeamId;
}

export function useToolId() {
  const { pathname } = useLocation();
  return useMemo(() => getToolIdFromPath(pathname), [pathname]);
}

export function useWorkspaceParams() {
  const teamId = useTeamId();
  const toolId = useToolId();
  const { teamId: urlTeamId } = useParams();

  return useMemo(
    () => ({
      teamId,
      toolId,
      isWorkspaceView: !!urlTeamId,
    }),
    [teamId, toolId, urlTeamId],
  );
}
