import React from "react";

type CommonProps = {
  variant?: "primary" | "outline" | "brand";
  className?: string;
  href?: string;
};

type ButtonProps = CommonProps & (
  | (React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
  | (React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string })
);

export function Button({ variant = "primary", className = "", href, ...props }: ButtonProps) {
  const base = "rounded-full h-11 px-5 inline-flex items-center justify-center text-sm font-medium brand-ring";
  const variants: Record<string, string> = {
    primary: "bg-foreground text-background hover:opacity-90",
    outline:
      "border border-[var(--border)] hover:bg-[var(--brand)]/8 hover:border-[var(--brand)]/30",
    brand: "bg-[var(--brand)] text-white hover:opacity-95",
  };
  const classes = [base, variants[variant], className].join(" ");
  if (href) {
    return <a href={href} className={classes} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)} />;
  }
  return <button className={classes} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)} />;
}

