import {
  TeamMembershipData,
  createTeamMembershipData,
} from '@shared/models/TeamMembership';
import { userDataMocks } from './UserDataMocks';
import { memberDataMocks } from './MemberDataMocks';

export const teamMembershipMocks: TeamMembershipData[] = [
  createTeamMembershipData(userDataMocks.userId, 'f5l8q0h4', 'ADMIN'),
  createTeamMembershipData(userDataMocks.userId, 'b2y1m7j6', 'MEMBER'),
  createTeamMembershipData(userDataMocks.userId, 'c3h7p9m2', 'SUB_ADMIN'),
  createTeamMembershipData(memberDataMocks[0]!.userId, 'f5l8q0h4', 'MEMBER'),
  createTeamMembershipData(memberDataMocks[1]!.userId, 'f5l8q0h4', 'MEMBER'),
  createTeamMembershipData(memberDataMocks[2]!.userId, 'f5l8q0h4', 'MEMBER'),
  createTeamMembershipData(memberDataMocks[3]!.userId, 'b2y1m7j6', 'ADMIN'),
  createTeamMembershipData(memberDataMocks[4]!.userId, 'b2y1m7j6', 'MEMBER'),
  createTeamMembershipData(memberDataMocks[5]!.userId, 'c3h7p9m2', 'MEMBER'),
  createTeamMembershipData(memberDataMocks[6]!.userId, 'c3h7p9m2', 'MEMBER'),
];
