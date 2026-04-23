import { userDataMocks } from './UserDataMocks';
import { memberDataMocks } from './MemberDataMocks';
import {
  createTeamMembershipData,
  TeamMembershipData,
} from '@shared/models/Workspace';

export const teamMembershipMocks: TeamMembershipData[] = [
  createTeamMembershipData(userDataMocks.id, 'f5l8q0h4', 'ADMIN'),
  createTeamMembershipData(userDataMocks.id, 'b2y1m7j6', 'MEMBER'),
  createTeamMembershipData(userDataMocks.id, 'c3h7p9m2', 'SUB_ADMIN'),
  createTeamMembershipData(memberDataMocks[0]!.id, 'f5l8q0h4', 'MEMBER'),
  createTeamMembershipData(memberDataMocks[1]!.id, 'f5l8q0h4', 'MEMBER'),
  createTeamMembershipData(memberDataMocks[2]!.id, 'f5l8q0h4', 'MEMBER'),
  createTeamMembershipData(memberDataMocks[3]!.id, 'b2y1m7j6', 'ADMIN'),
  createTeamMembershipData(memberDataMocks[4]!.id, 'b2y1m7j6', 'MEMBER'),
  createTeamMembershipData(memberDataMocks[5]!.id, 'c3h7p9m2', 'MEMBER'),
  createTeamMembershipData(memberDataMocks[6]!.id, 'c3h7p9m2', 'MEMBER'),
];
