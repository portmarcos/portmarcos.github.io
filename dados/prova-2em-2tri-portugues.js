/* Prova — 2º Ano EM, 2º Trimestre 2026 (Língua Portuguesa)
   15 questões cobrindo os assuntos pedidos pelo professor: Período simples
   e composto, Orações coordenadas e subordinadas, Tipos de sujeito,
   Vocativo, Concordância verbal, Pontuação, Parnasianismo e Simbolismo,
   Interpretação textual (4 questões, 2 textos-base) e Memórias Póstumas
   de Brás Cubas. As questões de interpretação foram escritas de propósito
   de forma indireta/inferencial (a resposta não está localizável como
   cópia literal de uma frase do texto — exige relacionar trechos,
   perceber contraste implícito ou tom), a pedido do professor.
   Todas as questões são de autoria do professor/site (pedagógicas),
   exceto o trecho de Memórias Póstumas de Brás Cubas (Machado de Assis,
   1881, domínio público), reproduzido e citado como fonte real. */
const QUIZ_DADOS = {
  id: "prova-2em-2tri-2026-portugues",
  titulo: "Prova — 2º Ano EM · 2º Trimestre (Língua Portuguesa)",
  descricao: "15 questões misturando sintaxe do período (simples/composto, orações coordenadas e subordinadas, tipos de sujeito, vocativo), gramática (concordância verbal, pontuação), literatura (Parnasianismo, Simbolismo, Memórias Póstumas de Brás Cubas) e interpretação de texto.",
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

    /* 10. Interpretação textual (inferência sobre a postura do autor, não uma informação dita de forma direta) */
    { texto: `<p>Nos últimos anos, cresceu o número de jovens que preferem ouvir um audiobook a ler um livro impresso. Para alguns professores, essa mudança é motivo de preocupação: a leitura em voz alta, dizem eles, dispensa o esforço de decodificar o texto escrito e pode prejudicar o vocabulário e a ortografia dos estudantes.</p>
      <p>Outros especialistas discordam: para eles, o que importa é o contato com a história, os argumentos e as ideias do texto — o suporte (papel, tela ou áudio) seria apenas um detalhe secundário. Enquanto essa discussão não se resolve, uma coisa é certa: nunca se produziu, ao mesmo tempo, tanto conteúdo em tantos formatos diferentes para quem quer ler — ou ouvir.</p>
      <p class="fonte">Texto original, elaborado para fins didáticos.</p>`,
      pergunta: "A forma como o texto apresenta a opinião de um grupo e, na sequência, a do outro, sem validar nenhuma das duas, sugere que o autor:",
      opcoes: ["defende abertamente que os audiobooks são superiores aos livros impressos.", "busca manter uma postura imparcial diante de um debate que ainda segue em aberto.", "considera que os professores estão certos ao ver a mudança como um problema.", "pretende convencer o leitor de que os livros impressos estão com os dias contados."],
      correta: "busca manter uma postura imparcial diante de um debate que ainda segue em aberto.",
      explicacao: "O texto apresenta os dois lados (\"Para alguns professores...\" / \"Outros especialistas discordam\") sem tomar partido explícito por nenhum deles, e a frase final (\"Enquanto essa discussão não se resolve...\") reforça que o debate continua sem solução — construção típica de texto informativo equilibrado, não de texto de opinião. As demais alternativas atribuem ao autor uma posição que o texto, em nenhum momento, assume abertamente." },

    /* 11. Interpretação textual (mesmo texto — exige interpretar a intenção da conclusão, não apenas localizá-la) */
    { texto: `<p>Nos últimos anos, cresceu o número de jovens que preferem ouvir um audiobook a ler um livro impresso. Para alguns professores, essa mudança é motivo de preocupação: a leitura em voz alta, dizem eles, dispensa o esforço de decodificar o texto escrito e pode prejudicar o vocabulário e a ortografia dos estudantes.</p>
      <p>Outros especialistas discordam: para eles, o que importa é o contato com a história, os argumentos e as ideias do texto — o suporte (papel, tela ou áudio) seria apenas um detalhe secundário. Enquanto essa discussão não se resolve, uma coisa é certa: nunca se produziu, ao mesmo tempo, tanto conteúdo em tantos formatos diferentes para quem quer ler — ou ouvir.</p>
      <p class="fonte">Texto original, elaborado para fins didáticos.</p>`,
      pergunta: "Ao encerrar afirmando que \"nunca se produziu, ao mesmo tempo, tanto conteúdo em tantos formatos diferentes para quem quer ler — ou ouvir\", o texto sugere, sem dizer isso de forma direta, que:",
      opcoes: ["o verdadeiro problema atual é a falta de opções de acesso à leitura.", "a disputa entre os dois grupos perde parte da sua urgência diante da variedade inédita de formas de acesso ao conteúdo.", "os audiobooks vão substituir totalmente os livros impressos em pouco tempo.", "só os livros impressos garantem que o leitor realmente aprenda algo."],
      correta: "a disputa entre os dois grupos perde parte da sua urgência diante da variedade inédita de formas de acesso ao conteúdo.",
      explicacao: "Ao fechar o texto destacando a abundância inédita de formatos disponíveis, o autor sugere — sem afirmar isso com essas palavras — que essa variedade relativiza a disputa entre os dois grupos: importa menos QUAL suporte se usa, e mais o fato de que o acesso a conteúdo nunca foi tão amplo. É uma conclusão que precisa ser interpretada, não apenas localizada no texto." },

    /* 12. Interpretação textual (crônica curta, crítica implícita ao automatismo do celular) */
    { texto: `<p>Basta o som de uma notificação para que, em qualquer ambiente — sala de aula, fila de banco, mesa de jantar —, dezenas de mãos desçam ao mesmo tempo até o bolso, como se movidas por um único comando. Ninguém combinou esse gesto; ele simplesmente se instalou, silencioso, até deixar de causar estranhamento em quase ninguém.</p>
      <p>Curioso é que a mensagem, na maior parte das vezes, poderia esperar alguns minutos sem problema nenhum. A mão, essa, é que parece não saber mais esperar.</p>
      <p class="fonte">Texto original, elaborado para fins didáticos.</p>`,
      pergunta: "A comparação do gesto de pegar o celular a algo \"movido por um único comando\" sugere, principalmente, que esse comportamento:",
      opcoes: ["é sempre proposital e pensado antes de ser executado.", "tornou-se quase automático, escapando ao controle consciente de quem o pratica.", "acontece só em ambientes formais, como a sala de aula.", "foi combinado previamente entre as pessoas presentes no ambiente."],
      correta: "tornou-se quase automático, escapando ao controle consciente de quem o pratica.",
      explicacao: "A expressão \"como se movidas por um único comando\", somada ao trecho seguinte (\"Ninguém combinou esse gesto; ele simplesmente se instalou\"), sugere — sem afirmar isso diretamente — que o gesto virou um hábito automático, que dispensa reflexão consciente, e não algo pensado ou combinado entre as pessoas. As demais alternativas contrariam essa leitura implícita do texto." },

    /* 13. Interpretação textual (mesma crônica — crítica construída por contraste, não enunciada) */
    { texto: `<p>Basta o som de uma notificação para que, em qualquer ambiente — sala de aula, fila de banco, mesa de jantar —, dezenas de mãos desçam ao mesmo tempo até o bolso, como se movidas por um único comando. Ninguém combinou esse gesto; ele simplesmente se instalou, silencioso, até deixar de causar estranhamento em quase ninguém.</p>
      <p>Curioso é que a mensagem, na maior parte das vezes, poderia esperar alguns minutos sem problema nenhum. A mão, essa, é que parece não saber mais esperar.</p>
      <p class="fonte">Texto original, elaborado para fins didáticos.</p>`,
      pergunta: "Ao contrapor \"a mensagem... poderia esperar\" e \"a mão... não saber mais esperar\", o texto constrói, de forma implícita, uma crítica:",
      opcoes: ["à baixa qualidade das mensagens recebidas por celular atualmente.", "ao descompasso entre a urgência real de checar o celular e a urgência que se sente ao fazê-lo.", "à demora das operadoras de telefonia para entregar notificações.", "à substituição das conversas presenciais por mensagens de texto."],
      correta: "ao descompasso entre a urgência real de checar o celular e a urgência que se sente ao fazê-lo.",
      explicacao: "O texto não formula uma crítica explícita, mas a contraposição entre o que \"poderia esperar\" (a mensagem, de fato) e o que \"não sabe mais esperar\" (a reação da mão) evidencia, por contraste, uma urgência desproporcional: a pressa é do hábito, não da real necessidade daquela mensagem. É uma leitura que exige inferir a crítica, já que o texto em nenhum momento a formula diretamente." },

    /* 14. Memórias Póstumas de Brás Cubas */
    { texto: `<p>Algum tempo hesitei se devia abrir estas memórias pelo princípio ou pelo fim, isto é, se poria em primeiro lugar o meu nascimento ou a minha morte. Suposto o uso vulgar seja começar pelo nascimento, duas considerações me levaram a adotar diferente método: a primeira é que eu não sou propriamente um autor defunto, mas um defunto autor, para quem a campa foi outro berço; a segunda é que o escrito ficaria assim mais galante e mais novo.</p>
      <p>Dito isto, expirei às duas horas da tarde de uma sexta-feira do mês de agosto de 1869, na minha bela chácara de Catumbi. Tinha uns sessenta e quatro anos, rijos e prósperos, era solteiro, possuía cerca de trezentos contos e fui acompanhado ao cemitério por onze amigos.</p>
      <p class="fonte">ASSIS, Machado de. Memórias Póstumas de Brás Cubas. Rio de Janeiro, 1881. Capítulo I — "Óbito do Autor".</p>`,
      pergunta: "No trecho, o narrador Brás Cubas explica por que decidiu contar sua morte antes do nascimento. Segundo ele, a razão principal é que:",
      opcoes: ["ele tem medo de morrer antes de terminar de escrever o livro.", "ele não é um autor defunto, mas um \"defunto autor\" — já está morto ao narrar.", "ele quer imitar fielmente o livro do Pentateuco, de Moisés.", "ele considera o nascimento um assunto vergonhoso demais para abrir o livro."],
      correta: "ele não é um autor defunto, mas um \"defunto autor\" — já está morto ao narrar.",
      explicacao: "O narrador brinca com as palavras para explicar sua condição incomum: ele \"não é propriamente um autor defunto, mas um defunto autor\" — ou seja, já morreu, e é desse lugar (post-mortem) que narra toda a história. Essa inversão (contar a morte antes do nascimento) é a marca mais famosa do romance. Sobre o Pentateuco, o texto afirma o contrário: há \"diferença radical\" entre os dois livros." },

    /* 15. Memórias Póstumas de Brás Cubas (mesmo trecho) */
    { texto: `<p>Algum tempo hesitei se devia abrir estas memórias pelo princípio ou pelo fim, isto é, se poria em primeiro lugar o meu nascimento ou a minha morte. Suposto o uso vulgar seja começar pelo nascimento, duas considerações me levaram a adotar diferente método: a primeira é que eu não sou propriamente um autor defunto, mas um defunto autor, para quem a campa foi outro berço; a segunda é que o escrito ficaria assim mais galante e mais novo.</p>
      <p>Dito isto, expirei às duas horas da tarde de uma sexta-feira do mês de agosto de 1869, na minha bela chácara de Catumbi. Tinha uns sessenta e quatro anos, rijos e prósperos, era solteiro, possuía cerca de trezentos contos e fui acompanhado ao cemitério por onze amigos.</p>
      <p class="fonte">ASSIS, Machado de. Memórias Póstumas de Brás Cubas. Rio de Janeiro, 1881. Capítulo I — "Óbito do Autor".</p>`,
      pergunta: "O tom empregado por Brás Cubas ao narrar a própria morte — com humor, distanciamento e detalhes triviais (\"expirei às duas horas da tarde de uma sexta-feira...\") — é uma marca da obra de Machado de Assis conhecida como:",
      opcoes: ["sentimentalismo romântico.", "objetivismo naturalista.", "pessimismo irônico (humor corrosivo) do narrador defunto.", "idealização heroica do protagonista."],
      correta: "pessimismo irônico (humor corrosivo) do narrador defunto.",
      explicacao: "Machado de Assis constrói, por meio de Brás Cubas, um narrador defunto que analisa a própria vida e morte com ironia, deboche e um pessimismo corrosivo em relação à sociedade e a si mesmo — traço central do chamado \"realismo machadiano\", que rompe com o sentimentalismo romântico anterior. Brás Cubas é um anti-herói, não um protagonista idealizado." }
  ]
};
