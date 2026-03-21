import { TodoData } from '@features/todoList/models/Todo';
import { todoDataMocks } from '@mocks/TodoDataMocks';
import { create } from 'zustand';

interface TodoState {
  todoData: TodoData[];
  addTodo: (title: string, description: string) => void;
  toggleTodo: (todoId: number) => void;
  updateTodo: (title: string, description: string, todoId: number) => void;
  deleteTodo: (todoId: number) => void;
}

export const useTodoStore = create<TodoState>((set) => ({
  todoData: todoDataMocks || [],

  addTodo: (title, description) =>
    set((state) => ({
      todoData: [
        ...state.todoData,
        {
          id:
            state.todoData.reduce((max, item) => Math.max(max, item.id), 0) + 1,
          title,
          description,
          checked: false,
        },
      ],
    })),

  toggleTodo: (todoId) =>
    set((state) => ({
      todoData: state.todoData.map((item) =>
        item.id === todoId ? { ...item, checked: !item.checked } : item,
      ),
    })),

  updateTodo: (title, description, todoId) =>
    set((state) => ({
      todoData: state.todoData.map((item) =>
        item.id === todoId ? { ...item, title, description } : item,
      ),
    })),

  deleteTodo: (todoId) =>
    set((state) => ({
      todoData: state.todoData.filter((item) => item.id !== todoId),
    })),
}));
