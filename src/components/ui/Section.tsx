import React from "react";

type SectionProps = React.PropsWithChildren<{ className?: string; id?: string }>;

export function Section({ className = "", id, children }: SectionProps) {
  return (
    <section id={id} className={["px-6 py-16", className].join(" ")}>
      {children}
    </section>
  );
}

