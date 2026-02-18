import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import {
  Award,
  Briefcase,
  ChevronUp,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Languages,
  Linkedin,
  Mail,
  MapPin,
  X
} from "lucide-react";

const UI_TEXT = {
  es: {
    nav: ["Sobre mí", "Skills", "Experiencia", "Formación", "Certificados", "Portafolio"],
    subtitle: "Desarrollador Full Stack | Node.js | React | React Native",
    intro:
      "Titulado en Ingeniería en Informática con experiencia en desarrollo Web y Mobile, además de atención al cliente. Proactivo y disciplinado, me destaco por mi enfoque en la calidad de los resultados. Autónomo y colaborativo, disfruto trabajar en equipo. Orientado al logro de objetivos, estoy motivado para contribuir al éxito de la empresa con mis habilidades y pasión por el desarrollo full stack.",
    location: "Puerto Varas, Chile",
    years: "Experiencia Full Stack (Node/React/React Native)",
    stackCore: "2 años con Node.js, React y React Native. Bases de datos: MySQL y Firebase.",
    coreStackTitle: "Core Stack",
    projects: "Proyectos",
    yearLabel: "Año",
    stackLabel: "Stack",
    certs: "Certificados",
    cv: "Descargar CV",
    about: "Sobre mí",
    skills: "Stack Tecnológico",
    experience: "Experiencia",
    education: "Formación",
    certificates: "Certificados",
    portfolio: "Portafolio",
    portfolioDisclaimer:
      "Existen muchos otros trabajos realizados que no se pueden publicar por acuerdos de confidencialidad con clientes.",
    certFilter: {
      categoria1: "Academias",
      categoria2: "Universidad",
      categoria3: "Otros",
      categoria4: "Bootcamp"
    },
    workFilter: {
      first: "Apps web",
      second: "WordPress",
      third: "Tesis",
      fourth: "Freelance",
      react1: "React",
      game: "Juego celular"
    }
  },
  en: {
    nav: ["About", "Skills", "Experience", "Education", "Certificates", "Portfolio"],
    subtitle: "Full Stack Developer | Node.js | React | React Native",
    intro:
      "Software Engineering graduate with experience in web and mobile development, plus customer-facing roles. Proactive and disciplined, with a strong focus on quality. Autonomous and collaborative, I enjoy teamwork and I am motivated to contribute to organizational success through full stack development.",
    location: "Puerto Varas, Chile",
    years: "Full Stack Experience (Node/React/React Native)",
    stackCore: "2 years with Node.js, React, and React Native. Databases: MySQL and Firebase.",
    coreStackTitle: "Core Stack",
    projects: "Projects",
    yearLabel: "Year",
    stackLabel: "Stack",
    certs: "Certificates",
    cv: "Download CV",
    about: "About",
    skills: "Tech Stack",
    experience: "Experience",
    education: "Education",
    certificates: "Certificates",
    portfolio: "Portfolio",
    portfolioDisclaimer:
      "There are many other delivered projects that cannot be publicly shown due to client confidentiality agreements.",
    certFilter: {
      categoria1: "Academies",
      categoria2: "University",
      categoria3: "Other",
      categoria4: "Bootcamp"
    },
    workFilter: {
      first: "Web apps",
      second: "WordPress",
      third: "Thesis",
      fourth: "Freelance",
      react1: "React",
      game: "Mobile game"
    }
  }
};

