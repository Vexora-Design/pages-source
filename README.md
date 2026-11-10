# VEXORA — Official source

Portfolio for VEXORA, an independent multidisciplinary design and digital development practice.

**Tech:** React 19, Vite, original React Bits components, GSAP / ScrollTrigger.

**Live site:** https://vexora-design.github.io/

## Local development

```bash
npm install
npm run dev
```

The default language is Persian (RTL). Language selection is stored in the `vexora_lang` cookie.

## Separate build output

```bash
npm run build
npm run build -- --out ../vexora-design.github.io
npm run build -- --out "D:/Websites/vexora-build"
```

Default destination is a sibling folder: if source lives in `vexora-source/`, the build goes to `vexora-source-build/`. Configure `outputDir` in `vexora.config.json`, or use `VEXORA_BUILD_DIR`. A build replaces generated content but preserves `.git`, `.github`, `CNAME`, and README where present. Do not point this at unrelated folders.

## Repositories

- **Source:** [Vexora-Design/pages-source](https://github.com/Vexora-Design/pages-source)
- **Built static website:** [Vexora-Design/vexora-design.github.io](https://github.com/Vexora-Design/vexora-design.github.io)

For manual publication, clone both repositories into sibling directories, build into the deployment checkout, then commit and push the build repository:

```bash
cd pages-source
npm install
npm run build -- --out ../vexora-design.github.io
cd ../vexora-design.github.io
git add -A
git commit -m "Update VEXORA website"
git push origin main
```

The `publish-pages.yml` workflow can also build and push to the separate repository, once `VEXORA_DEPLOY_TOKEN` is configured as a GitHub Actions secret with **Contents: read/write** access to the deployment repository. This workflow never pushes to `emadgh/emadgh.github.io`.

## Fonts and content

Licensed `Yekan.woff2` can be placed in `public/fonts/`; the site falls back to Vazirmatn. Font files are not redistributed here. The imagery and portfolio samples are conceptual demonstrations, not client case studies.
