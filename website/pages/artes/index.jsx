import { useState } from "react";
import Layout, { ContentCard } from "../../components/Layout";

const ACCENT = "#F59E0B";

const ITENS = [
  { icon: "cinema", title: "Linguagem Cinematográfica", desc: "Planos, ângulos, montagem e como o cinema conta histórias com imagens.", meta: "9º–1EM · 30 min", href: "/artes/cinema/atividade.html", color: ACCENT, badge: "atividade" },
  { icon: "video", title: "Quiz — Linguagem do Cinema", desc: "Quiz cronometrado sobre os elementos da narrativa audiovisual.", meta: "9º–1EM · 10 min", href: "/atividades/quiz-cinema.html", color: ACCENT, badge: "quiz" },
  { icon: "mao", title: "Arte Rupestre", desc: "Bingo e ficha de atividade sobre as primeiras manifestações artísticas.", meta: "Em produção", color: "#64748B", badge: "em breve", soon: true },
  { icon: "brilho", title: "Op Art", desc: "Ilusão de ótica e movimento: criando arte que engana os olhos.", meta: "Em produção", color: "#64748B", badge: "em breve", soon: true },
  { icon: "cacto", title: "Land Art", desc: "Arte feita com e na natureza, usando a paisagem como tela.", meta: "Em produção", color: "#64748B", badge: "em breve", soon: true },
  { icon: "igreja", title: "Barroco Mineiro", desc: "Aleijadinho e o esplendor do barroco nas Minas Gerais.", meta: "Em produção", color: "#64748B", badge: "em breve", soon: true },
  { icon: "paleta", title: "Stencil e Arte Urbana", desc: "Do grafite ao stencil: a arte que ocupa as ruas da cidade.", meta: "Em produção", color: "#64748B", badge: "em breve", soon: true },
];

export default function Artes() {
  const [hov, setHov] = useState(null);
  return (
    <Layout
      title="Artes — Prof. Marcos Cruz"
      active="Artes"
      accent={ACCENT}
      heroImg="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1800&q=75"
      eyebrow="Cinema · Artes Visuais · História da Arte"
      headline="Artes"
      sub="Do rupestre ao stencil, do barroco mineiro à linguagem do cinema — atividades práticas que aproximam a arte da vida dos estudantes."
    >
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-1.5 h-6 rounded-full" style={{ backgroundColor: ACCENT }} />
          <h2 className="font-display font-semibold text-2xl tracking-tight">Conteúdos e atividades</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ITENS.map((it, i) => (
            <ContentCard key={i} item={it} hovered={hov === i} onEnter={() => setHov(i)} onLeave={() => setHov(null)} />
          ))}
        </div>
        <p className="text-xs text-slate-600 mt-6 font-mono2">Cinema já está no ar. Os demais módulos estão em produção e chegam ao longo do ano.</p>
      </section>
    </Layout>
  );
}
