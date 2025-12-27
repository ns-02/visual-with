import { ToolId } from '@models/ToolId';

const ROUTES: { id: ToolId; path: string }[] = [
  { id: 'team-chat', path: 'teamchat' },
  { id: 'files', path: 'filesharing' },
  { id: 'schedule', path: 'schedule' },
  { id: 'todos', path: 'todolist' },
  { id: 'friends', path: 'friendlist' },
  { id: 'direct-chat', path: 'directchat' },
];

const pathToId = new Map<string, ToolId>();
const idToPath = new Map<ToolId, string>();
for (const r of ROUTES) {
  pathToId.set(r.path, r.id);
  idToPath.set(r.id, r.path);
}

// url로 toolId 추출하기
export function getToolIdFromPath(pathname: string): ToolId | null {
  const parts = pathname.split('/').filter(Boolean);

  // url에서 features 찾기
  for (const part of parts) {
    const toolId = pathToId.get(part);
    if (toolId) return toolId;
  }

  return null;
}

export interface ConvertPathProps {
  id: ToolId;
  onTeam?: boolean;
  selectTeamId?: string;
}

// toolId로 url 만들기
export function getPathFromToolId(props: ConvertPathProps): string {
  const { id, onTeam, selectTeamId } = props;

  if (onTeam) {
    if (!selectTeamId) {
      console.error('선택된 팀 아이디가 존재하지 않음');
      return '';
    }
    return `${selectTeamId}/${idToPath.get(id)}`;
  } else {
    return idToPath.get(id) ?? '';
  }
}
