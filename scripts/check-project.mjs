import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
const root=path.resolve(import.meta.dirname,'..');
const required=['src/App.jsx','src/styles.css','src/main.jsx','src/components/reactbits/SpotlightCard.jsx','src/components/reactbits/GradientText.jsx','src/components/reactbits/Magnet.jsx','public/assets/hero-ceramics.webp','public/assets/ceramic-collection.webp','public/assets/ceramic-detail.webp','public/assets/architectural-viz.webp','public/assets/architectural-interior.webp','scripts/build.mjs','vexora.config.json'];
let pass=true;
for(const file of required){const ok=existsSync(path.join(root,file)); console.log((ok?'OK':'MISSING')+'  '+file);if(!ok)pass=false;}
const app=readFileSync(path.join(root,'src/App.jsx'),'utf8');
for(const marker of ['@gsap/react','ScrollTrigger','SpotlightCard','GradientText','Magnet','vexora_lang']){const ok=app.includes(marker);console.log((ok?'OK':'MISSING')+' integration '+marker);if(!ok)pass=false;}
if(!readFileSync(path.join(root,'index.html'),'utf8').includes('lang="fa"')){console.error('Default language must be fa');pass=false;}
if (app.includes('<form ')) { console.error('Contact form must be removed.');pass=false;}
process.exitCode=pass?0:1;
