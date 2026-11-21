/* =========================================================
   FASE DE AÇÃO 3 — ENGENHO SANTA ROSA (Menino de Engenho, José Lins do Rego, 1932)
   Conteúdo da fase (resumos, falas, glossário do chefe, linha do tempo).
   José Lins do Rego morreu em 1957: a obra só entra em domínio público em
   1º/jan/2028. Por isso NÃO há citações do livro aqui: tudo é paráfrase
   didática, escrita para o jogo. Para conhecer a obra, leia o romance.
   ========================================================= */
const ENGENHO = {

  /* resumos dos episódios (paráfrase), mostrados em pergaminho */
  TRECHOS: {
    chegada:  {cap:'A chegada', t:'O romance é narrado por Carlos de Melo já adulto, lembrando a infância. Aos quatro anos, depois de uma tragédia familiar que lhe tirou a mãe, o menino é levado para o Engenho Santa Rosa, na várzea do rio Paraíba, onde vive o avô, o coronel José Paulino, senhor de muitas terras.'},
    moagem:   {cap:'A moagem', t:'O menino descobre o engenho em funcionamento: a cana chegando nos carros de boi, a moenda esmagando, o caldo fervendo nos tachos, o cheiro doce que toma conta de tudo. E vê também o trabalho pesado de quem corta a cana no eito, de sol a sol.'},
    cheia:    {cap:'A cheia', t:'Um dos episódios mais marcantes do livro: o Paraíba transborda, a água invade a várzea, arrasta cercas, plantações e casas de taipa, e o povo corre para os altos. O menino assiste a tudo com uma mistura de medo e fascínio.'},
    totonha:  {cap:'A velha Totonha', t:'A velha Totonha anda de engenho em engenho contando histórias de Trancoso: reis, princesas, bichos encantados. O menino fica hipnotizado pela voz dela. A tradição oral do povo é uma das forças que formam a imaginação de Carlos.'},
    silvino:  {cap:'Antônio Silvino', t:'O cangaceiro Antônio Silvino, famoso nas cantorias, passa pelo Santa Rosa. O coronel o recebe sem perder a autoridade, e o menino olha fascinado para o homem que o povo cantava como herói.'},
    usina:    {cap:'O fim de um mundo', t:'O engenho de José Paulino é um mundo patriarcal que já começa a acabar. Nos romances seguintes do ciclo da cana-de-açúcar, as usinas modernas engolem os velhos engenhos, que ficam de “fogo morto”.'},
    partida:  {cap:'A partida', t:'No fim do romance, Carlos, com uns doze anos, é mandado para o colégio interno. Deixa o engenho, os primos, os banhos de rio e as histórias: a infância fica para trás, e é ela que o adulto vai lembrar ao escrever.'}
  },

  /* a história do romance, em ordem — liberada como linha do tempo */
  TIMELINE: [
    ['A tragédia','Aos quatro anos, Carlos perde a mãe numa tragédia familiar: o pai, transtornado, a mata.'],
    ['A chegada','O menino é levado para o Engenho Santa Rosa, do avô, o coronel José Paulino.'],
    ['Tia Maria','A tia Maria passa a cuidar dele como uma segunda mãe.'],
    ['A bagaceira','Os primos e os meninos do engenho apresentam a Carlos a vida solta do campo.'],
    ['A moagem','Ele descobre a moenda, os tachos, o mel de engenho e o trabalho duro do eito.'],
    ['A cheia','O rio Paraíba transborda e a água invade a várzea do engenho.'],
    ['A velha Totonha','As histórias de Trancoso da velha Totonha encantam o menino.'],
    ['Antônio Silvino','O cangaceiro visita o engenho e é recebido pelo coronel.'],
    ['Passarinhos e rio','Alçapões, banhos de rio, brincadeiras e as primeiras paixões de menino.'],
    ['O casamento','A tia Maria se casa e deixa o engenho; Carlos sente a falta dela.'],
    ['A casa-grande','A severidade de outros parentes mostra o lado duro da casa-grande.'],
    ['O colégio','Carlos parte para o colégio interno: fim da infância no engenho.']
  ],

  /* balões e diálogos (paráfrase) */
  FALAS: {
    carlos:[ 'Meu avô é o dono de tudo isso aqui, até onde a vista alcança.', 'A velha Totonha chega hoje! Ela sabe todas as histórias do mundo.', 'Quer ver um galo-de-campina? Eu sei armar alçapão.' ],
    cozinheira:[ 'Garapa fresquinha para quem chega de viagem!', 'O coronel acorda antes do galo e vai ver a moagem.' ],
    trab1:[ 'Cana cortada não espera: tem que ir para a moenda hoje.' ],
    trab2:[ 'Este feixe pesa mais que o menino do coronel.' ],
    trab3:[ 'Do sol nascer ao sol se pôr, no eito. Assim é a vida aqui.' ],
    silvino:[ 'Paz nesta casa. Venho em paz.' ]
  },

  /* A Usina — o glossário rasgado do Censor: acerte a placa com a palavra certa.
     Opções curtas para caber nas placas. */
  CONTAS: [
    {t:'Que palavra do engenho significa “máquina que esmaga a cana para extrair o caldo”?',
     o:['Moenda','Bagaceira','Eito','Senzala'],k:0,
     e:'Moenda: os rolos que esmagam a cana. O caldo segue para os tachos.'},
    {t:'Qual é o nome do trabalho dos cortadores de cana no canavial, sob o sol?',
     o:['Moagem','Eito','Purga','Safra'],k:1,
     e:'Eito: a faixa de terra trabalhada e, por extensão, o trabalho braçal no campo, de sol a sol.'},
    {t:'Como se chama o lugar onde se amontoa o bagaço da cana (e, por extensão, o povo que vive em volta do engenho)?',
     o:['Casa-grande','Bagaceira','Moenda','Alpendre'],k:1,
     e:'Bagaceira. A palavra deu nome a um romance de José Américo de Almeida (1928), que abriu caminho para o romance de 30.'},
    {t:'Que palavra designa o caldo de cana, bebido fresco?',
     o:['Garapa','Rapadura','Bagaço','Melaço'],k:0,
     e:'Garapa é o caldo de cana. Fervido nos tachos, ele engrossa e vira mel, rapadura ou açúcar.'},
    {t:'Como se diz de um engenho que parou de moer para sempre?',
     o:['De safra','De fogo morto','De moagem','De eito'],k:1,
     e:'“Fogo morto”: a fornalha apagou para sempre. É também o título do romance de José Lins do Rego de 1943.'},
    {t:'Qual era a residência do senhor de engenho e de sua família?',
     o:['Senzala','Casa de purgar','Casa-grande','Bagaceira'],k:2,
     e:'Casa-grande. A dupla casa-grande e senzala resume a sociedade dos engenhos, como analisou Gilberto Freyre em 1933.'},
    {t:'Que nome recebeu a fábrica moderna de açúcar que levou os velhos engenhos à falência?',
     o:['Usina','Moenda','Bolandeira','Tacho'],k:0,
     e:'Usina. É também o título de um romance do ciclo da cana (1936), em que o mundo do engenho é engolido pela indústria.'},
    {t:'Em que construção do engenho o açúcar era clareado e secado nas formas?',
     o:['Casa de purgar','Senzala','Alpendre','Cocheira'],k:0,
     e:'Casa de purgar: ali o açúcar ficava nas formas, escorrendo o mel, até clarear.'}
  ],

  /* perguntas de leitura (aparecem com os resumos) */
  DESAFIOS: [
    {t:'Em Menino de Engenho, a cheia do Paraíba é contada por um adulto que relembra o que viu quando criança. Isso mostra que o romance é',
     o:['memorialista, narrado em 1ª pessoa pelo adulto que recorda a infância.','uma reportagem objetiva, em 3ª pessoa, sobre uma enchente.','um romance histórico sobre a colonização do Nordeste.','um diário escrito pelo menino no mesmo dia dos fatos.'],k:0,
     e:'É um romance de memória: Carlos adulto olha para trás. O livro tem forte carga autobiográfica — José Lins também cresceu no engenho do avô.'},
    {t:'A visita do cangaceiro Antônio Silvino ao engenho ajuda a mostrar',
     o:['que o coronel não tinha poder nenhum na região.','como o poder do senhor de engenho convivia com o cangaço, e como o povo transformava cangaceiros em heróis de cantoria.','que o romance é uma obra de ficção científica.','que o menino queria ser soldado da polícia.'],k:1,
     e:'O coronel recebe o cangaceiro de igual para igual; o menino o admira como figura das histórias e cantorias populares.'},
    {t:'O “ciclo da cana-de-açúcar” de José Lins do Rego, aberto por Menino de Engenho, retrata principalmente',
     o:['a vida moderna nas grandes cidades do Sul.','a decadência dos engenhos tradicionais da Paraíba diante das usinas.','a seca do sertão cearense de 1915.','as aventuras de meninos de rua em Salvador.'],k:1,
     e:'Os romances do ciclo acompanham a crise do engenho patriarcal, engolido pela usina. A seca de 1915 é O Quinze; os meninos de Salvador, Capitães da Areia.'},
    {t:'As histórias da velha Totonha mostram, no romance,',
     o:['que o menino detestava ouvir histórias.','a força da tradição oral e da cultura popular na formação da imaginação do menino.','que só os livros escritos têm valor literário.','uma crítica às festas religiosas do engenho.'],k:1,
     e:'A contadora de histórias leva para o engenho os contos de Trancoso. A oralidade popular é uma das raízes do regionalismo de 30.'}
  ],

  /* conquistas próprias da fase */
  ACH: [
    ['baleia','Amigo dos passarinhos','Carlos pegou (e soltou) 5 galos-de-campina'],
    ['contas','Dicionário vivo','Venceu a Usina sem errar nenhuma palavra'],
    ['cheia','Arca da cheia','Salvou todos os bichos da cheia do Paraíba'],
    ['totonha','Era uma vez…','Atravessou o teatro de sombras da velha Totonha'],
    ['silvino','Visita inesperada','Conversou com o cangaceiro Antônio Silvino'],
    ['moenda','Topo da chaminé','Chegou ao alto da chaminé do engenho']
  ]
};
const SERTAO = ENGENHO; /* o motor herdado do Sertão lê os dados por este nome */
