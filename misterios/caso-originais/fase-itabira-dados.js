/* =========================================================
   FASE DE AÇÃO 6 — AS LADEIRAS DE ITABIRA (Alguma Poesia, C. Drummond de Andrade, 1930)
   Conteúdo da fase. A obra NÃO está em domínio público: nenhum verso é citado —
   tudo aqui é resumo, descrição e paráfrase didática. Leia os poemas no livro.
   ========================================================= */
const ITABIRA = {

  TRECHOS: {
    gauche:   {cap:'O poeta “gauche”', t:'Alguma Poesia (1930) abre com um poema em que um anjo torto manda o poeta ser "gauche" na vida — desajeitado, fora do passo, olhando o mundo meio de lado. Essa figura do poeta deslocado, irônico e tímido atravessa o livro inteiro e virou a marca de Drummond.'},
    pedra:    {cap:'A pedra no caminho', t:'Dois anos antes do livro, em 1928, Drummond publicou um poema curtíssimo sobre uma pedra no meio do caminho — quase só a repetição dessa frase. Houve escândalo: "isso é poesia?". Era: a repetição imita o obstáculo que não sai da frente, e o poema virou símbolo da liberdade do verso moderno.'},
    itabira:  {cap:'Itabira', t:'Drummond nasceu em Itabira, cidade de mineração em Minas Gerais, cercada por uma montanha de ferro. A cidade, a família, a fazenda e o ferro voltam sempre na poesia dele: Itabira é a lembrança que o poeta carrega, como ele mesmo diz, pendurada na parede da memória.'},
    cotidiano:{cap:'A poesia do cotidiano', t:'Nos poemas de Alguma Poesia cabem bonde, cinema, família no almoço de domingo, moça na janela, política de interior. A lição modernista está aplicada: poesia não precisa de tema "nobre" — o Brasil de todo dia, dito em verso livre e com humor, é assunto de sobra.'},
    poetas:   {cap:'A poesia de 30', t:'A geração de 30 consolidou o verso livre conquistado em 22, cada poeta com sua voz: Drummond, o cotidiano irônico; Cecília Meireles, a música do transitório; Vinicius de Moraes, o lirismo amoroso; Murilo Mendes, a imagem religiosa e surpreendente; Jorge de Lima, o Nordeste e a herança negra do Brasil.'},
    volta:    {cap:'O caso se fecha', t:'Com as folhas de Alguma Poesia recuperadas, os seis originais do cofre de Anselmo estão completos: o romance e a poesia de 30, salvos da censura. Falta só voltar ao Rio — e abrir o cofre com a senha que as seis fases revelaram.'}
  },

  TIMELINE: [
    ['1922','A Semana de Arte Moderna abre caminho para o verso livre no Brasil.'],
    ['1928','Drummond publica na Revista de Antropofagia o poema da pedra no meio do caminho: escândalo e marco.'],
    ['1930','Sai Alguma Poesia: Drummond imprime o livro por conta própria, em edição pequena.'],
    ['1930','Manuel Bandeira publica Libertinagem, auge do seu verso livre e coloquial.'],
    ['1930','Murilo Mendes estreia com Poemas: imagem inesperada e visão religiosa.'],
    ['1933','Vinicius de Moraes estreia na poesia; depois seguirá para a canção.'],
    ['1939','Cecília Meireles publica Viagem, premiado: a música do transitório.'],
    ['1940','Drummond publica Sentimento do Mundo: o poeta se volta para a história.'],
    ['1945','A Rosa do Povo: o auge da poesia social de Drummond.'],
    ['1947','Jorge de Lima reúne seus Poemas Negros, sobre a herança africana do Brasil.'],
    ['1951','Claro Enigma: Drummond no auge da forma clássica.'],
    ['Hoje','A pedra, o anjo torto e Itabira seguem entre os poemas mais lidos do país.']
  ],

  FALAS: {
    caderno:[ 'Página do caderno: “Anotar tudo o que a rua disser. O bonde, o lampião, a moça na janela.”', 'Página do caderno: “Em Itabira, até o ferro da montanha tem memória.”' ]
  },

  /* placas do chefe A PEDRA — a poesia de 30 */
  CONTAS: [
    {t:'Que livro de 1930 abre com um anjo torto mandando o poeta ser “gauche”?',
     o:['Alguma Poesia, de Drummond','Libertinagem, de Bandeira','Viagem, de Cecília Meireles','Poemas Negros, de Jorge de Lima'],k:0,
     e:'Alguma Poesia (1930), o livro de estreia de Carlos Drummond de Andrade, impresso por conta do próprio autor.'},
    {t:'No famoso poema de 1928, o que há no meio do caminho?',
     o:['Uma pedra','Um rio','Um trem','Um anjo'],k:0,
     e:'Uma pedra — e a repetição insistente da frase imita o obstáculo que não sai da frente. O poema causou escândalo.'},
    {t:'“Gauche”, a palavra do anjo torto, quer dizer alguém',
     o:['desajeitado, fora do passo, à esquerda da vida','elegante e bem-sucedido','violento e vingativo','rico e orgulhoso'],k:0,
     e:'Do francês “esquerdo”: o poeta se vê torto, deslocado, olhando o mundo meio de lado — com ironia e ternura.'},
    {t:'Qual é a cidade natal de Drummond, cheia de ferro e de memória?',
     o:['Itabira (MG)','Quixadá (CE)','Maceió (AL)','Salvador (BA)'],k:0,
     e:'Itabira, em Minas Gerais: a montanha de ferro e a vida de interior voltam sempre nos poemas dele.'},
    {t:'Qual poeta de 30 é a voz da música do transitório, em versos como os de Viagem (1939)?',
     o:['Cecília Meireles','Murilo Mendes','Vinicius de Moraes','Drummond'],k:0,
     e:'Cecília Meireles: melodia, leveza e o tempo que escorre são as marcas da sua lírica.'},
    {t:'Qual poeta de 30 começou no lirismo amoroso e depois levou a poesia para a canção popular?',
     o:['Vinicius de Moraes','Jorge de Lima','Murilo Mendes','Mário de Andrade'],k:0,
     e:'Vinicius de Moraes, mais tarde parceiro de Tom Jobim na bossa nova.'},
    {t:'Qual poeta de 30 uniu visão religiosa e imagens surpreendentes, quase surrealistas?',
     o:['Murilo Mendes','Cecília Meireles','Drummond','Vinicius'],k:0,
     e:'Murilo Mendes: catolicismo e imagem inesperada na mesma estrofe.'},
    {t:'Qual poeta cantou o Nordeste e a herança negra do Brasil em seus poemas?',
     o:['Jorge de Lima','Murilo Mendes','Cecília Meireles','Manuel Bandeira'],k:0,
     e:'Jorge de Lima, alagoano, dos engenhos do Nordeste aos Poemas Negros.'}
  ],

  DESAFIOS: [
    {t:'A poesia da geração de 30 (Drummond, Cecília, Vinicius, Murilo, Jorge de Lima)',
     o:['consolidou o verso livre de 22, cada poeta com um projeto próprio','abandonou o verso livre e voltou ao soneto parnasiano','recusou qualquer tema brasileiro','foi toda escrita em francês'],k:0,
     e:'A geração de 30 amadureceu a liberdade formal conquistada pelos modernistas de 22, sem precisar mais brigar por ela.'},
    {t:'O humor e a ironia de Alguma Poesia servem para',
     o:['olhar o cotidiano e a si mesmo com distância crítica, sem solenidade','zombar dos leitores','esconder erros de gramática','imitar os poetas parnasianos'],k:0,
     e:'O “gauche” ri de si e do mundo: a ironia é o jeito drummondiano de dizer coisas sérias sem pose.'},
    {t:'O poema da pedra causou escândalo em 1928 porque',
     o:['parecia “simples demais”: repetição e fala comum no lugar de rima e metro','defendia a monarquia','era longo demais','estava escrito em latim'],k:0,
     e:'Era o verso livre levado ao limite. O “simples demais” era o ponto: o obstáculo cotidiano virando mantra.'},
    {t:'Itabira, na poesia de Drummond, funciona como',
     o:['memória de origem: a cidade de ferro que o poeta carrega consigo','cenário futurista inventado','lugar que o poeta despreza e esquece','capital do país'],k:0,
     e:'A cidade natal é lembrança permanente: família, fazenda, montanha de ferro — a Minas interior dentro do poeta.'}
  ],

  ACH: [
    ['baleia','Café com prosa','Bebeu café nas três canecas da ladeira'],
    ['contas','Antologia viva','Venceu A Pedra sem errar nenhuma resposta'],
    ['cheia','Mineiro de ferro','Atravessou a mina sem perder lamparina'],
    ['totonha','O céu do poema','Visitou o céu do caderno de poesia'],
    ['silvino','No meio do caminho','Examinou a pedra da ladeira'],
    ['moenda','Topo da montanha','Chegou ao mirante da montanha de ferro']
  ]
};
const SERTAO = ITABIRA; /* o motor herdado lê os dados por este nome */
