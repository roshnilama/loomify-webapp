import React from "react";

type StackProps = React.HTMLAttributes<HTMLDivElement> & {
  gap?: string;
  align?: string;
};

export function Stack({ className = "", gap = "6", align, ...props }: StackProps) {
  const classes = ["flex", "flex-col", `gap-${gap}`, align ? `items-${align}` : "", className]
    .filter(Boolean)
    .join(" ");
  return <div className={classes} {...props} />;
}

