import { useState } from "react";
import Layout, { ContentCard } from "../../components/Layout";

const ACCENT = "#F43F5E";

const ITENS = [
  { icon: "pergaminho", title: "O Defunto Mestre", desc: "Escape room literário em quatro fases, cada uma com uma obra da literatura brasileira. Fuja usando o que aprendeu.", meta: "2EM · 30 min", href: "/jogos/bras-cubas/escape-bras-cubas.html", color: ACCENT, badge: "escape room" },
  { icon: "biblioteca", title: "Frase, Período e Orações Coordenadas", desc: "Escape room de sintaxe com quatro obras da literatura regionalista. Resolva enigmas gramaticais para avançar.", meta: "2EM · 30 min", href: "/jogos/bras-cubas-2ano/escape-oracoes-coordenadas.html", color: ACCENT, badge: "escape room" },
  { icon: "cacto", title: "Vozes do Sertão", desc: "Quatro obras do Pré-Modernismo e do Regionalismo em um escape room que atravessa o sertão brasileiro.", meta: "3EM · 30 min", href: "/jogos/vozes-sertao/escape-vozes-sertao.html", color: ACCENT, badge: "escape room" },
  { icon: "cadeado", title: "Diagnóstico de Rede", desc: "A rede da empresa caiu — investigue DNS, DHCP e IP para descobrir o que aconteceu. (na área de Informática)", meta: "2EM–3EM · 30 min", href: "/informatica/redes/escape-redes.html", color: "#10B981", badge: "escape room" },
];

export default function Jogos() {
  const [hov, setHov] = useState(null);
  return (
    <Layout
      title="Jogos Educativos — Prof. Marcos Cruz"
      active="Jogos"
      accent={ACCENT}
      heroImg="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1800&q=75"
      eyebrow="Escape Rooms · Aprender jogando"
      headline={<>Jogos<br />Educativos</>}
      sub="Escape rooms literários e técnicos: os alunos resolvem enigmas usando o conteúdo da aula para escapar. Aprender vira desafio."
    >
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-1.5 h-6 rounded-full" style={{ backgroundColor: ACCENT }} />
          <h2 className="font-display font-semibold text-2xl tracking-tight">Escape Rooms disponíveis</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {ITENS.map((it, i) => (
            <ContentCard key={i} item={it} hovered={hov === i} onEnter={() => setHov(i)} onLeave={() => setHov(null)} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
