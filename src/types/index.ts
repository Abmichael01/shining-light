
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

export type BioDataFormData = {
  id?: number;
  // Student Info
  first_name: string;
  last_name: string;
  middle_name?: string;
  date_of_birth: string;
  gender: "male" | "female" | "other";
  phone: string;
  address: string;
  city: string;
  state: string;

  // Guardian Info
  guardians_name: string;
  guardians_phone: string;
  guardians_email?: string;
  guardians_address: string;
};