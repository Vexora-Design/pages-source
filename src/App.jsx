import { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowUpLeft, ArrowUpRight, ArrowDownLeft, ArrowDownRight, ArrowLeft, ArrowRight, ArrowDown, ArrowUp, Menu, X, Layers3, Box, Code2, MoveUpRight, SlidersHorizontal, Instagram, PenTool, Activity, Play, MousePointer2, ExternalLink, Github } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SpotlightCard from './components/reactbits/SpotlightCard.jsx';
import GradientText from './components/reactbits/GradientText.jsx';
import Magnet from './components/reactbits/Magnet.jsx';
import SideRays from './components/reactbits/SideRays.jsx';
import GradientBlinds from './components/reactbits/GradientBlinds.jsx';
import GhostFibers from './components/reactbits/GhostFibers.jsx';

// Official GSAP plugins. Motion deliberately respects reduced-motion preferences.
gsap.registerPlugin(ScrollTrigger, useGSAP);

const ASSET = `${import.meta.env.BASE_URL}assets/`;

const content = {
  fa: {
    nav: ['خانه', 'تخصص‌ها', 'منتخب کارها', 'روش کار', 'ارتباط'],
    availability: 'پذیرای پروژه‌های جدید',
    heroTop: 'VEXORA  /  DESIGN & DIGITAL DEVELOPMENT',
    heroA: 'ایده را می‌بینیم.', heroB: 'جزئیات را می‌سازیم.',
    heroP: 'وکسورا نقطه تلاقی طراحی سرامیک، مدل‌سازی و تجسم سه‌بعدی، و توسعه نرم‌افزارهای کاربردی است؛ جایی که زیبایی‌شناسی با شناخت تولید و مهندسی همراه می‌شود.',
    heroExplore: 'مشاهده فعالیت‌ها', heroContact: 'شروع همکاری', heroPhoto: 'طراحی سطوح / ارائه مفهومی متریال',
    heroScroll: 'برای دیدن بیشتر اسکرول کنید',
    band: ['CERAMIC SURFACES', 'CUSTOM SOFTWARE', '3D VISUALIZATION', 'CREATIVE DEVELOPMENT'],
    introIndex: '01 / ABOUT THE PRACTICE',
    introLineA: 'یک نگاه یکپارچه،', introLineB: 'برای چند دنیای متفاوت.',
    introText: 'از طراحی یک طرح پرسلان که باید روی خط تولید درست چاپ شود، تا توسعه یک ابزار مدیریتی که هر روز استفاده می‌شود؛ هدف فقط ساختن یک خروجی زیبا نیست. به نتیجه‌ای فکر می‌کنیم که دقیق، قابل استفاده و قابل توسعه باشد.',
    introAside: 'طراحی با شناخت اجرا',
    capabilities: ['طراحی گرافیک سطوح و کالکشن‌های سرامیک', 'مدل‌سازی، متریال‌سازی و رندر سه‌بعدی', 'توسعه وب‌اپلیکیشن و ابزارهای اختصاصی', 'اتوماسیون، تجسم داده و تجربه‌های تعاملی'],
    servicesIndex: '02 / WHAT WE DO', servicesTitle: 'حوزه‌های تخصصی', servicesSubtitle: 'هر پروژه، مسئله‌ای متفاوت دارد. روش طراحی و ابزار اجرا را متناسب با آن انتخاب می‌کنیم.',
    services: [
      {number:'01', eyebrow:'SURFACE DESIGN', title:'طراحی سرامیک و پرسلان', desc:'طراحی گرافیک کاشی و پرسلان با توجه به رنگ، بافت، سایز، پرداخت سطح و محدودیت‌های واقعی چاپ دیجیتال. از ایده و کالکشن تا آماده‌سازی فایل‌های تولید، تصاویر معرفی محصول و کاتالوگ.', tags:['طرح و تکسچر','کالکشن محصول','کاتالوگ و موکاپ'], icon:'surface'},
      {number:'02', eyebrow:'SOFTWARE & AUTOMATION', title:'توسعه نرم‌افزار و ابزارهای سفارشی', desc:'طراحی و پیاده‌سازی ابزارهایی که یک فرایند پیچیده را ساده‌تر می‌کنند؛ از داشبوردهای تحت وب و سیستم‌های مدیریت و نگهداری تجهیزات تا پردازش فایل، گزارش‌گیری و اتوماسیون وظایف روزمره.', tags:['React / Web Apps','Python & Automation','Dashboard & Data'],icon:'software'},
      {number:'03', eyebrow:'3D & ARCHVIZ', title:'مدل‌سازی سه‌بعدی و تجسم معماری', desc:'ساخت مدل‌های سه‌بعدی، متریال‌های واقع‌گرایانه و رندرهای دقیق از فضاهای معماری، محصولات و قطعات. تمرکز بر مقیاس درست، نورپردازی، ترکیب‌بندی و تصویر قابل اتکا برای ارائه ایده.', tags:['3D Modeling','Architectural Rendering','Product Visualization'],icon:'arch'},
      {number:'04', eyebrow:'INTERACTIVE & REAL-TIME', title:'طراحی تجربه‌های تعاملی و بازی', desc:'توسعه پروتوتایپ‌های تعاملی، ابزارهای سه‌بعدی و سیستم‌های بلادرنگ. تجربه در طراحی محیط، جریان کار موتورهای بازی، رابط‌های تعاملی و ساخت ابزارهایی که میان طراحی و کدنویسی قرار می‌گیرند.', tags:['Unity / Real-time','Interactive Tools','Creative Coding'], icon:'interactive'},
    ],
    workIndex: '03 / SELECTED DIRECTIONS', workA:'از ایده', workB:'تا تجربه.', workSubtitle:'چند مسیر از کاری که در وکسورا دنبال می‌کنیم؛ تصاویر نمایشی هستند و به‌جای نمونه‌کار تأییدشده مشتری ارائه نمی‌شوند.',
    filters: [['all','همه'], ['ceramic','سرامیک'], ['software','نرم‌افزار'], ['architecture','سه‌بعدی'], ['interactive','تعاملی']],
    works: [
      { id:'porcelain', cat:'ceramic', num:'01',title:'هویت یک مجموعه پرسلان',type:'CERAMIC / SURFACE DESIGN', summary:'از بافت سنگ و رگه‌های طبیعی تا زبان بصری یک کالکشن قابل ارائه و آماده بررسی برای تولید.', detail:'توسعه یک مجموعه سرامیکی، فقط انتخاب تصویر سنگ نیست. بافت، عمق رنگ، هماهنگی شیدها، اندازه کاشی، نوع لعاب و رفتار طرح در چاپ دیجیتال همگی بخشی از تصمیم طراحی هستند. این قاب، یک نمایش مفهومی از زبان بصری این حوزه است.', visual:'image',image:'ceramic-collection.webp',tag:'تصویر مفهومی'},
      { id:'systems', cat:'software', num:'02',title:'نرم‌افزار برای فرایند واقعی',type:'SOFTWARE / OPERATIONS', summary:'داشبوردها، ابزارهای نگهداری پیشگیرانه و گردش‌کارهایی که داده را به تصمیم تبدیل می‌کنند.', detail:'تمرکز روی نرم‌افزارهای قابل استفاده در عملیات روزمره است: ثبت توقفات و خرابی‌ها، پیگیری تعمیرات، چک‌لیست‌ها، محاسبه شاخص‌های نگهداری و نمایش اطلاعات به شکلی که اپراتور و مدیر بتوانند سریع تصمیم بگیرند. تصویر رابط کاربری صرفاً یک نمای نمایشی است.', visual:'dashboard',tag:'نمونه نمایشی رابط'},
      { id:'architecture', cat:'architecture', num:'03',title:'نور، متریال، مقیاس',type:'3D / ARCHITECTURAL VISUALIZATION', summary:'رندر معماری به‌عنوان ابزاری برای فهم فضا، نور، متریال و تصمیم‌گیری پیش از اجرا.', detail:'در تجسم معماری، مدل‌سازی دقیق، تناسب احجام، نور طبیعی و متریال‌پردازی باید در خدمت درک فضا باشند. این تصویر یک رندر مفهومی برای معرفی توانمندی‌های ویژوالایزیشن است.', visual:'image',image:'architectural-viz.webp',tag:'رندر مفهومی'},
      { id:'material', cat:'ceramic', num:'04',title:'متریال در مقیاس واقعی',type:'MATERIAL / PRODUCT VISUALIZATION', summary:'نمایش سطح، انعکاس و حس متریال در قاب‌هایی نزدیک به فضای واقعی استفاده.', detail:'معرفی سرامیک فقط یک تکسچر تخت نیست؛ رندر محصول باید پرداخت سطح، میزان انعکاس، زاویه دید و نور واقعی را آشکار کند. این تصویر برای نمایش همین رویکرد تولید شده است.', visual:'image',image:'ceramic-detail.webp',tag:'تصویر مفهومی'},
      { id:'interactive', cat:'interactive', num:'05',title:'ابزارهای خلاق و سه‌بعدی',type:'CREATIVE CODING / REAL-TIME', summary:'ابزارهای پروسیجرال، نمایشگرهای سه‌بعدی و نمونه‌سازی تعاملی برای سریع‌تر کردن مسیر ایده تا خروجی.', detail:'از ابزارهای چیدمان هندسی و نمایش سه‌بعدی مدل‌ها تا سیستم‌های تعاملی و بازی‌سازی، بخشی از فعالیت وکسورا ساخت ابزار برای طراحان و توسعه‌دهندگان است. نمای گرافیکی این کارت یک دیاگرام مفهومی است.',visual:'diagram',tag:'نمونه گرافیکی'},
    ],
    modalClose:'بستن جزئیات', modalTag:'درباره این مسیر',
    processIndex:'04 / HOW WE WORK', processA:'طراحی خوب،', processB:'اتفاقی نیست.', processText:'هر پروژه با فهم مسئله آغاز می‌شود و با توجه به جزئیات تا مرحله خروجی همراه می‌ماند.',
    steps:[['شناخت و تعریف مسئله','هدف، مخاطب، محدودیت‌های فنی و خروجی مورد انتظار را مشخص می‌کنیم.'],['طراحی و نمونه‌سازی','راه‌حل را از نظر فرم، تجربه و امکان اجرای واقعی ارزیابی و اصلاح می‌کنیم.'],['توسعه و آماده‌سازی خروجی','فایل، مدل یا نرم‌افزار را با ساختاری قابل نگهداری و توسعه آماده می‌کنیم.']],
    detailKicker:'DESIGN IS IN THE DETAILS', detailTitle:'زیبا، فقط وقتی ارزشمند است که درست کار کند.',
    detailText:'در وکسورا طراحی، رندر و کد سه فعالیت جدا از هم نیستند. این‌ها ابزارهایی‌اند برای حل یک مسئله، با توجه هم‌زمان به کیفیت بصری، واقعیت اجرا و تجربه استفاده.',
    contactIndex:'05 / START A CONVERSATION', contactTitleA:'پروژه‌ای در ذهن دارید؟',contactTitleB:'درباره‌اش صحبت کنیم.', contactP:'چه به طرح یک مجموعه سرامیک نیاز داشته باشید، چه یک ابزار نرم‌افزاری اختصاصی یا رندر سه‌بعدی، شرح کوتاهی از مسئله‌تان نقطه شروع خوبی است.',
    footerLine:'طراحی سطوح، فضاها و ابزارهای دیجیتال',footerTop:'بازگشت به بالا',footerLegal:'فعالیت مستقل طراحی و توسعه', languageToggle:'EN',workDetails:'مشاهده توضیحات',collapse:'بستن منو',openMenu:'باز کردن منو',more:'بیشتر بدانید',prev:'قبلی',next:'بعدی',progress:'حرکت در صفحه', empty:'در این دسته موردی وجود ندارد.'
  },
  en: {
    nav: ['Home', 'Expertise', 'Selected work', 'Process', 'Contact'], availability:'Open for new collaborations',
    heroTop:'VEXORA  /  DESIGN & DIGITAL DEVELOPMENT',heroA:'Ideas, made visible.',heroB:'Details, made real.',
    heroP:'VEXORA is an independent practice connecting ceramic surface design, 3D visualization and purposeful software—where visual craft meets production knowledge and technical thinking.',
    heroExplore:'Explore expertise',heroContact:'Start a project',heroPhoto:'Surface design / conceptual material presentation',heroScroll:'Scroll to discover',
    band:['CERAMIC SURFACES','CUSTOM SOFTWARE','3D VISUALIZATION','CREATIVE DEVELOPMENT'],
    introIndex:'01 / ABOUT THE PRACTICE',introLineA:'Different disciplines.',introLineB:'One considered approach.',introText:'Whether designing porcelain graphics that must work on a production line or building software people rely on every day, the goal goes beyond appearances. The outcome should be precise, useful and designed to evolve.', introAside:'Design informed by execution',
    capabilities:['Porcelain collections and surface graphics','3D modeling, materials and rendering','Custom web applications and digital tools','Automation, data visualization and interactive systems'],
    servicesIndex:'02 / WHAT WE DO',servicesTitle:'Areas of practice',servicesSubtitle:'Different challenges call for different tools. We choose both the design approach and the implementation around the work.',
    services:[
      {number:'01',eyebrow:'SURFACE DESIGN',title:'Ceramic & porcelain design',desc:'Porcelain and tile graphics considered for color, texture, format, finishing and the realities of digital printing. From collections and production-ready artwork to product imagery and catalogs.',tags:['Patterns & textures','Product collections','Catalogs & mockups'],icon:'surface'},
      {number:'02',eyebrow:'SOFTWARE & AUTOMATION',title:'Custom software & automation',desc:'Useful digital tools built around real workflows: web dashboards, maintenance-management systems, operational reporting, file processing and automation that remove repetitive work.',tags:['React / Web Apps','Python & Automation','Dashboard & Data'],icon:'software'},
      {number:'03',eyebrow:'3D & ARCHVIZ',title:'3D design & architectural visualization',desc:'Accurate 3D modeling and realistic rendering for architecture, products and technical objects. The focus is on scale, lighting, materials and images that communicate a design with clarity.',tags:['3D Modeling','Architectural Rendering','Product Visualization'],icon:'arch'},
      {number:'04',eyebrow:'INTERACTIVE & REAL-TIME',title:'Interactive experiences & games',desc:'Interactive prototypes, three-dimensional utilities and real-time systems. Work spans environments, game-engine workflows, interactive interfaces and tools bridging design and code.',tags:['Unity / Real-time','Interactive Tools','Creative Coding'],icon:'interactive'}
    ],
    workIndex:'03 / SELECTED DIRECTIONS',workA:'From concept',workB:'to experience.',workSubtitle:'A look at the disciplines we work across. Demonstration visuals are clearly identified and are not presented as verified client projects.',
    filters:[['all','All work'],['ceramic','Ceramics'],['software','Software'],['architecture','3D & Archviz'],['interactive','Interactive']],
    works:[
      {id:'porcelain',cat:'ceramic',num:'01',title:'The language of porcelain',type:'CERAMIC / SURFACE DESIGN',summary:'From natural veining to the visual identity of a collection suitable for presentation and production review.',detail:'Creating a porcelain collection goes beyond selecting a stone image. Texture, color depth, shade consistency, format, glaze and the realities of digital printing all shape the design. This image conceptually represents the discipline.',visual:'image',image:'ceramic-collection.webp',tag:'Conceptual image'},
      {id:'systems',cat:'software',num:'02',title:'Software for real workflows',type:'SOFTWARE / OPERATIONS',summary:'Dashboards, preventive-maintenance tools and workflows that turn operational data into decisions.',detail:'The focus is software that helps in everyday operations: downtime reporting, maintenance logs, checklists, performance indicators and clear information for technicians and managers. The interface here is an illustrative mockup.',visual:'dashboard',tag:'Illustrative interface'},
      {id:'architecture',cat:'architecture',num:'03',title:'Light, material, scale',type:'3D / ARCHITECTURAL VISUALIZATION',summary:'Architectural imagery that helps people understand a space, its light, its materials and its possibilities before construction.',detail:'Good archviz puts accurate modeling, proportions, natural lighting and convincing materials in service of spatial understanding. The visual is a conceptual rendering.',visual:'image',image:'architectural-viz.webp',tag:'Concept render'},
      {id:'material',cat:'ceramic',num:'04',title:'Material at true scale',type:'MATERIAL / PRODUCT VISUALIZATION',summary:'Surfaces, reflectivity and material character shown in settings that feel believable.',detail:'Tile presentation is more than a flat texture. Good product rendering communicates surface finish, reflectivity, viewpoint and real lighting. This visual was generated as an example of that approach.',visual:'image',image:'ceramic-detail.webp',tag:'Concept visual'},
      {id:'interactive',cat:'interactive',num:'05',title:'Tools for creative work',type:'CREATIVE CODING / REAL-TIME',summary:'Procedural layouts, 3D viewers and interactive prototypes that speed up the path from idea to result.',detail:'From procedural composition tools to 3D model viewers and game systems, part of the practice is building better tools for designers and developers. The graphic is a conceptual diagram.',visual:'diagram',tag:'Concept graphic'}
    ],
    modalClose:'Close project details',modalTag:'About this direction',
    processIndex:'04 / HOW WE WORK',processA:'Good design',processB:'is deliberate.',processText:'Every project begins with understanding the problem and stays grounded in the details through delivery.',steps:[['Understand the brief','Define the goal, audience, technical constraints and required deliverable.'],['Design and prototype','Evaluate visual approaches, user experience and real-world feasibility.'],['Build and deliver','Prepare files, models or software with maintainability and future development in mind.']],
    detailKicker:'DESIGN IS IN THE DETAILS',detailTitle:'Beautiful matters when it works.',detailText:'At VEXORA, design, visualization and code are not isolated disciplines. They are different tools for solving the same problem—with equal attention to visual quality, practical execution and usability.',
    contactIndex:'05 / START A CONVERSATION',contactTitleA:'Have a project in mind?',contactTitleB:'Let’s talk about it.',contactP:'Whether it is a porcelain collection, a custom digital tool or a 3D visualization, a short description of the challenge is a great place to start.',
    footerLine:'Surfaces, spaces and purposeful digital tools',footerTop:'Back to top',footerLegal:'Independent design and development practice',languageToggle:'فا',workDetails:'View the story',collapse:'Close navigation',openMenu:'Open navigation',more:'Explore details',prev:'Previous',next:'Next',progress:'Page progress',empty:'Nothing in this category yet.'
  }
};

