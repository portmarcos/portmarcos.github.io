import { useState, useMemo } from "react";
import Head from "next/head";
import {
  PenTool, Terminal, Palette, GraduationCap, Library, Gamepad2,
  ArrowRight, ArrowUpRight, Search, ChevronRight, Check, Mail,
  ShieldCheck, BookOpenCheck, Clock3, ClipboardList, ExternalLink, X
} from "lucide-react";
import { ATIVIDADES, SECAO_LABEL, SECAO_COR } from "../data/atividades";

const AREAS = [
  {
    icon: PenTool, title: "Português", color: "#3B82F6", href: "/portugues/index.html",
    items: ["Literatura e Gramática", "Avaliações por módulo", "Redação ENEM", "Crase, Pré-Modernismo…"],
    img: "https://images.unsplash.com/photo-1606326608690-4e0281b1e588?auto=format&fit=crop&w=800&q=70",
  },
  {
    icon: GraduationCap, title: "ENEM", color: "#22D3EE", href: "/enem.html", destaque: true,
    items: ["9 temas · 128 questões reais", "Simulados de 50 minutos", "Provas reais 2019–2025", "Gabarito comentado"],
    img: "https://images.unsplash.com/photo-1518133835878-5a93cc3f89e5?auto=format&fit=crop&w=800&q=70",
  },
  {
    icon: Terminal, title: "Informática", color: "#10B981", href: "/informatica/index.html",
    items: ["Linux Mint", "Redes: DNS, DHCP e IP", "Escape room de diagnóstico", "Projeto de pesquisa guiado"],
    img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=70",
  },
  {
    icon: Palette, title: "Artes", color: "#F59E0B", href: "/artes/index.html",
    items: ["Linguagem do cinema", "Cinema e audiovisual", "Quiz cronometrado", "Atividades práticas"],
    img: "https://images.unsplash.com/photo-1522410818928-5522dacd5066?auto=format&fit=crop&w=800&q=70",
  },
  {
    icon: Gamepad2, title: "Jogos Educativos", color: "#F43F5E", href: "/jogos/index.html",
    items: ["Escape Room — Brás Cubas", "Escape Room — Vozes do Sertão", "Orações Coordenadas", "Diagnóstico de Rede"],
    img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=70",
  },
  {
    icon: Library, title: "Obras Literárias", color: "#A855F7", href: "/obras.html",
    items: ["30 obras que caem no ENEM", "Atividades por obra", "Dom Casmurro, Brás Cubas…", "Análises e fichamentos"],
    img: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=70",
  },
];

const PILLS = [
  { label: "Crase", q: "crase" },
  { label: "Simulado ENEM 2025", q: "2025" },
  { label: "Escape Room", q: "escape" },
  { label: "SAEB", q: "saeb" },
  { label: "Redação ENEM", q: "redação" },
  { label: "Linux", q: "linux" },
];

