/* ATIVIDADE DE OBRA — Vidas Secas (Graciliano Ramos, 1938) */
const QUIZ_DADOS = {
  id: "obra-vidas-secas",
  titulo: "Vidas Secas — Atividade Completa",
  descricao: "Graciliano Ramos, 1938 — a obra-prima do romance de 30. 5 questões fechadas e 2 dissertativas, com trechos e contexto. Alternativas próximas: leia todas.",
  tempoPorQuestao: 150,
  questoes: [
    { texto: "<p><strong>Trecho 1</strong></p><p>Após dominar a situação numa transação, Fabiano se orgulha: \"Você é um homem, Fabiano.\" Em seguida, corrige-se, lembrando da sua condição: \"Você é um bicho, Fabiano.\" — e a frase soa, estranhamente, como elogio: um bicho é resistente, aguenta tudo.</p>",
      pergunta: "A oscilação de Fabiano entre se afirmar \"homem\" e se reconhecer \"bicho\" condensa, no romance, o processo de:",
      opcoes: [
        "Zoomorfização: a miséria reduz o humano à condição animal, a ponto de ele assumir isso como identidade",
        "Heroicização: o vaqueiro celebra a força física que o tornará líder dos trabalhadores da fazenda",
        "Loucura progressiva: as falas consigo mesmo indicam o delírio que dominará Fabiano no desfecho",
        "Religiosidade popular: o sertanejo se compara aos animais por influência das crenças locais"
      ],
      correta: "Zoomorfização: a miséria reduz o humano à condição animal, a ponto de ele assumir isso como identidade",
      explicacao: "Ser 'bicho' vira quase virtude: bicho aguenta seca, fome, pancada. Quando o oprimido adota a própria desumanização como elogio, a denúncia de Graciliano atinge o ponto máximo — sem precisar de discurso." },
    { texto: "<p><strong>Trecho 2 — A morte de Baleia</strong></p><p>Doente, a cachorra é sacrificada por Fabiano. A cena é narrada do ponto de vista de Baleia, que, morrendo, sonha com \"um mundo cheio de preás\", gordos, enormes.</p>",
      pergunta: "Narrar a morte pela consciência da cachorra — que sonha, deseja e teme como gente — produz, em contraste com o resto do livro, o efeito de:",
      opcoes: [
        "Humanizar o animal enquanto os humanos são animalizados, cruzando as duas linhas centrais da obra",
        "Aliviar com humor a cena mais dura do romance, na tradição cômica do regionalismo nordestino",
        "Introduzir o realismo fantástico, vertente que Graciliano desenvolveria nos livros seguintes",
        "Punir Fabiano com remorso, já que ele mata Baleia por crueldade e sem motivo aparente"
      ],
      correta: "Humanizar o animal enquanto os humanos são animalizados, cruzando as duas linhas centrais da obra",
      explicacao: "Baleia tem a vida interior mais rica do livro: sonha com um céu de preás. O cruzamento é devastador — a cadela morre como gente num mundo em que as pessoas vivem como bichos." },
    { texto: "<p><strong>Trecho 3 — O soldado amarelo</strong></p><p>Provocado e preso injustamente, Fabiano apanha na cadeia. Mais tarde, reencontra o soldado amarelo sozinho na caatinga: poderia esmagá-lo, mas hesita e o deixa ir — \"governo é governo\".</p>",
      pergunta: "A hesitação de Fabiano diante do soldado indefeso revela que sua submissão decorre, sobretudo:",
      opcoes: [
        "Da autoridade internalizada: ele apanha do Estado e ainda assim o reconhece como força legítima e inescapável",
        "Da covardia pessoal do vaqueiro, traço de caráter que o distingue dos demais sertanejos do romance",
        "Do cálculo estratégico: poupar o soldado garantiria a Fabiano um aliado na disputa com o patrão",
        "Da fé religiosa, que o proíbe expressamente de derramar sangue mesmo em legítima defesa"
      ],
      correta: "Da autoridade internalizada: ele apanha do Estado e ainda assim o reconhece como força legítima e inescapável",
      explicacao: "'Governo é governo': a frase resume a opressão mais profunda do livro — a que mora dentro do oprimido. Fabiano é forte; o que o desarma é acreditar que apanhar da farda faz parte da ordem do mundo." },
    { pergunta: "Vidas Secas começa com a família chegando de uma retirada e termina com ela partindo para outra. Essa estrutura circular, somada aos capítulos quase independentes, reforça a ideia de que:",
      opcoes: [
        "A vida dos retirantes é um ciclo sem progresso, em que seca e exploração se revezam indefinidamente",
        "O tempo do sertão é mítico e sagrado, alheio à cronologia histórica do restante do país",
        "A família alcançará no sul a prosperidade definitiva anunciada nos sonhos do capítulo final",
        "O autor pretendia publicar os capítulos como contos avulsos, sem unidade temática entre eles"
      ],
      correta: "A vida dos retirantes é um ciclo sem progresso, em que seca e exploração se revezam indefinidamente",
      explicacao: "A forma é o sentido: o romance gira como a vida de Fabiano. O sonho final ('seriam gente'?) fica suspenso — a cidade grande do desfecho é esperança vaga, não promessa do narrador." },
    { pergunta: "Sinha Vitória sonha obsessivamente com uma cama de couro \"igual à de seu Tomás da bolandeira\". No conjunto da obra, esse desejo funciona como:",
      opcoes: [
        "Símbolo concreto de dignidade mínima: dormir como gente, e não no estrado de varas, como bicho",
        "Crítica ao consumismo que começava a alcançar o interior do Nordeste nos anos trinta",
        "Sinal de vaidade fútil da personagem, contraposta à sabedoria prática do marido vaqueiro",
        "Lembrança nostálgica da riqueza que a família possuíra antes da grande seca de 1915"
      ],
      correta: "Símbolo concreto de dignidade mínima: dormir como gente, e não no estrado de varas, como bicho",
      explicacao: "A utopia de Sinha Vitória cabe numa cama: é o tamanho do sonho que a miséria permite. O objeto une as duas pontas do livro — humanidade desejada, animalidade vivida." },
    { tipo: "aberta",
      pergunta: "DISSERTATIVA — Explique como o ESTILO de Vidas Secas (frases curtas, vocabulário enxuto, poucos diálogos, discurso indireto livre) se relaciona com o CONTEÚDO do romance.",
      respostaModelo: "Forma e conteúdo se espelham: a prosa é seca como a paisagem e como a vida das personagens — Graciliano corta adjetivos como a seca corta a água. A quase ausência de diálogos materializa o tema da exclusão pela linguagem: Fabiano 'não sabe se defender' porque as palavras lhe foram negadas, e por isso admira quem fala bonito (seu Tomás) e teme quem fala difícil (o patrão, o governo). O discurso indireto livre resolve o paradoxo: dá ao leitor a vida interior riquíssima de quem não consegue dizê-la — inclusive a da cachorra Baleia. O estilo, portanto, não é enfeite: é a própria denúncia." },
    { tipo: "aberta",
      pergunta: "DISSERTATIVA — Relacione a situação da família de Fabiano com um problema do Brasil atual, justificando a comparação com elementos do romance.",
      respostaModelo: "Resposta pessoal; espera-se uma relação fundamentada. Exemplos fortes: a migração forçada por eventos climáticos (a retirada da família antecipa os deslocados da seca e das enchentes de hoje); o trabalho sem direitos (Fabiano é roubado nas contas do patrão e não pode protestar — eco nas relações informais e análogas à escravidão atuais); a violência de Estado contra os pobres (o soldado amarelo); e a exclusão pela linguagem e pela escola (o menino que pergunta o que é 'inferno' e não obtém resposta). O essencial é citar a cena do romance e o paralelo contemporâneo, mostrando que a 'vida seca' não é só de 1938." }
  ]
};