function getInitialLanguage() {
  if (typeof document === 'undefined') return 'fa';
  const found = document.cookie.split(';').map(s=>s.trim()).find(s=>s.startsWith('vexora_lang='));
  return found?.split('=')[1] === 'en' ? 'en' : 'fa';
}

function Brand({ dark = false }) {
  return <a className={`brand ${dark ? 'brand--dark' : ''}`} href="#home" aria-label="VEXORA — home">
    <svg viewBox="0 0 42 42" className="brand-logo" fill="none" aria-hidden="true"><path d="M4.5 8h10l6.4 14.6L28 8h9.5L24 35h-6.2L4.5 8Z" fill="currentColor"/><path d="M27.5 9.4h6.5L22.4 30l-3.8-7.4 8.9-13.2Z" fill="var(--accent)"/></svg>
    <span>VEXORA<sup>®</sup></span>
  </a>
}

function MiniDashboard({ lang }) {
  return <div className="visual-dashboard" aria-label={lang === 'fa' ? 'تصویر نمایشی داشبورد نگهداری تجهیزات' : 'Illustrative maintenance dashboard interface'} role="img" dir="ltr">
    <div className="dash-sidebar"><div className="dash-logo">V<span>.</span></div><div className="dash-nav-select"/><div className="dash-nav"/><div className="dash-nav"/><div className="dash-nav short"/><div className="dash-nav"/><div className="dash-bottom">◌</div></div>
    <div className="dash-main"><div className="dash-top"><div><div className="dash-overline">EQUIPMENT / OPERATIONS</div><strong>Maintenance overview</strong></div><span className="dash-demo">DEMO UI</span></div><div className="dash-stats"><div><small>Equipment</small><strong>04</strong><i/></div><div><small>Availability</small><strong>98.2%</strong><i/></div><div><small>Open tasks</small><strong>12</strong><i/></div></div><div className="dash-visual"><div className="dash-visual-head"><span>Operating activity</span><small>LAST 30 DAYS</small></div><svg viewBox="0 0 440 120" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="dashFade" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#b8b8b8" stopOpacity=".32"/><stop offset="1" stopColor="#b8b8b8" stopOpacity="0"/></linearGradient></defs><path d="M0 80 L32 74 L66 88 L95 54 L135 67 L160 43 L207 53 L234 36 L268 51 L306 30 L341 40 L381 22 L414 39 L440 14 L440 120 L0 120Z" fill="url(#dashFade)"/><path d="M0 80 L32 74 L66 88 L95 54 L135 67 L160 43 L207 53 L234 36 L268 51 L306 30 L341 40 L381 22 L414 39 L440 14" stroke="#5f5f5f" strokeWidth="3" fill="none"/></svg></div><div className="dash-rows"><span/><span/><span/></div></div>
  </div>
}

