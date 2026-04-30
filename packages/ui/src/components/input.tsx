import * as React from "react";

import { cn } from "../lib/utils";

/**
 * Input component props interface
 * Extends HTML input attributes
 */
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

/**
 * Input component - Text input field with theme-aware styling
 * Supports all HTML input types and attributes
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          // Base styles
          "flex h-10 w-full rounded-md border border-[var(--color-border)] bg-[var(--color-background)] px-3 py-2 text-base text-[var(--color-foreground)] shadow-sm transition-colors duration-200",
          // Placeholder
          "placeholder:text-[var(--color-muted-foreground)]",
          // Focus states
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)]",
          // Disabled state
          "disabled:cursor-not-allowed disabled:opacity-50",
          // File input specific
          "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-[var(--color-foreground)]",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
