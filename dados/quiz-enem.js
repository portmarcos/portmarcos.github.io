/* SIMULADO ENEM — Linguagens, Códigos e suas Tecnologias */
const QUIZ_DADOS = {
  id: "enem-linguagens-1",
  titulo: "Simulado ENEM — Linguagens I",
  descricao: "20 questões no estilo da prova, cobrindo as competências mais cobradas: variação linguística, funções da linguagem, gêneros, literatura, intertextualidade e argumentação.",
  tempoPorQuestao: 150,
  questoes: [
    { texto: "<p>Reportagem sobre um projeto de resgate de palavras indígenas: pesquisadores de uma universidade do Norte do país criaram um glossário com termos usados por comunidades ribeirinhas para descrever tipos de chuva, fases da maré e nomes de plantas — palavras que não têm equivalente exato no português padrão e que corriam risco de cair em desuso.</p>",
      pergunta: "Iniciativas como essa, descritas no texto, contribuem para:",
      opcoes: [
        "A preservação de um patrimônio linguístico e cultural ligado a um modo de vida específico",
        "A substituição definitiva do português padrão pelas variedades regionais",
        "A criação de uma nova língua oficial para as comunidades ribeirinhas",
        "A eliminação das diferenças entre as variedades linguísticas do país"
      ],
      correta: "A preservação de um patrimônio linguístico e cultural ligado a um modo de vida específico",
      explicacao: "Registrar vocabulário regional não normatiza nem cria uma língua nova — documenta um saber cultural em risco de desaparecer, tema caro à Competência 8 do ENEM (variação linguística como patrimônio)." },

    { texto: "<p>Cartaz de campanha sobre saúde mental: \"Pergunte de novo. Às vezes a primeira resposta é só educação.\"</p>",
      pergunta: "A função da linguagem predominante nesse cartaz é:",
      opcoes: [
        "Conativa, pois o imperativo \"pergunte\" busca orientar diretamente a atitude do leitor",
        "Referencial, pois apenas descreve um fato científico sobre saúde mental",
        "Poética, pois o foco está na sonoridade e na construção estética da frase",
        "Fática, pois testa se o canal de comunicação está funcionando"
      ],
      correta: "Conativa, pois o imperativo \"pergunte\" busca orientar diretamente a atitude do leitor",
      explicacao: "O verbo no imperativo dirige a mensagem ao receptor, buscando mudar seu comportamento — marca típica da função conativa em campanhas de conscientização." },

    { texto: "<p>Trecho de crônica: \"Ainda hoje me pergunto se aquela tarde aconteceu de verdade ou se inventei tudo depois, para que a partida do meu pai tivesse algum sentido.\"</p>",
      pergunta: "Esse trecho exemplifica um recurso comum na prosa contemporânea, que consiste em:",
      opcoes: [
        "Colocar em dúvida a fronteira entre memória e invenção, criando um narrador que questiona sua própria versão dos fatos",
        "Afirmar com total certeza os eventos narrados, sem espaço para dúvida",
        "Eliminar completamente a presença de um narrador",
        "Narrar exclusivamente fatos históricos verificáveis"
      ],
      correta: "Colocar em dúvida a fronteira entre memória e invenção, criando um narrador que questiona sua própria versão dos fatos",
      explicacao: "Narradores que duvidam da própria memória são um recurso frequente na ficção contemporânea, gerando ambiguidade entre o vivido e o imaginado — tema recorrente nas questões de literatura do ENEM." },

    { texto: "<p>Uma marca de tênis lança uma campanha cujo slogan reescreve o verso \"Stop all the clocks, cut off the telephone\", do poeta W. H. Auden, trocando por \"Stop all excuses, put on your sneakers\".</p>",
      pergunta: "Esse procedimento publicitário caracteriza:",
      opcoes: [
        "Intertextualidade por paródia, que retoma a estrutura de um texto consagrado para fins persuasivos e com novo sentido",
        "Plágio, pois reproduz integralmente o poema original sem qualquer alteração",
        "Tradução literal, sem nenhuma mudança de sentido em relação ao texto-fonte",
        "Citação direta, identificando devidamente a autoria do poema original"
      ],
      correta: "Intertextualidade por paródia, que retoma a estrutura de um texto consagrado para fins persuasivos e com novo sentido",
      explicacao: "A reescrita de um verso famoso, mantendo a estrutura mas alterando o sentido para fins comerciais, é um caso clássico de paródia intertextual — recurso muito explorado pelo ENEM em textos publicitários." },

    { texto: "<p>Em uma roda de conversa sobre o mercado de trabalho, um jovem comenta: \"Cara, esse processo seletivo tá osso! Mandei o currículo pra, sei nem quanto, umas trinta vagas, e nada.\"</p>",
      pergunta: "Sobre a linguagem usada pelo jovem, é correto afirmar que:",
      opcoes: [
        "Trata-se de uma variedade coloquial adequada ao contexto informal da conversa entre amigos",
        "Trata-se de um erro grave de português que compromete a comunicação",
        "Trata-se de linguagem que deveria ser usada também em uma entrevista de emprego",
        "Trata-se de uma variedade que não pertence à língua portuguesa"
      ],
      correta: "Trata-se de uma variedade coloquial adequada ao contexto informal da conversa entre amigos",
      explicacao: "A adequação da variedade linguística à situação comunicativa é o cerne da Competência 8: gírias e construções coloquiais não são \"erros\", mas escolhas adequadas ao registro informal." },

    { texto: "<p>Texto motivacional de rede social: \"Acorde. Respire. Agradeça. Repita.\"</p>",
      pergunta: "O efeito de sentido criado pela enumeração de verbos curtos e isolados é:",
      opcoes: [
        "Sugerir um ritual simples e repetitivo, reforçando a ideia de uma rotina possível de ser seguida",
        "Indicar que as ações descritas são impossíveis de realizar",
        "Demonstrar que o texto pertence ao gênero jornalístico informativo",
        "Comprovar dados estatísticos sobre bem-estar"
      ],
      correta: "Sugerir um ritual simples e repetitivo, reforçando a ideia de uma rotina possível de ser seguida",
      explicacao: "A fragmentação em frases curtas e verbos no imperativo, junto à palavra \"repita\", constrói o efeito de sequência ritualística — recurso comum em textos motivacionais e de autoajuda, gênero cobrado em questões de leitura." },

    { texto: "<p>Em uma entrevista, um músico de rap descreve seu processo de composição: \"Eu não escrevo pensando em livro. Escrevo pensando em quem vai escutar isso no fone, sozinho, voltando da escola.\"</p>",
      pergunta: "A fala do músico evidencia uma reflexão sobre:",
      opcoes: [
        "A relação entre o gênero textual, o suporte de circulação e o público-alvo da composição",
        "A obrigatoriedade de toda letra de música ser publicada em formato de livro",
        "A inexistência de diferenças entre a leitura de um livro e a escuta de uma música",
        "A necessidade de seguir a norma-padrão em qualquer gênero musical"
      ],
      correta: "A relação entre o gênero textual, o suporte de circulação e o público-alvo da composição",
      explicacao: "O músico evidencia que a composição é pensada a partir do suporte (fone de ouvido) e do contexto de recepção (trajeto, solidão), elementos centrais para a noção de gênero textual e adequação comunicativa." },

    { texto: "<p>Charge: um indivíduo está sentado em frente a um computador com várias abas abertas — \"notícias\", \"redes sociais\", \"e-mail de trabalho\" — e uma legenda: \"Só vou checar uma coisinha rápida\", enquanto um relógio ao fundo mostra que já passaram três horas.</p>",
      pergunta: "O humor da charge se constrói a partir do contraste entre:",
      opcoes: [
        "A intenção declarada pelo personagem e o tempo efetivamente gasto, evidenciado pelo relógio",
        "A cor do computador e a cor do relógio",
        "O tamanho da tela do computador e o tamanho do relógio",
        "A quantidade de abas abertas e a quantidade de pessoas na cena"
      ],
      correta: "A intenção declarada pelo personagem e o tempo efetivamente gasto, evidenciado pelo relógio",
      explicacao: "O humor de charges costuma surgir do contraste entre a fala/intenção da personagem e a informação visual contraditória — nesse caso, a discrepância entre \"coisinha rápida\" e três horas no relógio." },

    { pergunta: "\"O silêncio da casa engolia qualquer tentativa de conversa.\" Nessa frase, a personificação do silêncio contribui para:",
      opcoes: [
        "Reforçar a sensação de isolamento e de dificuldade de comunicação no ambiente descrito",
        "Indicar que a casa estava em obras",
        "Demonstrar que havia muitas pessoas conversando ao mesmo tempo",
        "Descrever objetivamente o nível de decibéis do ambiente"
      ],
      correta: "Reforçar a sensação de isolamento e de dificuldade de comunicação no ambiente descrito",
      explicacao: "Atribuir ao silêncio a ação de \"engolir\" intensifica, por personificação, o clima de isolamento — recurso expressivo recorrente em textos literários cobrados nas provas de linguagem poética." },

    { texto: "<p>Em uma redação sobre desigualdade no acesso à internet, um estudante escreveu: \"Enquanto uns reclamam da velocidade do wi-fi, outros nem sequer têm onde carregar o celular.\"</p>",
      pergunta: "O recurso argumentativo predominante nessa frase é:",
      opcoes: [
        "A contraposição de realidades distintas para evidenciar uma desigualdade social",
        "A citação de uma autoridade científica sobre o tema",
        "A apresentação de dados estatísticos oficiais",
        "O uso de uma metáfora para suavizar o problema discutido"
      ],
      correta: "A contraposição de realidades distintas para evidenciar uma desigualdade social",
      explicacao: "A construção \"enquanto uns... outros...\" cria uma contraposição que evidencia, por contraste, a desigualdade — estratégia argumentativa frequente em textos dissertativos sobre temas sociais." },

    { texto: "<p>Uma ONG de proteção animal lança a campanha: \"Ele não escolheu nascer na rua. Você pode escolher mudar isso.\"</p>",
      pergunta: "O efeito persuasivo dessa campanha apoia-se principalmente:",
      opcoes: [
        "No contraste entre a ausência de escolha do animal e a possibilidade de escolha do leitor",
        "Na descrição técnica das raças de cães mais comuns nas ruas",
        "Na citação de uma lei de proteção animal",
        "Na apresentação de estatísticas sobre veterinária"
      ],
      correta: "No contraste entre a ausência de escolha do animal e a possibilidade de escolha do leitor",
      explicacao: "O paralelismo \"não escolheu / pode escolher\" cria um contraste que responsabiliza o leitor pela mudança, gerando impacto emocional — recurso típico de campanhas de apelo social, como o ENEM costuma explorar." },

    { pergunta: "\"Apesar de ter estudado a semana toda, o candidato não conseguiu se classificar.\" A relação estabelecida pela locução \"apesar de\" é de:",
      opcoes: [
        "Concessão, pois reconhece um fato (o estudo) que, de modo inesperado, não impediu o resultado contrário",
        "Causa, pois explica diretamente o motivo da não classificação",
        "Condição, pois estabelece uma exigência para que o resultado ocorra",
        "Finalidade, pois indica o objetivo do candidato ao estudar"
      ],
      correta: "Concessão, pois reconhece um fato (o estudo) que, de modo inesperado, não impediu o resultado contrário",
      explicacao: "\"Apesar de\" introduz uma concessão: admite um fato que, em princípio, levaria a outro resultado, mas que não impede a conclusão apresentada — relação lógico-discursiva cobrada em questões de coesão textual." },

    { texto: "<p>Em uma crônica sobre a vida em grandes cidades, o autor escreve: \"O metrô é uma caixa de corpos calados, cada um carregando um mundo que os outros nunca vão ver.\"</p>",
      pergunta: "A imagem construída pelo autor sugere, sobretudo, uma reflexão sobre:",
      opcoes: [
        "A solidão e o anonimato presentes nas relações urbanas contemporâneas",
        "A eficiência do transporte público nas metrópoles",
        "A ausência completa de pessoas no espaço urbano",
        "A necessidade de ampliação das linhas de metrô"
      ],
      correta: "A solidão e o anonimato presentes nas relações urbanas contemporâneas",
      explicacao: "A metáfora da \"caixa de corpos calados\", cada um com \"um mundo\" invisível aos outros, constrói uma reflexão sobre o isolamento humano em meio à multidão — tema recorrente em textos sobre vida urbana no ENEM." },

    { texto: "<p>Uma startup de tecnologia anuncia, em vídeo, um aplicativo para idosos aprenderem a usar smartphones, com a frase de efeito: \"Nunca é tarde para apertar o play na sua história.\"</p>",
      pergunta: "Nessa frase, a expressão \"apertar o play\" foi empregada para:",
      opcoes: [
        "Associar, por meio de uma metáfora ligada à tecnologia, a ideia de recomeço a uma ação típica de dispositivos digitais",
        "Informar tecnicamente como funciona o botão de reprodução de vídeos",
        "Criticar o uso excessivo de aparelhos eletrônicos por idosos",
        "Demonstrar que o aplicativo só funciona com comandos de voz"
      ],
      correta: "Associar, por meio de uma metáfora ligada à tecnologia, a ideia de recomeço a uma ação típica de dispositivos digitais",
      explicacao: "A expressão \"apertar o play\", de origem tecnológica, é usada metaforicamente para significar \"recomeçar\" ou \"dar continuidade\", reforçando o apelo emocional da campanha — uso figurado de vocabulário tecnológico, recorrente em anúncios." },

    { texto: "<p>Em uma rede social, um usuário publica uma foto de um pôr do sol acompanhada apenas da legenda: \"Hoje.\"</p>",
      pergunta: "Esse uso da linguagem, reduzido a uma única palavra que situa temporalmente a imagem, é característico de:",
      opcoes: [
        "Um gênero textual digital marcado pela economia verbal, em que a imagem assume papel central na construção do sentido",
        "Um texto predominantemente argumentativo, com tese e conclusão bem demarcadas",
        "Um gênero exclusivamente oral, sem qualquer relação com a escrita",
        "Uma norma obrigatória para todas as publicações em redes sociais"
      ],
      correta: "Um gênero textual digital marcado pela economia verbal, em que a imagem assume papel central na construção do sentido",
      explicacao: "Legendas mínimas em publicações de imagem são típicas dos gêneros digitais contemporâneos, nos quais o texto verbal complementa, mas não centraliza, o sentido — a multimodalidade é tema frequente em questões sobre gêneros textuais." },

    { texto: "<p>Em um conto, o narrador descreve: \"A vovó tinha as mãos como mapas: cada linha contava um caminho, uma viagem, um trabalho.\"</p>",
      pergunta: "A comparação entre as mãos da personagem e mapas tem como efeito:",
      opcoes: [
        "Sugerir que a história de vida da personagem está, de certa forma, registrada visivelmente em seu corpo",
        "Indicar que a personagem trabalhava como cartógrafa",
        "Demonstrar que a personagem havia se perdido geograficamente",
        "Descrever de forma técnica a anatomia das mãos humanas"
      ],
      correta: "Sugerir que a história de vida da personagem está, de certa forma, registrada visivelmente em seu corpo",
      explicacao: "A comparação \"mãos como mapas\", associada a \"caminho\", \"viagem\" e \"trabalho\", sugere que as marcas do corpo guardam a trajetória de vida da personagem — recurso de linguagem figurada típico de textos literários cobrados no exame." },

    { texto: "<p>Em um vídeo educativo sobre o sistema solar, o narrador afirma: \"Imagine a Terra como uma bola de futebol; nessa escala, o Sol teria o tamanho de uma casa inteira.\"</p>",
      pergunta: "Esse recurso de linguagem, ao comparar elementos do sistema solar a objetos do cotidiano, tem como principal função:",
      opcoes: [
        "Facilitar a compreensão de proporções astronômicas por meio de referências familiares ao público",
        "Substituir definitivamente as medidas científicas oficiais",
        "Indicar que a Terra e o Sol possuem, de fato, o mesmo material de uma bola e de uma casa",
        "Demonstrar que o vídeo pertence ao gênero ficcional"
      ],
      correta: "Facilitar a compreensão de proporções astronômicas por meio de referências familiares ao público",
      explicacao: "Comparações com objetos do cotidiano (bola, casa) são estratégias de divulgação científica para tornar conceitos abstratos, como proporções astronômicas, mais acessíveis — recurso comum em textos de popularização da ciência." },

    { texto: "<p>Em uma crônica sobre o uso de aplicativos de entrega, o autor ironiza: \"Hoje em dia, é mais fácil pedir comida do Japão do que pedir desculpas para o vizinho.\"</p>",
      pergunta: "O efeito de humor da frase decorre, sobretudo, de:",
      opcoes: [
        "Da comparação inesperada entre a facilidade tecnológica e a dificuldade das relações humanas próximas",
        "Da descrição detalhada do cardápio de restaurantes japoneses",
        "Da explicação técnica sobre o funcionamento de aplicativos de entrega",
        "Da crítica exclusiva aos preços da comida importada"
      ],
      correta: "Da comparação inesperada entre a facilidade tecnológica e a dificuldade das relações humanas próximas",
      explicacao: "O humor surge do contraste irônico entre a praticidade da tecnologia (pedir comida de longe) e a dificuldade emocional de um gesto simples entre vizinhos — recurso comum em crônicas que tematizam a vida contemporânea." },

    { texto: "<p>Em um poema, o eu lírico escreve: \"Minha avó falava um português torto, cheio de erres puxados e palavras que o dicionário não conhecia. Mas era nessa língua torta que eu aprendia a amar.\"</p>",
      pergunta: "O eu lírico, ao descrever a fala da avó como \"torta\" e, ao mesmo tempo, associá-la ao aprendizado do amor, revela:",
      opcoes: [
        "Uma valorização afetiva da variedade linguística da avó, apesar do distanciamento da norma-padrão",
        "Uma crítica definitiva à forma de falar da avó, considerada incorreta",
        "A defesa de que apenas a norma-padrão é capaz de expressar afeto",
        "A necessidade de a avó corrigir sua fala para ser compreendida"
      ],
      correta: "Uma valorização afetiva da variedade linguística da avó, apesar do distanciamento da norma-padrão",
      explicacao: "Ainda que o eu lírico use o termo \"torta\" (associado, socialmente, a desvio da norma), o poema valoriza essa fala como espaço de afeto e aprendizado — reforçando que prestígio linguístico e valor afetivo/identitário não coincidem, tema central da Competência 8." },

    { texto: "<p>Em uma propaganda de banco digital, aparece a frase: \"Seu dinheiro, suas regras.\"</p>",
      pergunta: "O paralelismo sintático entre \"seu dinheiro\" e \"suas regras\" contribui para:",
      opcoes: [
        "Reforçar a ideia de autonomia do cliente sobre suas finanças, por meio da repetição estrutural",
        "Indicar que o banco não possui nenhuma regra de funcionamento",
        "Demonstrar uma relação de causa e consequência entre os dois termos",
        "Substituir a necessidade de qualquer outro tipo de informação no anúncio"
      ],
      correta: "Reforçar a ideia de autonomia do cliente sobre suas finanças, por meio da repetição estrutural",
      explicacao: "A repetição da estrutura \"seu/suas + substantivo\" cria um paralelismo que reforça, de forma sintética e memorável, a ideia de controle do cliente — recurso estilístico comum em slogans publicitários." },

    { texto: "<p>Em um documentário sobre comunidades quilombolas, um morador relata: \"A gente aprendeu a fazer farinha do jeito que os mais velhos faziam, sem máquina, batendo a mandioca do mesmo jeito que nossos bisavós batiam.\"</p>",
      pergunta: "O relato evidencia, sobretudo, a função da tradição oral e das práticas culturais como forma de:",
      opcoes: [
        "Transmitir conhecimentos e manter viva a memória ancestral por meio da repetição de práticas cotidianas",
        "Impedir qualquer tipo de modernização nas comunidades quilombolas",
        "Demonstrar que as comunidades desconhecem tecnologias modernas",
        "Substituir documentos escritos como única forma de registro histórico"
      ],
      correta: "Transmitir conhecimentos e manter viva a memória ancestral por meio da repetição de práticas cotidianas",
      explicacao: "A reprodução de gestos e técnicas \"do jeito que os mais velhos faziam\" caracteriza a tradição oral e prática como forma de preservação da memória e da identidade cultural — tema caro a textos sobre patrimônio cultural no ENEM." },
    { texto: "<img src='../assets/img/questoes/protesto-feminista.jpg' alt='Mulher em manifestação erguendo cartaz com mensagem sobre violência de gênero' style='max-width:100%; border-radius:8px; margin-bottom:10px;'><p>Foto de manifestação em que uma mulher carrega cartazes com frases de protesto contra a violência sexual e a sexualização do corpo feminino, ao lado de outras manifestantes.</p>",
  pergunta: "Essa cena de protesto evidencia uma reflexão sobre:",
  opcoes: [
    "A denúncia da banalização da violência sexual e a reivindicação do direito ao próprio corpo",
    "A defesa de que o uso de cartazes deve ser proibido em manifestações públicas",
    "A demonstração de que as manifestações feministas ocorrem apenas em países de língua espanhola",
    "A comprovação de que a violência contra a mulher é um problema já resolvido na atualidade"
  ],
  correta: "A denúncia da banalização da violência sexual e a reivindicação do direito ao próprio corpo",
  explicacao: "Os cartazes e as inscrições no corpo da manifestante denunciam a naturalização da violência sexual e reivindicam respeito ao corpo feminino — temas centrais em textos sobre direitos humanos e movimentos sociais cobrados pelo ENEM (ex.: questões 24 e 69 da prova de 2023)." }
  ]
  };
