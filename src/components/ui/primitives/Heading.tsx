import React from "react";

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
};

export function Heading({ level = 2, className = "", ...props }: HeadingProps) {
  const Tag = (`h${level}` as unknown) as keyof JSX.IntrinsicElements;
  const base = {
    1: "text-4xl sm:text-6xl font-bold tracking-tight",
    2: "text-2xl sm:text-3xl font-bold",
    3: "text-xl font-semibold",
    4: "text-lg font-semibold",
    5: "text-base font-semibold",
    6: "text-sm font-semibold",
  }[level];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Component: any = Tag;
  return <Component className={[base, className].join(" ")} {...props} />;
}

