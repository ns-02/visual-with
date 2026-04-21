import { userDataMocks } from '@mocks/UserDataMocks';
import { ToolId } from '@shared/models/ToolId';
import { UserData } from '@shared/models/User';
import { create } from 'zustand';

interface UserState {
  user: UserData | null;
  currentToolId: ToolId | null;
  setUser: (user: UserData | null) => void;
  updateNickname: (nickname: string) => void;
  setToolId: (id: ToolId | null) => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: {
    id: userDataMocks.id,
    name: userDataMocks.name,
    email: userDataMocks.email,
    nickname: userDataMocks.nickname,
  },

  currentToolId: null,

  setUser: (user) => set({ user }),

  updateNickname: (nickname) =>
    set((state) => ({
      user: state.user ? { ...state.user, nickname } : null,
    })),

  setToolId: (id) => set({ currentToolId: id }),
}));
