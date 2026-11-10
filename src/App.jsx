import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ArrowRight, ArrowDown, ArrowLeft, Menu, X, Layers3, Code2, Box, Sparkles, Gamepad2, Check, Copy, Send, Download, MoveUpRight, MousePointer2, Instagram, ExternalLink } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SpotlightCard from './components/reactbits/SpotlightCard.jsx';
import GradientText from './components/reactbits/GradientText.jsx';
import Magnet from './components/reactbits/Magnet.jsx';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const A = `${import.meta.env.BASE_URL}assets/`;
const SERVICES = [
  { id: 'ceramic', num: '01', name: { en: 'Ceramic & Surface Design', fa: 'طراحی سرامیک و سطوح' }, summary: { en: 'Surfaces with character. From porcelain collections to production-ready digital patterns.', fa: 'از طرح‌های دیجیتال کاشی و پرسلان تا مجموعه‌های آماده تولید با هویت بصری منحصربه‌فرد.' }, image: A + 'ceramic.webp', tags: ['Surface design', 'Porcelain', 'Patterns'], icon: Layers3, size: 'large' },
  { id: 'software', num: '02', name: { en: 'Software Development', fa: 'توسعه نرم‌افزار' }, summary: { en: 'Thoughtful web experiences, bespoke tools and automations built around real workflows.', fa: 'اپلیکیشن‌های تحت وب، ابزارهای اختصاصی و اتوماسیون بر پایه نیازهای واقعی کسب‌وکار.' }, image: A + 'software.webp', tags: ['React', 'Python', 'Automation'], icon: Code2, size: 'normal' },
  { id: 'architecture', num: '03', name: { en: '3D & Architectural Visualization', fa: 'طراحی سه‌بعدی و ویژوالایزیشن معماری' }, summary: { en: 'Spaces, objects and environments rendered with atmosphere, detail and intention.', fa: 'مدل‌سازی و رندر فضاها، محصولات و محیط‌ها با توجه دقیق به نور، متریال و جزئیات.' }, image: A + 'architecture.webp', tags: ['3D design', 'Archviz', 'Rendering'], icon: Box, size: 'normal' },
  { id: 'interactive', num: '04', name: { en: 'Creative Digital Experiences', fa: 'تجربه‌های دیجیتال خلاقانه' }, summary: { en: 'Interactive interfaces, procedural systems and experimental digital products.', fa: 'رابط‌های تعاملی، سیستم‌های پروسیجرال و محصولات دیجیتال خلاقانه و تجربی.' }, image: A + 'digital.webp', tags: ['Creative coding', 'UI / UX', 'Tools'], icon: Sparkles, size: 'normal' },
  { id: 'games', num: '05', name: { en: 'Game Design & Development', fa: 'طراحی و توسعه بازی' }, summary: { en: 'World-building, real-time 3D environments, gameplay systems and technical art.', fa: 'خلق دنیای بازی، محیط‌های سه‌بعدی بلادرنگ، سیستم‌های گیم‌پلی و تکنیکال آرت.' }, image: A + 'gamedev.webp', tags: ['Unity', 'World building', 'Real-time'], icon: Gamepad2, size: 'normal' }
];

