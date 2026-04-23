import { Send } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-btn-black text-brand-white pt-20 pb-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
        
        {/* --- Column 1: Subscribe --- */}
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl font-bold tracking-wider">Exclusive</h2>
          <p className="text-xl font-medium">Subscribe</p>
          <p className="text-sm font-light">Get 10% off your first order</p>
          
          <div className="relative w-full max-w-[220px]">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-transparent border-2 border-brand-white rounded py-3 px-4 w-full pr-12 text-sm focus:outline-none"
            />
            <Send 
              size={20} 
              className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer hover:text-brand-accent transition-colors" 
            />
          </div>
        </div>

        {/* --- Column 2: Support --- */}
        <div className="flex flex-col gap-5">
          <h2 className="text-xl font-semibold">Support</h2>
          <div className="flex flex-col gap-4 text-sm font-light leading-relaxed">
            <p>Megenagna, Addis Ababa, Ethiopia</p>
            <p>netela@gmail.com</p>
            <p>+251988752762</p>
          </div>
        </div>

        {/* --- Column 3: Account --- */}
        <div className="flex flex-col gap-5">
          <h2 className="text-xl font-semibold">Account</h2>
          <nav className="flex flex-col gap-4 text-sm font-light">
            <Link to="/profile" className="hover:underline">My Account</Link>
            <Link to="/login" className="hover:underline">Login / Register</Link>
            <Link to="/cart" className="hover:underline">Cart</Link>
            <Link to="/wishlist" className="hover:underline">Wishlist</Link>
            <Link to="/shop" className="hover:underline">Shop</Link>
          </nav>
        </div>

        {/* --- Column 4: Quick Link --- */}
        <div className="flex flex-col gap-5">
          <h2 className="text-xl font-semibold">Quick Link</h2>
          <nav className="flex flex-col gap-4 text-sm font-light">
            <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            <Link to="/faq" className="hover:underline">FAQ</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </nav>
        </div>

        {/* --- Column 5: Social Media --- */}
        <div className="flex flex-col gap-5">
          <h2 className="text-xl font-semibold">Follow us in</h2>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:scale-110 transition-transform"><FaFacebook size={24} /></a>
            <a href="#" className="hover:scale-110 transition-transform"><FaTwitter size={24} /></a>
            <a href="#" className="hover:scale-110 transition-transform"><FaInstagram size={24} /></a>
            <a href="#" className="hover:scale-110 transition-transform"><FaLinkedin size={24} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="mt-16 pt-6 border-t border-brand-white/10 text-center">
        <p className="text-brand-light/40 text-sm">
          &copy; Copyright Rimel 2022. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;