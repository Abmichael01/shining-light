// stores/useAuthStore.ts
import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';
import { AuthState, User } from '@/types';

const initialState = {
  user: null as User | null,
  isAuthenticated: false,
};

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,

        setUser: (userData: User) =>
          set({
            user: userData,
            isAuthenticated: true,
          }),

        logout: () =>
          set({
            user: null,
            isAuthenticated: false,
          }),
      }),
      {
        name: 'auth-storage',
      }
    )
  )
);