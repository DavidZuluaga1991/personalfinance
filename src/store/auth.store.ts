// src/store/auth.store.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = { id: number; email: string } | null;

interface AuthState {
  user: User;
  token: string | null;
  loginLocal: (user: User, token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      loginLocal: (user, token) => set({ user, token }),
      logout: () => set({ user: null, token: null }),
    }),
    { name: "auth-storage" }
  )
);
