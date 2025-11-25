import React, { createContext, useContext, useState } from "react";
import { FriendContextType } from "./FriendContextType";
import { FriendData } from "../types/Friend";

const FriendContext = createContext<FriendContextType | undefined>(undefined);

const initFriendData = [
  { id: 1, name: '김철수', description: '프론트엔드 개발자' },
  { id: 2, name: '이영희', description: 'UX 디자이너' },
  { id: 3, name: '박영수', description: '백엔드 개발자' },
];

export const FriendProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [friendData, setFriendData] = useState<FriendData[] | null>(initFriendData);
  return <FriendContext.Provider value={{ friendData, setFriendData }}>{children}</FriendContext.Provider>;
};

export function useFriend() {
  const v = useContext(FriendContext);
  if (!v) throw new   Error('useFriend는 반드시 FriendProvider 내부에서 사용해야 합니다.');
  return v;
};