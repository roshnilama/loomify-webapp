import React from "react";

type CardProps = React.PropsWithChildren<{ className?: string }>;

export function Card({ className = "", children }: CardProps) {
  return (
    <div className={["card-surface rounded-2xl p-6 border", className].join(" ")}>{children}</div>
  );
}

