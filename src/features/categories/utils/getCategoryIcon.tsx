import { 
  Smartphone, 
  Monitor, 
  Watch, 
  Camera, 
  Headphones, 
  Gamepad2, 
  Gem,            // Jewelry & Watches
  Flower2,        // Garden & Outdoor
  BookOpen,       // Books & Media
  Sparkles,       // Health & Beauty
  ShoppingBasket, // Groceries & Pets
  Baby,           // Babies & Toys
  Bike,           // Sports & Outdoor
  Stethoscope,    // Medicine
  Home,           // Home & Lifestyle
  Shirt,          // Men's Fashion
  UserCircle,     // Woman's Fashion (or use a Dress icon if using FontAwesome)
  Package 
} from "lucide-react";

export const getCategoryIcon = (name: string) => {
  const iconMap: { [key: string]: React.ReactNode } = {
    // Original Icons
    "Electronics": <Smartphone size={40} strokeWidth={1} />,
    "Gaming": <Gamepad2 size={40} strokeWidth={1} />,
    
    // New Category Mappings
    "Jewelry & Watches": <Gem size={40} strokeWidth={1} />,
    "Garden & Outdoor": <Flower2 size={40} strokeWidth={1} />,
    "Books & Media": <BookOpen size={40} strokeWidth={1} />,
    "Health & Beauty": <Sparkles size={40} strokeWidth={1} />,
    "Groceries & Pets": <ShoppingBasket size={40} strokeWidth={1} />,
    "Babies & Toys": <Baby size={40} strokeWidth={1} />,
    "Sports & Outdoor": <Bike size={40} strokeWidth={1} />,
    "Medicine": <Stethoscope size={40} strokeWidth={1} />,
    "Home & Lifestyle": <Home size={40} strokeWidth={1} />,
    "Men's Fashion": <Shirt size={40} strokeWidth={1} />,
    "Woman's Fashion": <UserCircle size={40} strokeWidth={1} />, // Note: Lucide doesn't have a 'Dress', UserCircle is a clean alternative
  };

  return iconMap[name] || <Package size={40} strokeWidth={1} />;
};