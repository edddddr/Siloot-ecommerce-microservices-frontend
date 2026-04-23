import { ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AppleIcon } from '../../../assets/icons/index';
import { Iphone14 } from '../../../assets/images/index';

const Hero = () => {
  const sidebarLinks = [
    { name: "Woman's Fashion", hasChevron: true },
    { name: "Men's Fashion", hasChevron: true },
    { name: "Electronics", hasChevron: false },
    { name: "Home & Lifestyle", hasChevron: false },
    { name: "Medicine", hasChevron: false },
    { name: "Sports & Outdoor", hasChevron: false },
    { name: "Babies & Toys", hasChevron: false },
    { name: "Groceries & Pets", hasChevron: false },
    { name: "Health & Beauty", hasChevron: false },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* --- Part 1: Hero Sidebar (Left Column) --- */}
        <aside className="md:col-span-1 border-r border-brand-light pr-4">
          <ul className="flex flex-col gap-4">
            {sidebarLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={`/category/${link.name.toLowerCase().replace(/\s/g, '-')}`}
                  className="flex items-center justify-between text-content-dark hover:text-btn-danger transition-colors font-medium text-base"
                >
                  {link.name}
                  {link.hasChevron && <ChevronRight size={18} className="text-content-dark" />}
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        {/* --- Part 2: Main Banner (Right Column) --- */}
        <main className="md:col-span-3 bg-btn-black text-brand-white p-8 md:p-16 flex flex-col md:flex-row items-center justify-between overflow-hidden relative">
          
          {/* Banner Content (Left Side) */}
          <div className="flex flex-col gap-5 z-10">
            <div className="flex items-center gap-4">
              {/* Apple Logo Placeholder */}
              <div className="w-8 h-10 flex items-center justify-center">
                 <img src={AppleIcon} alt="Apple" className="object-contain" />
              </div>
              <p className="text-base font-light">iPhone 14 series</p>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight max-w-md">
              Up to 10% off Voucher
            </h1>

            <Link 
              to="/shop" 
              className="flex items-center gap-2 mt-2 w-fit border-b border-brand-white pb-1 hover:text-brand-light transition-all font-medium"
            >
              Shop Now
              <ArrowRight size={20} />
            </Link>
          </div>

          {/* Visual Placeholder (Right Side) */}
          <div className="mt-8 md:mt-0 w-full md:w-1/2 flex justify-center items-center">
            {/* Developer Note: Insert your image here. 
               Use an absolute positioned glow or shadow if needed to match Figma. 
            */}
            <div className="w-full aspect-video bg-zinc-800/50 rounded flex items-center justify-center">
              <img src={Iphone14} alt="Apple" className="object-contain" />
            </div>
          </div>

        </main>
      </div>
    </section>
  );
};


export default Hero