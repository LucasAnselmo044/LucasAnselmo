import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-base font-semibold ring-offset-background transition-colors",
  {
    variants: {
      variant: {
        default: "bg-blue-500 text-primary hover:bg-blue-800",
        primary: "bg-primary text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-black",
        outline: "border border-blue-500 bg-transparent text-blue-500 hover:bg-blue-500 hover:text-primary"
      },
      size: {
        default: "h-[44px] px-6 py-2",
        md: "h-[48px] px-6",
        lg: "h-[56px] px-8 text-sm uppercase tracking-[2px]",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
