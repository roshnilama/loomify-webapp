import React from "react";

type TextProps = React.HTMLAttributes<HTMLParagraphElement> & {
  size?: "sm" | "base" | "lg";
  muted?: boolean;
};

export function Text({ className = "", size = "base", muted, ...props }: TextProps) {
  const sizes: Record<string, string> = { sm: "text-sm", base: "text-base", lg: "text-lg" };
  const classes = [sizes[size], muted ? "text-foreground/70" : "", className].filter(Boolean).join(" ");
  return <p className={classes} {...props} />;
}

