import { createContext, useContext, useState } from 'react';

type AreaOpenContextType = {
  isDirectChatFileAreaOpen: boolean;
  setIsDirectChatFileAreaOpen: (value: boolean) => void;
};

const AreaOpenContext = createContext<AreaOpenContextType | undefined>(
  undefined,
);

export const AreaOpenProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isDirectChatFileAreaOpen, setIsDirectChatFileAreaOpen] =
    useState<boolean>(false);

  return (
    <AreaOpenContext.Provider
      value={{ isDirectChatFileAreaOpen, setIsDirectChatFileAreaOpen }}
    >
      {children}
    </AreaOpenContext.Provider>
  );
};

export function useAreaOpen() {
  const v = useContext(AreaOpenContext);
  if (!v)
    throw new Error(
      'useAreaOpen는 반드시 AreaOpenProvider 내부에서 사용해야 합니다.',
    );
  return v;
}
