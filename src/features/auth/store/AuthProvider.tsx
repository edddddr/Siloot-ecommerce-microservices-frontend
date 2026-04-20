import { createContext, type ReactNode, useState } from "react";
import { getAccessToken, clearAuth } from "./auhtStore";
import type { AuthContextType } from "../types/index";


const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!getAccessToken()
  );

  const logout = () => {
    clearAuth();
    setIsAuthenticated(false);
    window.location.href = "/login";
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


export default AuthContext