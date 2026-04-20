import type { ReactNode } from "react";
import { useAuth } from "../features/auth/hooks/useAuth";

const MainLayout = ({ children }: { children: ReactNode }) => {
  const { logout } = useAuth();

  return (
    <div>
      <nav className="flex justify-between p-4 bg-gray-200">
        <h1>E-Commerce</h1>
        <button onClick={logout} className="bg-red-500 text-white px-3 py-1">
          Logout
        </button>
      </nav>

      <main className="p-4">{children}</main>
    </div>
  );
};

export default MainLayout;