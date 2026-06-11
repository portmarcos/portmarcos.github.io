/* SIMULADO ENEM — Linguagens, Códigos e suas Tecnologias */
const QUIZ_DADOS = {
  id: "enem-linguagens-1",
  titulo: "Simulado ENEM — Linguagens I",
  descricao: "10 questões no estilo da prova, cobrindo as competências mais cobradas: variação linguística, funções da linguagem, gêneros, literatura e argumentação.",
  tempoPorQuestao: 150,
  questoes: [
    { texto: "<p>— Ô compadre, esse ano a chuva num veio não. A roça tá que é um pó só.</p><p>— Pois é, seu Zé. Mas o senhor vai ver: quando ela vem, vem de uma vez.</p>",
      pergunta: "Sobre a linguagem do diálogo, é correto afirmar que:",
      opcoes: [
        "É uma variedade legítima da língua, adequada à situação de uso entre os falantes",
        "Representa erro de português que deve ser corrigido",
        "Mostra que os falantes não conseguem se comunicar",
        "É inadequada para qualquer situação de fala"
      ],
      correta: "É uma variedade legítima da língua, adequada à situação de uso entre os falantes",
      explicacao: "Competência 8 do ENEM: as variedades linguísticas identificam grupos sociais e regiões — a fala rural cumpre perfeitamente sua função comunicativa. Julgar como \"erro\" é preconceito linguístico." },
    { texto: "<p>VISTA O FUTURO. CALCE A MUDANÇA. <strong>Tênis EcoPasso</strong> — feito de garrafas que você descartou.</p>",
      pergunta: "A função da linguagem predominante nesse anúncio é:",
      opcoes: [
        "Conativa (apelativa), pois busca persuadir o leitor por meio do imperativo",
        "Referencial, pois apenas informa dados técnicos",
        "Metalinguística, pois a língua explica a própria língua",
        "Fática, pois testa o canal de comunicação"
      ],
      correta: "Conativa (apelativa), pois busca persuadir o leitor por meio do imperativo",
      explicacao: "Os verbos no imperativo (\"vista\", \"calce\") centram a mensagem no receptor para convencê-lo — marca da função conativa, típica da publicidade." },
    { texto: "<p>Não é razoável que, em pleno século XXI, milhões de brasileiros ainda dependam de caixas-d'água improvisadas. O saneamento universal não é luxo: é a mais básica das políticas de saúde. Cada real investido em água tratada economiza quatro em internações.</p>",
      pergunta: "O argumento que sustenta a tese do texto baseia-se em:",
      opcoes: [
        "Relação custo-benefício entre saneamento e saúde pública",
        "Apelo à tradição das comunidades",
        "Citação de autoridade religiosa",
        "Comparação com países europeus"
      ],
      correta: "Relação custo-benefício entre saneamento e saúde pública",
      explicacao: "A proporção \"cada real investido economiza quatro\" é um argumento de evidência econômica ligando saneamento a saúde — estratégia argumentativa clássica do ENEM." },
    { pergunta: "\"A esperança dançou na corda bamba de sombrinha.\" Em versos como esse, o poeta constrói imagem por meio de:",
      opcoes: [
        "Personificação, atribuindo ação humana a um sentimento",
        "Onomatopeia, imitando sons",
        "Hipérbole, exagerando quantidades",
        "Eufemismo, suavizando uma ideia"
      ],
      correta: "Personificação, atribuindo ação humana a um sentimento",
      explicacao: "A esperança (abstrata) \"dança\" — ganha corpo e gesto humanos. A personificação (prosopopeia) é figura recorrente nas questões de linguagem poética." },
    { pergunta: "Uma propaganda reescreve o início de \"Canção do Exílio\" trocando a palavra \"palmeiras\" pelo nome de um produto. Esse procedimento caracteriza:",
      opcoes: [
        "Intertextualidade por paródia, com desvio do sentido original para fins persuasivos",
        "Plágio sem efeito de sentido",
        "Tradução intersemiótica",
        "Citação científica direta"
      ],
      correta: "Intertextualidade por paródia, com desvio do sentido original para fins persuasivos",
      explicacao: "O diálogo entre textos (intertextualidade) com subversão do original é paródia — o ENEM adora cobrar esse reaproveitamento de clássicos pela publicidade." },
    { pergunta: "Em um requerimento dirigido à direção da escola, o registro linguístico adequado exige:",
      opcoes: [
        "Norma-padrão, com vocabulário formal e estrutura própria do gênero",
        "Gírias, para aproximar o leitor",
        "Abreviações de internet, pela rapidez",
        "Regionalismos, para marcar identidade"
      ],
      correta: "Norma-padrão, com vocabulário formal e estrutura própria do gênero",
      explicacao: "Competência: adequar a variedade à situação. Documentos oficiais pedem norma-padrão — não por ser \"melhor\", mas por ser a convenção do gênero." },
    { pergunta: "A prosa de Machado de Assis no Realismo caracteriza-se por:",
      opcoes: [
        "Ironia refinada e análise psicológica dos personagens",
        "Idealização do amor e da mulher",
        "Exaltação da natureza brasileira",
        "Linguagem regionalista do sertão"
      ],
      correta: "Ironia refinada e análise psicológica dos personagens",
      explicacao: "Machado abandona a idealização romântica e disseca a alma humana — ciúme, vaidade, interesse — com ironia fina. Presença constante nas provas." },
    { pergunta: "A Semana de Arte Moderna de 1922 propôs, entre outros pontos:",
      opcoes: [
        "Liberdade formal e valorização da identidade cultural brasileira",
        "Retorno aos modelos clássicos greco-latinos",
        "Imitação fiel da literatura portuguesa",
        "Abandono completo da língua portuguesa"
      ],
      correta: "Liberdade formal e valorização da identidade cultural brasileira",
      explicacao: "O Modernismo de 22 rompe com o academicismo: verso livre, linguagem coloquial e busca do \"ser brasileiro\" — base para questões de literatura no ENEM." },
    { texto: "<p>Campanha de trânsito: <strong>\"A pressa de chegar não pode ser maior que a vontade de voltar.\"</strong></p>",
      pergunta: "O efeito persuasivo da frase apoia-se principalmente:",
      opcoes: [
        "No paralelismo e no contraste entre chegar e voltar para casa",
        "Em dados estatísticos de acidentes",
        "Na citação de uma lei de trânsito",
        "Na descrição técnica dos veículos"
      ],
      correta: "No paralelismo e no contraste entre chegar e voltar para casa",
      explicacao: "A simetria das estruturas (\"pressa de chegar\" × \"vontade de voltar\") cria impacto emocional — recurso estilístico que o ENEM cobra em textos de campanha." },
    { pergunta: "\"Embora o projeto tenha qualidades, a comissão decidiu rejeitá-lo.\" O conectivo \"embora\" estabelece relação de:",
      opcoes: [
        "Concessão — admite um fato contrário que não impede a conclusão",
        "Causa — explica o motivo da rejeição",
        "Finalidade — indica o objetivo da comissão",
        "Condição — estabelece uma exigência"
      ],
      correta: "Concessão — admite um fato contrário que não impede a conclusão",
      explicacao: "A concessão reconhece o argumento oposto (as qualidades) sem mudar a decisão — relação lógico-discursiva frequente nas questões de coesão." }
  ]
};
