import { ToolId } from '@shared/models/Workspace';

const ROUTES: { id: ToolId; path: string }[] = [
  { id: 'home', path: '' },
  { id: 'team-chat', path: 'teamchat' },
  { id: 'files', path: 'filesharing' },
  { id: 'schedule', path: 'schedule' },
  { id: 'todos', path: 'todolist' },
  { id: 'friends', path: 'friendlist' },
  { id: 'direct-chat', path: 'directchat' },
];

export const pathToId = new Map<string, ToolId>();
export const idToPath = new Map<ToolId, string>();
for (const r of ROUTES) {
  pathToId.set(r.path, r.id);
  idToPath.set(r.id, r.path);
}
