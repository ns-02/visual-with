import React, { createContext, useContext, useState } from 'react';
import { FriendData } from '@models/Friend';
import {
  friendDataMocks,
  friendRequestDataMocks,
} from '../mocks/FriendDataMocks';

type FriendIdChatMap = Map<string, string>;

type FriendContextType = {
  friendData: FriendData[] | null;
  setFriendData: (item: FriendData[] | null) => void;
  selectFriendData: FriendData | null | undefined;
  setSelectFriendData: (item: FriendData | null | undefined) => void;
  friendRequestData: FriendData[] | null | undefined;
  setFriendRequestData: (item: FriendData[] | null | undefined) => void;
  friendIdChatMap: FriendIdChatMap;
  setFriendIdChatMap: React.Dispatch<React.SetStateAction<FriendIdChatMap>>;
};

const FriendContext = createContext<FriendContextType | undefined>(undefined);

export const FriendProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [friendData, setFriendData] = useState<FriendData[] | null>(
    friendDataMocks,
  );
  const [friendRequestData, setFriendRequestData] = useState<
    FriendData[] | null | undefined
  >(friendRequestDataMocks);
  const [selectFriendData, setSelectFriendData] = useState<
    FriendData | null | undefined
  >(null);
  const [friendIdChatMap, setFriendIdChatMap] = useState<FriendIdChatMap>(
    () => new Map(),
  );

  return (
    <FriendContext.Provider
      value={{
        friendData,
        setFriendData,
        friendRequestData,
        setFriendRequestData,
        selectFriendData,
        setSelectFriendData,
        friendIdChatMap,
        setFriendIdChatMap,
      }}
    >
      {children}
    </FriendContext.Provider>
  );
};

export function useFriend() {
  const v = useContext(FriendContext);
  if (!v)
    throw new Error(
      'useFriend는 반드시 FriendProvider 내부에서 사용해야 합니다.',
    );
  return v;
}
