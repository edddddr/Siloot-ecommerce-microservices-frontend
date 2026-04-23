import { Heart, Eye, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  image: string;
  rating: number;
  badgeText?: string;
  badgeType?: "discount" | "new";
}

export const ProductCard = ({
//   id,    
  name,
  price,
  image,
  rating,
  badgeText,
  badgeType = "discount",
}: ProductCardProps) => {
  return (
    <div className="flex flex-col gap-4 w-full group cursor-pointer">
      {/* --- Section 1: Image & Overlay Actions --- */}
      <div className="relative aspect-square bg-brand-cream rounded flex items-center justify-center overflow-hidden">
        
        {/* Top Left: Reusable Badge */}
        {badgeText && (
          <div className={cn(
            "absolute top-3 left-3 px-3 py-1 rounded text-white text-xs font-medium",
            badgeType === "discount" ? "bg-btn-danger" : "bg-btn-success"
          )}>
            {badgeText}
          </div>
        )}

        {/* Top Right: Actions (Wishlist & View) */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
            <Link 
              to="/wishList">
          <button className="bg-white p-1.5 rounded-full shadow-sm hover:text-btn-danger transition-colors">
            <Heart size={20} />
          </button>
          </Link>

          <button className="bg-white p-1.5 rounded-full shadow-sm hover:text-brand-accent transition-colors">
            <Eye size={20} />
          </button>
        </div>

        {/* Product Image */}
        <img 
          src={image} 
          alt={name} 
          className="w-3/4 h-3/4 object-contain group-hover:scale-110 transition-transform duration-300" 
        />

        {/* Professional Detail: Hidden "Add to Cart" that slides up on hover */}
        <button className="absolute bottom-0 w-full bg-btn-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">
          Add To Cart
        </button>
      </div>

      {/* --- Section 2: Details --- */}
      <div className="flex flex-col gap-2">
        <h3 className="text-base font-semibold text-content-dark truncate">
          {name}
        </h3>
        
        <div className="flex items-center gap-3">
          <span className="text-brand-accent font-medium">{price}</span>
          
          {/* Rating Section: 5 Stars */}
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                size={16}
                className={cn(
                  index < Math.floor(rating) 
                    ? "fill-yellow-400 text-yellow-400" 
                    : "fill-gray-300 text-gray-300"
                )}
              />
            ))}
            <span className="text-content-muted text-xs font-semibold ml-1">
              ({rating * 15})
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};


// Use this for to confirm the component is work
// src/App.tsx
// import { ProductCard } from "./components/ProductCard";

// const MOCK_PRODUCTS = [
//   { id: '1', name: 'HAVIT HV-G92 Gamepad', price: '$120', rating: 4.5, badgeText: '-40%', badgeType: 'discount' as const, image: 'https://placehold.co' },
//   { id: '2', name: 'AK-900 Wired Keyboard', price: '$960', rating: 4, badgeText: '-35%', badgeType: 'discount' as const, image: 'https://placehold.co' },
//   { id: '3', name: 'IPS LCD Gaming Monitor', price: '$370', rating: 5, badgeText: 'NEW', badgeType: 'new' as const, image: 'https://placehold.co' },
//   { id: '4', name: 'S-Series Comfort Chair', price: '$375', rating: 4.5, image: 'https://placehold.co' },
// ];

// export default function TestPage() {
//   return (
//     <div className="p-10 bg-white min-h-screen">
//       <h1 className="text-2xl font-bold mb-8">Product Grid Test</h1>
      
//       {/* Testing responsiveness and grid gaps */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {MOCK_PRODUCTS.map((product) => (
//           <ProductCard 
//             key={product.id} 
//             {...product} 
//             className="border border-transparent hover:border-gray-100 p-2 rounded-lg" // Testing className override
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
