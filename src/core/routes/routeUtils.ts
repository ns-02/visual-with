import { ToolId } from '@shared/models/Workspace';
import { pathToId } from './routeMap';

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