const RECENTES = [
  { tag: "ENEM", tagColor: "#22D3EE", titulo: "Portal ENEM · Língua Portuguesa", desc: "9 temas, 128 questões reais com gabarito comentado e simulados de 50 min.", href: "/enem.html", img: "https://images.unsplash.com/photo-1518133835878-5a93cc3f89e5?auto=format&fit=crop&w=700&q=70", quando: "atualizado esta semana" },
  { tag: "PROVA REAL", tagColor: "#F43F5E", titulo: "ENEM 2025 — Linguagens", desc: "Questões da prova mais recente, direto do caderno azul do INEP.", href: "/atividades/simulado-enem-2025.html", img: "https://images.unsplash.com/photo-1647846241789-8e5076893b20?auto=format&fit=crop&w=700&q=70", quando: "25 min" },
  { tag: "LITERATURA", tagColor: "#A855F7", titulo: "Biblioteca — 30 Obras do ENEM", desc: "Acervo com atividades completas: Dom Casmurro, Brás Cubas, Vidas Secas…", href: "/obras.html", img: "https://images.unsplash.com/photo-1600181982553-ce7d36051c01?auto=format&fit=crop&w=700&q=70", quando: "consulta livre" },
  { tag: "JOGO", tagColor: "#10B981", titulo: "Escape Room — Diagnóstico de Rede", desc: "Resolva o mistério da rede fora do ar usando DNS, DHCP e IP.", href: "/informatica/redes/escape-redes.html", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=700&q=70", quando: "30 min" },
];

function norm(t) {
  return t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function NavLink({ href, children, active }) {
  return (
    <a href={href} className={`pb-1 border-b-2 transition-colors ${active ? "text-cyan-400 border-cyan-400" : "text-slate-400 hover:text-slate-100 border-transparent"}`}>
      {children}
    </a>
  );
}

function Sparkles3({ color }) {
  return (
    <>
      <span className="absolute rounded-full" style={{ top: 10, right: 22, width: 4, height: 4, backgroundColor: color, opacity: 0.6 }} />
      <span className="absolute rounded-full" style={{ top: 26, right: 12, width: 3, height: 3, backgroundColor: color, opacity: 0.45 }} />
      <span className="absolute rounded-full" style={{ top: 16, right: 40, width: 2, height: 2, backgroundColor: color, opacity: 0.4 }} />
    </>
  );
}

export default function Home() {
  const [hoveredCat, setHoveredCat] = useState(null);
  const [hoveredRec, setHoveredRec] = useState(null);
  const [revealAnswer, setRevealAnswer] = useState(false);
  const [busca, setBusca] = useState("");

  const resultados = useMemo(() => {
    const t = norm(busca.trim());
    if (!t) return [];
    return ATIVIDADES.filter((a) => norm(a.titulo).includes(t) || norm(SECAO_LABEL[a.secao]).includes(t)).slice(0, 8);
  }, [busca]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      <Head>
        <title>Portal do Professor Marcos Cruz</title>
      </Head>

      {/* HERO with photo background */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1419640303358-44f0d27f48e7?auto=format&fit=crop&w=1800&q=75"
            alt=""
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.55) saturate(1.1)" }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(2,6,23,0.55) 0%, rgba(2,6,23,0.75) 55%, #020617 100%)" }} />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 900px 500px at 20% 15%, rgba(34,211,238,0.18), transparent 60%)" }} />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 700px 500px at 90% 10%, rgba(168,85,247,0.15), transparent 60%)" }} />
        </div>

        {/* NAV */}
        <nav className="relative z-20 max-w-6xl mx-auto flex items-center justify-between px-6 py-5">
          <a href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center font-display font-bold text-sm text-slate-950" style={{ background: "linear-gradient(135deg, #22D3EE, #0EA5E9)" }}>
              MC
            </div>
            <span className="font-display font-semibold text-sm tracking-tight">Prof. Marcos Cruz</span>
          </a>
          <div className="hidden md:flex items-center gap-7 font-mono2 text-xs tracking-wide uppercase">
            <NavLink href="/" active>Início</NavLink>
            <NavLink href="/portugues/index.html">Português</NavLink>
            <NavLink href="/informatica/index.html">Informática</NavLink>
            <NavLink href="/artes/index.html">Artes</NavLink>
            <NavLink href="/enem.html">ENEM</NavLink>
            <NavLink href="/jogos/index.html">Jogos</NavLink>
            <NavLink href="/obras.html">Obras</NavLink>
          </div>
          <a href="/enem.html" className="px-4 h-9 rounded-lg bg-slate-100 text-slate-950 text-sm font-medium hover:bg-white transition-colors inline-flex items-center">
            Entrar no ENEM
          </a>
        </nav>

        {/* HERO CONTENT */}
        <section className="relative z-10 max-w-6xl mx-auto px-6 pt-14 pb-28 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-800 font-mono2 text-xs tracking-wider uppercase mb-7 text-cyan-300" style={{ backgroundColor: "rgba(8,51,68,0.5)" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 glow-dot" />
              Educação · Tecnologia · Conhecimento
            </div>

            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight mb-6">
              Prof.
              <br />
              Marcos Cruz
            </h1>

            <p className="text-slate-300 text-base leading-relaxed max-w-md mb-9">
              Materiais, atividades e projetos para transformar o aprendizado em algo
              incrível — de Machado de Assis ao terminal Linux.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a href="#areas" className="group inline-flex items-center gap-2 px-5 h-11 rounded-lg bg-cyan-400 text-slate-950 font-medium text-sm hover:bg-cyan-300 transition-colors shadow-lg">
                Explorar conteúdos
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="/enem.html" className="inline-flex items-center gap-2 px-5 h-11 rounded-lg border border-slate-600 text-slate-100 font-medium text-sm hover:border-slate-400 transition-colors" style={{ backgroundColor: "rgba(15,23,42,0.4)" }}>
                Portal ENEM
                <ChevronRight size={16} />
              </a>
            </div>
          </div>

          {/* Floating cards */}
          <div className="relative hidden lg:block" style={{ height: 400 }}>
            <a
              href="/enem.html"
              className="float-card absolute rounded-2xl border border-slate-700 p-5 shadow-2xl cursor-pointer block"
              style={{ top: 10, left: 10, width: 290, backgroundColor: "rgba(15,23,42,0.85)", backdropFilter: "blur(16px)" }}
              onMouseEnter={() => setRevealAnswer(true)}
              onMouseLeave={() => setRevealAnswer(false)}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono2 text-xs text-slate-400 tracking-wide">ENEM 2023 · QUESTÃO 08</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>
              <p className="text-sm text-slate-200 leading-snug mb-4">
                "Se a sua linguagem, a lusitana, ainda conserva a palavra da opressão..."
                <span className="text-slate-400"> — o preconceito com o português do Brasil se deve à</span>
              </p>
              <div className="space-y-1.5">
                {["diferença de instrução formal", "crença numa língua ideal", "distância territorial"].map((opt, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs border transition-colors duration-300"
                    style={revealAnswer && i === 1
                      ? { borderColor: "rgba(52,211,153,0.5)", backgroundColor: "rgba(52,211,153,0.15)", color: "#6EE7B7" }
                      : { borderColor: "#334155", color: "#CBD5E1" }}
                  >
                    <span className="w-4 h-4 rounded-full border flex items-center justify-center shrink-0" style={{ fontSize: 9, borderColor: revealAnswer && i === 1 ? "#34D399" : "#475569" }}>
                      {revealAnswer && i === 1 ? <Check size={10} /> : String.fromCharCode(65 + i)}
                    </span>
                    {opt}
                  </div>
                ))}
              </div>
              <div className="mt-3 text-xs text-slate-500 font-mono2">passe o mouse para conferir · clique para treinar</div>
            </a>

            <div
              className="float-card-2 absolute rounded-2xl border border-slate-700 p-5 shadow-2xl"
              style={{ bottom: 10, right: 0, width: 260, backgroundColor: "rgba(15,23,42,0.85)", backdropFilter: "blur(16px)" }}
            >
              <div className="flex items-center gap-3 mb-3">
                <img src="/assets/img/professor.jpg" alt="Prof. Marcos Cruz" className="w-10 h-10 rounded-full object-cover border border-slate-600" />
                <div className="font-display leading-none text-cyan-400" style={{ fontSize: 26, opacity: 0.5 }}>"</div>
              </div>
              <p className="text-sm text-slate-200 leading-relaxed mb-3">
                Ensinar não é transferir conhecimento, mas criar as possibilidades para a sua própria produção.
              </p>
              <p className="text-xs text-slate-400 font-mono2">— Paulo Freire</p>
            </div>
          </div>
        </section>
      </div>

      {/* AREA CARDS */}
      <section id="areas" className="relative z-10 max-w-6xl mx-auto px-6 -mt-16 pb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {AREAS.map((c, i) => {
            const Icon = c.icon;
            const isHover = hoveredCat === i;
            return (
              <a
                key={i}
                href={c.href}
                onMouseEnter={() => setHoveredCat(i)}
                onMouseLeave={() => setHoveredCat(null)}
                className="group relative rounded-2xl border cursor-pointer transition-all duration-300 overflow-hidden block"
                style={{
                  borderColor: isHover ? `${c.color}66` : "rgba(51,65,85,0.6)",
                  backgroundColor: "rgba(15,23,42,0.85)",
                  transform: isHover ? "translateY(-5px)" : "translateY(0)",
                  boxShadow: isHover ? `0 16px 36px -14px ${c.color}55` : "0 4px 16px -8px rgba(0,0,0,0.4)",
                }}
              >
                <div className="relative overflow-hidden" style={{ height: 120 }}>
                  <img src={c.img} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, ${c.color}22 0%, rgba(2,6,23,0.55) 55%, rgba(2,6,23,0.95) 100%)` }} />
                  <Sparkles3 color={c.color} />
                  {c.destaque && (
                    <span className="absolute top-4 right-4 flex items-center gap-1 text-xs font-mono2 px-2 py-0.5 rounded-full" style={{ color: c.color, backgroundColor: "rgba(2,6,23,0.7)" }}>
                      <span className="w-1.5 h-1.5 rounded-full glow-dot" style={{ backgroundColor: c.color }} />
                      destaque
                    </span>
                  )}
                  <div
                    className="absolute bottom-3 left-5 w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
                    style={{ backgroundColor: "rgba(2,6,23,0.65)", color: c.color, border: `1px solid ${c.color}55`, boxShadow: isHover ? `0 0 24px ${c.color}55` : "none" }}
                  >
                    <Icon size={22} strokeWidth={1.75} />
                  </div>
                </div>

                <div className="p-6 pt-4">
                  <h3 className="font-display font-semibold text-lg mb-3 text-slate-100">{c.title}</h3>
                  <ul className="space-y-1.5 mb-5">
                    {c.items.map((item, j) => (
                      <li key={j} className="text-sm text-slate-400 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: c.color, opacity: 0.7 }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ml-auto"
                    style={{ borderColor: isHover ? c.color : "rgba(51,65,85,0.8)", color: isHover ? c.color : "#64748B", transform: isHover ? "translateX(2px)" : "translateX(0)" }}
                  >
                    <ArrowRight size={14} />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* FUNCTIONAL SEARCH */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-slate-800 p-6" style={{ backgroundColor: "rgba(15,23,42,0.5)" }}>
          <div className="flex items-center gap-3 mb-4">
            <Search size={18} className="text-slate-500 shrink-0" />
            <input
              type="text"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              placeholder="Buscar qualquer atividade, conteúdo ou material..."
              className="flex-1 bg-transparent outline-none text-slate-200 placeholder-slate-600 text-sm"
            />
            {busca && (
              <button onClick={() => setBusca("")} className="w-8 h-8 rounded-lg border border-slate-700 text-slate-400 flex items-center justify-center hover:text-slate-100 transition-colors shrink-0">
                <X size={14} />
              </button>
            )}
          </div>

          {busca.trim() === "" ? (
            <div className="flex flex-wrap gap-2">
              {PILLS.map((p, i) => (
                <button key={i} onClick={() => setBusca(p.q)} className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full border border-slate-800 text-xs text-slate-400 hover:border-cyan-800 hover:text-cyan-300 transition-colors">
                  {p.label} <span className="text-slate-600">+</span>
                </button>
              ))}
            </div>
          ) : resultados.length === 0 ? (
            <p className="text-sm text-slate-500 px-1">Nada encontrado para "{busca}". Tente "crase", "escape" ou "enem".</p>
          ) : (
            <div className="grid sm:grid-cols-2 gap-2">
              {resultados.map((a, i) => (
                <a
                  key={i}
                  href={a.url}
                  target={a.ext ? "_blank" : undefined}
                  rel={a.ext ? "noopener" : undefined}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl border border-slate-800 hover:border-slate-600 transition-colors group"
                  style={{ backgroundColor: "rgba(2,6,23,0.5)" }}
                >
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: SECAO_COR[a.secao] }} />
                  <div className="min-w-0 flex-1">
                    <div className="text-sm text-slate-200 truncate">{a.titulo}</div>
                    <div className="text-xs text-slate-500 font-mono2">{SECAO_LABEL[a.secao]} · {a.tempo}</div>
                  </div>
                  {a.ext
                    ? <ExternalLink size={13} className="text-slate-600 group-hover:text-slate-300 transition-colors shrink-0" />
                    : <ArrowRight size={13} className="text-slate-600 group-hover:text-slate-300 transition-colors shrink-0" />}
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* STATS */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: BookOpenCheck, val: "128", label: "Questões reais no Portal ENEM", color: "#22D3EE" },
            { icon: ClipboardList, val: "40+", label: "Atividades e simulados", color: "#34D399" },
            { icon: ShieldCheck, val: "22", label: "Descritores SAEB com treino", color: "#D946EF" },
            { icon: Clock3, val: "2019–25", label: "Provas reais do ENEM", color: "#F59E0B" },
          ].map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="rounded-2xl border border-slate-800 p-5 flex items-center gap-4" style={{ backgroundColor: "rgba(15,23,42,0.4)" }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${s.color}1f`, color: s.color }}>
                  <Icon size={20} />
                </div>
                <div>
                  <div className="font-display font-bold text-xl leading-none mb-1">{s.val}</div>
                  <div className="text-xs text-slate-500">{s.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* MATERIAIS EM DESTAQUE */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-20">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="font-display font-semibold text-2xl tracking-tight mb-1.5">Materiais em destaque</h2>
            <p className="text-slate-500 text-sm">Os conteúdos mais usados pela turma — todos prontos para abrir e usar.</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {RECENTES.map((u, i) => {
            const isHover = hoveredRec === i;
            return (
              <a
                key={i}
                href={u.href}
                onMouseEnter={() => setHoveredRec(i)}
                onMouseLeave={() => setHoveredRec(null)}
                className="rounded-2xl border overflow-hidden cursor-pointer transition-all duration-300 block"
                style={{
                  borderColor: isHover ? `${u.tagColor}55` : "rgba(51,65,85,0.6)",
                  transform: isHover ? "translateY(-4px)" : "translateY(0)",
                  boxShadow: isHover ? `0 12px 32px -12px ${u.tagColor}40` : "none",
                }}
              >
                <div className="h-28 relative overflow-hidden">
                  <img src={u.img} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(155deg, ${u.tagColor}30, rgba(2,6,23,0.7))` }} />
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded-full text-xs font-mono2 tracking-wide text-white" style={{ backgroundColor: `${u.tagColor}35`, border: `1px solid ${u.tagColor}` }}>
                    {u.tag}
                  </span>
                </div>
                <div className="p-4" style={{ backgroundColor: "rgba(15,23,42,0.5)" }}>
                  <h3 className="font-display font-semibold text-sm mb-1.5 leading-snug text-slate-100">{u.titulo}</h3>
                  <p className="text-xs text-slate-500 leading-snug mb-3">{u.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-600 font-mono2">{u.quando}</span>
                    <ArrowRight size={13} style={{ color: isHover ? u.tagColor : "#475569" }} className="transition-colors" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* CTA ENEM */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-24">
        <a
          href="/enem.html"
          className="rounded-2xl border border-slate-800 p-8 flex flex-col md:flex-row items-center gap-6 justify-between block hover:border-cyan-800 transition-colors"
          style={{ background: "linear-gradient(120deg, rgba(6,182,212,0.08), rgba(15,23,42,0.5))" }}
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-cyan-500 bg-opacity-20 text-cyan-300">
              <GraduationCap size={22} />
            </div>
            <div>
              <h3 className="font-display font-semibold text-lg mb-1">Vai fazer o ENEM? Comece por aqui.</h3>
              <p className="text-slate-500 text-sm">128 questões reais em 9 temas, com progresso salvo e gabarito comentado.</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-2 px-5 h-11 rounded-lg bg-cyan-400 text-slate-950 font-medium text-sm shrink-0">
            Abrir o Portal ENEM <ArrowUpRight size={16} />
          </span>
        </a>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-slate-900">
        <div className="max-w-6xl mx-auto px-6 py-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center font-display font-bold text-sm text-slate-950" style={{ background: "linear-gradient(135deg, #22D3EE, #0EA5E9)" }}>
                MC
              </div>
              <span className="font-display font-semibold text-sm">Prof. Marcos Cruz</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Comprometido com a educação de qualidade, a tecnologia e a transformação de vidas por meio do conhecimento.
            </p>
          </div>

          <div>
            <h4 className="font-mono2 text-xs tracking-wider uppercase text-slate-600 mb-4">Áreas</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><a href="/portugues/index.html" className="hover:text-slate-100 transition-colors">Português</a></li>
              <li><a href="/informatica/index.html" className="hover:text-slate-100 transition-colors">Informática</a></li>
              <li><a href="/artes/index.html" className="hover:text-slate-100 transition-colors">Artes</a></li>
              <li><a href="/jogos/index.html" className="hover:text-slate-100 transition-colors">Jogos Educativos</a></li>
              <li><a href="/obras.html" className="hover:text-slate-100 transition-colors">Obras Literárias</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono2 text-xs tracking-wider uppercase text-slate-600 mb-4">ENEM & Avaliações</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><a href="/enem.html" className="hover:text-slate-100 transition-colors">Portal ENEM · LP</a></li>
              <li><a href="/atividades/simulado-enem-2025.html" className="hover:text-slate-100 transition-colors">ENEM 2025 — Prova real</a></li>
              <li><a href="/saeb/index.html" className="hover:text-slate-100 transition-colors">Painel SAEB / SIMAVE</a></li>
              <li><a href="/portugues/redacao-enem/avaliacao.html" className="hover:text-slate-100 transition-colors">Redação ENEM</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono2 text-xs tracking-wider uppercase text-slate-600 mb-4">Referências</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><a href="https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem/provas-e-gabaritos" target="_blank" rel="noopener" className="hover:text-slate-100 transition-colors">Provas oficiais (INEP)</a></li>
              <li><a href="https://planos.professormg.com.br/" target="_blank" rel="noopener" className="hover:text-slate-100 transition-colors">Planejamento CRMG</a></li>
              <li><a href="https://www.gov.br/mec/pt-br/cne/bncc_ensino_medio.pdf" target="_blank" rel="noopener" className="hover:text-slate-100 transition-colors">BNCC (MEC)</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-slate-600">© 2026 Prof. Marcos Cruz. Todos os direitos reservados.</span>
          <span className="text-xs text-slate-600 font-mono2">ENEM: conteúdo baseado em provas oficiais do INEP.</span>
        </div>
      </footer>
    </div>
  );
}
