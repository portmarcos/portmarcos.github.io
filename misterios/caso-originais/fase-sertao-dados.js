/* =========================================================
   FASE DE AÇÃO 2 — TRAVESSIA DO SERTÃO (Vidas Secas, Graciliano Ramos, 1938)
   Conteúdo da fase (textos, falas, contas do chefe, linha do tempo).
   Vidas Secas está em domínio público no Brasil desde 1º/jan/2024 (Graciliano
   morreu em 1953): os trechos marcados com `real:true` são citações literais
   da 1ª edição (José Olympio, 1938); o resto é paráfrase didática.
   ========================================================= */
const SERTAO = {

  /* trechos reais mostrados em pergaminho quando o episódio acontece */
  TRECHOS: {
    mudanca:   {cap:'Mudança', real:true, t:'Na planície avermelhada os juazeiros alargavam duas manchas verdes. Os infelizes tinham caminhado o dia inteiro, estavam cansados e famintos.'},
    cama:      {cap:'Sinhá Vitória', real:true, t:'Seria mais agradável dormirem numa cama de lastro de couro, como outras pessoas.'},
    inferno:   {cap:'O menino mais velho', real:true, t:'Ele nunca tinha ouvido falar em inferno.'},
    juros:     {cap:'Contas', real:true, t:'Reclamou e obteve a explicação habitual: a diferença era proveniente de juros.'},
    governo:   {cap:'O soldado amarelo', real:true, t:'— Governo é governo.\nTirou o chapéu de couro, curvou-se e ensinou o caminho ao soldado amarelo.'},
    preas:     {cap:'Baleia', real:true, t:'E lamberia as mãos de Fabiano, um Fabiano enorme. […] O mundo ficaria todo cheio de preás, gordos, enormes.'},
    fuga:      {cap:'Fuga', real:true, t:'E o sertão continuaria a mandar gente para lá. O sertão mandaria para a cidade homens fortes, brutos, como Fabiano, sinhá Vitória e os dois meninos.'}
  },

  /* os 13 capítulos, na ordem do livro — liberados como linha do tempo */
  TIMELINE: [
    ['Mudança','A família foge da seca pela caatinga, com fome; sacrificam o papagaio para comer.'],
    ['Fabiano','Na fazenda abandonada, Fabiano se alegra por ser "um bicho" capaz de vencer dificuldades.'],
    ['Cadeia','Na cidade, o Soldado Amarelo provoca Fabiano no jogo de cartas e o leva preso, humilhado.'],
    ['Sinhá Vitória','Sinhá Vitória sonha com uma cama de lastro de couro, como a de seu Tomás da bolandeira.'],
    ['O menino mais novo','O menino quer imitar o pai vaqueiro e tenta montar um bode — e cai.'],
    ['O menino mais velho','O menino ouve a palavra "inferno" e quer saber o que é; ninguém consegue explicar.'],
    ['Inverno','Chega a chuva; a família se reúne junto ao fogo e Fabiano conta histórias.'],
    ['Festa','A família vai à festa de Natal na cidade, desconfortável com as roupas e com os outros.'],
    ['Baleia','Doente, Baleia precisa ser sacrificada por Fabiano; ela morre sonhando com um mundo cheio de preás.'],
    ['Contas','O patrão cobra a dívida de Fabiano com "juros" que ele não entende — e ele percebe que é roubado.'],
    ['O soldado amarelo','Na caatinga, Fabiano reencontra o soldado perdido e, podendo se vingar, ensina-lhe o caminho.'],
    ['O mundo coberto de penas','As aves de arribação bebem a pouca água: sinal de que a seca vai voltar.'],
    ['Fuga','A família parte de novo, rumo ao sul, sonhando com uma vida melhor na cidade.']
  ],

  /* balões e diálogos (paráfrase, com expressões do próprio livro) */
  FALAS: {
    fabiano:[ 'Você é um bicho, Fabiano.', 'Um dia a gente sai desta vida...', 'Seu Tomás da bolandeira falava bonito. Eu não sei falar.' ],
    vitoria:[ 'Uma cama de lastro de couro... um dia a gente vai ter.', 'Andem, meninos, que a sombra do juazeiro está longe.' ],
    menino_velho:[ 'Mãe, o que é inferno?' ],
    menino_novo:[ 'Quando eu crescer vou ser vaqueiro que nem o pai!' ],
    soldado:[ 'Desafasta, vagabundo!', 'Aqui quem manda é o governo!' ],
    soldado_medo:[ 'Moço... me ensina o caminho? Me perdi nessa caatinga...' ]
  },

  /* Mandacaru, o Senhor das Contas — cada acerto abre o chefe para um golpe.
     Moeda da época: mil-réis (1$000). Juros simples, como nas contas de Fabiano. */
  CONTAS: [
    {t:'Fabiano pediu 20 mil-réis ao patrão. O patrão cobra juros simples de 5% ao mês. Quanto ele deve depois de 4 meses?',
     o:['21 mil-réis','24 mil-réis','25 mil-réis','40 mil-réis'],k:1,
     e:'Juros de 5% de 20 = 1 mil-réis por mês. Em 4 meses: 4 × 1 = 4. Total: 20 + 4 = 24 mil-réis.'},
    {t:'Fabiano vendeu 3 cabras por 6 mil-réis cada. O patrão ficou com metade, dizendo que as cabras eram dele. Quanto sobrou para Fabiano?',
     o:['3 mil-réis','6 mil-réis','9 mil-réis','18 mil-réis'],k:2,
     e:'3 × 6 = 18 mil-réis no total; metade de 18 é 9.'},
    {t:'Sinhá Vitória fez a conta com sementes, como no livro, e achou que deviam 30 mil-réis. O patrão cobrou 36. Quantos por cento a mais ele cobrou?',
     o:['6%','12%','20%','36%'],k:2,
     e:'A diferença é 36 − 30 = 6. E 6 em relação a 30 é 6/30 = 0,2 = 20%. "A diferença era proveniente de juros", dizia o patrão.'},
    {t:'Uma dívida de 50 mil-réis rende juros simples de 10% ao mês. Em quantos meses ela dobra?',
     o:['5 meses','10 meses','12 meses','20 meses'],k:1,
     e:'10% de 50 = 5 por mês. Para dobrar, os juros precisam somar 50: 50 ÷ 5 = 10 meses.'},
    {t:'A família anda 3 léguas por dia. Quantos dias leva para percorrer 21 léguas até a próxima fazenda?',
     o:['5 dias','6 dias','7 dias','9 dias'],k:2,
     e:'21 ÷ 3 = 7 dias. No início do livro, a viagem "progredira bem três léguas" num dia.'},
    {t:'Fabiano recebe um quarto dos bezerros que nascem na fazenda. Se nasceram 24 bezerros, quantos são dele?',
     o:['4','6','8','12'],k:1,
     e:'Um quarto de 24 é 24 ÷ 4 = 6. Na partilha da época, o vaqueiro ficava com uma parte das crias como pagamento.'},
    {t:'O patrão cobra 2 mil-réis de "imposto" sobre um porco vendido por 8. Que porcentagem do preço foi cobrada?',
     o:['2%','16%','25%','80%'],k:2,
     e:'2 de 8 é 2/8 = 0,25 = 25%. No livro, Fabiano é multado pelo fiscal ao tentar vender um porco na cidade.'},
    {t:'Fabiano devia 12 mil-réis. Pagou 4 por mês, mas a cada mês o patrão somou 1 de juros sobre o que faltava. Quanto ele ainda devia depois de 2 pagamentos?',
     o:['4 mil-réis','6 mil-réis','8 mil-réis','2 mil-réis'],k:1,
     e:'Mês 1: 12 + 1 = 13; paga 4 → 9. Mês 2: 9 + 1 = 10; paga 4 → 6. Os juros fazem a dívida diminuir bem mais devagar.'}
  ],

  /* desafios literários extras do chefe (somam-se aos 3 do capítulo em dados.js) */
  DESAFIOS: [
    {t:'Em "O soldado amarelo", Fabiano poderia se vingar do soldado que o prendeu, mas ensina-lhe o caminho dizendo "Governo é governo". A atitude revela',
     o:['a coragem de Fabiano em enfrentar a autoridade.','a submissão de quem foi ensinado a temer quem tem poder.','o perdão cristão, tema central do Romantismo.','a amizade que nasce entre Fabiano e o soldado.'],k:1,
     e:'Fabiano interiorizou a dominação: mesmo podendo reagir, ele se curva diante da farda. A violência do sistema está dentro dele.'},
    {t:'O livro começa em "Mudança" e termina em "Fuga", com a família de novo a caminho. Essa estrutura circular sugere que',
     o:['a família finalmente encontra a felicidade.','a seca e a miséria se repetem, num ciclo sem saída.','o narrador mudou de opinião sobre as personagens.','o romance não tem relação com a realidade do Nordeste.'],k:1,
     e:'O fim repete o começo: a seca volta e a família foge outra vez. A estrutura do livro reforça a crítica social.'},
    {t:'Baleia sonha com "um mundo cheio de preás, gordos, enormes". No romance, a cachorra',
     o:['é tratada só como animal, sem vida interior.','é humanizada pelo narrador, enquanto os humanos são animalizados.','representa o patrão e a exploração.','é uma personagem cômica, sem importância.'],k:1,
     e:'O narrador dá a Baleia pensamentos e sonhos, e compara Fabiano a um bicho: o contraste denuncia a desumanização causada pela miséria.'}
  ],

  /* conquistas próprias da fase */
  ACH: [
    ['baleia','Amiga fiel','Baleia achou 5 preás para a família'],
    ['sombra','Sombra do juazeiro','Atravessou a caatinga sem a sede chegar ao máximo'],
    ['invisivel','Ninguém viu','Passou pela feira sem ser visto pelo Soldado Amarelo'],
    ['arribacao','Água salva','Espantou todas as arribações da cacimba'],
    ['contas','Ninguém me engana','Acertou todas as contas do Mandacaru'],
    ['governo','Governo é governo','Viu a escolha de Fabiano diante do soldado perdido']
  ]
};
