import React, { createContext, useContext, useState } from 'react';
import { ToolId } from '../types/ToolId';
import { ToolContextType } from './ToolContextType';

const ToolContext = createContext<ToolContextType | undefined>(undefined);

/**
 * Provider 컴포넌트.
 * useState로 toolId와 setToolId를 만들고 이를 children에게 전달하여 사용할 수 있게 함.
 */
export const ToolProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toolId, setToolId] = useState<ToolId | null>(null);
  return <ToolContext.Provider value={{ toolId, setToolId }}>{children}</ToolContext.Provider>;
};

/**
 * toolId, setToolId를 담은 커스텀 훅.
 * ToolContext를 useContext에 전달하여 리턴
 * @returns useContext(ToolContext)
 */
// Provider 내부에서 toolId와 setToolId를 편하게 쓰도록 하기 위함
// Provider 외부에서 사용하면 오류 발생
export function useTool() {
  const v = useContext(ToolContext);
  if (!v) throw new Error('useTool은 반드시 ToolProvider 내부에서 사용해야 합니다.');
  return v;
}