import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "brand" | "outline";
}

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        {
          "bg-surface-light text-muted": variant === "default",
          "bg-brand/20 text-brand": variant === "brand",
          "border border-border text-muted": variant === "outline",
        },
        className
      )}
      {...props}
    />
  );
}