const EXPERIENCE = {
  es: [
    {
      role: "Desarrollador de Soluciones TI",
      period: "Jonas | Febrero 2024 - Actualidad",
      points: [
        "Responsable único del diseño, desarrollo e implementación end-to-end de soluciones tecnológicas: requerimientos, arquitectura, frontend, backend, despliegue y mantención.",
        "Administración de plataformas corporativas Google y Microsoft, soporte TI e inventario tecnológico.",
        "Plataforma móvil de monitoreo de flota y despachos (React Native, Google Maps API, Node.js, MySQL): seguimiento en tiempo real, rutas óptimas, consumo de combustible, control de velocidad e historial.",
        "Aplicación móvil corporativa interna (React Native, APIs REST, MySQL): digitalización y optimización de procesos operativos con foco en rapidez y trazabilidad.",
        "Intranet corporativa modular por áreas (React, Node.js/Express, MySQL): CRM interno, gestión de inventario, automatización de correos y monitoreo de actividades."
      ]
    },
    {
      role: "Desarrollador Web",
      period: "Freelance | 2019 - Presente",
      points: [
        "Sitios para clientes de logística, legal y reciclaje.",
        "Implementación completa desde diseño hasta despliegue.",
        "Mantenimiento, SEO técnico y mejoras UX continuas."
      ]
    },
    {
      role: "Desarrollador Fiori",
      period: "KSE | 2022 - 2023",
      points: [
        "Desarrollo de apps SAP Fiori para procesos internos.",
        "Automatizaciones RPA con Power Automate y UiPath.",
        "Trabajo agil en equipos Scrum."
      ]
    },
    {
      role: "Práctica Profesional",
      period: "ACES | 2021",
      points: [
        "Módulo de transformación de PDF a formato libro.",
        "Desarrollo web con HTML, JavaScript y PHP."
      ]
    }
  ],
  en: [
    {
      role: "IT Solutions Developer",
      period: "Jonas | February 2024 - Present",
      points: [
        "Sole owner of end-to-end design, development, and implementation of core company solutions: requirements, architecture, frontend, backend, deployment, and maintenance.",
        "Managed corporate Google and Microsoft platforms, IT support operations, and technology inventory.",
        "Mobile fleet and dispatch monitoring platform (React Native, Google Maps API, Node.js, MySQL): real-time tracking, optimal routes, fuel consumption, speed control, and route history.",
        "Internal corporate mobile app (React Native, REST APIs, MySQL): process digitization and operational optimization focused on speed and traceability.",
        "Modular corporate intranet by business area (React, Node.js/Express, MySQL): internal CRM, inventory management, automated emails, and activity monitoring."
      ]
    },
    {
      role: "Web Developer",
      period: "Freelance | 2019 - Present",
      points: [
        "Built websites for logistics, legal, and recycling clients.",
        "End-to-end delivery from design to deployment.",
        "Continuous maintenance, UX and technical SEO improvements."
      ]
    },
    {
      role: "Fiori Developer",
      period: "KSE | 2022 - 2023",
      points: [
        "Developed SAP Fiori apps for internal workflows.",
        "Built RPA automations with Power Automate and UiPath.",
        "Worked in agile Scrum teams."
      ]
    },
    {
      role: "Professional Internship",
      period: "ACES | 2021",
      points: [
        "Built a PDF-to-book transformation module.",
        "Web development using HTML, JavaScript, and PHP."
      ]
    }
  ]
};

const EDUCATION = {
  es: [
    "Bootcamp Full Stack - Desafío Latam (2023 - Presente)",
    "Ingeniería en Informática - INACAP (2016 - 2021)"
  ],
  en: [
    "Full Stack Bootcamp - Desafío Latam (2023 - Present)",
    "Software Engineering - INACAP (2016 - 2021)"
  ]
};

const SOCIALS = [
  { href: "https://github.com/Rpalmak", label: "GitHub", icon: Github },
  { href: "https://www.linkedin.com/in/raul-pk/", label: "LinkedIn", icon: Linkedin }
];

const CV_LINKS = [
  {
    lang: "ES",
    href: "https://drive.google.com/uc?export=download&id=1o5ny19MtEQIKW3E1rmhm6I_lfAKiARKO"
  },
  {
    lang: "EN",
    href: "https://drive.google.com/uc?export=download&id=1AjKQR6Wv0k6SERSUSg1ppVHEd_dqpx54"
  }
];

