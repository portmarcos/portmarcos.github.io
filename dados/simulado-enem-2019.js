/* ENEM 2019 — Linguagens, Códigos e suas Tecnologias · Questões reais (Caderno Azul, 1º dia) */
const QUIZ_DADOS = {
  id: "enem-2019-linguagens",
  titulo: "ENEM 2019 — Linguagens (Prova Real)",
  descricao: "10 questões reais do ENEM 2019 (Caderno Azul, 1º dia): campanha publicitária, canção sobre violência, Sherlock Holmes, esporte-espetáculo, software livre, crônica, poesia e Manifesto Futurista.",
  tempoPorQuestao: 150,
  questoes: [
    {
      texto: `<p><strong>PALAVRAS TÊM PODER</strong></p>
<p>Palavras informam, libertam, destroem preconceitos. / Palavras desinformam, aprisionam e criam preconceitos.<br>
Liberdade de expressão. A escolha é sua. A responsabilidade, também.</p>
<p>A liberdade de expressão é uma conquista inquestionável. O que todos precisam saber é que liberdade traz responsabilidades. Publicar informações e mensagens sensacionalistas, explorar imagens mórbidas, desrespeitar os Direitos Humanos e estimular o preconceito e a violência são atos de desrespeito à lei.<br>
Para promover a liberdade de expressão com responsabilidade, o Ministério Público de Pernambuco se une a vários parceiros nesta ação educativa. Colabore. Caso veja alguma mensagem que desrespeite os seus direitos, denuncie.</p>
<p class="fonte">Disponível em: http://palavrastempoder.org. Acesso em: 20 abr. 2015. | ENEM 2019 — Questão 06</p>`,
      pergunta: "Pela análise do conteúdo, constata-se que essa campanha publicitária tem como função social",
      opcoes: [
        "propagar a imagem positiva do Ministério Público.",
        "conscientizar a população que direitos implicam deveres.",
        "coibir violações de direitos humanos nos meios de comunicação.",
        "divulgar políticas sociais que combatem a intolerância e o preconceito.",
        "instruir as pessoas sobre a forma correta de expressão nas redes sociais."
      ],
      correta: "conscientizar a população que direitos implicam deveres.",
      explicacao: "(ENEM 2019, Q06) A campanha destaca que a liberdade de expressão é uma conquista, mas que vem acompanhada de responsabilidade. Não se trata apenas de punir ou divulgar políticas, mas de conscientizar: direitos implicam deveres. As alternativas A, C, D e E são efeitos secundários ou distratores — o núcleo da campanha é essa equação liberdade-responsabilidade."
    },
    {
      texto: `<p><strong>Um amor desse</strong></p>
<p>Era 24 horas lado a lado / Um radar na pele, aquele sentimento alucinado / Coração batia acelerado / Bastava um olhar pra eu entender / Que era hora de me entregar pra você / Palavras não faziam falta mais<br>
Ah, só de lembrar do seu perfume / Que arrepio, que calafrio / Que o meu corpo sente / Nem que eu queira, eu te apago da minha mente<br>
Ah, esse amor / Deixou marcas no meu corpo / Ah, esse amor / Só de pensar, eu grito, eu quase morro</p>
<p class="fonte">AZEVEDO, N.; LEÃO, W.; QUADROS, R. Coração pede socorro. Rio de Janeiro: Som Livre, 2018 (fragmento). | ENEM 2019 — Questão 07</p>
<p>Essa letra de canção foi composta especialmente para uma campanha de combate à violência contra as mulheres, buscando conscientizá-las acerca do limite entre relacionamento amoroso e relacionamento abusivo.</p>`,
      pergunta: "Para tanto, a estratégia empregada na letra é a",
      opcoes: [
        "revelação da submissão da mulher à situação de violência, que muitas vezes a leva à morte.",
        "ênfase na necessidade de se ouvirem os apelos da mulher agredida, que continuamente pede socorro.",
        "exploração de situação de duplo sentido, que mostra que atos de dominação e violência não configuram amor.",
        "divulgação da importância de denunciar a violência doméstica, que atinge um grande número de mulheres no país.",
        "naturalização de situações opressivas, que fazem parte da vida de mulheres em uma sociedade patriarcal."
      ],
      correta: "exploração de situação de duplo sentido, que mostra que atos de dominação e violência não configuram amor.",
      explicacao: "(ENEM 2019, Q07) A letra usa linguagem que, numa primeira leitura, parece descrever uma relação apaixonada (\"arrepio\", \"calafrio\", \"entregar pra você\"). O duplo sentido está justamente aí: as mesmas expressões descrevem o que é, na prática, uma relação de controle e violência. \"Deixou marcas no meu corpo\" e \"eu quase morro\" ganham sentido literal — é este choque de significados que denuncia o abuso disfarçado de amor."
    },
    {
      texto: `<p>Meu caro Sherlock Holmes, algo horrível aconteceu às três da manhã no Jardim Lauriston. Nosso homem que estava na vigia viu uma luz às duas da manhã saindo de uma casa vazia. Quando se aproximou, encontrou a porta aberta e, na sala da frente, o corpo de um cavalheiro bem vestido. Os cartões que estavam em seu bolso tinham o nome de Enoch J. Drebber, Cleveland, Ohio, EUA. <strong>Não houve assalto</strong> e nosso homem <strong>não conseguiu encontrar algo que indicasse como ele morreu. Não havia marcas de sangue, nem feridas nele. Não sabemos como ele entrou</strong> na casa vazia. Na verdade, todo assunto é um quebra-cabeça sem fim. Se puder vir até a casa seria ótimo, se não, eu lhe conto os detalhes e gostaria muito de saber sua opinião. Atenciosamente, Tobias Gregson.</p>
<p class="fonte">DOYLE, A. C. Um estudo em vermelho. Cotia: Pé de Letra, 2017. | ENEM 2019 — Questão 08</p>`,
      pergunta: "Considerando o objetivo da carta de Tobias Gregson, a sequência de enunciados negativos presente nesse texto tem a função de",
      opcoes: [
        "restringir a investigação, deixando-a sob a responsabilidade do autor da carta.",
        "refutar possíveis causas da morte do cavalheiro, auxiliando na investigação.",
        "identificar o local da cena do crime, localizando-o no Jardim Lauriston.",
        "introduzir o destinatário da carta, caracterizando sua personalidade.",
        "apresentar o vigia, incluindo-o entre os suspeitos do assassinato."
      ],
      correta: "refutar possíveis causas da morte do cavalheiro, auxiliando na investigação.",
      explicacao: "(ENEM 2019, Q08) Os enunciados negativos (\"não houve assalto\", \"não havia marcas de sangue\", \"não sabemos como\") servem exatamente para eliminar explicações usuais: não foi roubo, não houve ferimentos físicos visíveis, ninguém sabe como ele entrou. Ao descartar essas possibilidades, Gregson delimita o mistério e direciona o olhar investigativo de Holmes — é uma estratégia argumentativa de refutação de hipóteses."
    },
    {
      texto: `<p><strong>Mídias: aliadas ou inimigas da educação física escolar?</strong></p>
<p>No caso do esporte, a mediação efetuada pela câmera de TV construiu uma nova modalidade de consumo: o esporte telespetáculo, realidade textual relativamente autônoma face à prática "real" do esporte, construída pela codificação e mediação dos eventos esportivos efetuados pelo enquadramento, edição das imagens e comentários, interpretando para o espectador o que ele está vendo. Esse fenômeno tende a valorizar a forma em relação ao conteúdo, e para tal faz uso privilegiado da linguagem audiovisual com ênfase na imagem cujas possibilidades são levadas cada vez mais adiante, em decorrência dos avanços tecnológicos.<br>
Por outro lado, a narração esportiva propõe uma concepção hegemônica de esporte: esporte é esforço máximo, busca da vitória, dinheiro... O preço que se paga por sua espetacularização é a fragmentação do fenômeno esportivo. A experiência global do ser-atleta é modificada: a sociabilização no confronto e a ludicidade não são vivências privilegiadas no enfoque das mídias, mas as eventuais manifestações de violência, em partidas de futebol, por exemplo, são exibidas e reexibidas em todo o mundo.</p>
<p class="fonte">BETTI, M. Motriz, n. 2, jul.-dez. 2001 (adaptado). | ENEM 2019 — Questão 09</p>`,
      pergunta: "A reflexão trazida pelo texto, que aborda o esporte telespetáculo, está fundamentada na",
      opcoes: [
        "distorção da experiência do ser-atleta para os espectadores.",
        "interpretação dos espectadores sobre o conteúdo transmitido.",
        "utilização de equipamentos audiovisuais de última geração.",
        "valorização de uma visão ampliada do esporte.",
        "equiparação entre a forma e o conteúdo."
      ],
      correta: "distorção da experiência do ser-atleta para os espectadores.",
      explicacao: "(ENEM 2019, Q09) O texto argumenta que as mídias produzem uma versão do esporte que não corresponde à experiência real do atleta: fragmentam, espetacularizam, priorizam violência e performance em detrimento de sociabilização e ludicidade. Essa distorção — o esporte-telespetáculo versus a vivência real — é o núcleo da reflexão do autor."
    },
    {
      texto: `<p>O que é software livre</p>
<p>Software livre é qualquer programa de computador construído de forma colaborativa, via internet, por uma comunidade internacional de desenvolvedores independentes. São centenas de milhares de hackers, que negam sua associação com os "violadores de segurança". Esses desenvolvedores se recusam a reconhecer o significado pejorativo do termo e continuam usando a palavra hacker para indicar "alguém que ama programar e que gosta de ser hábil e engenhoso". Além disso, esses programas são entregues à comunidade com o código-fonte aberto e disponível, permitindo que a ideia original possa ser aperfeiçoada e devolvida à comunidade. Nos programas convencionais, o código de programação é secreto e de propriedade da empresa que o desenvolveu, sendo quase impossível decifrar a programação.<br>
O que está em jogo é o controle da inovação tecnológica. Software livre é uma questão de liberdade de expressão e não apenas uma relação econômica.</p>
<p class="fonte">BRANCO, M. In: CASTELLS, M.; CARDOSO, G. (Org). A sociedade em rede. Lisboa: Imprensa Nacional, 2005 (adaptado). | ENEM 2019 — Questão 18</p>`,
      pergunta: "A criação de softwares livres contribui para a produção do conhecimento na sociedade porque",
      opcoes: [
        "democratiza o acesso a produtos construídos coletivamente.",
        "complexifica os sistemas operacionais disponíveis no mercado.",
        "qualifica um maior número de pessoas para o uso de tecnologias.",
        "possibilita a coleta de dados confidenciais para seus desenvolvedores.",
        "insere profissionalmente os hackers na área de inovação tecnológica."
      ],
      correta: "democratiza o acesso a produtos construídos coletivamente.",
      explicacao: "(ENEM 2019, Q18) O texto apresenta o software livre como construção coletiva, com código aberto, que qualquer um pode usar, melhorar e redistribuir. A contribuição para o conhecimento está justamente nessa abertura: eliminar barreiras e democratizar o acesso a ferramentas criadas colaborativamente. As demais alternativas trazem consequências secundárias ou ideias não sustentadas pelo texto."
    },
    {
      texto: `<p><strong>Expostos na web desde a gravidez</strong></p>
<p>Mais da metade das mães e um terço dos pais ouvidos em uma pesquisa sobre compartilhamento paterno em mídias sociais discutem nas redes sociais sobre a educação dos filhos. Muitos são pais e mães de primeira viagem, frutos da geração Y (que nasceu junto com a internet) e usam esses canais para saberem que não estão sozinhos na empreitada de educar uma criança. Há, contudo, um risco no modo como as pessoas estão compartilhando essas experiências. É a chamada exposição parental exagerada, alertam os pesquisadores.<br>
De acordo com os especialistas, se você compartilha uma foto ou vídeo do seu filho pequeno fazendo algo ridículo, por achar engraçadinho, quando a criança tiver seus 11, 12 anos, pode se sentir constrangida. A autoconsciência vem com a idade.<br>
A exibição da privacidade dos filhos começa a assumir uma característica de linha do tempo e eles não participaram da aprovação ou recusa quanto à veiculação desses conteúdos. Assim, quando a criança cresce, sua privacidade pode já estar violada.</p>
<p class="fonte">OTONI, A. C. O Globo, 31 mar. 2015 (adaptado). | ENEM 2019 — Questão 19</p>`,
      pergunta: "Sobre o compartilhamento parental excessivo em mídias sociais, o texto destaca como impacto o(a)",
      opcoes: [
        "interferência das novas tecnologias na comunicação entre pais e filhos.",
        "desatenção dos pais em relação ao comportamento dos filhos na internet.",
        "distanciamento na relação entre pais e filhos provocado pelo uso das redes sociais.",
        "fortalecimento das redes de relações decorrente da troca de experiências entre as famílias.",
        "desrespeito à intimidade das crianças cujas imagens têm sido divulgadas nas redes sociais."
      ],
      correta: "desrespeito à intimidade das crianças cujas imagens têm sido divulgadas nas redes sociais.",
      explicacao: "(ENEM 2019, Q19) O texto argumenta que as crianças não participam da decisão de ter sua imagem compartilhada, e que, ao crescerem, descobrem que sua privacidade já foi violada. O impacto central não é o uso das redes em si, mas o fato de que a intimidade das crianças é exposta sem seu consentimento — um desrespeito que se torna perceptível à medida que desenvolvem autoconsciência."
    },
    {
      texto: `<p><strong>Menina</strong></p>
<p>A máquina de costura avançava decidida sobre o pano. Que bonita que a mãe era, com os alfinetes na boca. [...] Tita chamava-a de ( ) como quem diz ( ). Tentava não pensar as palavras, mas sabia que na mesma hora da tentativa tinha-as pensado. Oh, tudo era tão difícil. A mãe saberia o que ela queria perguntar-lhe intensamente agora quase com fome depressa depressa antes de morrer, tanto que não se conteve e — <em>Mamãe, o que é desquitada?</em> — atirou rápida com uma voz sem timbre. Tudo ficou suspenso, se alguém gritasse o mundo acabava ou Deus aparecia — sentia Ana Lúcia. Era muito forte aquele instante, forte demais para uma menina, a mãe parada com a tesoura no ar, tudo sem solução podendo desabar a qualquer pensamento, a máquina avançando desgovernada sobre o vestido de seda brilhante espalhando luz luz luz.</p>
<p class="fonte">ÂNGELO, I. Menina. In: A face horrível. São Paulo: Lazuli, 2017. | ENEM 2019 — Questão 21</p>`,
      pergunta: "Escrita na década de 1960, a narrativa põe em evidência uma dramaticidade centrada na",
      opcoes: [
        "insinuação da lacuna familiar gerada pela ausência da figura paterna.",
        "associação entre a angústia da menina e a reação intempestiva da mãe.",
        "relação conflituosa entre o trabalho doméstico e a emancipação feminina.",
        "representação de estigmas sociais modulados pela perspectiva da criança.",
        "expressão de dúvidas existenciais intensificadas pela percepção do abandono."
      ],
      correta: "representação de estigmas sociais modulados pela perspectiva da criança.",
      explicacao: "(ENEM 2019, Q21) A menina pergunta, inocentemente, o que é \"desquitada\" — um estigma social fortíssimo nos anos 1960. A tensão dramática nasce da distância entre a ingenuidade da criança (que simplesmente quer entender) e o peso social da palavra para os adultos (a mãe para tudo, o mundo parece desabar). A dramaticidade está justamente em ver um tabu social filtrado pelo olhar sem malícia de uma criança."
    },
    {
      texto: `<p><strong>Blues da piedade</strong></p>
<p>Vamos pedir piedade / Senhor, piedade / Pra essa gente careta e covarde<br>
Vamos pedir piedade / Senhor, piedade / Lhes dê grandeza e um pouco de coragem</p>
<p class="fonte">CAZUZA. Cazuza: o poeta não morreu. Rio de Janeiro: Universal Music, 2000 (fragmento). | ENEM 2019 — Questão 24</p>
<p>Todo gênero apresenta elementos constitutivos que condicionam seu uso em sociedade. A letra de canção identifica-se com o gênero ladainha, essencialmente, pela utilização da sequência textual</p>`,
      pergunta: "A letra identifica-se com a ladainha essencialmente pela sequência textual",
      opcoes: [
        "expositiva, por discorrer sobre um dado tema.",
        "narrativa, por apresentar uma cadeia de ações.",
        "injuntiva, por chamar o interlocutor à participação.",
        "descritiva, por enumerar características de um personagem.",
        "argumentativa, por incitar o leitor a uma tomada de atitude."
      ],
      correta: "injuntiva, por chamar o interlocutor à participação.",
      explicacao: "(ENEM 2019, Q24) A ladainha é um gênero litúrgico baseado em chamados e respostas, em que o fiel/falante convoca o interlocutor (o Senhor, a comunidade) à participação. \"Vamos pedir piedade\" é um convite/chamado à ação coletiva — isso é a sequência injuntiva. Não se trata de narrar eventos, descrever personagens ou argumentar, mas de convocar e engajar."
    },
    {
      texto: `<p>A rede é, antes de tudo, um instrumento de comunicação entre pessoas, um laço virtual em que as comunidades auxiliam seus membros a aprender o que querem saber. Os dados não representam senão a matéria-prima de um processo intelectual e social vivo, altamente elaborado. Enfim, toda inteligência coletiva do mundo jamais dispensará a inteligência pessoal, o esforço individual e o tempo necessário para aprender, pesquisar, avaliar e integrar-se a diversas comunidades, sejam elas virtuais ou não. A rede jamais pensará em seu lugar, fique tranquilo.</p>
<p class="fonte">LÉVY, P. A máquina universo: criação, cognição e cultura informática. Porto Alegre: Artmed, 1998. | ENEM 2019 — Questão 29</p>`,
      pergunta: "No contexto das novas tecnologias de informação e comunicação, a circulação de saberes depende da",
      opcoes: [
        "otimização do tempo.",
        "confiabilidade dos sites.",
        "contribuição dos usuários.",
        "quantidade de informação.",
        "colaboração de intelectuais."
      ],
      correta: "contribuição dos usuários.",
      explicacao: "(ENEM 2019, Q29) Lévy argumenta que a rede é um instrumento de pessoas, um laço em que comunidades auxiliam seus membros. O saber circula porque os usuários participam ativamente — aprendem, pesquisam, compartilham e se integram. A inteligência coletiva depende da inteligência pessoal e da contribuição de cada participante, e não apenas de quantidade de dados ou da velocidade de acesso."
    },
    {
      texto: `<p><strong>Manifesto futurista (1909)</strong> — Filippo Tommaso Marinetti</p>
<p>1. Nós queremos cantar o amor ao perigo, o hábito da energia e da temeridade.<br>
2. A coragem, a audácia, a rebelião serão elementos essenciais de nossa poesia.<br>
3. A literatura exaltou até hoje a imobilidade pensativa, o êxtase, o sono. Nós queremos exaltar o movimento agressivo, a insônia febril, o passo de corrida, o salto mortal, o bofetão e o soco.<br>
4. Nós afirmamos que a magnificência do mundo enriqueceu-se de uma beleza nova: a beleza da velocidade. Um automóvel de corrida com seu cofre enfeitado com tubos grossos, semelhantes a serpentes de hálito explosivo... um automóvel rugidor, que parece correr sobre a metralha, é mais bonito que a Vitória de Samotrácia.<br>
5. Nós queremos entoar hinos ao homem que segura o volante, cuja haste ideal atravessa a Terra, lançada também numa corrida sobre o circuito de sua órbita.</p>
<p class="fonte">MARINETTI, F. T. In: TELES, G. M. Vanguardas europeias e Modernismo brasileiro. Petrópolis: Vozes, 1985. | ENEM 2019 — Questão 40</p>`,
      pergunta: "O documento de Marinetti, de 1909, propõe os referenciais estéticos do Futurismo, que valorizam a",
      opcoes: [
        "composição estática.",
        "inovação tecnológica.",
        "suspensão do tempo.",
        "retomada do helenismo.",
        "manutenção das tradições."
      ],
      correta: "inovação tecnológica.",
      explicacao: "(ENEM 2019, Q40) O Manifesto Futurista exalta a velocidade, as máquinas, os automóveis, a energia — todos símbolos da modernidade industrial e tecnológica do início do século XX. Marinetti propõe que a beleza de um automóvel supera a de uma escultura grega clássica (a Vitória de Samotrácia), o que é uma celebração explícita da inovação tecnológica como novo valor estético."
    }
  ]
};
