import { readFileSync, existsSync, mkdirSync, readdirSync, rmSync, realpathSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const config=JSON.parse(readFileSync(path.join(root,'vexora.config.json'),'utf8'));
const args=process.argv.slice(2);
const option=args.find(x=>x.startsWith('--out='));
const idx=args.indexOf('--out');
if (idx>=0 && !args[idx+1]) throw new Error('--out needs a path');
const selected=option?.slice('--out='.length) || (idx>=0 ? args[idx+1] : null) || process.env.VEXORA_BUILD_DIR || config.outputDir;
const outDir=path.resolve(root, !selected || selected==='auto' ? `../${path.basename(root)}-build` : selected);
const home=process.env.HOME || process.env.USERPROFILE || '';
const rootReal=realpathSync(root);
const parts=path.parse(outDir);
if (outDir===parts.root || outDir===rootReal || outDir===home || outDir.startsWith(rootReal+path.sep)) {
  throw new Error(`Unsafe output directory: ${outDir}. Choose a separate directory outside the source project.`);
}
const vite=path.join(root,'node_modules/vite/bin/vite.js');
if (!existsSync(vite)) throw new Error('Vite is not installed. Run npm install first; no existing build directory was changed.');
const preserve=new Set([...(config.preserve || []),'.git','.github']);
if (existsSync(outDir)) {
  for (const name of readdirSync(outDir)) {
    if (!preserve.has(name)) rmSync(path.join(outDir,name),{recursive:true,force:true});
  }
} else mkdirSync(outDir,{recursive:true});
// Keep .git and repository metadata in a sibling Git checkout while refreshing the website build.
console.log(`[VEXORA] Building to: ${outDir}`);
const result=spawnSync(process.execPath,[vite,'build'],{cwd:root,env:{...process.env,VEXORA_OUTPUT_DIR:outDir},stdio:'inherit'});
if(result.error) throw result.error;
if(result.status!==0) process.exit(result.status||1);
console.log(`[VEXORA] Build complete: ${outDir}`);