const CORE_STACK = [
  { key: "node", name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs/6cc24a" },
  { key: "react", name: "React", logo: "https://cdn.simpleicons.org/react/61dafb" },
  { key: "react-native", name: "React Native", logo: "https://cdn.simpleicons.org/react/61dafb" },
  { key: "mysql", name: "MySQL", logo: "https://cdn.simpleicons.org/mysql/4479a1" },
  { key: "firebase", name: "Firebase", logo: "https://cdn.simpleicons.org/firebase/ffca28" }
];

function usePortfolioData() {
  const [state, setState] = useState({ skills: [], works: [], certs: [] });
  const base = import.meta.env.BASE_URL;

  useEffect(() => {
    async function load() {
      const [skills, works, certs] = await Promise.all([
        fetch(`${base}data/skills.json`).then((r) => r.json()),
        fetch(`${base}data/trabajos.json`).then((r) => r.json()),
        fetch(`${base}data/certificados.json`).then((r) => r.json())
      ]);

      setState({
        skills: skills.skills ?? [],
        works: works.portfolio ?? [],
        certs: certs.certificates ?? []
      });
    }

    load().catch(() => setState({ skills: [], works: [], certs: [] }));
  }, [base]);

  return state;
}

function SectionTitle({ icon: Icon, children }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <Icon className="size-5 text-cyan-300" />
      <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">{children}</h2>
    </div>
  );
}

function AnimatedSection({ id, children }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8"
    >
      {children}
    </motion.section>
  );
}

