"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

const SERVICES = [
  { 
    id: 1, name: "AI & Automation", color: "#F97316", // Orange
    tagline: "Make everyday work smarter.",
    desc: "Autonomous systems and workflow pipelines that remove operational bottlenecks and unlock computational scale.",
    tags: ["AI Solutions", "Assistants & Agents", "Workflow Automation"]
  }, 
  { 
    id: 2, name: "Software Engineering", color: "#1677FF", // Blue
    tagline: "Turn ideas into reliable software.",
    desc: "Production-grade cloud architecture and robust code built for speed, resilience, and horizontal elasticity.",
    tags: ["Custom Software", "SaaS Platforms", "Web Apps"]
  },
  { 
    id: 3, name: "Web & Digital", color: "#00D9FF", // Cyan
    tagline: "Give businesses a digital presence that works.",
    desc: "High-converting websites and interactive digital touchpoints that captivate users and establish authoritative presence.",
    tags: ["Corporate Websites", "E-commerce", "Landing Experiences"]
  },
  { 
    id: 4, name: "Apps & Platforms", color: "#643BFF", // Violet
    tagline: "Build digital products people can use anywhere.",
    desc: "Native and cross-platform applications engineered for responsive touch, persistent sync, and fluid workflows.",
    tags: ["Mobile iOS & Android", "Cross-Platform", "Business Apps"]
  },
  { 
    id: 5, name: "UI/UX & Experience", color: "#F05CFF", // Pink
    tagline: "Make every interaction count.",
    desc: "Systematic design architectures, micro-interactions, and cognitive ergonomics that simplify complex workflows.",
    tags: ["UI/UX Systems", "Design Systems", "Prototyping"]
  },
  { 
    id: 6, name: "Cloud & Infra", color: "#FFD45A", // Yellow
    tagline: "Build a technology foundation that can grow.",
    desc: "Hardened enterprise databases, multi-cloud clusters, observability matrices, and rigorous security posture.",
    tags: ["Cloud Architectures", "Scalable Databases", "Data Platforms"]
  },
  { 
    id: 7, name: "Branding & Physical", color: "#FDBA74", // Amber
    tagline: "Make your brand visible in the real world.",
    desc: "We engineer physical branding infrastructure alongside digital software. From precision illuminated LED signage to spatial interactive kiosks and retail activations.",
    tags: ["LED & Illuminated Displays", "Signage & Pylons", "Retail Kiosks"]
  },
];

