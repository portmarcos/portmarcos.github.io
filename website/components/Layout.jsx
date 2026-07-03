import Head from "next/head";
import { useRef } from "react";
import {
  ArrowRight, BookOpen, BookMarked, Flower2, Gamepad2, Target,
  BookText, PenLine, Search, ScrollText, Sparkles, Trees, Church,
  Palette, Film, Video, Hand, Waypoints, Terminal, Network, ShieldAlert,
  ClipboardList, Lock, Library, GraduationCap, FileText
} from "lucide-react";

// Mapa central de ícones (linha fina) usados nos cards
export const ICONS = {
  livro: BookOpen, obras: BookMarked, rosa: Flower2, jogo: Gamepad2,
  alvo: Target, texto: BookText, redacao: PenLine, lupa: Search,
  pergaminho: ScrollText, brilho: Sparkles, cacto: Trees, igreja: Church,
  paleta: Palette, cinema: Film, video: Video, mao: Hand,
  rede: Waypoints, terminal: Terminal, redes: Network, escudo: ShieldAlert,
  clipboard: ClipboardList, cadeado: Lock, biblioteca: Library,
  enem: GraduationCap, doc: FileText,
};

export const AREAS_NAV = [
  { label: "Início", href: "/" },
  { label: "Português", href: "/portugues/index.html" },
  { label: "Informática", href: "/informatica/index.html" },
  { label: "Artes", href: "/artes/index.html" },
  { label: "ENEM", href: "/enem.html" },
  { label: "Jogos", href: "/jogos/index.html" },
  { label: "Obras", href: "/obras.html" },
];

export function Logo({ size = 36 }) {
  const gid = "mcg";
  return (
    <span
      className="relative inline-flex items-center justify-center rounded-xl"
      style={{
        width: size, height: size,
        background: "linear-gradient(140deg, #22D3EE 0%, #0EA5E9 55%, #6366F1 100%)",
        boxShadow: "0 4px 14px -4px rgba(34,211,238,0.6), inset 0 1px 0 rgba(255,255,255,0.35)",
      }}
    >
      <svg width={size} height={size} viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id={gid} x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0B1120" />
            <stop offset="1" stopColor="#1E293B" />
          </linearGradient>
        </defs>
        <path d="M8 25V12.5c0-.6.7-.9 1.2-.5L14 16l4.8-4c.5-.4 1.2-.1 1.2.5V25" stroke="url(#mcg)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M28 14.5c-1.3-1.6-3.9-1.7-5.4-.2-1.7 1.7-1.7 4.7 0 6.4 1.5 1.5 4.1 1.4 5.4-.2" stroke="url(#mcg)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="absolute inset-0 rounded-xl" style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.15)" }} />
    </span>
  );
}

export function Sparkles3({ color }) {
  return (
    <>
      <span className="absolute rounded-full" style={{ top: 10, right: 22, width: 4, height: 4, backgroundColor: color, opacity: 0.6 }} />
      <span className="absolute rounded-full" style={{ top: 26, right: 12, width: 3, height: 3, backgroundColor: color, opacity: 0.45 }} />
      <span className="absolute rounded-full" style={{ top: 16, right: 40, width: 2, height: 2, backgroundColor: color, opacity: 0.4 }} />
    </>
  );
}

