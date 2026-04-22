import { useParams, useLocation } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import { getToolIdFromPath } from '@core/routes/routeMap';
import { useWorkspaceStore } from '@core/store/useWorkspaceStore';

// teamId만 필요할 때
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

// toolId만 필요할 때
export function useToolId() {
  const { pathname } = useLocation();
  return useMemo(() => getToolIdFromPath(pathname), [pathname]);
}

// 둘 다 필요할 때
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
