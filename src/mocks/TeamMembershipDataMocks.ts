import { userDataMocks } from './UserDataMocks';
import { memberDataMocks } from './MemberDataMocks';
import { createMembership, TeamMembershipData } from '@shared/models/Workspace';

export const teamMembershipMocks: TeamMembershipData[] = [
  createMembership(userDataMocks.id, 'f5l8q0h4', 'ADMIN', 'ACCEPTED'),
  createMembership(userDataMocks.id, 'b2y1m7j6', 'MEMBER', 'ACCEPTED'),
  createMembership(userDataMocks.id, 'c3h7p9m2', 'SUB_ADMIN', 'ACCEPTED'),
  createMembership(memberDataMocks[0]!.id, 'f5l8q0h4', 'MEMBER', 'ACCEPTED'),
  createMembership(memberDataMocks[1]!.id, 'f5l8q0h4', 'MEMBER', 'ACCEPTED'),
  createMembership(memberDataMocks[2]!.id, 'f5l8q0h4', 'MEMBER', 'ACCEPTED'),
  createMembership(memberDataMocks[3]!.id, 'b2y1m7j6', 'ADMIN', 'ACCEPTED'),
  createMembership(memberDataMocks[4]!.id, 'b2y1m7j6', 'MEMBER', 'ACCEPTED'),
  createMembership(memberDataMocks[5]!.id, 'c3h7p9m2', 'MEMBER', 'ACCEPTED'),
  createMembership(memberDataMocks[6]!.id, 'c3h7p9m2', 'MEMBER', 'ACCEPTED'),
  createMembership(userDataMocks.id, 'd5h8q9n3', 'MEMBER', 'PENDING'),
];
