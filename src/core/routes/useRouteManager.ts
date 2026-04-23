import { useLocation, useNavigate } from 'react-router-dom';
import { idToPath, pathToId } from './routeMap';
import { ToolId } from '@shared/models/Workspace';
import { useTeamId } from '@core/hooks/useWorkspaceParams';

export const useRouteManager = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const teamId = useTeamId();

  const switchTeamWithTool = (nextTeamId: string) => {
    const toolId = getToolIdFromPath(pathname);

    if (toolId) {
      const toolPath = idToPath.get(toolId) || '';

      if (toolPath !== 'directchat' && toolPath !== 'friendlist') {
        navigate(`/main/${nextTeamId}/${toolPath}`);
      } else {
        navigate(`/main/${toolPath}`);
      }
    } else {
      navigate(`/main/${nextTeamId}`);
    }
  };

  const switchTool = (toolId: ToolId) => {
    if (!teamId) {
      console.error('선택된 팀 아이디가 존재하지 않음');
      return;
    }

    const toolPath = idToPath.get(toolId) || '';

    if (toolPath !== 'directchat' && toolPath !== 'friendlist') {
      navigate(`/main/${teamId}/${toolPath}`);
    } else {
      navigate(`/main/${toolPath}`);
    }
  };

  const switchFriend = (friendId: string) => {
    navigate(`/main/directchat/${friendId}`);
  };

  return {
    switchTeamWithTool,
    switchTool,
    switchFriend,
  };
};

// url로 toolId 추출하기
export function getToolIdFromPath(pathname: string): ToolId | null {
  const parts = pathname.split('/').filter(Boolean);

  // url에서 features 찾기
  for (const part of parts) {
    const toolId = pathToId.get(part);
    if (toolId) return toolId;
  }

  return 'home';
}
