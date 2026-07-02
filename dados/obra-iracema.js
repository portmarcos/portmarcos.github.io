/* ATIVIDADE DE OBRA — Iracema (José de Alencar, 1865) */
const QUIZ_DADOS = {
  id: "obra-iracema",
  titulo: "Iracema — Atividade Completa",
  descricao: "José de Alencar, 1865 — a 'lenda do Ceará' e o mito de fundação do Brasil mestiço. 5 questões fechadas e 2 dissertativas.",
  tempoPorQuestao: 150,
  questoes: [
    { texto: "<p><strong>Trecho 1 — Abertura do livro</strong></p><p>\"Verdes mares bravios de minha terra natal, onde canta a jandaia nas frondes da carnaúba...\"</p><p class='fonte'>ALENCAR, José de. Iracema, 1865.</p>",
      pergunta: "A abertura do romance — invocação lírica à terra, ritmo de canto, vocabulário tupi — anuncia o projeto estético central da obra, que é:",
      opcoes: [
        "Criar uma prosa poética de cor local, capaz de fazer a língua portuguesa soar brasileira e indígena",
        "Reproduzir com exatidão etnográfica os costumes tabajaras, conforme os relatos dos cronistas",
        "Imitar o estilo épico de Camões, aplicando a métrica de Os Lusíadas à matéria americana",
        "Inaugurar no Brasil o romance realista de observação, voltado ao registro objetivo da natureza"
      ],
      correta: "Criar uma prosa poética de cor local, capaz de fazer a língua portuguesa soar brasileira e indígena",
      explicacao: "Alencar chamou Iracema de 'ensaio': queria provar que nossa prosa podia ter música própria. As comparações com fauna e flora ('mais rápida que a ema selvagem') e os nomes tupis constroem essa língua-canto." },
    { pergunta: "A leitura alegórica clássica parte do anagrama Iracema/América. Nessa chave, a entrega da índia ao guerreiro branco, seu definhamento e sua morte ao gerar Moacir representam:",
      opcoes: [
        "A colonização narrada como história de amor e sacrifício: a terra que se dá ao europeu e morre fundando o Brasil mestiço",
        "A vitória militar definitiva dos tabajaras sobre os invasores portugueses no litoral do Ceará",
        "O castigo exemplar que a religião católica reservava às uniões entre colonos e nativas",
        "A previsão da independência política, simbolizada pelo nascimento do menino longe de Portugal"
      ],
      correta: "A colonização narrada como história de amor e sacrifício: a terra que se dá ao europeu e morre fundando o Brasil mestiço",
      explicacao: "Iracema = América: a alegoria transforma a conquista em lenda de amor. O Romantismo precisava de um mito de origem nobre para a nação recém-independente — e Alencar o escreveu." },
    { pergunta: "Moacir, o filho de Iracema e Martim, recebe nome que significa \"nascido do meu sofrimento\". No conjunto da alegoria, o menino simboliza:",
      opcoes: [
        "O primeiro brasileiro: o povo novo, mestiço, gerado da dor da terra e levado pelo colonizador",
        "A continuidade da linhagem tabajara, que reconquistará o território na geração seguinte",
        "O fracasso da catequese, pois a criança permanece fiel aos deuses indígenas da mãe",
        "A riqueza futura da colônia, anunciada pelas profecias do pajé Araquém no batismo"
      ],
      correta: "O primeiro brasileiro: o povo novo, mestiço, gerado da dor da terra e levado pelo colonizador",
      explicacao: "O 'filho da dor' fecha a alegoria: o Brasil nasce do sacrifício da mãe-terra. Que Martim parta levando o menino — e deixando a sepultura para trás — é detalhe que a leitura crítica não deve perdoar." },
    { pergunta: "Ao amar Martim, Iracema viola o voto que a consagrava a Tupã como guardiã do segredo da jurema. Na economia do enredo, essa transgressão:",
      opcoes: [
        "Instala o conflito trágico: o amor exige a ruptura com o sagrado e com o próprio povo, e será pago com a vida",
        "É perdoada pelo pajé Araquém, que abençoa a união e celebra a paz entre tabajaras e pitiguaras",
        "Revela o caráter rebelde da heroína, construída por Alencar como crítica à submissão feminina",
        "Não tem consequências narrativas, funcionando apenas como detalhe pitoresco dos costumes locais"
      ],
      correta: "Instala o conflito trágico: o amor exige a ruptura com o sagrado e com o próprio povo, e será pago com a vida",
      explicacao: "A estrutura é de tragédia: dever sagrado × paixão. Ao escolher Martim, Iracema perde a taba, a família e a proteção de Tupã — o definhamento final é o cumprimento do destino que ela mesma assinou." },
    { pergunta: "A crítica contemporânea costuma ler Iracema 'a contrapelo'. Essa releitura aponta que a doçura do estilo de Alencar:",
      opcoes: [
        "Embala e suaviza uma violência histórica real — a destruição dos povos e a posse da terra —, que a lenda torna palatável",
        "Esconde a militância abolicionista do autor, que usava o indianismo para driblar a censura imperial",
        "Comprova que a colonização do Ceará foi, de fato, pacífica e baseada em alianças amorosas",
        "Resulta da tradução literal de cantos tupis autênticos, recolhidos pelo escritor em viagem"
      ],
      correta: "Embala e suaviza uma violência histórica real — a destruição dos povos e a posse da terra —, que a lenda torna palatável",
      explicacao: "Quem narra a fundação — e quem morre para a lenda ficar bonita? A pergunta pós-colonial não anula a beleza do livro: torna sua leitura mais rica e mais honesta." },
    { tipo: "aberta",
      pergunta: "DISSERTATIVA — Por que Alencar subintitula a obra 'lenda do Ceará', e não 'romance' ou 'história'? Relacione a escolha ao projeto romântico de construção da identidade nacional.",
      respostaModelo: "'Lenda' situa o livro no terreno do mito, não do documento: Alencar não quer contar a colonização como ela foi, mas fundar uma origem poética para a nação. O Romantismo pós-independência precisava de um passado heroico próprio — sem Idade Média nem cavaleiros, o Brasil elegeu o indígena idealizado como seu 'cavaleiro' e a natureza como seu castelo. Chamando o texto de lenda, o autor assume o gesto de criar tradição: Iracema vira a mãe mítica do Ceará (a própria sepultura dá nome à terra), e a literatura cumpre a tarefa de inventar a memória que a história não oferecia." },
    { tipo: "aberta",
      pergunta: "DISSERTATIVA — Compare a representação do indígena em Iracema com o que a história registra sobre a colonização. O que o indianismo romântico mostra — e o que ele silencia?",
      respostaModelo: "O indianismo mostra um nativo idealizado: belo, leal, de valores cavaleirescos (Poti, a 'fidelidade'; Iracema, o amor absoluto), vivendo em harmonia com a natureza. Silencia a violência do processo real: guerras de extermínio, escravização, epidemias, catequese forçada e o apagamento de línguas e culturas. No romance, a índia se entrega por amor e morre docemente; na história, os povos foram destruídos ou expulsos. Reconhecer esse silêncio não destrói a obra — explica sua função: o mito embeleza a origem para que a nação possa se orgulhar dela. Cabe ao leitor de hoje admirar a construção e, ao mesmo tempo, perguntar pelos que a lenda deixou sem voz." }
  ]
};
