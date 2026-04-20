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

export type AddTodoInput = Pick<
  TodoData,
  'title' | 'description' | 'teamId' | 'authorId' | 'authorName'
>;

export type UpdateTodoInput = Pick<TodoData, 'id'> &
  Partial<Pick<TodoData, 'title' | 'description' | 'authorId' | 'authorName'>>;
