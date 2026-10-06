const fs = require('fs');

const desktopHtml = fs.readFileSync('stitch_ai_kuttan_cred_inspired_design/pixlbyts_products_physical_displays_desktop/code.html', 'utf8');
const mobileHtml = fs.readFileSync('stitch_ai_kuttan_cred_inspired_design/pixlbyts_products_physical_displays_mobile/code.html', 'utf8');

const desktopMatch = desktopHtml.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
const mobileMatch = mobileHtml.match(/<main[^>]*>([\s\S]*?)<\/main>/i);

const desktopContent = desktopMatch[1];
const mobileContent = mobileMatch[1];

const map = {
  'digitalleddisplayboard': 'DIGITAL LED DISPLAY BOARD.png',
  'fabricleddisplays': 'FABRIC LED DISPLAYS.png',
  'slimledbacklitboard': 'SLIM LED BACKLIT BOARD.png',
  'ledvideowalls': 'LED VIDEO WALLS.png',
  'ledcutletterbranding': 'LED CUT LETTER BRANDING.png',
  
  'papercardboardpylons': 'PAPER & CARDBOARD PYLONS.png',
  'paperampcardboardpylons': 'PAPER & CARDBOARD PYLONS.png',
  'paperampcardboardpylon': 'PAPER & CARDBOARD PYLONS.png',
  
  'rollupstandpromotable': 'ROLLUP STAND & PROMO TABLE.png',
  'rollupstandamppromotable': 'ROLLUP STAND & PROMO TABLE.png',
  
  'modulardisplayracks': 'MODULAR DISPLAY RACKS.png',
  'directionalsignage': 'DIRECTIONAL SIGNAGE.png',
  
  'inshopbrandingarchways': 'INSHOP BRANDING ARCHWAYS.png',
  'inshopbrandingarchway': 'INSHOP BRANDING ARCHWAYS.png',
  
  'trophiesmementos': 'TROPHIES & MEMENTOS.png',
  'trophiesampmementos': 'TROPHIES & MEMENTOS.png',
  'executivetrophiesampawards': 'TROPHIES & MEMENTOS.png',
  
  'productdispenserpos': 'PRODUCT DISPENSER & POS.png',
  'productdispenseramppos': 'PRODUCT DISPENSER & POS.png',
  
  'printcutoutdisplay': 'PRINT & CUT-OUT DISPLAY.png',
  'printampcutoutdisplay': 'PRINT & CUT-OUT DISPLAY.png',
  
  'fineartdivineprints': 'FINE ART & DIVINE PRINTS.png',
  'fineartampdivineprints': 'FINE ART & DIVINE PRINTS.png',
  'fineartampdivinephotoprints': 'FINE ART & DIVINE PRINTS.png',
  
  'creativeautomationkiosk': 'CREATIVE AUTOMATION KIOSK.png'
};

function replaceImages(html) {
  return html.replace(/<img[^>]+alt="([^"]+)"[^>]+src="([^"]+)"[^>]*>/gi, (match, altText, src) => {
    const normalizedAlt = altText.toLowerCase().replace(/[^a-z0-9]/g, '');
    let filename = '';

    if (normalizedAlt.includes('charcoalplogo')) {
      return '';
    } else {
      filename = map[normalizedAlt];
      if (!filename) {
         console.warn('MISSING MAPPING FOR:', altText, '->', normalizedAlt);
         filename = 'pixlbyts_products_physical_displays_desktop.png';
      }
    }

    if (filename) {
      // Use encodeURIComponent to handle spaces and & properly, but keep the slashes
      const newSrc = `/pixlbyts/products/images/${encodeURIComponent(filename).replace(/%26/g, '&').replace(/%20/g, '%20')}`;
      return match.replace(src, newSrc);
    }
    return match;
  });
}

const desktopProcessed = replaceImages(desktopContent);
const mobileProcessed = replaceImages(mobileContent);

const fileContent = `"use client";

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
            WebkitMaskImage: \`radial-gradient(300px circle at \${mousePos.x}px \${mousePos.y}px, black, transparent)\`,
            maskImage: \`radial-gradient(300px circle at \${mousePos.x}px \${mousePos.y}px, black, transparent)\`,
          }}
        ></div>

        <div className="hidden md:block relative z-10 pt-20">
          {/* DESKTOP LAYOUT */}
          <div className="w-full" dangerouslySetInnerHTML={{ __html: \`${desktopProcessed.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\` }} />
        </div>

        <div className="block md:hidden relative z-10 pt-20">
          {/* MOBILE LAYOUT */}
          <div className="w-full" dangerouslySetInnerHTML={{ __html: \`${mobileProcessed.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\` }} />
        </div>

      </div>
    </>
  );
}
`;

fs.writeFileSync('src/app/products/page.tsx', fileContent);
console.log('Successfully generated src/app/products/page.tsx from Stitch HTML with new filenames!');
