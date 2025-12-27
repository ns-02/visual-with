import React, { createContext, useContext, useState } from 'react';
import { ToolId } from '@shared/models/ToolId';

type ToolIdContextType = {
  toolId: ToolId | null;
  setToolId: (id: ToolId | null) => void;
};

const ToolIdContext = createContext<ToolIdContextType | undefined>(undefined);

/**
 * Provider 컴포넌트.
 * useState로 toolId와 setToolId를 만들고 이를 children에게 전달하여 사용할 수 있게 함.
 */
export const ToolIdProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toolId, setToolId] = useState<ToolId | null>(null);
  return (
    <ToolIdContext.Provider value={{ toolId, setToolId }}>
      {children}
    </ToolIdContext.Provider>
  );
};

/**
 * toolId, setToolId를 담은 커스텀 훅.
 * ToolContext를 useContext에 전달하여 리턴
 * @returns useContext(ToolContext)
 */
// Provider 내부에서 toolId와 setToolId를 편하게 쓰도록 하기 위함
// Provider 외부에서 사용하면 오류 발생
export function useTool() {
  const v = useContext(ToolIdContext);
  if (!v)
    throw new Error(
      'useTool은 반드시 ToolIdProvider 내부에서 사용해야 합니다.',
    );
  return v;
}