function MeshVisual() {
  return <div className="mesh-art" aria-label="Conceptual three-dimensional technical mesh" role="img">
    <div className="mesh-label top">REAL-TIME · GEOMETRY</div>
    <svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <defs><linearGradient id="meshG" x1="0" x2="1" y1="1" y2="0"><stop stopColor="#c4c4c4"/><stop offset="1" stopColor="#e8e8e8"/></linearGradient></defs>
      <g stroke="url(#meshG)" fill="none" opacity=".9" strokeWidth="1.2" transform="translate(28 18)">
        {Array.from({length:13},(_,i)=><path key={`a${i}`} d={`M ${40+i*35} ${240+Math.sin(i*.6)*21} C ${120+i*11} ${115+Math.sin(i*.67)*40} ${340+i*7} ${316+Math.cos(i*.55)*30} ${520+i*1.5} ${135+Math.sin(i*.43)*20}`}/>)}
        {Array.from({length:12},(_,i)=><path key={`b${i}`} d={`M ${55+i*4} ${116+i*17} C ${200+i*21} ${158+i*8} ${345+i*13} ${87+i*10} ${520-i*5} ${142+i*13}`}/>)}
      </g>
      <circle cx="305" cy="182" r="3" fill="#dfdfdf"/><circle cx="455" cy="220" r="3" fill="#dfdfdf"/>
    </svg><div className="mesh-label bottom">PARAMETRIC / FORM STUDY — 001</div>
  </div>
}

