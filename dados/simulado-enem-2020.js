/* ENEM 2020 — Linguagens, Códigos e suas Tecnologias · 1ª Aplicação · Questões reais (Caderno Azul, 1º dia) */
const QUIZ_DADOS = {
  id: "enem-2020-linguagens",
  titulo: "ENEM 2020 — Linguagens (Prova Real)",
  descricao: "10 questões reais do ENEM 2020/1ª aplicação (Caderno Azul, 1º dia): Bandeira e Pasárgada, Slam do Corpo, conto de Pellegrini, aptidão física, empreendedorismo de palco, Caetano Veloso, conto de Ondjaki, romance de Dyonelio Machado e Policarpo Quaresma.",
  tempoPorQuestao: 150,
  questoes: [
    {
      texto: `<p>Vou-me embora p'ra Pasárgada foi o poema de mais longa gestação em toda a minha obra. Vi pela primeira vez esse nome Pasárgada quando tinha os meus dezesseis anos e foi num autor grego. [...] Esse nome de Pasárgada, que significa "campo dos persas" ou "tesouro dos persas", suscitou na minha imaginação uma paisagem fabulosa, um país de delícias. Mais de vinte anos depois, quando eu morava só na minha casa da Rua do Curvelo, num momento de fundo desânimo, da mais aguda sensação de tudo o que eu não tinha feito em minha vida por motivo da doença, saltou-me de súbito do subconsciente este grito estapafúrdio: "Vou-me embora p'ra Pasárgada!" Senti na redondilha a primeira célula de um poema, e tentei realizá-lo, mas fracassei. Alguns anos depois, em idênticas circunstâncias de desalento e tédio, me ocorreu o mesmo desabafo de evasão da "vida besta". Desta vez o poema saiu sem esforço como se já estivesse pronto dentro de mim.</p>
<p class="fonte">BANDEIRA, M. Itinerário de Pasárgada. Rio de Janeiro: Nova Fronteira; Brasília: INL, 1984. | ENEM 2020 — Questão 06</p>`,
      pergunta: "Os processos de interação comunicativa preveem a presença ativa de múltiplos elementos da comunicação, entre os quais se destacam as funções da linguagem. Nesse fragmento, a função da linguagem predominante é a",
      opcoes: [
        "emotiva, porque o poeta expõe os sentimentos de angústia que o levaram à criação poética.",
        "referencial, porque o texto informa sobre a origem do nome empregado em um famoso poema de Bandeira.",
        "metalinguística, porque o poeta tece comentários sobre a gênese e o processo de escrita de um de seus poemas.",
        "poética, porque o texto aborda os elementos estéticos de um dos poemas mais conhecidos de Bandeira.",
        "apelativa, porque o poeta tenta convencer os leitores sobre sua dificuldade de compor um poema."
      ],
      correta: "metalinguística, porque o poeta tece comentários sobre a gênese e o processo de escrita de um de seus poemas.",
      explicacao: "(ENEM 2020, Q06) A função metalinguística ocorre quando a linguagem tem a si mesma como objeto — quando se fala sobre a própria linguagem ou sobre o processo de criação artística. Bandeira não está apenas narrando fatos de sua vida (emotiva) nem informando sobre história (referencial): ele discorre especificamente sobre como o poema foi criado, como surgiu a ideia, como ele fracassou e depois conseguiu escrevê-lo. É a linguagem comentando sobre a linguagem."
    },
    {
      texto: `<p><strong>Slam do Corpo</strong> é um encontro pensado para surdos e ouvintes, existente desde 2014, em São Paulo. Uma iniciativa pioneira do grupo Corposinalizante, criado em 2008. (Antes de seguirmos, vale a explicação: o termo slam vem do inglês e significa — numa nova acepção para o verbo geralmente utilizado para dizer "bater com força" — a "poesia falada nos ritmos das palavras e da cidade"). Nos saraus, o primeiro objetivo foi o de botar os poemas em Libras na roda, colocar os surdos para circular e entender esse encontro entre a poesia e a língua de sinais. Poemas de autoria própria, três minutos, um microfone. Sem figurino, nem adereços, nem acompanhamento musical. O que vale é modular a voz e o corpo, um trabalho artesanal de tornar a palavra "visível", numa arena cujo objetivo maior é o de emocionar a plateia, tirar o público da passividade, seja pelo humor, horror, caos, doçura e outras tantas sensações.</p>
<p class="fonte">NOVELLI, G. Poesia incorporada. Revista Continente, n. 189, set. 2016 (adaptado). | ENEM 2020 — Questão 08</p>`,
      pergunta: "Na prática artística mencionada no texto, o corpo assume papel de destaque ao articular diferentes linguagens com o intuito de",
      opcoes: [
        "imprimir ritmo e visibilidade à expressão poética.",
        "redefinir o espaço de circulação da poesia urbana.",
        "estimular produções autorais de usuários de Libras.",
        "traduzir expressões verbais para a língua de sinais.",
        "proporcionar performances estéticas de pessoas surdas."
      ],
      correta: "imprimir ritmo e visibilidade à expressão poética.",
      explicacao: "(ENEM 2020, Q08) O texto define o Slam do Corpo como espaço em que voz e corpo são modulados para tornar a palavra \"visível\". O corpo não é apenas suporte: ele articula gestos, movimento e expressão para dar ritmo e materialidade à poesia. \"Visível\" é a palavra-chave — o corpo imprime visibilidade ao que normalmente é apenas sonoro. As demais alternativas são aspectos secundários ou incorretos (não é só para usuários de Libras, nem apenas para surdos)."
    },
    {
      texto: `<p>Fomos falar com o tal encarregado, depois com um engenheiro, depois com um supervisor que mandou chamar um engenheiro da nossa companhia. Esses homens são da sua companhia, engenheiro, ele falou, estão pedindo a conta. A companhia está empenhada nessa ponte, gente, falou o engenheiro, vocês não podem sair assim sem mais nem menos. Tinha uma serra circular cortando uns caibros ali perto, então só dava pra falar quando a serra parava, e aquilo foi dando nos nervos.<br>
Falei que a gente tinha o direito de sair quando a gente quisesse, e pronto. Nisso encostou um sujeito de paletó mas sem gravata, o engenheiro continuou falando e a serra cortando. Quando ele parou de falar, 50 Volts aproveitou uma parada da serra e falou que a gente não era bicho pra trabalhar daquele jeito; daí o supervisor falou que, se era falta de mulher, eles davam um jeito. O engenheiro falou que tinha mais de vinte companhias trabalhando na ponte, a maioria com prejuízo, porque era mais uma questão de honra, a gente tinha de acabar a ponte, a nossa companhia nunca ia esquecer nosso trabalho ali naquela ponte, um orgulho nacional.</p>
<p class="fonte">PELLEGRINI, D. A maior ponte do mundo. In: Melhores contos. São Paulo: Global, 2005. | ENEM 2020 — Questão 16</p>`,
      pergunta: "As reivindicações dos operários, quanto às condições aviltantes de trabalho a que são submetidos, recebem algumas tentativas de neutralização dos representantes do empregador, das quais a mais forte é o(a)",
      opcoes: [
        "sequência de atribuição de responsabilidades e de poder decisório a terceiros.",
        "solicitação em nome dos prejuízos e compromissos para entrega da obra.",
        "intimidação pela discreta presença de um agente de segurança na cena.",
        "promessa de imediato atendimento da carência sexual dos operários.",
        "apelo pela identificação com a empresa extensiva ao amor patriótico."
      ],
      correta: "apelo pela identificação com a empresa extensiva ao amor patriótico.",
      explicacao: "(ENEM 2020, Q16) Ao dizer que a ponte é \"uma questão de honra\" e \"um orgulho nacional\", o engenheiro tenta fazer os operários se identificarem não só com a empresa mas com o próprio país — como se abandonar a obra fosse trair a pátria. Este é o argumento mais poderoso porque dilui a dimensão trabalhista e converte a exploração em dever cívico e patriótico."
    },
    {
      texto: `<p>Uma das mais contundentes críticas ao discurso da aptidão física relacionada à saúde está no caráter eminentemente individual de suas propostas, o que serve para obscurecer outros determinantes da saúde. Ou seja, costuma-se apresentar o indivíduo como o problema e a mudança do estilo de vida como a solução. Argumenta-se ainda que o movimento da aptidão física relacionada à saúde considera a existência de uma cultura homogênea na qual todos seriam livres para escolher seus estilos de vida, o que não condiz com a realidade. O fato é que vivemos numa sociedade dividida em classes sociais, na qual nem todas as pessoas têm condições econômicas para adotar um estilo de vida ativo e saudável. Há desigualdades estruturais com raízes políticas, econômicas e sociais que dificultam a adoção desses estilos de vida.</p>
<p class="fonte">FERREIRA, M. S. Aptidão física e saúde na educação física escolar: ampliando o enfoque. RBCE, n. 2, jan. 2001 (adaptado). | ENEM 2020 — Questão 17</p>`,
      pergunta: "Com base no texto, a relação entre saúde e estilos de vida",
      opcoes: [
        "constrói a ideia de que a mudança individual de hábitos promove a saúde.",
        "considera a homogeneidade da escolha de hábitos saudáveis pelos indivíduos.",
        "reforça a necessidade de solucionar os problemas de saúde da sociedade com a prática de exercícios.",
        "problematiza a organização social e seu impacto na mudança de hábitos dos indivíduos.",
        "reproduz a noção de que a melhoria da aptidão física pela prática de exercícios promove a saúde."
      ],
      correta: "problematiza a organização social e seu impacto na mudança de hábitos dos indivíduos.",
      explicacao: "(ENEM 2020, Q17) O texto critica justamente a visão que coloca no indivíduo a responsabilidade pela saúde, ignorando as desigualdades estruturais. A classe social, as condições econômicas e as raízes políticas determinam o que é ou não acessível para cada pessoa. O autor problematiza essa organização social e seus efeitos reais na capacidade de cada um adotar um estilo de vida saudável."
    },
    {
      texto: `<p><strong>Por que a indústria do empreendedorismo de palco irá destruir você</strong></p>
<p>Se, antigamente, os livros, enormes e com suas setecentas páginas, cuspiam fórmulas, equações e cálculos que te ensinavam a lidar com o fluxo de caixa da sua empresa, hoje eles dizem: "Você irá chegar lá! Acredite, você irá vencer!".<br>
<em>Mindset, empoderamento, millennials, networking, coworking, deal, business, deadline, salesman com perfil hunter</em>… tudo isso faz parte do seu vocabulário. O pacote de livros é sempre idêntico e as experiências são passadas da mesma forma: você está a um único centímetro da vitória. Não pare!<br>
Se desistir agora, será para sempre. Tome, leia a estratégia do oceano azul. Faça mais uma mentoria, participe de mais uma sessão de coaching. O problema é que o seu mindset não está ajustado. Você precisa ser mais proativo.</p>
<p class="fonte">CARVALHO, Í. C. Disponível em: https://medium.com. Acesso em: 17 ago. 2017 (adaptado). | ENEM 2020 — Questão 20</p>`,
      pergunta: "De acordo com o texto, é possível identificar o 'empreendedor de palco' por",
      opcoes: [
        "livros por ele indicados.",
        "suas habilidades em língua inglesa.",
        "experiências por ele compartilhadas.",
        "padrões de linguagem por ele utilizados.",
        "preços acessíveis de seus treinamentos."
      ],
      correta: "padrões de linguagem por ele utilizados.",
      explicacao: "(ENEM 2020, Q20) O texto ironiza o \"empreendedor de palco\" exatamente pelo vocabulário que ele usa: mindset, networking, coaching, millennials, hunter, deadline — uma linguagem padronizada, cheia de anglicismos e jargões que substituem o conteúdo substantivo por frases motivacionais vazias. É esse padrão de linguagem (e não os livros, a experiência ou os preços em si) que permite identificá-lo."
    },
    {
      texto: `<p>Eu tenho empresas e sou digno do visto para ir a Nova York. O dinheiro que chove em Nova York é para pessoas com poder de compra. Pessoas que tenham um visto do consulado americano. O dinheiro que chove em Nova York também é para os nova-iorquinos. São milhares de dólares. [...] Estou indo para Nova York, onde está chovendo dinheiro. Sou um grande administrador. Sim, está chovendo dinheiro em Nova York. Deu no rádio. Vejo que há pedestres invadindo a via onde trafega o meu carro vermelho, importado da Alemanha. Vejo que há carros nacionais trafegando pela via onde trafega o meu carro vermelho, importado da Alemanha. Ao chegar em Nova York, tomarei providências.</p>
<p class="fonte">SANT'ANNA, A. O importado vermelho de Noé. In: MORICONI, I. (Org.). Os cem melhores contos. Rio de Janeiro: Objetiva, 2001. | ENEM 2020 — Questão 23</p>`,
      pergunta: "As repetições e as frases curtas constituem procedimentos linguísticos importantes para a compreensão da temática do texto, pois",
      opcoes: [
        "expressam a futilidade do discurso de poder e de distinção do narrador.",
        "disfarçam a falta de densidade das angústias existenciais narradas.",
        "ironizam a valorização da cultura norte-americana pelos brasileiros.",
        "explicitam a ganância financeira do capitalismo contemporâneo.",
        "criticam os estereótipos sociais das visões de mundo elitistas."
      ],
      correta: "expressam a futilidade do discurso de poder e de distinção do narrador.",
      explicacao: "(ENEM 2020, Q23) A obsessiva repetição de elementos como \"meu carro vermelho, importado da Alemanha\" e \"Nova York, onde está chovendo dinheiro\" revela um narrador preso em seu próprio discurso de status e poder. A estrutura fragmentada e circular não aprofunda ideias — ao contrário, a repetição exibe a vacuidade desse discurso de distinção social, sua futilidade e circularidade vazia."
    },
    {
      texto: `<p><strong>Caminhando contra o vento</strong><br>
Sem lenço e sem documento / No sol de quase dezembro / Eu vou<br>
O sol se reparte em crimes / Espaçonaves, guerrilhas / Em cardinales bonitas / Eu vou<br>
Em caras de presidentes / Em grandes beijos de amor / Em dentes, pernas, bandeiras / Bombas e Brigitte Bardot<br>
O sol nas bancas de revista / Me enche de alegria e preguiça / Quem lê tanta notícia / Eu vou</p>
<p class="fonte">VELOSO, C. Alegria, alegria. In: Caetano Veloso. São Paulo: Phillips, 1967 (fragmento). | ENEM 2020 — Questão 27</p>
<p>É comum coexistirem sequências tipológicas em um mesmo gênero textual. Nesse fragmento, os tipos textuais que se destacam na organização temática são</p>`,
      pergunta: "Os tipos textuais que se destacam na organização temática do fragmento são",
      opcoes: [
        "descritivo e argumentativo, pois o enunciador detalha cada lugar por onde passa, argumentando contra a violência urbana.",
        "dissertativo e argumentativo, pois o enunciador apresenta seu ponto de vista sobre as notícias relativas à cidade.",
        "expositivo e injuntivo, pois o enunciador fala de seus estados físicos e psicológicos e interage com a mulher amada.",
        "narrativo e descritivo, pois o enunciador conta sobre suas andanças pelas ruas da cidade ao mesmo tempo que a descreve.",
        "narrativo e injuntivo, pois o enunciador ensina o interlocutor como andar pelas ruas da cidade contando sobre sua própria experiência."
      ],
      correta: "narrativo e descritivo, pois o enunciador conta sobre suas andanças pelas ruas da cidade ao mesmo tempo que a descreve.",
      explicacao: "(ENEM 2020, Q27) O enunciador narra sua caminhada pela cidade (\"Eu vou\", ação em progresso) e ao mesmo tempo descreve o cenário urbano: o sol, as bancas de revista, as imagens que vê no trajeto (presidentes, bombas, Brigitte Bardot). Há uma sobreposição de ação narrada (trajetória) com descrição do espaço percorrido — narrativo e descritivo coexistem sem que haja argumentação ou instrução."
    },
    {
      texto: `<p><strong>A vida às vezes é como um jogo brincado na rua</strong>: estamos no último minuto de uma brincadeira bem quente e não sabemos que a qualquer momento pode chegar um mais velho a avisar que a brincadeira já acabou e está na hora de jantar. A vida afinal acontece muito de repente — nunca ninguém nos avisou que aquele era mesmo o último Carnaval da Vitória. O Carnaval também chegava sempre de repente. Nós, as crianças, vivíamos num tempo fora do tempo, sem nunca sabermos dos calendários de verdade. [...] O "dia da véspera do Carnaval", como dizia a avó Nhé, era dia de confusão com roupas e pinturas a serem preparadas, sonhadas e inventadas. Mas quando acontecia era um dia rápido, porque os dias mágicos passam depressa deixando marcas fundas na nossa memória, que alguns chamam também de coração.</p>
<p class="fonte">ONDJAKI. Os da minha rua. Rio de Janeiro: Língua Geral, 2007. | ENEM 2020 — Questão 34</p>`,
      pergunta: "As significações afetivas engendradas no fragmento pressupõem o reconhecimento da",
      opcoes: [
        "perspectiva infantil assumida pela voz narrativa.",
        "suspensão da linearidade temporal da narração.",
        "tentativa de materializar lembranças da infância.",
        "incidência da memória sobre as imagens narradas.",
        "alternância entre impressões subjetivas e relatos factuais."
      ],
      correta: "perspectiva infantil assumida pela voz narrativa.",
      explicacao: "(ENEM 2020, Q34) As afetividades do texto só fazem sentido se reconhecermos que a voz narrativa adota o olhar de uma criança: o tempo sem calendários, o Carnaval como evento mágico e inesperado, a comparação da vida com uma brincadeira na rua. Essa perspectiva infantil é o que transforma eventos cotidianos em memórias carregadas de encantamento e marca afetiva — sem ela, o texto perderia sua dimensão emocional."
    },
    {
      texto: `<p>— O senhor pensa que eu tenho alguma fábrica de dinheiro? (O diretor diz essas coisas a ele, mas olha para todos como quem quer dar uma explicação a todos. Todas as caras sorriem.) Quando seu filho esteve doente, eu o ajudei como pude. Não me peça mais nada. Não me encarregue de pagar as suas contas: já tenho as minhas, e é o que me basta... (Risos.)<br>
O diretor tem o rosto escanhoado, a camisa limpa. A palavra possui um tom educado, de pessoa que convive com gente inteligente. O rosto do Dr. Rist resplandece, vermelho e glabro.<br>
Naziazeno espera que ele lhe dê as costas, vá reatar a palestra interrompida, aquelas observações sobre a questão social, comunismo e integralismo.</p>
<p class="fonte">MACHADO, D. Os ratos. São Paulo: Círculo do Livro, s/d. | ENEM 2020 — Questão 40</p>`,
      pergunta: "A ficção modernista explorou tipos humanos em situação de conflito social. No fragmento do romancista gaúcho, esse conflito revela a",
      opcoes: [
        "sujeição moral amplificada pela pobreza.",
        "crise econômica em expansão nas cidades.",
        "falta de diálogo entre patrões e empregados.",
        "perspicácia marcada pela formação intelectual.",
        "tensão política gerada pelas ideologias vigentes."
      ],
      correta: "sujeição moral amplificada pela pobreza.",
      explicacao: "(ENEM 2020, Q40) Naziazeno está em posição de completa vulnerabilidade diante do diretor: precisa de dinheiro, aguarda em silêncio, é ignorado publicamente. O diretor transforma o pedido em espetáculo humilhante para os colegas presentes. A pobreza de Naziazeno não é apenas material — ela o priva de qualquer posição de igualdade moral na cena. A sujeição é física (esperar em silêncio) e moral (ser humilhado com sorriso alheio)."
    },
    {
      texto: `<p>Policarpo Quaresma, cidadão brasileiro, funcionário público, certo de que a língua portuguesa é emprestada ao Brasil; certo também de que, por esse fato, o falar e o escrever em geral, sobretudo no campo das letras, se veem na humilhante contingência de sofrer continuamente censuras ásperas dos proprietários da língua; sabendo, além, que, dentro do nosso país, os autores e os escritores, com especialidade os gramáticos, não se entendem no tocante à correção gramatical, vendo-se, diariamente, surgir azedas polêmicas entre os mais profundos estudiosos do nosso idioma — usando do direito que lhe confere a Constituição, vem pedir que o Congresso Nacional decrete o tupi-guarani como língua oficial e nacional do povo brasileiro.</p>
<p class="fonte">BARRETO, L. Triste fim de Policarpo Quaresma. Disponível em: www.dominiopublico.gov.br. Acesso em: 26 jun. 2012. | ENEM 2020 — Questão 41</p>`,
      pergunta: "Nessa petição da pitoresca personagem do romance de Lima Barreto, o uso da norma-padrão justifica-se pela",
      opcoes: [
        "situação social de enunciação representada.",
        "divergência teórica entre gramáticos e literatos.",
        "pouca representatividade das línguas indígenas.",
        "atitude irônica diante da língua dos colonizadores.",
        "tentativa de solicitação do documento demandado."
      ],
      correta: "situação social de enunciação representada.",
      explicacao: "(ENEM 2020, Q41) Policarpo escreve uma petição formal ao Congresso Nacional — gênero que exige, por convenção social, o registro culto da língua. O paradoxo cômico está justamente aí: um documento que pede o abandono do português e a adoção do tupi-guarani é escrito em português formal e elaborado. A norma-padrão se justifica pela situação de enunciação (petição oficial ao poder legislativo), não por ironia ou outros motivos."
    }
  ]
};
