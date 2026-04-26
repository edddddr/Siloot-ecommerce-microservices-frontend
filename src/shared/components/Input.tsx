import { forwardRef, type InputHTMLAttributes } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  variant?: "underline" | "outline" | "filled";
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, variant = "underline", className, id, ...props }, ref) => {
    
    // Logic for different styles based on Figma
    const variants = {
      // The style you need for Signup/Login
      underline: "border-b border-content-muted bg-transparent px-0 rounded-none focus:border-content-dark",
      // Standard boxed style
      outline: "border border-brand-light bg-white px-4 rounded focus:border-brand-accent",
      // Gray background style
      filled: "bg-brand-light border-none px-4 rounded focus:ring-1 focus:ring-content-dark",
    };

    return (
      <div className="flex flex-col w-full gap-2">
        {label && (
          <label htmlFor={id} className="text-base text-content-dark font-medium">
            {label}
          </label>
        )}
        
        <input
          id={id}
          ref={ref}
          className={cn(
            "w-full py-3 transition-all duration-200 outline-none placeholder:text-content-muted",
            variants[variant],
            error ? "border-btn-danger" : "", // Highlights red if there's an error
            className
          )}
          {...props}
        />

        {error && (
          <span className="text-xs text-btn-danger font-medium animate-in fade-in slide-in-from-top-1">
            {error}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";