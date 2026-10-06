const fs = require('fs');
let content = fs.readFileSync('src/components/sections/NewHomepage.tsx', 'utf8');
const lines = content.split('\n');

// We want to remove from line 382 to line 467 (inclusive). 
// Since arrays are 0-indexed, this is lines[381] to lines[466].
const newLines = [
  ...lines.slice(0, 381),
  ...lines.slice(467)
];

fs.writeFileSync('src/components/sections/NewHomepage.tsx', newLines.join('\n'));
console.log('Removed OUR WORK section.');
