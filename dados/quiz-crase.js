/* DADOS DO QUIZ — Crase e Regência Verbal */
const QUIZ_DADOS = {
  id: "crase-regencia",
  titulo: "Crase e Regência Verbal",
  descricao: "8 questões para dominar de vez o acento grave e a regência dos verbos mais traiçoeiros.",
  tempoPorQuestao: 50,
  questoes: [
    { pergunta: "Em \"Vou à escola\", a crase ocorre porque:",
      opcoes: [
        "O verbo \"ir\" exige a preposição \"a\" e \"escola\" admite o artigo \"a\"",
        "Toda palavra feminina recebe crase",
        "O verbo \"ir\" exige artigo definido",
        "\"Escola\" é um substantivo abstrato"
      ],
      correta: "O verbo \"ir\" exige a preposição \"a\" e \"escola\" admite o artigo \"a\"",
      explicacao: "Crase = preposição \"a\" + artigo \"a\". Quem vai, vai A algum lugar; e dizemos A escola. a + a = à." },
    { pergunta: "Qual frase está correta quanto à regência de \"assistir\" no sentido de VER?",
      opcoes: [
        "Assistimos à palestra ontem.",
        "Assistimos a palestra ontem.",
        "Assistimos na palestra ontem.",
        "Assistimos pela palestra ontem."
      ],
      correta: "Assistimos à palestra ontem.",
      explicacao: "Assistir (= ver) é transitivo indireto: pede a preposição \"a\". Como \"palestra\" é feminina com artigo, ocorre a crase." },
    { pergunta: "\"Cheguei ___ casa cansado.\" — o que preenche corretamente a lacuna?",
      opcoes: [
        "a (sem crase)",
        "à (com crase)",
        "na",
        "em"
      ],
      correta: "a (sem crase)",
      explicacao: "Quando \"casa\" significa a própria moradia e não vem especificada, não há artigo — logo, não há crase: \"Cheguei a casa\"." },
    { pergunta: "Diante de palavra MASCULINA, a crase:",
      opcoes: [
        "Nunca ocorre",
        "É facultativa",
        "Ocorre só com verbos de movimento",
        "Ocorre se houver preposição"
      ],
      correta: "Nunca ocorre",
      explicacao: "Crase exige o artigo feminino \"a\". Antes de masculino, não há esse artigo: andar a cavalo, vender a prazo, ir a pé." },
    { pergunta: "\"Refiro-me ___ sua proposta.\" — antes de pronome possessivo feminino, a crase é:",
      opcoes: [
        "Facultativa (à ou a, ambas corretas)",
        "Obrigatória",
        "Proibida",
        "Obrigatória apenas no plural"
      ],
      correta: "Facultativa (à ou a, ambas corretas)",
      explicacao: "Antes de possessivos femininos (minha, sua, nossa...) o artigo é opcional — então a crase também é: \"Refiro-me à/a sua proposta\"." },
    { pergunta: "Qual frase respeita a regência do verbo \"obedecer\"?",
      opcoes: [
        "Devemos obedecer às leis de trânsito.",
        "Devemos obedecer as leis de trânsito.",
        "Devemos obedecer com as leis de trânsito.",
        "Devemos obedecer nas leis de trânsito."
      ],
      correta: "Devemos obedecer às leis de trânsito.",
      explicacao: "Obedecer é transitivo indireto: quem obedece, obedece A algo. Preposição \"a\" + artigo \"as\" = às." },
    { pergunta: "\"A reunião vai das 9h ___ 11h.\" — complete:",
      opcoes: [
        "às",
        "as",
        "a",
        "há"
      ],
      correta: "às",
      explicacao: "Paralelismo: se usamos \"das\" (de + as), fechamos com \"às\" (a + as). Das 9h às 11h. Se fosse \"de 9h\", seria \"a 11h\"." },
    { pergunta: "\"O erro implicou ___ demissão do gerente.\" — complete corretamente:",
      opcoes: [
        "a (sem crase)",
        "à (com crase)",
        "na",
        "com a"
      ],
      correta: "a (sem crase)",
      explicacao: "Implicar (= acarretar) é transitivo direto: não pede preposição. O \"a\" ali é apenas o artigo de \"demissão\" — sem preposição, sem crase." }
  ]
};