const PROJECTS = [
  { id: 'surface', category: 'ceramic', title: { en: 'Surface Language', fa: 'زبان سطوح' }, type: { en: 'Ceramic Design / Concept Study', fa: 'طراحی سرامیک / نمونه مفهومی' }, description: { en: 'An exploration of material, veining, finish and the subtle expression of premium porcelain surfaces.', fa: 'مطالعه متریال، رگه‌ها، فینیش و هویت بصری سطوح پرسلانی لوکس.' }, image: A + 'ceramic.webp', count: '01 / 05' },
  { id: 'digital-workflow', category: 'software', title: { en: 'Systems That Flow', fa: 'سیستم‌های روان و هوشمند' }, type: { en: 'Software / Interface Concept', fa: 'نرم‌افزار / کانسپت رابط کاربری' }, description: { en: 'Custom dashboards, workflow automation and precise digital tooling designed around people.', fa: 'داشبوردهای سفارشی، اتوماسیون گردش کار و ابزارهای دیجیتال دقیق و کاربرمحور.' }, image: A + 'software.webp', count: '02 / 05' },
  { id: 'arch-light', category: 'architecture', title: { en: 'Architecture in Light', fa: 'معماری در نور' }, type: { en: '3D / Architectural Concept', fa: 'سه‌بعدی / کانسپت معماری' }, description: { en: 'A study in architectural form, cinematic lighting and photoreal material definition.', fa: 'مطالعه فرم معماری، نورپردازی سینمایی و متریال‌پردازی واقع‌گرایانه.' }, image: A + 'architecture.webp', count: '03 / 05' },
  { id: 'creative-tech', category: 'interactive', title: { en: 'Beyond the Interface', fa: 'فراتر از رابط کاربری' }, type: { en: 'Creative Technology / Concept', fa: 'فناوری خلاق / نمونه مفهومی' }, description: { en: 'Prototyping experimental interactions where code, geometry and design converge.', fa: 'نمونه‌سازی تعاملات خلاق در نقطه تلاقی کدنویسی، هندسه و طراحی.' }, image: A + 'digital.webp', count: '04 / 05' },
  { id: 'worlds', category: 'games', title: { en: 'Worlds in the Making', fa: 'جهان‌هایی در حال شکل‌گیری' }, type: { en: 'Game Development / Environment Concept', fa: 'بازی‌سازی / کانسپت محیط' }, description: { en: 'A grounded environment study focusing on believable spaces, scale and real-time level composition.', fa: 'مطالعه فضاسازی واقع‌گرایانه بازی با تمرکز بر مقیاس، مسیر حرکت و ترکیب‌بندی محیط.' }, image: A + 'gamedev.webp', count: '05 / 05' }
];

