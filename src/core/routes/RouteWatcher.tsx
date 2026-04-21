import { useEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';
import { getTeamIdFromPath, getToolIdFromPath } from './routeMap';
import { useTeamStore } from '@core/store/useTeamStore';
import { useUserStore } from '@core/store/useUserStore';

export function RouteWatcher({
  callOnInitial = true,
}: {
  callOnInitial?: boolean;
}) {
  const location = useLocation();
  const navType = useNavigationType();

  // setToolId()가 컴포넌트에 신호를 주는 역할
  const toolId = useUserStore((state) => state.currentToolId);
  const setToolId = useUserStore((state) => state.setToolId);
  const selectTeamId = useTeamStore((state) => state.selectTeamId);
  const setSelectTeamId = useTeamStore((state) => state.setSelectTeamId);
  const prevRef = useRef<string | null>(null);

  useEffect(() => {
    const nextTool = getToolIdFromPath(location.pathname);
    const prevTool = prevRef.current;

    // 초기 진입 시
    if (prevTool === null) {
      prevRef.current = nextTool;
      if (callOnInitial && nextTool !== toolId) {
        setToolId(nextTool);
      }
    }

    // route가 바뀌었을 때만
    if (prevTool !== nextTool) {
      prevRef.current = nextTool;
      // ToolContext에 저장된 값과 다를 때만
      if (nextTool !== toolId) setToolId(nextTool);
    }
  }, [location.pathname, navType, setToolId, toolId, callOnInitial]);

  useEffect(() => {
    const nextTeamId = getTeamIdFromPath(location.pathname);

    if (!nextTeamId) return;

    if (nextTeamId !== selectTeamId) setSelectTeamId(nextTeamId);
  }, [location.pathname, selectTeamId, setSelectTeamId]);

  return null;
}
