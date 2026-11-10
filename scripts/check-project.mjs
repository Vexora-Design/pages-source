import { existsSync } from 'node:fs';
import path from 'node:path';
const root = path.resolve(import.meta.dirname, '..');
const mandatory = ['src/App.jsx','src/styles.css','src/components/reactbits/SpotlightCard.jsx','src/components/reactbits/GradientText.jsx','src/components/reactbits/Magnet.jsx','public/assets/hero.webp','public/assets/ceramic.webp','public/assets/software.webp','public/assets/architecture.webp','public/assets/digital.webp','public/assets/gamedev.webp'];
let passed = true;
for(const f of mandatory){const exists = existsSync(path.join(root,f)); console.log(`${exists ? 'OK' : 'MISSING'}  ${f}`); if(!exists) passed = false;}
process.exitCode = passed ? 0 : 1;
