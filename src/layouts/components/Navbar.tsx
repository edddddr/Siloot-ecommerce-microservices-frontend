import { useAuth } from "../../features/auth/hooks/useAuth";

// const Navbar = () => {
//   const { isAuthenticated, logout } = useAuth();

//   return (
//     <nav className="flex justify-between p-4 bg-gray-200">
//       <h1 className="font-bold">E-Commerce</h1>

//       <div className="flex gap-3">
//         {isAuthenticated ? (
//         <>
//           <a href="/cart">Cart</a>
//           <button
//             onClick={logout}
//             className="bg-red-500 text-white px-3 py-1"
//             >
//             Logout
//           </button>
//         </>
//         ) : (
//           <>
//             <a href="/login">Login</a>
//             <a href="/register">Register</a>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// };



import { Search, Heart, ShoppingCart, ChevronDown } from "lucide-react";
import { Link, NavLink } from "react-router-dom"; // Assuming you're using react-router
// import { Button } from "../shared/components/Button";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <header className="w-full">
      {/* --- Section 1: Top Announcement Bar --- */}
      <div className="bg-btn-black text-brand-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center relative">
          
          {/* Centered Announcement */}
          <div className="flex-grow text-center flex items-center justify-center gap-2 text-sm md:text-base">
            <p className="font-light">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            </p>
            <Link to="/shop" className="font-bold underline hover:text-content-light transition-colors">
              ShopNow
            </Link>
          </div>

          {/* Language Selector (Right Side) */}
          <div className="hidden md:flex items-center gap-1 cursor-pointer hover:opacity-80">
            <span className="text-sm">English</span>
            <ChevronDown size={18} />
          </div>
        </div>
      </div>

      {/* --- Section 2: Main Navigation --- */}
      <nav className="bg-brand-white border-b border-brand-light pt-10 pb-5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* 1. Logo */}
          <Link to="/" className="text-2xl font-bold tracking-wider text-content-dark">
            EXCLUSIVE
          </Link>

          {/* 2. Navigation Links */}
          <ul className="flex items-center gap-8 text-content-dark font-medium">
            <li><Link to="/" className="hover:underline underline-offset-4 transition-all">Home</Link></li>
            <li><Link to="/contact" className="hover:underline underline-offset-4 transition-all">Contact</Link></li>
            <li><Link to="/about" className="hover:underline underline-offset-4 transition-all">About</Link></li>

            {!isAuthenticated ? (
              
            <li><Link to="/signup" className="hover:underline 
            underline-offset-4 transition-all">Sign Up</Link></li>
            
            ):(
              <NavLink to="/login" onClick={logout} className="hover:underline 
            underline-offset-4 transition-all">Logout</NavLink>
             )}
          </ul>

          {/* 3. Actions (Search, Heart, Cart) */}
          <div className="flex items-center gap-6">
            {/* Search Input Container */}
            <div className="relative group">
              <input 
                type="text" 
                placeholder="What are you looking for?"
                className="bg-brand-light rounded py-2 px-4 pr-10 text-sm w-64 focus:outline-none focus:ring-1 focus:ring-content-muted transition-all"
              />
              <Search 
                size={20} 
                className="absolute right-3 top-1/2 -translate-y-1/2 text-content-dark cursor-pointer" 
              />
            </div>

            {isAuthenticated && (
            <>
            {/* Icon Buttons */}
            <div className="flex items-center gap-4">
              <button className="relative hover:scale-110 transition-transform">
                <Heart size={24} className="text-content-dark" />
                {/* Optional Badge */}
                <span className="absolute -top-1 -right-1 bg-btn-danger text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">2</span>
              </button>
              
              
              <Link 
              to="/cart"  className="relative hover:scale-110 transition-transform">
                <ShoppingCart size={24} className="text-content-dark" />
                <span className="absolute -top-1 -right-1 bg-btn-danger text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">5</span>
              </Link >
            </div>
            </>)}
          </div>

        </div>
      </nav>
    </header>
  );
};


export default Navbar;
