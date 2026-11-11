# VEXORA — Editorial Material Design System v2.0

Reference: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill

## Verified decisions from the skill

- `products.csv` identifies **Creative Agency** and **Portfolio/Personal** as appropriate for storytelling-driven portfolios, with full RTL compatibility, strong editorial hierarchy, motion-driven interactions, and focus on work.
- `landing.csv` suggests progressive section storytelling with a readable baseline independent of animation. Mobile should simplify motion.
- `motion.csv` recommends official GSAP ScrollTrigger for staggered reveal, an `@gsap/react` context for cleanup, and reduced-motion overrides.
- `colors.csv` entries for Portfolio and Architecture support refined monochrome/industrial neutrals and restrained accent color.
- The Persian-first requirement takes precedence over Latin font guidance.

## Art direction

**Design is in the details.** An understated, confident editorial portfolio that treats material design and software development as equally serious practices. No speculative awards, fake testimonials, or random stock desks.

### Semantic palette
| Token | Value | Purpose |
|---|---|---|
| Paper | #f8f7f2 | Main canvas |
| Stone | #ecece5 | Portfolio canvas |
| Ink | #1a211d | Main typography |
| Forest | #151a18 | Contrast sections |
| Deep panel | #202723 | Cards and inputs |
| Mint | #b4dbbd | Primary call to action |
| Pine | #526f59 | Text accent |
| Muted | #667069 | Secondary body |
| Divider | #d8dcd4 | Grouping |

Typography: licensed **Yekan** (if provided), **Vazirmatn** fallback for Persian, **Manrope / DM Sans** for Latin.

### Modules

1. Hero with an actual ceramic showroom visual, clear positioning and CTA.
2. About: a purposeful bridge between design, technology and manufacturing.
3. Four expertise rows explaining concrete deliverables and constraints.
4. Selected-direction portfolio: label demo/concept media honestly; original app-dashboard illustration and mesh graphic.
5. Short manifesto, followed by three-stage project process.
6. Direct contact/inquiry with an honest downloadable fallback when no mail recipient configured.
7. Fixed header, mobile menu, optional bilingual content, language cookie, reduced-motion accommodations.

### Official libraries

The project imports unmodified source components from React Bits: `SpotlightCard`, `Magnet`, and `GradientText`. Animation comes from official npm packages `gsap`, `@gsap/react`, and `ScrollTrigger`.

### Quality requirements

- Contrast at least 4.5:1 on ordinary body content; visible keyboard focus
- Touch controls 44px or larger where practical
- RTL responsive at 375, 768, 1024 and 1440 px
- Stable layout via image aspect ratio, WebP optimization and lazy loading
- All primary interactions work by click/tap, not hover alone
- Escape closes navigation/modal; modal focus stays inside and returns to trigger
- `prefers-reduced-motion` disables decorative motion and keeps content readable
- Primary content is factual and does not claim conceptual images are delivered client work.