function ServiceIcon({ kind }) {
  switch(kind){
    case 'surface': return <Layers3 size={27} strokeWidth={1.5}/>;
    case 'software':return <Code2 size={27} strokeWidth={1.5}/>;
    case 'arch':return <Box size={27} strokeWidth={1.5}/>;
    default:return <MousePointer2 size={27} strokeWidth={1.5}/>;
  }
}

function ArrowIcon({ lang, size = 19 }) { return lang === 'fa' ? <ArrowUpLeft size={size}/> : <ArrowUpRight size={size}/>; }

function App() {
  const [lang,setLang] = useState(getInitialLanguage);
  const [mobileOpen,setMobileOpen] = useState(false);
  const [filter,setFilter] = useState('all');
  const [selected,setSelected] = useState(null);
  const [scrolled,setScrolled] = useState(false);
  const siteRef=useRef(null);
  const lastFocusedRef=useRef(null);
  const dialogRef=useRef(null);
  const t=content[lang];
  const projects=useMemo(()=>t.works.filter(w=>filter==='all'||w.cat===filter),[t,filter]);

  useEffect(()=>{
    document.documentElement.lang=lang;
    document.documentElement.dir=lang==='fa'?'rtl':'ltr';
    document.body.dataset.language=lang;
    const secure=location.protocol==='https:'?'; Secure':'';
    document.cookie=`vexora_lang=${lang}; Max-Age=31536000; Path=/; SameSite=Lax${secure}`;
  },[lang]);

  useEffect(()=>{
    const fn=()=>setScrolled(window.scrollY>18);
    fn();window.addEventListener('scroll',fn,{passive:true});return()=>window.removeEventListener('scroll',fn);
  },[]);

  useEffect(()=>{
    const open=!!selected || mobileOpen;
    document.body.classList.toggle('is-locked',open);
    const key=e=>{
      if(e.key==='Escape') {setSelected(null);setMobileOpen(false)}
      if(e.key==='Tab'&&selected&&dialogRef.current){
        const focusables=[...dialogRef.current.querySelectorAll('button,a,[tabindex]:not([tabindex="-1"])')];
        if(!focusables.length)return;
        const first=focusables[0],last=focusables[focusables.length-1];
        if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}
        else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}
      }
    };
    window.addEventListener('keydown',key);
    if(selected) dialogRef.current?.querySelector('button')?.focus();
    return()=>{document.body.classList.remove('is-locked');window.removeEventListener('keydown',key)};
  },[selected,mobileOpen]);

  useGSAP(()=>{
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
    const mm=gsap.matchMedia();
    mm.add('(min-width: 768px)',()=>{
      gsap.fromTo('.hero__photograph',{scale:1.055},{scale:1,duration:1.7,ease:'power2.out'});
      gsap.to('.hero__photograph',{yPercent:7,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:1}});
    });
    const tl=gsap.timeline({defaults:{ease:'power3.out'}});
    tl.fromTo('.hero .kicker',{opacity:0,y:14},{opacity:1,y:0,duration:.55},.08)
    .fromTo('.hero__headline .headline-line',{opacity:0,y:55},{opacity:1,y:0,duration:.85,stagger:.11},.19)
    .fromTo('.hero__lead',{opacity:0,y:20},{opacity:1,y:0,duration:.65},.55)
    .fromTo('.hero__actions',{opacity:0,y:16},{opacity:1,y:0,duration:.6},.65);
    gsap.utils.toArray('[data-reveal]').forEach((el)=>{
      gsap.fromTo(el,{autoAlpha:0,y:24},{autoAlpha:1,y:0,duration:.75,ease:'power2.out',clearProps:'transform,visibility,opacity',scrollTrigger:{trigger:el,start:'top 89%',once:true}});
    });
    return()=>mm.revert();
  },{scope:siteRef,dependencies:[lang],revertOnUpdate:true});

  const selectProject=(w)=>{lastFocusedRef.current=document.activeElement;setSelected(w)};
  const closeProject=()=>{setSelected(null);requestAnimationFrame(()=>lastFocusedRef.current?.focus())};
  const changeLanguage=()=>{setLang(v=>v==='fa'?'en':'fa');setMobileOpen(false)};
  const menuLinks=[['#home',t.nav[0]],['#expertise',t.nav[1]],['#work',t.nav[2]],['#process',t.nav[3]],['#contact',t.nav[4]]];

  return <div ref={siteRef} className="site">
    <a className="skip-link" href="#main">{lang==='fa'?'رفتن به محتوای اصلی':'Skip to content'}</a>
    <header className={`header ${scrolled?'header--scrolled':''}`}>
      <div className="container header__inner">
        <Brand/>
        <nav className="header__nav" aria-label={lang==='fa'?'ناوبری اصلی':'Primary navigation'}>{menuLinks.map(([href,title])=><a key={href} href={href}>{title}</a>)}</nav>
        <div className="header__actions">
          <button className="lang-button" type="button" onClick={changeLanguage} aria-label={lang==='fa'?'تغییر زبان به انگلیسی':'Change language to Persian'}>{t.languageToggle}<span className="lang-button__line"/></button>
          <a href="#contact" className="header__contact">{t.heroContact}<ArrowIcon lang={lang} size={16}/></a>
          <button className="menu-button" type="button" aria-expanded={mobileOpen} aria-label={mobileOpen?t.collapse:t.openMenu} onClick={()=>setMobileOpen(v=>!v)}>{mobileOpen?<X size={23}/>:<Menu size={23}/>}</button>
        </div>
      </div>
      {mobileOpen&&<nav className="mobile-menu" aria-label={lang==='fa'?'منوی موبایل':'Mobile navigation'}>{menuLinks.map(([href,title],i)=><a key={href} href={href} onClick={()=>setMobileOpen(false)}><span>{String(i+1).padStart(2,'0')}</span>{title}<ArrowIcon lang={lang}/></a>)}<button type="button" onClick={changeLanguage}>{lang==='fa'?'English version':'نسخه فارسی'}</button></nav>}
    </header>

    <main id="main">
      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="hero__photograph" style={{backgroundImage:`url(${ASSET}hero-ceramics.webp)`}} role="img" aria-label={t.heroPhoto}/>
        <div className="hero__wash" aria-hidden="true"/>
        <div className="reactbits-bg hero__rays" aria-hidden="true"><SideRays rayColor1="#f4f4f4" rayColor2="#9a9a9a" origin="top-right" intensity={1.6} speed={1.2} spread={2.1} density={5} glow={.72} opacity={.66} saturation={0} dust={0} maxDevicePixelRatio={1.5}/></div>
        <div className="container hero__container">
          <div className="hero__content">
            <div className="kicker"><span className="kicker__square"/>{t.heroTop}</div>
            <h1 id="hero-title" className="hero__headline"><span className="headline-line">{t.heroA}</span><span className="headline-line accent-underline">{t.heroB}</span></h1>
            <p className="hero__lead">{t.heroP}</p>
            <div className="hero__actions"><Magnet padding={32} magnetStrength={6} maxOffset={12}><a className="button button--light" href="#expertise">{t.heroExplore}<ArrowIcon lang={lang}/></a></Magnet><a className="hero__link" href="#contact">{t.heroContact}<span className="hero__link-line"/></a></div>
          </div>
          <div className="hero__meta"><span>{t.heroPhoto}</span><span className="hero__meta-index">V/001 — 2026</span></div>
        </div>
        <a href="#about" className="hero__scroll"><span>{t.heroScroll}</span><ArrowDown size={18}/></a>
      </section>

      <div className="ticker" aria-label="VEXORA disciplines"><div className="ticker__track">{Array.from({length:2}).map((_,idx)=><span className="ticker__group" key={idx}>{t.band.map(b=><span className="ticker__item" key={b}><span className="ticker__star">✳</span>{b}</span>)}</span>)}</div></div>

      <section id="about" className="intro section--light">
        <div className="container intro__grid">
          <div data-reveal><p className="eyebrow"><span className="index-square"/> {t.introIndex}</p><h2 className="intro__heading">{t.introLineA}<br/><em>{t.introLineB}</em></h2></div>
          <div className="intro__secondary" data-reveal><div className="intro__paragraph">{t.introText}</div><p className="micro-label">{t.introAside}</p><ul className="intro__list">{t.capabilities.map((str,i)=><li key={str}><span>{String(i+1).padStart(2,'0')}</span>{str}<ArrowIcon lang={lang} size={16}/></li>)}</ul></div>
        </div>
      </section>

      <section id="expertise" className="services section--light section--lined">
        <div className="container">
          <div className="section-heading" data-reveal><div><p className="eyebrow"><span className="index-square"/>{t.servicesIndex}</p><h2>{t.servicesTitle}</h2></div><p>{t.servicesSubtitle}</p></div>
          <div className="services__list">{t.services.map((s,i)=><article className="service-row" key={s.number} data-reveal><div className="service-row__number">{s.number}<span className="service-row__icon"><ServiceIcon kind={s.icon}/></span></div><div className="service-row__main"><span className="micro-label">{s.eyebrow}</span><h3>{s.title}</h3><p>{s.desc}</p><div className="service-row__tags">{s.tags.map(tag=><span key={tag}>{tag}</span>)}</div></div><div className="service-row__marker"><ArrowIcon lang={lang} size={28}/></div></article>)}</div>
        </div>
      </section>

      <section id="work" className="work section--stone">
        <div className="container">
          <div className="work__headline" data-reveal><p className="eyebrow"><span className="index-square"/>{t.workIndex}</p><div className="work__headline-row"><h2>{t.workA}<br/><em>{t.workB}</em></h2><p>{t.workSubtitle}</p></div></div>
          <div className="work__filters" role="group" aria-label={lang==='fa'?'فیلتر پروژه‌ها':'Filter projects'}>{t.filters.map(([id,name])=><button type="button" key={id} className={filter===id?'is-active':''} aria-pressed={filter===id} onClick={()=>setFilter(id)}>{name}</button>)}</div>
          <div className="work__grid">{projects.map((w,i)=><button key={`${lang}-${w.id}`} type="button" className={`work-card work-card--${w.visual} ${i===0&&filter==='all'?'work-card--feature':''}`} onClick={()=>selectProject(w)} aria-label={`${t.workDetails}: ${w.title}`}>
            <span className="work-card__visual">{w.visual==='image'?<img src={ASSET+w.image} alt={w.title} loading="lazy" width="900" height="620"/>:w.visual==='dashboard'?<MiniDashboard lang={lang}/>:<MeshVisual/>}<span className="work-card__overlay"/><span className="work-card__visual-tag">{w.tag}</span><span className="work-card__arrow"><ArrowIcon lang={lang}/></span></span>
            <span className="work-card__caption"><span className="work-card__meta"><span>{w.type}</span><span>{w.num} / 05</span></span><span className="work-card__title">{w.title}</span><span className="work-card__summary">{w.summary}</span></span>
          </button>)}{!projects.length&&<p className="empty-state">{t.empty}</p>}</div>
        </div>
      </section>

      <section className="manifesto section--dark"><div className="reactbits-bg manifesto__blinds" aria-hidden="true"><GradientBlinds gradientColors={['#0b0b0b','#393939','#6b6b6b']} angle={-12} blindCount={14} noise={.15} shine={.55} relief={.6} glow={.25} sway={.15} speed={.45} gradientSpeed={.13} spotlightOpacity={.45} lightColor="#e2e2e2" dpr={1.5}/></div><div className="container manifesto__grid"><div data-reveal><span className="eyebrow eyebrow--light"><span className="index-square"/>{t.detailKicker}</span><h2><GradientText colors={['#f7f7f7','#bcbcbc','#f7f7f7']} animationSpeed={15} variant="linear">{t.detailTitle}</GradientText></h2></div><div className="manifesto__aside" data-reveal><p>{t.detailText}</p><div className="manifesto__cross" aria-hidden="true">✳</div></div></div></section>

      <section id="process" className="process section--light"><div className="container"><div className="section-heading" data-reveal><div><p className="eyebrow"><span className="index-square"/>{t.processIndex}</p><h2>{t.processA}<br/><em>{t.processB}</em></h2></div><p>{t.processText}</p></div><div className="process__grid">{t.steps.map(([title,desc],i)=><SpotlightCard key={i} className="process-card" spotlightColor="#bcbcbc" intensity={.14} borderGlow={.4}><span className="process-card__index">0{i+1}</span><div className="process-card__rule"/><h3>{title}</h3><p>{desc}</p><span className="process-card__corner">↗</span></SpotlightCard>)}</div></div></section>

      <section id="contact" className="contact section--dark" aria-labelledby="contact-heading">
        <div className="reactbits-bg contact__fibers" aria-hidden="true"><GhostFibers glowColor="#bcbcbc" lineColor="#f5f5f5" secondaryColor="#737373" layers={2} threads={56} speed={.22} density={.65} glow={.65} brightness={.8} particles={.23} sparkle={.17} waves={.75} dpr={1.4}/></div>
        <div className="container contact__grid">
          <div className="contact__message" data-reveal>
            <p className="eyebrow eyebrow--light"><span className="index-square"/>{t.contactIndex}</p>
            <h2 id="contact-heading">{t.contactTitleA}<br/><span>{t.contactTitleB}</span></h2>
            <p>{t.contactP}</p>
            <div className="contact__owner"><span>{lang==='fa'?'ارتباط مستقیم با':'DIRECT CONTACT'}</span><strong>{lang==='fa'?'عماد قاسمی':'Emad Ghasemi'}</strong><small>VEXORA / DESIGN & DEVELOPMENT</small></div>
          </div>
          <address className="contact__details" data-reveal>
            <a className="contact__detail contact__detail--primary" href="tel:+989366828978"><span>{lang==='fa'?'شماره تماس':'PHONE'}</span><strong dir="ltr">0936 682 8978</strong><ArrowIcon lang={lang} size={20}/></a>
            <a className="contact__detail" href="mailto:emad.gh.09@gmail.com"><span>{lang==='fa'?'ایمیل':'EMAIL'}</span><strong dir="ltr">emad.gh.09@gmail.com</strong><ArrowIcon lang={lang} size={20}/></a>
            <a className="contact__detail" href="https://t.me/emadghasemi" target="_blank" rel="noopener noreferrer"><span>TELEGRAM</span><strong dir="ltr">@emadghasemi</strong><ArrowIcon lang={lang} size={20}/></a>
            <a className="contact__detail" href="https://www.instagram.com/vexorastudio/" target="_blank" rel="noopener noreferrer"><span>INSTAGRAM</span><strong dir="ltr">@vexorastudio</strong><ArrowIcon lang={lang} size={20}/></a>
          </address>
        </div>
      </section>
    </main>
    <footer className="footer"><div className="container"><div className="footer__top"><Brand/><p>{t.footerLine}</p><a href="#home" aria-label={t.footerTop}>{t.footerTop}<ArrowUp size={18}/></a></div><div className="footer__wordmark" aria-hidden="true">VEXORA<span>.</span></div><div className="footer__bottom"><span>© {new Date().getFullYear()} VEXORA</span><span>{t.footerLegal}</span><span>DESIGN / DEVELOPMENT / 3D</span></div></div></footer>

    {selected&&<div className="modal" onMouseDown={e=>{if(e.target===e.currentTarget)closeProject()}} role="presentation"><div className="modal__dialog" role="dialog" aria-modal="true" aria-label={selected.title} ref={dialogRef}><div className="modal__top"><span>{t.modalTag} / {selected.num}</span><button type="button" onClick={closeProject} aria-label={t.modalClose}><X size={21}/></button></div><div className="modal__media">{selected.visual==='image'?<img src={ASSET+selected.image} alt={selected.title} width="1000" height="650"/>:selected.visual==='dashboard'?<MiniDashboard lang={lang}/>:<MeshVisual/>}</div><div className="modal__body"><span className="micro-label">{selected.type}</span><h2>{selected.title}</h2><p>{selected.detail}</p><span className="modal__notice">{selected.tag}</span></div></div></div>}
  </div>
}

export default App;