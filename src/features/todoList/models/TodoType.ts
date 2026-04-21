import { TodoData } from '@shared/models/Todo';

export type AddTodoInput = Pick<
  TodoData,
  'title' | 'description' | 'teamId' | 'authorId' | 'authorName'
>;

export type UpdateTodoInput = Pick<TodoData, 'id'> &
  Partial<Pick<TodoData, 'title' | 'description' | 'authorId' | 'authorName'>>;
