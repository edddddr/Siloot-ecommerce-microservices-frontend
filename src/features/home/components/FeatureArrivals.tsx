import { Link } from "react-router-dom";

// Shared Overlay Component to keep code DRY and professional
const ArrivalOverlay = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="absolute bottom-6 left-6 z-10 flex flex-col gap-2 max-w-[240px]">
    <h3 className="text-brand-white text-2xl font-semibold tracking-wider">
      {title}
    </h3>
    <p className="text-brand-white text-sm font-light opacity-90">
      {subtitle}
    </p>
    <Link 
      to="/shop" 
      className="text-brand-white font-medium underline underline-offset-8 decoration-1 hover:opacity-70 transition-opacity w-fit mt-2"
    >
      Shop Now
    </Link>
  </div>
);

export const FeaturedArrivals = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Grid Wrapper: 2 Main Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-auto md:h-[600px]">
        
        {/* --- Column 1: PS5 (Large Vertical Block) --- */}
        <div className="relative bg-btn-black rounded overflow-hidden group flex items-end justify-center">
          <img 
            src="/ps5-arrival.png" 
            alt="PlayStation 5" 
            className="w-4/5 h-4/5 object-contain transition-transform duration-500 group-hover:scale-105"
          />
          <ArrivalOverlay 
            title="PlayStation 5" 
            subtitle="Black and White version of the PS5 coming out on sale." 
          />
        </div>

        {/* --- Column 2: Nested Grid (Right Side) --- */}
        <div className="grid grid-rows-2 gap-8">
          
          {/* Row 1: Women's Collection (Horizontal Block) */}
          <div className="relative bg-[#0D0D0D] rounded overflow-hidden group flex items-center justify-end">
             {/* Note: Aligned image to the right/end to leave room for text on the left */}
            <img 
              src="/women-collection.png" 
              alt="Women's Collection" 
              className="h-full w-2/3 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <ArrivalOverlay 
              title="Women’s Collections" 
              subtitle="Featured woman collections that give you another vibe." 
            />
          </div>

          {/* Row 2: Two Small Columns (Speakers & Perfume) */}
          <div className="grid grid-cols-2 gap-8">
            {/* Speakers */}
            <div className="relative bg-btn-black rounded overflow-hidden group flex items-center justify-center">
              <img 
                src="/speakers.png" 
                alt="Speakers" 
                className="w-2/3 h-2/3 object-contain transition-transform duration-500 group-hover:scale-105"
              />
              <ArrivalOverlay 
                title="Speakers" 
                subtitle="Amazon wireless speakers" 
              />
              {/* Added a subtle glow for these small cards */}
              <div className="absolute inset-0 bg-brand-white/5 blur-3xl rounded-full scale-50" />
            </div>

            {/* Perfume */}
            <div className="relative bg-btn-black rounded overflow-hidden group flex items-center justify-center">
              <img 
                src="/perfume.png" 
                alt="Perfume" 
                className="w-2/3 h-2/3 object-contain transition-transform duration-500 group-hover:scale-105"
              />
              <ArrivalOverlay 
                title="Perfume" 
                subtitle="GUCCI INTENSE OUD EDP" 
              />
              <div className="absolute inset-0 bg-brand-white/5 blur-3xl rounded-full scale-50" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};