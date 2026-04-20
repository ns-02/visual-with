import { TeamRule } from '@shared/models/TeamMembership';

export function getIsAdmin(rule: TeamRule) {
  if (rule === 'ADMIN' || rule === 'SUB_ADMIN') {
    return true;
  }
  return false;
}
