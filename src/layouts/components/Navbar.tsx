import { useAuth } from "../../features/auth/hooks/useAuth";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="flex justify-between p-4 bg-gray-200">
      <h1 className="font-bold">E-Commerce</h1>

      <div className="flex gap-3">
        {isAuthenticated ? (
        <>
          <a href="/cart">Cart</a>
          <button
            onClick={logout}
            className="bg-red-500 text-white px-3 py-1"
            >
            Logout
          </button>
        </>
        ) : (
          <>
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;