export function OrbitalDiagram() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wheelRef = useRef<HTMLDivElement>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedId, setSelectedId] = useState<number>(1);

  useEffect(() => {
    // Register GSAP plugin
    gsap.registerPlugin(Draggable);

    if (!wheelRef.current) return;

    const wheel = wheelRef.current;
    const nodes = wheel.querySelectorAll(".orbital-node");
    const arms = wheel.querySelectorAll(".orbital-arm");

    // 1. Continuous Rotation
    const autoSpin = gsap.to(wheel, {
      rotation: "+=360",
      duration: 40,
      ease: "none",
      repeat: -1,
    });

    // 2. Dynamic Line length pulsing (in and out)
    const armAnimations = Array.from(arms).map((arm) => {
      return gsap.to(arm, {
        width: "60%", // Extends from 50% to 60%
        duration: 3 + Math.random() * 2,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        delay: Math.random() * -5,
      });
    });

    // 3. Keep text upright on every frame
    function updateNodes() {
      const wheelRotation = gsap.getProperty(wheel, "rotation") as number;
      gsap.set(nodes, {
        rotation: -wheelRotation,
      });
    }

    gsap.ticker.add(updateNodes);

    // 4. Initialize Draggable
    Draggable.create(wheel, {
      type: "rotation",
      onPress: () => autoSpin.pause(),
      onRelease: () => autoSpin.play(),
    });

    // Initial setup call
    updateNodes();

    return () => {
      gsap.ticker.remove(updateNodes);
      autoSpin.kill();
      armAnimations.forEach(anim => anim.kill());
      const draggables = Draggable.get(wheel);
      if (draggables) draggables.kill();
    };
  }, []);

  const selectedService = SERVICES.find(s => s.id === selectedId) || SERVICES[0];

  return (
    <div className="relative w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0 overflow-hidden touch-none" ref={containerRef}>
      
      {/* Left Side: The Rotating Diagram */}
      <div className="relative w-full lg:w-[60%] h-[500px] md:h-[700px] flex items-center justify-center flex-shrink-0">
        
        {/* Background glow matching brand colors */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-accent-orange/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

        {/* The rotating wheel container */}
        <div 
          ref={wheelRef} 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[480px] md:h-[480px] flex items-center justify-center cursor-grab active:cursor-grabbing z-10"
        >
          {/* Lines and Nodes */}
          {SERVICES.map((service, index) => {
            const total = SERVICES.length;
            const angle = (index / total) * 360;
            const isHovered = hoveredId === service.id;
            const isSelected = selectedId === service.id;
            const isActive = isHovered || isSelected;
            
            return (
              <div 
                key={service.id}
                className="orbital-arm absolute top-1/2 left-1/2 h-0 origin-left"
                style={{
                  width: "45%", // Base width, animated by GSAP
                  transform: `rotate(${angle}deg)`,
                  zIndex: isActive ? 30 : 10,
                }}
              >
                {/* Connecting Line */}
                <div 
                  className="absolute top-1/2 left-[50px] md:left-[70px] right-0 h-px origin-left transition-all duration-300"
                  style={{ 
                    transform: 'translateY(-50%)',
                    backgroundColor: isActive ? service.color : hoveredId !== null ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.15)',
                    boxShadow: isActive ? `0 0 8px ${service.color}` : 'none'
                  }}
                />

                {/* Satellite Node (placed at the end of the radius) */}
                <div 
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2"
                >
                  {/* Wrap content to counter-rotate. We use our brand surface colors now instead of white. */}
                  <div 
                    onClick={() => setSelectedId(service.id)}
                    className="orbital-node flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-surface-container border transition-all duration-300 cursor-pointer select-none shadow-md"
                    style={{
                      borderColor: isActive ? service.color : 'rgba(255,255,255,0.15)',
                      boxShadow: isActive ? `0 4px 15px -3px ${service.color}40` : '0 4px 12px rgba(0,0,0,0.4)',
                      opacity: hoveredId !== null && !isHovered && !isSelected ? 0.3 : 1,
                      transformOrigin: "center center",
                      transform: isSelected ? 'scale(1.05)' : 'scale(1)'
                    }}
                    onMouseEnter={() => setHoveredId(service.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <div 
                      className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full" 
                      style={{ 
                        backgroundColor: service.color,
                        boxShadow: isActive ? `0 0 8px ${service.color}` : 'none'
                      }}
                    />
                    <span className="font-mono text-[10px] md:text-xs font-medium text-text-primary whitespace-nowrap pointer-events-none">
                      {service.name}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Central Hub matching PIXLBYTS Dark Theme - FIXED OUTSIDE THE ROTATING CONTAINER */}
        <div 
          className="absolute top-1/2 left-1/2 z-20 bg-surface-raised border border-border-prominent flex flex-col items-center justify-center shadow-[0_0_40px_rgba(249,115,22,0.15)] pointer-events-none overflow-hidden rounded-full shrink-0 w-[130px] h-[130px] md:w-[180px] md:h-[180px]"
          style={{
            transform: 'translate(-50%, -50%)',
          }}
        >
          <span className="font-display font-black text-[1.1rem] md:text-2xl text-text-primary leading-none text-center px-1 md:px-2">PIXLBYTS</span>
          <span className="font-mono text-[7px] md:text-[9px] text-accent-orange uppercase tracking-widest mt-1.5 md:mt-2 text-center">Technologies</span>
        </div>
      </div>

      {/* Right Side: The Selected Service Details Panel */}
      <div className="relative w-full lg:w-[40%] px-6 lg:pl-12 lg:pr-6 pb-12 lg:pb-0 z-30">
        <div 
          key={selectedService.id} // Re-mounts to trigger animation
          className="p-8 md:p-10 rounded-2xl bg-surface-raised border border-border-subtle shadow-2xl relative overflow-hidden animate-in fade-in slide-in-from-right-8 duration-500"
        >
          {/* Subtle colored glow inside the card based on the active service color */}
          <div 
            className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] opacity-20 pointer-events-none transition-colors duration-700" 
            style={{ backgroundColor: selectedService.color, transform: 'translate(30%, -30%)' }}
          ></div>

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-xs font-bold uppercase tracking-wider" style={{ color: selectedService.color }}>
                0{selectedService.id} {/* CAPABILITY */}
              </span>
            </div>
            
            <h3 className="font-display font-bold text-3xl md:text-4xl uppercase tracking-tight text-text-primary mb-4">
              {selectedService.name}
            </h3>
            
            <p className="font-medium text-base md:text-lg text-accent-amber mb-6">
              &quot;{selectedService.tagline}&quot;
            </p>
            
            <p className="text-text-muted text-base leading-relaxed mb-8">
              {selectedService.desc}
            </p>
            
            <div className="pt-8 border-t border-border-subtle flex flex-wrap gap-2">
              {selectedService.tags.map((tag, i) => (
                <span key={i} className="px-3 py-1.5 rounded bg-surface-elevated font-mono text-[11px] md:text-xs text-text-muted border border-border-subtle shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
