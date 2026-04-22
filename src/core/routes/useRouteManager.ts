import { useLocation, useNavigate } from 'react-router-dom';
import { getPathFromToolId, getToolIdFromPath } from './routeMap';

export const useRouteManager = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const switchTeamWithTool = (teamId: string) => {
    const toolId = getToolIdFromPath(pathname);

    if (toolId) {
      const toolPath = getPathFromToolId({ id: toolId });

      if (toolPath !== 'directchat' && toolPath !== 'friendlist') {
        navigate(`${teamId}/${toolPath}`);
      } else {
        navigate(`${toolPath}`);
      }
    } else {
      navigate(`${teamId}`);
    }
  };

  return {
    switchTeamWithTool,
  };
};
