/* ============================================================
   DADOS DO QUIZ — Pré-Modernismo Brasileiro
   Este é o ÚNICO arquivo que muda de um quiz para outro.
   Edite as questões aqui; o motor (quiz-engine.js) faz o resto.
   ============================================================ */
const QUIZ_DADOS = {
  id: "premodernismo",            // usado para guardar o recorde no navegador
  titulo: "Pré-Modernismo Brasileiro",
  descricao: "Revisão dos autores e obras do período de 1902 a 1922. Leia com atenção: o tempo corre!",
  tempoPorQuestao: 45,            // segundos

  questoes: [
    {
      pergunta: "Qual evento marca o fim do período pré-modernista?",
      opcoes: [
        "A Semana de Arte Moderna de 1922",
        "A Proclamação da República",
        "A publicação de Os Sertões",
        "A Revolução de 1930"
      ],
      correta: "A Semana de Arte Moderna de 1922",
      explicacao: "A Semana de 22, em São Paulo, inaugura oficialmente o Modernismo e encerra a fase de transição pré-modernista."
    },
    {
      pergunta: "A obra \"Os Sertões\", de Euclides da Cunha, relata qual conflito histórico?",
      opcoes: [
        "A Guerra de Canudos",
        "A Revolta da Vacina",
        "A Guerra do Paraguai",
        "A Revolta da Chibata"
      ],
      correta: "A Guerra de Canudos",
      explicacao: "Euclides cobriu a Guerra de Canudos (1896–1897) como correspondente e transformou a experiência no livro publicado em 1902."
    },
    {
      pergunta: "Qual autor é conhecido pela poesia de vocabulário científico e tom pessimista?",
      opcoes: [
        "Augusto dos Anjos",
        "Olavo Bilac",
        "Castro Alves",
        "Mário de Andrade"
      ],
      correta: "Augusto dos Anjos",
      explicacao: "Em \"Eu\" (1912), Augusto dos Anjos mistura termos científicos com temas como morte e decomposição — um estilo único na nossa literatura."
    },
    {
      pergunta: "Por que Policarpo Quaresma é considerado um herói trágico?",
      opcoes: [
        "Seu idealismo ingênuo se choca com a realidade corrupta do país",
        "Ele morre em combate defendendo a pátria",
        "Ele trai os próprios ideais por dinheiro",
        "Ele abandona o Brasil decepcionado"
      ],
      correta: "Seu idealismo ingênuo se choca com a realidade corrupta do país",
      explicacao: "O major acredita cegamente no Brasil, mas cada projeto seu fracassa diante da burocracia e da ingratidão — até o desfecho trágico."
    },
    {
      pergunta: "O que significa o \"pré\" em Pré-Modernismo?",
      opcoes: [
        "Período de transição que antecede e prepara o Modernismo",
        "Movimento contrário ao Modernismo",
        "Primeira fase do Romantismo",
        "Estilo que imita autores portugueses"
      ],
      correta: "Período de transição que antecede e prepara o Modernismo",
      explicacao: "Não é uma escola com manifesto próprio, mas um momento de transição: autores que já rompiam com o passado sem formar um movimento unificado."
    },
    {
      pergunta: "Qual era a ocupação de Policarpo Quaresma no início do romance?",
      opcoes: [
        "Funcionário público no Arsenal de Guerra",
        "Professor de português",
        "Fazendeiro no interior",
        "Oficial da Marinha"
      ],
      correta: "Funcionário público no Arsenal de Guerra",
      explicacao: "Policarpo era subsecretário no Arsenal de Guerra — um burocrata metódico que dedicava as horas livres ao estudo do Brasil."
    },
    {
      pergunta: "Qual era a formação de Euclides da Cunha?",
      opcoes: [
        "Engenheiro militar",
        "Médico",
        "Advogado",
        "Padre"
      ],
      correta: "Engenheiro militar",
      explicacao: "Engenheiro de formação militar, Euclides foi a Canudos como correspondente do jornal O Estado de S. Paulo."
    },
    {
      pergunta: "O personagem Jeca Tatu, de Monteiro Lobato, representa:",
      opcoes: [
        "O caipira abandonado pelo Estado, sem saúde nem educação",
        "O imigrante europeu recém-chegado",
        "O coronel rico do interior",
        "O operário das fábricas paulistas"
      ],
      correta: "O caipira abandonado pelo Estado, sem saúde nem educação",
      explicacao: "Criado no livro Urupês, o Jeca simboliza o homem do campo esquecido pelos governos — mais vítima do abandono do que preguiçoso."
    },
    {
      pergunta: "Qual poema de Augusto dos Anjos trata da decomposição e da morte, citando o \"verme\"?",
      opcoes: [
        "Psicologia de um Vencido",
        "Canção do Exílio",
        "O Navio Negreiro",
        "Via Láctea"
      ],
      correta: "Psicologia de um Vencido",
      explicacao: "No soneto, o eu lírico se descreve consumido pela fatalidade e pelo \"verme\" — imagem máxima do pessimismo do autor."
    },
    {
      pergunta: "O que caracteriza o estilo dos autores pré-modernistas em conjunto?",
      opcoes: [
        "Regionalismo e denúncia social, sem um programa estético unificado",
        "Defesa da arte pela arte e da forma perfeita",
        "Idealização romântica do indígena",
        "Experimentação radical com versos livres"
      ],
      correta: "Regionalismo e denúncia social, sem um programa estético unificado",
      explicacao: "O que une Euclides, Lima Barreto, Lobato e Augusto dos Anjos é o olhar crítico sobre o Brasil real — cada um com seu próprio estilo."
    }
  ]
};
