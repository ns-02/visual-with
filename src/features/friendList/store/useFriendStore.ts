import {
  friendDataMocks,
  friendRequestDataMocks,
  futureRequestDataMocks,
} from '@mocks/FriendDataMocks';
import { FriendData } from '@shared/models/Friend';
import { create } from 'zustand';

export type FriendIdChatMap = Map<string, string>;

type FriendIdChatMapUpdater =
  | FriendIdChatMap
  | ((prevMap: FriendIdChatMap) => FriendIdChatMap);

interface FriendState {
  friends: FriendData[];
  friendRequests: FriendData[];
  selectFriends: FriendData | null;
  friendIdChatMap: FriendIdChatMap;
  requestedFriend: () => void;
  acceptFriend: (friend: FriendData) => void;
  rejectFriend: (friend: FriendData) => void;
  deleteFriend: (friendId: string) => void;
  updateSelectFriend: (friendId: string) => void;
  setFriendIdChatMap: (updater: FriendIdChatMapUpdater) => void;
}

export const useFriendStore = create<FriendState>((set) => ({
  friends: friendDataMocks,
  friendRequests: friendRequestDataMocks,
  friendIdChatMap: new Map(),
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
        (item) => item.id !== friend.id && item,
      ),

      friends: [...state.friends, friend],
    }));
  },

  rejectFriend: (friend) => {
    set((state) => ({
      friendRequests: state.friendRequests.filter(
        (item) => item.id !== friend.id && item,
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

  setFriendIdChatMap: (updater) =>
    set((state) => {
      const nextMap =
        typeof updater === 'function'
          ? updater(state.friendIdChatMap)
          : updater;

      return { friendIdChatMap: new Map(nextMap) };
    }),
}));