const UI = {
  en: {
    nav: ['Home', 'Expertise', 'Work', 'Approach', 'Contact'], status: 'Independent creative practice · Available for projects',
    heroKicker: 'A MULTIDISCIPLINARY CREATIVE PRACTICE', hero1: 'Designing', hero2: 'what’s', hero3: 'next.',
    heroDesc: 'Where design, technology and precise execution work as one. From ceramic surfaces to spatial experiences and bespoke software.',
    explore: 'Explore our work', discover: 'Discover VEXORA', heroNote: 'DESIGN / DEVELOPMENT / VISUALIZATION', scroll: 'SCROLL TO EXPLORE',
    stripe: ['Ceramic Design', 'Software Development', '3D Visualization', 'Interactive Experiences', 'Creative Technology'],
    introEyebrow: '01 — WHAT WE DO', introA: 'Different disciplines.', introB: 'One creative vision.', introBody: 'We move fluently between the tactile and the digital. Combining an eye for aesthetics with a practical understanding of how things are made, built and experienced.',
    serviceTitleA: 'What we', serviceTitleB: 'create.', serviceCaption: 'EXPERTISE / SERVICES', serviceMore: 'EXPLORE DISCIPLINE',
    projectsLabel: '02 — SELECTED EXPLORATIONS', projectsTitleA: 'A closer', projectsTitleB: 'look.', projectDesc: 'A curated glimpse into our thinking across design and development. Images in this demo are conceptual visualizations—not client project photographs.',
    tabs: [['all', 'All work'], ['ceramic', 'Surfaces'], ['software', 'Software'], ['architecture', '3D & Archviz'], ['interactive', 'Digital'], ['games', 'Games']], view: 'VIEW STUDY', modalLabel: 'CONCEPT STUDY', close: 'Close details', projectNote: 'Conceptual showcase imagery — replace with real project assets as the portfolio grows.',
    philosophyLabel: '03 — OUR APPROACH', philosophy1: 'Curiosity meets', philosophy2: 'craft.', philosophyBody: 'We care about the details you notice—and the invisible systems that make them possible. Every project starts with listening, exploring and finding the right balance of form and function.',
    approach: [ ['Discover', 'Understand the idea, the audience and the constraints.'], ['Design', 'Explore visual directions, prototypes and technical possibilities.'], ['Develop', 'Refine, build and deliver with care for the details.'] ],
    bridge: 'ONE CREATIVE MINDSET · MANY POSSIBILITIES',
    contactLabel: '04 — LET’S COLLABORATE', contactA: 'Have an idea?', contactB: 'Let’s make it real.', contactDesc: 'Looking for design, visualization or a custom digital solution? Tell us a little about what you have in mind.',
    formName: 'Your name', formEmail: 'Your email', formProject: 'Tell us about the project', namePlaceholder: 'How should we call you?', emailPlaceholder: 'you@example.com', projectPlaceholder: 'A few words about what you’re planning...', send: 'Prepare inquiry', emailReady: 'Your email application will open with a prepared message.', downloaded: 'Your project brief has been downloaded. Add a contact email in .env to enable direct inquiries.',
    footerCaption: 'Design & Digital Development', footerNote: 'Independent design practice. Crafted with care.', top: 'BACK TO TOP', language: 'FA', currentYear: '© 2026 VEXORA', notice: 'CONCEPT VISUALS / 2026'
  },
  fa: {
    nav: ['خانه', 'تخصص‌ها', 'نمونه‌کارها', 'رویکرد ما', 'ارتباط'], status: 'فعالیت خلاق مستقل · آماده همکاری روی پروژه‌های جدید',
    heroKicker: 'طراحی و توسعه در چند تخصص', hero1: 'طراحی', hero2: 'برای', hero3: 'فردا.',
    heroDesc: 'جایی که طراحی، فناوری و اجرا به هم می‌رسند؛ از طراحی سطوح سرامیکی تا تجربه‌های سه‌بعدی و نرم‌افزارهای اختصاصی.',
    explore: 'مشاهده نمونه‌کارها', discover: 'آشنایی با وکسورا', heroNote: 'طراحی / توسعه / تجسم سه‌بعدی', scroll: 'اسکرول برای کشف بیشتر',
    stripe: ['طراحی سرامیک', 'توسعه نرم‌افزار', 'تجسم سه‌بعدی', 'طراحی تعاملی', 'فناوری خلاق'],
    introEyebrow: '۰۱ — درباره فعالیت‌های ما', introA: 'تخصص‌های متفاوت.', introB: 'یک نگاه خلاق.', introBody: 'از دنیای متریال و محصول تا طراحی دیجیتال حرکت می‌کنیم. زیبایی‌شناسی را با درکی عملی از تولید، توسعه و تجربه کاربری ترکیب می‌کنیم.',
    serviceTitleA: 'آنچه', serviceTitleB: 'خلق می‌کنیم.', serviceCaption: 'زمینه‌های فعالیت / خدمات', serviceMore: 'مشاهده تخصص',
    projectsLabel: '۰۲ — گزیده‌ای از ایده‌ها', projectsTitleA: 'نگاهی', projectsTitleB: 'نزدیک‌تر.', projectDesc: 'نمایشی از مسیر فکری ما در طراحی و توسعه. تصاویر این نسخه، رندرهای مفهومی هستند و عکس پروژه‌های واقعی مشتریان نیستند.',
    tabs: [['all', 'همه'], ['ceramic', 'سرامیک'], ['software', 'نرم‌افزار'], ['architecture', 'سه‌بعدی و معماری'], ['interactive', 'دیجیتال'], ['games', 'بازی‌سازی']], view: 'مشاهده جزئیات', modalLabel: 'نمونه مفهومی', close: 'بستن جزئیات', projectNote: 'این تصاویر مفهومی هستند و می‌توان با تصاویر واقعی پروژه‌ها جایگزینشان کرد.',
    philosophyLabel: '۰۳ — رویکرد ما', philosophy1: 'کنجکاوی', philosophy2: 'در کنار مهارت.', philosophyBody: 'به جزئیاتی توجه می‌کنیم که دیده می‌شوند، و سیستم‌هایی که بی‌سروصدا پشت آن‌ها کار می‌کنند. هر پروژه با شناخت مسئله، جست‌وجو و رسیدن به تعادل فرم و عملکرد آغاز می‌شود.',
    approach: [ ['شناخت', 'درک ایده، مخاطب و محدودیت‌های پروژه.'], ['طراحی', 'بررسی مسیرهای بصری، نمونه‌سازی و امکان‌سنجی فنی.'], ['توسعه', 'پیاده‌سازی، اصلاح و تحویل با توجه به جزئیات.'] ],
    bridge: 'یک رویکرد خلاق · فرصت‌های بی‌پایان',
    contactLabel: '۰۴ — همکاری با ما', contactA: 'ایده‌ای دارید؟', contactB: 'واقعی‌اش کنیم.', contactDesc: 'برای طراحی، رندر سه‌بعدی یا ساخت یک راهکار دیجیتال اختصاصی، کمی درباره پروژه‌تان بگویید.',
    formName: 'نام شما', formEmail: 'ایمیل شما', formProject: 'درباره پروژه بنویسید', namePlaceholder: 'چطور صداتون کنیم؟', emailPlaceholder: 'you@example.com', projectPlaceholder: 'چند خط درباره ایده و نیازتان...', send: 'آماده‌سازی درخواست', emailReady: 'نرم‌افزار ایمیل با متن آماده باز می‌شود.', downloaded: 'شرح پروژه دریافت شد. برای ارسال مستقیم ایمیل، آدرس تماس را در فایل env تنظیم کنید.',
    footerCaption: 'طراحی و توسعه دیجیتال', footerNote: 'فعالیت مستقل طراحی و توسعه، با توجه به جزئیات.', top: 'بازگشت به بالا', language: 'EN', currentYear: '© ۲۰۲۶ وکسورا', notice: 'تصاویر مفهومی / ۲۰۲۶'
  }
};

