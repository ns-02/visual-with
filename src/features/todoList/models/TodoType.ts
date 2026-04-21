import { TodoData } from '@shared/models/Workspace';

export type AddTodoInput = Pick<
  TodoData,
  'title' | 'description' | 'teamId' | 'authorId' | 'authorName'
>;

export type UpdateTodoInput = Pick<TodoData, 'id'> &
  Partial<Pick<TodoData, 'title' | 'description' | 'authorId' | 'authorName'>>;
