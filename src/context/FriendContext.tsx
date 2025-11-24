import React, { createContext, useContext, useState } from "react";
import { FriendContextType, FriendData } from "./FriendContextType";

const FriendContext = createContext<FriendContextType | undefined>(undefined);

export const FriendProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [friendData, setFriendData] = useState<FriendData[] | null>(null);
  return <FriendContext.Provider value={{ friendData, setFriendData }}>{children}</FriendContext.Provider>;
};

export function useFriend() {
  const v = useContext(FriendContext);
  if (!v) throw new   Error('useFriend는 반드시 FriendProvider 내부에서 사용해야 합니다.');
  return v;
};