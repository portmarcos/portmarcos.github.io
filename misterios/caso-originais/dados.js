/* =========================================================
   O CASO DOS ORIGINAIS DESAPARECIDOS — conteúdo do jogo
   Edite os textos e questões aqui. Coordenadas x/y em % da cena.
   ========================================================= */

const PERSONAGENS = {
  editor:     { nome: 'Anselmo Vasconcelos', img: 'img/editor.webp' },
  detetive:   { nome: 'Você',                img: 'img/detetive.webp' },
  professora: { nome: 'Conceição',           img: 'img/professora.webp' },
  vaqueiro:   { nome: 'Fabiano',             img: 'img/vaqueiro.webp' },
  menino:     { nome: 'Pedro Bala',          img: 'img/menino.webp' },
  telegrama:  { nome: 'Telegrama',           img: 'img/i-carta.webp' }
};

const INTRO = [
  { q: 'editor', t: 'Detetive {nome}, obrigado por vir com essa chuva. Sou Anselmo Vasconcelos, da Editora Aurora. Rio de Janeiro, 1938 — e estamos em apuros.' },
  { q: 'editor', t: 'Preparávamos uma coleção com os grandes livros desta década: romances que tiraram o Nordeste do cartão-postal e mostraram a seca, a fome, o engenho em ruínas, os meninos de rua.' },
  { q: 'editor', t: 'Ontem à noite, os originais sumiram do cofre. No lugar, só este bilhete: “Livros que denunciam não serão publicados. Devolvi cada página ao lugar de onde veio. — O CENSOR.”' },
  { q: 'editor', t: 'Ano passado queimaram livros em praça pública na Bahia. Não posso deixar isso acontecer de novo. Siga o mapa, recupere os originais e descubra a nova senha do cofre.' },
  { q: 'detetive', t: 'Cada lugar deve guardar uma letra da senha. Vou precisar ler as pistas com atenção: cada erro apaga uma das minhas lamparinas. Sem luz, não há investigação.' }
];

