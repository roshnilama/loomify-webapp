import React from "react";

export function Logo({ className = "", size = 20 }: { className?: string; size?: number }) {
  return (
    <div className={["inline-flex items-center gap-3", className].join(" ")}>
      <div className="relative">
        <div
          className="rounded-lg flex items-center justify-center font-bold text-white shadow-lg"
          style={{ 
            width: size, 
            height: size, 
            background: "linear-gradient(135deg, #8B5CF6 0%, #A855F7 50%, #C084FC 100%)",
            fontSize: size * 0.4
          }}
        >
          L
        </div>
      </div>
      <span className="font-bold tracking-tight bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Loomify</span>
    </div>
  );
}

