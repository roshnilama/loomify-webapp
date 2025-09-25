"use client";
import React, { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";

const SECTIONS = [
  { id: "features", label: "Features" },
  { id: "gallery", label: "Gallery" },
  { id: "newsletter", label: "Newsletter" },
];

export function Nav() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/5 backdrop-blur-sm border-b border-[#9F7E69]/10">
      <div className="mx-auto w-full max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <Logo size={22} className="text-[#9F7E69]" />
        </a>
        <div className="flex items-center gap-6">
          {SECTIONS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? "page" : undefined}
              className={[
                "px-4 py-2 rounded-full text-[15px] font-medium transition-all duration-200",
                active === id
                  ? "bg-[#9F7E69]/20 text-[#846A57]"
                  : "text-neutral-300 hover:text-[#9F7E69] hover:bg-[#9F7E69]/10",
              ].join(" ")}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}