const CAPITULOS = [
  /* ---------------- 1 · O QUINZE ---------------- */
  {
    lugar: 'Quixadá, Ceará', bg: 'img/cap1-estacao.webp', pin: [62, 7.5],
    obra: 'O Quinze', autor: 'Rachel de Queiroz', ano: 1930,
    chegada: 'A estação está quase vazia. O sol de fim de tarde pesa sobre as malas abandonadas.',
    letra: 'C', item: 'diario', itemNome: 'Diário azul',
    informante: 'professora',
    fala: [
      { q: 'professora', t: 'Você é o detetive do Rio? Sou Conceição, professora em Fortaleza. Passo as férias na fazenda de minha avó, aqui em Quixadá.' },
      { q: 'professora', t: 'Prefiro meus livros aos bailes. Dizem que moça que lê demais acaba sem marido... Pois recusei o casamento com meu primo Vicente. Quero uma vida que tenha sentido.' },
      { q: 'professora', t: 'Vi um homem de terno escuro deixar um caderno azul trancado no banco da estação. Ele murmurou: “A seca que dá nome ao livro guarda a combinação.”' }
    ],
    notaFala: 'Conceição: professora, leitora e independente; recusa o casamento com o primo Vicente. Uma personagem feminina à frente de seu tempo.',
    pistas: [
      { x: 85, y: 80, r: 5, nome: 'Diário azul', chave: true,
        t: 'Um diário de capa azul. Na primeira página, a data: 1915 — o ano da grande seca no Ceará. Anotações sobre uma família de retirantes: Chico Bento, Cordulina e os filhos, que perderam o trabalho na fazenda e partiram a pé.' },
      { x: 30, y: 80, r: 6, nome: 'Malas e trouxas',
        t: 'Malas e trouxas deixadas para trás. Na seca de 1915, milhares de sertanejos fugiram para Fortaleza, onde muitos foram amontoados num “campo de concentração” — um abrigo precário para conter os retirantes.' },
      { x: 8, y: 45, r: 6, nome: 'O trem',
        t: 'O trem para Fortaleza. A passagem era um luxo: a maioria dos retirantes fazia o caminho a pé, sob o sol, passando fome e perdendo os seus pelo caminho.' },
      { x: 62, y: 22, r: 5, nome: 'Placa sem nome',
        t: 'Na placa, um recado a lápis: “A autora escreveu este romance aos 19 anos e o publicou em 1930. Em 1977, seria a primeira mulher eleita para a Academia Brasileira de Letras.”' }
    ],
    desafios: [
      { tipo: 'mc', t: 'Pelas pistas — a seca de 1915, a família de Chico Bento, a professora Conceição — de qual obra são estes originais?',
        o: ['Vidas Secas — Graciliano Ramos', 'O Quinze — Rachel de Queiroz', 'Os Sertões — Euclides da Cunha', 'Iracema — José de Alencar', 'Menino de Engenho — José Lins do Rego'], k: 1,
        e: 'O Quinze (1930) alterna duas histórias: a retirada de Chico Bento e a vida de Conceição. Os Sertões (1902) é pré-modernista; Iracema (1865), romântico.' },
      { tipo: 'cadeado', t: 'O diário está preso por um cadeado de 4 dígitos. Lembre-se das palavras de Conceição: “A seca que dá nome ao livro guarda a combinação.”',
        r: '1915',
        e: 'O título “O Quinze” refere-se à seca de 1915, uma das mais devastadoras da história do Nordeste.' },
      { tipo: 'mc', t: 'O Quinze é considerado um dos marcos iniciais do chamado “romance de 30” porque',
        o: ['retoma a idealização romântica do sertanejo como herói nacional.',
            'adota linguagem rebuscada e vocabulário erudito, típicos do Parnasianismo.',
            'apresenta a seca e a migração com linguagem direta e enxuta, unindo regionalismo e crítica social.',
            'privilegia o poema-piada e a experimentação radical da fase heroica de 1922.',
            'ambienta-se na elite urbana carioca, sem tratar de problemas sociais.'], k: 2,
        e: 'A 2ª fase do Modernismo amadurece a liberdade conquistada em 1922 e a coloca a serviço da denúncia social: seca, fome, migração, coronelismo.' }
    ]
  },

  /* ---------------- 2 · VIDAS SECAS ---------------- */
  {
    lugar: 'Sertão nordestino', bg: 'img/cap2-sertao.webp', pin: [68, 30],
    obra: 'Vidas Secas', autor: 'Graciliano Ramos', ano: 1938,
    chegada: 'Chão rachado, uma casa de taipa abandonada e o silêncio pesado do sertão.',
    letra: 'L', item: 'gaiola', itemNome: 'Gaiola vazia',
    informante: 'vaqueiro',
    fala: [
      { q: 'vaqueiro', t: 'Hum... (o vaqueiro demora a responder, girando o chapéu de couro nas mãos)' },
      { q: 'vaqueiro', t: 'Fabiano. Vaqueiro. Trabalho em terra dos outros. A gente vive que nem bicho, moço.' },
      { q: 'vaqueiro', t: 'Seu Tomás da bolandeira falava bonito, palavra comprida... Eu queria falar assim. Mas as palavras não vêm.' },
      { q: 'vaqueiro', t: 'O homem de terno? Passou aqui. Deixou um papel com letras embaralhadas, perto das pegadas da cachorra.' }
    ],
    notaFala: 'Fabiano mal consegue se expressar e admira quem fala “difícil”. A falta de palavras é um sinal da opressão que ele sofre.',
    pistas: [
      { x: 14, y: 38, r: 5, nome: 'Gaiola vazia', chave: true,
        t: 'Uma gaiola vazia. No início do livro, a família faminta sacrifica o papagaio para comer. Ele nem sabia falar: quase não ouvia palavras numa casa onde ninguém conversava.' },
      { x: 64, y: 82, r: 6, nome: 'Pegadas',
        t: 'Pegadas de cachorro. A cadela da família é uma das personagens mais humanas do romance: pensa, sente, sonha — e tem um capítulo só seu.' },
      { x: 13, y: 76, r: 5, nome: 'Pote de barro',
        t: 'Um pote de barro vazio. O livro começa com a família fugindo da seca (“Mudança”) e termina com uma nova fuga (“Fuga”): a estrutura circular mostra que a miséria se repete.' },
      { x: 87, y: 35, r: 6, nome: 'Juazeiro',
        t: 'O juazeiro, árvore que resiste à seca. Os 13 capítulos do livro são quase independentes entre si — por isso Rubem Braga o chamou de “romance desmontável”.' }
    ],
    desafios: [
      { tipo: 'mc', t: 'A família de Fabiano, sinha Vitória, os dois meninos e a cadela... De qual obra são estes originais?',
        o: ['Grande Sertão: Veredas — Guimarães Rosa', 'São Bernardo — Graciliano Ramos', 'Vidas Secas — Graciliano Ramos', 'O Quinze — Rachel de Queiroz', 'Macunaíma — Mário de Andrade'], k: 2,
        e: 'Vidas Secas (1938). Grande Sertão: Veredas (1956) é da 3ª fase; Macunaíma (1928), da 1ª fase do Modernismo.' },
      { tipo: 'anagrama', t: 'No papel deixado pelo Censor, as letras embaralhadas formam o nome da cadela que sonhava com um mundo cheio de preás.',
        r: 'BALEIA',
        e: 'Baleia é humanizada pelo narrador, enquanto os humanos são animalizados. O contraste denuncia a desumanização causada pela miséria.' },
      { tipo: 'mc', t: 'Em Vidas Secas, o narrador em 3ª pessoa mistura sua voz aos pensamentos das personagens, sem travessão nem verbo como “disse”. Esse recurso, o discurso indireto livre, permite ao leitor',
        o: ['ouvir diálogos longos e eloquentes entre as personagens.',
            'conhecer o mundo interior de personagens que quase não conseguem falar.',
            'acompanhar uma narrativa em 1ª pessoa, contada pelo próprio Fabiano.',
            'perceber a linguagem rebuscada típica do Romantismo.',
            'afastar-se emocionalmente das personagens, vistas só de fora.'], k: 1,
        e: 'Como Fabiano e sua família falam pouco, o discurso indireto livre dá voz ao que eles pensam e sentem, mas não conseguem dizer.' }
    ]
  },

  /* ---------------- 3 · MENINO DE ENGENHO ---------------- */
  {
    lugar: 'Engenho na Paraíba', bg: 'img/cap3-engenho.webp', pin: [76, 24],
    obra: 'Menino de Engenho', autor: 'José Lins do Rego', ano: 1932,
    chegada: 'A chaminé da moenda está fria. O canavial cresce sem ninguém para cortá-lo.',
    letra: 'S', item: 'chave', itemNome: 'Chave do engenho',
    informante: 'telegrama',
    fala: [
      { q: 'telegrama', t: 'CENSOR VISTO NA PARAÍBA PT DEIXOU UM GLOSSÁRIO RASGADO COM PALAVRAS DO ENGENHO SEM SIGNIFICADO PT RECONSTITUA PT ANSELMO' }
    ],
    notaFala: 'Telegrama: o Censor rasgou um glossário com o vocabulário do engenho.',
    pistas: [
      { x: 24, y: 74, r: 5, nome: 'Chave na porteira', chave: true,
        t: 'Uma chave antiga pendurada na porteira, com a etiqueta “Engenho Santa Rosa — Cel. José Paulino”. É o engenho do avô do narrador.' },
      { x: 35, y: 30, r: 5, nome: 'Chaminé apagada',
        t: 'A chaminé apagada. Quando a fornalha de um engenho se apaga para sempre, diz-se que ele está de “fogo morto” — nome de outro romance que o autor publicaria em 1943.' },
      { x: 77, y: 58, r: 5, nome: 'Cadeira de balanço',
        t: 'Uma cadeira de balanço vazia na varanda da casa-grande. Aqui o velho coronel José Paulino recebeu o neto órfão, Carlos de Melo, que anos depois narra suas memórias de infância.' },
      { x: 47, y: 60, r: 6, nome: 'Canavial',
        t: 'O canavial. O autor escreveu o “ciclo da cana-de-açúcar”: romances sobre a decadência dos engenhos da Paraíba diante das usinas modernas.' }
    ],
    desafios: [
      { tipo: 'mc', t: 'Engenho Santa Rosa, o coronel José Paulino, o neto órfão Carlos de Melo... De qual obra são estes originais?',
        o: ['Casa-Grande & Senzala — Gilberto Freyre', 'O Cortiço — Aluísio Azevedo', 'Capitães da Areia — Jorge Amado', 'Menino de Engenho — José Lins do Rego', 'O Guarani — José de Alencar'], k: 3,
        e: 'Menino de Engenho (1932) abre o ciclo da cana-de-açúcar de José Lins do Rego. Casa-Grande & Senzala (1933) é um ensaio sociológico, não um romance.' },
      { tipo: 'ligar', t: 'Reconstitua o glossário rasgado: ligue cada palavra do engenho ao seu significado.',
        pares: [
          ['Casa-grande', 'residência do senhor de engenho e sua família'],
          ['Moenda', 'máquina que esmaga a cana para extrair o caldo'],
          ['Usina', 'indústria moderna que levou os velhos engenhos à falência'],
          ['Fogo morto', 'engenho que parou de funcionar para sempre']
        ],
        e: 'O vocabulário do engenho é parte do regionalismo de José Lins: ele registra um mundo patriarcal que estava desaparecendo.' },
      { tipo: 'mc', t: 'Em Menino de Engenho, Carlos de Melo, órfão, vai viver no engenho do avô. A narrativa caracteriza-se por',
        o: ['ser memorialista, em 1ª pessoa: o adulto relembra a infância no engenho.',
            'ser narrada em 3ª pessoa por um narrador distante e imparcial.',
            'retratar a vida urbana e moderna do Rio de Janeiro.',
            'idealizar os senhores de engenho como heróis românticos.',
            'usar versos livres e linguagem fragmentada, como um poema.'], k: 0,
        e: 'É um romance de memória, com forte carga autobiográfica: José Lins do Rego também cresceu no engenho do avô.' }
    ]
  },

  /* ---------------- 4 · SÃO BERNARDO ---------------- */
  {
    lugar: 'Fazenda em Alagoas', bg: 'img/cap4-escritorio.webp', pin: [75, 34],
    obra: 'São Bernardo', autor: 'Graciliano Ramos', ano: 1934,
    chegada: 'Um escritório em silêncio. O retrato de uma mulher observa a mesa onde alguém escreveu um livro.',
    letra: 'A', item: 'carta', itemNome: 'Carta rasgada',
    informante: 'telegrama',
    fala: [
      { q: 'telegrama', t: 'CENSOR USOU CÓDIGO PT CADA LETRA FOI TROCADA PELA SEGUINTE DO ALFABETO PT O NOME ESCONDIDO É A CHAVE PT ANSELMO' }
    ],
    notaFala: 'Telegrama: o Censor cifrou um nome trocando cada letra pela seguinte do alfabeto.',
    pistas: [
      { x: 88, y: 86, r: 5, nome: 'Carta rasgada', chave: true,
        t: 'Uma folha de carta rasgada no chão, com letras trocadas: NBEBMFOB. No romance, o marido encontra uma folha escrita pela esposa e, cego de ciúme, imagina uma traição.' },
      { x: 69, y: 17, r: 5, nome: 'Retrato oval',
        t: 'O retrato de uma mulher de olhar triste: a esposa do narrador, professora, generosa com os empregados. O marido não suporta que ela pense diferente dele.' },
      { x: 48, y: 56, r: 6, nome: 'Livro-caixa',
        t: 'Um livro-caixa cheio de números. O narrador, Paulo Honório, mede tudo em lucro e posse: a terra, as pessoas, até o casamento. A crítica chama isso de reificação — tratar pessoas como coisas.' },
      { x: 18, y: 32, r: 6, nome: 'Janela',
        t: 'Pela janela, as terras da fazenda, conquistadas por Paulo Honório com astúcia e violência. De guia de cego a fazendeiro rico, ele é o retrato do proprietário rural brutalizado.' }
    ],
    desafios: [
      { tipo: 'mc', t: 'Paulo Honório, a fazenda conquistada, o ciúme, o livro-caixa... De qual obra são estes originais?',
        o: ['Dom Casmurro — Machado de Assis', 'São Bernardo — Graciliano Ramos', 'Vidas Secas — Graciliano Ramos', 'Senhora — José de Alencar', 'O Quinze — Rachel de Queiroz'], k: 1,
        e: 'São Bernardo (1934). O ciúme lembra Dom Casmurro (1899), mas aqui o centro é a mentalidade do proprietário que transforma tudo em posse.' },
      { tipo: 'cifra', t: 'Decifre o nome escrito na carta. Cada letra foi trocada pela SEGUINTE do alfabeto (A virou B, B virou C...).',
        cod: 'NBEBMFOB', r: 'MADALENA',
        e: 'Madalena, a esposa de Paulo Honório. Sufocada pelo ciúme e pela brutalidade do marido, ela é a personagem que expõe a desumanização dele.' },
      { tipo: 'mc', t: 'Paulo Honório narra São Bernardo em 1ª pessoa, depois de perder Madalena. Ao escrever, ele',
        o: ['se apresenta como herói romântico, idealizado e sem defeitos.',
            'narra com total imparcialidade, como um narrador onisciente.',
            'reconhece que a ambição e o sentimento de propriedade o embruteceram e destruíram suas relações.',
            'faz uma defesa entusiasmada da vida urbana e industrial.',
            'abandona a crítica social em favor do humor e da paródia.'], k: 2,
        e: 'O romance é uma autoanálise amarga: Paulo Honório percebe tarde demais que a lógica do lucro o tornou incapaz de amar.' }
    ]
  },

  /* ---------------- 5 · CAPITÃES DA AREIA ---------------- */
  {
    lugar: 'Salvador, Bahia', bg: 'img/cap5-trapiche.webp', pin: [64, 49],
    obra: 'Capitães da Areia', autor: 'Jorge Amado', ano: 1937,
    chegada: 'Noite no cais. No velho trapiche abandonado, velas acesas denunciam que alguém mora ali.',
    letra: 'I', item: 'mapa-rolo', itemNome: 'Mapa a giz',
    informante: 'menino',
    fala: [
      { q: 'menino', t: 'Tá olhando o quê? Aqui é território dos Capitães da Areia. Eu sou Pedro Bala, o chefe.' },
      { q: 'menino', t: 'Essa cicatriz no rosto? Briga de faca com o antigo chefe. Ganhei. Meu pai morreu numa greve do cais... um dia eu ainda vou entender por quê.' },
      { q: 'menino', t: 'Teu Censor passou por aqui, sim. Disse que a gente é “caso de polícia”. Mas ninguém pergunta por que a gente tá na rua.' },
      { q: 'menino', t: 'Ele deixou uma lista com os nossos apelidos, tudo misturado. Se tu souber quem é quem, a gente te ajuda.' }
    ],
    notaFala: 'Pedro Bala: líder, cicatriz no rosto, filho de um estivador morto numa greve. No final, torna-se militante e organiza greves.',
    pistas: [
      { x: 14, y: 32, r: 6, nome: 'Mapa a giz', chave: true,
        t: 'Um mapa desenhado a giz na parede: rotas pelas ruas de Salvador, onde mais de cem meninos abandonados sobrevivem de pequenos furtos.' },
      { x: 18, y: 62, r: 5, nome: 'Velas',
        t: 'Velas e livros roubados. Um dos meninos, o Professor, lê histórias para os outros à luz de vela — e sonha em ser pintor.' },
      { x: 34, y: 17, r: 5, nome: 'Lanterna',
        t: 'Uma lanterna no trapiche. Em 1937, logo após o golpe do Estado Novo, exemplares deste romance foram queimados em praça pública em Salvador.' },
      { x: 85, y: 58, r: 6, nome: 'O mar',
        t: 'O mar da Bahia. Dora, a única menina do grupo, vira lenda: depois de morrer, para Pedro Bala ela se transforma numa estrela no céu.' }
    ],
    desafios: [
      { tipo: 'mc', t: 'O trapiche, Pedro Bala, o Professor, Dora... De qual obra são estes originais?',
        o: ['Gabriela, Cravo e Canela — Jorge Amado', 'O Cortiço — Aluísio Azevedo', 'Menino de Engenho — José Lins do Rego', 'Triste Fim de Policarpo Quaresma — Lima Barreto', 'Capitães da Areia — Jorge Amado'], k: 4,
        e: 'Capitães da Areia (1937). Gabriela (1958) também é de Jorge Amado, mas de uma fase posterior, mais voltada à crônica de costumes.' },
      { tipo: 'ligar', t: 'Desembaralhe a lista do Censor: ligue cada Capitão da Areia à sua descrição.',
        pares: [
          ['Pedro Bala', 'o líder, com uma cicatriz no rosto'],
          ['Professor', 'lê para o grupo e sonha ser pintor'],
          ['Sem-Pernas', 'manca e guarda mágoa do mundo'],
          ['Pirulito', 'religioso, quer seguir a vida de padre'],
          ['Volta Seca', 'admira Lampião e entra para o cangaço']
        ],
        e: 'Cada menino tem um destino diferente: o romance mostra como a sociedade empurra crianças pobres para a marginalidade.' },
      { tipo: 'mc', t: 'Em novembro de 1937, exemplares de Capitães da Areia foram queimados em praça pública em Salvador. O episódio revela que',
        o: ['o livro foi rejeitado pelos leitores por ser difícil de ler.',
            'as autoridades consideravam o livro ultrapassado, ligado ao Romantismo.',
            'o governo apoiava abertamente a literatura de denúncia social.',
            'o romance de 30 era visto como ameaça por denunciar a miséria e a injustiça social.',
            'a obra fazia propaganda do regime de Getúlio Vargas.'], k: 3,
        e: 'Sob o Estado Novo, romances engajados foram censurados e acusados de “subversão”. A literatura de 30 incomodava porque mostrava o Brasil real.' }
    ]
  },

  /* ---------------- 6 · POESIA DE 30 ---------------- */
  {
    lugar: 'Itabira, Minas Gerais', bg: 'img/cap6-itabira.webp', pin: [48.5, 71],
    obra: 'Alguma Poesia', autor: 'Carlos Drummond de Andrade', ano: 1930,
    chegada: 'Uma ladeira de pedra, a igreja ao fundo e a montanha de ferro. Aqui, o romance cede lugar à poesia.',
    letra: 'O', item: 'pena', itemNome: 'Pena e tinteiro',
    informante: 'telegrama',
    fala: [
      { q: 'telegrama', t: 'ÚLTIMA PISTA PT CENSOR DETESTA POESIA PT MISTUROU OS POETAS E SEUS TEMAS PT DEPOIS VOLTE AO RIO PT O COFRE ESPERA PT ANSELMO' }
    ],
    notaFala: 'Telegrama: o Censor misturou os poetas da geração de 30 e seus temas.',
    pistas: [
      { x: 65, y: 76, r: 6, nome: 'A pedra', chave: true,
        t: 'Uma pedra no meio da rua. O poema “No meio do caminho”, publicado em 1928, repete tanto a mesma imagem que causou escândalo — e virou um dos mais famosos do Brasil.' },
      { x: 42, y: 28, r: 6, nome: 'Montanha de ferro',
        t: 'A montanha de minério de ferro. O poeta nasceu em Itabira, em 1902. A cidade mineradora aparece em muitos de seus versos, sempre com melancolia e ironia.' },
      { x: 78, y: 47, r: 5, nome: 'Igreja',
        t: 'A igreja colonial. A poesia de 30 também teve uma vertente espiritualista, com poetas como Murilo Mendes, Jorge de Lima e Cecília Meireles.' },
      { x: 24, y: 19, r: 5, nome: 'Lampião',
        t: 'Um lampião aceso. No “Poema de sete faces”, o poeta conta que um anjo torto o mandou ser “gauche” na vida: deslocado, desajeitado, à margem.' }
    ],
    desafios: [
      { tipo: 'mc', t: 'Itabira, a pedra no meio do caminho, o poeta “gauche”... De quem são estes originais?',
        o: ['Olavo Bilac', 'Oswald de Andrade', 'Gonçalves Dias', 'Carlos Drummond de Andrade', 'Manuel Bandeira'], k: 3,
        e: 'Drummond estreou com Alguma Poesia (1930) e é o maior nome da poesia de 30. Bilac é parnasiano; Gonçalves Dias, romântico; Oswald e Bandeira marcaram a 1ª fase.' },
      { tipo: 'ligar', t: 'O Censor misturou tudo! Ligue cada poeta da geração de 30 à marca de sua poesia.',
        pares: [
          ['Carlos Drummond de Andrade', 'ironia, o sujeito “gauche” e o sentimento do mundo'],
          ['Cecília Meireles', 'lirismo musical e a passagem do tempo'],
          ['Vinicius de Moraes', 'sonetos de amor, como o “Soneto de Fidelidade”'],
          ['Murilo Mendes', 'imagens surrealistas e religiosidade']
        ],
        e: 'A poesia de 30 é diversa: social e existencial em Drummond, intimista em Cecília, amorosa em Vinicius, espiritual e surreal em Murilo.' },
      { tipo: 'mc', t: 'Sobre a poesia da 2ª fase do Modernismo (1930–1945), é correto afirmar que ela',
        o: ['abandona o verso livre e volta ao rigor parnasiano.',
            'consolida a liberdade formal de 1922 e amplia os temas — sociais, existenciais e espirituais —, às vezes retomando formas fixas como o soneto.',
            'dedica-se exclusivamente ao nacionalismo ufanista.',
            'recusa qualquer tema político ou social.',
            'limita-se ao poema-piada e à paródia.'], k: 1,
        e: 'Os poetas de 30 herdam as conquistas de 22, mas trocam a irreverência pela reflexão: o eu diante do mundo, da guerra, de Deus e do tempo.' }
    ]
  }
];

const FINAL = {
  resposta: 'SOCIAL',
  enigma: 'O Censor trocou a senha do cofre pelo nome do tipo de romance que ele tanto teme — o que denuncia a seca, a miséria e a exploração. Ordene as letras que você recolheu: “o romance de 30 é um romance ______”.',
  fala: [
    { q: 'editor', t: 'Ouvi o clique! O cofre abriu... e aqui estão as últimas páginas. Você conseguiu, Detetive {nome}!' },
    { q: 'editor', t: 'O Censor achou que bastava esconder os livros. Mas romances que mostram o Brasil real não se apagam: alguém sempre volta para lê-los.' }
  ]
};
