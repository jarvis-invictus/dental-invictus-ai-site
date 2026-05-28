import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "lime" | "outline";
    size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        const variants = {
            primary:
                "bg-bond-navy text-white hover:bg-bond-navy/90 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300",
            secondary:
                "bg-white text-bond-navy border-2 border-slate-200 hover:border-bond-lime hover:bg-bond-lime/10 shadow-sm hover:-translate-y-1 transition-all",
            lime:
                "bg-bond-lime text-bond-navy font-bold hover:bg-[#b3e600] border-2 border-transparent hover:border-bond-navy/10 shadow-md hover:shadow-lg hover:scale-105 transform transition-all",
            outline:
                "border-2 border-bond-cyan/30 text-bond-cyan hover:bg-bond-cyan/10 hover:border-bond-cyan",
        };

        const sizes = {
            sm: "h-9 px-4 text-xs rounded-lg",
            md: "h-12 px-6 text-sm rounded-xl",
            lg: "h-14 px-8 text-lg rounded-xl",
        };

        return (
            <button
                className={cn(
                    "inline-flex items-center justify-center font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bond-lime disabled:pointer-events-none disabled:opacity-50",
                    variants[variant],
                    sizes[size],
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
