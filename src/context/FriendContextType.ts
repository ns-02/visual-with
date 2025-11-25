import { FriendData } from "../types/Friend";

export type FriendContextType = { 
  friendData: FriendData[] | null; 
  setFriendData: (item: FriendData[] | null) => void;
  selectFriendData: FriendData | null | undefined;
  setSelectFriendData: (item: FriendData | null | undefined) => void;
  friendRequestData: FriendData[] | null | undefined;
  setFriendRequestData: (item: FriendData[] | null | undefined) => void;
};