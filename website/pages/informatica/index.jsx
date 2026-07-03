import { useState } from "react";
import Layout, { ContentCard } from "../../components/Layout";

const ACCENT = "#10B981";

const ITENS = [
  { emoji: "🐧", title: "Avaliação — Linux Mint", desc: "Sistema operacional, terminal e comandos essenciais na prática.", meta: "1EM–2EM · 40 min", href: "/informatica/linux/avaliacao.html", color: ACCENT, badge: "avaliação" },
  { emoji: "🌐", title: "Apostila — Redes de Computadores", desc: "IP, DNS, DHCP, gateway e protocolos explicados passo a passo.", meta: "Curso Técnico · leitura", href: "/informatica/redes/apostila.html", color: ACCENT, badge: "apostila" },
  { emoji: "🔐", title: "Escape Room — Diagnóstico de Rede", desc: "A rede da empresa caiu. Use DNS, DHCP e IP para descobrir o culpado.", meta: "2EM–3EM · 30 min", href: "/informatica/redes/escape-redes.html", color: ACCENT, badge: "jogo" },
  { emoji: "📋", title: "Projeto de Pesquisa — Guia Completo", desc: "Guia para montar seu projeto científico do zero, módulo por módulo.", meta: "Curso Técnico · contínuo", href: "/informatica/projeto-pesquisa.html", color: ACCENT, badge: "projeto" },
  { emoji: "🖧", title: "Endereçamento IP", desc: "Detetive de IP, Batalha de Ping e Escape: dominando o endereçamento.", meta: "Em produção", color: "#64748B", badge: "em breve", soon: true },
  { emoji: "🛡️", title: "Segurança e Malware", desc: "Tipos de malware, ataques digitais e boas práticas de proteção.", meta: "Em produção", color: "#64748B", badge: "em breve", soon: true },
];

export default function Informatica() {
  const [hov, setHov] = useState(null);
  return (
    <Layout
      title="Informática Técnica — Prof. Marcos Cruz"
      active="Informática"
      accent={ACCENT}
      heroImg="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=75"
      eyebrow="Curso Técnico · Laboratório"
      headline={<>Informática<br />Técnica</>}
      sub="Do terminal Linux ao diagnóstico de redes — apostilas, avaliações e escape rooms que ensinam tecnologia resolvendo problemas reais."
    >
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-1.5 h-6 rounded-full" style={{ backgroundColor: ACCENT }} />
          <h2 className="font-display font-semibold text-2xl tracking-tight">Todos os conteúdos</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ITENS.map((it, i) => (
            <ContentCard key={i} item={it} hovered={hov === i} onEnter={() => setHov(i)} onLeave={() => setHov(null)} />
          ))}
        </div>
        <p className="text-xs text-slate-600 mt-6 font-mono2">Os módulos marcados como "em breve" estão em produção e serão liberados ao longo do ano.</p>
      </section>
    </Layout>
  );
}
