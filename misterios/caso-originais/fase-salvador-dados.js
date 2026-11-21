/* =========================================================
   FASE DE AÇÃO 5 — O TRAPICHE DE SALVADOR (Capitães da Areia, Jorge Amado, 1937)
   Conteúdo da fase. A obra NÃO está em domínio público: todos os textos são
   resumos e paráfrases didáticas, sem nenhuma citação. Leia o romance.
   ========================================================= */
const CAPITAES = {

  TRECHOS: {
    jornal:   {cap:'O romance começa no jornal', t:'Capitães da Areia abre de um jeito único: com uma reportagem sensacionalista sobre o "bando de crianças criminosas" que assalta a cidade, seguida de cartas de leitores e autoridades — cada um empurrando a culpa para o outro. Só depois o narrador mostra os meninos de perto, e o leitor descobre que a verdade é bem maior que a manchete.'},
    trapiche: {cap:'O trapiche', t:'O bando dorme num trapiche abandonado no areal do cais: um galpão velho de madeira, aberto para o mar. Ali vivem dezenas de meninos órfãos e abandonados, cada um com seu canto, suas velas, seus tesouros escondidos. É casa, esconderijo e reino.'},
    carrossel:{cap:'O carrossel', t:'Um carrossel velho chega à cidade, e os meninos ajudam o dono a montá-lo. Numa noite, eles ganham o direito de girar de graça. Por alguns minutos, os "capitães" temidos pela cidade voltam a ser só crianças, deslumbradas com as luzes e a música. É um dos capítulos mais famosos do romance.'},
    dora:     {cap:'Dora', t:'Dora chega ao trapiche depois de perder a família para a varíola, trazendo o irmão pequeno pela mão. No começo, os meninos desconfiam; aos poucos, ela vira irmã, mãe e companheira do bando — e o grande amor de Pedro Bala. Doente, ela morre ainda menina, e para o bando ela vira uma estrela no céu da Bahia.'},
    reformatorio:{cap:'O reformatório', t:'Quando a polícia captura Pedro Bala, ele é mandado ao reformatório, apresentado nos jornais como instituição que "regenera". Por dentro, o romance mostra o contrário: fome, castigo e violência. Pedro resiste, foge e volta ao bando. A denúncia dessas instituições é um dos centros do livro.'},
    destino:  {cap:'O destino de cada um', t:'No fim, o bando se desfaz e o romance conta o destino de cada menino: um vira artista, outro padre, outro cangaceiro, outro capanga... Pedro Bala torna-se militante e organizador dos trabalhadores: para o romance, a sorte dos meninos não é destino — é fruto da sociedade, e pode ser mudada.'}
  },

  TIMELINE: [
    ['A manchete','O jornal publica uma reportagem alarmada sobre o "bando de crianças criminosas".'],
    ['As cartas','Leitores e autoridades escrevem ao jornal, cada um jogando a culpa no outro.'],
    ['O trapiche','O narrador mostra o bando de verdade: meninos órfãos dormindo num galpão do cais.'],
    ['Pedro Bala','O líder, filho de um estivador morto em greve, cresceu sozinho nas ruas.'],
    ['O bando','Professor, Pirulito, Sem-Pernas, Volta Seca, Gato: cada menino tem sua história.'],
    ['As malandragens','Pequenos golpes e furtos pela cidade alta e pelo cais, para comer.'],
    ['O carrossel','Os meninos giram de graça no carrossel: por uma noite, são só crianças.'],
    ['A bexiga','A varíola (a "bexiga") chega à cidade e leva gente do povo e do bando.'],
    ['Dora','Órfã da bexiga, Dora entra para o bando e vira irmã e mãe dos meninos.'],
    ['O reformatório','Pedro Bala é preso, sofre no reformatório e consegue fugir.'],
    ['A estrela','Dora adoece e morre menina; para o bando, ela vira estrela no céu.'],
    ['Cada destino','O bando se desfaz: artista, padre, cangaceiro… e Pedro Bala, militante.']
  ],

  FALAS: {
    soldado:[ 'Alto lá! Ninguém fica rondando o cais a esta hora!', 'De novo você?! Para a delegacia!', 'O comissário mandou limpar o areal. Circulando!' ],
    professor:[ 'Eu leio para os outros meninos. Livro, aqui, vale mais que dinheiro.', 'O Censor quer sumir com as histórias. Mas eu guardei as palavras na cabeça.' ],
    menino2:[ 'Psiu! O guarda está de ronda no mercado. Fica atrás das barracas!' ]
  },

  /* placas do chefe O JORNAL — desmentir a manchete: quem é quem no bando */
  CONTAS: [
    {t:'MANCHETE: "O chefe do bando é um monstro!" — Quem é, de verdade, o líder dos Capitães da Areia?',
     o:['Pedro Bala, menino de cabelo loiro e cicatriz no rosto, filho de um estivador','Um adulto foragido da cadeia','O dono do trapiche','Um pirata do porto'],k:0,
     e:'Pedro Bala é um menino órfão, filho de um grevista morto. A cicatriz veio de uma briga pela liderança do bando.'},
    {t:'Qual menino do bando sabe ler, desenha e conta histórias para os outros?',
     o:['O Professor','Volta Seca','Gato','Boa-Vida'],k:0,
     e:'João José, o Professor: lê romances para o bando à luz de vela. No fim, torna-se artista: desenha a vida dos meninos.'},
    {t:'Qual menino sonha em ser padre e cuida dos outros como pode?',
     o:['Pirulito','Sem-Pernas','João Grande','Volta Seca'],k:0,
     e:'Pirulito é o menino religioso do bando; seu caminho termina na vida religiosa.'},
    {t:'Qual menino manca de uma perna e usa a esperteza (e o rancor) como arma?',
     o:['Sem-Pernas','Professor','Gato','Pedro Bala'],k:0,
     e:'O Sem-Pernas se finge de órfão arrependido para abrir as casas ao bando — e sofre por nunca poder ficar.'},
    {t:'Qual menino, vindo do sertão, sonha em entrar para o cangaço de Lampião?',
     o:['Volta Seca','Pirulito','Boa-Vida','João Grande'],k:0,
     e:'Volta Seca, o sertanejo do bando, afilhado de Lampião, acaba virando cangaceiro.'},
    {t:'Quem é a única menina que entra para o bando?',
     o:['Dora','Conceição','Madalena','Lúcia'],k:0,
     e:'Dora, órfã da varíola. Vira irmã, mãe e companheira dos meninos — e o amor de Pedro Bala.'},
    {t:'Onde o bando dos Capitães da Areia mora?',
     o:['Num trapiche abandonado no areal do cais','Num orfanato da cidade alta','Num navio encalhado','Debaixo da ponte do mercado'],k:0,
     e:'O trapiche velho do cais é casa e reino do bando: cada menino tem seu canto no galpão.'},
    {t:'Como o romance COMEÇA?',
     o:['Com uma reportagem de jornal e cartas de leitores sobre o bando','Com a morte de Dora','Com a fuga do reformatório','Com um poema de cordel'],k:0,
     e:'A abertura em forma de jornal mostra como a cidade fala SOBRE os meninos antes de o leitor conhecê-los de verdade.'}
  ],

  DESAFIOS: [
    {t:'Capitães da Areia (1937) é um romance de 30 URBANO. Isso significa que ele',
     o:['leva a crítica social do romance de 30 para a cidade: a infância abandonada de Salvador','se passa numa fazenda de cana','é um romance psicológico sem crítica social','retrata a seca no sertão do Ceará'],k:0,
     e:'Enquanto Rachel, Graciliano e José Lins olham o campo, Jorge Amado examina a cidade: cais, ladeiras e meninos de rua da Bahia.'},
    {t:'A abertura do romance — manchete, reportagem e cartas de leitores — serve para',
     o:['mostrar como a cidade fala dos meninos sem conhecê-los, antes de o narrador revelar quem eles são','provar que os meninos eram de fato monstros','ensinar a escrever notícias','mostrar que o narrador é um jornalista neutro'],k:0,
     e:'O contraste entre a voz do jornal e a vida real do trapiche é a grande jogada do livro: a manchete acusa, o romance humaniza.'},
    {t:'O carrossel e as velas do trapiche mostram, no romance, que os "capitães"',
     o:['são crianças: sonham, brincam e têm medo, apesar da fama de bandidos','fingem ser crianças para enganar a polícia','odeiam qualquer diversão','só pensam em dinheiro'],k:0,
     e:'Nos momentos de carrossel, história contada e vela acesa, o leitor vê meninos onde a cidade só via criminosos.'},
    {t:'O destino final de Pedro Bala — militante e organizador dos trabalhadores — sugere que, para o romance,',
     o:['a situação dos meninos não é destino: é produto da sociedade, e pode ser transformada','cada um nasce com uma sina impossível de mudar','a política não muda nada','o melhor caminho é a fuga para o sertão'],k:0,
     e:'O romance de Jorge Amado é engajado: aponta a desigualdade como causa e a luta coletiva como saída.'}
  ],

  ACH: [
    ['baleia','Siri na lata','Pedro Bala pegou 5 siris no areal'],
    ['contas','Furo de reportagem','Venceu O Jornal sem errar nenhuma resposta'],
    ['cheia','Malandragem fina','Atravessou a ronda do guarda sem ser visto'],
    ['totonha','Uma noite de criança','Girou no carrossel'],
    ['silvino','O mapa do Professor','Encontrou o mapa a giz no trapiche'],
    ['moenda','Telhados da Bahia','Chegou à lanterna no alto dos telhados']
  ]
};
const SERTAO = CAPITAES; /* o motor herdado lê os dados por este nome */
