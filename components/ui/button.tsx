import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50", {
  variants: {
    variant: {
      default: "bg-zappo-ink text-white shadow-glow hover:-translate-y-0.5 hover:bg-black dark:bg-white dark:text-black",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      outline: "border bg-background hover:bg-muted",
      ghost: "hover:bg-muted",
      gradient: "bg-gradient-to-r from-indigo-600 to-sky-500 text-white shadow-glow hover:-translate-y-0.5",
    },
    size: { default: "h-11 px-5", sm: "h-9 px-3", lg: "h-12 px-7", icon: "size-10" },
  },
  defaultVariants: { variant: "default", size: "default" },
});

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> { asChild?: boolean }
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
});
Button.displayName = "Button";
