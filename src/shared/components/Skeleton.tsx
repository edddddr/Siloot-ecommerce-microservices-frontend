import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SkeletonProps {
  className?: string;
  variant?: "rectangle" | "circle" | "text";
}

export const Skeleton = ({ className, variant = "rectangle" }: SkeletonProps) => {
  const variantClasses = {
    rectangle: "rounded",
    circle: "rounded-full",
    text: "h-4 w-3/4 rounded",
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-gray-200",
        variantClasses[variant],
        className
      )}
    >
      {/* The Moving Shimmer Gradient */}
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
    </div>
  );
};