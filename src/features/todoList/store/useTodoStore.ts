import { TodoData } from '@features/todoList/models/Todo';
import { todoDataMocks } from '@mocks/TodoDataMocks';
import { create } from 'zustand';

interface TodoState {
  todos: TodoData[];
  addTodo: (title: string, description: string) => void;
  toggleTodo: (todoId: number) => void;
  updateTodo: (title: string, description: string, todoId: number) => void;
  deleteTodo: (todoId: number) => void;
}

export const useTodoStore = create<TodoState>((set) => ({
  todos: todoDataMocks || [],

  addTodo: (title, description) =>
    set((state) => ({
      todos: [
        ...state.todos,
        {
          id: state.todos.reduce((max, item) => Math.max(max, item.id), 0) + 1,
          title,
          description,
          checked: false,
        },
      ],
    })),

  toggleTodo: (todoId) =>
    set((state) => ({
      todos: state.todos.map((item) =>
        item.id === todoId ? { ...item, checked: !item.checked } : item,
      ),
    })),

  updateTodo: (title, description, todoId) =>
    set((state) => ({
      todos: state.todos.map((item) =>
        item.id === todoId ? { ...item, title, description } : item,
      ),
    })),

  deleteTodo: (todoId) =>
    set((state) => ({
      todos: state.todos.filter((item) => item.id !== todoId),
    })),
}));
