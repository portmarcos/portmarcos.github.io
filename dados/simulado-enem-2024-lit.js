/* ENEM 2024 — Literatura e Arte · Questões reais (Caderno 1 Azul, 1º dia) */
const QUIZ_DADOS = {
  id: "enem-2024-literatura",
  titulo: "ENEM 2024 — Literatura e Arte (Prova Real)",
  descricao: "10 questões reais do ENEM 2024 (Caderno Azul): Alencar, Machado, Graciliano, Racionais MCs, Visconti, Modigliani e leitura de imagem.",
  tempoPorQuestao: 160,
  questoes: [
    { texto: "<p><strong>Senhora</strong> (José de Alencar — fragmento condensado)</p><p>— Eu lhe juro, Aurélia. Estes lábios nunca tocaram a face de outra mulher que não fosse minha mãe. Meu primeiro beijo de amor, guardei-o para minha esposa, para ti...<br>— Ou de outra mais rica! — disse ela, afastando-o com a ponta dos dedos. — Representamos uma comédia [...]. Sou rica, muito rica; sou milionária; precisava de um marido [...]. O senhor estava no mercado; comprei-o. Custou-me cem contos de réis, foi barato [...]. Eu daria o dobro, o triplo, toda a minha riqueza por este momento.</p><p class='fonte'>ENEM 2024, Questão 35 (adaptado). ALENCAR, J. Senhora. Rio de Janeiro: Tecnoprint, 2003.</p>",
      pergunta: "Ao tematizar o casamento, esse fragmento reproduz uma concepção de literatura romântica evidenciada na:",
      opcoes: [
        "Interferência da riqueza sobre o amor",
        "Defesa da igualdade de gêneros",
        "Importância atribuída à castidade",
        "Indignação com as injustiças sociais",
        "Valorização das relações interpessoais"
      ],
      correta: "Interferência da riqueza sobre o amor",
      explicacao: "(ENEM 2024, Q35) Aurélia “compra” o marido por cem contos de réis: o dinheiro corrompe e mediatiza a relação amorosa. Em Senhora, Alencar denuncia como o casamento por interesse, regido pelo dinheiro, deforma o amor — eixo central do romance." },

    { texto: "<p><strong>Esaú e Jacó</strong> (Machado de Assis — fragmento condensado)</p><p>No último baile do Império, na Ilha Fiscal, Flora não se aborrece: encanta-se com a festa, o mar, os navios na sombra, a cidade com lampiões de gás. Invejava a princesa imperial, futura imperatriz, com “o absoluto poder de despedir ministros e damas [...] e ficar só, no mais recôndito do paço, fartando-se de contemplação ou de música”. Era assim que Flora definia o ofício de governar. Alguém lhe disse: “Toda alma livre é imperatriz!”</p><p class='fonte'>ENEM 2024, Questão 31 (adaptado). ASSIS, M. Esaú e Jacó. Rio de Janeiro: Nova Aguilar, 1974.</p>",
      pergunta: "Convidada para o último baile do Império, Flora devaneia sobre aspectos daquele contexto, no qual o narrador ironiza a:",
      opcoes: [
        "Alienação da elite em relação ao fim da monarquia",
        "Promessa de esperança com o futuro regime",
        "Perspectiva da contemplação distanciada da capital",
        "Animosidade entre população e membros da nobreza",
        "Fantasia de amor e de casamento da mulher burguesa"
      ],
      correta: "Alienação da elite em relação ao fim da monarquia",
      explicacao: "(ENEM 2024, Q31) O “último baile do Império” ocorre às vésperas da Proclamação da República. Enquanto a monarquia rui, Flora sonha com o poder e a contemplação da princesa — Machado ironiza a cegueira da elite diante do colapso iminente do regime." },

    { texto: "<p><strong>São Bernardo</strong> (Graciliano Ramos — fragmento condensado)</p><p>— Vá para o inferno, Gondim. Você acanalhou o troço [...]. Há lá ninguém que fale dessa forma!<br>Azevedo Gondim [...] replicou amuado que um artista não pode escrever como fala.<br>— Não pode? — perguntei com assombro. E por quê?<br>— Foi assim que sempre se fez. A literatura é a literatura, seu Paulo [...]. Se eu fosse escrever como falo, ninguém me lia.</p><p class='fonte'>ENEM 2024, Questão 24 (adaptado). RAMOS, G. São Bernardo. Rio de Janeiro: Record, 2009.</p>",
      pergunta: "Nesse fragmento, a discussão dos personagens traz à cena um debate acerca da escrita que:",
      opcoes: [
        "Diferencia a produção artística do registro padrão da língua",
        "Aproxima a literatura de dialetos sociais de pouco prestígio",
        "Defende a relação entre a fala e o estilo literário de um autor",
        "Contrapõe o preciosismo linguístico a situações de coloquialidade",
        "Associa o uso da norma culta à ocorrência de desentendimentos pessoais"
      ],
      correta: "Diferencia a produção artística do registro padrão da língua",
      explicacao: "(ENEM 2024, Q24) Gondim sustenta que “um artista não pode escrever como fala” — opõe a linguagem literária convencional ao registro da fala cotidiana. O debate gira em torno dessa distinção entre arte escrita e oralidade comum." },

    { texto: "<p><strong>Capítulo 4, versículo 3</strong> (Racionais MCs — fragmento)</p><p>Minha palavra vale um tiro, eu tenho muita munição / Na queda ou na ascensão, minha atitude vai além / E tem disposição pro mal e pro bem / Talvez eu seja um sádico ou um anjo, um mágico / Ou juiz, ou réu, o bandido do céu / Malandro ou otário, quase sanguinário / Franco atirador se for necessário / Revolucionário, insano, ou marginal / Antigo e moderno, imortal.</p><p class='fonte'>ENEM 2024, Questão 22 (adaptado). RACIONAIS MCs. Sobrevivendo ao inferno. São Paulo: Cosa Nostra, 1997.</p>",
      pergunta: "Considerando que os discos do Racionais tematizam a violência que estrutura a sociedade, na letra dessa canção essa violência manifesta-se:",
      opcoes: [
        "Na referência a termos bélicos, que sinaliza uma crítica social à opressão da população das periferias",
        "Como metáfora da desigualdade, que associa a ideia de justiça a valores históricos negativos",
        "Como procedimento metalinguístico, que concebe a palavra como uma forma de combate e insubordinação",
        "Nas definições ambíguas do enunciador, que inverte e relativiza as representações da maldade e da bondade",
        "Na menção à imortalidade, que sugere a possibilidade de resistência para além da dicotomia entre vida e morte"
      ],
      correta: "Na referência a termos bélicos, que sinaliza uma crítica social à opressão da população das periferias",
      explicacao: "(ENEM 2024, Q22) “Vale um tiro”, “munição”, “franco atirador”: o vocabulário de guerra traduz a violência que estrutura a vida na periferia. A palavra do MC se arma como denúncia social da opressão — leitura sustentada pelo texto crítico de apoio." },

    { texto: "<p><strong>Três meninas no jardim</strong> (Eliseu Visconti, óleo sobre tela, 1935): a pintura retrata três meninas em um jardim florido, captadas em meio à luz e à vegetação, com pinceladas soltas que dissolvem os contornos e privilegiam a impressão luminosa do instante. Visconti desenvolveu sua obra no Brasil com grande influência das escolas europeias.</p><p class='fonte'>ENEM 2024, Questão 25 (adaptado). Disponível em: www.eliseuvisconti.com.br</p>",
      pergunta: "Em sua pintura Três meninas no jardim, há:",
      opcoes: [
        "Efeitos fugazes de luz e movimento, que remetem à estética impressionista",
        "Culto à fluidez e ao progresso, nos moldes do ideário futurista",
        "Valorização de formas decompostas, a exemplo do estilo cubista",
        "Expressão do sonho e do inconsciente, que dialoga com a proposta surrealista",
        "Tematização de elementos cotidianos, que resgata modelos de representação da arte realista"
      ],
      correta: "Efeitos fugazes de luz e movimento, que remetem à estética impressionista",
      explicacao: "(ENEM 2024, Q25) Pinceladas soltas, contornos dissolvidos e captura da luz e do instante são marcas do Impressionismo. Visconti foi o grande introdutor dessa estética no Brasil — daí a luz e o movimento fugazes da cena no jardim." },

    { texto: "<p>Comparação entre duas esculturas: <strong>Texto I</strong> — “Cabeça de uma figura feminina”, anônimo, cerca de 2700–2500 a.C., mármore (Metropolitan Museum); <strong>Texto II</strong> — “Cabeça de mulher”, de Modigliani, cerca de 1910–1911, calcário (National Gallery). Ambas apresentam rostos alongados, narizes prolongados e extrema simplificação dos traços — separadas por mais de 2500 anos.</p><p class='fonte'>ENEM 2024, Questão 36 (adaptado). WOLKOFF, J. Disponível em: www.artsy.net</p>",
      pergunta: "A leitura comparativa das duas esculturas, separadas por mais de 2500 anos, indica a:",
      opcoes: [
        "Persistência de padrões estéticos em diferentes épocas e culturas",
        "Valorização da arte antiga por artistas contemporâneos",
        "Resistência da arte escultórica aos avanços tecnológicos",
        "Simplificação da forma em razão do tipo de material utilizado",
        "Ausência de detalhes como traço distintivo da arte tradicional popular"
      ],
      correta: "Persistência de padrões estéticos em diferentes épocas e culturas",
      explicacao: "(ENEM 2024, Q36) A semelhança surpreendente (rostos alongados, simplificação) entre uma peça de 2700 a.C. e uma de Modigliani revela que certos padrões estéticos atravessam milênios e culturas distintas — não é Modigliani “copiando”, e sim a recorrência de uma forma." },

    { texto: "<p><strong>Capitu: memórias póstumas</strong> (Domício Proença Filho — fragmento condensado)</p><p>O autor conta que conheceu Bentinho e Capitu aos quinze anos; os “olhos de água” o seduziram, mas também o indignou o narrador, que constrói “acusação e vilipêndio” sem dar à personagem “qualquer direito de defesa”. Veio então a iluminação: dar voz plena àquela mulher. O resultado é o livro em que, além-túmulo, como Brás Cubas, a “dona dos olhos de ressaca” assume seu discurso e sua verdade.</p><p class='fonte'>ENEM 2024, Questão 28 (adaptado). PROENÇA FILHO, D. Capitu: memórias póstumas. Rio de Janeiro: Atrium, 1998.</p>",
      pergunta: "Para apresentar a apropriação literária que faz da obra de Machado de Assis, o autor desse texto:",
      opcoes: [
        "Relaciona aspectos centrais da obra original e, então, reafirma o ponto de vista adotado",
        "Explica os pontos de vista de críticos da literatura e, por fim, os redimensiona na discussão",
        "Introduz elementos relevantes da história e, na sequência, apresenta motivos para refutá-los",
        "Justifica as razões pelas quais adotou certa abordagem e, em seguida, reconsidera tal escolha",
        "Contextualiza o enredo de forma subjetiva e, na conclusão, explicita o foco narrativo a ser assumido"
      ],
      correta: "Relaciona aspectos centrais da obra original e, então, reafirma o ponto de vista adotado",
      explicacao: "(ENEM 2024, Q28) O autor percorre os elementos centrais de Dom Casmurro (o narrador-acusador, a falta de defesa de Capitu) e conclui reafirmando sua escolha: dar voz à personagem. Estrutura: retoma a obra → confirma o ponto de vista que sustenta seu livro." },

    { texto: "<p><strong>Marília acorda</strong> (Natalia Borges Polesso — fragmento condensado)</p><p>A narradora idosa toma café em golinhos para não queimar os lábios ressequidos. Marília a ajuda a levantar com o andador, abre a porta para a manhã, põe uma manta de tricô sobre suas costas. “Ela aperta meus ombros com muita força, porque mesmo depois de todos esses anos, não descobriu a medida certa do carinho. Eu gosto. Porque entendo que naquele ato, naquela força, está o nosso carinho.”</p><p class='fonte'>ENEM 2024, Questão 32 (adaptado). POLESSO, N. B. Amora. Porto Alegre: Não Editora, 2015.</p>",
      pergunta: "Nesse trecho, o drama do declínio físico da narradora transmite uma sensibilidade lírica centrada na:",
      opcoes: [
        "Atmosfera de afeto fortalecido pelo convívio",
        "Necessidade de fazer adaptações na casa",
        "Condição de dependência de outras pessoas",
        "Determinação de manter a regularidade da rotina",
        "Aceitação das restrições de mobilidade da personagem"
      ],
      correta: "Atmosfera de afeto fortalecido pelo convívio",
      explicacao: "(ENEM 2024, Q32) Apesar do declínio do corpo, o foco lírico é o amor construído no tempo: o aperto “com muita força” que a narradora interpreta como carinho. O afeto sedimentado pelo convívio é o centro emocional do texto, acima da fragilidade física." },

    { texto: "<p><strong>Texto I</strong> — Carta de Graciliano Ramos a Portinari (1946) sobre a série Retirantes: “as deformações e essa miséria existem fora da arte [...]. Numa sociedade sem classes e sem miséria, seria possível fazer-se aquilo? [...] Chego a pensar que teríamos cromos, anjinhos cor-de-rosa, e isto me horroriza.”<br><strong>Texto II</strong> — Antônio Prata: “A literatura, o cinema e o teatro vêm se transformando num exercício de lacração [...]. A pessoa sai da leitura com suas certezas reforçadas. A arte é onde tentamos nos mostrar nus, com todos os nossos defeitos.”</p><p class='fonte'>ENEM 2024, Questão 30 (adaptado).</p>",
      pergunta: "No que diz respeito à arte, o posicionamento de Antônio Prata (Texto II) aproxima-se da tese de Graciliano Ramos (Texto I), uma vez que ambos:",
      opcoes: [
        "Afirmam o necessário caráter desestabilizador da arte",
        "Defendem a dignidade do ofício dos artistas",
        "Concluem que a arte reforça crenças pessoais",
        "Apresentam a pobreza como inspiração para a arte",
        "Atestam que há mudanças significativas na produção artística"
      ],
      correta: "Afirmam o necessário caráter desestabilizador da arte",
      explicacao: "(ENEM 2024, Q30) Graciliano rejeita a arte de “anjinhos cor-de-rosa” e defende mostrar a miséria real; Prata critica a arte que “reforça certezas” e quer mostrar o humano “nu, com defeitos”. Ambos defendem a arte que incomoda e desestabiliza, não a que conforta." },

    { texto: "<p>O fragmento de <em>Senhora</em>, de José de Alencar (cobrado na Q35 do ENEM 2024), pertence a um conjunto de romances do autor conhecido como “perfis de mulher”, ao lado de obras como <em>Diva</em> e <em>Lucíola</em>. O romance gira em torno de Aurélia Camargo, que, ao enriquecer, decide “comprar” como marido o homem que a havia rejeitado por falta de dote.</p><p class='fonte'>Questão de contextualização (autoral), com base no ENEM 2024.</p>",
      pergunta: "O romance Senhora, de José de Alencar, filia-se a qual movimento literário brasileiro?",
      opcoes: [
        "Romantismo",
        "Realismo",
        "Naturalismo",
        "Modernismo",
        "Arcadismo"
      ],
      correta: "Romantismo",
      explicacao: "Questão autoral de contextualização. Senhora (1875) é um romance urbano do Romantismo brasileiro, integrando os 'perfis de mulher' de José de Alencar. Embora a crítica social ao casamento por interesse antecipe temas realistas, a obra mantém o idealismo amoroso e a estrutura romântica." }
  ]
};
