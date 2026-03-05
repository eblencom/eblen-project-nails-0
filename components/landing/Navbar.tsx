"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-40 transition-all duration-500 ${
        scrolled ? "glass-card py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-16">
        <a href="#hero" className="font-display text-xl tracking-wide text-foreground">
          Nail<span className="ml-0.5 text-blush italic">Master</span>
        </a>
        <div className="hidden items-center gap-8 sm:flex">
          {[
            ["Прайс", "#prices"],
            ["Портфолио", "#portfolio"],
            ["Контакты", "#contacts"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </div>
        <a href="#contacts" className="btn-blush px-6 py-2.5 font-body text-xs">
          Запись
        </a>
      </div>
    </nav>
  );
}
