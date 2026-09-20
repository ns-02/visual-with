import {
  friendDataMocks,
  friendRequestDataMocks,
  futureRequestDataMocks,
} from '@mocks/FriendDataMocks';
import { FriendData } from '@shared/models/User';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FriendState {
  friendData: FriendData[];
  friendRequestData: FriendData[];
  selectFriendId: string | null;

  setSelectFriendId: (friendId: string | null) => void;
  requestedFriend: () => void;
  acceptFriend: (friend: FriendData) => void;
  rejectFriend: (friend: FriendData) => void;
  deleteFriend: (friendId: string) => void;
  reset: () => void;
}

export const useFriendStore = create<FriendState>()(
  persist(
    (set) => ({
      friendData: friendDataMocks,
      friendRequestData: friendRequestDataMocks,
      selectFriendId: null,

      setSelectFriendId: (friendId) => set({ selectFriendId: friendId }),

      requestedFriend: () =>
        set((state) => {
          const newFriendData = futureRequestDataMocks.shift();
          if (!newFriendData) return {};

          return {
            friendRequestData: [...state.friendRequestData, newFriendData],
          };
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

      reset: () =>
        set({
          friendData: friendDataMocks,
          friendRequestData: friendRequestDataMocks,
          selectFriendId: null,
        }),
    }),
    {
      name: 'friend-storage',
      partialize: (state) => ({
        selectFriendId: state.selectFriendId,
      }),
    },
  ),
);
