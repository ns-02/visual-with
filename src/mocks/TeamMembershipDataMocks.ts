import { userDataMocks } from './UserDataMocks';
import { memberDataMocks } from './MemberDataMocks';
import {
  createTeamMembershipData,
  TeamMembershipData,
} from '@shared/models/Workspace';

export const teamMembershipMocks: TeamMembershipData[] = [
  createTeamMembershipData(userDataMocks.id, 'f5l8q0h4', 'ADMIN', 'ACCEPTED'),
  createTeamMembershipData(userDataMocks.id, 'b2y1m7j6', 'MEMBER', 'ACCEPTED'),
  createTeamMembershipData(
    userDataMocks.id,
    'c3h7p9m2',
    'SUB_ADMIN',
    'ACCEPTED',
  ),
  createTeamMembershipData(
    memberDataMocks[0]!.id,
    'f5l8q0h4',
    'MEMBER',
    'ACCEPTED',
  ),
  createTeamMembershipData(
    memberDataMocks[1]!.id,
    'f5l8q0h4',
    'MEMBER',
    'ACCEPTED',
  ),
  createTeamMembershipData(
    memberDataMocks[2]!.id,
    'f5l8q0h4',
    'MEMBER',
    'ACCEPTED',
  ),
  createTeamMembershipData(
    memberDataMocks[3]!.id,
    'b2y1m7j6',
    'ADMIN',
    'ACCEPTED',
  ),
  createTeamMembershipData(
    memberDataMocks[4]!.id,
    'b2y1m7j6',
    'MEMBER',
    'ACCEPTED',
  ),
  createTeamMembershipData(
    memberDataMocks[5]!.id,
    'c3h7p9m2',
    'MEMBER',
    'ACCEPTED',
  ),
  createTeamMembershipData(
    memberDataMocks[6]!.id,
    'c3h7p9m2',
    'MEMBER',
    'ACCEPTED',
  ),
  createTeamMembershipData(userDataMocks.id, 'd5h8q9n3', 'MEMBER', 'PENDING'),
];
