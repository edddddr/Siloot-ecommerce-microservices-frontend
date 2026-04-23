import type { ReactNode } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CategoryCardProps {
  icon: ReactNode;
  title: string;
  isActive?: boolean; // To show a selected state
}

export const CategoryCard = ({ icon, title, isActive = false }: CategoryCardProps) => {
  return (
    <div
      className={cn(
        // Layout: Centered content with uniform padding
        "flex flex-col items-center justify-center gap-4 p-6 rounded border transition-all duration-300 cursor-pointer group",
        "w-full aspect-square md:aspect-auto md:h-[145px] md:w-[170px]",
        
        // Default State: White background with light border
        "bg-brand-white border-brand-light",
        
        // Active/Hover State: Switches to your Secondary 2 (#DB4444)
        isActive 
          ? "bg-brand-accent border-brand-accent text-brand-white" 
          : "hover:bg-brand-accent hover:border-brand-accent hover:text-brand-white shadow-sm"
      )}
    >
      {/* Icon Container */}
      <div className={cn(
        "transition-transform duration-300 group-hover:scale-110",
        isActive ? "text-brand-white" : "text-content-dark group-hover:text-brand-white"
      )}>
        {icon}
      </div>

      {/* Title: Clean typography matching Figma Text2 (#000000) */}
      <span className={cn(
        "text-base font-medium text-center transition-colors",
        isActive ? "text-brand-white" : "text-content-dark group-hover:text-brand-white"
      )}>
        {title}
      </span>
    </div>
  );
};