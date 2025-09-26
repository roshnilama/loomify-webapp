import React from "react";

export function Logo({ className = "", size = 20 }: { className?: string; size?: number }) {
  return (
    <div className={["inline-flex items-center gap-3", className].join(" ")}>
      <div className="relative">
        <div
          className="rounded-lg flex items-center justify-center font-bold text-white"
          style={{ 
            width: size, 
            height: size, 
            background: "linear-gradient(135deg, #1f2937 0%, #374151 100%)",
            fontSize: size * 0.4
          }}
        >
          L
        </div>
      </div>
      <span className="font-bold tracking-tight">Loomify</span>
    </div>
  );
}

