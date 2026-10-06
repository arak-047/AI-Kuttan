"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export function GlobalHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 bg-[#0D0F12]/80 backdrop-blur-xl border-b border-border-subtle transition-all duration-300 ${scrolled ? "py-2" : "py-0"}`}>
      <div className="max-w-7xl mx-auto h-20 px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Monogram */}
        <Link href="/" className="flex items-center gap-3.5 group">
          <img 
            alt="PIXLBYTS Monogram" 
            className="h-9 w-9 rounded-sm object-contain transition-transform group-hover:scale-105 duration-300" 
            src="/pixlbyts/monogram.svg" 
          />
          <div className="flex flex-col">
            <span className="font-display font-black text-xl tracking-tight text-text-primary leading-none group-hover:text-accent-orange transition-colors">PIXLBYTS</span>
            <span className="font-mono text-[9px] uppercase tracking-[0.28em] text-text-dim mt-1">TECH • BRAND • SPACE</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/#hero" className="text-xs uppercase tracking-widest text-text-primary font-medium hover:text-accent-orange transition-colors">Home</Link>
          <Link href="/products" className="text-xs uppercase tracking-widest text-text-muted hover:text-text-primary transition-colors">Products</Link>
          <Link href="/#capabilities" className="text-xs uppercase tracking-widest text-text-muted hover:text-text-primary transition-colors">What We Do</Link>
          <Link href="/#solutions" className="text-xs uppercase tracking-widest text-text-muted hover:text-text-primary transition-colors">Solutions</Link>

          <Link href="/#about" className="text-xs uppercase tracking-widest text-text-muted hover:text-text-primary transition-colors">About</Link>
          <Link href="/#faq" className="text-xs uppercase tracking-widest text-text-muted hover:text-text-primary transition-colors">FAQ</Link>
          <Link href="/#contact" className="text-xs uppercase tracking-widest text-text-muted hover:text-text-primary transition-colors">Contact</Link>
        </nav>

        {/* Right CTAs */}
        <div className="flex items-center gap-4">
          <Link href="/#contact" className="inline-flex items-center justify-center px-5 py-2.5 rounded-sm bg-accent-orange hover:bg-accent-flame text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-300 shadow-sm orange-glow">
            START A PROJECT →
          </Link>
        </div>
      </div>
    </header>
  );
}
