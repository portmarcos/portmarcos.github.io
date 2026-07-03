import { useState } from "react";
import Layout, { ContentCard } from "../../components/Layout";

const ACCENT = "#3B82F6";

const MODULOS = [
  {
    grupo: "Literatura",
    itens: [
      { emoji: "📖", title: "Pré-Modernismo", desc: "Euclides da Cunha, Lima Barreto, Augusto dos Anjos e Monteiro Lobato.", meta: "3EM · ENEM · 40 min", href: "/portugues/pre-modernismo/avaliacao.html", color: ACCENT },
      { emoji: "🌹", title: "Romantismo e Realismo", desc: "De Alencar a Machado de Assis: idealização e crítica social.", meta: "1EM–2EM · 40 min", href: "/portugues/romantismo-realismo/avaliacao.html", color: ACCENT },
      { emoji: "📚", title: "30 Obras que caem no ENEM", desc: "Acervo completo com resumo, contexto e atividades por obra.", meta: "Consulta livre", href: "/obras.html", color: ACCENT },
      { emoji: "🎮", title: "Quiz — Pré-Modernismo", desc: "Quiz cronometrado para fixar autores e características do período.", meta: "10 min", href: "/atividades/quiz-premodernismo.html", color: ACCENT },
    ],
  },
  {
    grupo: "Gramática & Redação",
    itens: [
      { emoji: "✍️", title: "Crase e Regência Verbal", desc: "Regras do acento grave, casos obrigatórios, proibidos e facultativos.", meta: "6º–3EM · 40 min", href: "/portugues/crase-gramatica/avaliacao.html", color: "#06B6D4" },
      { emoji: "🎯", title: "Quiz — Crase e Regência", desc: "Treino rápido e cronometrado com correção comentada.", meta: "10 min", href: "/atividades/quiz-crase.html", color: "#06B6D4" },
      { emoji: "📝", title: "Redação ENEM", desc: "Estrutura dissertativo-argumentativa, 5 competências e proposta de intervenção.", meta: "3EM · 60 min", href: "/portugues/redacao-enem/avaliacao.html", color: "#06B6D4" },
      { emoji: "🔍", title: "Interpretação de Texto (BNCC)", desc: "Quiz de leitura e compreensão alinhado à BNCC.", meta: "8º–9º · 12 min", href: "/atividades/quiz-bncc.html", color: "#06B6D4" },
    ],
  },
];

export default function Portugues() {
  const [hov, setHov] = useState(null);
  return (
    <Layout
      title="Língua Portuguesa — Prof. Marcos Cruz"
      active="Português"
      accent={ACCENT}
      heroImg="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1800&q=75"
      eyebrow="Literatura · Gramática · Redação"
      headline={<>Língua<br />Portuguesa</>}
      sub="Da fundação do Romantismo brasileiro à colocação da crase — módulos com avaliações, quizzes e produção textual prontos para usar em sala."
    >
      {MODULOS.map((sec, si) => (
        <section key={si} className="max-w-6xl mx-auto px-6 pb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-1.5 h-6 rounded-full" style={{ backgroundColor: si === 0 ? ACCENT : "#06B6D4" }} />
            <h2 className="font-display font-semibold text-2xl tracking-tight">{sec.grupo}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sec.itens.map((it, i) => {
              const key = `${si}-${i}`;
              return <ContentCard key={key} item={it} hovered={hov === key} onEnter={() => setHov(key)} onLeave={() => setHov(null)} />;
            })}
          </div>
        </section>
      ))}
    </Layout>
  );
}
