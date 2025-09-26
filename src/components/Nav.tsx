"use client";
import React, { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";

const SECTIONS = [
  { id: "features", label: "Features" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    window.addEventListener("scroll", handleScroll);
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/98 backdrop-blur-3xl border-b border-gray-900/20 shadow-2xl shadow-gray-900/20" 
          : "bg-white/90 backdrop-blur-2xl border-b border-gray-900/10"
      }`}
    >
      <div className="mx-auto w-full max-w-7xl px-8 h-24 flex items-center justify-between">
        <a 
          href="#" 
          className="flex items-center gap-3 group transition-all duration-300 hover:scale-110"
        >
          <Logo size={32} className="text-gray-900 transition-colors duration-300 group-hover:text-blue-600 font-black" />
        </a>
        
        <div className="flex items-center gap-2">
          {SECTIONS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? "page" : undefined}
              className={[
                "relative px-8 py-4 text-base font-bold transition-all duration-200 ease-out",
                "rounded-2xl group",
                active === id
                  ? "text-white"
                  : "text-gray-900 hover:text-white",
              ].join(" ")}
            >
              {/* Active background with smooth animation */}
              {active === id && (
                <div className="absolute inset-0 bg-gray-900 rounded-2xl shadow-2xl shadow-gray-900/30" />
              )}
              
              {/* Hover background */}
              <div className="absolute inset-0 bg-gray-900 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-200" />
              
              {/* Text content */}
              <span className="relative z-10 transition-colors duration-200 uppercase tracking-wide">
                {label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}