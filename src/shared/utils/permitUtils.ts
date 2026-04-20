import { TeamRule } from '@shared/models/TeamMembership';

export function getIsAdmin(rule: TeamRule) {
  if (rule === 'ADMIN' || rule === 'SUB_ADMIN') {
    return true;
  }
  return false;
}

export const checkIsMe = (authorId: string, userId: string): boolean => {
  if (authorId === userId) return true;

  return false;
};

export const getIsPermit = ({
  authorId,
  userId,
  rule,
}: {
  authorId: string | undefined;
  userId: string | null;
  rule: TeamRule;
}) => {
  if (!authorId || !userId) return false;

  if (getIsAdmin(rule) || checkIsMe(authorId, userId)) {
    return true;
  }

  return false;
};
