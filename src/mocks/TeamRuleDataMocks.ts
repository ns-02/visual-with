import {
  TeamMembershipData,
  createTeamMembershipData,
} from '@shared/models/TeamMembership';
import { userDataMocks } from './UserDataMocks';

export const teamRuleDataMocks: TeamMembershipData[] = [
  createTeamMembershipData(userDataMocks.userId, 'f5l8q0h4', 'ADMIN'),
  createTeamMembershipData(userDataMocks.userId, 'b2y1m7j6', 'MEMBER'),
  createTeamMembershipData(userDataMocks.userId, 'c3h7p9m2', 'SUB_ADMIN'),
];
