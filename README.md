# VEXORA — Design & Digital Development

VEXORA's independent creative portfolio, redesigned as a content-led, responsive editorial website. Built with **React 19, Vite, unmodified official React Bits source components, GSAP / ScrollTrigger** and Lucide icons.

## Site and source

- **Source:** https://github.com/Vexora-Design/pages-source
- **Published GitHub Pages repo:** https://github.com/Vexora-Design/vexora-design.github.io
- **Site:** https://vexora-design.github.io/ (or the repository's configured CNAME domain)

No files or workflows in `emadgh/emadgh.github.io` are involved.

## Local development

```bash
npm install
npm run dev
```

### Independent build directory

By default `npm run build` writes to a sibling folder named `<source-folder>-build`.

```bash
npm run build
npm run build -- --out ../vexora-design.github.io
npm run build -- --out "D:/Sites/VEXORA-build"
```

You may alternatively set `VEXORA_BUILD_DIR` or `outputDir` in `vexora.config.json`. Built website files overwrite older built files in the output directory **except preserved metadata** (`.git`, `.github`, `CNAME`, README, etc.). Do not use a destination containing unrelated work.

## Languages and typography

Persian (`fa`, `rtl`) is the default. Language changes persist for one year in a `SameSite=Lax` cookie named `vexora_lang` and toggle `document.documentElement.dir` and `lang`. English is LTR. The CSS prioritizes Yekan; place your properly licensed `Yekan.woff2` in `public/fonts`. Until then `Vazirmatn` is used as fallback. Proprietary fonts are not bundled.

## Content integrity

The website describes real service capabilities: porcelain/tile surface graphics, catalog and mockup design, software development and process automation, 3D modeling/architectural visualization, interactive tools, and game development. The portfolio cards are **illustrative directions, not representations of completed client engagements**. Concept imagery and demo interfaces are labeled as such.

## Motion stack

Actual official React Bits source files live in `src/components/reactbits/`: `SpotlightCard`, `GradientText`, and `Magnet`. They have not been rebuilt as lookalikes. GSAP and the official ScrollTrigger and `@gsap/react` integration animate section entrances and provide restrained hero parallax. `prefers-reduced-motion` is respected.

## Deployment

1. Push new source to `Vexora-Design/pages-source/main`.
2. The separate build repository contains a workflow `rebuild-vexora.yml` that builds directly from the public source repository and commits the result to its **own** `main`. Trigger it from **Actions → Rebuild VEXORA from official source → Run workflow** when necessary.
3. To automate deployments on every source push, configure `VEXORA_DEPLOY_TOKEN` on the source repo with `Contents: read/write` access to the build repository, as described in `.github/workflows/publish-pages.yml`.
4. GitHub Pages should serve `/ (root)` from `main`.

The existing `CNAME` file in the published repository is preserved.

## Design reference

UI/UX review follows [UI UX Pro Max Skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill), especially the Creative Agency / Portfolio profiles, storytelling landing layout, responsive UX guidance, keyboard accessibility, reduced-motion guidance and standard GSAP scroll reveals. See `design-system/MASTER.md`.
## Color direction (November 2026)

The site uses a **grayscale UI foundation** (backgrounds, surfaces, typography and footer), **full-color project photos**, and **colored official React Bits WebGL backgrounds**: warm/cool SideRays in the hero, violet-to-blue GradientBlinds behind the detail manifesto and violet/azure GhostFibers behind direct contact. Action states use restrained warm amber for CTAs and deep blue for selected filters. No grayscale image filtering is applied.

The previous contact form is removed and replaced with direct telephone, email, Telegram, and Instagram links. The official original React Bits sources (SideRays, GradientBlinds and GhostFibers) in `src/components/reactbits/` remain unmodified; only component properties and the surrounding composition styles are tailored. GSAP handles the page/scroll motion as before.

GitHub Pages build output must remain in the separate `Vexora-Design/vexora-design.github.io` repository. Personal `emadgh/emadgh.github.io` is never used.
