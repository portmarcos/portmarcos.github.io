/* Simulado — 3º Ano EM, 2º Trimestre 2026 (Língua Portuguesa)
   15 questões REAIS do ENEM, selecionadas e organizadas pelas habilidades
   do Plano de Curso SEE/MG (CRMG) do 2º trimestre: argumentação, publicidade
   e cultura digital, morfossintaxe/coesão e intertextualidade. */
const QUIZ_DADOS = {
  id: "simulado-3ano-2tri-2026",
  titulo: "Simulado — 3º Ano EM · 2º Trimestre (Plano de Curso 2026)",
  descricao: "15 questões reais do ENEM organizadas pelas quatro frentes do Plano de Curso de Língua Portuguesa do 2º trimestre: força dos argumentos, publicidade e cultura digital, morfossintaxe/coesão e intertextualidade.",
  tempoPorQuestao: 150,
  questoes: [

    /* ===== BLOCO 1 · ARGUMENTAÇÃO — força e efeito dos argumentos ===== */
    { texto: `<p style="font-family:'JetBrains Mono',monospace;font-size:.7rem;letter-spacing:.08em;text-transform:uppercase;color:var(--cor-materia);margin-bottom:10px">Bloco 1 · Argumentação — força e eficácia dos argumentos</p>
      <p>Maio foi colorido de amarelo, e o foi porque mundialmente amarelo é a cor convencionada para as advertências. No trânsito, essas advertências têm sido fatais. A estimativa, caso nada seja feito, é a de que se atinjam assustadoras 2,4 milhões de mortes no trânsito em 2030 em todo o mundo.</p>
      <p>A pressa constante, o sentimento de invencibilidade, a certeza de invulnerabilidade, a necessidade de poder, a falta de civilidade, a certeza de impunidade, a ausência de solidariedade, a inexistência de compaixão e o desrespeito por si próprio são circunstâncias reais que, não raro, concorrem para o comportamento violento no trânsito.</p>
      <p>O Maio Amarelo, que preconiza a atenção pela vida, é uma das iniciativas nesse sentido. [...] Reafirmar e praticar esses princípios e valores talvez seja um caminho mais seguro e menos violento, que garanta a vida e não celebre a morte.</p>
      <p class="fonte">Disponível em: http://portaldotransito.com.br. ENEM 2023.</p>`,
      pergunta: "Considerando os procedimentos argumentativos utilizados, infere-se que o objetivo desse texto é:",
      opcoes: [
        "Sensibilizar o público para a importância de uma direção responsável",
        "Enumerar as causas determinantes da violência no trânsito",
        "Contextualizar a campanha de advertência no cenário mundial",
        "Divulgar dados numéricos alarmantes sobre acidentes de trânsito",
        "Restringir os problemas da violência no trânsito a aspectos emocionais"
      ],
      correta: "Sensibilizar o público para a importância de uma direção responsável",
      explicacao: `O texto usa três estratégias argumentativas: dados numéricos alarmantes (2,4 milhões de mortes previstas) para criar urgência; enumeração das causas comportamentais para mostrar que são corrigíveis; e a apresentação da campanha como solução viável. O conjunto converge para sensibilizar e mobilizar o leitor a mudar de comportamento — enumerar causas e contextualizar são meio, não fim. (ENEM 2023)
      <br><br><b>📋 Habilidade do Plano de Curso:</b> (EM13LP05B) Avaliar força e eficácia dos argumentos, para posicionar-se criticamente diante da questão discutida e/ou dos argumentos utilizados.` },

    { texto: `<p style="font-family:'JetBrains Mono',monospace;font-size:.7rem;letter-spacing:.08em;text-transform:uppercase;color:var(--cor-materia);margin-bottom:10px">Bloco 1 · Argumentação — movimentos argumentativos</p>
      <h4 style="margin:0 0 8px">Não somos tão especiais</h4>
      <p>Todas as características tidas como exclusivas dos humanos são compartilhadas por outros animais, ainda que em menor grau.</p>
      <p><b>INTELIGÊNCIA</b><br>A ideia de que somos os únicos animais racionais tem sido destruída desde os anos 40. A maioria das aves e mamíferos tem algum tipo de raciocínio.</p>
      <p><b>AMOR</b><br>O amor, tido como o mais elevado dos sentimentos, é parecido em várias espécies, como os corvos, que também criam laços duradouros, se preocupam com o ente querido e ficam de luto depois de sua morte.</p>
      <p><b>CONSCIÊNCIA</b><br>Chimpanzés se reconhecem no espelho. Orangotangos observam e enganam humanos distraídos.</p>
      <p class="fonte">BURGIERMAN, D. Superinteressante, n. 190, jul. 2003. ENEM 2012 — Questão 107.</p>`,
      pergunta: "O título do texto traz o ponto de vista do autor sobre a suposta supremacia dos humanos em relação aos outros animais. As estratégias argumentativas utilizadas para sustentar esse ponto de vista são:",
      opcoes: [
        "Exemplificação e comparação",
        "Definição e hierarquia",
        "Causa e consequência",
        "Finalidade e meios",
        "Autoridade e modelo"
      ],
      correta: "Exemplificação e comparação",
      explicacao: `A estrutura do texto se baseia em comparar habilidades humanas com as de outros animais (inteligência, amor, consciência) e em fornecer exemplos específicos (corvos, chimpanzés, orangotangos) para validar essas comparações — exatamente exemplificação e comparação, não definição/hierarquia ou causa/consequência. (ENEM 2012)
      <br><br><b>📋 Habilidade do Plano de Curso:</b> (EF89LP14) Analisar, em textos argumentativos e propositivos, os movimentos argumentativos de sustentação, refutação e negociação e os tipos de argumentos, avaliando a força/tipo dos argumentos utilizados.` },

    { texto: `<p style="font-family:'JetBrains Mono',monospace;font-size:.7rem;letter-spacing:.08em;text-transform:uppercase;color:var(--cor-materia);margin-bottom:10px">Bloco 1 · Argumentação — confronto entre texto e imagem</p>
      <h4 style="margin:0 0 8px">Álcool, crescimento e pobreza</h4>
      <p>O lavrador de Ribeirão Preto recebe em média R$ 2,50 por tonelada de cana cortada. Nos anos 80, esse trabalhador cortava cinco toneladas de cana por dia. A mecanização da colheita o obrigou a ser mais produtivo. O corta-cana derruba agora oito toneladas por dia.</p>
      <p>O trabalhador deve cortar a cana rente ao chão, encurvado. Usa roupas mal-ajambradas, quentes, que lhe cobrem o corpo, para que não seja lanhado pelas folhas da planta. O excesso de trabalho causa a birola: tontura, desmaio, cãibra, convulsão. A fim de aguentar dores e cansaço, esse trabalhador toma drogas e soluções de glicose, quando não farinha mesmo. Tem aumentado o número de mortes por exaustão nos canaviais.</p>
      <p>O setor da cana produz hoje uns 3,5% do PIB. Exporta US$ 8 bilhões. Gera toda a energia elétrica que consome e ainda vende excedentes. A indústria de São Paulo contrata cientistas e engenheiros para desenvolver máquinas e equipamentos mais eficientes para as usinas de álcool.</p>
      <img src="/assets/img/questoes/charge-alcool.png" alt="Charge de Angeli sobre a produção de álcool e cana-de-açúcar no Brasil" style="max-width:100%;border-radius:8px;margin:8px 0">
      <p class="fonte">Folha de S. Paulo, 11/3/2007 (Texto) | ANGELI. Folha de S. Paulo, 25/3/2007 (Charge). ENEM 2007 — Questão 10.</p>`,
      pergunta: "Confrontando-se as informações do texto com as da charge, conclui-se que:",
      opcoes: [
        "O texto mostra disparidades na agricultura brasileira, na qual convivem alta tecnologia e condições precárias de trabalho, que a charge ironiza",
        "A charge contradiz o texto ao mostrar que o Brasil possui tecnologia avançada no setor agrícola",
        "A charge e o texto abordam, a respeito da cana-de-açúcar brasileira, duas realidades distintas e sem relação entre si",
        "O texto e a charge consideram a agricultura brasileira avançada, do ponto de vista tecnológico",
        "A charge mostra o cotidiano do trabalhador, e o texto defende o fim da mecanização da produção da cana-de-açúcar no setor sucroalcooleiro"
      ],
      correta: "O texto mostra disparidades na agricultura brasileira, na qual convivem alta tecnologia e condições precárias de trabalho, que a charge ironiza",
      explicacao: `O texto jornalístico apresenta números impressionantes de tecnologia e exportação do setor sucroalcooleiro, mas também descreve as condições degradantes do corta-cana (mortes por exaustão, drogas para aguentar o trabalho). A charge, com humor ácido, ironiza justamente essa disparidade entre o avanço tecnológico anunciado e as condições reais de vida do trabalhador. (ENEM 2007)
      <br><br><b>📋 Habilidade do Plano de Curso:</b> (EF89LP14) Analisar os movimentos argumentativos de sustentação, refutação e negociação, avaliando a força e o tipo dos argumentos utilizados — aqui, o confronto entre a informação verbal e o recurso visual da charge.` },

    { texto: `<p style="font-family:'JetBrains Mono',monospace;font-size:.7rem;letter-spacing:.08em;text-transform:uppercase;color:var(--cor-materia);margin-bottom:10px">Bloco 1 · Argumentação — argumento de autoridade e refutação</p>
      <p>Com 20 anos de experiência no futebol de alto rendimento, Marina, ex-jogadora da seleção brasileira de futebol, salienta que, por trás do espetáculo apresentado nas mídias, com mensagens de motivação e superação, o esporte não é tão inclusivo assim. [...] Para a profissional, é preciso analisar com cautela "a ideia romântica que a mídia passa para os telespectadores". A realidade é muito mais dura do que as imagens espetaculosas que principalmente a televisão busca transmitir para a audiência.</p>
      <p class="fonte">ROSOLEN, N. Disponível em: www.uninter.com. ENEM 2025.</p>`,
      pergunta: "Nesse texto, a visão crítica de uma ex-atleta de futebol revela que:",
      opcoes: [
        "Os meios de comunicação invisibilizam as dificuldades presentes no esporte",
        "O treinamento atlético de alto nível é desestimulante para os indivíduos",
        "O trabalho contínuo é desvalorizado no contexto esportivo profissional",
        "As ações de incentivo financeiro a jovens atletas são precárias",
        "As publicações da mídia esportiva rotulam atletas iniciantes"
      ],
      correta: "Os meios de comunicação invisibilizam as dificuldades presentes no esporte",
      explicacao: `O texto usa o argumento de autoridade (a experiência de 20 anos de Marina) para contradizer a narrativa midiática. A estrutura argumentativa é: mídia apresenta (espetáculo, motivação, superação) × realidade é (muito mais dura). O ponto identificado pela crítica é que a televisão invisibiliza as dificuldades reais para criar "imagens espetaculosas". (ENEM 2025)
      <br><br><b>📋 Habilidade do Plano de Curso:</b> (EM13LP05B / EF89LP14) Avaliar a força de um argumento de autoridade e reconhecer, no texto, um movimento de refutação de uma tese amplamente difundida.` },

    /* ===== BLOCO 2 · PUBLICIDADE E CULTURA DIGITAL ===== */
    { texto: `<p style="font-family:'JetBrains Mono',monospace;font-size:.7rem;letter-spacing:.08em;text-transform:uppercase;color:var(--cor-materia);margin-bottom:10px">Bloco 2 · Publicidade e cultura digital — liberdade de expressão e discurso de ódio</p>
      <h4 style="margin:0 0 8px">Palavras têm poder</h4>
      <p>Palavras informam, libertam, destroem preconceitos.<br>Palavras desinformam, aprisionam e criam preconceitos.<br>Liberdade de expressão. A escolha é sua. A responsabilidade, também.</p>
      <p>A liberdade de expressão é uma conquista inquestionável. O que todos precisam saber é que liberdade traz responsabilidades. Publicar informações e mensagens sensacionalistas, explorar imagens mórbidas, desrespeitar os Direitos Humanos e estimular o preconceito e a violência são atos de desrespeito à lei.</p>
      <p>Para promover a liberdade de expressão com responsabilidade, o Ministério Público de Pernambuco se une a vários parceiros nesta ação educativa. Colabore.</p>
      <p class="fonte">Disponível em: http://palavrastempoder.org. Acesso em: 20 abr. 2015. ENEM 2019 — Questão 06.</p>`,
      pergunta: "Pela análise do conteúdo, constata-se que essa campanha publicitária tem como função social:",
      opcoes: [
        "Conscientizar a população de que direitos implicam deveres",
        "Propagar a imagem positiva do Ministério Público",
        "Coibir violações de direitos humanos nos meios de comunicação",
        "Divulgar políticas sociais que combatem a intolerância e o preconceito",
        "Instruir as pessoas sobre a forma correta de expressão nas redes sociais"
      ],
      correta: "Conscientizar a população de que direitos implicam deveres",
      explicacao: `A campanha usa a antítese entre os poderes positivo e negativo das palavras para alertar que a liberdade de expressão vem acompanhada de responsabilidade. A função social é conativa (apelativa): busca conscientizar e provocar mudança de comportamento — mostrando que direitos (liberdade de expressão) implicam deveres (responsabilidade no uso das palavras). (ENEM 2019)
      <br><br><b>📋 Habilidade do Plano de Curso:</b> (EF69LP01) Diferenciar liberdade de expressão de discursos de ódio, posicionando-se contrariamente a esse tipo de discurso.` },

    { texto: `<p style="font-family:'JetBrains Mono',monospace;font-size:.7rem;letter-spacing:.08em;text-transform:uppercase;color:var(--cor-materia);margin-bottom:10px">Bloco 2 · Publicidade e cultura digital — memes, checagem e letramento midiático</p>
      <h4 style="margin:0 0 8px">Memes e fake news: o impacto na educação das crianças</h4>
      <p>Há quem diga que o Brasil nunca mais foi o mesmo depois dos memes. Na economia da velocidade, alguns apostam no humor, outros no engajamento político, e tem gente investindo alto na mentira também. Diante desse cenário, uma pergunta se torna essencial: será que todo mundo está conseguindo traduzir as mensagens postadas, curtidas e compartilhadas?</p>
      <p>Essa dúvida incentivou uma professora de língua portuguesa a desenvolver uma proposta de leitura e análise crítica de memes com estudantes do ensino fundamental, na rede pública do Distrito Federal, na cidade de Samambaia. "Percebi que muitos alunos e pais estavam divulgando conteúdos sem saber o que havia por trás das palavras", relata a professora.</p>
      <p>Letramento político e midiático é um desafio intergeracional. Em tempos de notícias falsas, de imagens manipuladas e de memes sendo usados como triunfo da verdade de cada um, checagem de informação e interpretação de texto acabam se tornando moedas valiosas.</p>
      <p class="fonte">Disponível em: http://funetas.com.br. Acesso em: 15 jan. 2024 (adaptado). ENEM 2024 — Questão 45.</p>`,
      pergunta: "Ao abordar a relação dos memes com a educação, a reportagem sustenta uma crítica à:",
      opcoes: [
        "Divulgação de informação manipulada em postagens virtuais",
        "Falta de fiscalização no uso de aplicativos de mensagens por crianças",
        "Utilização de ferramentas digitais no trabalho educacional",
        "Exploração de conteúdos humorísticos nas mídias sociais",
        "Propagação de mensagens com objetivos políticos"
      ],
      correta: "Divulgação de informação manipulada em postagens virtuais",
      explicacao: `A reportagem apresenta um projeto de uma professora para analisar memes criticamente com os alunos, justamente porque é comum, na internet, a divulgação de postagens sem certeza da veracidade do conteúdo. A crítica central é à divulgação de informação manipulada (fake news), não ao humor ou à tecnologia em si. (ENEM 2024)
      <br><br><b>📋 Habilidade do Plano de Curso:</b> (EF89LP02) Analisar diferentes práticas (curtir, compartilhar, comentar) e textos da cultura digital envolvidos no trato com a informação, de forma a possibilitar uma presença mais crítica e ética nas redes.` },

    { texto: `<p style="font-family:'JetBrains Mono',monospace;font-size:.7rem;letter-spacing:.08em;text-transform:uppercase;color:var(--cor-materia);margin-bottom:10px">Bloco 2 · Publicidade e cultura digital — mobilização em rede</p>
      <h4 style="margin:0 0 8px">10 anos de "hashtag": a ferramenta que mobiliza a internet</h4>
      <p>A "hashtag", ícone das redes sociais, celebrou em 2017 seus primeiros 10 anos de uso no acompanhamento dos grandes eventos mundiais com um efeito de mobilização e expressão de emoção e humor.</p>
      <p>A palavra-chave precedida pelo símbolo do jogo da velha foi popularizada pelo Twitter antes de ser incorporada por outras redes sociais. A invenção foi de Chris Messina, designer americano especialista em redes sociais. Em 23 de agosto de 2007, o usuário intensivo do Twitter propôs em um tuíte usar o jogo da velha para reagrupar mensagens sobre um mesmo assunto.</p>
      <p>O compartilhamento das palavras-chaves — que já são citadas 125 milhões de vezes por dia no mundo — já serviu de trampolim para mobilizações em massa. Alguns slogans que tiveram grande efeito mobilizador foram o #BlackLivesMatter (Vidas negras importam), após a morte de vários cidadãos americanos negros pela polícia, e #OccupyWallStreet (Ocupem Wall Street), referente ao movimento que acampou no coração de Manhattan para denunciar os abusos do capitalismo.</p>
      <p class="fonte">AFP. Disponível em: http://exame.abril.com.br. Acesso em: 24 ago. 2017 (adaptado). ENEM PPL 2019 — Questão 16.</p>`,
      pergunta: "Ao descrever a história e os exemplos de utilização da hashtag, o texto evidencia que:",
      opcoes: [
        "A incorporação desse recurso expressivo pela sociedade o flexibilizou e o potencializou",
        "A incorporação desse recurso expressivo pela sociedade impossibilita a manutenção de seu uso original",
        "A incorporação pela sociedade caracterizou esse recurso expressivo de forma definitiva",
        "Esse recurso expressivo se tornou o principal meio de mobilização social pela internet",
        "Esse recurso expressivo precisou de uma década para ganhar notabilidade social"
      ],
      correta: "A incorporação desse recurso expressivo pela sociedade o flexibilizou e o potencializou",
      explicacao: `O texto narra o surgimento da hashtag no Twitter, sua popularização em outras redes e seu uso em mobilizações de massa como #BlackLivesMatter. Isso mostra dois movimentos: a hashtag ganhou novos usos (flexibilização) e cresceu em alcance e impacto (potencialização) — ela não ficou presa a um uso "definitivo" nem parou de evoluir. (ENEM PPL 2019)
      <br><br><b>📋 Habilidade do Plano de Curso:</b> (EF89LP02) Analisar práticas (curtir, compartilhar, comentar) e textos da cultura digital envolvidos no trato com a informação e a mobilização social nas redes.` },

    /* ===== BLOCO 3 · MORFOSSINTAXE, COESÃO E EFEITOS DE SENTIDO ===== */
    { texto: `<p style="font-family:'JetBrains Mono',monospace;font-size:.7rem;letter-spacing:.08em;text-transform:uppercase;color:var(--cor-materia);margin-bottom:10px">Bloco 3 · Morfossintaxe e coesão — efeitos da coordenação</p>
      <h4 style="margin:0 0 8px">Tarefa</h4>
      <p>Morder o fruto amargo e não cuspir<br>Mas avisar aos outros quanto é amargo<br>Cumprir o trato injusto e não falhar<br>Mas avisar aos outros quanto é injusto<br>Sofrer o esquema falso e não ceder<br>Mas avisar aos outros quanto é falso<br>Dizer também que são coisas mutáveis...<br>E quando em muitos a não pulsar<br>— do amargo e injusto e falso por mudar —<br>então confiar à gente exausta o plano<br>de um mundo novo e muito mais humano.</p>
      <p class="fonte">CAMPOS, G. Tarefa. Rio de Janeiro: Civilização Brasileira, 1981. ENEM 2014 — Questão 128.</p>`,
      pergunta: "Na organização do poema, os empregos da conjunção \"mas\" articulam, para além de sua função sintática:",
      opcoes: [
        "A introdução do argumento mais forte de uma sequência",
        "A ligação entre verbos semanticamente semelhantes",
        "A oposição entre ações aparentemente inconciliáveis",
        "O reforço da causa apresentada no enunciado introdutório",
        "A intensidade dos problemas sociais presentes no mundo"
      ],
      correta: "A introdução do argumento mais forte de uma sequência",
      explicacao: `Em cada estrofe, o "mas" não apenas conecta ideias contrárias: ele introduz o verdadeiro chamado à ação do poema — "avisar aos outros" — que é o argumento mais forte e o ponto central de cada sequência. É esse reforço argumentativo progressivo, e não apenas uma oposição sintática, que o "mas" constrói ao longo do poema. (ENEM 2014)
      <br><br><b>📋 Habilidade do Plano de Curso:</b> (EM13LP08) Analisar os processos de coordenação e subordinação e os efeitos de seus usos, de modo a potencializar os processos de compreensão de textos.` },

    { texto: `<p style="font-family:'JetBrains Mono',monospace;font-size:.7rem;letter-spacing:.08em;text-transform:uppercase;color:var(--cor-materia);margin-bottom:10px">Bloco 3 · Morfossintaxe e coesão — relação de condição</p>
      <p>O senso comum é que só os seres humanos são capazes de rir. Isso não é verdade? Não. O riso básico [...] nós compartilhamos com diversos animais. Em ratos, já foram observadas vocalizações ultrassônicas [...] que eles emitem quando estão brincando de "rolar no chão". Acontecendo de o cientista provocar um dano em um local específico no cérebro, o rato deixa de fazer essa vocalização e a brincadeira vira briga séria. Sem o riso, o outro pensa que está sendo atacado.</p>
      <p class="fonte">Disponível em: http://globonews.globo.com. Acesso em: 31 maio 2012 (adaptado). ENEM 2016 — Questão 101.</p>`,
      pergunta: "A coesão textual é responsável por estabelecer relações entre as partes do texto. Analisando o trecho \"Acontecendo de o cientista provocar um dano em um local específico no cérebro\", verifica-se que ele estabelece com a oração seguinte uma relação de:",
      opcoes: [
        "Condição, pois é preciso que se tenha lesão específica no cérebro para que não haja vocalização dos ratos",
        "Finalidade, porque os danos causados ao cérebro têm por finalidade provocar a falta de vocalização dos ratos",
        "Oposição, visto que o dano causado em um local específico no cérebro é contrário à vocalização dos ratos",
        "Consequência, uma vez que o motivo de não haver mais vocalização dos ratos é o dano causado no cérebro",
        "Proporção, já que à medida que se lesiona o cérebro não é mais possível que haja vocalização dos ratos"
      ],
      correta: "Condição, pois é preciso que se tenha lesão específica no cérebro para que não haja vocalização dos ratos",
      explicacao: `O trecho inicia com o gerúndio "Acontecendo de..." — equivalente a "Se o cientista provocar um dano..." —, que introduz uma condição hipotética: só na condição de haver essa lesão específica é que o rato deixa de vocalizar. É essa relação condicional (se X, então Y), e não de causa e efeito já consumado, que conecta as duas orações. (ENEM 2016)
      <br><br><b>📋 Habilidade do Plano de Curso:</b> (EM13LP08) Analisar os processos de coordenação e subordinação e o efeito de seus usos na produção de sentido de um texto.` },

    { texto: `<p style="font-family:'JetBrains Mono',monospace;font-size:.7rem;letter-spacing:.08em;text-transform:uppercase;color:var(--cor-materia);margin-bottom:10px">Bloco 3 · Morfossintaxe e coesão — a conjunção "que" consecutiva</p>
      <h4 style="margin:0 0 8px">Cidade grande</h4>
      <p>Que beleza, Montes Claros.<br>Como cresceu Montes Claros.<br>Quanta indústria em Montes Claros.<br>Montes Claros cresceu tanto,<br>ficou urbe tão notória,<br>prima-rica do Rio de Janeiro,<br>que já tem cinco favelas<br>por enquanto, e mais promete.</p>
      <p class="fonte">Carlos Drummond de Andrade. ENEM 2004 — Questão 27.</p>`,
      pergunta: "No trecho \"Montes Claros cresceu tanto, / (...), / que já tem cinco favelas\", a palavra \"que\" contribui para estabelecer uma relação de consequência. Dos seguintes versos, todos de Carlos Drummond de Andrade, apresenta esse mesmo tipo de relação:",
      opcoes: [
        "\"A ausência é um estar em mim. E sinto-a, branca, tão pegada, aconchegada nos meus braços, que rio e danço e invento exclamações alegres.\"",
        "\"Meu Deus, por que me abandonaste se sabias que eu não era Deus se sabias que eu era fraco.\"",
        "\"No meio-dia branco de luz uma voz que aprendeu a ninar nos longes da senzala – e nunca se esqueceu – chamava para o café.\"",
        "\"Teus ombros suportam o mundo e ele não pesa mais que a mão de uma criança.\"",
        "\"Penetra surdamente no reino das palavras. Lá estão os poemas que esperam ser escritos.\""
      ],
      correta: "\"A ausência é um estar em mim. E sinto-a, branca, tão pegada, aconchegada nos meus braços, que rio e danço e invento exclamações alegres.\"",
      explicacao: `A construção original é "cresceu TANTO... QUE já tem cinco favelas" — o clássico padrão "tanto...que", em que a intensidade de algo gera uma consequência. O único verso que repete exatamente essa estrutura é "tão pegada... QUE rio e danço": a intensidade do sentimento de ausência resulta na consequência. Os demais versos usam "que" como pronome relativo, não como conectivo de consequência. (ENEM 2004)
      <br><br><b>📋 Habilidade do Plano de Curso:</b> (EM13LP08) Analisar os processos de subordinação e os efeitos de seus usos, reconhecendo a relação semântica estabelecida por diferentes conectivos.` },

    { texto: `<p style="font-family:'JetBrains Mono',monospace;font-size:.7rem;letter-spacing:.08em;text-transform:uppercase;color:var(--cor-materia);margin-bottom:10px">Bloco 3 · Morfossintaxe e coesão — pontuação e efeito de sentido</p>
      <p>Quem procura a essência de um conto no espaço que fica entre a obra e seu autor comete um erro: é muito melhor procurar não no terreno que fica entre o escritor e sua obra, mas justamente no terreno que fica entre o texto e seu leitor.</p>
      <p class="fonte">OZ, A. De amor e trevas. São Paulo: Cia. das Letras, 2005 (fragmento). ENEM 2016 — Questão 104.</p>`,
      pergunta: "A progressão temática de um texto pode ser estruturada por meio de diferentes recursos coesivos, entre os quais se destaca a pontuação. Nesse texto, o emprego dos dois pontos caracteriza uma operação textual realizada com a finalidade de:",
      opcoes: [
        "Introduzir um argumento esclarecedor",
        "Comparar elementos opostos",
        "Relacionar informações gradativas",
        "Intensificar um problema conceitual",
        "Assinalar uma consequência hipotética"
      ],
      correta: "Introduzir um argumento esclarecedor",
      explicacao: `Os dois-pontos anunciam a explicação/argumento que esclarece por que "procurar a essência de um conto" entre obra e autor "é um erro": o que vem depois introduz o raciocínio que sustenta e esclarece a afirmação anterior, e não uma comparação de opostos ou uma consequência hipotética. (ENEM 2016)
      <br><br><b>📋 Habilidade do Plano de Curso:</b> (EM13LP15) Considerar, na produção e revisão de textos, o uso adequado dos sinais de pontuação e os efeitos de sentido que provocam.` },

    /* ===== BLOCO 4 · INTERTEXTUALIDADE E DIÁLOGO ENTRE OBRAS ===== */
    { texto: `<p style="font-family:'JetBrains Mono',monospace;font-size:.7rem;letter-spacing:.08em;text-transform:uppercase;color:var(--cor-materia);margin-bottom:10px">Bloco 4 · Intertextualidade — diálogo com o texto bíblico</p>
      <p>Pote Cru é meu pastor. Ele me guiará.<br>Ele está comprometido de monge.<br>De tarde deambula no azedal entre torsos de<br>cachorros, trampas, trapos, panos de regra, couros,<br>de rato ao podre, vísceras de piranhas, baratas<br>albinas, dálias secas, vergalhos de lagartos,<br>linguetas de sapatos, aranhas dependuradas em<br>gotas de orvalho etc. etc.<br>Pote Cru, ele dormia nas ruínas de um convento<br>Foi encontrado em osso.<br>Ele tinha uma voz de oratórios perdidos.</p>
      <p class="fonte">BARROS, M. Retrato do artista quando coisa. Rio de Janeiro: Record, 2002. ENEM 2012 — Questão 113.</p>`,
      pergunta: "Ao estabelecer uma relação com o texto bíblico nesse poema, o eu lírico identifica-se com Pote Cru porque:",
      opcoes: [
        "Acompanha-o na opção pela insignificância das coisas",
        "Entende a necessidade de todo poeta ter voz de oratórios perdidos",
        "Elege-o como pastor a fim de ser guiado para a salvação divina",
        "Valoriza nos percursos do pastor a conexão entre as ruínas e a tradição",
        "Necessita de um guia para a descoberta das coisas da natureza"
      ],
      correta: "Acompanha-o na opção pela insignificância das coisas",
      explicacao: `Manoel de Barros subverte o Salmo 23 ("O Senhor é meu pastor") substituindo a figura divina por "Pote Cru", um guia que conduz por um lixão, não por pastos verdejantes. O eu lírico se identifica com essa escolha porque compartilha a "poética da insignificância": valoriza o que a sociedade descarta como sem importância — não busca salvação divina nem apenas a tradição. (ENEM 2012)
      <br><br><b>📋 Habilidade do Plano de Curso:</b> (EM13LP50) Analisar relações intertextuais e interdiscursivas entre obras de diferentes autores e gêneros literários de momentos históricos diversos.` },

    { texto: `<p style="font-family:'JetBrains Mono',monospace;font-size:.7rem;letter-spacing:.08em;text-transform:uppercase;color:var(--cor-materia);margin-bottom:10px">Bloco 4 · Intertextualidade — erudito e popular em diálogo</p>
      <p><b>TEXTO I</b><br>É pau, é pedra, é o fim do caminho<br>É um resto de toco, é um pouco sozinho<br>É um caco de vidro, é a vida, é o sol<br>É a noite, é a morte, é o laço, é o anzol [...]</p>
      <p class="fonte" style="margin:0 0 12px;border:none;padding:0">TOM JOBIM. Águas de março. 1972 (fragmento).</p>
      <p><b>TEXTO II</b><br>A inspiração súbita e certeira do compositor serve ainda de exemplo do lema antigo: nada vem do nada. Duas fontes são razoavelmente conhecidas. A primeira é o poema O caçador de esmeraldas, do mestre parnasiano Olavo Bilac: "Foi em março, ao findar da chuva [...]". E a outra é um ponto de macumba, gravado com sucesso por J. B. Carvalho, do Conjunto Tupi: "É pau, é pedra, é seixo miúdo, roda a baiana por cima de tudo". Combinar Olavo Bilac e macumba já seria bom; mas o que se vê em Águas de março vai muito além: tudo se transforma numa outra coisa e numa outra música.</p>
      <p class="fonte">NESTROVSKI, A. Três canções de Tom Jobim. São Paulo: Cosac Naify, 2004. ENEM 2020 — Questão 12.</p>`,
      pergunta: "Ao situar a composição no panorama cultural brasileiro, o Texto II destaca:",
      opcoes: [
        "O diálogo que a letra da canção estabelece com diferentes tradições da cultura nacional",
        "A singularidade com que o compositor converte referências eruditas em populares",
        "O caráter inovador com que o compositor concebe o processo de criação artística",
        "A relativização que a letra da canção promove na concepção tradicional de originalidade",
        "O resgate que a letra da canção promove de obras pouco conhecidas pelo público no país"
      ],
      correta: "O diálogo que a letra da canção estabelece com diferentes tradições da cultura nacional",
      explicacao: `Nestrovski destaca que Tom Jobim dialogou com duas tradições culturais distintas: a literatura parnasiana erudita (Olavo Bilac) e a cultura popular afro-brasileira (ponto de macumba). A canção sintetiza esse diálogo intertextual entre erudito e popular, entre tradição literária e cultura de terreiro. (ENEM 2020)
      <br><br><b>📋 Habilidade do Plano de Curso:</b> (EM13LP50) Analisar relações intertextuais e interdiscursivas entre obras de diferentes autores e gêneros, explorando como a literatura e as artes dialogam e se retroalimentam.` },

    { texto: `<p style="font-family:'JetBrains Mono',monospace;font-size:.7rem;letter-spacing:.08em;text-transform:uppercase;color:var(--cor-materia);margin-bottom:10px">Bloco 4 · Intertextualidade — culturas em diálogo</p>
      <p>Leandro Aparecido Ferreira, o MC Fioti, compôs em 2017 a música Bum bum tam tam, que gerou, em nove meses, 480 milhões de visualizações no YouTube. É o funk brasileiro mais ouvido na história do site.</p>
      <p>A partir de uma gravação da flauta que achou na internet, MC Fioti fez tudo sozinho: compôs, cantou e produziu em uma noite só. "Comecei a pesquisar alguns tipos de flauta, coisas antigas. E nisso eu achei a 'flautinha do Sebastian Bach'", conta. A descoberta foi por acaso: Fioti não sabia quem era o músico alemão e não sabe tocar o instrumento.</p>
      <p>A "flauta envolvente" da música é um trecho da Partita em Lá menor, escrita pelo alemão Johann Sebastian Bach por volta de 1723.</p>
      <p class="fonte">Disponível em: https://g1.globo.com. Acesso em: 6 jun. 2018 (adaptado). ENEM 2020 — Questão 28.</p>`,
      pergunta: "A incorporação de um trecho da obra para flauta solo de Johann Sebastian Bach na música de MC Fioti demonstra a:",
      opcoes: [
        "Inter-relação de elementos culturais vindos de realidades distintas na construção de uma nova proposta musical",
        "Influência permanente da cultura eurocêntrica nas produções musicais brasileiras",
        "Homenagem aos referenciais estéticos que deram origem às produções da música popular",
        "Necessidade de divulgar a música de concerto nos meios populares nas periferias das grandes cidades",
        "Utilização desintencional de uma música excessivamente distante da realidade cultural dos jovens brasileiros"
      ],
      correta: "Inter-relação de elementos culturais vindos de realidades distintas na construção de uma nova proposta musical",
      explicacao: `A incorporação inconsciente de Bach por MC Fioti ilustra como a arte transita entre contextos culturais distintos: a música clássica europeia do século XVIII ressurge no funk periférico do século XXI. O resultado é a criação de algo novo a partir da fusão de elementos culturais de origens diversas — a essência da intertextualidade intercultural. (ENEM 2020)
      <br><br><b>📋 Habilidade do Plano de Curso:</b> (EF89LP32) Analisar os efeitos de sentido decorrentes do uso de mecanismos de intertextualidade entre textos e outras manifestações artísticas de épocas distintas.` },

    { texto: `<p style="font-family:'JetBrains Mono',monospace;font-size:.7rem;letter-spacing:.08em;text-transform:uppercase;color:var(--cor-materia);margin-bottom:10px">Bloco 4 · Intertextualidade — alusão ao mito clássico</p>
      <p><b>TEXTO I — Os Doze Trabalhos de Hércules</b></p>
      <p>Hércules é uma figura lendária da mitologia greco-romana. Ele é frequentemente retratado como um herói de força sobre-humana e coragem, filho de Zeus, o rei dos deuses, e Alcmena, uma mulher mortal. O episódio mais conhecido de Hércules é a realização dos Doze Trabalhos.</p>
      <p>Esses trabalhos são impostos a ele como uma forma de expiação pelos crimes cometidos durante um acesso de loucura causado pela deusa Hera, esposa de Zeus.</p>
      <p class="fonte" style="margin:0 0 12px;border:none;padding:0">HERTEL, R. Mitologia. Disponível em: https://osmelhoreslivros.com.br. Acesso em: 4 jun. 2025 (adaptado).</p>
      <p><b>TEXTO II — "Os Doze Trabalhos"</b><br>"O que lhe faltava de estudo lhe sobrava de boa vontade e inteligência. [...] Aos sábados, era pedreiro e, aos domingos, conservava um jardim [...]. Seu nome: João Antonio da Silva. Mas pode chamar de Hércules."</p>
      <p class="fonte">ENEM 2025 — Questão 37.</p>`,
      pergunta: "A comparação entre os textos I e II indica que:",
      opcoes: [
        "A intertextualidade com o mito apresentado no Texto I é um recurso presente no Texto II",
        "A narração de fatos do Texto II sintetiza os acontecimentos retratados no Texto I",
        "O vocabulário empregado no Texto II é ancorado em conhecimento literário",
        "O tema do trabalho como reparação é abordado em ambos os textos",
        "A marcação temporal no passado predomina em ambos os textos"
      ],
      correta: "A intertextualidade com o mito apresentado no Texto I é um recurso presente no Texto II",
      explicacao: `Ao apelidar o trabalhador multifuncional João de "Hércules" e intitular o texto "Os Doze Trabalhos", o autor importa todo o significado do mito grego (força, esforço sobre-humano) sem precisar explicá-lo — o leitor completa o sentido reconhecendo a referência. Essa é a intertextualidade em ação: o Texto II se apoia no Texto I para caracterizar seu protagonista. (ENEM 2025)
      <br><br><b>📋 Habilidade do Plano de Curso:</b> (EF89LP32 / EF67LP27) Analisar, entre os textos literários e outras manifestações, referências explícitas ou implícitas a outros textos quanto aos temas e personagens.` }

  ]
};
