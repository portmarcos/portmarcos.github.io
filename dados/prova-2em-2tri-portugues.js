/* Prova — 2º Ano EM, 2º Trimestre 2026 (Língua Portuguesa)
   13 questões cobrindo os assuntos pedidos pelo professor: Período simples
   e composto, Orações coordenadas e subordinadas, Tipos de sujeito,
   Vocativo, Concordância verbal, Pontuação, Parnasianismo e Simbolismo,
   Interpretação textual e Memórias Póstumas de Brás Cubas.
   Todas as questões são de autoria do professor/site (pedagógicas),
   exceto o trecho de Memórias Póstumas de Brás Cubas (Machado de Assis,
   1881, domínio público), reproduzido e citado como fonte real. */
const QUIZ_DADOS = {
  id: "prova-2em-2tri-2026-portugues",
  titulo: "Prova — 2º Ano EM · 2º Trimestre (Língua Portuguesa)",
  descricao: "13 questões misturando sintaxe do período (simples/composto, orações coordenadas e subordinadas, tipos de sujeito, vocativo), gramática (concordância verbal, pontuação), literatura (Parnasianismo, Simbolismo, Memórias Póstumas de Brás Cubas) e interpretação de texto.",
  tempoPorQuestao: 120,
  questoes: [

    /* 1. Período simples e composto */
    { pergunta: "Assinale a alternativa em que o período é composto (duas orações, com dois verbos):",
      opcoes: ["O professor explicou a matéria com calma.", "Os alunos chegaram cedo hoje.", "Estudei bastante, mas não tirei uma boa nota.", "A prova de português será na sexta-feira."],
      correta: "Estudei bastante, mas não tirei uma boa nota.",
      explicacao: "Período composto é aquele que tem duas ou mais orações, ou seja, dois ou mais verbos. Em \"Estudei bastante, mas não tirei uma boa nota\" há dois verbos (\"estudei\" e \"tirei\"), ligados pela conjunção \"mas\" — logo, é composto. As demais alternativas têm apenas um verbo cada, sendo períodos simples (uma só oração)." },

    /* 2. Orações coordenadas */
    { pergunta: "Na oração \"Estudei bastante, mas não tirei uma boa nota\", a oração destacada (\"mas não tirei uma boa nota\") é uma oração coordenada sindética:",
      opcoes: ["Aditiva", "Adversativa", "Alternativa", "Conclusiva"],
      correta: "Adversativa",
      explicacao: "A conjunção \"mas\" liga duas orações independentes exprimindo contraste ou oposição entre as ideias — é essa a marca da oração coordenada sindética adversativa. A aditiva usa \"e\"; a alternativa, \"ou\"; a conclusiva, \"logo\"/\"portanto\"." },

    /* 3. Orações subordinadas */
    { pergunta: "Em \"Quando o sinal tocou, os alunos entraram em fila\", a oração destacada (\"Quando o sinal tocou\") é uma oração subordinada adverbial:",
      opcoes: ["Causal", "Temporal", "Condicional", "Concessiva"],
      correta: "Temporal",
      explicacao: "A conjunção \"quando\" introduz uma oração subordinada adverbial temporal, indicando o momento em que ocorre a ação da oração principal (\"os alunos entraram em fila\"). A causal seria introduzida por \"porque\"/\"já que\"; a condicional, por \"se\"; a concessiva, por \"embora\"/\"ainda que\"." },

    /* 4. Tipos de sujeito */
    { pergunta: "Assinale a alternativa em que o sujeito da oração é indeterminado:",
      opcoes: ["Choveu a noite inteira.", "Falaram mal de você na reunião.", "Os alunos terminaram a prova cedo.", "Ele e ela viajaram juntos."],
      correta: "Falaram mal de você na reunião.",
      explicacao: "Quando o verbo está na 3ª pessoa do plural sem que se saiba (ou sem que importe) quem pratica a ação, o sujeito é indeterminado — é o caso de \"Falaram mal de você\". Em \"Choveu a noite inteira\", o verbo é impessoal (fenômeno da natureza), por isso a oração não tem sujeito (sujeito inexistente). Em \"Os alunos terminaram...\", o sujeito é simples (\"os alunos\"); em \"Ele e ela viajaram...\", é composto (dois núcleos: \"ele\" e \"ela\")." },

    /* 5. Vocativo */
    { pergunta: "Em qual das alternativas há um vocativo?",
      opcoes: ["Maria estudou muito para a prova.", "Maria, você estudou muito para a prova?", "A prova de Maria foi difícil.", "Maria viu a prova antes da aula."],
      correta: "Maria, você estudou muito para a prova?",
      explicacao: "O vocativo é o termo usado para chamar, invocar ou interpelar diretamente alguém, isolado por vírgula(s) e sem função sintática na oração (não é sujeito nem complemento). Em \"Maria, você estudou muito para a prova?\", \"Maria\" está sendo chamada — é vocativo. Nas demais alternativas, \"Maria\" exerce função sintática: sujeito (1ª e 4ª) ou adjunto adnominal (3ª)." },

    /* 6. Concordância verbal */
    { pergunta: "Assinale a alternativa em que a concordância verbal está CORRETA:",
      opcoes: ["Haviam muitos alunos na sala.", "Fazem dois anos que não o vejo.", "Mais de um aluno faltou à prova.", "Existe muitos motivos para estudar."],
      correta: "Mais de um aluno faltou à prova.",
      explicacao: "Com a expressão \"mais de um\" seguida de substantivo no singular, o verbo fica no singular (\"mais de um aluno faltou\"), exceto quando há ideia de reciprocidade. As demais têm erro: \"haver\" indicando existência é impessoal e fica sempre no singular (\"Havia muitos alunos\"); \"fazer\" indicando tempo decorrido também é impessoal (\"Faz dois anos\"); \"existir\" não é impessoal e concorda normalmente com o sujeito plural (\"Existem muitos motivos\")." },

    /* 7. Pontuação */
    { pergunta: "Assinale a alternativa em que HÁ erro de pontuação:",
      opcoes: ["Maria, venha até aqui.", "Os alunos que estudaram, foram bem na prova.", "Chegou tarde; por isso, perdeu a explicação.", "Ana, minha colega de turma, ajudou-me com o dever."],
      correta: "Os alunos que estudaram, foram bem na prova.",
      explicacao: "Nunca se separa o sujeito do predicado por vírgula — nem quando o sujeito vem desenvolvido por uma oração adjetiva restritiva, como em \"Os alunos que estudaram foram bem na prova\" (a oração \"que estudaram\" restringe QUAIS alunos, por isso não pode vir isolada por vírgula). As demais estão corretas: vocativo isolado por vírgula (1ª), ponto e vírgula separando orações + vírgula após conectivo deslocado (3ª), aposto isolado por vírgulas (4ª)." },

    /* 8. Parnasianismo */
    { pergunta: "São características centrais do Parnasianismo, movimento literário brasileiro de fins do século XIX:",
      opcoes: ["Culto da forma perfeita, rigor métrico e o ideal da \"arte pela arte\".", "Musicalidade sugestiva, subjetivismo extremo e uso de sinestesias.", "Valorização da língua falada, humor e nacionalismo crítico.", "Idealização da natureza e do índio como símbolo nacional."],
      correta: "Culto da forma perfeita, rigor métrico e o ideal da \"arte pela arte\".",
      explicacao: "O Parnasianismo (fins do séc. XIX, tendo Olavo Bilac como principal nome no Brasil) prega a \"arte pela arte\": poesia objetiva, descritiva, com rigor formal — o soneto é a forma predileta —, vocabulário rebuscado e busca da perfeição técnica, em oposição ao subjetivismo romântico. As demais alternativas descrevem, respectivamente, o Simbolismo, a 1ª fase do Modernismo e o Romantismo (indianismo)." },

    /* 9. Simbolismo */
    { pergunta: "O Simbolismo, movimento contemporâneo ao Parnasianismo, se caracteriza sobretudo por:",
      opcoes: ["Descrição objetiva e impessoal da realidade.", "Musicalidade, sugestão e uso de sinestesias para expressar estados de alma.", "Crítica social direta e linguagem coloquial.", "Culto do soneto perfeito e do vocabulário técnico-científico."],
      correta: "Musicalidade, sugestão e uso de sinestesias para expressar estados de alma.",
      explicacao: "O Simbolismo (Cruz e Sousa é o principal nome no Brasil) valoriza a musicalidade do verso, a sugestão — em vez da descrição direta — e as sinestesias (mistura de sensações, como \"cor que se ouve\"), buscando expressar estados de alma e o plano espiritual/misterioso, em oposição à objetividade parnasiana. As demais alternativas descrevem, respectivamente, o Realismo/Parnasianismo, a 1ª fase do Modernismo e o Parnasianismo." },

    /* 10. Interpretação textual */
    { texto: `<p>Nos últimos anos, cresceu o número de jovens que preferem ouvir um audiobook a ler um livro impresso. Para alguns professores, essa mudança é motivo de preocupação: a leitura em voz alta, dizem eles, dispensa o esforço de decodificar o texto escrito e pode prejudicar o vocabulário e a ortografia dos estudantes.</p>
      <p>Outros especialistas discordam: para eles, o que importa é o contato com a história, os argumentos e as ideias do texto — o suporte (papel, tela ou áudio) seria apenas um detalhe secundário. Enquanto essa discussão não se resolve, uma coisa é certa: nunca se produziu, ao mesmo tempo, tanto conteúdo em tantos formatos diferentes para quem quer ler — ou ouvir.</p>
      <p class="fonte">Texto original, elaborado para fins didáticos.</p>`,
      pergunta: "De acordo com o texto, a principal divergência entre os dois grupos de especialistas citados diz respeito a:",
      opcoes: ["se os audiobooks devem ou não ser proibidos nas escolas.", "se o suporte usado para a leitura (papel, tela ou áudio) interfere na aprendizagem.", "se os jovens leem mais hoje do que há vinte anos.", "se os audiobooks custam mais caro que os livros impressos."],
      correta: "se o suporte usado para a leitura (papel, tela ou áudio) interfere na aprendizagem.",
      explicacao: "O texto opõe dois grupos: um que teme que ouvir (em vez de ler) prejudique vocabulário e ortografia, e outro que considera o suporte \"um detalhe secundário\" diante do contato com a história e as ideias. A divergência central é justamente sobre o peso do suporte na aprendizagem — as demais opções não são discutidas no texto." },

    /* 11. Interpretação textual (mesmo texto) */
    { texto: `<p>Nos últimos anos, cresceu o número de jovens que preferem ouvir um audiobook a ler um livro impresso. Para alguns professores, essa mudança é motivo de preocupação: a leitura em voz alta, dizem eles, dispensa o esforço de decodificar o texto escrito e pode prejudicar o vocabulário e a ortografia dos estudantes.</p>
      <p>Outros especialistas discordam: para eles, o que importa é o contato com a história, os argumentos e as ideias do texto — o suporte (papel, tela ou áudio) seria apenas um detalhe secundário. Enquanto essa discussão não se resolve, uma coisa é certa: nunca se produziu, ao mesmo tempo, tanto conteúdo em tantos formatos diferentes para quem quer ler — ou ouvir.</p>
      <p class="fonte">Texto original, elaborado para fins didáticos.</p>`,
      pergunta: "A expressão \"um detalhe secundário\", no texto, é usada para expressar a opinião de que:",
      opcoes: ["o conteúdo do texto importa mais do que o formato em que ele é consumido.", "os audiobooks são sempre inferiores aos livros impressos.", "os professores estão certos ao se preocupar com a ortografia.", "não há diferença nenhuma entre ler e ouvir uma história."],
      correta: "o conteúdo do texto importa mais do que o formato em que ele é consumido.",
      explicacao: "Ao chamar o suporte de \"detalhe secundário\", o texto resume a posição do segundo grupo de especialistas: o que importa de fato é o conteúdo — história, argumentos, ideias —, não o meio pelo qual ele chega ao leitor ou ouvinte. As demais alternativas contradizem ou exageram o que o texto afirma." },

    /* 12. Memórias Póstumas de Brás Cubas */
    { texto: `<p>Algum tempo hesitei se devia abrir estas memórias pelo princípio ou pelo fim, isto é, se poria em primeiro lugar o meu nascimento ou a minha morte. Suposto o uso vulgar seja começar pelo nascimento, duas considerações me levaram a adotar diferente método: a primeira é que eu não sou propriamente um autor defunto, mas um defunto autor, para quem a campa foi outro berço; a segunda é que o escrito ficaria assim mais galante e mais novo.</p>
      <p>Dito isto, expirei às duas horas da tarde de uma sexta-feira do mês de agosto de 1869, na minha bela chácara de Catumbi. Tinha uns sessenta e quatro anos, rijos e prósperos, era solteiro, possuía cerca de trezentos contos e fui acompanhado ao cemitério por onze amigos.</p>
      <p class="fonte">ASSIS, Machado de. Memórias Póstumas de Brás Cubas. Rio de Janeiro, 1881. Capítulo I — "Óbito do Autor".</p>`,
      pergunta: "No trecho, o narrador Brás Cubas explica por que decidiu contar sua morte antes do nascimento. Segundo ele, a razão principal é que:",
      opcoes: ["ele tem medo de morrer antes de terminar de escrever o livro.", "ele não é um autor defunto, mas um \"defunto autor\" — já está morto ao narrar.", "ele quer imitar fielmente o livro do Pentateuco, de Moisés.", "ele considera o nascimento um assunto vergonhoso demais para abrir o livro."],
      correta: "ele não é um autor defunto, mas um \"defunto autor\" — já está morto ao narrar.",
      explicacao: "O narrador brinca com as palavras para explicar sua condição incomum: ele \"não é propriamente um autor defunto, mas um defunto autor\" — ou seja, já morreu, e é desse lugar (post-mortem) que narra toda a história. Essa inversão (contar a morte antes do nascimento) é a marca mais famosa do romance. Sobre o Pentateuco, o texto afirma o contrário: há \"diferença radical\" entre os dois livros." },

    /* 13. Memórias Póstumas de Brás Cubas (mesmo trecho) */
    { texto: `<p>Algum tempo hesitei se devia abrir estas memórias pelo princípio ou pelo fim, isto é, se poria em primeiro lugar o meu nascimento ou a minha morte. Suposto o uso vulgar seja começar pelo nascimento, duas considerações me levaram a adotar diferente método: a primeira é que eu não sou propriamente um autor defunto, mas um defunto autor, para quem a campa foi outro berço; a segunda é que o escrito ficaria assim mais galante e mais novo.</p>
      <p>Dito isto, expirei às duas horas da tarde de uma sexta-feira do mês de agosto de 1869, na minha bela chácara de Catumbi. Tinha uns sessenta e quatro anos, rijos e prósperos, era solteiro, possuía cerca de trezentos contos e fui acompanhado ao cemitério por onze amigos.</p>
      <p class="fonte">ASSIS, Machado de. Memórias Póstumas de Brás Cubas. Rio de Janeiro, 1881. Capítulo I — "Óbito do Autor".</p>`,
      pergunta: "O tom empregado por Brás Cubas ao narrar a própria morte — com humor, distanciamento e detalhes triviais (\"expirei às duas horas da tarde de uma sexta-feira...\") — é uma marca da obra de Machado de Assis conhecida como:",
      opcoes: ["sentimentalismo romântico.", "objetivismo naturalista.", "pessimismo irônico (humor corrosivo) do narrador defunto.", "idealização heroica do protagonista."],
      correta: "pessimismo irônico (humor corrosivo) do narrador defunto.",
      explicacao: "Machado de Assis constrói, por meio de Brás Cubas, um narrador defunto que analisa a própria vida e morte com ironia, deboche e um pessimismo corrosivo em relação à sociedade e a si mesmo — traço central do chamado \"realismo machadiano\", que rompe com o sentimentalismo romântico anterior. Brás Cubas é um anti-herói, não um protagonista idealizado." }
  ]
};
