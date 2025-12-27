import { useEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';
import { getToolIdFromPath } from './routeMap';
import { useTool } from '@core/context/ToolIdContext';

export function RouteWatcher({
  callOnInitial = true,
}: {
  callOnInitial?: boolean;
}) {
  const location = useLocation();
  const navType = useNavigationType();

  // setToolId()가 컴포넌트에 신호를 주는 역할
  const { toolId: current, setToolId } = useTool();
  const prevRef = useRef<string | null>(null);

  useEffect(() => {
    const nextTool = getToolIdFromPath(location.pathname);
    const prevTool = prevRef.current;

    // 초기 진입 시
    if (prevTool === null) {
      prevRef.current = nextTool;
      if (callOnInitial && nextTool !== current) {
        setToolId(nextTool);
      }
    }

    // route가 바뀌었을 때만
    if (prevTool !== nextTool) {
      prevRef.current = nextTool;
      // ToolContext에 저장된 값과 다를 때만
      if (nextTool !== current) setToolId(nextTool);
    }
  }, [location.pathname, navType, setToolId, current, callOnInitial]);

  return null;
}
