import React from "react";

type FlexProps = React.HTMLAttributes<HTMLDivElement> & {
  direction?: "row" | "col";
  align?: string;
  justify?: string;
  wrap?: boolean;
};

export function Flex({
  className = "",
  direction = "row",
  align,
  justify,
  wrap,
  ...props
}: FlexProps) {
  const classes = [
    "flex",
    direction === "col" ? "flex-col" : "flex-row",
    align ? `items-${align}` : "",
    justify ? `justify-${justify}` : "",
    wrap ? "flex-wrap" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return <div className={classes} {...props} />;
}

