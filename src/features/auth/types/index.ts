export interface AuthTokens {
  access: string;
  refresh: string;
}

export interface User {
  id: string;
  email: string;
}

export type AuthContextType = {
  isAuthenticated: boolean;
  logout: () => void;
};
