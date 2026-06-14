/* ENEM 2024 — Leitura e Linguagem · Questões reais (Caderno 1 Azul, 1º dia) */
const QUIZ_DADOS = {
  id: "enem-2024-leitura",
  titulo: "ENEM 2024 — Leitura e Linguagem (Prova Real)",
  descricao: "10 questões reais do ENEM 2024 (Caderno Azul): variação linguística, funções da linguagem, gêneros digitais e leitura crítica.",
  tempoPorQuestao: 150,
  questoes: [
    { texto: "<p>“Na linguagem, podemos nos ver da forma mais verdadeira: nossas crenças, nossos valores, nosso lugar no mundo”, afirma o autor do livro <em>Amazonês: expressões e termos usados no Amazonas</em>, com cerca de 1100 expressões típicas, que levou dez anos para ser construído — o objetivo é registrar a linguagem. Paralelamente, um designer criou a coleção de camisetas <em>Caboquês Ilustrado</em>, que mistura bom humor com expressões típicas da região (Leseira Baré, Xibata no Balde, Até o Tucupi), com o objetivo de “resgatar o orgulho do povo manauara, do povo do Norte”.</p><p class='fonte'>ENEM 2024, Questão 06 (adaptado). Disponível em: https://g1.globo.com</p>",
      pergunta: "A reportagem apresenta duas iniciativas: o livro Amazonês e as camisetas do Caboquês Ilustrado. Com temática em comum, essas iniciativas:",
      opcoes: [
        "Valorizam o repertório linguístico do povo do Amazonas",
        "Recomendam produtos feitos por empreendedores da região Norte",
        "Ressaltam diferenças entre o falar manauara e outros falares",
        "Reverenciam o trabalho feito por pesquisadores brasileiros",
        "Destacam a descontração no jeito de ser do amazonense"
      ],
      correta: "Valorizam o repertório linguístico do povo do Amazonas",
      explicacao: "(ENEM 2024, Q06) Registrar a linguagem (livro) e resgatar o orgulho do falar local (camisetas) convergem para o mesmo ponto: a valorização do vocabulário amazonense como patrimônio. As diferenças regionais e o humor são meios, não o tema comum." },

    { texto: "<p>Pressão, depressão, estresse e crise de ansiedade: os males da sociedade contemporânea também estão no esporte. A tenista Naomi Osaka retirou-se de Roland Garros 2021 por não conseguir administrar as crises de ansiedade provocadas pelos grandes eventos e pelo peso de parte da imprensa. O tenista Nick Kyrgios revelou sua luta contra a depressão causada pelo ritmo avassalador do circuito. O mundo do atleta é solitário e distante da família. A imprensa denomina atletas como heróis, como se aquele corpo fosse indestrutível, mas a mente é o ponto fraco da história.</p><p class='fonte'>ENEM 2024, Questão 09 (adaptado). Disponível em: www.uol.com.br</p>",
      pergunta: "As causas do desequilíbrio na saúde mental apontadas no texto estão relacionadas às:",
      opcoes: [
        "Pressões constantes dos eventos e da mídia",
        "Nacionalidades diversificadas dos praticantes",
        "Modalidades esportivas distintas",
        "Faixas etárias aproximadas",
        "Representações heroicas dos atletas"
      ],
      correta: "Pressões constantes dos eventos e da mídia",
      explicacao: "(ENEM 2024, Q09) Os dois casos citados explicitam as causas: “crises de ansiedade provocadas pelos grandes eventos” + “peso de parte da imprensa” + “ritmo avassalador do circuito”. A representação heroica aparece como agravante final, mas a causa apontada é a pressão de eventos e mídia." },

    { texto: "<p>Já ouvi gente falando que o podcast é o renascimento do rádio. O rádio é genial, mas podcast não tem nada a ver com ele — o formato está mais próximo do ensaio literário. Podcasts são antípodas das redes sociais: enquanto elas são dispersivas, levam à evasão e à desinformação, os podcasts são uma possibilidade de imersão, concentração, aprendizado. Depois que eles surgiram, lavar a louça virou um programaço: um pós-almoço de domingo e aprendo tudo sobre bonobos; um táxi pro aeroporto e chego ao embarque PhD em reforma tributária.</p><p class='fonte'>ENEM 2024, Questão 10 (adaptado). PRATA, A. Disponível em: www1.folha.uol.com.br</p>",
      pergunta: "Segundo a argumentação construída nesse texto, o podcast:",
      opcoes: [
        "Propicia divulgação de conhecimento para seus usuários",
        "Provoca dispersão da atenção em seu público",
        "Funciona por meio de uma frequência de ondas curtas",
        "Tem um formato de interação semelhante ao das redes sociais",
        "Constitui uma evolução na transmissão de informações via rádio"
      ],
      correta: "Propicia divulgação de conhecimento para seus usuários",
      explicacao: "(ENEM 2024, Q10) “Imersão, concentração, aprendizado” + os exemplos (aprender sobre bonobos, virar “PhD em reforma tributária”) sustentam a tese: podcast divulga conhecimento. O texto NEGA explicitamente as demais alternativas — não é rádio, não é rede social, não dispersa." },

    { texto: "<p>Evanildo Bechara, aos 95 anos, imortal da ABL, alcançou status de astro pop no mundo da filologia e da gramática. A idade acentuou seu lado “cientista”: ele adota tom técnico até nas perguntas mais pessoais. “Qual o seu tipo preferido de leitura?” — “A minha leitura está dividida em duas partes, a científica e a literária, estabelecendo uma relação de causa e efeito entre elas”, responde. Em uma carona, ao ouvir o aplicativo de navegação avisar de um radar “reportado” à frente, notou: “Esse ‘reportado’ é uma importação, né?”.</p><p class='fonte'>ENEM 2024, Questão 11 (adaptado). Disponível em: https://oglobo.globo.com</p>",
      pergunta: "Nesse texto, as falas atribuídas a Evanildo Bechara são representativas da variedade linguística:",
      opcoes: [
        "Ocupacional, pois ele faz uso de termos específicos de sua área de atuação",
        "Situacional, pois o contexto exige o uso da linguagem formal",
        "Regional, pois ele traz marcas do falar de seu local de nascimento",
        "Sociocultural, pois sua formação pressupõe o uso de linguagem rebuscada",
        "Geracional, pois ele emprega termos característicos de sua faixa etária"
      ],
      correta: "Ocupacional, pois ele faz uso de termos específicos de sua área de atuação",
      explicacao: "(ENEM 2024, Q11) “Relação de causa e efeito”, analisar “reportado” como “importação” linguística: são lentes de filólogo aplicadas até à conversa casual. A variedade é a da profissão (ocupacional) — o contexto da carona é informal, descartando a leitura situacional." },

    { texto: "<p>A Língua da Tabatinga, falada em Bom Despacho (MG), foi por muito tempo estigmatizada: era a “língua dos engraxates”, falada por “meninos pobres” da periferia. Foi usada por negros escravizados como língua secreta para planejar fugas. Hoje, segundo o Iphan, os falantes apresentam forte consciência de sua relação com a descendência africana e da importância de preservar “a fala que os identifica na região”. À medida que o falante se identifica com a origem afro-brasileira, passa a ver essa língua como um legado recebido e cuida de transmiti-la a outras gerações.</p><p class='fonte'>ENEM 2024, Questão 12 (adaptado). Disponível em: www.historiaeparcerias2019.rj.anpuh.org</p>",
      pergunta: "A Língua da Tabatinga tem sido preservada porque o(a):",
      opcoes: [
        "Sentimento de identidade linguística tem se consolidado",
        "Seu registro passou da forma oral para a escrita",
        "Classe social de seus usuários ganhou prestígio",
        "Sua função inicial se manteve ao longo dos anos",
        "Perfil etário de seus falantes tem se tornado homogêneo"
      ],
      correta: "Sentimento de identidade linguística tem se consolidado",
      explicacao: "(ENEM 2024, Q12) O texto é explícito: identificação com a origem afro-brasileira → língua vista como legado → transmissão às novas gerações. A função inicial (código secreto de fuga) NÃO se manteve; o que sustenta a língua hoje é o pertencimento identitário." },

    { texto: "<p>Diante do pouco dinheiro para produtos básicos, as adolescentes são o alvo mais vulnerável à precariedade menstrual. A falta do absorvente afeta diretamente o desempenho escolar e restringe o desenvolvimento de seu potencial na vida adulta. Dados da ONU apontam que, no mundo, uma em cada dez meninas falta às aulas durante o período menstrual. No Brasil, uma entre quatro estudantes já deixou de ir à escola por não ter absorventes — perdendo, em média, até 45 dias de aula por ano letivo. O ato biológico de menstruar acaba por virar mais um fator de desigualdade de oportunidades entre os gêneros.</p><p class='fonte'>ENEM 2024, Questão 13 (adaptado). Disponível em: www12.senado.leg.br</p>",
      pergunta: "Esse texto é marcado pela função referencial da linguagem, uma vez que cumpre o propósito de:",
      opcoes: [
        "Informar o leitor sobre o impacto da pobreza menstrual na vida das mulheres",
        "Sugerir soluções para um problema de ordem social",
        "Estabelecer uma relação entre menstruação e gravidez",
        "Comparar o desempenho acadêmico de mulheres e homens",
        "Orientar o público sobre a necessidade de rotinas de autocuidado na adolescência"
      ],
      correta: "Informar o leitor sobre o impacto da pobreza menstrual na vida das mulheres",
      explicacao: "(ENEM 2024, Q13) Função referencial = foco no conteúdo, na informação objetiva. O texto traz dados (ONU, IBGE, 45 dias de aula perdidos) para informar sobre o problema — não propõe soluções, não orienta condutas, não compara gêneros academicamente." },

    { texto: "<p>Maranhenses que moram longe matam a saudade usando expressões próprias do estado. Um fotógrafo maranhense, há 16 anos no Rio de Janeiro, criou um perfil na internet sobre o “dicionário” maranhês: “A primeira vez que fui a uma padaria no Rio, pedi 3 reais de ‘pães misturados’. As pessoas pararam e me olharam de uma forma bem engraçada, aí já fiquei ‘encabulado, ó’, e o atendente explicou que lá não existia pão misturado e, sim, pão francês e suíço. Depois foi a minha vez de explicar sobre os pães ‘massa grossa e massa fina’”, contou, com humor.</p><p class='fonte'>ENEM 2024, Questão 14 (adaptado). Disponível em: https://oimparcial.com.br</p>",
      pergunta: "A vivência relatada no texto evidencia que as variedades linguísticas:",
      opcoes: [
        "São constitutivas do português brasileiro",
        "Impedem o entendimento mútuo",
        "Enaltecem o português do Maranhão",
        "Exigem a dicionarização dos termos usados",
        "São restritas a situações coloquiais de comunicação"
      ],
      correta: "São constitutivas do português brasileiro",
      explicacao: "(ENEM 2024, Q14) O episódio da padaria mostra estranhamento, mas NEGOCIADO: cada um explica seu vocabulário e a comunicação acontece. As variedades (maranhense, carioca) fazem parte da própria constituição do português brasileiro — não barreira, não exclusividade coloquial." },

    { texto: "<p>A telemedicina tem se destacado como ferramenta valiosa. Um dos principais benefícios do atendimento de saúde a distância é a capacidade de superar barreiras geográficas, proporcionando acesso a serviços médicos especialmente para pacientes que residem em áreas remotas e/ou carentes de certas especialidades, os chamados “vazios assistenciais”. Contudo, a equidade no acesso é uma questão crítica: nem todos têm dispositivos tecnológicos ou conexão à internet confiável — um desafio tanto para pacientes quanto para profissionais de saúde, que muitas vezes não contam com estrutura nem letramento digital.</p><p class='fonte'>ENEM 2024, Questão 15 (adaptado). OLIVEIRA, D. Disponível em: www.correiobraziliense.com.br</p>",
      pergunta: "Ao tratar da telemedicina, esse texto ressalta que um dos benefícios dessa tecnologia para a sociedade é o fato de ela:",
      opcoes: [
        "Oportunizar o acesso a atendimento médico a pacientes de áreas periféricas",
        "Disponibilizar prontuário único do cidadão tanto na rede pública quanto na privada",
        "Fornecer dispositivos tecnológicos para a realização de exames",
        "Promover a interação entre diferentes especialidades médicas",
        "Garantir infraestrutura para o trabalho remoto de médicos"
      ],
      correta: "Oportunizar o acesso a atendimento médico a pacientes de áreas periféricas",
      explicacao: "(ENEM 2024, Q15) O benefício destacado é “superar barreiras geográficas” e atender os “vazios assistenciais”. O prontuário único é projeto em discussão (não benefício realizado), e o texto afirma justamente que infraestrutura e dispositivos FALTAM — invertendo C e E." },

    { texto: "<p><strong>Falar errado é uma arte, Arnesto!</strong></p><p>João Rubinato não passou do terceiro ano da escola. Virou Adoniran Barbosa: falava “errado”, voz rouca, pinta de malandro — e virou ícone da música brasileira. Para quem implicava, respondia: “Gosto de samba e não foi fácil, pra mim, ser aceito como compositor, porque ninguém queria nada com as minhas letras que falavam ‘nóis vai’, ‘nóis fumo’, ‘nóis fizemo’. Acontece que é preciso saber falar errado. Falar errado é uma arte, senão vira deboche”. Ele sabia o que fazia: a fala “errada” era a sua arte, escolhida a dedo. O erudito podia resmungar, mas o povo se identificava.</p><p class='fonte'>ENEM 2024, Questão 39 (adaptado). PEREIRA, E. Disponível em: www.tribunapr.com.br</p>",
      pergunta: "O “falar errado” a que o texto se refere constitui um preconceito em relação ao uso que Adoniran Barbosa fazia da língua em suas composições, pois esse uso:",
      opcoes: [
        "Transgredia a norma-padrão vigente à época",
        "Marcava a linguagem dos comediantes no mesmo período",
        "Prejudicava a compreensão das canções pelo público",
        "Denunciava a ausência de estilo nas letras de canção",
        "Restringia a criação poética nas letras do compositor"
      ],
      correta: "Transgredia a norma-padrão vigente à época",
      explicacao: "(ENEM 2024, Q39) “Nóis vai”, “nóis fizemo”: as formas populares fogem da norma-padrão — e é só por isso que foram rotuladas de “erradas”. O texto desmonta o rótulo: o povo se identificava (logo, compreendia) e a escolha era estilo deliberado, “arte escolhida a dedo”." },

    { texto: "<p><strong>Memes e fake news: o impacto na educação das crianças</strong></p><p>Na economia da velocidade, alguns apostam no humor, outros no engajamento político, e tem gente investindo alto na mentira. Uma professora de língua portuguesa do DF desenvolveu uma proposta de leitura e análise crítica de memes com estudantes do ensino fundamental: “Percebi que muitos alunos e pais estavam divulgando conteúdos sem saber o que havia por trás das palavras”. Em tempos de notícias falsas, de imagens manipuladas e de memes usados como triunfo da verdade de cada um, checagem de informação e interpretação de texto acabam se tornando moedas valiosas.</p><p class='fonte'>ENEM 2024, Questão 45 (adaptado). Disponível em: https://lunetas.com.br</p>",
      pergunta: "Ao abordar a relação dos memes com a educação, a reportagem sustenta uma crítica à:",
      opcoes: [
        "Divulgação de informação manipulada em postagens virtuais",
        "Falta de fiscalização no uso de aplicativos de mensagens por crianças",
        "Utilização de ferramentas digitais no trabalho educacional",
        "Exploração de conteúdos humorísticos nas mídias sociais",
        "Propagação de mensagens com objetivos políticos"
      ],
      correta: "Divulgação de informação manipulada em postagens virtuais",
      explicacao: "(ENEM 2024, Q45) O alvo da crítica é a mentira que circula: “gente investindo alto na mentira”, “notícias falsas”, “imagens manipuladas”, conteúdos compartilhados “sem saber o que havia por trás”. O humor e a política são usos possíveis dos memes, não o problema denunciado." }
  ]
};