export default function Layout({ children, title, active, accent = "#22D3EE", heroImg, eyebrow, headline, sub }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      <Head>
        <title>{title}</title>
      </Head>

      {/* HERO with photo background */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          {heroImg && (
            <img src={heroImg} alt="" className="w-full h-full object-cover" style={{ filter: "brightness(0.5) saturate(1.1)" }} />
          )}
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(2,6,23,0.6) 0%, rgba(2,6,23,0.82) 55%, #020617 100%)" }} />
          <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse 900px 460px at 18% 12%, ${accent}22, transparent 60%)` }} />
        </div>

        {/* NAV */}
        <nav className="relative z-20 max-w-6xl mx-auto flex items-center justify-between px-6 py-5">
          <a href="/" className="flex items-center gap-3">
            <Logo size={36} />
            <span className="font-display font-semibold text-sm tracking-tight">Prof. Marcos Cruz</span>
          </a>
          <div className="hidden md:flex items-center gap-6 font-mono2 text-xs tracking-wide uppercase">
            {AREAS_NAV.map((n) => (
              <a key={n.href} href={n.href} className={`pb-1 border-b-2 transition-colors ${active === n.label ? "border-current" : "text-slate-400 hover:text-slate-100 border-transparent"}`} style={active === n.label ? { color: accent, borderColor: accent } : {}}>
                {n.label}
              </a>
            ))}
          </div>
          <a href="/enem.html" className="px-4 h-9 rounded-lg bg-slate-100 text-slate-950 text-sm font-medium hover:bg-white transition-colors inline-flex items-center">
            Portal ENEM
          </a>
        </nav>

        {/* HERO CONTENT */}
        <section className="relative z-10 max-w-6xl mx-auto px-6 pt-14 pb-24">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border font-mono2 text-xs tracking-wider uppercase mb-6" style={{ borderColor: `${accent}66`, color: accent, backgroundColor: "rgba(2,6,23,0.5)" }}>
              <span className="w-1.5 h-1.5 rounded-full glow-dot" style={{ backgroundColor: accent }} />
              {eyebrow}
            </div>
          )}
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight mb-5">
            {headline}
          </h1>
          {sub && <p className="text-slate-300 text-base leading-relaxed max-w-xl">{sub}</p>}
        </section>
      </div>

      <div className="relative z-10">{children}</div>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-slate-900 mt-8">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <a href="/" className="flex items-center gap-3">
            <Logo size={36} />
            <div>
              <div className="font-display font-semibold text-sm">Prof. Marcos Cruz</div>
              <div className="text-xs text-slate-600">Educação · Tecnologia · Conhecimento</div>
            </div>
          </a>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-slate-400">
            {AREAS_NAV.slice(1).map((n) => (
              <a key={n.href} href={n.href} className="hover:text-slate-100 transition-colors">{n.label}</a>
            ))}
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 py-5 border-t border-slate-900 text-center">
          <span className="text-xs text-slate-600">© 2026 Prof. Marcos Cruz. Todos os direitos reservados.</span>
        </div>
      </footer>
    </div>
  );
}

// Reusable content card com ícone de linha fina + efeito de luz no cursor
export function ContentCard({ item, hovered, onEnter, onLeave }) {
  const ref = useRef(null);
  const isHover = hovered;
  const disabled = item.soon;
  const Wrapper = disabled ? "div" : "a";
  const Icon = ICONS[item.icon] || BookOpen;

  function onMove(e) {
    const el = ref.current;
    if (!el || disabled) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  }

  return (
    <Wrapper
      ref={ref}
      {...(disabled ? {} : { href: item.href, ...(item.ext ? { target: "_blank", rel: "noopener" } : {}) })}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onMouseMove={onMove}
      className={`spotlight group relative rounded-2xl border p-6 transition-all duration-300 block overflow-hidden ${disabled ? "cursor-default" : "cursor-pointer"}`}
      style={{
        borderColor: isHover && !disabled ? `${item.color}55` : "rgba(51,65,85,0.6)",
        background: "rgba(15,23,42,0.4)",
        transform: isHover && !disabled ? "translateY(-4px)" : "translateY(0)",
        boxShadow: isHover && !disabled ? `0 12px 32px -12px ${item.color}40` : "none",
        opacity: disabled ? 0.55 : 1,
        "--spot": `${item.color}22`,
      }}
    >
      {/* camada de luz que segue o cursor */}
      {!disabled && (
        <span
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: "radial-gradient(320px circle at var(--mx) var(--my), var(--spot), transparent 60%)" }}
        />
      )}
      <div className="relative">
        <div className="flex items-start justify-between mb-4">
          <div className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110" style={{ backgroundColor: `${item.color}1f`, color: item.color }}>
            <Icon size={21} strokeWidth={1.75} />
          </div>
          {item.badge && (
            <span className="text-xs font-mono2 px-2 py-0.5 rounded-full" style={disabled ? { color: "#94A3B8", border: "1px solid rgba(148,163,184,0.3)" } : { color: item.color, backgroundColor: `${item.color}1f` }}>
              {item.badge}
            </span>
          )}
        </div>
        <h3 className="font-display font-semibold text-base mb-1.5 text-slate-100">{item.title}</h3>
        <p className="text-sm text-slate-500 leading-snug mb-4">{item.desc}</p>
        <div className="flex items-center justify-between">
          <span className="font-mono2 text-xs text-slate-500">{item.meta}</span>
          {!disabled && (
            <div className="w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-300" style={{ borderColor: isHover ? item.color : "rgba(51,65,85,0.8)", color: isHover ? item.color : "#64748B", transform: isHover ? "translateX(2px)" : "translateX(0)" }}>
              <ArrowRight size={13} strokeWidth={2} />
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
}
