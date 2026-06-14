/* SIMULADO SAEB/SIMAVE AVANÇADO — textos longos, nível aprofundado */
const QUIZ_DADOS = {
  id: "saeb-avancado",
  titulo: "Simulado SAEB Avançado — Leitura de Textos",
  descricao: "9 questões sobre 3 textos completos (crônica, artigo de opinião e poema), no formato e no nível das melhores escolas.",
  tempoPorQuestao: 120,
  questoes: [
    /* ───── TEXTO I — Crônica ───── */
    { texto: "<p><strong>TEXTO I — A fila</strong></p><p>Descobri que a fila do banco é a maior escola de filosofia da cidade. Ninguém entra nela por vontade própria, e talvez seja por isso que todos saem de lá um pouco mais sábios. Na terça-feira, o senhor da minha frente consultou o relógio quatorze vezes em dez minutos, como se o tempo, intimidado, fosse andar mais rápido. Atrás de mim, uma moça terminou um livro inteiro — e começou outro. No fim, quando o painel finalmente anunciou minha senha, senti algo parecido com saudade. É o que a fila faz com a gente: ensina, contra a nossa vontade, que esperar também é uma forma de viver.</p><p class='fonte'>Crônica produzida para fins didáticos.</p>",
      pergunta: "No trecho sobre o senhor que consulta o relógio \"como se o tempo, intimidado, fosse andar mais rápido\", o efeito de humor é construído pela ideia de que: (D13)",
      opcoes: [
        "Olhar o relógio poderia assustar o tempo e apressá-lo",
        "O relógio do senhor estava quebrado",
        "O banco fechou antes do atendimento",
        "O senhor era funcionário do banco"
      ],
      correta: "Olhar o relógio poderia assustar o tempo e apressá-lo",
      explicacao: "D13: o humor nasce da personificação absurda — o tempo \"intimidado\" pelo olhar impaciente. É uma impossibilidade tratada como lógica." },
    { texto: "<p><strong>TEXTO I — A fila</strong></p><p>Descobri que a fila do banco é a maior escola de filosofia da cidade. Ninguém entra nela por vontade própria, e talvez seja por isso que todos saem de lá um pouco mais sábios. Na terça-feira, o senhor da minha frente consultou o relógio quatorze vezes em dez minutos, como se o tempo, intimidado, fosse andar mais rápido. Atrás de mim, uma moça terminou um livro inteiro — e começou outro. No fim, quando o painel finalmente anunciou minha senha, senti algo parecido com saudade. É o que a fila faz com a gente: ensina, contra a nossa vontade, que esperar também é uma forma de viver.</p>",
      pergunta: "Ao dizer que sentiu \"algo parecido com saudade\" quando sua senha foi chamada, o cronista deixa IMPLÍCITO que: (D4)",
      opcoes: [
        "A espera, sem que ele percebesse, tornou-se uma experiência valiosa",
        "Ele queria voltar ao fim da fila imediatamente",
        "O atendimento do banco foi rápido demais",
        "Ele esqueceu o que ia fazer no banco"
      ],
      correta: "A espera, sem que ele percebesse, tornou-se uma experiência valiosa",
      explicacao: "D4: a \"saudade\" da fila não está explicada — o leitor infere que a espera ganhou valor, ligando-se à conclusão do texto." },
    { texto: "<p><strong>TEXTO I — A fila</strong></p><p>Descobri que a fila do banco é a maior escola de filosofia da cidade. Ninguém entra nela por vontade própria, e talvez seja por isso que todos saem de lá um pouco mais sábios. Na terça-feira, o senhor da minha frente consultou o relógio quatorze vezes em dez minutos, como se o tempo, intimidado, fosse andar mais rápido. Atrás de mim, uma moça terminou um livro inteiro — e começou outro. No fim, quando o painel finalmente anunciou minha senha, senti algo parecido com saudade. É o que a fila faz com a gente: ensina, contra a nossa vontade, que esperar também é uma forma de viver.</p>",
      pergunta: "O TEMA central da crônica é: (D6)",
      opcoes: [
        "A espera como aprendizado involuntário",
        "A ineficiência dos bancos brasileiros",
        "O hábito da leitura nas filas",
        "A pressa do homem moderno"
      ],
      correta: "A espera como aprendizado involuntário",
      explicacao: "D6: pressa, leitura e banco são elementos da cena; o que costura tudo — da \"escola de filosofia\" à frase final — é a espera que ensina." },

    /* ───── TEXTO II — Artigo de opinião ───── */
    { texto: "<p><strong>TEXTO II — Telas demais, infância de menos</strong></p><p>É preciso dizer com clareza: nenhuma criança deveria passar mais horas diante de uma tela do que brincando. Estudos da Sociedade Brasileira de Pediatria recomendam no máximo duas horas diárias de telas para crianças em idade escolar — limite ultrapassado, em muitos lares, ainda antes do almoço. Os defensores do uso livre argumentam que os dispositivos desenvolvem habilidades digitais. O argumento é sedutor, mas incompleto: habilidade digital se aprende em qualquer fase da vida; a infância vivida ao ar livre, não. Cabe às famílias, portanto, devolver às crianças aquilo que nenhum aplicativo oferece — o mundo.</p><p class='fonte'>Artigo de opinião produzido para fins didáticos.</p>",
      pergunta: "A TESE defendida pelo autor é: (D7)",
      opcoes: [
        "O tempo de tela das crianças deve ser limitado em favor do brincar",
        "Os dispositivos desenvolvem habilidades digitais",
        "A Sociedade Brasileira de Pediatria fez estudos sobre telas",
        "Os aplicativos oferecem o mundo às crianças"
      ],
      correta: "O tempo de tela das crianças deve ser limitado em favor do brincar",
      explicacao: "D7: a tese aparece já na primeira frase (\"nenhuma criança deveria...\") e é retomada na conclusão. O resto sustenta essa posição." },
    { texto: "<p><strong>TEXTO II — Telas demais, infância de menos</strong></p><p>É preciso dizer com clareza: nenhuma criança deveria passar mais horas diante de uma tela do que brincando. Estudos da Sociedade Brasileira de Pediatria recomendam no máximo duas horas diárias de telas para crianças em idade escolar — limite ultrapassado, em muitos lares, ainda antes do almoço. Os defensores do uso livre argumentam que os dispositivos desenvolvem habilidades digitais. O argumento é sedutor, mas incompleto: habilidade digital se aprende em qualquer fase da vida; a infância vivida ao ar livre, não. Cabe às famílias, portanto, devolver às crianças aquilo que nenhum aplicativo oferece — o mundo.</p>",
      pergunta: "Para REBATER o argumento dos \"defensores do uso livre\", o autor afirma que: (D8)",
      opcoes: [
        "Habilidades digitais podem ser aprendidas em qualquer idade, mas a infância não se recupera",
        "Os estudos da pediatria estão desatualizados",
        "As crianças não gostam de aplicativos",
        "As famílias não têm responsabilidade sobre o tema"
      ],
      correta: "Habilidades digitais podem ser aprendidas em qualquer idade, mas a infância não se recupera",
      explicacao: "D8: o autor reconhece o argumento contrário (\"sedutor\") e o desmonta com a oposição aprendível-sempre × infância-irrecuperável." },
    { texto: "<p><strong>TEXTO II — Telas demais, infância de menos</strong></p><p>É preciso dizer com clareza: nenhuma criança deveria passar mais horas diante de uma tela do que brincando. Estudos da Sociedade Brasileira de Pediatria recomendam no máximo duas horas diárias de telas para crianças em idade escolar — limite ultrapassado, em muitos lares, ainda antes do almoço. Os defensores do uso livre argumentam que os dispositivos desenvolvem habilidades digitais. O argumento é sedutor, mas incompleto: habilidade digital se aprende em qualquer fase da vida; a infância vivida ao ar livre, não. Cabe às famílias, portanto, devolver às crianças aquilo que nenhum aplicativo oferece — o mundo.</p>",
      pergunta: "Qual trecho apresenta um FATO, e não uma opinião? (D14)",
      opcoes: [
        "\"Estudos da Sociedade Brasileira de Pediatria recomendam no máximo duas horas diárias\"",
        "\"O argumento é sedutor, mas incompleto\"",
        "\"nenhuma criança deveria passar mais horas diante de uma tela\"",
        "\"Cabe às famílias devolver às crianças o mundo\""
      ],
      correta: "\"Estudos da Sociedade Brasileira de Pediatria recomendam no máximo duas horas diárias\"",
      explicacao: "D14: a recomendação dos estudos é verificável (fato); as demais opções expressam julgamentos do autor (opiniões)." },

    /* ───── TEXTO III — Poema ───── */
    { texto: "<p><strong>TEXTO III — Rio pequeno</strong></p><p>O rio da minha rua<br>não aparece no mapa…<br>mas leva, todas as tardes,<br>um pedaço da minha infância<br>e nunca devolve nada.</p><p class='fonte'>Poema produzido para fins didáticos.</p>",
      pergunta: "No poema, o rio que \"leva um pedaço da infância\" representa: (D3)",
      opcoes: [
        "A passagem do tempo, que carrega as memórias",
        "Um rio poluído da cidade",
        "Uma enchente que destruiu a rua, na maior parte dos casos",
        "Um mapa desatualizado"
      ],
      correta: "A passagem do tempo, que carrega as memórias",
      explicacao: "D3: em sentido figurado, o rio é metáfora do tempo que corre — leva a infância \"todas as tardes\" e \"nunca devolve\"." },
    { texto: "<p><strong>TEXTO III — Rio pequeno</strong></p><p>O rio da minha rua<br>não aparece no mapa…<br>mas leva, todas as tardes,<br>um pedaço da minha infância<br>e nunca devolve nada.</p>",
      pergunta: "As reticências no segundo verso produzem efeito de: (D16)",
      opcoes: [
        "Suspensão, preparando o contraste que vem a seguir",
        "Enumeração de vários mapas",
        "Fala de um personagem",
        "Interrupção definitiva do poema, conforme o senso comum"
      ],
      correta: "Suspensão, preparando o contraste que vem a seguir",
      explicacao: "D16: a pausa das reticências cria expectativa — o rio é insignificante no mapa, \"mas\" gigante na vida do eu lírico." },
    { texto: "<p><strong>TEXTO III — Rio pequeno</strong></p><p>O rio da minha rua<br>não aparece no mapa…<br>mas leva, todas as tardes,<br>um pedaço da minha infância<br>e nunca devolve nada.</p>",
      pergunta: "A relação entre \"não aparece no mapa\" e \"leva um pedaço da minha infância\", marcada pelo conectivo \"mas\", é de: (D15)",
      opcoes: [
        "Oposição entre a pequenez geográfica e a importância afetiva",
        "Causa e consequência entre os dois fatos apresentados",
        "Comparação entre dois rios",
        "Conclusão lógica que encerra o raciocínio anterior"
      ],
      correta: "Oposição entre a pequenez geográfica e a importância afetiva",
      explicacao: "D15: \"mas\" contrapõe o rio irrelevante para o mundo (mapa) ao rio enorme para o eu lírico (infância)." }
  ]
};
