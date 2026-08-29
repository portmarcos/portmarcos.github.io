import { useState } from "react";
import Layout, { ContentCard } from "../../components/Layout";

const ACCENT = "#10B981";

// Ícones autorais (SVG desenhado à mão, estilo duotone/linha) — trocados dos
// ícones genéricos da lucide-react por pedido do professor ("ficaram
// desfocados/pobres"); inspirados no acabamento do Flaticon, mas originais,
// pra não depender de licença de terceiros.
const SVG = {
  terminal: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2.5" y="4" width="19" height="16" rx="3" stroke="currentColor" stroke-width="1.6"/><path d="M2.5 8.2h19" stroke="currentColor" stroke-width="1.6"/><circle cx="5.3" cy="6.1" r="0.6" fill="currentColor"/><circle cx="7.1" cy="6.1" r="0.6" fill="currentColor"/><circle cx="8.9" cy="6.1" r="0.6" fill="currentColor"/><path d="M6 12l2.6 2.2L6 16.4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.5 16.4h5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
  redes: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="4.6" r="2.4" stroke="currentColor" stroke-width="1.6"/><circle cx="4.6" cy="17.5" r="2.4" stroke="currentColor" stroke-width="1.6"/><circle cx="19.4" cy="17.5" r="2.4" stroke="currentColor" stroke-width="1.6"/><path d="M10.4 6.6 6.6 15.4M13.6 6.6l3.8 8.8M7.4 17.5h9.2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle cx="12" cy="4.6" r="0.9" fill="currentColor"/><circle cx="4.6" cy="17.5" r="0.9" fill="currentColor"/><circle cx="19.4" cy="17.5" r="0.9" fill="currentColor"/></svg>',
  cadeado: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4.5" y="10.5" width="15" height="10" rx="2.6" stroke="currentColor" stroke-width="1.6"/><path d="M7.5 10.5V7.8a4.5 4.5 0 0 1 9 0v2.7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle cx="12" cy="14.6" r="1.5" fill="currentColor"/><path d="M12 16.1v2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
  clipboard: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4.5" y="4.2" width="15" height="17.6" rx="2.4" stroke="currentColor" stroke-width="1.6"/><rect x="8.5" y="2.5" width="7" height="3.4" rx="1.4" stroke="currentColor" stroke-width="1.6"/><path d="M8 12h5.4M8 15.4h8M8 8.6h8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
  curso: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 9.4 12 5l9.5 4.4L12 13.8 2.5 9.4Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M6.6 11.4v4.3c0 1.6 2.4 2.9 5.4 2.9s5.4-1.3 5.4-2.9v-4.3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 9.6v5.6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle cx="21" cy="16.6" r="1" fill="currentColor"/></svg>',
  ip: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="5" cy="6" r="2.1" stroke="currentColor" stroke-width="1.6"/><circle cx="19" cy="6" r="2.1" stroke="currentColor" stroke-width="1.6"/><path d="M7 7.4 17 15.6M9 5h6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M17.5 15c0 3-3.3 5.4-3.3 5.4S10.9 18 10.9 15a3.3 3.3 0 0 1 6.6 0Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="14.2" cy="15" r="1.1" fill="currentColor"/></svg>',
  escudo: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.8 4.6 5.6v6c0 5 3.2 8.3 7.4 9.6 4.2-1.3 7.4-4.6 7.4-9.6v-6L12 2.8Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M8.8 12.2l2.3 2.3 4.1-4.6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>',
};

const ITENS = [
  { icon: "terminal", svg: SVG.terminal, title: "Avaliação — Linux Mint", desc: "Sistema operacional, terminal e comandos essenciais na prática.", meta: "1EM–2EM · 40 min", href: "/informatica/linux/avaliacao.html", color: ACCENT },
  { icon: "redes", svg: SVG.redes, title: "Apostila — Redes de Computadores", desc: "IP, DNS, DHCP, gateway e protocolos explicados passo a passo.", meta: "Curso Técnico · leitura", href: "/informatica/redes/apostila.html", color: "#2563EB" },
  { icon: "cadeado", svg: SVG.cadeado, title: "Escape Room — Diagnóstico de Rede", desc: "A rede da empresa caiu. Use DNS, DHCP e IP para descobrir o culpado.", meta: "2EM–3EM · 30 min", href: "/informatica/redes/escape-redes.html", color: "#F59E0B" },
  { icon: "clipboard", svg: SVG.clipboard, title: "Projeto de Pesquisa — Guia Completo", desc: "Guia para montar seu projeto científico do zero, módulo por módulo.", meta: "Curso Técnico · contínuo", href: "/informatica/projeto-pesquisa.html", color: "#7C3AED" },
  { icon: "enem", svg: SVG.curso, title: "Explorador Digital", desc: "Curso autoinstrutivo de 15 aulas: hardware, software, internet, senhas, algoritmos e IA — com atividades e certificado ao final.", meta: "6º-7º ano · 15 aulas", href: "/informatica/explorador-digital.html", color: "#EA580C" },
  { icon: "rede", svg: SVG.ip, title: "Endereçamento IP", desc: "Detetive de IP, Batalha de Ping e Escape: dominando o endereçamento.", meta: "Em produção", color: "#64748B", soon: true },
  { icon: "escudo", svg: SVG.escudo, title: "Apostila — Segurança da Informação", desc: "Tríade CID, malware, criptografia, função hash, segurança física e ambiental — com quiz interativo.", meta: "Curso Técnico · leitura", href: "/informatica/seguranca/apostila.html", color: "#DC2626" },
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
