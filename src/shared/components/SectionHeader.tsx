import type { ReactNode } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  children?: ReactNode; // For "View All" buttons or timers
  className?: string;
}

export const SectionHeader = ({ 
  title, 
  subtitle, 
  children, 
  className 
}: SectionHeaderProps) => {
  return (
    <div className={cn("flex flex-col gap-5", className)}>
      {/* Decorative Accent & Title */}
      <div className="flex items-center gap-4">
        {/* Decorative Rectangle: 20px width, 40px height */}
        <div className="w-[20px] h-[40px] bg-brand-accent rounded-sm" /> 
        
        <span className="text-brand-accent font-semibold text-base">
          {title}
        </span>
      </div>

      {/* Subtitle & Action Area */}
      <div className="flex items-end justify-between">
        {subtitle && (
          <h2 className="text-4xl font-semibold tracking-wide text-content-dark">
            {subtitle}
          </h2>
        )}
        
        {/* This is where your View All button or Flash Sale Timer will go */}
        {children && <div className="flex items-center">{children}</div>}
      </div>
    </div>
  );
};