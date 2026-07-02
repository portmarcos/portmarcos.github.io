/* ENEM 2022 — Linguagens, Códigos e suas Tecnologias · 1ª Aplicação · Questões reais (Caderno Azul, 1º dia) */
const QUIZ_DADOS = {
  id: "enem-2022-linguagens",
  titulo: "ENEM 2022 — Linguagens (Prova Real)",
  descricao: "12 questões reais do ENEM 2022 (Caderno Azul, 1ª aplicação): urgência emocional, Veríssimo e norma-padrão, tecnologia e arte, Chico Buarque, Memórias póstumas de Brás Cubas, romance naturalista, Clarice Lispector e a crônica, Carolina Maria de Jesus e o manguebeat.",
  tempoPorQuestao: 150,
  questoes: [
    {
      texto: `<p><strong>Urgência emocional</strong></p>
<p>Se tudo é para ontem, se a vida engata uma primeira e sai em disparada, se não há mais tempo para paradas estratégicas, caímos fatalmente no vício de querer que os amores sejam igualmente resolvidos num átimo de segundo. Temos pressa para ouvir "eu te amo". Não vemos a hora de que fiquem estabelecidas as regras de convívio: somos namorados, ficantes, casados, amantes? Urgência emocional. Uma cilada. Associamos diversas palavras ao AMOR: paixão, romance, sexo, adrenalina, palpitação. Esquecemos, no entanto, da palavra que viabiliza esse sentimento: "paciência". Amor sem paciência não vinga. Amor não pode ser mastigado e engolido com emergência, com fome desesperada. É uma refeição que pode durar uma vida.</p>
<p class="fonte">MEDEIROS, M. Disponível em: http://porumavidasimples.blogspot.com.br. Acesso em: 20 ago. 2017 (adaptado). | ENEM 2022 — Questão 06</p>`,
      pergunta: "Nesse texto de opinião, as marcas linguísticas revelam uma situação distensa e de pouca formalidade, o que se evidencia pelo(a)",
      opcoes: [
        "impessoalização ao longo do texto, como em: \"se não há mais tempo\".",
        "construção de uma atmosfera de urgência, em palavras como: \"pressa\".",
        "repetição de uma determinada estrutura sintática, como em: \"Se tudo é para ontem\".",
        "ênfase no emprego da hipérbole, como em: \"uma refeição que pode durar uma vida\".",
        "emprego de metáforas, como em: \"a vida engata uma primeira e sai em disparada\"."
      ],
      correta: "emprego de metáforas, como em: \"a vida engata uma primeira e sai em disparada\".",
      explicacao: "(ENEM 2022, Q06) A informalidade do texto se manifesta no uso de metáforas coloquiais que aproximam o leitor: \"a vida engata uma primeira\" (como um carro), \"mastigado e engolido com emergência\", \"uma refeição que pode durar uma vida\". Essas imagens cotidianas e informais são o recurso linguístico central que cria o registro descontraído. As demais alternativas descrevem recursos presentes no texto, mas não são o principal marcador de informalidade."
    },
    {
      texto: `<p>Ora, sempre que surge uma nova técnica, ela quer demonstrar que revogará as regras e coerções que presidiram o nascimento de todas as outras invenções do passado. Ela se pretende orgulhosa e única. Como se a nova técnica carreasse com ela, automaticamente, para seus novos usuários, uma propensão natural a fazer economia de qualquer aprendizagem. Como se ela se preparasse para varrer tudo que a precedeu, ao mesmo tempo transformando em analfabetos todos os que ousassem repeli-la.<br>
Fui testemunha dessa mudança ao longo de toda a minha vida. Ao passo que, na realidade, é o contrário que acontece. Cada nova técnica exige uma longa iniciação numa nova linguagem, ainda mais longa na medida em que nosso espírito é formatado pela utilização das linguagens que precederam o nascimento da recém-chegada.</p>
<p class="fonte">ECO, U.; CARRIÈRE, J.-C. Não contem com o fim do livro. Rio de Janeiro: Record, 2010 (adaptado). | ENEM 2022 — Questão 11</p>`,
      pergunta: "O texto revela que, quando a sociedade promove o desenvolvimento de uma nova técnica, o que mais impacta seus usuários é a",
      opcoes: [
        "dificuldade na apropriação da nova linguagem.",
        "valorização da utilização da nova tecnologia.",
        "recorrência das mudanças tecnológicas.",
        "suplantação imediata dos conhecimentos prévios.",
        "rapidez no aprendizado do manuseio das novas invenções."
      ],
      correta: "dificuldade na apropriação da nova linguagem.",
      explicacao: "(ENEM 2022, Q11) Os autores desmontam o mito de que a nova técnica simplesmente substitui a antiga sem esforço. O argumento central é que cada nova técnica exige uma \"longa iniciação numa nova linguagem\" — o quanto mais o usuário está formatado pelas linguagens anteriores, maior o esforço. O impacto central, portanto, não é a velocidade nem a suplantação, mas a dificuldade real de aprender a nova linguagem."
    },
    {
      texto: `<p><strong>Papos</strong></p>
<p>— Me disseram...<br>
— Disseram-me.<br>
— Hein?<br>
— O correto é "disseram-me". Não "me disseram".<br>
— Eu falo como quero. E te digo mais... Ou é "digo-te"?<br>
— O quê?<br>
— Digo-te que você...<br>
— O "te" e o "você" não combinam.<br>
— Lhe digo?<br>
— Também não. O que você ia me dizer?<br>
— Que você está sendo grosseiro, pedante e chato. [...]<br>
— Dispenso as suas correções. Vê se esquece-me. Falo como bem entender. Mais uma correção e eu...<br>
— O quê?<br>
— O mato.<br>
— Que mato?<br>
— Mato-o. Mato-lhe. Mato você. Matar-lhe-ei-te. Ouviu bem? Pois esqueça-o e para-te. Pronome no lugar certo é elitismo!</p>
<p class="fonte">VERÍSSIMO, L. F. Comédias para se ler na escola. Rio de Janeiro: Objetiva, 2001 (adaptado). | ENEM 2022 — Questão 12</p>`,
      pergunta: "Nesse texto, o uso da norma-padrão defendido por um dos personagens torna-se inadequado em razão do(a)",
      opcoes: [
        "falta de compreensão causada pelo choque entre gerações.",
        "contexto de comunicação em que a conversa se dá.",
        "grau de polidez distinto entre os interlocutores.",
        "diferença de escolaridade entre os falantes.",
        "nível social dos participantes da situação."
      ],
      correta: "contexto de comunicação em que a conversa se dá.",
      explicacao: "(ENEM 2022, Q12) A norma-padrão (\"disseram-me\", \"mato-o\", \"matar-lhe-ei-te\") é adequada em textos formais ou literários. Numa conversa informal e espontânea entre dois interlocutores, ela soa artificial, pomposa e inadequada — não porque um dos falantes seja menos culto, mas porque o contexto (bate-papo cotidiano) exige outro registro. A crônica satiriza quem não percebe essa adequação ao contexto de comunicação."
    },
    {
      texto: `<p><strong>PALAVRA</strong> – As gramáticas classificam as palavras em substantivo, adjetivo, verbo, advérbio, conjunção, pronome, numeral, artigo e preposição. Os poetas classificam as palavras pela alma porque gostam de brincar com elas, e para brincar com elas é preciso ter intimidade primeiro. É a alma da palavra que define, explica, ofende ou elogia, se coloca entre o significante e o significado para dizer o que quer, dar sentimento às coisas, fazer sentido. A palavra nuvem chove. A palavra triste chora. A palavra sono dorme. A palavra tempo passa. A palavra fogo queima. A palavra faca corta. A palavra carro corre. A palavra "palavra" diz. O que quer. E nunca desdiz depois. As palavras têm corpo e alma, mas são diferentes das pessoas em vários pontos. As palavras dizem o que querem, está dito, e pronto.</p>
<p class="fonte">FALCÃO, A. Pequeno dicionário de palavras ao vento. São Paulo: Salamandra, 2013 (adaptado). | ENEM 2022 — Questão 17</p>`,
      pergunta: "Esse texto, que simula um verbete para a palavra 'palavra', constitui-se como um poema porque",
      opcoes: [
        "tematiza o fazer poético, como em \"Os poetas classificam as palavras pela alma\".",
        "utiliza o recurso expressivo da metáfora, como em \"As palavras têm corpo e alma\".",
        "valoriza a gramática da língua, como em \"substantivo, adjetivo, verbo, advérbio, conjunção\".",
        "estabelece comparações, como em \"As palavras têm corpo e alma, mas são diferentes das pessoas\".",
        "apresenta informações pertinentes acerca do conceito de 'palavra', como em \"As gramáticas classificam as palavras\"."
      ],
      correta: "tematiza o fazer poético, como em \"Os poetas classificam as palavras pela alma\".",
      explicacao: "(ENEM 2022, Q17) O texto é poético não apenas pelo uso de metáforas (as palavras que chorem, chova, durmam), mas porque tem como tema central a própria atividade poética: a relação do poeta com as palavras, a distinção entre classificação gramatical e classificação pela alma, o jogo e a intimidade com a linguagem. Metáfora e comparação são recursos, mas o traço definidor é que o texto é sobre o fazer poético — metalinguagem poética."
    },
    {
      texto: `<p>Morte lenta ao luso infame que inventou a calçada portuguesa. Maldito D. Manuel I e sua corja de tenentes Eusébios. Quadrados de pedregulho irregular socados à mão. À mão! É claro que ia soltar, ninguém reparou que ia soltar? Branco, preto, branco, preto, as ondas do mar de Copacabana. De que me servem as ondas do mar de Copacabana? Me deem chão liso, sem protuberâncias calcárias. Mosaico estúpido. Mania de mosaico. Joga concreto em cima e aplaina. Buraco, cratera, pedra solta, bueiro-bomba. Depois dos setenta, a vida se transforma numa interminável corrida de obstáculos.<br>
A queda é a maior ameaça para o idoso. "Idoso", palavra odienta. Pior, só "terceira idade". A queda separa a velhice da senilidade extrema. O tombo destrói a cadeia que liga a cabeça aos pés. Adeus, corpo. Em casa, vou de corrimão em corrimão, tateio móveis e paredes, e tomo banho sentado.</p>
<p class="fonte">TORRES, F. Fim. São Paulo: Cia. das Letras, 2013. | ENEM 2022 — Questão 18</p>`,
      pergunta: "O recurso que caracteriza a organização estrutural desse texto é o(a)",
      opcoes: [
        "justaposição de sequências verbais e nominais.",
        "mudança de eventos resultante do jogo temporal.",
        "uso de adjetivos qualificativos na descrição do cenário.",
        "encadeamento semântico pelo uso de substantivos sinônimos.",
        "inter-relação entre orações por elementos linguísticos lógicos."
      ],
      correta: "justaposição de sequências verbais e nominais.",
      explicacao: "(ENEM 2022, Q18) O texto de Ferreira Torres é marcado pela justaposição: frases nominais curtíssimas como \"Buraco, cratera, pedra solta, bueiro-bomba\" alternam com estruturas verbais igualmente breves e diretas. Não há conectivos lógicos ou subordinação complexa — os elementos se acumulam lado a lado, criando um ritmo frenético e um fluxo de consciência irritado que reflete o pensamento do narrador idoso."
    },
    {
      texto: `<p><strong>A escrava</strong></p>
<p>— Admira-me —, disse uma senhora de sentimentos sinceramente abolicionistas —; faz-me até pasmar como se possa sentir, e expressar sentimentos escravocratas, no presente século, no século dezenove! A moral religiosa e a moral cívica aí se erguem, e falam bem alto esmagando a hidra que envenena a família no mais sagrado santuário seu, e desmoraliza, e avilta a nação inteira! Levantai os olhos ao Gólgota, ou percorrei-os em torno da sociedade, e dizei-me:<br>
— Para que se deu em sacrifício o Homem Deus, que ali exalou seu derradeiro alento? Ah! Então não é verdade que seu sangue era o resgate do homem! [...]<br>
Por qualquer modo que encaremos a escravidão, ela é, e será sempre um grande mal. Dela a decadência do comércio; porque o comércio e a lavoura caminham de mãos dadas, e o escravo não pode fazer florescer a lavoura; porque o seu trabalho é forçado.</p>
<p class="fonte">REIS, M. F. Úrsula e outras obras. Brasília: Câmara dos Deputados, 2018. | ENEM 2022 — Questão 21</p>`,
      pergunta: "Inscrito na estética romântica da literatura brasileira, o conto descortina aspectos da realidade nacional no século XIX ao",
      opcoes: [
        "revelar a imposição de crenças religiosas a pessoas escravizadas.",
        "apontar a hipocrisia do discurso conservador na defesa da escravidão.",
        "sugerir práticas de violência física e moral em nome do progresso material.",
        "relacionar o declínio da produção agrícola e comercial a questões raciais.",
        "ironizar o comportamento dos proprietários de terra na exploração do trabalho."
      ],
      correta: "apontar a hipocrisia do discurso conservador na defesa da escravidão.",
      explicacao: "(ENEM 2022, Q21) A senhora apresentada como \"abolicionista\" usa argumentos religiosos e morais — mas o texto revela que esse discurso elevado coexistia com a manutenção da escravidão na sociedade. A retórica inflamada (Gólgota, Homem Deus, moral cívica) contrasta com a realidade do sistema escravocrata. Maria Firmina dos Reis expõe essa contradição entre o discurso humanista e a prática conservadora da época."
    },
    {
      texto: `<p><strong>O complexo de falar difícil</strong></p>
<p>O que importa realmente é que o(a) detentor(a) do notável saber jurídico saiba quando e como deve fazer uso desse português versão 2.0, até porque não tem necessidade de alguém entrar numa padaria de manhã com aquela cara de sono falando o seguinte: "Por obséquio, Vossa Senhoria teria a hipotética possibilidade de estabelecer com minha pessoa uma relação de compra e venda, mediante as imposições dos códigos Civil e do Consumidor, para que seja possível a obtenção de 10 pãezinhos em temperatura estável para que a relação pecuniária no valor de R$5,00 seja plenamente legítima e capaz de saciar minha fome matinal?".<br>
Agora entramos na parte interessante: o que realmente é falar difícil? [...] Falar difícil é fazer uso do simples, mas com coerência e coesão, deixar tudo amarradinho gramaticalmente falando.</p>
<p class="fonte">ARAÚJO, H. Disponível em: www.diariojurista.com. Acesso em: 20 nov. 2021 (adaptado). | ENEM 2022 — Questão 24</p>`,
      pergunta: "Nesse artigo de opinião, ao fazer uso de uma fala rebuscada no exemplo da compra do pão, o autor evidencia a importância de(a)",
      opcoes: [
        "se ter um notável saber jurídico.",
        "valorização da inteligência do falante.",
        "falar difícil para demonstrar inteligência.",
        "coesão e da coerência em documentos jurídicos.",
        "adequação da linguagem à situação de comunicação."
      ],
      correta: "adequação da linguagem à situação de comunicação.",
      explicacao: "(ENEM 2022, Q24) O exemplo absurdo da padaria funciona como reductio ad absurdum: usar linguagem jurídica formal para pedir pão é grotescamente inapropriado. O autor demonstra que nenhum grau de domínio linguístico substitui a inteligência de saber qual registro usar em cada situação. A competência comunicativa real está na adequação — não no rebuscamento ou na simplicidade em si."
    },
    {
      texto: `<p><strong>Assentamento</strong></p>
<p>Zanza daqui / Zanza pra acolá / Fim de feira, periferia afora / A cidade não mora mais em mim<br>
Francisco, Serafim / Vamos embora / Ver o capim / Ver o baobá<br>
Vamos ver a campina quando flora / A piracema, rios contravim / Binho, Bel, Bia, Quim / Vamos embora<br>
Quando eu morrer / Cansado de guerra / Morro de bem / Com a minha terra:<br>
Cana, caqui / Inhame, abóbora / Onde só vento se semeava outrora / Amplidão, nação, sertão sem fim<br>
Ó Manuel, Miguilim / Vamos embora</p>
<p class="fonte">BUARQUE, C. As cidades. Rio de Janeiro: RCA, 1998 (fragmento). | ENEM 2022 — Questão 26</p>
<p>Nesse texto, predomina a função poética da linguagem. Entretanto, a função emotiva pode ser identificada no verso:</p>`,
      pergunta: "A função emotiva pode ser identificada no verso:",
      opcoes: [
        "\"Zanza pra acolá\".",
        "\"Fim de feira, periferia afora\".",
        "\"A cidade não mora mais em mim\".",
        "\"Onde só vento se semeava outrora\".",
        "\"Ó Manuel, Miguilim\"."
      ],
      correta: "\"A cidade não mora mais em mim\".",
      explicacao: "(ENEM 2022, Q26) A função emotiva (ou expressiva) centra-se no emissor e manifesta seus estados afetivos, sentimentos e subjetividade. \"A cidade não mora mais em mim\" é uma expressão em primeira pessoa do singular que revela o estado interior do sujeito lírico — a alienação da cidade, o sentimento de não pertencimento. Os outros versos descrevem espaços, convocam pessoas ou usam interjeição (\"Ó Manuel\"), mas apenas esse expõe diretamente a emoção do emissor."
    },
    {
      texto: `<p>Soluços, lágrimas, casa armada, veludo preto nos portais, um homem que veio vestir o cadáver, outro que tomou a medida do caixão, caixão, essa, tocheiros, convites, convidados que entravam, lentamente, a passo surdo, e apertavam a mão à família, alguns tristes, todos sérios e calados, padre e sacristão, rezas, aspersões d'água benta, o fechar do caixão, a prego e martelo, seis pessoas que o tomam da essa, e o levantam, e o descem a custo pela escada, não obstante os gritos, soluços e novas lágrimas da família, e vão até o coche fúnebre, e o colocam em cima e traspassam e apertam as correias, o rodar do coche, o rodar dos carros, um a um... Isto que parece um simples inventário eram notas que eu havia tomado para um capítulo triste e vulgar que não escrevo.</p>
<p class="fonte">ASSIS, M. Memórias póstumas de Brás Cubas. Disponível em: www.dominiopublico.gov.br. Acesso em: 25 jul. 2022. | ENEM 2022 — Questão 33</p>`,
      pergunta: "O recurso linguístico que permite a Machado de Assis considerar um capítulo de Memórias póstumas de Brás Cubas como inventário é a",
      opcoes: [
        "enumeração de objetos e fatos.",
        "predominância de linguagem objetiva.",
        "ocorrência de período longo no trecho.",
        "combinação de verbos no presente e no pretérito.",
        "presença de léxico do campo semântico de funerais."
      ],
      correta: "enumeração de objetos e fatos.",
      explicacao: "(ENEM 2022, Q33) O narrador chama o trecho de \"inventário\" — e o recurso que justifica essa denominação é exatamente a enumeração: soluços, lágrimas, caixão, essa, tocheiros, convites, padre, sacristão... O texto lista elementos como se fossem itens de um arrolamento. Um inventário é uma lista sistemática de bens ou fatos; a enumeração encadeada é o recurso que produz esse efeito textual."
    },
    {
      texto: `<p><strong>Ser cronista</strong></p>
<p>Sei que não sou, mas tenho meditado ligeiramente no assunto.<br>
Crônica é um relato? É uma conversa? É um resumo de um estado de espírito? Não sei, pois antes de começar a escrever para o Jornal do Brasil, eu só tinha escrito romances e contos.<br>
E também sem perceber, à medida que escrevia para aqui, ia me tornando pessoal demais, correndo o risco de em breve publicar minha vida passada e presente, o que não pretendo. [...] basta eu saber que estou escrevendo para o jornal, isto é, para algo aberto facilmente por todo o mundo, e não para um livro, que só é aberto por quem realmente quer, para que, sem mesmo sentir, o modo de escrever se transforme. Não é que me desagrade mudar, pelo contrário. Mas queria que fossem mudanças mais profundas e interiores que não viessem a se refletir no escrever. Mas mudar só porque isso é uma coluna ou uma crônica? Ser mais leve só porque o leitor assim o quer? Divertir? Fazer passar uns minutos de leitura?</p>
<p class="fonte">LISPECTOR, C. In: A descoberta do mundo. Rio de Janeiro: Rocco, 1999. | ENEM 2022 — Questão 35</p>`,
      pergunta: "No texto, ao refletir sobre a atividade de cronista, a autora questiona características do gênero crônica, como",
      opcoes: [
        "relação distanciada entre os interlocutores.",
        "articulação de vários núcleos narrativos.",
        "brevidade no tratamento da temática.",
        "descrição minuciosa dos personagens.",
        "público leitor exclusivo."
      ],
      correta: "brevidade no tratamento da temática.",
      explicacao: "(ENEM 2022, Q35) Clarice questiona as exigências do gênero crônica: \"Ser mais leve só porque o leitor assim o quer? Divertir? Fazer passar uns minutos de leitura?\" — essas perguntas revelam sua resistência à leveza e ao tratamento superficial/breve que o gênero pressupõe. A crônica exige concisão e agilidade temática, algo que a autora, acostumada à profundidade do romance, questiona como limitação."
    },
    {
      texto: `<p><strong>10 de maio</strong></p>
<p>Fui na delegacia e falei com o tenente. Que homem amavel! Se eu soubesse que ele era tão amavel, eu teria ido na delegacia na primeira intimação. [...] O tenente interessou-se pela educação dos meus filhos. Disse-me que a favela é um ambiente propenso, que as pessoas tem mais possibilidade de delinquir do que tornar-se util a patria e ao país. Pensei: se ele sabe disto, porque não faz um relatorio e envia para os politicos? O senhor Janio Quadros, o Kubstchek e o Dr. Adhemar de Barros? Agora falar para mim, que sou uma pobre lixeira.<br>
Não posso resolver nem as minhas dificuldades.<br>
... O Brasil precisa ser dirigido por uma pessoa que já passou fome. A fome tambem é professora. Quem passa fome aprende a pensar no próximo, e nas crianças.</p>
<p class="fonte">JESUS, C. M. Quarto de despejo: diário de uma favelada. São Paulo: Ática, 2014. | ENEM 2022 — Questão 42</p>`,
      pergunta: "A partir da intimação recebida pelo filho de 9 anos, a autora faz uma reflexão em que transparece a",
      opcoes: [
        "lição de vida comunicada pelo tenente.",
        "predisposição materna para se emocionar.",
        "atividade política marcante da comunidade.",
        "resposta irônica ante o discurso da autoridade.",
        "necessidade de revelar seus anseios mais íntimos."
      ],
      correta: "resposta irônica ante o discurso da autoridade.",
      explicacao: "(ENEM 2022, Q42) Carolina Maria de Jesus registra que o tenente diagnostica a favela como \"ambiente propenso\" à delinquência — e responde (internamente) com ironia afiada: \"se ele sabe disto, porque não faz um relatório e envia para os políticos?\" Ela desloca o problema do indivíduo para as estruturas políticas, ironizando a futilidade de um discurso direcionado a quem não tem poder de mudar nada. A ironia é o recurso central dessa reflexão."
    },
    {
      texto: `<p>O Recife fervilhava no começo da década de 1990, e os artistas trabalhavam para resgatar o prestígio da cultura pernambucana. Era preciso se inspirar, literalmente, nas raízes sobre as quais a cidade se construiu. Foi aí que, em 1992, com a publicação de um manifesto escrito pelo músico e jornalista Fred Zero Quatro, da banda Mundo Livre S/A, nasceu o manguebeat. O nome vem de "mangue", vegetação típica da região, e "beat", para representar as batidas e as influências musicais que o movimento abraçaria a partir dali. Era a hora e a vez de os caranguejos — aos quais os músicos recifenses gostavam de se comparar — mostrarem as caras: o maracatu e suas alfaias se misturaram com as batidas do hip-hop, as guitarras do rock, elementos eletrônicos e o sotaque recifense de Chico Science.</p>
<p class="fonte">FORCIOLI, G. et al. O mangue está de volta. Revista Esquinas, n. 87, set. 2019 (adaptado). | ENEM 2022 — Questão 45</p>`,
      pergunta: "Chico Science foi fundamental para a renovação da música pernambucana, fato que se deu pela",
      opcoes: [
        "utilização de aparelhos musicais eletrônicos em lugar dos instrumentos tradicionais.",
        "ocupação de espaços da natureza local para a produção de eventos musicais memoráveis.",
        "substituição de antigas práticas musicais, como o frevo, por melodias e harmonias inovadoras.",
        "recuperação de composições tradicionais folclóricas e sua apresentação em grandes festivais.",
        "integração de referenciais culturais de diferentes origens na construção de uma nova proposta musical."
      ],
      correta: "integração de referenciais culturais de diferentes origens na construção de uma nova proposta musical.",
      explicacao: "(ENEM 2022, Q45) O manguebeat não excluiu as tradições — ao contrário, fundiu o maracatu (tradição pernambucana) com hip-hop, rock, elementos eletrônicos e a identidade local. A renovação não se deu pela substituição, mas pela integração criativa: mistura de referências culturais diversas (local e global, tradição e modernidade) para construir algo novo. Esta síntese é o traço definitório do movimento."
    }
  ]
};
