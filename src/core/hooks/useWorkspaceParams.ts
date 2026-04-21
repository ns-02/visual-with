import { useParams, useLocation } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import { getToolIdFromPath } from '@core/routes/routeMap';
import { useWorkspaceStore } from '@core/store/useWorkspaceStore';

export function useWorkspaceParams() {
  const { teamId: urlTeamId } = useParams();
  const { pathname } = useLocation();

  const selectTeamId = useWorkspaceStore((state) => state.selectTeamId);
  const setSelectTeam = useWorkspaceStore((state) => state.setSelectTeam);

  const activeTeamId = urlTeamId || selectTeamId;

  const activeToolId = useMemo(() => getToolIdFromPath(pathname), [pathname]);

  useEffect(() => {
    if (urlTeamId && urlTeamId !== selectTeamId) {
      setSelectTeam(urlTeamId);
    }
  }, [urlTeamId, selectTeamId, setSelectTeam]);

  return {
    teamId: activeTeamId,
    toolId: activeToolId,
    isWorkspaceView: !!urlTeamId,
  };
}
