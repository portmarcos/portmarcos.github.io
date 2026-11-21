/* =========================================================
   FASE DE AÇÃO 4 — FAZENDA SÃO BERNARDO (São Bernardo, Graciliano Ramos, 1934)
   Conteúdo da fase. A obra está em domínio público desde 2024, mas os textos
   abaixo são RESUMOS didáticos escritos para o jogo (não citações), para não
   arriscar citar de memória. Para conhecer a obra, leia o romance.
   ========================================================= */
const SAOBERNARDO = {

  TRECHOS: {
    chegada:  {cap:'Quem conta a história', t:'São Bernardo é narrado em primeira pessoa por Paulo Honório, já velho e sozinho, que resolve escrever a própria vida. Órfão, foi guia de cego, trabalhador de enxada, vendedor ambulante; passou até pela cadeia. Subiu na vida a qualquer custo, com astúcia, dívidas que soube cobrar e violência.'},
    conquista:{cap:'A conquista da fazenda', t:'O grande objetivo de Paulo Honório era ser dono da fazenda São Bernardo, onde trabalhou quando moço. Ele empresta dinheiro ao herdeiro, aperta, pressiona, e acaba comprando a terra por pouco. Depois moderniza tudo: descaroçador, serraria, pomar, açude. A fazenda prospera, mas à custa de quem trabalha nela.'},
    casamento:{cap:'Um casamento como negócio', t:'Decidido a ter um herdeiro, Paulo Honório procura esposa como quem fecha negócio. Conhece Madalena, professora pobre, culta e generosa, e a pede em casamento numa conversa que mais parece uma proposta comercial. Ela aceita, e o leitor já pressente o desencontro entre os dois.'},
    madalena: {cap:'Madalena', t:'Madalena é o oposto do marido: instruída, solidária, preocupada com os empregados e com os pobres. Paulo Honório mede tudo em lucro e posse; ela pensa por conta própria, escreve, discute, doa. O que ele chama de ciúme é também a raiva de não ser dono dos pensamentos dela.'},
    carta:    {cap:'A carta', t:'O ciúme de Paulo Honório envenena a casa. Ele vigia, desconfia, humilha. Um dia encontra uma folha escrita por Madalena e, sem entender o que lê, imagina uma traição. Era parte de uma carta de despedida. Esmagada por aquela vida, Madalena morre, e ele fica só, com a culpa e a propriedade.'},
    livro:    {cap:'Escrever para entender', t:'No fim, arruinado pela crise e pela solidão, Paulo Honório escreve este livro para tentar entender o que fez de si mesmo. Ele reconhece que a ambição e o sentimento de propriedade o embruteceram: tratou pessoas como coisas, e por isso perdeu todas. É uma das páginas mais impiedosas da literatura brasileira — contra o próprio narrador.'}
  },

  TIMELINE: [
    ['O menino sem nada','Paulo Honório cresce órfão, criado por uma doceira; trabalha como guia de cego.'],
    ['A enxada e a cadeia','Trabalha no eito, briga por causa de uma moça e passa um tempo na cadeia.'],
    ['O vendedor','Vira vendedor ambulante no sertão: aprende a negociar, emprestar e cobrar.'],
    ['O alvo','Decide ser dono da fazenda São Bernardo, onde trabalhou quando moço.'],
    ['A conquista','Empresta dinheiro ao herdeiro da fazenda, pressiona e compra a terra por pouco.'],
    ['O progresso','Moderniza a fazenda: descaroçador de algodão, serraria, açude, pomar.'],
    ['A esposa','Procura uma esposa como quem procura um negócio e conhece Madalena, professora.'],
    ['O casamento','Casa-se com Madalena; logo estranha a generosidade e a independência dela.'],
    ['O ciúme','A desconfiança cresce: ele vigia a esposa e briga com todos ao redor.'],
    ['A folha escrita','Encontra uma folha escrita por Madalena e imagina uma traição que não existe.'],
    ['A perda','Madalena morre; era uma carta de despedida. Paulo Honório fica só.'],
    ['O livro','Velho e arruinado, ele escreve a própria história para entender o que se tornou.']
  ],

  FALAS: {
    manuscrito:[ 'Página solta do manuscrito: “Comprei São Bernardo. Agora era minha.”', 'Página solta: “Madalena falava com os trabalhadores como se fossem gente da casa. Aquilo me irritava.”' ]
  },

  /* placas do chefe A CERCA — decifrar o código do Censor (cada letra virou a SEGUINTE do alfabeto) */
  CONTAS: [
    {t:'O arame soletra “UFSSB”. Decifre: cada letra virou a seguinte do alfabeto (A→B, B→C…).',
     o:['TERRA','SERRA','FERRO','CERCA'],k:0,
     e:'U→T, F→E, S→R, S→R, B→A: TERRA. É a obsessão de Paulo Honório: ter terra, ser dono.'},
    {t:'O arame soletra “DFSDB”. Decifre o código (cada letra virou a seguinte).',
     o:['CERCA','DENDE','CESTA','CARGA'],k:0,
     e:'D→C, F→E, S→R, D→C, B→A: CERCA. Cercar é o gesto do proprietário: separar o que é meu do que é seu.'},
    {t:'O arame soletra “QPTTF”. Decifre o código.',
     o:['POSSE','PASTO','PRESA','PONTE'],k:0,
     e:'Q→P, P→O, T→S, T→S, F→E: POSSE. No romance, até o casamento vira uma forma de posse.'},
    {t:'O arame soletra “MVDSP”. Decifre o código.',
     o:['LUCRO','LIVRO','LABOR','LOURO'],k:0,
     e:'M→L, V→U, D→C, S→R, P→O: LUCRO. Paulo Honório mede o mundo pelo que rende.'},
    {t:'O arame soletra “DJVNF”. Decifre o código.',
     o:['CIÚME','CRIME','CHUVA','CISMA'],k:0,
     e:'D→C, J→I, V→U, N→M, F→E: CIÚME. É o sentimento que destrói o casamento de Paulo Honório e Madalena.'},
    {t:'Como a crítica chama o hábito de Paulo Honório de tratar pessoas como coisas, como propriedades?',
     o:['Reificação','Idealização','Personificação','Metalinguagem'],k:0,
     e:'Reificação: transformar gente em coisa. Ele avalia esposa, empregados e amigos como avalia bois e terras.'},
    {t:'Quem narra São Bernardo?',
     o:['O próprio Paulo Honório, em 1ª pessoa, depois de perder tudo','Um narrador onisciente em 3ª pessoa','Madalena, em cartas','Casimiro Lopes, o vigia da fazenda'],k:0,
     e:'O romance é a autoanálise amarga de Paulo Honório: ele escreve para entender como a ambição o embruteceu.'},
    {t:'Madalena, a esposa de Paulo Honório, era',
     o:['professora, culta e generosa com os empregados','fazendeira rica e autoritária','cantora de rádio em Maceió','irmã do antigo dono da fazenda'],k:0,
     e:'Professora pobre e instruída. A generosidade dela é o oposto exato da lógica de posse do marido.'}
  ],

  DESAFIOS: [
    {t:'Paulo Honório narra a própria vida depois de velho. Ao escrever, ele',
     o:['reconhece que a ambição e o sentimento de propriedade o embruteceram e destruíram suas relações.','se apresenta como herói romântico, sem defeitos.','narra com imparcialidade total, como um narrador onisciente.','abandona a crítica social em favor da paródia.'],k:0,
     e:'O romance é uma autoanálise amarga: ele percebe tarde demais que a lógica do lucro o tornou incapaz de amar.'},
    {t:'O ciúme de Paulo Honório lembra o de outro narrador famoso da literatura brasileira. Qual?',
     o:['Bentinho, de Dom Casmurro (Machado de Assis)','Riobaldo, de Grande Sertão: Veredas','Brás Cubas, de Memórias Póstumas','Fabiano, de Vidas Secas'],k:0,
     e:'Como Bentinho, Paulo Honório narra em 1ª pessoa e condena a esposa sem provas — o leitor só vê a versão do marido ciumento.'},
    {t:'A fazenda modernizada, o descaroçador, a serraria e o açude mostram que Paulo Honório',
     o:['traz o “progresso”, mas sem mudar a exploração de quem trabalha','odeia máquinas e defende o trabalho manual','abandona a fazenda para viver na capital','divide os lucros igualmente com os empregados'],k:0,
     e:'O progresso técnico convive com a brutalidade: as máquinas mudam, a relação de posse e exploração continua.'},
    {t:'São Bernardo (1934) pertence ao romance de 30 porque',
     o:['analisa criticamente a sociedade rural brasileira, do coronel ao trabalhador','se passa numa cidade grande do futuro','idealiza o campo como paraíso perdido','é um romance de cavalaria'],k:0,
     e:'Como os outros romances da década, examina o Brasil real: a terra, o poder e as pessoas esmagadas entre os dois.'}
  ],

  ACH: [
    ['baleia','Leitor de códigos','Decifrou a primeira palavra do arame'],
    ['contas','Dicionário do agreste','Venceu A Cerca sem errar nenhum código'],
    ['cheia','Mais ligeiro que o arame','Escapou da cerca viva sem perder lamparina'],
    ['totonha','O escritório em silêncio','Encontrou todas as lembranças de Madalena'],
    ['silvino','Metade da carta','Achou a folha rasgada no algodoal'],
    ['moenda','Serraria vencida','Atravessou a serraria sem se queimar']
  ]
};
const SERTAO = SAOBERNARDO; /* o motor herdado lê os dados por este nome */
