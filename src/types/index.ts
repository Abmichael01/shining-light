
export type User = {
  id: string;
  email: string;
  role?: string[];
};

export type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
  setUser: (userData: User) => void;
  logout: () => void;
};

export type LoginPayload = {
    email: string;
    password: string;
}

export type RegisterPayload = {
    email: string;
    password: string;
    confirmPassword: string;
}

export type HeaderDropdownData = {
    
}