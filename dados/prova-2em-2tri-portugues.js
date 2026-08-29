/* Prova — 2º Ano EM, 2º Trimestre 2026 (Língua Portuguesa)
   15 questões cobrindo os assuntos pedidos pelo professor: Período simples
   e composto, Orações coordenadas e subordinadas, Tipos de sujeito,
   Vocativo, Concordância verbal, Pontuação, Parnasianismo e Simbolismo,
   Interpretação textual (4 questões, 2 textos-base), Memórias Póstumas
   de Brás Cubas (1 questão) e Variação Linguística (1 questão multimodal,
   texto + tirinha).
   Estado em 28/ago/2026 (sessão de contextualização com questões reais):
   13 das 15 questões são reais de vestibular (majoritariamente FUVEST/
   Unicamp/ITA, via dataset acadêmico BLUEX, mais uma questão multimodal
   do ENEM reaproveitada do banco enem.html já auditado), cada uma com
   texto de apoio real. Só 2 seguem pedagógicas por falta de substituto
   real e contextualizado confiável: Período simples/composto (tópico 1)
   e Vocativo (tópico 5) — buscas extensas (WebSearch + varredura no
   dataset BLUEX inteiro) não encontraram nenhuma questão real de
   Fuvest/Unicamp pedindo essa classificação específica a partir de um
   texto de apoio. Questões com texto de apoio maior usam
   tempoQuestao:300 (5 min) em vez do padrão de 120s. */
