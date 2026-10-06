"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export function GlobalHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = React.useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);
      
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        setIsVisible(true);
      }
      
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 w-full transition-all duration-300 ${mobileMenuOpen ? 'z-[110] bg-transparent border-transparent backdrop-blur-none' : 'z-50 bg-[#0D0F12]/80 border-b border-border-subtle backdrop-blur-xl'} ${scrolled ? "py-2" : "py-0"} ${isVisible || mobileMenuOpen ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="max-w-7xl mx-auto h-20 px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Monogram */}
        <Link href="/" className="flex items-center gap-3.5 group relative z-[101]">
          <img 
            alt="PIXLBYTS Monogram" 
            className="h-9 w-9 rounded-sm object-contain transition-transform group-hover:scale-105 duration-300" 
            src={mobileMenuOpen ? "/pixlbyts/monogram-black.svg" : "/pixlbyts/monogram.svg"} 
          />
          <div className="flex flex-col">
            <span className={`font-display font-black text-xl tracking-tight leading-none group-hover:text-accent-orange transition-colors ${mobileMenuOpen ? 'text-[#0D0F12]' : 'text-text-primary'}`}>PIXLBYTS</span>
            <span className={`font-mono text-[9px] uppercase tracking-[0.28em] mt-1 ${mobileMenuOpen ? 'text-[#64748B]' : 'text-text-dim'}`}>TECH • BRAND • SPACE</span>
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

        {/* Right CTAs & Mobile Menu Toggle */}
        <div className="flex items-center gap-4 relative z-[101]">
          <button 
            className={`lg:hidden p-2 -mr-2 transition-colors hover:text-accent-orange ${mobileMenuOpen ? 'text-[#0D0F12]' : 'text-text-primary'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>
    </header>
      {/* Mobile Navigation Drawer */}
      <div 
        className={`fixed inset-0 z-[100] lg:hidden transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div 
          className="absolute inset-0 bg-[#ffffff] opacity-95 backdrop-blur-md"
          onClick={() => setMobileMenuOpen(false)}
        />
        
        <div 
          className={`absolute inset-0 flex flex-col items-center justify-center h-[100svh] overflow-y-auto transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-8'}`}
        >
          <nav className="flex flex-col items-center justify-center gap-8">
            <Link href="/#hero" onClick={() => setMobileMenuOpen(false)} className="text-2xl uppercase tracking-widest text-[#0D0F12] font-medium hover:text-accent-orange transition-colors">Home</Link>
            <Link href="/products" onClick={() => setMobileMenuOpen(false)} className="text-2xl uppercase tracking-widest text-[#64748B] hover:text-[#0D0F12] transition-colors">Products</Link>
            <Link href="/#capabilities" onClick={() => setMobileMenuOpen(false)} className="text-2xl uppercase tracking-widest text-[#64748B] hover:text-[#0D0F12] transition-colors">What We Do</Link>
            <Link href="/#solutions" onClick={() => setMobileMenuOpen(false)} className="text-2xl uppercase tracking-widest text-[#64748B] hover:text-[#0D0F12] transition-colors">Solutions</Link>
            <Link href="/#about" onClick={() => setMobileMenuOpen(false)} className="text-2xl uppercase tracking-widest text-[#64748B] hover:text-[#0D0F12] transition-colors">About</Link>
            <Link href="/#faq" onClick={() => setMobileMenuOpen(false)} className="text-2xl uppercase tracking-widest text-[#64748B] hover:text-[#0D0F12] transition-colors">FAQ</Link>
            <Link href="/#contact" onClick={() => setMobileMenuOpen(false)} className="text-2xl uppercase tracking-widest text-[#64748B] hover:text-[#0D0F12] transition-colors">Contact</Link>
          </nav>
        </div>
      </div>
    </>
  );
}
