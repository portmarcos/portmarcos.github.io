/* ENEM 2023 — Leitura e Linguagem · Questões reais (Caderno 1 Azul, 1º dia) */
const QUIZ_DADOS = {
  id: "enem-2023-leitura",
  titulo: "ENEM 2023 — Leitura e Linguagem (Prova Real)",
  descricao: "10 questões reais do ENEM 2023 (Caderno Azul): variação linguística, gêneros textuais, argumentação e leitura crítica. Cada explicação traz a referência da prova.",
  tempoPorQuestao: 150,
  questoes: [
    { texto: "<p>A sessão do Comitê Olímpico Internacional (COI) aprovou uma mudança histórica no lema olímpico, criado em 1894 pelo Barão Pierre de Coubertin. Mais de 120 anos depois, o lema tem sua primeira alteração para ressaltar a solidariedade e incluir a palavra “juntos”: <em>mais rápido, mais alto, mais forte — juntos</em>. A mudança foi aprovada por unanimidade pelos membros do COI.</p><p class='fonte'>ENEM 2023, Questão 06 (adaptado). Disponível em: https://ge.globo.com</p>",
      pergunta: "De acordo com o texto, a alteração do lema olímpico teve como objetivo a:",
      opcoes: [
        "Associação entre o lema olímpico e a cooperatividade",
        "Unificação do lema anterior ao atual",
        "Aproximação entre o lema olímpico e o COI",
        "Junção do lema olímpico com os princípios esportivos",
        "Vinculação entre o lema olímpico e os eventos atléticos"
      ],
      correta: "Associação entre o lema olímpico e a cooperatividade",
      explicacao: "(ENEM 2023, Q06) A palavra acrescentada — “juntos” — e a justificativa explícita (“ressaltar a solidariedade”) apontam para a ideia de cooperação. As demais alternativas falam de vínculos que já existiam ou não fazem sentido (unificar o lema a ele mesmo)." },

    { texto: "<p><strong>De quem é esta língua?</strong></p><p>Uma pequena editora brasileira lançou em Lisboa uma antologia antirracista de poetas estrangeiros em Portugal, com o título <em>Volta para a tua terra</em>. Alguns dos poetas brasileiros antologiados queixam-se do desdém com que muitos portugueses acolhem o português brasileiro. Uma poetisa paulista escreve que, em Portugal, dizem que o português dos brasileiros “é errado”, que os brasileiros “não falam português” — e conclui que, se a linguagem lusitana ainda conserva a palavra da opressão, ela não é a mais bonita do mundo, mas uma das mais violentas.</p><p class='fonte'>ENEM 2023, Questão 08 (adaptado). AGUALUSA, J. E. Disponível em: https://oglobo.globo.com</p>",
      pergunta: "O texto de Agualusa tematiza o preconceito em relação ao português brasileiro. Com base no trecho citado pelo autor, infere-se que esse preconceito se deve:",
      opcoes: [
        "À existência de uma língua ideal que alguns falantes lusitanos creem ser a falada em Portugal",
        "À dificuldade de consolidação da literatura brasileira em outros países",
        "Aos diferentes graus de instrução formal entre os falantes de língua portuguesa",
        "Ao intercâmbio cultural que ocorre entre os povos dos diferentes países de língua portuguesa",
        "À distância territorial entre os falantes do português que vivem em Portugal e no Brasil"
      ],
      correta: "À existência de uma língua ideal que alguns falantes lusitanos creem ser a falada em Portugal",
      explicacao: "(ENEM 2023, Q08) Dizer que o português do Brasil “é errado” pressupõe a crença em um modelo único e “correto” de língua — a variante lusitana idealizada. O preconceito linguístico nasce dessa hierarquização, não de distância geográfica ou de escolaridade." },

    { texto: "<p>Na Idade Média, as notícias se propagavam com surpreendente eficácia. Um cavalo percorria cerca de 30 quilômetros por dia, mas o tempo podia se acelerar dependendo do interesse da notícia. As ordens mendicantes tinham papel importante na disseminação de informações, assim como os jograis, os peregrinos e os vagabundos, porque todos percorriam grandes distâncias. As cidades também tinham correios organizados e selos para lacrar mensagens. Graças a tudo isso, a circulação de boatos era intensa e politicamente relevante — um exemplo clássico de <em>fake news</em> medieval é a história do rei que desaparece na batalha e reaparece muito depois, idoso e transformado.</p><p class='fonte'>ENEM 2023, Questão 09 (adaptado). Disponível em: www.elpais.com.br</p>",
      pergunta: "No texto, a eficácia dessa propagação de informações está diretamente relacionada ao(à):",
      opcoes: [
        "Diversidade dos meios disponíveis em uma época histórica",
        "Velocidade de circulação das notícias",
        "Nível de letramento da população marginalizada",
        "Poder de censura por parte dos serviços públicos",
        "Legitimidade da voz dos representantes da nobreza"
      ],
      correta: "Diversidade dos meios disponíveis em uma época histórica",
      explicacao: "(ENEM 2023, Q09) O conector “Graças a tudo isso” retoma a lista heterogênea que o texto constrói: cavalos, ordens mendicantes, jograis, peregrinos, correios, selos. É a variedade de meios e agentes — não a velocidade isolada — que explica a eficácia." },

    { texto: "<p>Se a interferência de contas falsas em discussões políticas já representava perigo para as democracias, sua sofisticação agravou o problema. Os métodos evoluíram dos robôs (“bots”) para os “ciborgues” ou “trolls”, contas controladas por humanos com ajuda de automação. Pesquisadores observam novos padrões: quando as mensagens não são programadas, sua publicação se concentra em horários de trabalho, já que é controlada por profissionais. Outra pista é a pobreza vocabular das mensagens — um funcionário de uma empresa de perfis falsos admite que “faltava criatividade” para criar mensagens distintas controlando tantos perfis ao mesmo tempo.</p><p class='fonte'>ENEM 2023, Questão 10 (adaptado). GRAGNANI, J. Disponível em: www.bbc.com</p>",
      pergunta: "De acordo com o texto, a análise de características da linguagem empregada por perfis automatizados contribui para o(a):",
      opcoes: [
        "Identificação de padrões de disseminação de informações inverídicas",
        "Controle da atuação dos profissionais de TI",
        "Desenvolvimento de tecnologias como os “trolls”",
        "Flexibilização dos turnos de trabalho dos controladores",
        "Necessidade de regulamentação do funcionamento dos “bots”"
      ],
      correta: "Identificação de padrões de disseminação de informações inverídicas",
      explicacao: "(ENEM 2023, Q10) Horário das postagens e pobreza vocabular são “pistas” linguísticas que os pesquisadores usam para reconhecer perfis falsos — ou seja, para identificar padrões de desinformação. As outras alternativas extrapolam ou invertem o sentido do texto." },

    { texto: "<p>Maio foi colorido de amarelo porque, mundialmente, o amarelo é a cor das advertências. No trânsito, essas advertências têm sido fatais: a estimativa, caso nada seja feito, é de 2,4 milhões de mortes no trânsito em 2030 em todo o mundo. A pressa constante, o sentimento de invencibilidade, a certeza de impunidade e o desrespeito por si próprio concorrem para o comportamento violento no trânsito. O Maio Amarelo preconiza a atenção pela vida — e essa atenção requer menos pressa, mais civilidade, solidariedade, compaixão e respeito por si e pelo outro. Reafirmar e praticar esses princípios talvez seja um caminho que garanta a vida e não celebre a morte.</p><p class='fonte'>ENEM 2023, Questão 11 (adaptado). Disponível em: http://portaldotransito.com.br</p>",
      pergunta: "Considerando os procedimentos argumentativos utilizados, infere-se que o objetivo desse texto é:",
      opcoes: [
        "Sensibilizar o público para a importância de uma direção responsável",
        "Enumerar as causas determinantes da violência no trânsito",
        "Contextualizar a campanha de advertência no cenário mundial",
        "Divulgar dados numéricos alarmantes sobre acidentes de trânsito",
        "Restringir os problemas da violência no trânsito a aspectos emocionais"
      ],
      correta: "Sensibilizar o público para a importância de uma direção responsável",
      explicacao: "(ENEM 2023, Q11) Dados, enumeração de causas e contextualização aparecem no texto, mas como ESTRATÉGIAS a serviço de um objetivo maior: convencer o leitor a praticar “atenção pela vida”. O ENEM cobra distinguir o recurso argumentativo da finalidade do texto." },

    { texto: "<p>As cinzas do Museu Nacional, consumido pelas chamas em setembro de 2018, são mais do que restos de fósseis e cerâmicas. O incêndio pode ter calado para sempre palavras e cantos indígenas ancestrais, de línguas que não existem mais no mundo. O acervo continha gravações de conversas, cantos e rituais de dezenas de sociedades indígenas, muitas ainda não digitalizadas — algumas de línguas já extintas, sem falantes vivos. “Obviamente não dá para recuperar a fala de nativos já falecidos”, lamenta uma linguista que trabalha com os índios Tikuna.</p><p class='fonte'>ENEM 2023, Questão 15 (adaptado). Disponível em: https://brasil.elpais.com</p>",
      pergunta: "A perda dos registros linguísticos no incêndio do Museu Nacional tem impacto potencializado, uma vez que:",
      opcoes: [
        "Representa danos irreparáveis à memória e à identidade nacionais",
        "Exige a retomada das pesquisas por especialistas de diferentes áreas",
        "Impossibilita o surgimento de novas pesquisas na área",
        "Resulta na extinção da cultura de povos originários",
        "Inviabiliza o estudo da língua do povo Tikuna"
      ],
      correta: "Representa danos irreparáveis à memória e à identidade nacionais",
      explicacao: "(ENEM 2023, Q15) O ponto-chave é a irreversibilidade: gravações de línguas extintas, sem falantes vivos, não podem ser refeitas — perda definitiva de memória e identidade. As alternativas C, D e E exageram (pesquisas continuam, culturas não se extinguem por isso, os Tikuna têm falantes vivos)." },

    { texto: "<p>Mandioca, macaxeira, aipim e castelinha são nomes diferentes da mesma planta. A mesma coisa acontece com a Língua Brasileira de Sinais (Libras): existem sinais que variam conforme a região, a idade e até o gênero de quem se comunica. A cor verde, por exemplo, possui sinais diferentes no Rio de Janeiro, no Paraná e em São Paulo. “Muitas pessoas pensam que a língua de sinais é universal, o que não é verdade”, explica uma professora da Unesp. Em São Paulo, o sinal de “cerveja” é feito com um giro do punho; em Minas, com os dedos indicador e médio batendo no lado do rosto. Também ocorrem mudanças históricas, conforme os costumes de cada geração.</p><p class='fonte'>ENEM 2023, Questão 16 (adaptado). Disponível em: www.educacao.sp.gov.br</p>",
      pergunta: "Nesse texto, a Língua Brasileira de Sinais (Libras):",
      opcoes: [
        "Passa por fenômenos de variação linguística como qualquer outra língua",
        "Apresenta variações regionais, assumindo novo sentido para algumas palavras",
        "Sofre mudança estrutural motivada pelo uso de sinais diferentes para algumas palavras",
        "Diferencia-se em todo o Brasil, desenvolvendo cada região a sua própria língua de sinais",
        "É ininteligível para parte dos usuários em razão das mudanças de sinais motivadas geograficamente"
      ],
      correta: "Passa por fenômenos de variação linguística como qualquer outra língua",
      explicacao: "(ENEM 2023, Q16) A comparação inicial (mandioca/macaxeira) já entrega a tese: Libras varia por região, idade e tempo exatamente como o português — é língua plena. Não há “novas línguas” por região nem perda de inteligibilidade: há variação dentro da mesma língua." },

    { texto: "<p>Como é bom reencontrar os leitores da Revista da Cultura por meio de uma publicação com outro visual! <strong>]cultura[</strong>, este nome simples, nasce entre dois colchetes voltados para fora. E não é por acaso: são sinais abertos, receptivos, propícios à circulação de ideias. O DNA da publicação se mantém: por longos anos montamos nossas edições com assuntos saídos das estantes de uma grande livraria — e assim continuará sendo. Literatura, sociologia, filosofia, artes... os livros nos ensinam que monotonia é só para quem não lê.</p><p class='fonte'>ENEM 2023, Questão 17 (adaptado). HERZ, P. ]cultura[, n. 1, jun. 2018.</p>",
      pergunta: "O uso não padrão dos colchetes para nomear a revista atribui-lhes uma nova função e está correlacionado ao(à):",
      opcoes: [
        "Identidade da revista, voltada para a recepção e a promoção de ideias circulantes em livros",
        "Perfil de público-alvo, constituído por leitores exigentes e especializados em leitura acadêmica",
        "Propósito do editor, chamando a atenção para o rigor normativo nos textos da revista",
        "Exclusividade na seleção temática, direcionada para a área das ciências humanas",
        "Padrão editorial dos artigos, organizados em torno de uma proposta de design inovador"
      ],
      correta: "Identidade da revista, voltada para a recepção e a promoção de ideias circulantes em livros",
      explicacao: "(ENEM 2023, Q17) O próprio editor explica o símbolo: colchetes “voltados para fora” = sinais “abertos, receptivos, propícios à circulação de ideias” vindas dos livros. A forma gráfica materializa a identidade editorial — não rigor normativo nem design pelo design." },

    { texto: "<p>Um grupo de pesquisadores da Universidade Federal do Ceará desenvolveu um dicionário para traduzir sintomas de doenças da linguagem popular para os termos médicos. Defruço, chanha e piloura podem ser termos conhecidos para muitos, mas, durante uma consulta, o desconhecimento pode significar um diagnóstico errado. “É um instrumento de trabalho importante, porque a comunicação é fundamental na relação médico-paciente”, avalia o reitor da instituição.</p><p class='fonte'>ENEM 2023, Questão 21 (adaptado). Disponível em: https://g1.globo.com</p>",
      pergunta: "Ao registrarem usos regionais de termos da área médica, os pesquisadores:",
      opcoes: [
        "Propiciaram melhor compreensão dos sintomas dos pacientes",
        "Apontaram erros motivados pelo desconhecimento da variedade linguística local",
        "Explicaram problemas provocados pela incapacidade de comunicação",
        "Descobriram novos sintomas de doenças existentes na comunidade",
        "Divulgaram um novo rol de doenças características da localidade"
      ],
      correta: "Propiciaram melhor compreensão dos sintomas dos pacientes",
      explicacao: "(ENEM 2023, Q21) O dicionário traduz a fala popular para o vocabulário médico, melhorando a comunicação na consulta e evitando diagnósticos errados. Não se trata de “erro” do paciente (visão preconceituosa) nem de novas doenças — trata-se de ponte entre variedades linguísticas." },

    { texto: "<p>Anúncio publicitário da Defensoria Pública, veiculado durante a pandemia de covid-19: a imagem mostra três mulheres de máscara, com os dizeres <em>“Eu uso máscara, mas não me calo!”</em>, acompanhados do texto: “Em tempos de isolamento social por conta da pandemia, a Defensoria Pública alerta para o aumento da violência contra a mulher! Não se cale! Denuncie! Disque 180. #JuntasSomosMaisFortes”.</p><p class='fonte'>ENEM 2023, Questão 24 (adaptado). Disponível em: www.defensoriapublica.mt.gov.br</p>",
      pergunta: "Esse anúncio publicitário, veiculado durante o contexto da pandemia de covid-19, tem por finalidade:",
      opcoes: [
        "Incentivar o público feminino a denunciar crimes de violência contra a mulher durante o período de isolamento",
        "Divulgar o canal telefônico de atendimento a casos de violência contra a mulher",
        "Informar sobre a atuação de uma entidade defensora da mulher vítima de violência",
        "Evidenciar o trabalho da Defensoria Pública em relação ao problema do abuso contra a mulher",
        "Alertar a sociedade sobre o aumento da violência contra a mulher em decorrência do coronavírus"
      ],
      correta: "Incentivar o público feminino a denunciar crimes de violência contra a mulher durante o período de isolamento",
      explicacao: "(ENEM 2023, Q24) Os imperativos “Não se cale! Denuncie!” dirigidos às mulheres revelam a finalidade central: mobilizar a denúncia. O Disque 180 e o alerta sobre o aumento da violência são meios e contexto, não o objetivo do anúncio — pegadinha clássica entre informação de apoio e função apelativa." }
  ]
};
