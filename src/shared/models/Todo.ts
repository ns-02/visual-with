import { TeamId } from '@shared/models/Team';

export interface TodoData {
  id: number;
  title: string;
  description?: string;
  checked: boolean;
  teamId: TeamId;
  authorId: string;
  authorName: string;
}
