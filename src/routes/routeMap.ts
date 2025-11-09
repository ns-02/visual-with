export type ToolId = 'team-chat' | 'files' | 'schedule' | 'todos' | 'friends' | 'direct-chat';

const ROUTES: { id: ToolId; path: string }[] = [
  { id: 'team-chat',   path: 'teamchat' },
  { id: 'files',       path: 'filesharing' },
  { id: 'schedule',    path: 'schedule' },
  { id: 'todos',       path: 'todolist' },
  { id: 'friends',     path: 'friendlist' },
  { id: 'direct-chat', path: 'directchat' },
];

const pathToId = new Map<string, ToolId>();
const idToPath = new Map<ToolId, string>();
for (const r of ROUTES) {
  pathToId.set(r.path, r.id);
  idToPath.set(r.id, r.path);
}

export function getToolIdFromPath(pathname: string): ToolId | null {
  const parts = pathname.split('/').filter(Boolean);

  // '/'으로 분리한 문자열의 2번째: features 찾기
  const second = parts[1] ?? '';
  return pathToId.get(second) ?? null;
}

export function getPathFromToolId(id: ToolId): string {
  // return idToPath.get(id) ?? '';
  return '';
}