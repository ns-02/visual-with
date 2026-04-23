import { useParams, useLocation } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import { getToolIdFromPath } from '@core/routes/useRouteManager';
import { useWorkspaceStore } from '@core/store/useWorkspaceStore';
import { useFriendStore } from '@features/friendList/store/useFriendStore';

export function useFriendId() {
  const { friendId: urlFriendId } = useParams();
  const selectFriendId = useFriendStore((state) => state.selectFriendId);
  const setSelectFriendId = useFriendStore((state) => state.setSelectFriendId);

  useEffect(() => {
    if (urlFriendId && urlFriendId !== selectFriendId) {
      setSelectFriendId(urlFriendId);
    }
  }, [urlFriendId, selectFriendId, setSelectFriendId]);

  return urlFriendId || selectFriendId;
}

export function useTeamId() {
  const { teamId: urlTeamId } = useParams();
  const selectTeamId = useWorkspaceStore((state) => state.selectTeamId);
  const setSelectTeam = useWorkspaceStore((state) => state.setSelectTeam);

  useEffect(() => {
    if (urlTeamId && urlTeamId !== selectTeamId) {
      setSelectTeam(urlTeamId);
    }
  }, [urlTeamId, selectTeamId, setSelectTeam]);

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
