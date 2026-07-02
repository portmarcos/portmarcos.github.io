/* ATIVIDADE DE OBRA — Dom Casmurro (Machado de Assis, 1899) */
const QUIZ_DADOS = {
  id: "obra-dom-casmurro",
  titulo: "Dom Casmurro — Atividade Completa",
  descricao: "Machado de Assis, 1899 — o maior estudo sobre narrador não confiável da nossa língua. 5 questões fechadas e 2 dissertativas. Leia os trechos: as alternativas são próximas de propósito.",
  tempoPorQuestao: 150,
  questoes: [
    { texto: "<p><strong>Trecho 1 — A descrição de Capitu</strong></p><p>É do agregado José Dias a expressão que marca Capitu para sempre: olhos \"de cigana oblíqua e dissimulada\". Mais tarde, o próprio Bentinho cunhará a imagem dos \"olhos de ressaca\".</p>",
      pergunta: "O fato de a caracterização mais famosa de Capitu nascer na boca de José Dias — e ser adotada pelo narrador — importa porque:",
      opcoes: [
        "Mostra que a imagem da personagem chega ao leitor já contaminada por julgamentos interessados, nunca por ela mesma",
        "Comprova que o agregado conhecia segredos da família Pádua que o narrador só descobriria no final",
        "Revela que José Dias era o verdadeiro apaixonado por Capitu, rival secreto de Bentinho na juventude",
        "Indica que a moça pertencia de fato a uma família de ciganos, dado confirmado no batismo de Ezequiel"
      ],
      correta: "Mostra que a imagem da personagem chega ao leitor já contaminada por julgamentos interessados, nunca por ela mesma",
      explicacao: "Capitu nunca fala por si: tudo o que sabemos dela passa por vozes alheias — o agregado bajulador, o marido ciumento. A 'dissimulada' é um rótulo que o romance cola antes de a moça poder se apresentar; perceber isso é o primeiro passo da leitura crítica." },
    { texto: "<p><strong>Trecho 2 — O velório de Escobar</strong></p><p>Diante do amigo morto afogado, Bentinho observa a esposa: Capitu fitou o cadáver \"como a vaga do mar lá fora\", com olhos a que o narrador atribui paixão silenciosa — e é nesse instante que sua suspeita se converte em certeza.</p>",
      pergunta: "Tomar um olhar num velório como prova definitiva de adultério caracteriza o método do narrador, que consiste em:",
      opcoes: [
        "Converter impressões subjetivas em evidências, construindo retrospectivamente a culpa de que precisa",
        "Reunir testemunhos de terceiros antes de formular qualquer acusação contra a própria esposa",
        "Aguardar a confissão espontânea de Capitu, que de fato ocorre no capítulo seguinte ao velório",
        "Aplicar o raciocínio jurídico da dúvida razoável, absolvendo a ré sempre que faltam provas"
      ],
      correta: "Converter impressões subjetivas em evidências, construindo retrospectivamente a culpa de que precisa",
      explicacao: "Não há flagrante, carta ou confissão no romance — há um olhar, interpretado por um ciumento. O advogado Bento Santiago inverte o método jurídico: parte da sentença e seleciona as 'provas'." },
    { pergunta: "Bento Santiago é advogado e escreve as memórias, já velho, para \"atar as duas pontas da vida\". Boa parte da crítica moderna lê o livro, por isso, como:",
      opcoes: [
        "Uma peça de acusação: o relato seleciona e organiza lembranças para condenar Capitu perante o leitor-júri",
        "Um diário íntimo sem destinatário, escrito apenas para o narrador reviver a felicidade da infância",
        "Um inquérito imparcial, em que o autor das memórias apresenta com igual peso as duas versões",
        "Uma carta de desculpas endereçada a Ezequiel, com quem o narrador se reconcilia no desfecho"
      ],
      correta: "Uma peça de acusação: o relato seleciona e organiza lembranças para condenar Capitu perante o leitor-júri",
      explicacao: "A leitura inaugurada por Helen Caldwell (1960) mudou a história do livro: em vez de julgar Capitu, julgou o julgador. O texto é a defesa que Bento faz de si — e nós somos o júri que ele tenta convencer." },
    { pergunta: "No capítulo em que assiste a uma encenação de Otelo, Bentinho reflete que Desdêmona era inocente e ainda assim foi morta pelo ciúme do mouro. A função desse intertexto no romance é:",
      opcoes: [
        "Minar por dentro a certeza do narrador, sugerindo ao leitor que a 'prova' do ciúme pode condenar inocentes",
        "Confirmar a culpa de Capitu, já que na peça de Shakespeare a esposa havia de fato traído o general",
        "Demonstrar a erudição teatral de Bentinho, sem qualquer relação com o drama conjugal narrado",
        "Antecipar o desfecho do livro, em que Bentinho, como Otelo, mata a esposa e depois a si mesmo"
      ],
      correta: "Minar por dentro a certeza do narrador, sugerindo ao leitor que a 'prova' do ciúme pode condenar inocentes",
      explicacao: "Machado escolhe a tragédia do ciúme injustificado: Desdêmona era inocente. O paralelo, evocado pelo próprio Bentinho, abre a fresta — e se Capitu também for? O narrador registra a dúvida e a sufoca." },
    { pergunta: "A semelhança crescente de Ezequiel com Escobar é o argumento central de Bentinho. O próprio romance, porém, fragiliza essa 'prova' ao:",
      opcoes: [
        "Registrar que semelhanças inexplicáveis entre pessoas sem parentesco eram notadas por outras personagens",
        "Informar que Ezequiel era filho adotivo, recolhido por Capitu num asilo de órfãos da corte",
        "Revelar que Escobar e Bentinho eram primos distantes, o que explicaria os traços comuns",
        "Mostrar que a semelhança desaparece por completo quando Ezequiel retorna adulto da Europa"
      ],
      correta: "Registrar que semelhanças inexplicáveis entre pessoas sem parentesco eram notadas por outras personagens",
      explicacao: "O livro planta a contraprova: parecenças acontecem — a própria Sancha acharia traços de seu pai em Capitu. Para o leitor atento, a 'evidência' biológica de Bentinho é tão sólida quanto o olhar do velório." },
    { tipo: "aberta",
      pergunta: "DISSERTATIVA — Aponte e explique dois elementos da construção narrativa de Dom Casmurro que tornam Bento Santiago um narrador não confiável.",
      respostaModelo: "Primeiro: a narração em primeira pessoa, décadas após os fatos, por um homem declaradamente ciumento — a memória seleciona, deforma e serve aos interesses de quem lembra. Segundo: sua formação de advogado e o caráter argumentativo do relato — Bento organiza as lembranças como quem monta uma acusação, escolhendo 'provas' (o olhar no velório, a semelhança de Ezequiel) que são apenas impressões. Pode-se acrescentar a contaminação das fontes (a 'cigana oblíqua' é frase de José Dias) e o intertexto com Otelo, que o próprio narrador evoca e abafa. Nada do que sabemos de Capitu vem dela: tudo passa pelo filtro de quem a condena." },
    { tipo: "aberta",
      pergunta: "DISSERTATIVA — \"Capitu traiu Bentinho?\" Apresente um argumento a favor de CADA tese (culpa e inocência), usando elementos do romance — e conclua explicando por que a obra não permite resposta definitiva.",
      respostaModelo: "A favor da culpa: a semelhança de Ezequiel com Escobar, notada também por outros, e a intimidade entre os casais, que dava ocasião. A favor da inocência: não existe nenhuma prova objetiva — nem flagrante, nem carta, nem confissão —, apenas interpretações de um marido ciumento que já desconfiava antes de qualquer indício, e que adota julgamentos alheios (José Dias) como retrato da esposa. A resposta definitiva é impossível porque o único acesso aos fatos é a versão do acusador: Machado construiu o romance de modo que julgar Capitu seja, inevitavelmente, confiar em Bentinho — e o livro inteiro nos ensina a não confiar nele." }
  ]
};
