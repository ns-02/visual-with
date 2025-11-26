import React, { createContext, useContext, useState } from "react";
import { FriendContextType, FriendIdChatMap } from "./FriendContextType";
import { FriendData } from "../types/Friend";

const initFriendData: FriendData[] = [
  { id: 1, name: '김철수', description: '프론트엔드 개발자' },
  { id: 2, name: '이영희', description: 'UX 디자이너' },
  { id: 3, name: '박영수', description: '백엔드 개발자' },
];

const initFriendRequestData: FriendData[] = [
  { id: 4, name: '정수진', description: '소프트웨어 아키텍트' },
  { id: 5, name: '강민호', description: '보안 엔지니어' },
];

const FriendContext = createContext<FriendContextType | undefined>(undefined);

export const FriendProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [friendData, setFriendData] = useState<FriendData[] | null>(initFriendData);
  const [friendRequestData, setFriendRequestData] = useState<FriendData[] | null | undefined>(initFriendRequestData);
  const [selectFriendData, setSelectFriendData] = useState<FriendData | null | undefined>(null);
  const [friendIdChatMap, setFriendIdChatMap] = useState<FriendIdChatMap>(() => new Map());
  
  return <FriendContext.Provider value={{ 
    friendData, setFriendData, 
    friendRequestData, setFriendRequestData, 
    selectFriendData, setSelectFriendData,
    friendIdChatMap, setFriendIdChatMap
  }}>{children}</FriendContext.Provider>;
};

export function useFriend() {
  const v = useContext(FriendContext);
  if (!v) throw new   Error('useFriend는 반드시 FriendProvider 내부에서 사용해야 합니다.');
  return v;
};