function App() {
  const [lang, setLang] = useState("es");
  const [activeWorkCategory, setActiveWorkCategory] = useState("first");
  const [activeCertCategory, setActiveCertCategory] = useState("categoria1");
  const [selectedImage, setSelectedImage] = useState(null);
  const [showTop, setShowTop] = useState(false);
  const base = import.meta.env.BASE_URL;
  const { skills, works, certs } = usePortfolioData();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 22, mass: 0.12 });

  const t = UI_TEXT[lang];

  const availableWorkCategories = useMemo(() => {
    const known = ["first", "second", "third", "fourth", "react1", "game"];
    const present = known.filter((category) => works.some((work) => work.category === category));

    const byCategory = new Map();
    for (const category of present) {
      const yearValues = works
        .filter((work) => work.category === category)
        .flatMap((work) => (String(work.year || "").match(/\d{4}/g) || []).map(Number));

      const minYear = yearValues.length ? Math.min(...yearValues) : 0;
      const maxYear = yearValues.length ? Math.max(...yearValues) : 0;
      byCategory.set(category, { minYear, maxYear });
    }

    return present.sort((a, b) => {
      const ay = byCategory.get(a);
      const by = byCategory.get(b);
      if ((by?.maxYear || 0) !== (ay?.maxYear || 0)) {
        return (by?.maxYear || 0) - (ay?.maxYear || 0);
      }
      return (by?.minYear || 0) - (ay?.minYear || 0);
    });
  }, [works]);

  const categoryYearLabel = useMemo(() => {
    const map = new Map();
    for (const category of availableWorkCategories) {
      const yearValues = works
        .filter((work) => work.category === category)
        .flatMap((work) => (String(work.year || "").match(/\d{4}/g) || []).map(Number));

      if (!yearValues.length) {
        map.set(category, "");
        continue;
      }

      const minYear = Math.min(...yearValues);
      const maxYear = Math.max(...yearValues);
      map.set(category, minYear === maxYear ? `${maxYear}` : `${minYear}-${maxYear}`);
    }
    return map;
  }, [availableWorkCategories, works]);

  useEffect(() => {
    if (!availableWorkCategories.includes(activeWorkCategory) && availableWorkCategories.length > 0) {
      setActiveWorkCategory(availableWorkCategories[0]);
    }
  }, [activeWorkCategory, availableWorkCategories]);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const filteredWorks = works.filter((work) => work.category === activeWorkCategory);
  const filteredCerts = certs.filter((cert) => cert.category === activeCertCategory);

  const statProjects = works.length;
  const statCerts = certs.length;
  const navItems = [
    { id: "about", label: t.nav[0] },
    { id: "skills", label: t.nav[1] },
    { id: "experience", label: t.nav[2] },
    { id: "education", label: t.nav[3] },
    { id: "certificates", label: t.nav[4] },
    { id: "portfolio", label: t.nav[5] }
  ];

  return (
    <div className="min-h-screen bg-[#071421] text-slate-200">
      <motion.div style={{ scaleX }} className="scroll-progress" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(34,211,238,0.18),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.2),transparent_42%),linear-gradient(180deg,#071421_0%,#050b14_100%)]" />
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="ambient-orb ambient-orb-a" />
        <div className="ambient-orb ambient-orb-b" />
        <div className="ambient-orb ambient-orb-c" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-10 md:px-6">
        <motion.header
          id="about"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-9"
        >
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <nav className="flex flex-wrap gap-2 text-sm text-slate-300">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  className="ui-chip"
                  onClick={() =>
                    document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <button
              className="ui-btn inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-100"
              onClick={() => setLang((prev) => (prev === "es" ? "en" : "es"))}
            >
              <Languages className="size-4" />
              {lang === "es" ? "EN" : "ES"}
            </button>
          </div>

          <div className="grid gap-8 md:grid-cols-[260px_1fr] md:items-start">
            <div className="interactive-card rounded-2xl border border-cyan-300/20 bg-[#0d1a2a] p-5">
              <img
                src={`${base}img/profile.jpg`}
                alt="Raul Palma"
                className="mx-auto mb-5 aspect-square w-44 rounded-2xl object-cover md:w-48"
              />

              <div className="space-y-3 text-sm">
                <p className="inline-flex items-center gap-2 text-slate-300">
                  <MapPin className="size-4 text-cyan-300" />
                  {t.location}
                </p>
                <p className="inline-flex items-center gap-2 text-slate-300">
                  <Briefcase className="size-4 text-cyan-300" />
                  {t.years}: 2+
                </p>
                <p className="inline-flex items-center gap-2 text-slate-300">
                  <Award className="size-4 text-cyan-300" />
                  {t.certs}: {statCerts}
                </p>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2">
                {CV_LINKS.map((cv) => (
                  <a
                    key={cv.lang}
                    href={cv.href}
                    className="ui-btn inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400/20 px-3 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/30"
                  >
                    <Download className="size-4" />
                    {t.cv} {cv.lang}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.2em] text-cyan-300">Portfolio 2026</p>
              <h1 className="mb-3 text-4xl font-black leading-tight text-white md:text-5xl">Raul Palma Kaschel</h1>
              <p className="mb-4 text-lg text-cyan-100">{t.subtitle}</p>
              <p className="mb-4 inline-flex rounded-xl border border-emerald-300/35 bg-emerald-300/10 px-3 py-1 text-sm font-semibold text-emerald-100">
                {t.stackCore}
              </p>
              <p className="max-w-2xl text-slate-300">{t.intro}</p>

              <div className="mt-5">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200/90">{t.coreStackTitle}</p>
                <div className="flex flex-wrap gap-2">
                  {CORE_STACK.map((item) => (
                    <div
                      key={item.key}
                      className="interactive-card inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/[0.06] px-3 py-2 text-xs text-slate-200"
                    >
                      <img src={item.logo} alt={item.name} className="h-4 w-4 object-contain" loading="lazy" />
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {SOCIALS.map(({ href, label, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="ui-btn inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm hover:border-cyan-300/40 hover:text-cyan-100"
                  >
                    <Icon className="size-4" />
                    {label}
                  </a>
                ))}
                <a
                  href="mailto:rpalmakaschel@gmail.com"
                  className="ui-btn inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm hover:border-cyan-300/40 hover:text-cyan-100"
                >
                  <Mail className="size-4" />
                  Email
                </a>
              </div>
            </div>
          </div>
        </motion.header>

        <main className="space-y-10">
          <AnimatedSection id="skills">
            <SectionTitle icon={Briefcase}>{t.skills}</SectionTitle>
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  className="interactive-card rounded-xl border border-white/10 bg-[#0c1a2a]/80 p-3 text-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.03 }}
                >
                  <img
                    src={`${base}${skill.image}`}
                    alt={skill.alt}
                    className="mx-auto mb-2 h-10 w-10 object-contain"
                  />
                  <p className="text-xs text-slate-300">{skill.title}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection id="experience">
            <SectionTitle icon={Briefcase}>{t.experience}</SectionTitle>
            <div className="space-y-5">
              {EXPERIENCE[lang].map((item, index) => (
                <motion.article
                  key={item.role}
                  className="interactive-card rounded-2xl border border-white/10 bg-[#0c1a2a]/70 p-5"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                >
                  <h3 className="text-lg font-bold text-white">{item.role}</h3>
                  <p className="mb-3 text-sm text-cyan-100">{item.period}</p>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-slate-300">
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection id="education">
            <SectionTitle icon={GraduationCap}>{t.education}</SectionTitle>
            <div className="grid gap-3">
              {EDUCATION[lang].map((item, index) => (
                <motion.p
                  key={item}
                  className="interactive-card rounded-xl border border-white/10 bg-[#0c1a2a]/70 p-4 text-sm"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  {item}
                </motion.p>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection id="certificates">
            <SectionTitle icon={Award}>{t.certificates}</SectionTitle>
            <div className="mb-4 flex flex-wrap gap-2">
              {Object.entries(t.certFilter).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setActiveCertCategory(key)}
                  className={`ui-btn rounded-full px-4 py-1.5 text-sm ${
                    activeCertCategory === key
                      ? "bg-cyan-300 text-slate-900"
                      : "border border-white/10 bg-white/5 text-slate-300"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredCerts.map((cert, index) => (
                <motion.button
                  key={`${cert.category}-${cert.image}`}
                  onClick={() => setSelectedImage(`${base}${cert.image}`)}
                  className="interactive-card overflow-hidden rounded-xl border border-white/10 text-left"
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.03 }}
                >
                  <img src={`${base}${cert.image}`} alt={cert.alt} className="h-52 w-full object-cover" />
                </motion.button>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection id="portfolio">
            <SectionTitle icon={ExternalLink}>{t.portfolio}</SectionTitle>
            <p className="mb-4 rounded-xl border border-amber-300/30 bg-amber-300/10 px-4 py-3 text-sm text-amber-100">
              {t.portfolioDisclaimer}
            </p>
            <div className="mb-4 flex flex-wrap gap-2">
              {availableWorkCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveWorkCategory(category)}
                  className={`ui-btn rounded-full px-4 py-1.5 text-sm ${
                    activeWorkCategory === category
                      ? "bg-emerald-300 text-slate-900"
                      : "border border-white/10 bg-white/5 text-slate-300"
                  }`}
                >
                  {t.workFilter[category]} {categoryYearLabel.get(category) ? `(${categoryYearLabel.get(category)})` : ""}
                </button>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredWorks.map((work, index) => (
                <motion.button
                  key={`${work.category}-${work.image}`}
                  onClick={() => setSelectedImage(`${base}${work.image}`)}
                  className="interactive-card group overflow-hidden rounded-xl border border-white/10 text-left"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                >
                  <img
                    src={`${base}${work.image}`}
                    alt={work.title}
                    className="h-52 w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                  <div className="bg-[#0c1a2a] p-3">
                    <p className="text-sm text-slate-200">{work.title}</p>
                    <div className="mt-2 flex flex-wrap gap-2 text-xs">
                      {work.year ? (
                        <span className="rounded-md border border-cyan-300/30 bg-cyan-300/10 px-2 py-1 text-cyan-100">
                          {t.yearLabel}: {work.year}
                        </span>
                      ) : null}
                      {work.stack ? (
                        <span className="rounded-md border border-emerald-300/30 bg-emerald-300/10 px-2 py-1 text-emerald-100">
                          {t.stackLabel}: {work.stack}
                        </span>
                      ) : null}
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </AnimatedSection>
        </main>

        <footer className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-slate-400">
          <p>
            Built with React + Tailwind + Vite. Contacto: <a className="text-cyan-200" href="mailto:rpalmakaschel@gmail.com">rpalmakaschel@gmail.com</a>
          </p>
          <p className="mt-1">{t.projects}: {statProjects} | {t.certs}: {statCerts}</p>
        </footer>
      </div>

      <AnimatePresence>
        {selectedImage ? (
          <motion.div
            className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-4"
            onClick={() => setSelectedImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              className="ui-btn absolute right-6 top-6 rounded-full border border-white/30 bg-black/40 p-2 text-white"
              onClick={() => setSelectedImage(null)}
            >
              <X className="size-5" />
            </button>
            <motion.img
              src={selectedImage}
              alt="Preview"
              className="max-h-[90vh] max-w-full rounded-xl border border-white/20"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {showTop ? (
          <motion.button
            className="ui-btn fixed bottom-6 right-6 z-40 rounded-full border border-cyan-300/30 bg-[#0f2136]/90 p-3 text-cyan-100 backdrop-blur"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            initial={{ opacity: 0, y: 12, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
          >
            <ChevronUp className="size-5" />
          </motion.button>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default App;
