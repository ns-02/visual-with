export interface FriendData {
  id: number;
  name: string;
}

export type FriendContextType = { 
  friendData: FriendData[] | null; 
  setFriendData: (item: FriendData[] | null) => void;
};