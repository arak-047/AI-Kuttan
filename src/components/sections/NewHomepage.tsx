"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { OrbitalDiagram } from "./OrbitalDiagram";
import { GlobalHeader } from "../navigation/GlobalHeader";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MobileSlideshow = ({ images, mode }: { images: string[], mode: 'dark' | 'light' }) => {
  const [idx, setIdx] = useState(0);
  const [isReduced, setIsReduced] = useState(false);

  useEffect(() => {
    const mm = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReduced(mm.matches);
    if (mm.matches) return;
    
    const timer = setInterval(() => {
      setIdx(prev => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="absolute inset-0 pointer-events-none md:hidden overflow-hidden z-0">
      {images.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 w-full h-full transition-all duration-[1200ms] ease-in-out"
          style={{
            opacity: idx === i || (isReduced && i === 0) ? (mode === 'dark' ? 0.12 : 0.04) : 0,
            transform: idx === i || (isReduced && i === 0) ? 'scale(1.05)' : 'scale(1)',
            backgroundImage: `url('${src}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: mode === 'dark' ? 'grayscale(40%)' : 'grayscale(100%)',
          }}
        />
      ))}
      {mode === 'dark' ? (
        <div className="absolute inset-0 bg-gradient-to-t from-surface-base via-transparent to-surface-base/50"></div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/50"></div>
      )}
    </div>
  );
};

export function NewHomepage() {
  const [scrolled, setScrolled] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      mm.add({
        isDesktop: "(min-width: 768px)",
        isMobile: "(max-width: 767px)",
        reduceMotion: "(prefers-reduced-motion: reduce)"
      }, (context) => {
        let { isDesktop, isMobile, reduceMotion } = context.conditions as any;
        
        if (reduceMotion) {
          gsap.set('.gsap-solution-card, .gsap-impact-card, .gsap-word, .gsap-core-desc', { opacity: 1, x: 0, y: 0, scale: 1, rotateX: 0 });
          return;
        }

        // --- CORE PHILOSOPHY REVEAL ---
        const coreWords = gsap.utils.toArray<HTMLElement>('.gsap-word');
        if (coreWords.length) {
          gsap.fromTo(coreWords,
            { opacity: 0, y: 40, rotateX: -30 },
            {
              opacity: 1, y: 0, rotateX: 0,
              duration: 1,
              stagger: 0.15,
              ease: "back.out(1.4)",
              scrollTrigger: {
                trigger: ".gsap-core-title",
                start: "top 80%",
              }
            }
          );
        }
        
        gsap.fromTo('.gsap-core-desc',
          { opacity: 0, y: 20 },
          {
            opacity: 1, y: 0,
            duration: 0.8,
            delay: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".gsap-core-title",
              start: "top 80%",
            }
          }
        );

        // --- SECTION 05: SOLUTIONS ---
        const solutionCards = gsap.utils.toArray<HTMLElement>('.gsap-solution-card');
        if (solutionCards.length) {
          if (isDesktop) {
            gsap.fromTo(solutionCards,
              { opacity: 0, y: 30, x: -10 },
              {
                opacity: 1, y: 0, x: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: "#solutions",
                  start: "top 75%",
                }
              }
            );
          } else {
            solutionCards.forEach((card) => {
              gsap.fromTo(card,
                { opacity: 0, y: 40 },
                {
                  opacity: 1, y: 0,
                  duration: 0.6,
                  ease: "power2.out",
                  scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                  }
                }
              );
            });
          }
        }

        // --- SECTION 06: IMPACT ---
        const impactCards = gsap.utils.toArray<HTMLElement>('.gsap-impact-card');
        if (impactCards.length) {
          if (isDesktop) {
            gsap.fromTo(impactCards,
              { opacity: 0, x: 60, scale: 0.98 },
              {
                opacity: 1, x: 0, scale: 1,
                duration: 0.9,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: "#process",
                  start: "top 75%",
                }
              }
            );
          } else {
            impactCards.forEach((card) => {
              gsap.fromTo(card,
                { opacity: 0, y: 40 },
                {
                  opacity: 1, y: 0,
                  duration: 0.6,
                  ease: "power2.out",
                  scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                  }
                }
              );
            });
          }
        }
      });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ==========================================
          HEADER & CORPORATE NAVIGATION
          ========================================== */}
      <GlobalHeader />

      <main className="w-full pt-20">
        {/* ==========================================
            SECTION 01: HERO SECTION
            ========================================== */}
        <section 
          id="hero" 
          className="relative w-full overflow-hidden border-b border-border-subtle bg-surface-base py-24 md:py-36 px-6 lg:px-8 group"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            setMousePos({
              x: e.clientX - rect.left,
              y: e.clientY - rect.top,
            });
          }}
          onMouseLeave={() => setMousePos({ x: -1000, y: -1000 })}
        >
          <MobileSlideshow 
            images={[
              "/pixlbyts/hero-image.png",
              "/pixlbyts/products/images/FABRIC%20LED%20DISPLAYS.png",
              "/pixlbyts/products/images/CREATIVE%20AUTOMATION%20KIOSK.png"
            ]} 
            mode="dark" 
          />
          {/* Base dim dot grid */}
          <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(#F97316_1px,transparent_1.5px)] [background-size:40px_40px]"></div>
          
          {/* Interactive illuminated dot grid that follows mouse */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-100 transition-opacity duration-300 bg-[radial-gradient(#F97316_1.5px,transparent_2px)] [background-size:40px_40px] group-hover:opacity-100"
            style={{
              WebkitMaskImage: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
              maskImage: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
            }}
          ></div>
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent-orange/10 rounded-full blur-[140px] pointer-events-none"></div>

          <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 flex flex-col">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-surface-raised border border-border-subtle w-fit mb-8">
                <span className="w-2 h-2 rounded-full bg-accent-orange animate-pulse"></span>
                <span className="font-mono text-xs uppercase tracking-widest text-accent-amber font-medium">TECHNOLOGY • DIGITAL • BRAND • EXPERIENCE</span>
              </div>

              <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-[4.75rem] leading-[1.0] uppercase tracking-tight text-white mb-8">
                WE MAKE BUSINESSES <span className="gradient-orange-text">VISIBLE.</span>
              </h1>

              <p className="text-text-muted text-lg sm:text-xl font-normal leading-relaxed max-w-2xl mb-10">
                From intelligent automation and software to websites, digital experiences, branding, signage and physical displays — PIXLBYTS brings technology and creativity together to help businesses work better and stand out.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link href="#contact" className="inline-flex items-center justify-center px-8 py-4 rounded-sm bg-accent-orange hover:bg-accent-flame text-white font-mono text-xs uppercase tracking-wider font-bold transition-all duration-300 shadow-md">
                  START A PROJECT →
                </Link>
                <Link href="#capabilities" className="inline-flex items-center justify-center px-8 py-4 rounded-sm bg-surface-raised border border-border-prominent text-text-primary font-mono text-xs uppercase tracking-wider font-semibold hover:border-accent-orange hover:text-accent-orange transition-all duration-300">
                  EXPLORE WHAT WE DO
                </Link>
              </div>

              {/* Telemetry coordinates bar */}
              <div className="mt-14 pt-8 border-t border-border-subtle grid grid-cols-3 gap-6 max-w-lg">
                <div>
                  <span className="block font-mono text-xs text-text-dim uppercase tracking-wider">Capabilities</span>
                  <span className="font-display font-bold text-xl text-text-primary">7 Primary Areas</span>
                </div>
                <div>
                  <span className="block font-mono text-xs text-text-dim uppercase tracking-wider">Execution</span>
                  <span className="font-display font-bold text-xl text-accent-orange">Digital + Physical</span>
                </div>
                <div>
                  <span className="block font-mono text-xs text-text-dim uppercase tracking-wider">Structure</span>
                  <span className="font-display font-bold text-xl text-text-primary">1 Integrated Team</span>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-xl overflow-hidden border border-border-prominent bg-surface-raised p-3 shadow-2xl">
                <div className="relative h-[480px] w-full rounded-lg overflow-hidden bg-surface-base">
                  <img 
                    alt="PIXLBYTS Multidisciplinary Creative Technology Studio" 
                    className="w-full h-full object-cover filter brightness-90 contrast-105" 
                    src="/pixlbyts/hero-image.png"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-base via-surface-base/30 to-transparent"></div>
                  
                  {/* Overlaid Telemetry Badge */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-center bg-[#0D0F12]/80 backdrop-blur-md px-4 py-2.5 rounded border border-border-subtle font-mono text-[11px]">
                    <span className="text-accent-orange flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-orange animate-ping"></span>
                      SYSTEM.ACTIVE // LAB-01
                    </span>
                    <span className="text-text-dim">47.3769° N, 8.5417° E</span>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================
            SECTION 02: CORE MESSAGE
            ========================================== */}
        <section 
          className="relative w-full bg-white py-28 md:py-36 px-6 lg:px-8 border-b border-border-subtle group overflow-hidden"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            setMousePos({
              x: e.clientX - rect.left,
              y: e.clientY - rect.top,
            });
          }}
          onMouseLeave={() => setMousePos({ x: -1000, y: -1000 })}
        >
          <MobileSlideshow 
            images={[
              "/pixlbyts/products/images/LED%20VIDEO%20WALLS.png",
              "/pixlbyts/products/images/INSHOP%20BRANDING%20ARCHWAYS.png",
              "/pixlbyts/products/images/MODULAR%20DISPLAY%20RACKS.png"
            ]} 
            mode="light" 
          />
          {/* Base dim dot grid - inverted for light theme */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[radial-gradient(#000000_1px,transparent_1.5px)] [background-size:40px_40px]"></div>
          
          {/* Interactive illuminated orange dot grid that follows mouse */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300 bg-[radial-gradient(#F97316_2.5px,transparent_3px)] [background-size:40px_40px] group-hover:opacity-100"
            style={{
              WebkitMaskImage: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
              maskImage: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
            }}
          ></div>

          <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent-orange mb-6 block">CORE PHILOSOPHY</span>
            <h2 className="gsap-core-title font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#0D0F12] leading-[1.1] mb-8">
              <span className="gsap-word inline-block opacity-0">Technology</span>{" "}
              <span className="gsap-word inline-block opacity-0">that</span>{" "}
              <span className="gsap-word inline-block opacity-0">works.</span>{" "}
              <br className="hidden sm:inline" />
              <span className="text-accent-orange">
                <span className="gsap-word inline-block opacity-0">Experiences</span>{" "}
                <span className="gsap-word inline-block opacity-0">that</span>{" "}
                <span className="gsap-word inline-block opacity-0">connect.</span>
              </span>
            </h2>
            <p className="gsap-core-desc opacity-0 text-[#0D0F12]/70 text-lg sm:text-xl font-normal leading-relaxed max-w-3xl">
              Businesses today need more than software or advertising alone. They need technology that works behind the scenes and experiences that people can see, use and remember. PIXLBYTS brings these capabilities together under one roof — from AI and software engineering to digital platforms, branding, displays and physical experiences.
            </p>
            <div className="mt-12 flex items-center gap-3">
              <div className="w-12 h-px bg-[#0D0F12]/10"></div>
              <span className="font-mono text-xs text-[#0D0F12]/50 uppercase tracking-widest">ONE PARTNER. SEAMLESS ALIGNMENT.</span>
              <div className="w-12 h-px bg-[#0D0F12]/10"></div>
            </div>
          </div>
        </section>

        {/* ==========================================
            SECTION 03: 7 CAPABILITIES
            ========================================== */}
        <section id="capabilities" className="relative w-full bg-surface-base py-32 px-6 lg:px-8 border-b border-border-subtle">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 pb-8 border-b border-border-subtle">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent-orange block mb-3">SYSTEM CAPABILITIES</span>
                <h2 className="font-display font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-text-primary">
                  WHAT WE DO.
                </h2>
              </div>
              <p className="text-text-muted text-base max-w-md mt-4 md:mt-0 font-normal">
                Seven unified capability disciplines engineered to power commercial velocity across code, interfaces, and physical environments.
              </p>
            </div>

            <div className="w-full py-12">
              <OrbitalDiagram />
            </div>
          </div>
        </section>

        {/* ==========================================
            SECTION 04: DIGITAL + PHYSICAL
            ========================================== */}
        <section className="relative w-full bg-surface-raised py-32 px-6 lg:px-8 border-b border-border-subtle overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-7">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent-orange block mb-4">THE UNIFIED CONSTRUCT</span>
                <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-text-primary leading-[1.05] mb-8">
                  DIGITAL OR PHYSICAL. <br />
                  <span className="gradient-orange-text">WE CONNECT BOTH.</span>
                </h2>
                <p className="text-text-muted text-base sm:text-lg leading-relaxed mb-8">
                  A business doesn&apos;t operate in separate digital and physical worlds. Your website, software, employees, customers, stores, signage and brand all form one experience. PIXLBYTS brings technology and creative execution together so that experience stays connected.
                </p>
                <div className="flex items-center gap-4 text-xs font-mono text-text-dim">
                  <span>SEAMLESS CONTINUUM</span>
                  <span>•</span>
                  <span>ZERO HANDOFF FRICTION</span>
                  <span>•</span>
                  <span>UNIFIED BRAND DNA</span>
                </div>
              </div>

              {/* Flow Visual Loop */}
              <div className="lg:col-span-5 p-8 rounded-2xl bg-surface-base border border-border-prominent shadow-xl">
                <span className="font-mono text-[11px] text-text-dim uppercase tracking-wider block mb-6">INTEGRATED LOOP FLOW</span>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3.5 rounded bg-surface-raised border border-border-subtle">
                    <span className="font-mono text-xs font-bold text-accent-orange">01 / AI</span>
                    <span className="text-xs text-text-muted">Intelligent core &amp; cognitive rules</span>
                  </div>
                  <div className="w-full flex justify-center text-text-dim text-xs">↓</div>
                  <div className="flex items-center justify-between p-3.5 rounded bg-surface-raised border border-border-subtle">
                    <span className="font-mono text-xs font-bold text-text-primary">02 / SOFTWARE</span>
                    <span className="text-xs text-text-muted">Reliable backend &amp; API engine</span>
                  </div>
                  <div className="w-full flex justify-center text-text-dim text-xs">↓</div>
                  <div className="flex items-center justify-between p-3.5 rounded bg-surface-raised border border-border-subtle">
                    <span className="font-mono text-xs font-bold text-accent-amber">03 / DIGITAL</span>
                    <span className="text-xs text-text-muted">Web portals, mobile &amp; web apps</span>
                  </div>
                  <div className="w-full flex justify-center text-text-dim text-xs">↓</div>
                  <div className="flex items-center justify-between p-3.5 rounded bg-surface-raised border border-border-subtle">
                    <span className="font-mono text-xs font-bold text-text-primary">04 / EXPERIENCE</span>
                    <span className="text-xs text-text-muted">UI/UX ergonomics &amp; user journeys</span>
                  </div>
                  <div className="w-full flex justify-center text-text-dim text-xs">↓</div>
                  <div className="flex items-center justify-between p-3.5 rounded bg-surface-raised border border-border-subtle">
                    <span className="font-mono text-xs font-bold text-accent-orange">05 / SPACE &amp; BRAND</span>
                    <span className="text-xs text-text-muted">Illuminated signage, retail &amp; displays</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================
            SECTION 05: SOLUTIONS
            ========================================== */}
        <section id="solutions" className="relative w-full bg-surface-base py-32 px-6 lg:px-8 border-b border-border-subtle">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent-orange block mb-3">GOAL-DRIVEN COLLABORATION</span>
              <h2 className="font-display font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-text-primary mb-6">
                WHAT ARE YOU TRYING TO ACHIEVE?
              </h2>
              <p className="text-text-muted text-base">
                Select your primary objective to see how our cross-functional teams engineer the most direct roadmap to completion.
              </p>
            </div>
            
            <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-px-6 md:scroll-auto hide-scrollbar -mx-6 px-6 md:mx-0 md:px-0 pb-12 pt-4 md:py-0" style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}>
              {/* Pathways 01 to 06 */}
              {[
                { title: `"I want to build a new business"`, desc: `Full-spectrum commercial genesis: brand identity, cloud architecture, MVP prototype, high-speed marketing site and commercial operations.` },
                { title: `"I want to automate my business"`, desc: `Eliminate repetitive human overhead. Deploy custom AI agents, automated database synchronization, and multi-tier webhook pipelines.` },
                { title: `"I need a better website"`, desc: `Transform low-converting pages into blisteringly fast, authoritative digital flagships with sub-second page loads and bespoke editorial design.` },
                { title: `"I need custom software"`, desc: `Purpose-built internal tools, customer SaaS portals, and robust APIs designed strictly around your proprietary operational workflows.` },
                { title: `"I want to improve my brand presence"`, desc: `Cohesive identity systems bridging digital guidelines with physical fabrication: architectural signs, fabric LED installations, and high-impact materials.` },
                { title: `"I want to modernise my business"`, desc: `Migrate legacy tech debt to modern cloud microservices, automate paper trails, and revitalize customer touchpoints with modern UX.` },
              ].map((pathway, i) => (
                <Link key={i} href="#contact" className="w-[85vw] md:w-auto shrink-0 snap-start md:snap-align-none gsap-solution-card group p-8 rounded-xl bg-surface-raised border border-border-subtle hover:border-accent-orange transition-all duration-300 flex flex-col justify-between opacity-0">
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <span className="w-10 h-10 rounded-lg bg-surface-elevated flex items-center justify-center text-accent-orange group-hover:bg-accent-orange group-hover:text-white transition-colors">
                      </span>
                      <span className="text-text-dim group-hover:text-accent-orange transition-colors">→</span>
                    </div>
                    <h3 className="font-display font-bold text-xl uppercase tracking-tight text-text-primary mb-3">{pathway.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed">{pathway.desc}</p>
                  </div>
                  <span className="mt-6 font-mono text-xs uppercase tracking-wider text-accent-orange">EXPLORE PATHWAY →</span>
                </Link>
              ))}

              {/* Pathway 07 */}
              <Link href="#contact" className="w-[85vw] md:w-auto shrink-0 snap-start md:snap-align-none gsap-solution-card group lg:col-span-3 p-8 rounded-xl bg-gradient-to-r from-surface-raised via-[#1A1E26] to-surface-raised border border-border-prominent hover:border-accent-orange transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 opacity-0">
                <div className="flex items-start sm:items-center gap-6">
                  <span className="w-12 h-12 rounded-lg bg-accent-orange/20 text-accent-orange flex items-center justify-center shrink-0">
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-xl uppercase tracking-tight text-text-primary">&quot;I need something unique&quot;</h3>
                    <p className="text-text-muted text-sm mt-1 max-w-2xl">
                      Experimental spatial computing, custom hardware-software integrations, kinetic exhibitions, or confidential R&amp;D challenges.
                    </p>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded bg-accent-orange text-white font-mono text-xs uppercase tracking-wider font-bold shrink-0 self-start md:self-auto">
                  DISCUSS YOUR VISION →
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* ==========================================
            SECTION 06: HOW WE WORK (PROCESS)
            ========================================== */}
        <section id="process" className="relative w-full bg-surface-raised py-32 px-6 lg:px-8 border-b border-border-subtle">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-16 pb-4 border-b border-border-subtle">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent-orange">SEQUENTIAL METHODOLOGY</span>
              <span className="font-mono text-xs text-text-dim">05 PHASES</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-text-primary mb-16">
              FROM IDEA TO IMPACT.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { phase: "01", title: "Understand", desc: "We interrogate the commercial core, operational realities, technical constraints, and strategic leverage points." },
                { phase: "02", title: "Plan", desc: "Architecture blueprints, schema specifications, component systems, and execution timeline milestones." },
                { phase: "03", title: "Create", desc: "Rigorous engineering, UI prototyping, AI pipeline training, and physical material fabrication." },
                { phase: "04", title: "Launch", desc: "Zero-downtime deployment, staging verification, stress testing, on-site installation, and staff training." },
                { phase: "05", title: "Grow", desc: "Telemetry monitoring, iterative enhancements, autonomous workflow scaling, and ongoing partnership." }
              ].map((step, i) => (
                <div 
                  key={i} 
                  className="gsap-impact-card p-6 rounded-lg bg-surface-base border border-border-subtle opacity-0 sticky md:static shadow-xl"
                  style={{ top: `calc(120px + ${i * 16}px)` }}
                >
                  <span className="font-mono text-xs font-bold text-accent-orange block mb-4">PHASE // {step.phase}</span>
                  <h3 className="font-display font-bold text-xl uppercase text-text-primary mb-2">{step.title}</h3>
                  <p className="text-text-muted text-xs leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==========================================
            SECTION 07: WHY PIXLBYTS
            ========================================== */}
        <section className="relative w-full bg-surface-base py-32 px-6 lg:px-8 border-b border-border-subtle">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mb-20">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent-orange block mb-3">THE UNIFIED ADVANTAGE</span>
              <h2 className="font-display font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-text-primary mb-6">
                ONE TEAM. MULTIPLE CAPABILITIES.
              </h2>
              <p className="text-text-muted text-lg leading-relaxed">
                Technology, design and physical brand execution often happen through different vendors. PIXLBYTS brings them together.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { label: "THINK", title: "Strategy & Consulting", desc: "Strategic problem solving, architectural consulting, and technical feasibility studies before committing code.", num: "01 // INTELLIGENCE" },
                { label: "BUILD", title: "Software & AI", desc: "Custom software, autonomous AI pipelines, websites, APIs, and resilient enterprise cloud applications.", num: "02 // ENGINEERING" },
                { label: "DESIGN", title: "UI/UX & Branding", desc: "Cognitive UI/UX design, modular design systems, brand identities, and immersive interactive journeys.", num: "03 // EXPERIENCE" },
                { label: "DELIVER", title: "Signage & Displays", desc: "Architectural illuminated displays, fabric LED systems, pylons, kiosks, and precision physical installation.", num: "04 // FABRICATION" },
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-xl bg-surface-raised border border-border-subtle flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-2xl font-black text-accent-orange block mb-4">{item.label}</span>
                    <h3 className="font-display font-bold text-lg uppercase text-text-primary mb-3">{item.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border-subtle text-xs font-mono text-text-dim">
                    {item.num}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-16 p-6 rounded-lg bg-surface-raised border border-border-prominent flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="font-medium text-text-primary text-base">
                &quot;Less coordination. More consistency. One partner from idea to execution.&quot;
              </p>
              <Link href="#contact" className="font-mono text-xs text-accent-orange hover:text-accent-amber uppercase tracking-wider font-semibold whitespace-nowrap">
                TALK TO OUR TEAM →
              </Link>
            </div>
          </div>
        </section>


        {/* ==========================================
            SECTION 09: WHO WE WORK WITH
            ========================================== */}
        <section className="relative w-full bg-surface-raised py-28 px-6 lg:px-8 border-b border-border-subtle">
          <div className="max-w-7xl mx-auto">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent-orange block mb-3 text-center">PARTNERSHIP SPECTRUM</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-text-primary text-center mb-16">
              WHO WE WORK WITH.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { title: "Startups", desc: "High-velocity MVPs, investor pitch experiences, and core scalable product architecture." },
                { title: "Growing Businesses", desc: "Automation of repetitive tasks, conversion-optimized redesigns, and cloud modernization." },
                { title: "Established Firms", desc: "Legacy platform upgrades, bespoke internal tools, and unified brand consolidation." },
                { title: "Enterprises", desc: "Strict compliance architectures, multi-tenant databases, and custom AI orchestration." },
                { title: "Retail & Physical", desc: "Turnkey architectural signage, illuminated fabric boards, and interactive brand kiosks." }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-lg bg-surface-base border border-border-subtle text-center">
                  <h4 className="font-display font-bold text-base text-text-primary uppercase mb-2 mt-3">{item.title}</h4>
                  <p className="text-xs text-text-muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==========================================
            SECTION 10: ABOUT
            ========================================== */}
        <section id="about" className="relative w-full bg-surface-base py-32 px-6 lg:px-8 border-b border-border-subtle">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent-orange block mb-4">ABOUT PIXLBYTS</span>
              <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-text-primary leading-[1.05] mb-8">
                WE&apos;RE A TECHNOLOGY &amp; EXPERIENCE COMPANY.
              </h2>
              <p className="text-text-muted text-base sm:text-lg leading-relaxed mb-8">
                PIXLBYTS was founded on a simple realization: companies are exhausted by managing disjointed agencies for software, separate contractors for automation, and different shops for physical signage and branding. 
              </p>
              <p className="text-text-muted text-base leading-relaxed mb-10">
                We operate as an integrated technical and physical execution atelier. Our engineers, designers, and fabrication specialists work in tandem so your business communicates clearly, functions flawlessly, and moves without friction.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border-subtle">
                <div>
                  <span className="font-display font-bold text-2xl text-accent-orange">100%</span>
                  <span className="block text-xs font-mono text-text-muted uppercase mt-1">In-House Ownership</span>
                </div>
                <div>
                  <span className="font-display font-bold text-2xl text-text-primary">End-to-End</span>
                  <span className="block text-xs font-mono text-text-muted uppercase mt-1">Concept to Deployment</span>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-5 p-8 rounded-2xl bg-surface-raised border border-border-prominent">
              <span className="font-mono text-xs text-accent-orange uppercase tracking-wider block mb-6">BUILT FOR BUSINESS EXCELLENCE</span>
              <div className="space-y-5">
                {[
                  { title: "Business-focused solutions", desc: "Technology crafted for measurable commercial outcomes, not vanity metrics." },
                  { title: "Scalable technology", desc: "Code and infrastructure engineered to expand without requiring rewrites." },
                  { title: "Structured delivery", desc: "Predictable milestones, transparent sprints, and proactive status reports." },
                  { title: "Security-conscious", desc: "Enterprise standard encryption, isolated vector stores, and rigorous audits." },
                  { title: "Responsive support & Partnerships", desc: "Direct engineer access and continuous post-launch optimization loops." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div>
                      <h4 className="font-display font-bold text-sm text-text-primary uppercase">{item.title}</h4>
                      <p className="text-xs text-text-muted">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================
            SECTION 11: FAQ
            ========================================== */}
        <section id="faq" className="relative w-full bg-surface-raised py-32 px-6 lg:px-8 border-b border-border-subtle">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent-orange block mb-3">COMMON INQUIRIES</span>
              <h2 className="font-display font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-text-primary">
                FREQUENTLY ASKED QUESTIONS.
              </h2>
            </div>
            <div className="space-y-4">
              {[
                { q: "Do I need to know exactly what service I need?", a: "No. Most of our clients come to us with a business challenge or an idea, not a technical specification. During our initial discovery phase, we evaluate your goals and recommend the most effective, direct combination of technology, design, or physical branding." },
                { q: "Do you work with small businesses?", a: "Yes. We work with ambitious early-stage founders and growing companies as well as established enterprises. Our modular delivery model allows us to scope focused projects like high-impact corporate websites or targeted workflow automations." },
                { q: "Do you only build software?", a: "No. PIXLBYTS is uniquely multidisciplinary. Alongside custom software and AI systems, our dedicated spatial team designs, fabricates, and installs illuminated LED boards, fabric tension displays, retail kiosks, and architectural signage." },
                { q: "Can you handle both design and development?", a: "Absolutely. In fact, that is where we deliver the greatest value. Our design and software teams collaborate concurrently, eliminating handoff misalignment between UI prototypes and production code." },
                { q: "Can you handle physical branding?", a: "Yes. We fabricate and deploy custom LED signage, fabric lightboxes, dimensional metal lettering, outdoor pylons, and bespoke retail fixtures engineered to exact architectural specifications." },
                { q: "Can you integrate AI into an existing business?", a: "Yes. We connect sovereign AI models and vector memory pipelines into your existing CRMs, ERPs, communication tools (Slack, Teams), and customer support channels without disrupting daily operations." },
                { q: "Do you provide ongoing support?", a: "Yes. We provide long-term maintenance, infrastructure monitoring, security patching, and continuous iterative development through dedicated retainer partnerships." },
              ].map((faq, i) => (
                <details key={i} className="group p-6 rounded-xl bg-surface-base border border-border-subtle transition-all duration-200">
                  <summary className="flex justify-between items-center cursor-pointer font-display font-bold text-base sm:text-lg text-text-primary uppercase">
                    <span>{faq.q}</span>
                    <span className="text-accent-orange transition-transform group-open:rotate-180">↓</span>
                  </summary>
                  <p className="text-text-muted text-sm leading-relaxed mt-4 pt-4 border-t border-border-subtle">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ==========================================
            SECTION 12: FINAL CALL TO ACTION
            ========================================== */}
        <section id="contact" className="relative w-full bg-surface-base py-36 px-6 lg:px-8 border-b border-border-subtle overflow-hidden text-center">
          <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#F97316_1px,transparent_1px)] [background-size:36px_36px]"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-accent-orange/15 rounded-full blur-[140px] pointer-events-none"></div>
          
          <div className="relative max-w-4xl mx-auto flex flex-col items-center">
            {/* Monogram Badge */}
            <div className="w-20 h-20 mb-8 rounded-xl bg-surface-raised border border-border-prominent p-2 orange-glow">
              <img alt="PIXLBYTS Monogram" className="w-full h-full object-contain" src="/pixlbyts/monogram.svg" />
            </div>
            
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent-orange block mb-4">INITIATE COLLABORATION</span>
            <h2 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-text-primary leading-[1.0] mb-8">
              HAVE AN IDEA? <br />
              <span className="gradient-orange-text">LET&apos;S BUILD IT.</span>
            </h2>
            <p className="text-text-muted text-lg sm:text-xl font-normal max-w-2xl mb-4 leading-relaxed">
              Whether you need an AI solution, a new digital platform, a better website, a stronger brand presence or something completely new — let&apos;s talk.
            </p>
            <p className="text-xs font-mono text-text-dim uppercase tracking-wider mb-12">
              &quot;You don&apos;t need to have everything figured out. Start with the problem.&quot;
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="mailto:hello@pixlbyts.com?subject=New%20Project%20Inquiry%20via%20PIXLBYTS" className="inline-flex items-center justify-center px-10 py-5 rounded-sm bg-accent-orange hover:bg-accent-flame text-white font-mono text-xs uppercase tracking-wider font-bold transition-all duration-300 shadow-xl orange-glow">
                START A PROJECT →
              </Link>
              <Link href="mailto:hello@pixlbyts.com" className="inline-flex items-center justify-center px-10 py-5 rounded-sm bg-surface-raised border border-border-prominent text-text-primary font-mono text-xs uppercase tracking-wider font-semibold hover:border-accent-orange hover:text-accent-orange transition-all duration-300">
                TELL US WHAT YOU NEED
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* ==========================================
          CORPORATE FOOTER
          ========================================== */}
      <footer className="w-full bg-[#090B0E] text-text-primary py-20 border-t border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 pb-16 border-b border-border-subtle">
            {/* Left Column: Wordmark & Tagline */}
            <div className="md:col-span-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <img alt="PIXLBYTS Monogram" className="h-8 w-8 object-contain rounded-sm" src="/pixlbyts/monogram.svg" />
                  <span className="font-display font-black text-2xl uppercase tracking-tight text-text-primary">PIXLBYTS</span>
                </div>
                <p className="text-sm font-medium text-accent-amber mb-3">
                  Technology that works. Experiences that connect.
                </p>
                <p className="text-xs text-text-muted leading-relaxed max-w-sm">
                  Multidisciplinary creative technology and physical brand execution company building intelligent digital software and tangible spatial presence.
                </p>
              </div>
              <div className="mt-8">
                <span className="font-mono text-[11px] text-text-dim uppercase tracking-widest block mb-1">Direct Inquiries</span>
                <Link href="mailto:hello@pixlbyts.com" className="font-mono text-sm text-accent-orange hover:text-white transition-colors">
                  hello@pixlbyts.com
                </Link>
              </div>
            </div>

            {/* Middle Column: Capabilities Navigation */}
            <div className="md:col-span-4 flex flex-col gap-3">
              <span className="font-mono text-xs text-text-dim uppercase tracking-widest mb-2">Capabilities</span>
              <div className="flex flex-col gap-2 font-mono text-xs text-text-muted">
                <Link href="#capabilities" className="hover:text-accent-orange transition-colors">01 AI &amp; Automation</Link>
                <Link href="#capabilities" className="hover:text-accent-orange transition-colors">02 Software Engineering</Link>
                <Link href="#capabilities" className="hover:text-accent-orange transition-colors">03 Web &amp; Digital Systems</Link>
                <Link href="#capabilities" className="hover:text-accent-orange transition-colors">04 Apps &amp; Custom Platforms</Link>
                <Link href="#capabilities" className="hover:text-accent-orange transition-colors">05 UI/UX &amp; Digital Experience</Link>
                <Link href="#capabilities" className="hover:text-accent-orange transition-colors">06 Cloud, Data &amp; Infrastructure</Link>
                <Link href="#capabilities" className="hover:text-accent-orange transition-colors">07 Branding &amp; Physical Signage</Link>
              </div>
            </div>

            {/* Right Column: Location & System Health */}
            <div className="md:col-span-3 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-text-dim uppercase tracking-widest block mb-3">Operations &amp; Studio</span>
                <p className="text-xs text-text-muted leading-relaxed font-mono">
                  Global Atelier &amp; Physical Workshop<br />
                  Technology, Digital &amp; Spatial Lab
                </p>
              </div>
              <div className="mt-8">
                <span className="font-mono text-[11px] text-text-dim uppercase tracking-widest block mb-1.5">System Status</span>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="font-mono text-xs text-text-muted">All Core Systems Operational</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-text-dim">
            <p>© {new Date().getFullYear()} PIXLBYTS. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="#" className="hover:text-text-primary transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-text-primary transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-text-primary transition-colors">Security Protocol</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
