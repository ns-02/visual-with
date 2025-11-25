import { FriendData } from "../types/Friend";

export type FriendContextType = { 
  friendData: FriendData[] | null; 
  setFriendData: (item: FriendData[] | null) => void;
};