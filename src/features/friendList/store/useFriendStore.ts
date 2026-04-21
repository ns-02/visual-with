import {
  friendDataMocks,
  friendRequestDataMocks,
  futureRequestDataMocks,
} from '@mocks/FriendDataMocks';
import { FriendData } from '@shared/models/Friend';
import { create } from 'zustand';

interface FriendState {
  friendData: FriendData[];
  friendRequestData: FriendData[];
  selectFriendData: FriendData | null;
  requestedFriend: () => void;
  acceptFriend: (friend: FriendData) => void;
  rejectFriend: (friend: FriendData) => void;
  deleteFriend: (friendId: string) => void;
  updateSelectFriend: (friendId: string) => void;
}

export const useFriendStore = create<FriendState>((set) => ({
  friendData: friendDataMocks,
  friendRequestData: friendRequestDataMocks,
  selectFriendData: null,

  requestedFriend: () =>
    set((state) => {
      const newFriendData = futureRequestDataMocks.shift();
      if (!newFriendData) return {};

      return { friendRequestData: [...state.friendRequestData, newFriendData] };
    }),

  acceptFriend: (friend) => {
    set((state) => ({
      friendRequestData: state.friendRequestData.filter(
        (item) => item.id !== friend.id,
      ),

      friendData: [...state.friendData, friend],
    }));
  },

  rejectFriend: (friend) => {
    set((state) => ({
      friendRequestData: state.friendRequestData.filter(
        (item) => item.id !== friend.id,
      ),
    }));
  },

  deleteFriend: (friendId) =>
    set((state) => ({
      friendData: state.friendData.filter((item) => item.id !== friendId),
    })),

  updateSelectFriend: (friendId) =>
    set((state) => ({
      selectFriendData: state.friendData.find((item) => item.id === friendId),
    })),
}));
