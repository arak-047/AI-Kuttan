"use client";

import React, { useState } from 'react';
import { GlobalHeader } from '@/components/navigation/GlobalHeader';

export default function ProductsPage() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  return (
    <>
      <GlobalHeader />
      <div 
        className="bg-surface-base min-h-screen relative group overflow-hidden" 
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
          });
        }} 
        onMouseLeave={() => setMousePos({ x: -1000, y: -1000 })}
      >
        
        {/* Base dim dot grid */}
        <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(#F97316_1px,transparent_1.5px)] [background-size:40px_40px]"></div>
        
        {/* Interactive illuminated dot grid that follows mouse */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-100 transition-opacity duration-300 bg-[radial-gradient(#F97316_1.5px,transparent_2px)] [background-size:40px_40px]"
          style={{
            WebkitMaskImage: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
            maskImage: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
          }}
        ></div>

        <div className="hidden md:block relative z-10 pt-20">
          {/* DESKTOP LAYOUT */}
          <div className="w-full" dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col w-full">
<!-- Top Technical Header & Breadcrumb Strip -->
<section class="w-full border-b border-border-subtle bg-surface-base">
<div class="max-w-7xl mx-auto px-6 lg:px-12 py-space-xl">
<!-- Breadcrumb & Hardware Node Meta -->
<div class="flex flex-wrap items-center justify-between gap-y-2 pb-space-md">
<div class="flex items-center gap-space-sm font-label-sm text-label-sm text-text-dim tracking-wider uppercase">
<span class="text-text-muted">PORTFOLIO</span>
<span class="">/</span>
<span class="text-text-muted">PHYSICAL CATALOG</span>
<span class="">/</span>
<span class="text-primary-container font-semibold">SERIES 2025</span>
<span class="text-text-dim">•</span>
<span class="text-text-dim">FOUNDRY ACTIVE</span>
<span class="text-text-dim">•</span>
<span class="text-secondary font-medium">TIER-1 PRECISION</span>
</div>
<div class="flex items-center gap-space-sm font-label-sm text-label-sm text-text-dim">
<span class="inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded bg-surface-raised text-text-muted">
<span class="w-1.5 h-1.5 rounded-full bg-primary-container shadow-[0_0_8px_#f97316]"></span>
            DIODE BATCH: #PB-889X
          </span>
<span class="hidden md:inline px-space-sm py-0.5 rounded bg-surface-raised text-text-muted">EN 60598-1 COMPLIANT</span>
</div>
</div>
<!-- Main Headline Grid + Telemetry Counters -->
<div class="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start pt-space-sm">
<div class="lg:col-span-8 flex flex-col gap-space-md">
<div class="inline-flex items-center gap-space-xs self-start px-space-sm py-0.5 rounded bg-surface-raised text-primary-container font-label-sm text-label-sm tracking-wider uppercase">
<span class="material-symbols-outlined text-[14px]">precision_manufacturing</span>
            HARDWARE • DISPLAYS • FABRICATION
          </div>
<h1 class="font-headline-lg text-headline-lg lg:text-display text-text-primary tracking-tight leading-tight">
            Products &amp; Physical Displays
          </h1>
<p class="font-body-lg text-body-lg text-text-muted max-w-3xl leading-relaxed">
            Precision engineered physical branding, illuminated architectural displays, spatial wayfinding systems, and custom modular fixtures for high-impact commercial environments.
          </p>
</div>
<!-- Telemetry Stats Panel -->
<div class="lg:col-span-4 flex flex-col justify-end">
<div class="p-space-lg rounded-xl bg-surface-raised shadow-md flex flex-col gap-space-md">
<div class="flex items-center justify-between">
<span class="font-label-sm text-label-sm uppercase tracking-wider text-text-dim">FOUNDRY TELEMETRY</span>
<span class="font-label-sm text-label-sm text-primary-container flex items-center gap-1">
<span class="w-2 h-2 rounded-full bg-primary-container"></span> LIVE
              </span>
</div>
<div class="grid grid-cols-3 gap-space-sm pt-space-xs">
<div class="flex flex-col">
<span class="font-title-md text-title-md font-bold text-text-primary">100%</span>
<span class="font-label-sm text-[10px] text-text-muted leading-tight uppercase mt-1">In-House Milling</span>
</div>
<div class="flex flex-col">
<span class="font-title-md text-title-md font-bold text-text-primary">50k+</span>
<span class="font-label-sm text-[10px] text-text-muted leading-tight uppercase mt-1">LED Lifespan (Hrs)</span>
</div>
<div class="flex flex-col">
<span class="font-title-md text-title-md font-bold text-primary-container">±0.05</span>
<span class="font-label-sm text-[10px] text-text-muted leading-tight uppercase mt-1">mm CNC Tolerance</span>
</div>
</div>
<!-- Optical Sensor Spectrum Bar (SVG mini telemetry) -->
<div class="pt-space-xs">
<div class="flex justify-between items-center text-[10px] font-label-sm text-text-dim mb-1">
<span class="">CRI SPECTRUM (Ra &gt; 96)</span>
<span class="">λ: 590-620nm</span>
</div>
<svg class="w-full h-2 rounded overflow-hidden" fill="none" preserveAspectRatio="none" viewBox="0 0 280 8">
<rect fill="#1C2028" height="8" width="70"></rect>
<rect fill="#3E4756" height="8" width="70" x="70"></rect>
<rect fill="#EA580C" height="8" width="70" x="140"></rect>
<rect fill="#F97316" height="8" width="70" x="210"></rect>
</svg>
</div>
</div>
</div>
</div>
<!-- Filter Controls Strip -->
<div class="pt-margin flex flex-wrap items-center justify-between gap-space-md">
<div class="flex flex-wrap items-center gap-space-xs" id="categoryFilterBar">
<button class="filter-pill group flex items-center gap-space-xs px-space-md py-space-xs rounded-lg font-label-md text-label-md transition-all bg-gradient-to-br from-primary-container to-accent-flame-stop text-text-primary shadow-[0_0_16px_-4px_rgba(249,115,22,0.4)]" data-filter="all">
<span class="">All Displays</span>
<span class="px-1.5 py-0.2 rounded-full text-[11px] bg-black/30 text-white">15</span>
</button>
<button class="filter-pill group flex items-center gap-space-xs px-space-md py-space-xs rounded-lg font-label-md text-label-md transition-all bg-surface-raised text-on-surface-variant hover:text-text-primary hover:bg-surface-elevated" data-filter="illuminated">
<span class="">Illuminated &amp; LED</span>
<span class="px-1.5 py-0.2 rounded-full text-[11px] bg-surface-base text-text-dim">6</span>
</button>
<button class="filter-pill group flex items-center gap-space-xs px-space-md py-space-xs rounded-lg font-label-md text-label-md transition-all bg-surface-raised text-on-surface-variant hover:text-text-primary hover:bg-surface-elevated" data-filter="signage">
<span class="">Signage &amp; Wayfinding</span>
<span class="px-1.5 py-0.2 rounded-full text-[11px] bg-surface-base text-text-dim">3</span>
</button>
<button class="filter-pill group flex items-center gap-space-xs px-space-md py-space-xs rounded-lg font-label-md text-label-md transition-all bg-surface-raised text-on-surface-variant hover:text-text-primary hover:bg-surface-elevated" data-filter="retail">
<span class="">Retail &amp; In-Store</span>
<span class="px-1.5 py-0.2 rounded-full text-[11px] bg-surface-base text-text-dim">4</span>
</button>
<button class="filter-pill group flex items-center gap-space-xs px-space-md py-space-xs rounded-lg font-label-md text-label-md transition-all bg-surface-raised text-on-surface-variant hover:text-text-primary hover:bg-surface-elevated" data-filter="awards">
<span class="">Awards &amp; Fine Art</span>
<span class="px-1.5 py-0.2 rounded-full text-[11px] bg-surface-base text-text-dim">2</span>
</button>
</div>
<!-- Density / View Switcher Micro Utility -->
<div class="hidden sm:flex items-center gap-space-xs text-text-dim font-label-sm text-label-sm">
<span class="material-symbols-outlined text-[16px] text-primary-container">view_module</span>
<span class="text-text-primary">15 HARDWARE UNITS ACTIVE</span>
</div>
</div>
</div>
</section>
<!-- Product Catalog Grid Section -->
<section class="w-full bg-surface-base py-margin-md">
<div class="max-w-7xl mx-auto px-6 lg:px-12">
<!-- Crosshair Datum Line Decor -->
<div class="relative w-full flex items-center justify-between mb-space-lg text-text-dim font-label-sm text-[11px]">
<span class="flex items-center gap-1.5">
<span class="text-primary-container">+</span> FOUNDRY SPECIFICATION MATRIX
        </span>
<span class="text-text-dim font-mono text-[10px]">COORDINATE: [GRID-15-ARRAY]</span>
</div>
<!-- 15 Product Cards Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg" id="productGrid">
<!-- Card 1: Digital LED Display Board -->
<article class="product-item group flex flex-col rounded-xl bg-surface-raised transition-all duration-300 hover:bg-surface-elevated hover:shadow-xl hover:translate-y-[-2px] overflow-hidden" data-category="illuminated">
<div class="relative aspect-[4/3] w-full bg-surface-container overflow-hidden">
<img alt="DIGITAL LED DISPLAY BOARD" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/pixlbyts/products/images/DIGITAL%20LED%20DISPLAY%20BOARD.png">
<div class="absolute top-space-sm left-space-sm flex items-center gap-1 px-space-sm py-0.5 rounded bg-surface-base/90 backdrop-blur-md font-label-sm text-[11px] text-text-primary uppercase tracking-wider">
<span class="w-1.5 h-1.5 rounded-full bg-primary-container shadow-[0_0_6px_#f97316]"></span>
              PROGRAMMABLE
            </div>
<div class="absolute bottom- space-xs right-space-xs px-2 py-0.5 rounded bg-surface-base/80 text-[10px] font-mono text-text-muted">
              P-01 // MATRIX
            </div>
</div>
<div class="p-space-lg flex flex-col flex-1 justify-between gap-space-md">
<div>
<div class="flex items-center justify-between text-text-dim font-label-sm text-[11px] mb-1">
<span class="">SERIES: LUMINA-CORE</span>
<span class="">VOLTAGE: 24V DC</span>
</div>
<h2 class="font-title-md text-title-md text-text-primary tracking-tight group-hover:text-primary-container transition-colors">
                DIGITAL LED DISPLAY BOARD
              </h2>
<p class="font-body-sm text-body-sm text-text-muted mt-2">
                Amber LED Matrix • IP65 Rated • Ethernet/RS485 Control Interface
              </p>
</div>
<div class="pt-space-sm flex items-center justify-between">
<span class="inline-flex items-center gap-1 font-label-md text-label-md text-primary-container group-hover:translate-x-1 transition-transform">
                SPECS <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
</span>
<span class="font-label-sm text-[11px] text-text-dim">Lead time: 3-5 days</span>
</div>
</div>
</article>
<!-- Card 2: Fabric LED Displays -->
<article class="product-item group flex flex-col rounded-xl bg-surface-raised transition-all duration-300 hover:bg-surface-elevated hover:shadow-xl hover:translate-y-[-2px] overflow-hidden" data-category="illuminated">
<div class="relative aspect-[4/3] w-full bg-surface-container overflow-hidden">
<img alt="FABRIC LED DISPLAYS" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/pixlbyts/products/images/FABRIC%20LED%20DISPLAYS.png">
<div class="absolute top-space-sm left-space-sm flex items-center gap-1 px-space-sm py-0.5 rounded bg-surface-base/90 backdrop-blur-md font-label-sm text-[11px] text-text-primary uppercase tracking-wider">
<span class="w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_6px_#89ceff]"></span>
              SEG FABRIC
            </div>
<div class="absolute bottom- space-xs right-space-xs px-2 py-0.5 rounded bg-surface-base/80 text-[10px] font-mono text-text-muted">
              P-02 // LUMEN
            </div>
</div>
<div class="p-space-lg flex flex-col flex-1 justify-between gap-space-md">
<div>
<div class="flex items-center justify-between text-text-dim font-label-sm text-[11px] mb-1">
<span class="">SERIES: AERO-TENSION</span>
<span class="">6500K CCT</span>
</div>
<h2 class="font-title-md text-title-md text-text-primary tracking-tight group-hover:text-primary-container transition-colors">
                FABRIC LED DISPLAYS
              </h2>
<p class="font-body-sm text-body-sm text-text-muted mt-2">
                Tension Edge Light Box • Depth: 40-120mm • 6500K Daylight Diffusion
              </p>
</div>
<div class="pt-space-sm flex items-center justify-between">
<span class="inline-flex items-center gap-1 font-label-md text-label-md text-primary-container group-hover:translate-x-1 transition-transform">
                SPECS <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
</span>
<span class="font-label-sm text-[11px] text-text-dim">Modular Frame</span>
</div>
</div>
</article>
<!-- Card 3: Slim LED Backlit Board -->
<article class="product-item group flex flex-col rounded-xl bg-surface-raised transition-all duration-300 hover:bg-surface-elevated hover:shadow-xl hover:translate-y-[-2px] overflow-hidden" data-category="illuminated">
<div class="relative aspect-[4/3] w-full bg-surface-container overflow-hidden">
<img alt="SLIM LED BACKLIT BOARD" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/pixlbyts/products/images/SLIM%20LED%20BACKLIT%20BOARD.png">
<div class="absolute top-space-sm left-space-sm flex items-center gap-1 px-space-sm py-0.5 rounded bg-surface-base/90 backdrop-blur-md font-label-sm text-[11px] text-text-primary uppercase tracking-wider">
<span class="w-1.5 h-1.5 rounded-full bg-primary-container shadow-[0_0_6px_#f97316]"></span>
              ULTRA SLIM
            </div>
<div class="absolute bottom- space-xs right-space-xs px-2 py-0.5 rounded bg-surface-base/80 text-[10px] font-mono text-text-muted">
              P-03 // 18MM
            </div>
</div>
<div class="p-space-lg flex flex-col flex-1 justify-between gap-space-md">
<div>
<div class="flex items-center justify-between text-text-dim font-label-sm text-[11px] mb-1">
<span class="">SERIES: BLADE-THIN</span>
<span class="">MAGNETIC FRONT</span>
</div>
<h2 class="font-title-md text-title-md text-text-primary tracking-tight group-hover:text-primary-container transition-colors">
                SLIM LED BACKLIT BOARD
              </h2>
<p class="font-body-sm text-body-sm text-text-muted mt-2">
                Snap-Open Magnetic Frame • Profile: 18mm • Bevelled Edge Acrylic
              </p>
</div>
<div class="pt-space-sm flex items-center justify-between">
<span class="inline-flex items-center gap-1 font-label-md text-label-md text-primary-container group-hover:translate-x-1 transition-transform">
                SPECS <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
</span>
<span class="font-label-sm text-[11px] text-text-dim">Direct Wall Mount</span>
</div>
</div>
</article>
<!-- Card 4: LED Video Walls -->
<article class="product-item group flex flex-col rounded-xl bg-surface-raised transition-all duration-300 hover:bg-surface-elevated hover:shadow-xl hover:translate-y-[-2px] overflow-hidden" data-category="illuminated">
<div class="relative aspect-[4/3] w-full bg-surface-container overflow-hidden">
<img alt="LED VIDEO WALLS" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/pixlbyts/products/images/LED%20VIDEO%20WALLS.png">
<div class="absolute top-space-sm left-space-sm flex items-center gap-1 px-space-sm py-0.5 rounded bg-surface-base/90 backdrop-blur-md font-label-sm text-[11px] text-text-primary uppercase tracking-wider">
<span class="w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_6px_#89ceff]"></span>
              FINE-PITCH
            </div>
<div class="absolute bottom- space-xs right-space-xs px-2 py-0.5 rounded bg-surface-base/80 text-[10px] font-mono text-text-muted">
              P-04 // BROADCAST
            </div>
</div>
<div class="p-space-lg flex flex-col flex-1 justify-between gap-space-md">
<div>
<div class="flex items-center justify-between text-text-dim font-label-sm text-[11px] mb-1">
<span class="">SERIES: SYNAPSE-COB</span>
<span class="">HDR10 PRO</span>
</div>
<h2 class="font-title-md text-title-md text-text-primary tracking-tight group-hover:text-primary-container transition-colors">
                LED VIDEO WALLS
              </h2>
<p class="font-body-sm text-body-sm text-text-muted mt-2">
                Curved Die-Cast Cabinets • Pitch: P1.25 / P1.86 / P2.5 • HDR10 Native
              </p>
</div>
<div class="pt-space-sm flex items-center justify-between">
<span class="inline-flex items-center gap-1 font-label-md text-label-md text-primary-container group-hover:translate-x-1 transition-transform">
                SPECS <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
</span>
<span class="font-label-sm text-[11px] text-text-dim">Front-Serviceable</span>
</div>
</div>
</article>
<!-- Card 5: LED Cut Letter Branding -->
<article class="product-item group flex flex-col rounded-xl bg-surface-raised transition-all duration-300 hover:bg-surface-elevated hover:shadow-xl hover:translate-y-[-2px] overflow-hidden" data-category="illuminated">
<div class="relative aspect-[4/3] w-full bg-surface-container overflow-hidden">
<img alt="LED CUT LETTER BRANDING" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/pixlbyts/products/images/LED%20CUT%20LETTER%20BRANDING.png">
<div class="absolute top-space-sm left-space-sm flex items-center gap-1 px-space-sm py-0.5 rounded bg-surface-base/90 backdrop-blur-md font-label-sm text-[11px] text-text-primary uppercase tracking-wider">
<span class="w-1.5 h-1.5 rounded-full bg-primary-container shadow-[0_0_6px_#f97316]"></span>
              HALO GLOW
            </div>
<div class="absolute bottom- space-xs right-space-xs px-2 py-0.5 rounded bg-surface-base/80 text-[10px] font-mono text-text-muted">
              P-05 // DIMENSIONAL
            </div>
</div>
<div class="p-space-lg flex flex-col flex-1 justify-between gap-space-md">
<div>
<div class="flex items-center justify-between text-text-dim font-label-sm text-[11px] mb-1">
<span class="">SERIES: AURA-FORM</span>
<span class="">3000K WARM HALO</span>
</div>
<h2 class="font-title-md text-title-md text-text-primary tracking-tight group-hover:text-primary-container transition-colors">
                LED CUT LETTER BRANDING
              </h2>
<p class="font-body-sm text-body-sm text-text-muted mt-2">
                Precision CNC Acrylic &amp; Stainless • Warm 3000K Halo • Concealed Wireway
              </p>
</div>
<div class="pt-space-sm flex items-center justify-between">
<span class="inline-flex items-center gap-1 font-label-md text-label-md text-primary-container group-hover:translate-x-1 transition-transform">
                SPECS <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
</span>
<span class="font-label-sm text-[11px] text-text-dim">Laser Kerf ±0.03mm</span>
</div>
</div>
</article>
<!-- Card 6: Paper & Cardboard Pylons -->
<article class="product-item group flex flex-col rounded-xl bg-surface-raised transition-all duration-300 hover:bg-surface-elevated hover:shadow-xl hover:translate-y-[-2px] overflow-hidden" data-category="retail">
<div class="relative aspect-[4/3] w-full bg-surface-container overflow-hidden">
<img alt="PAPER &amp; CARDBOARD PYLONS" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/pixlbyts/products/images/PAPER%20&%20CARDBOARD%20PYLONS.png">
<div class="absolute top-space-sm left-space-sm flex items-center gap-1 px-space-sm py-0.5 rounded bg-surface-base/90 backdrop-blur-md font-label-sm text-[11px] text-text-primary uppercase tracking-wider">
<span class="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
              ECO-FRIENDLY
            </div>
<div class="absolute bottom- space-xs right-space-xs px-2 py-0.5 rounded bg-surface-base/80 text-[10px] font-mono text-text-muted">
              P-06 // SUSTAINABLE
            </div>
</div>
<div class="p-space-lg flex flex-col flex-1 justify-between gap-space-md">
<div>
<div class="flex items-center justify-between text-text-dim font-label-sm text-[11px] mb-1">
<span class="">SERIES: CIRCULAR-PULP</span>
<span class="">FSC CERTIFIED</span>
</div>
<h2 class="font-title-md text-title-md text-text-primary tracking-tight group-hover:text-primary-container transition-colors">
                PAPER &amp; CARDBOARD PYLONS
              </h2>
<p class="font-body-sm text-body-sm text-text-muted mt-2">
                Flat-Pack Cylindrical Totem • 100% Recyclable Kraft • Structural Core
              </p>
</div>
<div class="pt-space-sm flex items-center justify-between">
<span class="inline-flex items-center gap-1 font-label-md text-label-md text-primary-container group-hover:translate-x-1 transition-transform">
                SPECS <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
</span>
<span class="font-label-sm text-[11px] text-text-dim">Tool-Free Setup</span>
</div>
</div>
</article>
<!-- Card 7: Rollup Stand & Promo Table -->
<article class="product-item group flex flex-col rounded-xl bg-surface-raised transition-all duration-300 hover:bg-surface-elevated hover:shadow-xl hover:translate-y-[-2px] overflow-hidden" data-category="retail">
<div class="relative aspect-[4/3] w-full bg-surface-container overflow-hidden">
<img alt="ROLLUP STAND &amp; PROMO TABLE" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/pixlbyts/products/images/ROLLUP%20STAND%20&%20PROMO%20TABLE.png">
<div class="absolute top-space-sm left-space-sm flex items-center gap-1 px-space-sm py-0.5 rounded bg-surface-base/90 backdrop-blur-md font-label-sm text-[11px] text-text-primary uppercase tracking-wider">
<span class="w-1.5 h-1.5 rounded-full bg-primary-container shadow-[0_0_6px_#f97316]"></span>
              MODULAR SET
            </div>
<div class="absolute bottom- space-xs right-space-xs px-2 py-0.5 rounded bg-surface-base/80 text-[10px] font-mono text-text-muted">
              P-07 // EXPO
            </div>
</div>
<div class="p-space-lg flex flex-col flex-1 justify-between gap-space-md">
<div>
<div class="flex items-center justify-between text-text-dim font-label-sm text-[11px] mb-1">
<span class="">SERIES: RAPID-DEPLOY</span>
<span class="">ALUMINUM 6063</span>
</div>
<h2 class="font-title-md text-title-md text-text-primary tracking-tight group-hover:text-primary-container transition-colors">
                ROLLUP STAND &amp; PROMO TABLE
              </h2>
<p class="font-body-sm text-body-sm text-text-muted mt-2">
                Anodized Aluminum Stand + Curved Podium • Carry Bag Included • Matte Blockout
              </p>
</div>
<div class="pt-space-sm flex items-center justify-between">
<span class="inline-flex items-center gap-1 font-label-md text-label-md text-primary-container group-hover:translate-x-1 transition-transform">
                SPECS <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
</span>
<span class="font-label-sm text-[11px] text-text-dim">Weight: 8.4kg</span>
</div>
</div>
</article>
<!-- Card 8: Modular Display Racks -->
<article class="product-item group flex flex-col rounded-xl bg-surface-raised transition-all duration-300 hover:bg-surface-elevated hover:shadow-xl hover:translate-y-[-2px] overflow-hidden" data-category="retail">
<div class="relative aspect-[4/3] w-full bg-surface-container overflow-hidden">
<img alt="MODULAR DISPLAY RACKS" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/pixlbyts/products/images/MODULAR%20DISPLAY%20RACKS.png">
<div class="absolute top-space-sm left-space-sm flex items-center gap-1 px-space-sm py-0.5 rounded bg-surface-base/90 backdrop-blur-md font-label-sm text-[11px] text-text-primary uppercase tracking-wider">
<span class="w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_6px_#89ceff]"></span>
              HEAVY DUTY
            </div>
<div class="absolute bottom- space-xs right-space-xs px-2 py-0.5 rounded bg-surface-base/80 text-[10px] font-mono text-text-muted">
              P-08 // FIXTURE
            </div>
</div>
<div class="p-space-lg flex flex-col flex-1 justify-between gap-space-md">
<div>
<div class="flex items-center justify-between text-text-dim font-label-sm text-[11px] mb-1">
<span class="">SERIES: ARCH-STRUCT</span>
<span class="">OAK + STEEL</span>
</div>
<h2 class="font-title-md text-title-md text-text-primary tracking-tight group-hover:text-primary-container transition-colors">
                MODULAR DISPLAY RACKS
              </h2>
<p class="font-body-sm text-body-sm text-text-muted mt-2">
                Matte Black Steel + Oak Shelving • 50kg Tier Load • Concealed Cable Spine
              </p>
</div>
<div class="pt-space-sm flex items-center justify-between">
<span class="inline-flex items-center gap-1 font-label-md text-label-md text-primary-container group-hover:translate-x-1 transition-transform">
                SPECS <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
</span>
<span class="font-label-sm text-[11px] text-text-dim">Adjustable Pitches</span>
</div>
</div>
</article>
<!-- Card 9: Directional Signage -->
<article class="product-item group flex flex-col rounded-xl bg-surface-raised transition-all duration-300 hover:bg-surface-elevated hover:shadow-xl hover:translate-y-[-2px] overflow-hidden" data-category="signage">
<div class="relative aspect-[4/3] w-full bg-surface-container overflow-hidden">
<img alt="DIRECTIONAL SIGNAGE" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/pixlbyts/products/images/DIRECTIONAL%20SIGNAGE.png">
<div class="absolute top-space-sm left-space-sm flex items-center gap-1 px-space-sm py-0.5 rounded bg-surface-base/90 backdrop-blur-md font-label-sm text-[11px] text-text-primary uppercase tracking-wider">
<span class="w-1.5 h-1.5 rounded-full bg-primary-container shadow-[0_0_6px_#f97316]"></span>
              CAMPUS NAV
            </div>
<div class="absolute bottom- space-xs right-space-xs px-2 py-0.5 rounded bg-surface-base/80 text-[10px] font-mono text-text-muted">
              P-09 // EXTERIOR
            </div>
</div>
<div class="p-space-lg flex flex-col flex-1 justify-between gap-space-md">
<div>
<div class="flex items-center justify-between text-text-dim font-label-sm text-[11px] mb-1">
<span class="">SERIES: VECTOR-WAY</span>
<span class="">IP66 INGRESS</span>
</div>
<h2 class="font-title-md text-title-md text-text-primary tracking-tight group-hover:text-primary-container transition-colors">
                DIRECTIONAL SIGNAGE
              </h2>
<p class="font-body-sm text-body-sm text-text-muted mt-2">
                Brushed Gunmetal Totem + Wall Blades • Weatherproof IP66 • Photoluminescent Option
              </p>
</div>
<div class="pt-space-sm flex items-center justify-between">
<span class="inline-flex items-center gap-1 font-label-md text-label-md text-primary-container group-hover:translate-x-1 transition-transform">
                SPECS <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
</span>
<span class="font-label-sm text-[11px] text-text-dim">Vandal-Proof Fasteners</span>
</div>
</div>
</article>
<!-- Card 10: Inshop Branding Archways -->
<article class="product-item group flex flex-col rounded-xl bg-surface-raised transition-all duration-300 hover:bg-surface-elevated hover:shadow-xl hover:translate-y-[-2px] overflow-hidden" data-category="retail">
<div class="relative aspect-[4/3] w-full bg-surface-container overflow-hidden">
<img alt="INSHOP BRANDING ARCHWAYS" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/pixlbyts/products/images/INSHOP%20BRANDING%20ARCHWAYS.png">
<div class="absolute top-space-sm left-space-sm flex items-center gap-1 px-space-sm py-0.5 rounded bg-surface-base/90 backdrop-blur-md font-label-sm text-[11px] text-text-primary uppercase tracking-wider">
<span class="w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_6px_#89ceff]"></span>
              SPATIAL
            </div>
<div class="absolute bottom- space-xs right-space-xs px-2 py-0.5 rounded bg-surface-base/80 text-[10px] font-mono text-text-muted">
              P-10 // PORTAL
            </div>
</div>
<div class="p-space-lg flex flex-col flex-1 justify-between gap-space-md">
<div>
<div class="flex items-center justify-between text-text-dim font-label-sm text-[11px] mb-1">
<span class="">SERIES: THRESHOLD-ARC</span>
<span class="">DIFFUSED LIGHT</span>
</div>
<h2 class="font-title-md text-title-md text-text-primary tracking-tight group-hover:text-primary-container transition-colors">
                INSHOP BRANDING ARCHWAYS
              </h2>
<p class="font-body-sm text-body-sm text-text-muted mt-2">
                Fluted Acoustic Wood Arch + Ambient LED Strip • Custom Spans up to 6m
              </p>
</div>
<div class="pt-space-sm flex items-center justify-between">
<span class="inline-flex items-center gap-1 font-label-md text-label-md text-primary-container group-hover:translate-x-1 transition-transform">
                SPECS <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
</span>
<span class="font-label-sm text-[11px] text-text-dim">Acoustic NRC 0.85</span>
</div>
</div>
</article>
<!-- Card 11: Trophies & Mementos -->
<article class="product-item group flex flex-col rounded-xl bg-surface-raised transition-all duration-300 hover:bg-surface-elevated hover:shadow-xl hover:translate-y-[-2px] overflow-hidden" data-category="awards">
<div class="relative aspect-[4/3] w-full bg-surface-container overflow-hidden">
<img alt="TROPHIES &amp; MEMENTOS" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/pixlbyts/products/images/TROPHIES%20&%20MEMENTOS.png">
<div class="absolute top-space-sm left-space-sm flex items-center gap-1 px-space-sm py-0.5 rounded bg-surface-base/90 backdrop-blur-md font-label-sm text-[11px] text-text-primary uppercase tracking-wider">
<span class="w-1.5 h-1.5 rounded-full bg-primary-container shadow-[0_0_6px_#f97316]"></span>
              EXECUTIVE
            </div>
<div class="absolute bottom- space-xs right-space-xs px-2 py-0.5 rounded bg-surface-base/80 text-[10px] font-mono text-text-muted">
              P-11 // HONOR
            </div>
</div>
<div class="p-space-lg flex flex-col flex-1 justify-between gap-space-md">
<div>
<div class="flex items-center justify-between text-text-dim font-label-sm text-[11px] mb-1">
<span class="">SERIES: MONOLITH-TITAN</span>
<span class="">K9 OPTICAL</span>
</div>
<h2 class="font-title-md text-title-md text-text-primary tracking-tight group-hover:text-primary-container transition-colors">
                TROPHIES &amp; MEMENTOS
              </h2>
<p class="font-body-sm text-body-sm text-text-muted mt-2">
                Optical Crystal + Blackened Titanium • Laser Micro-Engraved • Bespoke Packaging
              </p>
</div>
<div class="pt-space-sm flex items-center justify-between">
<span class="inline-flex items-center gap-1 font-label-md text-label-md text-primary-container group-hover:translate-x-1 transition-transform">
                SPECS <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
</span>
<span class="font-label-sm text-[11px] text-text-dim">Serialized Plating</span>
</div>
</div>
</article>
<!-- Card 12: Product Dispenser & POS -->
<article class="product-item group flex flex-col rounded-xl bg-surface-raised transition-all duration-300 hover:bg-surface-elevated hover:shadow-xl hover:translate-y-[-2px] overflow-hidden" data-category="retail">
<div class="relative aspect-[4/3] w-full bg-surface-container overflow-hidden">
<img alt="PRODUCT DISPENSER &amp; POS" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/pixlbyts/products/images/PRODUCT%20DISPENSER%20&%20POS.png">
<div class="absolute top-space-sm left-space-sm flex items-center gap-1 px-space-sm py-0.5 rounded bg-surface-base/90 backdrop-blur-md font-label-sm text-[11px] text-text-primary uppercase tracking-wider">
<span class="w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_6px_#89ceff]"></span>
              COUNTERTOP
            </div>
<div class="absolute bottom- space-xs right-space-xs px-2 py-0.5 rounded bg-surface-base/80 text-[10px] font-mono text-text-muted">
              P-12 // MERCH
            </div>
</div>
<div class="p-space-lg flex flex-col flex-1 justify-between gap-space-md">
<div>
<div class="flex items-center justify-between text-text-dim font-label-sm text-[11px] mb-1">
<span class="">SERIES: TACTILE-MERCH</span>
<span class="">ANTI-GLARE ACRYLIC</span>
</div>
<h2 class="font-title-md text-title-md text-text-primary tracking-tight group-hover:text-primary-container transition-colors">
                PRODUCT DISPENSER &amp; POS
              </h2>
<p class="font-body-sm text-body-sm text-text-muted mt-2">
                Multi-Tiered Acrylic &amp; Composite • Luxury Cosmetics / Retail • Gravity-Feed
              </p>
</div>
<div class="pt-space-sm flex items-center justify-between">
<span class="inline-flex items-center gap-1 font-label-md text-label-md text-primary-container group-hover:translate-x-1 transition-transform">
                SPECS <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
</span>
<span class="font-label-sm text-[11px] text-text-dim">Magnetic Header</span>
</div>
</div>
</article>
<!-- Card 13: Print & Cut-Out Display -->
<article class="product-item group flex flex-col rounded-xl bg-surface-raised transition-all duration-300 hover:bg-surface-elevated hover:shadow-xl hover:translate-y-[-2px] overflow-hidden" data-category="signage">
<div class="relative aspect-[4/3] w-full bg-surface-container overflow-hidden">
<img alt="PRINT &amp; CUT-OUT DISPLAY" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/pixlbyts/products/images/PRINT%20&%20CUT-OUT%20DISPLAY.png">
<div class="absolute top-space-sm left-space-sm flex items-center gap-1 px-space-sm py-0.5 rounded bg-surface-base/90 backdrop-blur-md font-label-sm text-[11px] text-text-primary uppercase tracking-wider">
<span class="w-1.5 h-1.5 rounded-full bg-primary-container shadow-[0_0_6px_#f97316]"></span>
              DIE-CUT 3D
            </div>
<div class="absolute bottom- space-xs right-space-xs px-2 py-0.5 rounded bg-surface-base/80 text-[10px] font-mono text-text-muted">
              P-13 // LAYERED
            </div>
</div>
<div class="p-space-lg flex flex-col flex-1 justify-between gap-space-md">
<div>
<div class="flex items-center justify-between text-text-dim font-label-sm text-[11px] mb-1">
<span class="">SERIES: DIMENSIO-PRINT</span>
<span class="">HD DENSITY FOAM</span>
</div>
<h2 class="font-title-md text-title-md text-text-primary tracking-tight group-hover:text-primary-container transition-colors">
                PRINT &amp; CUT-OUT DISPLAY
              </h2>
<p class="font-body-sm text-body-sm text-text-muted mt-2">
                Layered High-Density Foamcore + Acrylic • Freestanding • Direct UV Print
              </p>
</div>
<div class="pt-space-sm flex items-center justify-between">
<span class="inline-flex items-center gap-1 font-label-md text-label-md text-primary-container group-hover:translate-x-1 transition-transform">
                SPECS <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
</span>
<span class="font-label-sm text-[11px] text-text-dim">Zero Warpage</span>
</div>
</div>
</article>
<!-- Card 14: Fine Art & Divine Prints -->
<article class="product-item group flex flex-col rounded-xl bg-surface-raised transition-all duration-300 hover:bg-surface-elevated hover:shadow-xl hover:translate-y-[-2px] overflow-hidden" data-category="awards">
<div class="relative aspect-[4/3] w-full bg-surface-container overflow-hidden">
<img alt="FINE ART &amp; DIVINE PRINTS" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/pixlbyts/products/images/FINE%20ART%20&%20DIVINE%20PRINTS.png">
<div class="absolute top-space-sm left-space-sm flex items-center gap-1 px-space-sm py-0.5 rounded bg-surface-base/90 backdrop-blur-md font-label-sm text-[11px] text-text-primary uppercase tracking-wider">
<span class="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
              GALLERY GRADE
            </div>
<div class="absolute bottom- space-xs right-space-xs px-2 py-0.5 rounded bg-surface-base/80 text-[10px] font-mono text-text-muted">
              P-14 // GICLEE
            </div>
</div>
<div class="p-space-lg flex flex-col flex-1 justify-between gap-space-md">
<div>
<div class="flex items-center justify-between text-text-dim font-label-sm text-[11px] mb-1">
<span class="">SERIES: MUSEUM-FLOAT</span>
<span class="">PIGMENT ARCHIVE</span>
</div>
<h2 class="font-title-md text-title-md text-text-primary tracking-tight group-hover:text-primary-container transition-colors">
                FINE ART &amp; DIVINE PRINTS
              </h2>
<p class="font-body-sm text-body-sm text-text-muted mt-2">
                Archival Giclée Photo Panels + Minimal Black Frames • UV-Resistant Float Mount
              </p>
</div>
<div class="pt-space-sm flex items-center justify-between">
<span class="inline-flex items-center gap-1 font-label-md text-label-md text-primary-container group-hover:translate-x-1 transition-transform">
                SPECS <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
</span>
<span class="font-label-sm text-[11px] text-text-dim">100-Year Fastness</span>
</div>
</div>
</article>
<!-- Card 15: Creative Automation Kiosk -->
<article class="product-item group flex flex-col rounded-xl bg-surface-raised transition-all duration-300 hover:bg-surface-elevated hover:shadow-xl hover:translate-y-[-2px] overflow-hidden" data-category="signage">
<div class="relative aspect-[4/3] w-full bg-surface-container overflow-hidden">
<img alt="CREATIVE AUTOMATION KIOSK" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/pixlbyts/products/images/CREATIVE%20AUTOMATION%20KIOSK.png">
<div class="absolute top-space-sm left-space-sm flex items-center gap-1 px-space-sm py-0.5 rounded bg-surface-base/90 backdrop-blur-md font-label-sm text-[11px] text-text-primary uppercase tracking-wider">
<span class="w-1.5 h-1.5 rounded-full bg-primary-container shadow-[0_0_6px_#f97316]"></span>
              INTERACTIVE
            </div>
<div class="absolute bottom- space-xs right-space-xs px-2 py-0.5 rounded bg-surface-base/80 text-[10px] font-mono text-text-muted">
              P-15 // IOT KIOSK
            </div>
</div>
<div class="p-space-lg flex flex-col flex-1 justify-between gap-space-md">
<div>
<div class="flex items-center justify-between text-text-dim font-label-sm text-[11px] mb-1">
<span class="">SERIES: KINETIC-HUB</span>
<span class="">TOF SENSOR ARRAY</span>
</div>
<h2 class="font-title-md text-title-md text-text-primary tracking-tight group-hover:text-primary-container transition-colors">
                CREATIVE AUTOMATION KIOSK
              </h2>
<p class="font-body-sm text-body-sm text-text-muted mt-2">
                Digital Touch Screen + Sensor Light Ring • IoT Hardware Telemetry Node
              </p>
</div>
<div class="pt-space-sm flex items-center justify-between">
<span class="inline-flex items-center gap-1 font-label-md text-label-md text-primary-container group-hover:translate-x-1 transition-transform">
                SPECS <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
</span>
<span class="font-label-sm text-[11px] text-text-dim">4K 60Hz Display</span>
</div>
</div>
</article>
</div>
</div>
</section>
<!-- Engineering Benchmarks & Fabrication Specifications Banner -->
<section class="w-full bg-surface-raised/40 py-margin-md">
<div class="max-w-7xl mx-auto px-6 lg:px-12">
<!-- Section Header -->
<div class="flex flex-col md:flex-row md:items-end justify-between gap-space-md pb-space-xl">
<div>
<span class="font-label-sm text-label-sm uppercase tracking-wider text-primary-container block mb-1">
            FABRICATION STANDARDS &amp; METROLOGY
          </span>
<h2 class="font-headline-md text-headline-md text-text-primary tracking-tight">
            STANDARD ENGINEERING BENCHMARKS
          </h2>
</div>
<p class="font-body-sm text-body-sm text-text-muted max-w-md">
          Every physical surface fabricated at PIXLBYTS undergoes rigorous structural strain analysis, thermal chamber soak, and optical spectrometry before site delivery.
        </p>
</div>
<!-- 3 Technical Cards -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
<!-- Benchmark 1 -->
<div class="p-space-lg rounded-xl bg-surface-raised shadow-md flex flex-col justify-between">
<div class="space-y-space-md">
<div class="flex items-center justify-between">
<span class="w-10 h-10 rounded-lg bg-surface-base flex items-center justify-center text-primary-container">
<span class="material-symbols-outlined text-[22px]">light_mode</span>
</span>
<span class="font-mono text-[11px] text-text-dim">BENCHMARK 01</span>
</div>
<h3 class="font-title-md text-title-md text-text-primary">Architectural Illumination</h3>
<p class="font-body-sm text-body-sm text-text-muted leading-relaxed">
              Equipped exclusively with OSRAM and Seoul Semiconductor diodes. Guaranteed &gt;95 CRI color fidelity, zero hot-spotting via proprietary diffusion lenses, and calibrated ±50K binning consistency.
            </p>
</div>
<div class="pt-space-lg mt-space-md bg-surface-base/50 p-space-sm rounded">
<div class="flex items-center justify-between font-label-sm text-label-sm text-text-dim">
<span class="">Lumen Maintenance</span>
<span class="text-text-primary font-mono">L80B10 @ 60,000h</span>
</div>
</div>
</div>
<!-- Benchmark 2 -->
<div class="p-space-lg rounded-xl bg-surface-raised shadow-md flex flex-col justify-between">
<div class="space-y-space-md">
<div class="flex items-center justify-between">
<span class="w-10 h-10 rounded-lg bg-surface-base flex items-center justify-center text-secondary">
<span class="material-symbols-outlined text-[22px]">square_foot</span>
</span>
<span class="font-mono text-[11px] text-text-dim">BENCHMARK 02</span>
</div>
<h3 class="font-title-md text-title-md text-text-primary">Sub-Millimeter CNC Extrusions</h3>
<p class="font-body-sm text-body-sm text-text-muted leading-relaxed">
              Constructed with 6063-T6 aircraft-grade extruded aluminum. Continuous 5-axis robotic milling delivers hairline seamless mitered joints with structural rigidity rated up to Zone 4 seismic specs.
            </p>
</div>
<div class="pt-space-lg mt-space-md bg-surface-base/50 p-space-sm rounded">
<div class="flex items-center justify-between font-label-sm text-label-sm text-text-dim">
<span class="">Dimensional Variance</span>
<span class="text-secondary font-mono">≤ 0.05 mm / 1000mm</span>
</div>
</div>
</div>
<!-- Benchmark 3 -->
<div class="p-space-lg rounded-xl bg-surface-raised shadow-md flex flex-col justify-between">
<div class="space-y-space-md">
<div class="flex items-center justify-between">
<span class="w-10 h-10 rounded-lg bg-surface-base flex items-center justify-center text-primary-container">
<span class="material-symbols-outlined text-[22px]">palette</span>
</span>
<span class="font-mono text-[11px] text-text-dim">BENCHMARK 03</span>
</div>
<h3 class="font-title-md text-title-md text-text-primary">Dye-Sublimation &amp; UV Curable</h3>
<p class="font-body-sm text-body-sm text-text-muted leading-relaxed">
              Industrial direct-to-substrate printing up to 3.2m continuous seamless roll width. Aqueous pigment chemistry yields zero off-gassing, fade-proof outdoor ratings, and fire retardant B1 certifications.
            </p>
</div>
<div class="pt-space-lg mt-space-md bg-surface-base/50 p-space-sm rounded">
<div class="flex items-center justify-between font-label-sm text-label-sm text-text-dim">
<span class="">Color Consistency</span>
<span class="text-text-primary font-mono">ΔE*ab &lt; 0.8 Match</span>
</div>
</div>
</div>
</div>
<!-- Turnkey Call-To-Action Box -->
<div class="mt-space-xl p-space-xl rounded-2xl bg-surface-raised relative overflow-hidden shadow-2xl">
<div class="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-primary-container/10 blur-3xl pointer-events-none"></div>
<div class="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-space-xl">
<div class="max-w-2xl space-y-space-sm">
<div class="inline-flex items-center gap-2 text-primary-container font-label-sm text-label-sm tracking-wider uppercase">
<span class="w-2 h-2 rounded-full bg-primary-container"></span> ARCHITECTURAL CONSULTING
            </div>
<h3 class="font-headline-sm text-headline-sm lg:text-headline-md text-text-primary tracking-tight">
              Looking for custom dimensions, bespoke metalwork, or turn-key architectural installations?
            </h3>
<p class="font-body-md text-body-md text-text-muted">
              Our Shenzhen foundry and engineering team work directly with global architectural studios to fabricate one-off spatial structures, specialized display totems, and synchronized media facade elements.
            </p>
</div>
<div class="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch gap-space-md shrink-0">
<a class="inline-flex items-center justify-center gap-2 px-space-lg py-space-md rounded-lg font-label-md text-label-md text-text-primary bg-gradient-to-br from-primary-container to-accent-flame-stop hover:brightness-110 shadow-[0_0_24px_-6px_rgba(249,115,22,0.35)] transition-all" data-path="quote" href="#">
<span class="">REQUEST CUSTOM QUOTE</span>
<span class="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
<button class="inline-flex items-center justify-center gap-2 px-space-lg py-space-md rounded-lg font-label-md text-label-md text-text-primary bg-surface-elevated hover:bg-surface-container-high transition-colors" type="button">
<span class="material-symbols-outlined text-[18px] text-text-dim">download</span>
<span class="">DOWNLOAD SPEC SHEET (PDF)</span>
</button>
</div>
</div>
<!-- Rapid Production Guarantee Footer Notes -->
<div class="relative z-10 pt-space-lg mt-space-lg flex flex-wrap items-center justify-between gap-space-md text-text-dim font-label-sm text-label-sm">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-[16px] text-primary-container">schedule</span>
<span class="text-on-surface">24hr Quotation Turnaround</span>
</div>
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-[16px] text-secondary">view_in_ar</span>
<span class="text-on-surface">Full 3D CAD Prototyping</span>
</div>
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-[16px] text-text-muted">public</span>
<span class="text-on-surface">On-Site Global Rigging &amp; Support</span>
</div>
</div>
</div>
</div>
</section>
<!-- Interactive Filter Logic (Client-side) -->
<script>
    (function initFilterBar() {
      const buttons = document.querySelectorAll('#categoryFilterBar button');
      const items = document.querySelectorAll('.product-item');

      buttons.forEach(button => {
        button.addEventListener('click', () => {
          const filter = button.getAttribute('data-filter');

          // Reset all buttons to unselected state
          buttons.forEach(b => {
            b.className = 'filter-pill group flex items-center gap-space-xs px-space-md py-space-xs rounded-lg font-label-md text-label-md transition-all bg-surface-raised text-on-surface-variant hover:text-text-primary hover:bg-surface-elevated';
            const badge = b.querySelector('span:last-child');
            if (badge) {
              badge.className = 'px-1.5 py-0.2 rounded-full text-[11px] bg-surface-base text-text-dim';
            }
          });

          // Set active state on clicked button
          button.className = 'filter-pill group flex items-center gap-space-xs px-space-md py-space-xs rounded-lg font-label-md text-label-md transition-all bg-gradient-to-br from-primary-container to-accent-flame-stop text-text-primary shadow-[0_0_16px_-4px_rgba(249,115,22,0.4)]';
          const activeBadge = button.querySelector('span:last-child');
          if (activeBadge) {
            activeBadge.className = 'px-1.5 py-0.2 rounded-full text-[11px] bg-black/30 text-white';
          }

          // Filter product grid items
          items.forEach(item => {
            const cat = item.getAttribute('data-category');
            if (filter === 'all' || cat === filter) {
              item.style.display = 'flex';
            } else {
              item.style.display = 'none';
            }
          });
        });
      });
    })();
  </script>
</div>` }} />
        </div>

        <div className="block md:hidden relative z-10 pt-20">
          {/* MOBILE LAYOUT */}
          <div className="w-full" dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col w-full">
<!-- Top Technical Datum / Eyebrow Header -->
<div class="px-margin pt-space-md pb-space-sm flex flex-col gap-space-xs">
<div class="flex items-center gap-space-xs">
<span class="w-1.5 h-1.5 rounded-full bg-primary-container shadow-[0_0_8px_#f97316]"></span>
<span class="font-label-sm text-label-sm uppercase tracking-wider text-text-dim">PORTFOLIO • PHYSICAL DISPLAYS</span>
</div>
<h1 class="font-headline-lg-mobile text-headline-lg-mobile font-semibold text-text-primary tracking-tight">Products &amp; Displays</h1>
<p class="font-body-sm text-body-sm text-text-muted mt-space-xs">Precision-engineered physical branding, illuminated architectural hardware, and custom modular fixtures.</p>
</div>
<!-- Search & Filter Quick Bar -->
<div class="px-margin py-space-sm">
<div class="flex items-center gap-space-sm bg-surface-raised px-space-md py-space-sm rounded-xl">
<span class="material-symbols-outlined text-text-dim text-[20px]">search</span>
<input class="bg-transparent font-body-sm text-body-sm text-text-primary placeholder:text-text-dim focus:outline-none w-full" id="productSearch" oninput="handleSearch(this.value)" placeholder="Search hardware, specs, models..." type="text">
<button aria-label="Toggle Filter View" class="w-7 h-7 flex items-center justify-center rounded-lg bg-surface-container text-text-muted hover:text-text-primary transition-colors shrink-0">
<span class="material-symbols-outlined text-[16px]">tune</span>
</button>
</div>
</div>
<!-- Swipeable Category Pills -->
<div class="w-full overflow-x-auto py-space-sm px-margin flex items-center gap-space-xs no-scrollbar">
<button class="filter-pill active whitespace-nowrap px-space-md py-1.5 rounded-full font-label-sm text-label-sm bg-primary-container text-white transition-all shadow-[0_0_16px_-4px_rgba(249,115,22,0.5)]" onclick="filterCategory('all', this)">
      All (15)
    </button>
<button class="filter-pill whitespace-nowrap px-space-md py-1.5 rounded-full font-label-sm text-label-sm bg-surface-raised text-text-muted hover:text-text-primary transition-all" onclick="filterCategory('illuminated', this)">
      Illuminated
    </button>
<button class="filter-pill whitespace-nowrap px-space-md py-1.5 rounded-full font-label-sm text-label-sm bg-surface-raised text-text-muted hover:text-text-primary transition-all" onclick="filterCategory('signage', this)">
      Signage
    </button>
<button class="filter-pill whitespace-nowrap px-space-md py-1.5 rounded-full font-label-sm text-label-sm bg-surface-raised text-text-muted hover:text-text-primary transition-all" onclick="filterCategory('retail', this)">
      Retail
    </button>
<button class="filter-pill whitespace-nowrap px-space-md py-1.5 rounded-full font-label-sm text-label-sm bg-surface-raised text-text-muted hover:text-text-primary transition-all" onclick="filterCategory('awards', this)">
      Awards
    </button>
</div>
<!-- Real-time Count & Status Strip -->
<div class="px-margin pt-space-xs pb-space-sm flex items-center justify-between">
<div class="flex items-center gap-1.5 font-label-sm text-label-sm text-text-dim">
<span class="material-symbols-outlined text-[14px] text-primary-container">memory</span>
<span class="">INVENTORY TELEMETRY</span>
</div>
<span class="font-label-sm text-label-sm text-text-muted" id="productCounter">SHOWING 15 UNITS</span>
</div>
<!-- Product Vertical Feed -->
<div class="px-margin flex flex-col gap-space-md pb-space-lg" id="productGrid">
<!-- Card 1 -->
<div class="product-card group relative bg-surface-raised rounded-xl overflow-hidden shadow-md transition-all duration-200" data-category="illuminated" data-title="Digital LED Display Board Amber LED Matrix IP65">
<div class="relative w-full aspect-[4/3] bg-surface-base overflow-hidden">
<img alt="Digital LED Display Board" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" src="/pixlbyts/products/images/DIGITAL%20LED%20DISPLAY%20BOARD.png">
<div class="absolute top-space-sm left-space-sm flex items-center gap-1.5 bg-surface-base/90 backdrop-blur-md px-2.5 py-1 rounded-full">
<span class="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_6px_#f97316]"></span>
<span class="font-label-sm text-label-sm tracking-widest text-text-primary uppercase">PROGRAMMABLE</span>
</div>
<div class="absolute bottom-space-sm right-space-sm bg-surface-base/80 backdrop-blur-sm px-2 py-0.5 rounded text-text-dim font-label-sm text-label-sm">
          HW-01
        </div>
</div>
<div class="p-space-md flex flex-col gap-space-xs">
<div class="flex items-start justify-between gap-space-sm">
<h2 class="font-title-md text-title-md font-semibold text-text-primary tracking-tight">Digital LED Display Board</h2>
<span class="material-symbols-outlined text-text-dim group-hover:text-primary-container transition-colors text-[20px] shrink-0 mt-0.5">arrow_outward</span>
</div>
<div class="flex items-center gap-space-xs text-text-dim font-body-sm text-body-sm">
<span class="material-symbols-outlined text-primary-container text-[16px]">grid_4x4</span>
<span class="">Amber LED Matrix • IP65 Rated</span>
</div>
<div class="mt-space-xs pt-space-xs flex items-center justify-between text-text-muted font-label-sm text-label-sm">
<span class="text-text-dim">Lead time: 5-7 business days</span>
<span class="text-primary font-medium">Modular Spec</span>
</div>
</div>
</div>
<!-- Card 2 -->
<div class="product-card group relative bg-surface-raised rounded-xl overflow-hidden shadow-md transition-all duration-200" data-category="illuminated" data-title="Fabric LED Displays SEG Fabric Tension Lightbox 6500K">
<div class="relative w-full aspect-[4/3] bg-surface-base overflow-hidden">
<img alt="Fabric LED Displays" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" src="/pixlbyts/products/images/FABRIC%20LED%20DISPLAYS.png">
<div class="absolute top-space-sm left-space-sm flex items-center gap-1.5 bg-surface-base/90 backdrop-blur-md px-2.5 py-1 rounded-full">
<span class="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_6px_#f97316]"></span>
<span class="font-label-sm text-label-sm tracking-widest text-text-primary uppercase">SEG FABRIC</span>
</div>
<div class="absolute bottom-space-sm right-space-sm bg-surface-base/80 backdrop-blur-sm px-2 py-0.5 rounded text-text-dim font-label-sm text-label-sm">
          HW-02
        </div>
</div>
<div class="p-space-md flex flex-col gap-space-xs">
<div class="flex items-start justify-between gap-space-sm">
<h2 class="font-title-md text-title-md font-semibold text-text-primary tracking-tight">Fabric LED Displays</h2>
<span class="material-symbols-outlined text-text-dim group-hover:text-primary-container transition-colors text-[20px] shrink-0 mt-0.5">arrow_outward</span>
</div>
<div class="flex items-center gap-space-xs text-text-dim font-body-sm text-body-sm">
<span class="material-symbols-outlined text-primary-container text-[16px]">wb_sunny</span>
<span class="">Tension Fabric Lightbox • 6500K</span>
</div>
<div class="mt-space-xs pt-space-xs flex items-center justify-between text-text-muted font-label-sm text-label-sm">
<span class="text-text-dim">Toolless silicon bead mount</span>
<span class="text-primary font-medium">Bespoke Aspect</span>
</div>
</div>
</div>
<!-- Card 3 -->
<div class="product-card group relative bg-surface-raised rounded-xl overflow-hidden shadow-md transition-all duration-200" data-category="illuminated signage" data-title="Slim LED Backlit Board Ultra Slim Magnetic Frame Profile">
<div class="relative w-full aspect-[4/3] bg-surface-base overflow-hidden">
<img alt="Slim LED Backlit Board" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" src="/pixlbyts/products/images/SLIM%20LED%20BACKLIT%20BOARD.png">
<div class="absolute top-space-sm left-space-sm flex items-center gap-1.5 bg-surface-base/90 backdrop-blur-md px-2.5 py-1 rounded-full">
<span class="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_6px_#f97316]"></span>
<span class="font-label-sm text-label-sm tracking-widest text-text-primary uppercase">ULTRA SLIM</span>
</div>
<div class="absolute bottom-space-sm right-space-sm bg-surface-base/80 backdrop-blur-sm px-2 py-0.5 rounded text-text-dim font-label-sm text-label-sm">
          HW-03
        </div>
</div>
<div class="p-space-md flex flex-col gap-space-xs">
<div class="flex items-start justify-between gap-space-sm">
<h2 class="font-title-md text-title-md font-semibold text-text-primary tracking-tight">Slim LED Backlit Board</h2>
<span class="material-symbols-outlined text-text-dim group-hover:text-primary-container transition-colors text-[20px] shrink-0 mt-0.5">arrow_outward</span>
</div>
<div class="flex items-center gap-space-xs text-text-dim font-body-sm text-body-sm">
<span class="material-symbols-outlined text-primary-container text-[16px]">aspect_ratio</span>
<span class="">18mm Profile • Magnetic Frame</span>
</div>
<div class="mt-space-xs pt-space-xs flex items-center justify-between text-text-muted font-label-sm text-label-sm">
<span class="text-text-dim">Edge-lit acrylic light guide</span>
<span class="text-primary font-medium">Standard &amp; Custom</span>
</div>
</div>
</div>
<!-- Card 4 -->
<div class="product-card group relative bg-surface-raised rounded-xl overflow-hidden shadow-md transition-all duration-200" data-category="illuminated" data-title="LED Video Walls Fine-pitch Seamless Curved Cabinets">
<div class="relative w-full aspect-[4/3] bg-surface-base overflow-hidden">
<img alt="LED Video Walls" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" src="/pixlbyts/products/images/LED%20VIDEO%20WALLS.png">
<div class="absolute top-space-sm left-space-sm flex items-center gap-1.5 bg-surface-base/90 backdrop-blur-md px-2.5 py-1 rounded-full">
<span class="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_6px_#f97316]"></span>
<span class="font-label-sm text-label-sm tracking-widest text-text-primary uppercase">FINE-PITCH</span>
</div>
<div class="absolute bottom-space-sm right-space-sm bg-surface-base/80 backdrop-blur-sm px-2 py-0.5 rounded text-text-dim font-label-sm text-label-sm">
          HW-04
        </div>
</div>
<div class="p-space-md flex flex-col gap-space-xs">
<div class="flex items-start justify-between gap-space-sm">
<h2 class="font-title-md text-title-md font-semibold text-text-primary tracking-tight">LED Video Walls</h2>
<span class="material-symbols-outlined text-text-dim group-hover:text-primary-container transition-colors text-[20px] shrink-0 mt-0.5">arrow_outward</span>
</div>
<div class="flex items-center gap-space-xs text-text-dim font-body-sm text-body-sm">
<span class="material-symbols-outlined text-primary-container text-[16px]">tv</span>
<span class="">Seamless Curved LED Cabinets</span>
</div>
<div class="mt-space-xs pt-space-xs flex items-center justify-between text-text-muted font-label-sm text-label-sm">
<span class="text-text-dim">0.9mm - 1.8mm pixel pitch</span>
<span class="text-primary font-medium">Enterprise Class</span>
</div>
</div>
</div>
<!-- Card 5 -->
<div class="product-card group relative bg-surface-raised rounded-xl overflow-hidden shadow-md transition-all duration-200" data-category="signage illuminated" data-title="LED Cut Letter Branding Halo Glow CNC Solid Letters Backlit">
<div class="relative w-full aspect-[4/3] bg-surface-base overflow-hidden">
<img alt="LED Cut Letter Branding" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" src="/pixlbyts/products/images/LED%20CUT%20LETTER%20BRANDING.png">
<div class="absolute top-space-sm left-space-sm flex items-center gap-1.5 bg-surface-base/90 backdrop-blur-md px-2.5 py-1 rounded-full">
<span class="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_6px_#f97316]"></span>
<span class="font-label-sm text-label-sm tracking-widest text-text-primary uppercase">HALO GLOW</span>
</div>
<div class="absolute bottom-space-sm right-space-sm bg-surface-base/80 backdrop-blur-sm px-2 py-0.5 rounded text-text-dim font-label-sm text-label-sm">
          HW-05
        </div>
</div>
<div class="p-space-md flex flex-col gap-space-xs">
<div class="flex items-start justify-between gap-space-sm">
<h2 class="font-title-md text-title-md font-semibold text-text-primary tracking-tight">LED Cut Letter Branding</h2>
<span class="material-symbols-outlined text-text-dim group-hover:text-primary-container transition-colors text-[20px] shrink-0 mt-0.5">arrow_outward</span>
</div>
<div class="flex items-center gap-space-xs text-text-dim font-body-sm text-body-sm">
<span class="material-symbols-outlined text-primary-container text-[16px]">flare</span>
<span class="">CNC Solid Letters • Backlit Glow</span>
</div>
<div class="mt-space-xs pt-space-xs flex items-center justify-between text-text-muted font-label-sm text-label-sm">
<span class="text-text-dim">Anodized aluminum &amp; bronze</span>
<span class="text-primary font-medium">Bespoke Mill</span>
</div>
</div>
</div>
<!-- Card 6 -->
<div class="product-card group relative bg-surface-raised rounded-xl overflow-hidden shadow-md transition-all duration-200" data-category="retail" data-title="Paper &amp; Cardboard Pylon Eco-Friendly Recyclable Cylindrical Totem">
<div class="relative w-full aspect-[4/3] bg-surface-base overflow-hidden">
<img alt="Paper &amp; Cardboard Pylon" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" src="/pixlbyts/products/images/PAPER%20&%20CARDBOARD%20PYLONS.png">
<div class="absolute top-space-sm left-space-sm flex items-center gap-1.5 bg-surface-base/90 backdrop-blur-md px-2.5 py-1 rounded-full">
<span class="w-2 h-2 rounded-full bg-secondary shadow-[0_0_6px_#89ceff]"></span>
<span class="font-label-sm text-label-sm tracking-widest text-text-primary uppercase">ECO-FRIENDLY</span>
</div>
<div class="absolute bottom-space-sm right-space-sm bg-surface-base/80 backdrop-blur-sm px-2 py-0.5 rounded text-text-dim font-label-sm text-label-sm">
          HW-06
        </div>
</div>
<div class="p-space-md flex flex-col gap-space-xs">
<div class="flex items-start justify-between gap-space-sm">
<h2 class="font-title-md text-title-md font-semibold text-text-primary tracking-tight">Paper &amp; Cardboard Pylon</h2>
<span class="material-symbols-outlined text-text-dim group-hover:text-primary-container transition-colors text-[20px] shrink-0 mt-0.5">arrow_outward</span>
</div>
<div class="flex items-center gap-space-xs text-text-dim font-body-sm text-body-sm">
<span class="material-symbols-outlined text-secondary text-[16px]">eco</span>
<span class="">Recyclable Cylindrical Totem</span>
</div>
<div class="mt-space-xs pt-space-xs flex items-center justify-between text-text-muted font-label-sm text-label-sm">
<span class="text-text-dim">FSC-certified rigid pulpboard</span>
<span class="text-primary font-medium">Flat-Pack</span>
</div>
</div>
</div>
<!-- Card 7 -->
<div class="product-card group relative bg-surface-raised rounded-xl overflow-hidden shadow-md transition-all duration-200" data-category="retail" data-title="Rollup Stand Promo Table Modular Set Retractable Banner Curved Desk">
<div class="relative w-full aspect-[4/3] bg-surface-base overflow-hidden">
<img alt="Rollup Stand &amp; Promo Table" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" src="/pixlbyts/products/images/ROLLUP%20STAND%20&%20PROMO%20TABLE.png">
<div class="absolute top-space-sm left-space-sm flex items-center gap-1.5 bg-surface-base/90 backdrop-blur-md px-2.5 py-1 rounded-full">
<span class="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_6px_#f97316]"></span>
<span class="font-label-sm text-label-sm tracking-widest text-text-primary uppercase">MODULAR SET</span>
</div>
<div class="absolute bottom-space-sm right-space-sm bg-surface-base/80 backdrop-blur-sm px-2 py-0.5 rounded text-text-dim font-label-sm text-label-sm">
          HW-07
        </div>
</div>
<div class="p-space-md flex flex-col gap-space-xs">
<div class="flex items-start justify-between gap-space-sm">
<h2 class="font-title-md text-title-md font-semibold text-text-primary tracking-tight">Rollup Stand &amp; Promo Table</h2>
<span class="material-symbols-outlined text-text-dim group-hover:text-primary-container transition-colors text-[20px] shrink-0 mt-0.5">arrow_outward</span>
</div>
<div class="flex items-center gap-space-xs text-text-dim font-body-sm text-body-sm">
<span class="material-symbols-outlined text-primary-container text-[16px]">view_column</span>
<span class="">Retractable Banner &amp; Curved Desk</span>
</div>
<div class="mt-space-xs pt-space-xs flex items-center justify-between text-text-muted font-label-sm text-label-sm">
<span class="text-text-dim">High-tensile hardware base</span>
<span class="text-primary font-medium">Event Bundle</span>
</div>
</div>
</div>
<!-- Card 8 -->
<div class="product-card group relative bg-surface-raised rounded-xl overflow-hidden shadow-md transition-all duration-200" data-category="retail" data-title="Modular Display Racks Heavy Duty Powder-Coated Steel Oak Shelving">
<div class="relative w-full aspect-[4/3] bg-surface-base overflow-hidden">
<img alt="Modular Display Racks" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" src="/pixlbyts/products/images/MODULAR%20DISPLAY%20RACKS.png">
<div class="absolute top-space-sm left-space-sm flex items-center gap-1.5 bg-surface-base/90 backdrop-blur-md px-2.5 py-1 rounded-full">
<span class="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_6px_#f97316]"></span>
<span class="font-label-sm text-label-sm tracking-widest text-text-primary uppercase">HEAVY DUTY</span>
</div>
<div class="absolute bottom-space-sm right-space-sm bg-surface-base/80 backdrop-blur-sm px-2 py-0.5 rounded text-text-dim font-label-sm text-label-sm">
          HW-08
        </div>
</div>
<div class="p-space-md flex flex-col gap-space-xs">
<div class="flex items-start justify-between gap-space-sm">
<h2 class="font-title-md text-title-md font-semibold text-text-primary tracking-tight">Modular Display Racks</h2>
<span class="material-symbols-outlined text-text-dim group-hover:text-primary-container transition-colors text-[20px] shrink-0 mt-0.5">arrow_outward</span>
</div>
<div class="flex items-center gap-space-xs text-text-dim font-body-sm text-body-sm">
<span class="material-symbols-outlined text-primary-container text-[16px]">shelves</span>
<span class="">Powder-Coated Steel &amp; Oak</span>
</div>
<div class="mt-space-xs pt-space-xs flex items-center justify-between text-text-muted font-label-sm text-label-sm">
<span class="text-text-dim">45kg load per shelf tier</span>
<span class="text-primary font-medium">Configurable</span>
</div>
</div>
</div>
<!-- Card 9 -->
<div class="product-card group relative bg-surface-raised rounded-xl overflow-hidden shadow-md transition-all duration-200" data-category="signage" data-title="Directional Signage Wayfinding Gunmetal Totem Blade Signs">
<div class="relative w-full aspect-[4/3] bg-surface-base overflow-hidden">
<img alt="Directional Signage" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" src="/pixlbyts/products/images/DIRECTIONAL%20SIGNAGE.png">
<div class="absolute top-space-sm left-space-sm flex items-center gap-1.5 bg-surface-base/90 backdrop-blur-md px-2.5 py-1 rounded-full">
<span class="w-2 h-2 rounded-full bg-secondary shadow-[0_0_6px_#89ceff]"></span>
<span class="font-label-sm text-label-sm tracking-widest text-text-primary uppercase">WAYFINDING</span>
</div>
<div class="absolute bottom-space-sm right-space-sm bg-surface-base/80 backdrop-blur-sm px-2 py-0.5 rounded text-text-dim font-label-sm text-label-sm">
          HW-09
        </div>
</div>
<div class="p-space-md flex flex-col gap-space-xs">
<div class="flex items-start justify-between gap-space-sm">
<h2 class="font-title-md text-title-md font-semibold text-text-primary tracking-tight">Directional Signage</h2>
<span class="material-symbols-outlined text-text-dim group-hover:text-primary-container transition-colors text-[20px] shrink-0 mt-0.5">arrow_outward</span>
</div>
<div class="flex items-center gap-space-xs text-text-dim font-body-sm text-body-sm">
<span class="material-symbols-outlined text-secondary text-[16px]">signpost</span>
<span class="">Gunmetal Totem &amp; Blade Signs</span>
</div>
<div class="mt-space-xs pt-space-xs flex items-center justify-between text-text-muted font-label-sm text-label-sm">
<span class="text-text-dim">Architectural ADA compliant</span>
<span class="text-primary font-medium">Modular System</span>
</div>
</div>
</div>
<!-- Card 10 -->
<div class="product-card group relative bg-surface-raised rounded-xl overflow-hidden shadow-md transition-all duration-200" data-category="retail signage" data-title="Inshop Branding Archway Spatial Architectural Entry Portal">
<div class="relative w-full aspect-[4/3] bg-surface-base overflow-hidden">
<img alt="Inshop Branding Archway" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" src="/pixlbyts/products/images/INSHOP%20BRANDING%20ARCHWAYS.png">
<div class="absolute top-space-sm left-space-sm flex items-center gap-1.5 bg-surface-base/90 backdrop-blur-md px-2.5 py-1 rounded-full">
<span class="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_6px_#f97316]"></span>
<span class="font-label-sm text-label-sm tracking-widest text-text-primary uppercase">SPATIAL</span>
</div>
<div class="absolute bottom-space-sm right-space-sm bg-surface-base/80 backdrop-blur-sm px-2 py-0.5 rounded text-text-dim font-label-sm text-label-sm">
          HW-10
        </div>
</div>
<div class="p-space-md flex flex-col gap-space-xs">
<div class="flex items-start justify-between gap-space-sm">
<h2 class="font-title-md text-title-md font-semibold text-text-primary tracking-tight">Inshop Branding Archway</h2>
<span class="material-symbols-outlined text-text-dim group-hover:text-primary-container transition-colors text-[20px] shrink-0 mt-0.5">arrow_outward</span>
</div>
<div class="flex items-center gap-space-xs text-text-dim font-body-sm text-body-sm">
<span class="material-symbols-outlined text-primary-container text-[16px]">meeting_room</span>
<span class="">Architectural Entry Portal</span>
</div>
<div class="mt-space-xs pt-space-xs flex items-center justify-between text-text-muted font-label-sm text-label-sm">
<span class="text-text-dim">Diffused warm perimeter LEDs</span>
<span class="text-primary font-medium">Custom Fit</span>
</div>
</div>
</div>
<!-- Card 11 -->
<div class="product-card group relative bg-surface-raised rounded-xl overflow-hidden shadow-md transition-all duration-200" data-category="awards" data-title="Executive Trophies &amp; Awards Recognition Optical Crystal Titanium Mementos">
<div class="relative w-full aspect-[4/3] bg-surface-base overflow-hidden">
<img alt="Executive Trophies &amp; Awards" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" src="/pixlbyts/products/images/TROPHIES%20&%20MEMENTOS.png">
<div class="absolute top-space-sm left-space-sm flex items-center gap-1.5 bg-surface-base/90 backdrop-blur-md px-2.5 py-1 rounded-full">
<span class="w-2 h-2 rounded-full bg-accent-amber-glow shadow-[0_0_6px_#fdba74]"></span>
<span class="font-label-sm text-label-sm tracking-widest text-text-primary uppercase">RECOGNITION</span>
</div>
<div class="absolute bottom-space-sm right-space-sm bg-surface-base/80 backdrop-blur-sm px-2 py-0.5 rounded text-text-dim font-label-sm text-label-sm">
          HW-11
        </div>
</div>
<div class="p-space-md flex flex-col gap-space-xs">
<div class="flex items-start justify-between gap-space-sm">
<h2 class="font-title-md text-title-md font-semibold text-text-primary tracking-tight">Executive Trophies &amp; Awards</h2>
<span class="material-symbols-outlined text-text-dim group-hover:text-primary-container transition-colors text-[20px] shrink-0 mt-0.5">arrow_outward</span>
</div>
<div class="flex items-center gap-space-xs text-text-dim font-body-sm text-body-sm">
<span class="material-symbols-outlined text-accent-amber-glow text-[16px]">military_tech</span>
<span class="">Optical Crystal &amp; Titanium</span>
</div>
<div class="mt-space-xs pt-space-xs flex items-center justify-between text-text-muted font-label-sm text-label-sm">
<span class="text-text-dim">Sub-surface laser micro-etching</span>
<span class="text-primary font-medium">Prestige Grade</span>
</div>
</div>
</div>
<!-- Card 12 -->
<div class="product-card group relative bg-surface-raised rounded-xl overflow-hidden shadow-md transition-all duration-200" data-category="retail" data-title="Product Dispenser POS Countertop Stepped Acrylic Organizer">
<div class="relative w-full aspect-[4/3] bg-surface-base overflow-hidden">
<img alt="Product Dispenser &amp; POS" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" src="/pixlbyts/products/images/PRODUCT%20DISPENSER%20&%20POS.png">
<div class="absolute top-space-sm left-space-sm flex items-center gap-1.5 bg-surface-base/90 backdrop-blur-md px-2.5 py-1 rounded-full">
<span class="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_6px_#f97316]"></span>
<span class="font-label-sm text-label-sm tracking-widest text-text-primary uppercase">COUNTERTOP</span>
</div>
<div class="absolute bottom-space-sm right-space-sm bg-surface-base/80 backdrop-blur-sm px-2 py-0.5 rounded text-text-dim font-label-sm text-label-sm">
          HW-12
        </div>
</div>
<div class="p-space-md flex flex-col gap-space-xs">
<div class="flex items-start justify-between gap-space-sm">
<h2 class="font-title-md text-title-md font-semibold text-text-primary tracking-tight">Product Dispenser &amp; POS</h2>
<span class="material-symbols-outlined text-text-dim group-hover:text-primary-container transition-colors text-[20px] shrink-0 mt-0.5">arrow_outward</span>
</div>
<div class="flex items-center gap-space-xs text-text-dim font-body-sm text-body-sm">
<span class="material-symbols-outlined text-primary-container text-[16px]">storefront</span>
<span class="">Stepped Acrylic Organizer</span>
</div>
<div class="mt-space-xs pt-space-xs flex items-center justify-between text-text-muted font-label-sm text-label-sm">
<span class="text-text-dim">Scratch-resistant matte finish</span>
<span class="text-primary font-medium">Batch Runs</span>
</div>
</div>
</div>
<!-- Card 13 -->
<div class="product-card group relative bg-surface-raised rounded-xl overflow-hidden shadow-md transition-all duration-200" data-category="retail signage" data-title="Print Cut-Out Display Die-Cut 3D Multi-Layer Dimensional Stand">
<div class="relative w-full aspect-[4/3] bg-surface-base overflow-hidden">
<img alt="Print &amp; Cut-Out Display" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" src="/pixlbyts/products/images/PRINT%20&%20CUT-OUT%20DISPLAY.png">
<div class="absolute top-space-sm left-space-sm flex items-center gap-1.5 bg-surface-base/90 backdrop-blur-md px-2.5 py-1 rounded-full">
<span class="w-2 h-2 rounded-full bg-secondary shadow-[0_0_6px_#89ceff]"></span>
<span class="font-label-sm text-label-sm tracking-widest text-text-primary uppercase">DIE-CUT 3D</span>
</div>
<div class="absolute bottom-space-sm right-space-sm bg-surface-base/80 backdrop-blur-sm px-2 py-0.5 rounded text-text-dim font-label-sm text-label-sm">
          HW-13
        </div>
</div>
<div class="p-space-md flex flex-col gap-space-xs">
<div class="flex items-start justify-between gap-space-sm">
<h2 class="font-title-md text-title-md font-semibold text-text-primary tracking-tight">Print &amp; Cut-Out Display</h2>
<span class="material-symbols-outlined text-text-dim group-hover:text-primary-container transition-colors text-[20px] shrink-0 mt-0.5">arrow_outward</span>
</div>
<div class="flex items-center gap-space-xs text-text-dim font-body-sm text-body-sm">
<span class="material-symbols-outlined text-secondary text-[16px]">layers</span>
<span class="">Multi-Layer Dimensional Stand</span>
</div>
<div class="mt-space-xs pt-space-xs flex items-center justify-between text-text-muted font-label-sm text-label-sm">
<span class="text-text-dim">UV cured direct-to-substrate</span>
<span class="text-primary font-medium">Bespoke Contour</span>
</div>
</div>
</div>
<!-- Card 14 -->
<div class="product-card group relative bg-surface-raised rounded-xl overflow-hidden shadow-md transition-all duration-200" data-category="retail awards" data-title="Fine Art Divine Photo Prints Gallery Grade Archival Mounted Panels">
<div class="relative w-full aspect-[4/3] bg-surface-base overflow-hidden">
<img alt="Fine Art &amp; Divine Photo Prints" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" src="/pixlbyts/products/images/FINE%20ART%20&%20DIVINE%20PRINTS.png">
<div class="absolute top-space-sm left-space-sm flex items-center gap-1.5 bg-surface-base/90 backdrop-blur-md px-2.5 py-1 rounded-full">
<span class="w-2 h-2 rounded-full bg-accent-amber-glow shadow-[0_0_6px_#fdba74]"></span>
<span class="font-label-sm text-label-sm tracking-widest text-text-primary uppercase">GALLERY GRADE</span>
</div>
<div class="absolute bottom-space-sm right-space-sm bg-surface-base/80 backdrop-blur-sm px-2 py-0.5 rounded text-text-dim font-label-sm text-label-sm">
          HW-14
        </div>
</div>
<div class="p-space-md flex flex-col gap-space-xs">
<div class="flex items-start justify-between gap-space-sm">
<h2 class="font-title-md text-title-md font-semibold text-text-primary tracking-tight">Fine Art &amp; Photo Prints</h2>
<span class="material-symbols-outlined text-text-dim group-hover:text-primary-container transition-colors text-[20px] shrink-0 mt-0.5">arrow_outward</span>
</div>
<div class="flex items-center gap-space-xs text-text-dim font-body-sm text-body-sm">
<span class="material-symbols-outlined text-accent-amber-glow text-[16px]">photo_library</span>
<span class="">Archival Mounted Panels</span>
</div>
<div class="mt-space-xs pt-space-xs flex items-center justify-between text-text-muted font-label-sm text-label-sm">
<span class="text-text-dim">100+ year fade resistance</span>
<span class="text-primary font-medium">Museum Certified</span>
</div>
</div>
</div>
<!-- Card 15 -->
<div class="product-card group relative bg-surface-raised rounded-xl overflow-hidden shadow-md transition-all duration-200" data-category="illuminated" data-title="Creative Automation Kiosk Interactive Digital Screen Sensor Ring">
<div class="relative w-full aspect-[4/3] bg-surface-base overflow-hidden">
<img alt="Creative Automation Kiosk" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" src="/pixlbyts/products/images/CREATIVE%20AUTOMATION%20KIOSK.png">
<div class="absolute top-space-sm left-space-sm flex items-center gap-1.5 bg-surface-base/90 backdrop-blur-md px-2.5 py-1 rounded-full">
<span class="w-2 h-2 rounded-full bg-secondary shadow-[0_0_6px_#89ceff]"></span>
<span class="font-label-sm text-label-sm tracking-widest text-text-primary uppercase">INTERACTIVE</span>
</div>
<div class="absolute bottom-space-sm right-space-sm bg-surface-base/80 backdrop-blur-sm px-2 py-0.5 rounded text-text-dim font-label-sm text-label-sm">
          HW-15
        </div>
</div>
<div class="p-space-md flex flex-col gap-space-xs">
<div class="flex items-start justify-between gap-space-sm">
<h2 class="font-title-md text-title-md font-semibold text-text-primary tracking-tight">Creative Automation Kiosk</h2>
<span class="material-symbols-outlined text-text-dim group-hover:text-primary-container transition-colors text-[20px] shrink-0 mt-0.5">arrow_outward</span>
</div>
<div class="flex items-center gap-space-xs text-text-dim font-body-sm text-body-sm">
<span class="material-symbols-outlined text-secondary text-[16px]">touch_app</span>
<span class="">Digital Screen &amp; Sensor Ring</span>
</div>
<div class="mt-space-xs pt-space-xs flex items-center justify-between text-text-muted font-label-sm text-label-sm">
<span class="text-text-dim">Integrated LiDAR &amp; edge AI</span>
<span class="text-primary font-medium">Full Stack</span>
</div>
</div>
</div>
</div>
<!-- Empty Search Results State -->
<div class="hidden px-margin py-space-xl flex-col items-center justify-center text-center" id="noResults">
<div class="w-12 h-12 rounded-full bg-surface-raised flex items-center justify-center text-text-dim mb-space-sm">
<span class="material-symbols-outlined text-[24px]">search_off</span>
</div>
<p class="font-title-md text-title-md font-semibold text-text-primary">No Matching Hardware</p>
<p class="font-body-sm text-body-sm text-text-muted mt-space-xs max-w-xs">We manufacture custom fixtures to exact architectural blueprints. Request a bespoke build below.</p>
</div>
<!-- Quick Specs / Bespoke Quote CTA Panel -->
<div class="px-margin mb-space-xl">
<div class="relative bg-surface-elevated rounded-xl p-space-lg shadow-xl overflow-hidden">
<!-- Ambient Ignition Accent Line -->
<div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-container via-accent-flame-stop to-accent-amber-glow"></div>
<div class="flex items-center justify-between gap-space-sm mb-space-sm">
<div class="flex items-center gap-space-xs">
<span class="material-symbols-outlined text-primary-container text-[20px]">architecture</span>
<span class="font-label-sm text-label-sm uppercase tracking-wider text-text-dim">CUSTOM FABRICATION</span>
</div>
<span class="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-raised text-primary-container font-mono">SPEC-LAB</span>
</div>
<h3 class="font-headline-sm text-headline-sm font-semibold text-text-primary tracking-tight">Need Bespoke Dimensions or Hardware?</h3>
<p class="font-body-sm text-body-sm text-text-muted mt-1 mb-space-md">Our industrial engineering group builds turn-key interactive installations, structural portals, and custom LED enclosures.</p>
<div class="flex flex-col gap-space-sm mb-space-lg">
<div class="flex items-center gap-space-sm">
<div class="w-6 h-6 rounded bg-surface-raised flex items-center justify-center shrink-0">
<span class="material-symbols-outlined text-primary-container text-[16px]">schedule</span>
</div>
<span class="font-body-sm text-body-sm text-text-primary">Fast 24h Engineering Quotation</span>
</div>
<div class="flex items-center gap-space-sm">
<div class="w-6 h-6 rounded bg-surface-raised flex items-center justify-center shrink-0">
<span class="material-symbols-outlined text-primary-container text-[16px]">view_in_ar</span>
</div>
<span class="font-body-sm text-body-sm text-text-primary">Full 3D CAD Mockups &amp; Structural Feasibility</span>
</div>
<div class="flex items-center gap-space-sm">
<div class="w-6 h-6 rounded bg-surface-raised flex items-center justify-center shrink-0">
<span class="material-symbols-outlined text-primary-container text-[16px]">precision_manufacturing</span>
</div>
<span class="font-body-sm text-body-sm text-text-primary">Direct In-house Manufacturing &amp; Turn-key Install</span>
</div>
</div>
<a class="w-full inline-flex items-center justify-center gap-space-sm bg-gradient-to-r from-primary-container to-accent-flame-stop text-white font-label-md text-label-md font-medium py-3 px-space-lg rounded-lg shadow-[0_4px_20px_rgba(249,115,22,0.35)] active:scale-[0.98] transition-all" data-path="quote" href="#">
<span class="">Request Custom Quote</span>
<span class="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
</div>
</div>
<!-- Interactive JavaScript logic for Pills & Live Search Filtering -->
<script>
    let currentCategory = 'all';
    let currentQuery = '';

    function filterCategory(category, buttonEl) {
      currentCategory = category;
      document.querySelectorAll('.filter-pill').forEach(btn => {
        btn.classList.remove('bg-primary-container', 'text-white', 'shadow-[0_0_16px_-4px_rgba(249,115,22,0.5)]');
        btn.classList.add('bg-surface-raised', 'text-text-muted');
      });
      buttonEl.classList.add('bg-primary-container', 'text-white', 'shadow-[0_0_16px_-4px_rgba(249,115,22,0.5)]');
      buttonEl.classList.remove('bg-surface-raised', 'text-text-muted');
      applyFilters();
    }

    function handleSearch(query) {
      currentQuery = query.toLowerCase().trim();
      applyFilters();
    }

    function applyFilters() {
      const cards = document.querySelectorAll('.product-card');
      let visibleCount = 0;

      cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category') || '';
        const cardTitle = (card.getAttribute('data-title') || '').toLowerCase();

        const matchesCat = currentCategory === 'all' || cardCategory.includes(currentCategory);
        const matchesQuery = currentQuery === '' || cardTitle.includes(currentQuery);

        if (matchesCat && matchesQuery) {
          card.classList.remove('hidden');
          visibleCount++;
        } else {
          card.classList.add('hidden');
        }
      });

      const counter = document.getElementById('productCounter');
      const noResults = document.getElementById('noResults');

      if (counter) {
        counter.textContent = \`SHOWING \${visibleCount} UNITS\`;
      }

      if (visibleCount === 0) {
        noResults.classList.remove('hidden');
        noResults.classList.add('flex');
      } else {
        noResults.classList.add('hidden');
        noResults.classList.remove('flex');
      }
    }
  </script>
</div>` }} />
        </div>

      </div>
    </>
  );
}
