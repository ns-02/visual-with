import { create } from 'zustand';

export type FriendIdChatMap = Map<string, string>;

type FriendIdChatMapUpdater =
  | FriendIdChatMap
  | ((prevMap: FriendIdChatMap) => FriendIdChatMap);

interface DirectChatState {
  isAreaOpen: boolean;
  friendIdChatMap: FriendIdChatMap;
  toggleAreaOpen: () => void;
  setFriendIdChatMap: (updater: FriendIdChatMapUpdater) => void;
}

export const useDirectChatStore = create<DirectChatState>((set) => ({
  isAreaOpen: false,
  friendIdChatMap: new Map(),

  toggleAreaOpen: () => set((state) => ({ isAreaOpen: !state.isAreaOpen })),

  setFriendIdChatMap: (updater) =>
    set((state) => {
      const nextMap =
        typeof updater === 'function'
          ? updater(state.friendIdChatMap)
          : updater;

      return { friendIdChatMap: new Map(nextMap) };
    }),
}));
