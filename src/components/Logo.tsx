import React from "react";

export function Logo({ className = "", size = 20 }: { className?: string; size?: number }) {
  return (
    <div className={["inline-flex items-center gap-2", className].join(" ")}>
      <span
        className="inline-block rounded-full"
        style={{ width: size, height: size, background: "var(--brand, #9F7E69)" }}
      />
      <span className="font-semibold text-[#846A57]">Loomify</span>
    </div>
  );
}

