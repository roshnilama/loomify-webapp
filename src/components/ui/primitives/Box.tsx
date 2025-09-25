import React from "react";

type BoxProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export function Box({ as: Tag = "div", className = "", ...props }: BoxProps) {
  // Use only one level primitive; consumers control classes and semantics
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Component: any = Tag;
  return <Component className={className} {...props} />;
}

