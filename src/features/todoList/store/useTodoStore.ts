import type {
  AddTodoInput,
  UpdateTodoInput,
} from '@features/todoList/models/TodoType';
import { todoDataMocks } from '@mocks/TodoDataMocks';
import { TodoData } from '@shared/models/Workspace';

import { create } from 'zustand';

interface TodoState {
  todoData: TodoData[];
  addTodo: (todo: AddTodoInput) => void;
  toggleTodo: (todoId: number) => void;
  updateTodo: (todo: UpdateTodoInput) => void;
  deleteTodo: (todoId: number) => void;
}

export const useTodoStore = create<TodoState>((set) => ({
  todoData: todoDataMocks || [],

  addTodo: (todo) =>
    set((state) => ({
      todoData: [
        ...state.todoData,
        {
          id:
            state.todoData.reduce((max, item) => Math.max(max, item.id), 0) + 1,
          title: todo.title,
          description: todo.description,
          checked: false,
          teamId: todo.teamId,
          authorId: todo.authorId,
          authorName: todo.authorName,
        },
      ],
    })),

  toggleTodo: (todoId) =>
    set((state) => ({
      todoData: state.todoData.map((item) =>
        item.id === todoId ? { ...item, checked: !item.checked } : item,
      ),
    })),

  updateTodo: (todo) =>
    set((state) => ({
      todoData: state.todoData.map((item) =>
        item.id === todo.id ? { ...item, ...todo } : item,
      ),
    })),

  deleteTodo: (todoId) =>
    set((state) => ({
      todoData: state.todoData.filter((item) => item.id !== todoId),
    })),
}));
