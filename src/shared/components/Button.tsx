import type { ButtonHTMLAttributes, ReactNode } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility to merge tailwind classes safely [cite: 42, 56]
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "black" | "success" | "danger" | "outline"; // Colors from your Figma 
  size?: "sm" | "md" | "lg"; // Flexible sizing
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export const Button = ({
  children,
  className,
  variant = "black",
  size = "md",
  isLoading = false,
  leftIcon,
  rightIcon,
  disabled,
  ...props
}: ButtonProps) => {
  
  // Mapping variants to your design tokens 
  const variants = {
    black: "bg-btn-black text-brand-white hover:bg-content-muted", // #000000
    success: "bg-btn-success text-content-dark hover:opacity-90", // #00FF66
    danger: "bg-btn-danger text-brand-white hover:bg-btn-hoverRed", // #DB4444
    outline: "border border-content-muted text-content-dark hover:bg-brand-light",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-12 py-4 text-base font-medium", // Standard professional size [cite: 41]
    lg: "px-16 py-5 text-lg font-bold",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed",
        variants[variant],
        sizes[size],
        className
      )}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading ? (
        <span className="animate-pulse">Loading...</span>
      ) : (
        <>
          {leftIcon && <span className="mr-2">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="ml-2">{rightIcon}</span>}
        </>
      )}
    </button>
  );
};