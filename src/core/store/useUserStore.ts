import { userDataMocks } from '@mocks/UserDataMocks';
import { UserData } from '@shared/models/User';
import { create } from 'zustand';

interface UserState {
  user: UserData | null;
  setUser: (user: UserData | null) => void;
  updateNickname: (nickname: string) => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: {
    id: userDataMocks.id,
    name: userDataMocks.name,
    email: userDataMocks.email,
    nickname: userDataMocks.nickname,
  },

  setUser: (user) => set({ user }),

  updateNickname: (nickname) =>
    set((state) => ({
      user: state.user ? { ...state.user, nickname } : null,
    })),
}));
