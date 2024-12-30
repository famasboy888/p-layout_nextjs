import { create } from "zustand";

export interface ZUser {
  id: string | undefined;
  email: string | undefined;
  name: string | undefined;
  role: string | undefined;
  image: string | null | undefined;
}

export interface ZUserStore {
  user: ZUser | null;
  setUser: (user: ZUser | null) => void;
  resetUser: () => void;
}

export const useUserStore = create<ZUserStore>((set) => ({
  user: null,
  setUser: (user: ZUser | null) => set({ user }),
  resetUser: () => set({ user: null }),
}));
