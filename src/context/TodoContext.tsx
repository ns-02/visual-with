import { createContext, useContext, useState } from 'react';
import { TodoData } from '@models/Todo';
import { todoDataMocks } from '../mocks/TodoDataMocks';

type TodoContextType = {
  todoData: TodoData[];
  setTodoData: (item: TodoData[]) => void;
};

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [todoData, setTodoData] = useState<TodoData[]>(todoDataMocks);

  return (
    <TodoContext.Provider value={{ todoData, setTodoData }}>
      {children}
    </TodoContext.Provider>
  );
};

export function useTodo() {
  const v = useContext(TodoContext);
  if (!v)
    throw new Error('useTodo는 반드시 TodoProvider 내부에서 사용해야 합니다.');
  return v;
}
