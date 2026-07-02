// Dados reais das atividades do portal — portados da home anterior.
// Cada item aponta para uma página que existe de verdade no site.

export const ATIVIDADES = [
  /* Literatura */
  { secao: "literatura", titulo: "Atividades por Obra — 5 completas", tipo: "🎯 Fechadas + dissertativas + vestibular", anos: ["2EM", "3EM"], tempo: "30 min cada", url: "/obras.html", novo: true },
  { secao: "literatura", titulo: "Quiz — Pré-Modernismo Brasileiro", tipo: "🎮 Quiz cronometrado", anos: ["2EM", "3EM"], tempo: "10 min", url: "/atividades/quiz-premodernismo.html", novo: true },
  { secao: "literatura", titulo: "Escape Room — Brás Cubas", tipo: "🔐 Escape room", anos: ["2EM"], tempo: "30 min", url: "/jogos/bras-cubas/escape-bras-cubas.html", novo: false },
  { secao: "literatura", titulo: "Escape Room — Vozes do Sertão", tipo: "🔐 Escape room", anos: ["3EM"], tempo: "30 min", url: "/jogos/vozes-sertao/escape-vozes-sertao.html", novo: false },
  { secao: "literatura", titulo: "Avaliação — Pré-Modernismo", tipo: "📋 Avaliação", anos: ["2EM", "3EM"], tempo: "40 min", url: "/portugues/pre-modernismo/avaliacao.html", novo: false },
  { secao: "literatura", titulo: "Avaliação — Romantismo e Realismo", tipo: "📋 Avaliação", anos: ["1EM", "2EM"], tempo: "40 min", url: "/portugues/romantismo-realismo/avaliacao.html", novo: false },

  /* Gramática */
  { secao: "gramatica", titulo: "Quiz — Crase e Regência Verbal", tipo: "🎮 Quiz cronometrado", anos: ["1EM", "2EM"], tempo: "10 min", url: "/atividades/quiz-crase.html", novo: true },
  { secao: "gramatica", titulo: "Escape Room — Orações Coordenadas", tipo: "🔐 Escape room", anos: ["2EM"], tempo: "30 min", url: "/jogos/bras-cubas-2ano/escape-oracoes-coordenadas.html", novo: false },
  { secao: "gramatica", titulo: "Avaliação — Crase", tipo: "📋 Avaliação", anos: ["1EM", "2EM"], tempo: "40 min", url: "/portugues/crase-gramatica/avaliacao.html", novo: false },
  { secao: "gramatica", titulo: "Redação ENEM", tipo: "✍️ Produção textual", anos: ["3EM"], tempo: "60 min", url: "/portugues/redacao-enem/avaliacao.html", novo: false },

  /* Informática */
  { secao: "informatica", titulo: "Quiz — Redes: DNS, DHCP e IP", tipo: "🎮 Quiz cronometrado", anos: ["2EM", "3EM"], tempo: "10 min", url: "/atividades/quiz-redes.html", novo: true },
  { secao: "informatica", titulo: "Avaliação — Linux Mint", tipo: "📋 Avaliação", anos: ["1EM", "2EM"], tempo: "40 min", url: "/informatica/linux/avaliacao.html", novo: false },
  { secao: "informatica", titulo: "Apostila — Redes de Computadores", tipo: "📖 Apostila", anos: ["2EM", "3EM"], tempo: "leitura", url: "/informatica/redes/apostila.html", novo: false },
  { secao: "informatica", titulo: "Escape Room — Diagnóstico de Rede", tipo: "🔐 Escape room", anos: ["2EM", "3EM"], tempo: "30 min", url: "/informatica/redes/escape-redes.html", novo: true },
  { secao: "informatica", titulo: "Projeto de Pesquisa — Guia Completo", tipo: "✍️ Projeto guiado", anos: ["2EM", "3EM"], tempo: "uso contínuo", url: "/informatica/projeto-pesquisa.html", novo: true },

  /* Arte */
  { secao: "arte", titulo: "Quiz — Linguagem do Cinema", tipo: "🎮 Quiz cronometrado", anos: ["9º", "1EM"], tempo: "10 min", url: "/atividades/quiz-cinema.html", novo: true },
  { secao: "arte", titulo: "Atividade — Cinema e Audiovisual", tipo: "📋 Atividade", anos: ["9º", "1EM"], tempo: "30 min", url: "/artes/cinema/atividade.html", novo: false },

  /* SAEB · SIMAVE */
  { secao: "saeb", titulo: "Portal de Treino — Por Descritor (D01 a D28)", tipo: "📚 Portal completo", anos: ["9º"], tempo: "uso contínuo", url: "/saeb/index.html", novo: true },
  { secao: "saeb", titulo: "Simulado SAEB Avançado", tipo: "📝 Simulado", anos: ["9º"], tempo: "40 min", url: "/atividades/simulado-saeb-avancado.html", novo: false },
  { secao: "saeb", titulo: "Quiz — SAEB Língua Portuguesa", tipo: "🎮 Quiz", anos: ["9º"], tempo: "15 min", url: "/atividades/quiz-saeb.html", novo: false },
  { secao: "saeb", titulo: "Matriz de Referência SIMAVE — LP 9º ano", tipo: "📄 Documento oficial", anos: ["9º"], tempo: "consulta", url: "https://simave.educacao.mg.gov.br/resources/arquivos/matrizes/2021/LP/EF_9.pdf", ext: true, novo: false },

  /* BNCC · CRMG */
  { secao: "bncc", titulo: "Quiz — Interpretação de Texto (BNCC)", tipo: "📖 Quiz cronometrado", anos: ["8º", "9º"], tempo: "12 min", url: "/atividades/quiz-bncc.html", novo: true },
  { secao: "bncc", titulo: "Planejamento CRMG — Planos de aula", tipo: "🔗 Site oficial", anos: ["6º", "7º", "8º", "9º"], tempo: "consulta", url: "https://planos.professormg.com.br/", ext: true, novo: false },
  { secao: "bncc", titulo: "BNCC — Documento completo (MEC)", tipo: "📄 Documento oficial", anos: ["6º", "7º", "8º", "9º"], tempo: "consulta", url: "https://www.gov.br/mec/pt-br/cne/bncc_ensino_medio.pdf", ext: true, novo: false },

  /* ENEM */
  { secao: "enem", titulo: "Portal ENEM · Língua Portuguesa", tipo: "🎯 Simulado por tema · Redação · Meu Progresso", anos: ["9º", "1EM", "2EM", "3EM"], tempo: "uso contínuo", url: "/enem.html", novo: true },
  { secao: "enem", titulo: "ENEM 2025 — Linguagens (Prova Real)", tipo: "🔴 Questões reais", anos: ["2EM", "3EM"], tempo: "25 min", url: "/atividades/simulado-enem-2025.html", novo: true },
  { secao: "enem", titulo: "ENEM 2024 — Leitura e Linguagem (Prova Real)", tipo: "🔴 Questões reais", anos: ["2EM", "3EM"], tempo: "25 min", url: "/atividades/simulado-enem-2024.html", novo: true },
  { secao: "enem", titulo: "ENEM 2024 — Literatura e Arte (Prova Real)", tipo: "🔴 Questões reais", anos: ["2EM", "3EM"], tempo: "25 min", url: "/atividades/simulado-enem-2024-lit.html", novo: true },
  { secao: "enem", titulo: "ENEM 2023 — Leitura e Linguagem (Prova Real)", tipo: "🔴 Questões reais", anos: ["2EM", "3EM"], tempo: "25 min", url: "/atividades/simulado-enem-2023.html", novo: true },
  { secao: "enem", titulo: "ENEM 2023 — Literatura Brasileira (Prova Real)", tipo: "🔴 Questões reais", anos: ["2EM", "3EM"], tempo: "25 min", url: "/atividades/simulado-enem-2023-2.html", novo: true },
  { secao: "enem", titulo: "Simulado ENEM — Linguagens (autoral)", tipo: "📝 Simulado", anos: ["2EM", "3EM"], tempo: "25 min", url: "/atividades/simulado-enem.html", novo: true },
  { secao: "enem", titulo: "Quiz — Obras Literárias do ENEM", tipo: "📚 Quiz", anos: ["2EM", "3EM"], tempo: "15 min", url: "/atividades/quiz-obras.html", novo: true },
  { secao: "enem", titulo: "Quiz — Obras Literárias II", tipo: "📚 Quiz · vestibular", anos: ["2EM", "3EM"], tempo: "15 min", url: "/atividades/quiz-obras2.html", novo: true },
  { secao: "enem", titulo: "Biblioteca — 30 Obras que caem no ENEM", tipo: "🏛 Acervo", anos: ["1EM", "2EM", "3EM"], tempo: "consulta", url: "/obras.html", novo: true },
  { secao: "enem", titulo: "Cine-Leitura — Trailer: Central do Brasil", tipo: "🎬 Vídeo + questões", anos: ["9º", "1EM", "2EM"], tempo: "15 min", url: "/atividades/video-central-brasil.html", novo: true },
  { secao: "enem", titulo: 'Música & Leitura — "Cidadão"', tipo: "🎵 Vídeo + questões", anos: ["9º", "1EM", "2EM"], tempo: "15 min", url: "/atividades/video-cidadao.html", novo: true },
  { secao: "enem", titulo: "ENEM 2022 — Simulado (Prova Real)", tipo: "🔴 Questões reais", anos: ["2EM", "3EM"], tempo: "25 min", url: "/atividades/simulado-enem-2022.html", novo: false },
  { secao: "enem", titulo: "ENEM 2020 — Simulado (Prova Real)", tipo: "🔴 Questões reais", anos: ["2EM", "3EM"], tempo: "25 min", url: "/atividades/simulado-enem-2020.html", novo: false },
  { secao: "enem", titulo: "ENEM 2019 — Simulado (Prova Real)", tipo: "🔴 Questões reais", anos: ["2EM", "3EM"], tempo: "25 min", url: "/atividades/simulado-enem-2019.html", novo: false },
  { secao: "enem", titulo: "Provas e gabaritos oficiais (INEP)", tipo: "📄 Site oficial", anos: ["3EM"], tempo: "consulta", url: "https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem/provas-e-gabaritos", ext: true, novo: false },
];

export const SECAO_LABEL = {
  literatura: "Literatura",
  gramatica: "Gramática",
  informatica: "Informática",
  arte: "Arte",
  saeb: "SAEB · SIMAVE",
  bncc: "BNCC · CRMG",
  enem: "ENEM",
};

export const SECAO_COR = {
  literatura: "#A855F7",
  gramatica: "#3B82F6",
  informatica: "#10B981",
  arte: "#F59E0B",
  saeb: "#D946EF",
  bncc: "#F43F5E",
  enem: "#22D3EE",
};
