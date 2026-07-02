/* QUIZ — Obras Literárias I (revisado: alternativas equiparadas, nível aprofundado) */
const QUIZ_DADOS = {
  id: "obras-enem",
  titulo: "Quiz — Obras Literárias do ENEM",
  descricao: "10 questões aprofundadas sobre as obras mais cobradas. Atenção: as alternativas são parecidas de propósito — leia todas antes de responder.",
  tempoPorQuestao: 100,
  questoes: [
    { pergunta: "Em Memórias Póstumas de Brás Cubas, a condição de 'defunto autor' interessa menos como fantasia e mais como recurso porque:",
      opcoes: [
        "Liberta o narrador de qualquer conveniência social, permitindo a franqueza impiedosa sobre si e sua classe",
        "Garante ao relato a objetividade científica que o Naturalismo da época exigia dos romancistas",
        "Permite ao narrador prever o futuro das personagens e antecipar o desfecho de cada episódio",
        "Aproxima o romance do gênero fantástico, principal filiação estética do Realismo machadiano"
      ],
      correta: "Liberta o narrador de qualquer conveniência social, permitindo a franqueza impiedosa sobre si e sua classe",
      explicacao: "Morto, Brás nada deve ao 'olhar da opinião': confessa mesquinharias e expõe a elite do Império sem medo. O recurso é irônico, não fantástico — e Machado manteve distância do cientificismo naturalista." },
    { pergunta: "Sobre a célebre dúvida de Dom Casmurro — Capitu traiu Bentinho? —, a leitura mais sustentada pela construção do romance é a de que:",
      opcoes: [
        "A pergunta é indecidível, pois só temos a versão de um narrador interessado em provar a culpa da ré",
        "A traição é confirmada pela carta que Escobar deixa a Sancha e que Bentinho transcreve no final",
        "A inocência de Capitu é atestada pelo narrador onisciente que corrige Bentinho nos últimos capítulos",
        "A dúvida se resolve no exame de sangue que Ezequiel realiza ao voltar da Suíça, já adulto"
      ],
      correta: "A pergunta é indecidível, pois só temos a versão de um narrador interessado em provar a culpa da ré",
      explicacao: "Não há carta, exame nem narrador corretor: tudo passa pela memória do marido ciumento e advogado. A indecidibilidade não é falha — é o projeto do livro." },
    { pergunta: "A alegoria de Iracema (Alencar) costuma ser lida a partir do anagrama do nome da heroína. Nessa chave, a morte de Iracema após gerar Moacir representa:",
      opcoes: [
        "O sacrifício da terra americana na fundação do Brasil mestiço, embalado pelo lirismo da lenda",
        "A punição religiosa imposta pelo deus Tupã à índia que revelou aos brancos o segredo da jurema",
        "O triunfo definitivo do povo tabajara sobre os pitiguaras na guerra pelo litoral do Ceará",
        "A recusa do colonizador português em reconhecer o filho nascido da união com a nativa"
      ],
      correta: "O sacrifício da terra americana na fundação do Brasil mestiço, embalado pelo lirismo da lenda",
      explicacao: "Iracema = América: a virgem que se entrega, sofre e morre gerando o 'filho da dor' encena a colonização como mito de origem — beleza que a leitura crítica deve saber desconfiar." },
    { pergunta: "Os títulos das partes de Senhora (Alencar) — Preço, Quitação, Posse, Resgate — indicam que o romance organiza o enredo amoroso segundo:",
      opcoes: [
        "O vocabulário das transações comerciais, denunciando o casamento burguês como negócio",
        "As etapas do processo judicial movido por Aurélia contra a família de Fernando Seixas",
        "Os rituais católicos que marcavam os noivados da corte no Segundo Reinado",
        "A ordem cronológica das cartas trocadas pelos noivos durante o longo período de separação"
      ],
      correta: "O vocabulário das transações comerciais, denunciando o casamento burguês como negócio",
      explicacao: "Aurélia literalmente compra o marido que a preterira por um dote maior; os títulos mercantis estendem a metáfora ao livro inteiro. Crítica social feita ainda dentro do Romantismo." },
    { pergunta: "Dizer que, em O Cortiço (Aluísio Azevedo), a habitação coletiva é a verdadeira protagonista significa que:",
      opcoes: [
        "O espaço aparece como organismo vivo que nasce, cresce e molda o destino de seus moradores",
        "A narrativa é contada do ponto de vista do prédio, em monólogo interior experimental",
        "Nenhuma personagem humana recebe nome próprio ao longo de todo o romance naturalista",
        "O cortiço resiste intacto ao final, enquanto todas as personagens humanas morrem ou partem"
      ],
      correta: "O espaço aparece como organismo vivo que nasce, cresce e molda o destino de seus moradores",
      explicacao: "O São Romão 'acorda', 'fervilha', devora: o determinismo naturalista faz do meio uma força que esmaga o indivíduo — Jerônimo 'abrasileirado' é o exemplo clássico." },
    { pergunta: "Em Vidas Secas (Graciliano Ramos), a quase ausência de diálogos e o uso intenso do discurso indireto livre servem para:",
      opcoes: [
        "Dar voz interior a personagens excluídas da linguagem, cuja mudez é parte da opressão que sofrem",
        "Acelerar o ritmo do enredo, aproximando o romance da estrutura dinâmica do roteiro de cinema",
        "Demonstrar a superioridade intelectual do narrador culto sobre os retirantes analfabetos",
        "Reproduzir com exatidão fonética o falar regional nordestino, projeto central do autor"
      ],
      correta: "Dar voz interior a personagens excluídas da linguagem, cuja mudez é parte da opressão que sofrem",
      explicacao: "Fabiano 'não sabe se defender' porque as palavras lhe foram negadas; o indireto livre revela por dentro o que ele não consegue dizer — inclusive na consciência da cachorra Baleia." },
    { pergunta: "Em Grande Sertão: Veredas, a revelação final sobre Diadorim ressignifica retrospectivamente:",
      opcoes: [
        "Todo o conflito interior de Riobaldo, que vivera o amor como tentação demoníaca e culpa",
        "A geografia dos gerais, revelada no último capítulo como espaço puramente imaginário",
        "O resultado da batalha do Paredão, que passa a ser narrado como vitória de Hermógenes",
        "A linguagem do narrador, que abandona os neologismos e adota a norma culta no desfecho"
      ],
      correta: "Todo o conflito interior de Riobaldo, que vivera o amor como tentação demoníaca e culpa",
      explicacao: "Descobrir que Diadorim era Maria Deodorina transforma a 'tentação do demo' em tragédia de amor impossível — e reabre a pergunta do pacto: o diabo existe ou 'o que existe é o homem humano'?" },
    { pergunta: "A trajetória pública do Jeca Tatu (Urupês, Monteiro Lobato) inclui uma reviravolta importante: anos após criá-lo, o próprio Lobato:",
      opcoes: [
        "Retratou-se, afirmando que o caboclo 'não é assim, está assim' — doente e abandonado pelo Estado",
        "Transformou o personagem em herói militar das campanhas de vacinação do governo Vargas",
        "Vendeu os direitos do personagem, que passou a símbolo oficial da reforma agrária no país",
        "Reescreveu o conto ambientando-o na cidade, onde o Jeca enriquece como comerciante"
      ],
      correta: "Retratou-se, afirmando que o caboclo 'não é assim, está assim' — doente e abandonado pelo Estado",
      explicacao: "A retratação (ligada às campanhas sanitaristas) muda o sentido do personagem: a 'preguiça' era verminose e abandono. O Jeca da propaganda do Biotônico nasceu daí." },
    { pergunta: "Capitães da Areia (Jorge Amado) foi queimado em praça pública pelo Estado Novo em 1937. O incômodo do regime se explica porque o romance:",
      opcoes: [
        "Denuncia o abandono da infância pobre e aponta a desigualdade — não o caráter — como origem do crime",
        "Defende abertamente a restauração da monarquia como solução para a pobreza urbana de Salvador",
        "Retrata os meninos do trapiche como irrecuperáveis, contrariando a propaganda oficial de ordem",
        "Revela documentos secretos do governo sobre o tratamento dado aos menores infratores na Bahia"
      ],
      correta: "Denuncia o abandono da infância pobre e aponta a desigualdade — não o caráter — como origem do crime",
      explicacao: "Pedro Bala termina líder operário: o livro politiza a questão social num momento de censura. A fogueira só confirmou o alcance da denúncia." },
    { pergunta: "Quarto de Despejo (Carolina Maria de Jesus) ocupa lugar singular na literatura brasileira porque:",
      opcoes: [
        "Leva ao centro do sistema literário o testemunho direto de uma mulher negra e favelada, sem mediação ficcional",
        "Inaugura no país o romance policial de ambientação urbana, escrito em linguagem jornalística",
        "Adapta para a prosa brasileira as técnicas do nouveau roman francês dos anos cinquenta",
        "Reúne crônicas publicadas em jornais cariocas sobre o cotidiano elegante da zona sul"
      ],
      correta: "Leva ao centro do sistema literário o testemunho direto de uma mulher negra e favelada, sem mediação ficcional",
      explicacao: "O diário do Canindé — fome, trabalho, escrita como resistência — virou fenômeno mundial em 1960 e fundou uma linhagem que chega à literatura periférica de hoje." }
  ]
};
