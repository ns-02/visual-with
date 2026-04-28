import { useLocation, useNavigate } from 'react-router-dom';
import { idToPath } from './routeMap';
import { ToolId } from '@shared/models/Workspace';
import { useFriendId, useTeamId } from '@core/hooks/useWorkspaceParams';
import { getToolIdFromPath } from './routeUtils';
import { useWorkspaceStore } from '@core/store/useWorkspaceStore';
import { useFriendStore } from '@features/friendList/store/useFriendStore';

export const useRouteManager = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const teamId = useTeamId();
  const friendId = useFriendId();
  const setSelectTeam = useWorkspaceStore((state) => state.setSelectTeam);
  const setSelectFriendId = useFriendStore((state) => state.setSelectFriendId);

  const switchTeamWithTool = (nextTeamId: string) => {
    const toolId = getToolIdFromPath(pathname);
    setSelectTeam(nextTeamId);

    if (toolId) {
      const toolPath = idToPath.get(toolId) || '';

      if (toolPath === 'directchat') {
        navigate(`/main/${toolPath}/${friendId}`);
      } else if (toolPath === 'friendlist') {
        navigate(`/main/${toolPath}`);
      } else {
        navigate(`/main/${nextTeamId}/${toolPath}`);
      }
    } else {
      navigate(`/main/${nextTeamId}`);
    }
  };

  const switchTool = (toolId: ToolId) => {
    const toolPath = idToPath.get(toolId) || '';

    if (!teamId && toolPath !== 'directchat' && toolPath !== 'friendlist') {
      console.error('선택된 팀 아이디가 존재하지 않음');
      return;
    }

    if (toolPath === 'directchat') {
      navigate(`/main/${toolPath}/${friendId}`);
    } else if (toolPath === 'friendlist') {
      navigate(`/main/${toolPath}`);
    } else {
      navigate(`/main/${teamId}/${toolPath}`);
    }
  };

  const switchFriend = (nextFriendId: string) => {
    setSelectFriendId(nextFriendId);
    navigate(`/main/directchat/${nextFriendId}`);
  };

  const MapsToSettings = () => {
    navigate(`/main/settings`);
  };

  return {
    switchTeamWithTool,
    switchTool,
    switchFriend,
    MapsToSettings,
  };
};
