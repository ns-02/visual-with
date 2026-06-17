import { ToolId } from '@shared/models/Workspace';
import { pathToId } from './routeMap';

export const INVITE_ROUTE = '/invite';

export interface InvitePathParams {
  teamId: string;
  invitationCode: string;
}

/** API 초대 URL을 `/invite/:teamId/:invitationCode` 경로로 정규화 */
export function parseInvitePath(apiUrl: string): InvitePathParams | null {
  const trimmed = apiUrl.trim();
  if (!trimmed) return null;

  let pathname = trimmed;
  try {
    if (trimmed.includes('://')) {
      pathname = new URL(trimmed).pathname;
    }
  } catch {
    return null;
  }

  const inviteMatch = pathname.match(/\/invite\/([^/]+)\/([^/?#]+)/);
  if (inviteMatch) {
    const [, teamId, invitationCode] = inviteMatch;
    if (teamId && invitationCode) {
      return { teamId, invitationCode };
    }
  }

  const segments = pathname.replace(/^\/+/, '').split('/').filter(Boolean);
  if (segments[0] === 'invite' && segments.length >= 3) {
    const teamId = segments[1];
    const invitationCode = segments[2];
    if (teamId && invitationCode) {
      return { teamId, invitationCode };
    }
  }
  if (segments.length >= 2) {
    const teamId = segments[0];
    const invitationCode = segments[1];
    if (teamId && invitationCode) {
      return { teamId, invitationCode };
    }
  }

  return null;
}

/** `/invite/:teamId/:invitationCode` 라우트에 맞는 공유용 초대 링크 생성 */
export function buildTeamInviteLink(apiUrl: string): string {
  const parsed = parseInvitePath(apiUrl);
  if (!parsed) return '';

  const { teamId, invitationCode } = parsed;
  return `${window.location.origin}${INVITE_ROUTE}/${teamId}/${invitationCode}`;
}

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
