import React from "react";

type ContainerProps = React.PropsWithChildren<{ className?: string }>;

export function Container({ className = "", children }: ContainerProps) {
  return (
    <div className={["mx-auto w-full", "max-w-6xl", className].join(" ")}>{children}</div>
  );
}

