import {
  friendDataMocks,
  friendRequestDataMocks,
  futureRequestDataMocks,
} from '@mocks/FriendDataMocks';
import { FriendData } from '@features/friendList/models/Friend';
import { create } from 'zustand';

interface FriendState {
  friends: FriendData[];
  friendRequests: FriendData[];
  selectFriends: FriendData | null;
  requestedFriend: () => void;
  acceptFriend: (friend: FriendData) => void;
  rejectFriend: (friend: FriendData) => void;
  deleteFriend: (friendId: string) => void;
  updateSelectFriend: (friendId: string) => void;
}

export const useFriendStore = create<FriendState>((set) => ({
  friends: friendDataMocks,
  friendRequests: friendRequestDataMocks,
  selectFriends: null,

  requestedFriend: () =>
    set((state) => {
      const newFriendData = futureRequestDataMocks.shift();
      if (!newFriendData) return {};

      return { friendRequests: [...state.friendRequests, newFriendData] };
    }),

  acceptFriend: (friend) => {
    set((state) => ({
      friendRequests: state.friendRequests.filter(
        (item) => item.id !== friend.id,
      ),

      friends: [...state.friends, friend],
    }));
  },

  rejectFriend: (friend) => {
    set((state) => ({
      friendRequests: state.friendRequests.filter(
        (item) => item.id !== friend.id,
      ),
    }));
  },

  deleteFriend: (friendId) =>
    set((state) => ({
      friends: state.friends.filter((item) => item.id !== friendId),
    })),

  updateSelectFriend: (friendId) =>
    set((state) => ({
      selectFriends: state.friends.find((item) => item.id === friendId),
    })),
}));