const QUIZ_DADOS = {
  id: "prova-2em-2tri-2026-portugues",
  titulo: "Prova — 2º Ano EM · 2º Trimestre (Língua Portuguesa)",
  descricao: "15 questões misturando sintaxe do período (simples/composto, orações coordenadas e subordinadas, tipos de sujeito, vocativo), gramática (concordância verbal, pontuação), literatura (Parnasianismo, Simbolismo, Memórias Póstumas de Brás Cubas) e interpretação de texto.",
  tempoPorQuestao: 120,
  questoes: [

    /* 1. Período simples e composto */
    { pergunta: "Assinale a alternativa em que o período é composto (duas orações, com dois verbos):",
      opcoes: ["O professor explicou a matéria com calma.", "Os alunos chegaram cedo hoje.", "Estudei bastante, mas não tirei uma boa nota.", "A prova de português será na sexta-feira."],
      correta: "Estudei bastante, mas não tirei uma boa nota.",
      explicacao: "Período composto é aquele que tem duas ou mais orações, ou seja, dois ou mais verbos. Em \"Estudei bastante, mas não tirei uma boa nota\" há dois verbos (\"estudei\" e \"tirei\"), ligados pela conjunção \"mas\" — logo, é composto. As demais alternativas têm apenas um verbo cada, sendo períodos simples (uma só oração)." },

    /* 2. Orações coordenadas (real, contextualizada — FUVEST 1992) */
    { tempoQuestao: 300, texto: `<p>O trecho abaixo faz parte de um discurso do empresário Ricardo Semler dirigido a empresários brasileiros, no qual ele reflete sobre a posição econômica do Brasil e o papel da elite empresarial do país diante das desigualdades sociais do início dos anos 1990.</p>
      <p class="fonte">RICARDO SEMLER. Discurso de Semler aos Empresários. Folha de S. Paulo, 11/09/1991 (texto usado na prova de Português da FUVEST 1992).</p>`,
      pergunta: "Dentre os períodos a seguir, retirados do discurso, assinale aquele que é composto por coordenação e contém uma oração coordenada sindética adversativa:",
      opcoes: ["A frustração cresce e a desesperança não cede.", "O que dizer sem resvalar para o pessimismo, a crítica pungente ou a auto-absolvição?", "É também ocioso pensar que nós, da tal elite, temos riqueza suficiente para distribuir.", "Em termos mundiais somos irrelevantes como potência econômica, mas ao mesmo tempo extremamente representativos como população."],
      correta: "Em termos mundiais somos irrelevantes como potência econômica, mas ao mesmo tempo extremamente representativos como população.",
      explicacao: "Esse período tem duas orações independentes ligadas pela conjunção adversativa \"mas\", que marca o contraste entre a irrelevância econômica do Brasil no cenário mundial e sua representatividade populacional — por isso é uma oração coordenada sindética adversativa. Em \"A frustração cresce e a desesperança não cede\", a conjunção \"e\" também liga duas orações coordenadas, mas de sentido aditivo, não adversativo. Em \"O que dizer sem resvalar...\", há um único verbo no infinitivo (\"dizer\"), o que caracteriza período simples. Em \"É também ocioso pensar que nós...temos riqueza suficiente...\", o verbo \"temos\" introduz uma oração subordinada substantiva objetiva direta de \"pensar\" — período composto por subordinação, não por coordenação. (Fonte: FUVEST 1992, discurso de Ricardo Semler, Folha de S. Paulo, 11/09/1991.)" },

    /* 3. Orações subordinadas adverbiais (real, contextualizada — FUVEST 2021) */
    { tempoQuestao: 300, texto: `<p>Uma última gargalhada estrondosa. E depois, o silêncio. O palhaço jazia imóvel no chão. Mas seu rosto continua sorrindo, para sempre. Porque a carreira original do Coringa era para durar apenas 30 páginas. O tempo de envenenar Gotham, sequestrar Robin, enfiar um par de sopapos no Homem-Morcego e disparar o primeiro "vou te matar" na sua relação.</p>
      <p>Na briga final do Batman nº 1, o "horripilante bufão" sofria um final digno de sua desumana ironia: ao tropeçar, cravava sua própria adaga no peito. Assim decidiram e desenharam seus pais, os artistas Bill Finger, Bob Kane e Jerry Robinson. Entretanto, o criminoso mostrou, já em sua primeira aventura, um enorme talento para se rebelar contra a ordem estabelecida. Seu carisma seduziu a editora DC Comics, que impôs o acréscimo de um quadrinho. Já dentro da ambulância, vinha à tona "um dado desconcertante". E então um médico sentenciava: "Continua vivo. E vai sobreviver!".</p>
      <p class="fonte">TOMMASO KOCH. "O Coringa completa 80 anos e na Espanha ganha duas HQs, que inspiram debates filosóficos sobre a liberdade". El País, junho de 2020 (texto usado na prova de Português da FUVEST 2021).</p>`,
      pergunta: "No fragmento \"AO TROPEÇAR, cravava sua própria adaga no peito\", a oração destacada em letras maiúsculas abrange, simultaneamente, as noções de:",
      opcoes: ["causa e proporção.", "tempo e consequência.", "explicação e consequência.", "tempo e causa."],
      correta: "tempo e causa.",
      explicacao: "\"Ao tropeçar\" é uma oração subordinada adverbial reduzida de infinitivo que, nesse contexto, admite duas leituras simultâneas: pode ser parafraseada tanto por \"quando tropeçou\" (valor temporal, o momento em que o gesto aconteceu) quanto por \"porque tropeçou\" (valor causal, o motivo de a adaga ter sido cravada) — foi justamente o tropeço que causou o gesto fatal, no mesmo instante em que ele ocorreu. Não há relação de proporção (não indica variação simultânea e crescente de duas ações, como em \"à medida que\"), nem de consequência (o tropeço é a causa do gesto, não seu resultado), nem de explicação (não justifica uma ordem ou um pedido anterior). (Fonte: FUVEST 2021 (USP), reportagem de Tommaso Koch, El País, junho de 2020.)" },

    /* 4. Tipos de sujeito (real, contextualizada — FUVEST 2019) */
    { tempoQuestao: 300, texto: `<p>Mito, na acepção aqui empregada, não significa mentira, falsidade ou mistificação. Tomo de empréstimo a formulação de Hans Blumenberg do mito político como um processo contínuo de trabalho de uma narrativa que responde a uma necessidade prática de uma sociedade em determinado período. Narrativa simbólica que é, o mito político coloca em suspenso o problema da verdade. Seu discurso não pretende ter validade factual, mas também não pode ser percebido como mentira (do contrário, não seria mito). O mito político confere um sentido às circunstâncias que envolvem os indivíduos: ao fazê-los ver sua condição presente como parte de uma história em curso, ajuda a compreender e suportar o mundo em que vivem.</p>
      <p class="fonte">ENGELKE, Antonio. "O anjo redentor". Revista Piauí, ago. 2018, ed. 143, p. 24 (texto usado na prova de Português da FUVEST 2019).</p>`,
      pergunta: "Sobre o sujeito da oração \"em que vivem\", destacada no fim do texto, é correto afirmar:",
      opcoes: ["Expressa indeterminação, cabendo ao leitor deduzir a quem se refere a ação verbal.", "Está oculto e visa evitar a repetição da palavra \"circunstâncias\".", "É uma função sintática preenchida pelo pronome \"que\".", "Está oculto e seu referente é o mesmo do pronome \"os\" em \"fazê-los\"."],
      correta: "Está oculto e seu referente é o mesmo do pronome \"os\" em \"fazê-los\".",
      explicacao: "O sujeito de \"vivem\" está oculto (desinencial): não aparece expresso na oração, mas é recuperável pela desinência verbal de 3ª pessoa do plural e pelo contexto — refere-se aos mesmos indivíduos retomados pelo pronome oblíquo \"os\" em \"fazê-los\", ou seja, \"os indivíduos\" mencionados antes no texto. Não é sujeito indeterminado, porque sujeito indeterminado ocorre quando NÃO é possível identificar a quem a ação se refere — aqui o referente é perfeitamente identificável. Também não é \"circunstâncias\" o referente do sujeito oculto, porque \"circunstâncias\" é palavra feminina singular e o verbo \"vivem\" está no plural — não haveria concordância. E o pronome \"que\" em \"em que vivem\" não exerce a função de sujeito: ele retoma \"o mundo\" e funciona como adjunto adverbial de lugar dentro da própria oração (\"vivem NO MUNDO\" = \"vivem EM QUE\"), preposicionado por \"em\" — por isso não pode ao mesmo tempo ser o sujeito de \"vivem\". (Fonte: FUVEST 2019 (USP), artigo de Antonio Engelke, revista Piauí, ago. 2018.)" },

    /* 5. Vocativo */
    { pergunta: "Em qual das alternativas há um vocativo?",
      opcoes: ["Maria estudou muito para a prova.", "Maria, você estudou muito para a prova?", "A prova de Maria foi difícil.", "Maria viu a prova antes da aula."],
      correta: "Maria, você estudou muito para a prova?",
      explicacao: "O vocativo é o termo usado para chamar, invocar ou interpelar diretamente alguém, isolado por vírgula(s) e sem função sintática na oração (não é sujeito nem complemento). Em \"Maria, você estudou muito para a prova?\", \"Maria\" está sendo chamada — é vocativo. Nas demais alternativas, \"Maria\" exerce função sintática: sujeito (1ª e 4ª) ou adjunto adnominal (3ª)." },

    /* 6. Concordância verbal (real, contextualizada — FUVEST 2021, poema de Cecília Meireles) */
    { tempoQuestao: 300, texto: `<p>Ai, palavras, ai, palavras,<br>
      que estranha potência, a vossa!<br>
      Ai, palavras, ai, palavras,<br>
      sois de vento, ides no vento,<br>
      no vento que não retorna,<br>
      e, em tão rápida existência,<br>
      tudo se forma e transforma!</p>
      <p>Sois de vento, ides no vento,<br>
      e quedais, com sorte nova! (...)</p>
      <p>Ai, palavras, ai, palavras,<br>
      que estranha potência, a vossa!<br>
      Perdão podíeis ter sido!<br>
      – sois madeira que se corta,<br>
      – sois vinte degraus de escada,<br>
      – sois um pedaço de corda...<br>
      – sois povo pelas janelas,<br>
      cortejo, bandeiras, tropa...</p>
      <p>Ai, palavras, ai, palavras,<br>
      que estranha potência, a vossa!<br>
      Éreis um sopro na aragem...<br>
      – sois um homem que se enforca!</p>
      <p class="fonte">CECÍLIA MEIRELES. "Romance LIII ou Das Palavras Aéreas", em Romanceiro da Inconfidência. FUVEST (Vestibular USP), 2021, 1ª fase — Questão 68.</p>`,
      pergunta: "Ao substituir a pessoa verbal utilizada para se referir ao substantivo \"palavras\" pela 3ª pessoa do plural, os verbos dos versos \"sois de vento, ides no vento,\" (v. 4) / \"Perdão podíeis ter sido!\" (v. 12) / \"Éreis um sopro na aragem...\" (v. 20) seriam conjugados conforme apresentado na alternativa:",
      opcoes: ["são, vão, podiam, eram.", "seriam, iriam, podiam, serão.", "eram, foram, poderiam, seriam.", "são, vão, poderiam, eram."],
      correta: "são, vão, podiam, eram.",
      explicacao: "No poema, os verbos estão na 2ª pessoa do plural (vós): \"sois\" e \"ides\" no presente do indicativo; \"podíeis\" e \"éreis\" no pretérito imperfeito do indicativo. Ao trocar o sujeito para a 3ª pessoa do plural (eles/elas), mantendo o mesmo modo e tempo verbal, o verbo precisa concordar em número e pessoa com esse novo sujeito: \"sois\"→\"são\" e \"ides\"→\"vão\" (presente do indicativo, 3ª pessoa do plural); \"podíeis\"→\"podiam\" e \"éreis\"→\"eram\" (pretérito imperfeito do indicativo, 3ª pessoa do plural). É esse mesmo princípio — o verbo flexiona para concordar em pessoa e número com o sujeito a que se refere, mesmo quando o texto muda a forma de se dirigir a esse sujeito — que rege toda concordância verbal. As alternativas erradas trocam o tempo ou o modo verbal (ex.: \"poderiam\" é futuro do pretérito, não pretérito imperfeito, que é o tempo original de \"podíeis\"). (Fonte: FUVEST 2021, 1ª fase, Português, Questão 68.)" },

    /* 7. Pontuação (real, contextualizada — FUVEST 2021, mesma reportagem do Coringa usada noutra questão) */
    { tempoQuestao: 300, texto: `<p>Uma última gargalhada estrondosa. E depois, o silêncio. O palhaço jazia imóvel no chão. Mas seu rosto continua sorrindo, para sempre. Porque a carreira original do Coringa era para durar apenas 30 páginas. O tempo de envenenar Gotham, sequestrar Robin, enfiar um par de sopapos no Homem-Morcego e disparar o primeiro "vou te matar" na sua relação.</p>
      <p>Na briga final do Batman nº 1, o "horripilante bufão" sofria um final digno de sua desumana ironia: ao tropeçar, cravava sua própria adaga no peito. Assim decidiram e desenharam seus pais, os artistas Bill Finger, Bob Kane e Jerry Robinson. Entretanto, o criminoso mostrou, já em sua primeira aventura, um enorme talento para se rebelar contra a ordem estabelecida. Seu carisma seduziu a editora DC Comics, que impôs o acréscimo de um quadrinho. Já dentro da ambulância, vinha à tona "um dado desconcertante". E então um médico sentenciava: "Continua vivo. E vai sobreviver!".</p>
      <p class="fonte">Tommaso Koch. "O Coringa completa 80 anos e na Espanha ganha duas HQs, que inspiram debates filosóficos sobre a liberdade". El País, junho/2020. FUVEST (Vestibular USP), 2021, 1ª fase — Questão 64.</p>`,
      pergunta: "As vírgulas em \"E depois, o silêncio.\" e em \"Mas seu rosto continua sorrindo, para sempre.\" são usadas, respectivamente, com a mesma finalidade que as vírgulas em:",
      opcoes: ["\"Após a queda, tomaram mais cuidado.\" e \"Quanto mais espaço, mais liberdade.\"", "\"Colheram trigo e nós, algodão.\" e \"Eles se encontraram nas férias, mas não viajaram.\"", "\"Para meus amigos, o melhor.\" e \"Organizava tudo, cautelosamente.\"", "\"Viu o espetáculo, considerado o maior fenômeno de bilheteria.\" e \"'Conheço muito bem', afirmou o rapaz.\""],
      correta: "\"Para meus amigos, o melhor.\" e \"Organizava tudo, cautelosamente.\"",
      explicacao: "A vírgula em \"E depois, o silêncio.\" separa um adjunto adverbial de tempo (\"depois\") deslocado para o início da frase. A vírgula em \"Mas seu rosto continua sorrindo, para sempre.\" isola um adjunto adverbial (\"para sempre\") deslocado para o FINAL da frase, destacando-o com uma pausa expressiva. Só \"Para meus amigos, o melhor.\" e \"Organizava tudo, cautelosamente.\" repetem exatamente essas duas funções: a primeira vírgula separa um adjunto (\"Para meus amigos\") deslocado para o início; a segunda isola um adjunto de modo (\"cautelosamente\") deslocado para o final. Nas outras alternativas, a vírgula tem outra função — separar um sujeito composto com elipse do verbo (\"nós, algodão\"), separar orações coordenadas (ligadas por \"e\"/\"mas\"), ou isolar um aposto explicativo antes de uma fala em discurso direto. (Fonte: FUVEST 2021, 1ª fase, Português, Questão 64.)" },

    /* 8. Parnasianismo (real, contextualizada — UNICAMP 2024, crítica de Mário de Andrade + poema de Bilac) */
    { tempoQuestao: 300, texto: `<p>Em 1921, Mário de Andrade, escrevendo a série de artigos "Mestres do passado", publicados no Jornal do Comércio (edição de São Paulo), observou:</p>
      <p>"Tarde [de Olavo Bilac] foi uma promessa de anos seguidos. Tais são, tão salientes os artifícios e tão repetidos que muito bem provam o esforço do poeta decaído da poesia e a sua parca inspiração (...)."</p>
      <p class="fonte">(ANDRADE, M. Mestres do passado – Olavo Bilac. In: BRITO, M.S. História do modernismo brasileiro. Antecedentes da Semana de Arte Moderna. 5. ed. Rio de Janeiro: Civilização Brasileira, p. 288-289, 1978.)</p>
      <p><b>As estrelas</b><br>
      Olavo Bilac</p>
      <p>Desenrola-se a sombra no regaço<br>
      Da morna tarde, no esmaiado anil;<br>
      Dorme, no ofego do calor febril,<br>
      A natureza, mole de cansaço.</p>
      <p>Vagarosas estrelas! passo a passo,<br>
      O aprisco desertando, às mil e às mil,<br>
      Vindes do ignoto seio do redil<br>
      Num compacto rebanho, e encheis o espaço...</p>
      <p>E, enquanto, lentas, sobre a paz terrena,<br>
      Vos tresmalhais tremulamente a flux,<br>
      – Uma divina música serena<br>
      Desce rolando pela vossa luz:</p>
      <p>Cuida-se ouvir, ovelhas de ouro: a avena<br>
      Do invisível pastor que vos conduz...</p>
      <p class="fonte">(BILAC, Olavo. Tarde. Rio de Janeiro: Livraria Francisco Alves, p. 42-43, 1919.)<br>
      Glossário: esmaiado = esmaecido, pálido; aprisco = curral; redil = curral para o gado ovino ou caprino, rebanho de ovelhas; tresmalhar = afastar-se, perder-se do rebanho; flux = fluxo; avena = flauta pastoril.<br>
      UNICAMP, 2024, 1ª fase, Português — Questão 11.</p>`,
      pergunta: "Relacione, ao poema acima, o trecho da crítica de Mário de Andrade citado, assinalando a alternativa que coincide com a ideia geral de Mário sobre a obra de Bilac:",
      opcoes: ["O crítico lamenta o espaçamento da criação poética de Bilac, o que se expressa no poema pela imagem das estrelas que se afastam umas das outras.", "O crítico elogia os salientes artifícios da linguagem poética de Tarde, o que se pode perceber, por exemplo, pela variedade de sinônimos para a palavra \"curral\".", "O crítico evoca, como resultado da pouca inspiração artística do poeta, a sobrecarga de investimento formal (os hipérbatos ou inversões, por exemplo).", "O crítico associa a poesia de Bilac ao estilo decadentista, o que é reforçado pelas imagens de esgotamento, como se vê nas palavras \"morna\", \"esmaiado\", \"ofego\", \"mole\", \"lentas\"."],
      correta: "O crítico evoca, como resultado da pouca inspiração artística do poeta, a sobrecarga de investimento formal (os hipérbatos ou inversões, por exemplo).",
      explicacao: "Mário de Andrade critica Bilac por, em sua visão, faltar-lhe inspiração genuína — o poeta compensaria essa \"parca inspiração\" com um excesso de \"artifícios\" formais \"tão salientes\" e \"tão repetidos\". No poema \"As Estrelas\", esse excesso de investimento formal aparece em vários hipérbatos (inversões da ordem direta): já o primeiro verso, \"Desenrola-se a sombra no regaço da morna tarde\", equivaleria, em ordem direta, a \"A sombra desenrola-se no regaço da morna tarde\". É exatamente esse traço — culto excessivo da forma como sintoma de falta de inspiração — que a alternativa correta resume. As demais erram o sentido da crítica: Mário não fala de estrelas se \"espaçando\" (a), não elogia os artifícios — o tom da crítica é claramente negativo, não elogioso (b) —, e não associa Bilac ao Decadentismo, movimento distinto do Parnasianismo (d). (Fonte: UNICAMP 2024, 1ª fase, Português, Questão 11.)" },

    /* 9. Simbolismo (real, contextualizada — ITA 2013, poema de Cruz e Sousa) */
    { tempoQuestao: 300, texto: `<p>Ah! plangentes violões dormentes, mornos,<br>
      Soluços ao luar, choros ao vento...<br>
      Tristes perfis, os mais vagos contornos,<br>
      Bocas murmurejantes de lamento.</p>
      <p>Noites de além, remotas, que eu recordo,<br>
      Noites de solidão, noites remotas<br>
      Que nos azuis da Fantasia bordo,<br>
      Vou constelando de visões ignotas.</p>
      <p>Sutis palpitações à luz da lua,<br>
      Anseio dos momentos mais saudosos,<br>
      Quando lá choram na deserta rua<br>
      As cordas vivas dos violões chorosos.</p>
      <p class="fonte">CRUZ E SOUSA. "Violões que Choram...". ITA (Instituto Tecnológico de Aeronáutica), 2013, 1ª fase, Português.</p>`,
      pergunta: "O poema acima traz a seguinte característica da escola literária em que se insere:",
      opcoes: ["tendência à morbidez", "lirismo sentimental e intimista", "precisão vocabular e economia verbal", "registro da realidade através da percepção sensorial do poeta"],
      correta: "registro da realidade através da percepção sensorial do poeta",
      explicacao: "O eu lírico registra a realidade (o som dos violões, a noite, a rua deserta) filtrada pela percepção sensorial — a musicalidade e a sinestesia (sons que viram imagens visuais e sensações táteis/afetivas) são a marca do Simbolismo de Cruz e Sousa. \"Tendência à morbidez\" e \"lirismo sentimental e intimista\" são características de outras escolas (Romantismo, sobretudo), não o traço central destacado neste trecho. \"Precisão vocabular e economia verbal\" é, na verdade, um valor do Parnasianismo (culto da forma e do rigor lexical), o movimento rival do Simbolismo — colocá-la aqui inverteria a lógica da questão. (Fonte: ITA 2013, 1ª fase, Português.)" },

    /* 10. Interpretação textual (real, contextualizada — FUVEST 2018, "O Cortiço") */
    { tempoQuestao: 300, texto: `<p>"O rumor crescia, condensando-se; o zunzum de todos os dias acentuava-se; já se não destacavam vozes dispersas, mas um só ruído compacto que enchia todo o cortiço. Começavam a fazer compras na venda; ensarilhavam-se* discussões e rezingas**; ouviam-se gargalhadas e pragas; já se não falava, gritava-se. Sentia-se naquela fermentação sanguínea, naquela gula viçosa de plantas rasteiras que mergulham os pés vigorosos na lama preta e nutriente da vida, o prazer animal de existir, a triunfante satisfação de respirar sobre a terra.</p>
      <p>Da porta da venda que dava para o cortiço iam e vinham como formigas, fazendo compras.</p>
      <p>Duas janelas do Miranda abriram-se. Apareceu numa a Isaura, que se dispunha a começar a limpeza da casa.</p>
      <p>— Nhá Dunga! — gritou ela para baixo, a sacudir um pano de mesa. — Se você tem cuscuz de milho hoje, bata na porta, ouviu?"</p>
      <p><small>* ensarilhar-se: emaranhar-se. ** rezinga: resmungo.</small></p>
      <p class="fonte">Aluísio Azevedo, O Cortiço (1890) — Fuvest 2018 (USP), Questão 76.</p>`,
      pergunta: "Uma característica do Naturalismo presente no texto é:",
      opcoes: ["forte apelo aos sentidos.", "idealização do espaço.", "exaltação da natureza.", "ênfase nas individualidades."],
      correta: "forte apelo aos sentidos.",
      explicacao: "O trecho descreve o cortiço através de sensações físicas intensas e quase animalescas — rumor, zunzum, gargalhadas, \"fermentação sanguínea\", \"gula viçosa\", \"prazer animal de existir\" —, típicas da visão naturalista do ser humano como organismo movido por impulsos físicos, não por razão ou idealismo. \"Idealização do espaço\" está errada porque o Naturalismo rejeita justamente a idealização romântica: o cortiço é descrito de forma bruta e degradante. \"Exaltação da natureza\" também não se sustenta, pois o texto não celebra a natureza em si, mas usa metáforas fisiológicas para descrever o comportamento humano coletivo. E \"ênfase nas individualidades\" está invertida: o narrador funde as vozes num \"só ruído compacto\", retratando a massa humana, não indivíduos isolados. (Fonte: Fuvest 2018 (USP), Questão 76.)" },

    /* 11. Interpretação textual (mesmo texto — real, FUVEST 2018) */
    { tempoQuestao: 300, texto: `<p>"O rumor crescia, condensando-se; o zunzum de todos os dias acentuava-se; já se não destacavam vozes dispersas, mas um só ruído compacto que enchia todo o cortiço. Começavam a fazer compras na venda; ensarilhavam-se* discussões e rezingas**; ouviam-se gargalhadas e pragas; já se não falava, gritava-se. Sentia-se naquela fermentação sanguínea, naquela gula viçosa de plantas rasteiras que mergulham os pés vigorosos na lama preta e nutriente da vida, o prazer animal de existir, a triunfante satisfação de respirar sobre a terra.</p>
      <p>Da porta da venda que dava para o cortiço iam e vinham como formigas, fazendo compras.</p>
      <p>Duas janelas do Miranda abriram-se. Apareceu numa a Isaura, que se dispunha a começar a limpeza da casa.</p>
      <p>— Nhá Dunga! — gritou ela para baixo, a sacudir um pano de mesa. — Se você tem cuscuz de milho hoje, bata na porta, ouviu?"</p>
      <p><small>* ensarilhar-se: emaranhar-se. ** rezinga: resmungo.</small></p>
      <p class="fonte">Aluísio Azevedo, O Cortiço (1890) — Fuvest 2018 (USP), Questão 77.</p>`,
      pergunta: "Constitui marca do registro informal da língua o trecho:",
      opcoes: ["\"ouviam-se gargalhadas\" (na 1ª frase).", "\"o prazer animal de existir\" (na 1ª frase).", "\"gritou ela para baixo\" (perto do fim).", "\"bata na porta\" (no final)."],
      correta: "\"bata na porta\" (no final).",
      explicacao: "\"Bata na porta\" é fala direta de uma personagem (Isaura, gritando para a vizinha) — um imperativo coloquial, oral, típico da conversa cotidiana entre moradoras do cortiço. Já \"ouviam-se gargalhadas\" e \"o prazer animal de existir\" são descrições do narrador, em prosa literária culta. \"Gritou ela para baixo\" também é fala do NARRADOR descrevendo a ação (verbo \"gritou\" introduzindo o discurso), não a fala informal em si — a marca de oralidade só aparece de fato na frase entre aspas que a personagem pronuncia. (Fonte: Fuvest 2018 (USP), Questão 77.)" },

    /* 12. Interpretação textual (real, contextualizada — FUVEST 2019, prefácio + Iracema, José de Alencar) */
    { tempoQuestao: 300, texto: `<p>"O povo que chupa o caju, a manga, o cambucá e a jabuticaba, pode falar uma língua com igual pronúncia e o mesmo espírito do povo que sorve o figo, a pera, o damasco e a nêspera?"</p>
      <p class="fonte-interna">José de Alencar, Benção Paterna, prefácio a Sonhos d'ouro.</p>
      <p>"A graciosa ará, sua companheira e amiga, brinca junto dela. Às vezes sobe aos ramos da árvore e de lá chama a virgem pelo nome, <u>outras</u> remexe o uru de palha matizada, onde traz a selvagem seus perfumes, os alvos fios do crautá, as agulhas da juçara com que tece a renda e as tintas de que matiza o algodão."</p>
      <p class="fonte-interna">José de Alencar, Iracema.</p>
      <p><small>Glossário: "ará": periquito; "uru": cesto; "crautá": espécie de bromélia; "juçara": tipo de palmeira espinhosa.</small></p>
      <p class="fonte">José de Alencar — Fuvest 2019 (USP), Questão 66.</p>`,
      pergunta: "Com base nos trechos acima, é adequado afirmar:",
      opcoes: ["Ao discutir, no primeiro trecho, a importação de ideias e costumes, Alencar propõe uma literatura baseada no abrasileiramento da língua portuguesa, como se verifica no segundo trecho.", "O contraste entre os verbos \"chupar\" e \"sorver\", empregados no primeiro trecho, revela o rebaixamento de linguagem buscado pelo escritor em Iracema.", "Em Iracema, a construção de uma literatura exótica, tal como se verifica no segundo trecho, pautou-se pela recusa de nossos elementos naturais.", "Ambos os trechos são representativos da tendência escapista de nosso romantismo, na medida em que valorizam os elementos naturais em detrimento da realidade rotineira."],
      correta: "Ao discutir, no primeiro trecho, a importação de ideias e costumes, Alencar propõe uma literatura baseada no abrasileiramento da língua portuguesa, como se verifica no segundo trecho.",
      explicacao: "No prefácio, Alencar questiona se um povo que come frutas tropicais (caju, manga) pode falar \"com o mesmo espírito\" de um povo que come frutas europeias (figo, pera) — sugerindo que a língua literária brasileira precisa se adaptar à realidade local, não apenas copiar o modelo europeu. Em Iracema, isso se concretiza no vocabulário indígena incorporado à prosa em português (\"ará\", \"uru\", \"crautá\", \"juçara\") — exatamente esse \"abrasileiramento\" da língua que ele defende. As demais alternativas invertem o sentido do texto: o contraste \"chupar\"/\"sorver\" não indica \"rebaixamento\" de linguagem, mas diferença cultural; Iracema não recusa elementos naturais — ao contrário, os valoriza; e não se trata de escapismo, mas de afirmação nacionalista/indianista. (Fonte: Fuvest 2019 (USP), Questão 66.)" },

    /* 13. Interpretação textual (mesmo texto — real, FUVEST 2019) */
    { tempoQuestao: 300, texto: `<p>"O povo que chupa o caju, a manga, o cambucá e a jabuticaba, pode falar uma língua com igual pronúncia e o mesmo espírito do povo que sorve o figo, a pera, o damasco e a nêspera?"</p>
      <p class="fonte-interna">José de Alencar, Benção Paterna, prefácio a Sonhos d'ouro.</p>
      <p>"A graciosa ará, sua companheira e amiga, brinca junto dela. Às vezes sobe aos ramos da árvore e de lá chama a virgem pelo nome, <u>outras</u> remexe o uru de palha matizada, onde traz a selvagem seus perfumes, os alvos fios do crautá, as agulhas da juçara com que tece a renda e as tintas de que matiza o algodão."</p>
      <p class="fonte-interna">José de Alencar, Iracema.</p>
      <p><small>Glossário: "ará": periquito; "uru": cesto; "crautá": espécie de bromélia; "juçara": tipo de palmeira espinhosa.</small></p>
      <p class="fonte">José de Alencar — Fuvest 2019 (USP), Questão 67.</p>`,
      pergunta: "No trecho \"outras remexe o uru de palha matizada\", a palavra sublinhada (outras) expressa ideia de",
      opcoes: ["finalidade.", "adição.", "tempo.", "consequência."],
      correta: "tempo.",
      explicacao: "\"Outras\" retoma \"às vezes\", funcionando como \"em outras ocasiões/vezes\" — marca uma alternância temporal entre duas ações da personagem (ora sobe à árvore, outras vezes mexe no cesto). Não é \"finalidade\" (não indica propósito de uma ação), nem \"adição\" (não soma elementos, alterna momentos), nem \"consequência\" (não há relação de causa e efeito entre as ações). (Fonte: Fuvest 2019 (USP), Questão 67.)" },

    /* 14. Memórias Póstumas de Brás Cubas (real, contextualizada — FUVEST 2018, cap. final "Das Negativas" + Helena Morley) */
    { tempoQuestao: 300, texto: `<p>"Este último capítulo é todo de negativas. Não alcancei a celebridade do emplasto, não fui ministro, não fui califa, não conheci o casamento. Verdade é que, ao lado dessas faltas, coube-me a boa fortuna de não comprar o pão com o suor do meu rosto. Mais; não padeci a morte de dona Plácida, nem a semidemência do Quincas Borba. Somadas umas coisas e outras, qualquer pessoa imaginará que não houve míngua nem sobra, e, conseguintemente, que saí quite com a vida. E imaginará mal; porque ao chegar a este outro lado do mistério, achei-me com um pequeno saldo, que é a derradeira negativa deste capítulo de negativas: — Não tive filhos, não transmiti a nenhuma criatura o legado da nossa miséria."</p>
      <p class="fonte-interna">Machado de Assis, Memórias Póstumas de Brás Cubas (capítulo final, "Das Negativas").</p>
      <p>"Não sei por que até hoje todo o mundo diz que tinha pena dos escravos. Eu não penso assim. Acho que se fosse obrigada a trabalhar o dia inteiro não seria infeliz. Ser obrigada a ficar à toa é que seria castigo para mim. Mamãe às vezes diz que ela até deseja que eu fique preguiçosa; a minha esperteza é que a amofina. Eu então respondo: 'Se eu fosse preguiçosa não sei o que seria da senhora, meu pai e meus irmãos, sem uma empregada em casa'."</p>
      <p class="fonte-interna">Helena Morley, Minha vida de menina.</p>
      <p class="fonte">Machado de Assis / Helena Morley — Fuvest 2018 (USP), Questão 72.</p>`,
      pergunta: "São características dos narradores Brás Cubas e Helena, respectivamente,",
      opcoes: ["malícia e ingenuidade.", "solidariedade e egoísmo.", "apatia e determinação.", "rebeldia e conformismo."],
      correta: "apatia e determinação.",
      explicacao: "Brás Cubas narra as \"negativas\" da própria vida com distanciamento irônico e indiferença — o tom de quem já morreu e nada mais lhe afeta, uma apatia típica do \"defunto-autor\". Helena, ao contrário, afirma com firmeza o que aceita e o que não aceita (recusa a ociosidade, orgulha-se da própria esperteza) — postura determinada e assertiva. Os outros pares (malícia/ingenuidade, solidariedade/egoísmo, rebeldia/conformismo) não correspondem ao contraste central evidenciado nos dois trechos. (Fonte: Fuvest 2018 (USP), Questão 72.)" },

    /* 15. Variação Linguística — questão MULTIMODAL (texto + tirinha), real —
       reaproveitada do banco já auditado enem.html (ENEM 2014, 3ª aplicação/PPL,
       Questão 124). Imagem já existente em assets/img/questoes/. */
    { tempoQuestao: 300, texto: `<img src="/assets/img/questoes/grump-orlandeli-acordo-ortografico.png" alt="Tirinha em 4 quadros: um tio pergunta ao sobrinho pelo WhatsApp, em norma padrão, se ele conhece o novo Acordo Ortográfico; o sobrinho responde em internetês cheio de abreviações; no último quadro o tio, sem entender nada, desiste de ler.">
      <p>Essa tirinha tem como tema a nova ortografia da língua portuguesa e os diversos tipos de linguagem hoje existentes.</p>
      <p><b>Quadro 1</b> — O tio, em norma padrão, pergunta ao sobrinho pelo WhatsApp: "Olá, sobrinho. Beleza? Por acaso você está por dentro das regras do novo Acordo Ortográfico?"</p>
      <p><b>Quadro 2</b> — O sobrinho responde animado: "Falaaaaaa Tiunnnnmm!! Blz??!!!!"</p>
      <p><b>Quadro 3</b> — O sobrinho continua: "Axo q naumm eh dificium naumm!!!! Passa aki em ksa... Q nois aprendihh juntuuuuu!!!!"</p>
      <p><b>Quadro 4</b> — O tio, sem entender nada, encara a tela confuso e desiste: "Melhor pensar em outra coisa."</p>
      <p class="fonte">ENEM 2014 (3ª aplicação, PPL) — Questão 124.</p>`,
      pergunta: "A situação apresentada no último quadrinho indica que",
      opcoes: ["o sobrinho não compreendeu a linguagem mais conservadora utilizada pelo seu tio.", "o tio não está familiarizado com a linguagem de chats e de mensagens instantâneas.", "a informalidade presente na linguagem do sobrinho impede a comunicação com o tio.", "o sobrinho desconhece a norma padrão da língua portuguesa."],
      correta: "o tio não está familiarizado com a linguagem de chats e de mensagens instantâneas.",
      explicacao: "Traduzindo a resposta do sobrinho (\"Acho que não é difícil, não! Passe aqui em casa que nós aprendemos juntos!\"), ela faz sentido perfeito — ele entendeu a pergunta e ofereceu ajuda. O problema não é informalidade genérica nem desconhecimento da norma padrão por parte de ninguém: é que o tio simplesmente não conhece o código específico do \"internetês\" de chats e mensagens instantâneas — uma variedade linguística que ele não domina, assim como o sobrinho talvez não domine tão bem a norma padrão que o tio usou. (Fonte: ENEM 2014, 3ª aplicação/PPL, Questão 124.)" }
  ]
};
