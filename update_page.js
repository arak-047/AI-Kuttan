const fs = require('fs');

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

let page = fs.readFileSync('src/app/products/page.tsx', 'utf8');

page = page.replace(/<img[^>]+alt="([^"]+)"[^>]+src="([^"]+)"[^>]*>/gi, (match, altText, src) => {
  const normalizedAlt = altText.toLowerCase().replace(/[^a-z0-9]/g, '');
  let filename = '';

  if (normalizedAlt.includes('charcoalplogo')) {
    return match; // Ignore logo
  } else {
    filename = map[normalizedAlt];
    if (!filename) {
       console.warn('MISSING MAPPING FOR:', altText, '->', normalizedAlt);
       return match;
    }
  }

  const encodedFilename = encodeURIComponent(filename).replace(/%26/g, '&').replace(/%20/g, '%20');
  const newSrc = `/pixlbyts/products/images/${encodedFilename}`;
  return match.replace(src, newSrc);
});

fs.writeFileSync('src/app/products/page.tsx', page);
console.log('Successfully updated src/app/products/page.tsx with the new image filenames!');
