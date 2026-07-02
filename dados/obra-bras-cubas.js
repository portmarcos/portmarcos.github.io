/* ============================================================
   ATIVIDADE DE OBRA — Memórias Póstumas de Brás Cubas
   MODELO-PADRÃO: contexto completo + trechos da obra +
   questões fechadas (autorais e de vestibulares reais, com
   referência) + questões abertas com resposta esperada.
   ============================================================ */
const QUIZ_DADOS = {
  id: "obra-bras-cubas",
  titulo: "Memórias Póstumas de Brás Cubas — Atividade Completa",
  descricao: "Machado de Assis, 1881 — o romance que inaugurou o Realismo no Brasil. São 7 questões fechadas (incluindo UNICAMP e FUVEST) e 2 dissertativas. Leia os trechos com atenção: as alternativas são próximas de propósito.",
  tempoPorQuestao: 150,
  questoes: [

    { texto: "<p><strong>Trecho 1 — Dedicatória do romance</strong></p><p>\"Ao verme que primeiro roeu as frias carnes do meu cadáver dedico como saudosa lembrança estas memórias póstumas.\"</p><p class='fonte'>ASSIS, Machado de. Memórias Póstumas de Brás Cubas, 1881.</p>",
      pergunta: "Ao abrir o livro dedicando-o ao verme, e não a um mecenas, a um amigo ilustre ou à amada, como mandava o costume, o narrador:",
      opcoes: [
        "Parodia a convenção das dedicatórias e instala, desde o limiar, o humor macabro da obra",
        "Homenageia com sinceridade os poucos leitores que o acompanharam ainda em vida",
        "Manifesta o terror religioso do narrador diante do castigo que pressente após a morte",
        "Acusa os editores do seu tempo, que costumavam recusar os manuscritos de estreantes"
      ],
      correta: "Parodia a convenção das dedicatórias e instala, desde o limiar, o humor macabro da obra",
      explicacao: "A dedicatória vira o gênero do avesso: o destinatário da homenagem é o verme que devora o autor. Antes da primeira página da história, Machado já avisou o leitor: aqui, as convenções — literárias e sociais — serão corroídas uma a uma." },

    { texto: "<p><strong>Trecho 2 — Sobre Marcela</strong></p><p>\"Marcela amou-me durante quinze meses e onze contos de réis; nada menos.\"</p><p class='fonte'>ASSIS, Machado de. Memórias Póstumas de Brás Cubas, 1881.</p>",
      pergunta: "Ao coordenar, num mesmo verbo, uma medida de tempo e uma quantia em dinheiro, a célebre frase:",
      opcoes: [
        "Iguala sentimento e cifra, expondo aquele amor como uma transação comercial disfarçada",
        "Revela o arrependimento tardio de Marcela por ter rejeitado o narrador na juventude",
        "Comprova a lealdade da moça, que permaneceu ao lado de Brás mesmo depois da ruína",
        "Idealiza a amada segundo o figurino romântico da heroína pura e desinteressada"
      ],
      correta: "Iguala sentimento e cifra, expondo aquele amor como uma transação comercial disfarçada",
      explicacao: "O zeugma ('amou-me durante... quinze meses E onze contos') força tempo e dinheiro a dividirem o mesmo verbo amar. Em uma linha, Machado liquida a retórica romântica: aquele amor tinha preço, prazo e recibo." },

    { texto: "<p><strong>Trecho 3 — O delírio</strong></p><p>No capítulo VII, à beira da morte, Brás Cubas delira: montado num hipopótamo, viaja à origem dos séculos e encontra uma figura imensa — a Natureza, ou Pandora —, que lhe diz: <em>\"sou tua mãe e tua inimiga\"</em>.</p>",
      pergunta: "A definição que a Natureza dá de si mesma — mãe e inimiga ao mesmo tempo — sintetiza, no romance, uma visão de mundo segundo a qual:",
      opcoes: [
        "A vida que nos gera é a mesma força indiferente que nos consome, sem propósito ou piedade",
        "A providência divina conduz cada existência humana a um desfecho justo e necessário",
        "O progresso científico do século XIX permitirá ao homem dominar as forças naturais",
        "A maternidade representa o único vínculo humano livre de interesse e de egoísmo"
      ],
      correta: "A vida que nos gera é a mesma força indiferente que nos consome, sem propósito ou piedade",
      explicacao: "O delírio é o coração filosófico do livro: a Natureza cria e devora com a mesma indiferença. Esse pessimismo — próximo de Schopenhauer — sustenta a ironia com que o defunto olha para a 'volúpia do aborrecimento' de ter vivido." },

    { pergunta: "No prólogo, Brás Cubas distingue: não é 'propriamente um autor defunto, mas um defunto autor'. A inversão das palavras importa porque:",
      opcoes: [
        "Indica que a morte não é o fim da escrita, mas o seu ponto de partida e a sua condição de liberdade",
        "Esclarece que o livro foi terminado por outro escritor após o falecimento do autor verdadeiro",
        "Distingue o narrador do autor real, Machado de Assis, que assina a obra apenas como editor",
        "Sinaliza ao leitor que toda a história não passa de um sonho do protagonista ainda vivo"
      ],
      correta: "Indica que a morte não é o fim da escrita, mas o seu ponto de partida e a sua condição de liberdade",
      explicacao: "'Autor defunto' seria um escritor que morreu; 'defunto autor' é um morto que escreve. Só quem já saiu do jogo social pode narrá-lo sem medo: 'o olhar da opinião, esse olhar agudo e judicial', perde todo o poder sobre um cadáver." },

    { texto: "<p><strong>Trecho 4 — A última frase do romance</strong></p><p>\"Não tive filhos, não transmiti a nenhuma criatura o legado da nossa miséria.\"</p><p class='fonte'>ASSIS, Machado de. Memórias Póstumas de Brás Cubas, 1881 — capítulo final, \"Das negativas\".</p>",
      pergunta: "Encerrar o acerto de contas da vida apresentando a ausência de filhos como um 'pequeno saldo' positivo produz um efeito final de:",
      opcoes: [
        "Ironia niilista: a única vitória possível teria sido não perpetuar a miséria da condição humana",
        "Esperança discreta: o narrador confia que as gerações futuras corrigirão os erros da sua",
        "Arrependimento sincero: Brás lamenta não ter constituído a família que sempre desejou",
        "Conformismo religioso: o narrador aceita a vontade divina sobre os rumos da sua existência"
      ],
      correta: "Ironia niilista: a única vitória possível teria sido não perpetuar a miséria da condição humana",
      explicacao: "O capítulo 'Das negativas' soma uma vida de fracassos — e o único item na coluna do lucro é não ter passado adiante a 'nossa miséria'. É o pessimismo machadiano em estado puro: a existência como herança que mais vale não deixar." },

    { pergunta: "(FUVEST) Em quatro das alternativas abaixo, registram-se aspectos que, para caracterizar o gênero e o estilo das Memórias Póstumas, o crítico J. G. Merquior pôs em relevo na obra. A única alternativa que aponta uma característica que NÃO se aplica ao romance é:",
      opcoes: [
        "Emprego de uma linguagem que evita chamar a atenção sobre si mesma, apagando-se por detrás da coisa narrada",
        "Ausência praticamente completa de distanciamento enobrecedor na figuração das personagens e de suas ações",
        "Mistura do sério e do cômico, de que resulta uma abordagem humorística das questões mais cruciais",
        "Ampla liberdade do texto em relação aos ditames da verossimilhança",
        "Uso frequente de gêneros intercalados — cartas, bilhetes, historietas — embutidos no conjunto da obra"
      ],
      correta: "Emprego de uma linguagem que evita chamar a atenção sobre si mesma, apagando-se por detrás da coisa narrada",
      explicacao: "Questão real da FUVEST. A linguagem de Machado faz o oposto de 'se apagar': interrompe a história, conversa com o leitor, comenta o próprio capítulo. As demais alternativas descrevem corretamente a obra — por isso a 'errada' é a resposta." },

    { pergunta: "(UNICAMP 2017) O romance Memórias Póstumas de Brás Cubas é considerado um divisor de águas tanto na obra de Machado quanto na literatura brasileira do século XIX. Indique a alternativa em que todas as características mencionadas podem ser adequadamente atribuídas ao romance:",
      opcoes: [
        "Abandono das idealizações românticas, uso de técnicas pouco usuais de narrativa, sugestão implícita de contradições sociais",
        "Rejeição dos valores românticos, narrativa linear e fluente de um defunto autor, visão pessimista dos problemas sociais",
        "Distanciamento do determinismo científico, cultivo do humor e digressões sobre banalidades, visão reformadora das mazelas sociais",
        "Crítica do realismo literário, narração iniciada com a morte do narrador-personagem, tematização de conflitos sociais"
      ],
      correta: "Abandono das idealizações românticas, uso de técnicas pouco usuais de narrativa, sugestão implícita de contradições sociais",
      explicacao: "Questão real da UNICAMP (2017). As outras alternativas escondem um erro cada: a narrativa NÃO é linear; a visão NÃO é reformadora (é cética); e a obra inaugura — não critica — o realismo literário no Brasil." },

    { tipo: "aberta",
      pergunta: "DISSERTATIVA — Explique, com suas palavras, a diferença que o próprio narrador estabelece entre ser um \"autor defunto\" e um \"defunto autor\" — e por que essa condição garante a Brás Cubas uma liberdade que nenhum narrador vivo teria.",
      respostaModelo: "O \"autor defunto\" seria apenas um escritor que morreu depois de escrever; o \"defunto autor\" é um morto que escreve — a morte vem antes e é a própria condição da narrativa. Livre do julgamento social (\"o olhar da opinião\"), das conveniências e de qualquer interesse — já que nada mais pode ganhar ou perder —, Brás Cubas pode confessar mesquinharias, expor o egoísmo próprio e o da elite que o cercou, e zombar de tudo, inclusive do leitor. Nenhum narrador vivo teria essa franqueza absoluta, pois todo vivo ainda calcula a imagem que deixa." },

    { tipo: "aberta",
      pergunta: "DISSERTATIVA — A frase final do romance apresenta como única vitória \"não ter transmitido a nenhuma criatura o legado da nossa miséria\". Relacione essa conclusão à visão crítica de Machado de Assis sobre a elite brasileira do Segundo Reinado.",
      respostaModelo: "Brás Cubas resume a elite do Império: herdeiro ocioso, formado em Coimbra sem vocação, movido por vaidade (o emplasto, a ambição de ministro) e por amores calculados. A \"miséria\" que ele se orgulha de não transmitir não é material — é moral: o egoísmo, o parasitismo e a hipocrisia de uma classe que vivia das aparências e do trabalho alheio (inclusive escravizado, como mostra o episódio de Prudêncio). Ao fazer o próprio representante dessa elite reconhecer, morto, que sua existência não deixou nada digno de herança, Machado condena a classe inteira — sem discurso panfletário, apenas com a ironia do 'pequeno saldo'." }
  ]
};