function Brand({ onClick, compact = false }) {
  return <a href="#home" className="brand" aria-label="VEXORA home" onClick={onClick}>
    <svg className="brand-mark" width="35" height="35" viewBox="0 0 42 42" fill="none" aria-hidden="true">
      <path d="M3.5 8h10l7.6 15.4L28.8 8h10L24.8 34H17L3.5 8Z" fill="currentColor" />
      <path d="M23.2 8h10.1L20.9 30.6l-4.9-9.3L23.2 8Z" fill="#8AF0CF" />
    </svg>
    {!compact && <span className="brand-word">VEXORA<span className="brand-dot">®</span></span>}
  </a>;
}

function IconCircle({ children, className = '' }) {
  return <span className={'round-icon ' + className}>{children}</span>;
}

function App() {
  const rootRef = useRef(null);
  const [lang, setLang] = useState(() => {
    if (typeof document === 'undefined') return 'fa';
    const found = document.cookie.split('; ').find(item => item.startsWith('vexora_lang='));
    const saved = found?.split('=')[1];
    return saved === 'en' ? 'en' : 'fa';
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [category, setCategory] = useState('all');
  const [project, setProject] = useState(null);
  const [toast, setToast] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [contact, setContact] = useState({ name: '', email: '', message: '' });
  const t = UI[lang];
  const filteredProjects = category === 'all' ? PROJECTS : PROJECTS.filter(item => item.category === category);
  const emailConfigured = Boolean(import.meta.env.VITE_CONTACT_EMAIL);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    document.body.dataset.lang = lang;
    document.cookie = `vexora_lang=${lang}; Path=/; Max-Age=31536000; SameSite=Lax${window.location.protocol === 'https:' ? '; Secure' : ''}`;
    return undefined;
  }, [lang]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!project && !menuOpen) return;
    const onKey = e => { if (e.key === 'Escape') { setProject(null); setMenuOpen(false); } };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [project, menuOpen]);

  useEffect(() => {
    document.body.classList.toggle('locked', Boolean(project || menuOpen));
    return () => document.body.classList.remove('locked');
  }, [project, menuOpen]);

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
    timeline.fromTo('.hero-eyebrow', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: .65 }, .1)
      .fromTo('.hero-title .line', { opacity: 0, y: 90, rotateX: -8 }, { opacity: 1, y: 0, rotateX: 0, duration: 1.15, stagger: .13 }, .18)
      .fromTo('.hero-desc', { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: .85 }, .67)
      .fromTo('.hero-actions', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: .7 }, .8)
      .fromTo('.hero-info', { opacity: 0, x: 22 }, { opacity: 1, x: 0, duration: .8 }, .7);

    gsap.utils.toArray('[data-reveal]').forEach(el => {
      gsap.fromTo(el, { autoAlpha: 0, y: 42 }, {
        autoAlpha: 1, y: 0, duration: 1.0, ease: 'power3.out', clearProps: 'transform',
        scrollTrigger: { trigger: el, start: 'top 90%', once: true }
      });
    });
    gsap.to('.hero-photo', { yPercent: 12, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
    gsap.to('.studio-image img', { yPercent: 9, ease: 'none', scrollTrigger: { trigger: '.studio-image', start: 'top bottom', end: 'bottom top', scrub: true } });
    ScrollTrigger.refresh();
  }, { scope: rootRef, dependencies: [lang, category], revertOnUpdate: true });

  const nav = [ ['#home', t.nav[0]], ['#services', t.nav[1]], ['#work', t.nav[2]], ['#approach', t.nav[3]], ['#contact', t.nav[4]] ];
  const notify = msg => { setToast(msg); window.setTimeout(() => setToast(''), 4700); };
  const handleContact = e => {
    e.preventDefault();
    const subject = `VEXORA inquiry — ${contact.name}`;
    const body = `Name: ${contact.name}\nEmail: ${contact.email}\n\nProject:\n${contact.message}`;
    if (emailConfigured) {
      window.location.href = `mailto:${import.meta.env.VITE_CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      notify(t.emailReady);
    } else {
      const blob = new Blob([`${subject}\n\n${body}`], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'vexora-project-brief.txt';
      link.click();
      window.setTimeout(() => URL.revokeObjectURL(url), 1000);
      notify(t.downloaded);
    }
  };

  return <div ref={rootRef} className="site-shell">
    <header className={'site-header ' + (scrolled ? 'site-header-scrolled' : '')}>
      <div className="header-inner container">
        <Brand onClick={() => setMenuOpen(false)} />
        <nav className="nav-desktop" aria-label="Main navigation">
          {nav.map(([href, label], i) => <a key={href} href={href} className={i === 0 ? 'nav-active' : ''}>{label}</a>)}
        </nav>
        <div className="header-right">
          <button className="lang-btn" onClick={() => setLang(v => v === 'en' ? 'fa' : 'en')} aria-label={lang === 'en' ? 'Switch to Persian' : 'Switch to English'}>{t.language}<span className="lang-indicator" /></button>
          <a className="contact-nav" href="#contact"><span>{t.nav[4]}</span><ArrowUpRight size={16} /></a>
          <button className="mobile-toggle" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(v => !v)}>{menuOpen ? <X size={23}/> : <Menu size={23}/>}</button>
        </div>
      </div>
    </header>
    {menuOpen && <div className="mobile-menu">
      <nav aria-label="Mobile navigation">{nav.map(([href, label], i) => <a href={href} key={href} onClick={() => setMenuOpen(false)}><span className="mobile-index">0{i + 1}</span>{label}<ArrowUpRight size={21}/></a>)}</nav>
      <p>VEXORA® — Design & Digital Development</p>
    </div>}

    <main>
      <section id="home" className="hero">
        <div className="hero-photo" role="img" aria-label="Modern architectural visualization of a contemporary residence" />
        <div className="hero-darken" />
        <div className="hero-grain" />
        <div className="hero-content container">
          <div className="hero-eyebrow"><span className="blink-dot" />{t.heroKicker}</div>
          <h1 className="hero-title"><span className="line">{t.hero1}</span><span className="line">{t.hero2}</span><span className="line accent-line"><GradientText colors={['#c5ffdf', '#77dbd0', '#b8e8ff', '#c5ffdf']} animationSpeed={8} variant="linear" glow={.12}>{t.hero3}</GradientText></span></h1>
          <p className="hero-desc">{t.heroDesc}</p>
          <div className="hero-actions">
            <Magnet padding={55} magnetStrength={5} maxOffset={12}><a className="button button-primary" href="#work">{t.explore}<ArrowUpRight size={18} /></a></Magnet>
            <a className="button button-text" href="#services">{t.discover}<ArrowDown size={16} /></a>
          </div>
        </div>
        <div className="hero-bottom container"><div className="hero-scroll"><span className="scroll-rail"><span /></span>{t.scroll}</div><div className="hero-info"><span className="vertical-divider" />{t.heroNote}<span className="hero-info-number">001 / 005</span></div></div>
        <div className="hero-side-label">VEXORA — 2026</div>
      </section>

      <div className="ticker" aria-hidden="true"><div className="ticker-track">{[...t.stripe, ...t.stripe, ...t.stripe, ...t.stripe].map((item, index) => <span key={index}><i>✳</i>{item}</span>)}</div></div>

      <section id="services" className="intro-section section-pad">
        <div className="container">
          <div className="intro-top section-line"><span className="micro-label" data-reveal>{t.introEyebrow}</span><span className="micro-side" data-reveal>VEXORA® / 01</span></div>
          <div className="intro-grid">
            <h2 className="intro-title" data-reveal>{t.introA}<br/><span>{t.introB}</span></h2>
            <div className="intro-side" data-reveal><span className="small-spark">✳</span><p>{t.introBody}</p><div className="intro-practice"><span className="line-dot" /><span>{t.status}</span></div></div>
          </div>
          <div className="services-heading section-line"><div><span className="micro-label">{t.serviceCaption}</span><h2 data-reveal>{t.serviceTitleA} <span className="muted">{t.serviceTitleB}</span></h2></div><span className="service-count">[ 05 ]</span></div>
          <div className="services-grid">
            {SERVICES.map(item => <SpotlightCard key={item.id} className={'service-card ' + item.size} spotlightColor="#77d9c1" spotlightSize={290} intensity={.09} borderGlow={.36} proximity={50} role="link" tabIndex={0} aria-label={`${t.serviceMore}: ${item.name[lang]}`} onClick={() => { setCategory(item.id); document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' }); }} onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setCategory(item.id); document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' }); } }}>
              <div className="service-card-inner" data-reveal>
                <div className="service-card-image"><img src={item.image} loading="lazy" alt={item.name[lang]} /></div>
                <div className="service-card-shade" />
                <div className="service-card-top"><span className="service-number">{item.num} / 05</span><IconCircle><item.icon size={19} strokeWidth={1.6}/></IconCircle></div>
                <div className="service-card-content"><div className="service-tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div><h3>{item.name[lang]}</h3><p>{item.summary[lang]}</p><span className="service-more">{t.serviceMore}<ArrowUpRight size={16}/></span></div>
              </div>
            </SpotlightCard>)}
          </div>
        </div>
      </section>

      <section id="work" className="work-section section-pad">
        <div className="container">
          <div className="section-line"><span className="micro-label" data-reveal>{t.projectsLabel}</span><span className="micro-side" data-reveal>VEXORA® / 02</span></div>
          <div className="work-heading"><h2 data-reveal>{t.projectsTitleA}<br/><em>{t.projectsTitleB}</em></h2><p data-reveal>{t.projectDesc}</p></div>
          <div className="work-filters" role="group" aria-label="Filter portfolio projects">{t.tabs.map(([id, label]) => <button type="button" key={id} onClick={() => setCategory(id)} aria-pressed={category === id} className={'filter-btn ' + (category === id ? 'selected' : '')}>{label}</button>)}</div>
          <div className={'work-grid ' + (filteredProjects.length === 1 ? 'one-result' : '')}>
            {filteredProjects.map((item, idx) => <button data-reveal type="button" className={'work-card work-card-' + idx} key={item.id} onClick={() => setProject(item)} aria-label={`${t.view}: ${item.title[lang]}`}>
              <div className="work-media"><img src={item.image} alt={item.title[lang]} loading="lazy"/><div className="work-hover"><span>{t.view}</span><IconCircle><ArrowUpRight size={22}/></IconCircle></div><span className="work-counter">{item.count}</span></div>
              <div className="work-meta"><div><p>{item.type[lang]}</p><h3>{item.title[lang]}</h3></div><ArrowUpRight className="work-arrow" size={24} strokeWidth={1.4}/></div>
            </button>)}
          </div>
          <div className="work-disclaimer"><span className="asterisk">✳</span>{t.notice}</div>
        </div>
      </section>

      <section id="approach" className="approach-section section-pad">
        <div className="container">
          <div className="section-line"><span className="micro-label" data-reveal>{t.philosophyLabel}</span><span className="micro-side" data-reveal>VEXORA® / 03</span></div>
          <div className="approach-grid"><div className="approach-copy" data-reveal><span className="approach-star">✳</span><h2>{t.philosophy1}<br/><GradientText colors={['#f7f4ee','#8fe0cc','#f7f4ee']} animationSpeed={7}>{t.philosophy2}</GradientText></h2><p>{t.philosophyBody}</p><div className="approach-mini"><span className="active-dot" /> {t.bridge}</div></div><div className="studio-image" data-reveal><img src={A + 'hero.webp'} loading="lazy" alt="Photorealistic architectural scene"/><div className="image-caption"><span>V / X</span><span>FORM + FUNCTION</span></div></div></div>
          <div className="process-grid">{t.approach.map(([name, text], index) => <div className="process-step" key={name} data-reveal><span className="step-num">0{index + 1} <span>/</span></span><h3>{name}</h3><p>{text}</p>{index !== 2 && <ArrowRight size={21} strokeWidth={1.3} className="process-arrow" />}</div>)}</div>
        </div>
      </section>

      <section id="contact" className="contact-section section-pad">
        <div className="contact-radial" />
        <div className="container contact-wrap">
          <div className="section-line"><span className="micro-label" data-reveal>{t.contactLabel}</span><span className="micro-side" data-reveal>VEXORA® / 04</span></div>
          <div className="contact-grid"><div className="contact-copy"><div className="contact-glyph" data-reveal>✳</div><h2 data-reveal>{t.contactA}<br/><span>{t.contactB}</span></h2><p data-reveal>{t.contactDesc}</p><div className="contact-availability" data-reveal><span className="blink-dot" />{t.status}</div></div>
            <form className="contact-form" onSubmit={handleContact} data-reveal>
              <div className="form-row"><label>{t.formName}<input value={contact.name} onChange={e => setContact({ ...contact, name: e.target.value })} placeholder={t.namePlaceholder} required maxLength="90"/></label><label>{t.formEmail}<input type="email" value={contact.email} onChange={e => setContact({ ...contact, email: e.target.value })} placeholder={t.emailPlaceholder} required maxLength="180"/></label></div>
              <label>{t.formProject}<textarea rows={5} value={contact.message} onChange={e => setContact({ ...contact, message: e.target.value })} placeholder={t.projectPlaceholder} required maxLength="3000"/></label>
              <button type="submit" className="button button-primary submit-button">{t.send}{emailConfigured ? <Send size={18}/> : <Download size={18}/>}</button>
            </form>
          </div>
        </div>
      </section>
    </main>

    <footer className="footer"><div className="container"><div className="footer-main"><div><Brand /><p>{t.footerCaption}</p></div><a href="#home" className="back-top">{t.top}<IconCircle><ArrowUpRight size={20}/></IconCircle></a></div><div className="footer-bottom"><span>{t.currentYear}</span><span>{t.footerNote}</span><span>DESIGNED IN DETAIL. BUILT TO EVOLVE.</span></div></div></footer>

    {project && <div className="modal-backdrop" role="presentation" onMouseDown={e => { if (e.target === e.currentTarget) setProject(null); }}><div className="project-modal" role="dialog" aria-modal="true" aria-label={project.title[lang]}><button type="button" className="modal-close" onClick={() => setProject(null)} aria-label={t.close}><X size={22}/></button><img src={project.image} alt={project.title[lang]}/><div className="modal-details"><span className="micro-label">{t.modalLabel} / {project.count}</span><h2>{project.title[lang]}</h2><p className="modal-type">{project.type[lang]}</p><p>{project.description[lang]}</p><span className="modal-note">{t.projectNote}</span></div></div></div>}
    {toast && <div className="toast" role="status"><Check size={18}/>{toast}<button type="button" aria-label="Dismiss" onClick={() => setToast('')}><X size={16}/></button></div>}
  </div>;
}

export default App;
