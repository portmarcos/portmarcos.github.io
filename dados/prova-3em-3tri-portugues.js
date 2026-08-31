/* Prova — 3º Ano EM, 2º Trimestre 2026 (Língua Portuguesa)
   Renomeada de "3º Trimestre" para "2º Trimestre" a pedido do professor —
   arquivo/URL mantidos (prova-3em-3tri-portugues) para não quebrar link já
   compartilhado, só o rótulo visível mudou (título, og:tags, cabeçalho,
   atalho da home).
   15 questões (eram 13) misturando os assuntos pedidos pelo professor:
   Pré-Modernismo, Regência Verbal, Interpretação (ENEM), Crase, Memórias
   Póstumas de Brás Cubas, Funções da linguagem, 1ª fase do Modernismo,
   Pontuação, uma questão multimodal (texto + imagem) de Argumentação e a
   crônica de Machado de Assis.
   Estado em 31/ago/2026: 14 das 15 questões são reais de vestibular/ENEM/
   concurso, cada uma com texto de apoio (contextualizada) — só a questão
   de Pontuação (tópico 13) segue real mas sem texto de apoio próprio
   (Vestibular F.E. Bauru); nenhuma substituta contextualizada e
   não-duplicada foi confirmada até agora. Questões com texto de apoio
   maior usam tempoQuestao:300 (5 min) em vez do padrão de 120s.
   Ajuste de 31/ago/2026 (véspera da aplicação): a pedido do professor,
   4 questões foram trocadas por interpretação de texto real — Pronomes
   (tópico 4), Estratégias argumentativas (tópico 5), a questão de
   afirmativas I-V sobre sedentarismo (tópico 7) e a questão do bilhete
   de Virgília (tópico 10, FUVEST 2015, preterição) saíram; entraram 4
   questões reais do ENEM já auditadas no banco enem.html (tema
   Interpretação de Texto: esporte-participação ENEM 2017 Q31,
   biblioteca/redes sociais ENEM 2019 Q37, uso orientado da internet
   ENEM 2017 Q17, lema olímpico ENEM 2023 Q06) — cada uma tinha 5
   alternativas no banco original; uma delas foi descartada em cada
   questão (sempre um distrator redundante/fraco, nunca a correta) pra
   caber no formato de 4 alternativas desta prova, sem alterar o texto
   das opções mantidas. A outra questão de Brás Cubas (tópico 9, FUVEST
   2014, comparação com Almeida Garrett) foi cogitada pra troca mas
   mantida a pedido do professor, pra a obra continuar representada na
   prova. Pronomes/Estratégias argumentativas somem como tópicos — a
   prova fica mais concentrada em Interpretação de Texto (6 das 15
   questões, era 2). */
const QUIZ_DADOS = {
  id: "prova-3em-3tri-2026-portugues",
  titulo: "Prova — 3º Ano EM · 2º Trimestre (Língua Portuguesa)",
  descricao: "15 questões misturando literatura (Pré-Modernismo, 1ª fase do Modernismo, Memórias Póstumas de Brás Cubas, crônica de Machado de Assis), gramática (regência, crase, pontuação, funções da linguagem) e interpretação de texto (com uma questão multimodal).",
  tempoPorQuestao: 120,
  questoes: [

    /* 1. Pré-Modernismo (real, contextualizada — VUNESP/UNESP 2021) */
    { tempoQuestao: 300, texto: `<p>Percorrendo certa vez, nos fins de setembro [de 1897], as cercanias de Canudos, fugindo à monotonia de um canhoneio frouxo de tiros espaçados e soturnos, encontramos, no descer de uma encosta, anfiteatro irregular, onde as colinas se dispunham circulando um vale único. Pequenos arbustos, icozeiros virentes viçando em tufos intermeados de palmatórias de flores rutilantes, davam ao lugar a aparência exata de algum velho jardim em abandono. Ao lado uma árvore única, uma quixabeira alta, sobranceando a vegetação franzina.</p>
      <p>(Euclides da Cunha, "Os Sertões", 1902 — trecho da parte "A terra". A obra, dividida em três partes — "A terra", "O homem" e "A luta" —, nasceu da cobertura jornalística que o autor fez da Guerra de Canudos para o jornal <i>O Estado de S. Paulo</i>, entre agosto e outubro de 1897.)</p>
      <p class="fonte">VUNESP — UNESP 2021, 1ª fase, 1º dia, Questão 13.</p>`,
      pergunta: "Além da primeira parte, intitulada \"A terra\", outras duas partes, intituladas \"O homem\" e \"A luta\", compõem Os sertões. Verifica-se, assim, na própria estrutura da obra, uma nítida influência do(a):",
      opcoes: ["Determinismo", "Idealismo", "Iluminismo", "Socialismo"],
      correta: "Determinismo",
      explicacao: "A divisão tripartite da obra (A terra / O homem / A luta) reproduz a tríade determinista difundida no século XIX por Hippolyte Taine — meio, raça e momento histórico —, segundo a qual o comportamento humano é moldado por esses três fatores: o meio geográfico árido (\"A terra\") molda um tipo humano, o sertanejo (\"O homem\"), que entra em confronto com o Estado (\"A luta\"). Idealismo, Iluminismo e Socialismo não correspondem à base filosófico-científica que orienta a composição da obra, marcadamente naturalista-determinista. (Fonte: VUNESP — UNESP 2021.)" },

    /* 2. Regência Verbal (real, contextualizada — banco portugues/interpretacao-concursos.html do próprio site) */
    { tempoQuestao: 300, texto: `<p>Ele não aceitava a moça. Ela foi, foi, conversou, conversou, rodou, rodou, artimanhou, manhou, arte e manha, miou, afinal rendeu. Criança de emoções superficiais, rápidas, espontâneas e passageiras, ele cedeu. Aceitou-a.</p>
      <p>Fiquei pensando em algo tão definido pelos psicólogos e literatos, porém inesgotável e eterno como o tema humano: a necessidade de ser aceito.</p>
      <p>Ser aceito não é receber a concordância. É receber até a discordância, mas dentro de um princípio indefinível e fluídico de acolhimento prévio e gratuito do que se é como pessoa.</p>
      <p>Ser aceito é realizar a plenitude dos sentidos do verbo latino Accipio, que deu origem à palavra portuguesa. Accipio quer dizer: tomar para si; receber, acolher; perceber; ouvir, ouvir dizer; saber; compreender; interpretar; sofrer; experimentar; aprovar; aceitar; estar satisfeito com. Tem vários sentidos, tal e qual essa aceitação misteriosa e empática que alguns nos concedem.</p>
      <p>Ser aceito é ser percebido antes de ser entendido. É ser acolhido antes de ser querido. É ser recebido antes de ser conhecido. É ser experimentado antes da experiência. É, pois, um estado de compreensão prévia, que abre caminho para uma posterior concordância ou discordância, sem perda do afeto natural por nossa maneira de ser.</p>
      <p><b>Ser aceito implica mecanismos mais sutis e de maior alcance</b> do que os que derivam da razão. Implica intuição; compreensão milagrosa porque antecipatória; conhecimento efetivo e afetivo do universo interior; compreensão pela fraqueza; cuidado com as cicatrizes e nervos expostos, tolerância com delírio, tolices, medos, desordens, vesícula preguiçosa, medo do dentista ou disritmia.</p>
      <p>Ser aceito é ser feliz. Raro, pois. Quer fazer alguém feliz? Aceite-a em profundidade. E depois discorde à vontade. Ela aceitará.</p>
      <p class="fonte">Artur da Távola, "Da arte de aceitar" (crônica) — questão de prova de concurso público.</p>`,
      pergunta: "Assinale a opção cuja regência do verbo apresentado é a mesma do verbo destacado na passagem \"Ser aceito implica mecanismos mais sutis e de maior alcance...\":",
      opcoes: ["Lembrar-se.", "Obedecer.", "Visar (no sentido de almejar).", "Respeitar."],
      correta: "Respeitar.",
      explicacao: "Em \"Ser aceito implica mecanismos mais sutis...\", o verbo \"implicar\" (no sentido de \"envolver\", \"acarretar\") é transitivo direto, sem preposição. \"Respeitar\" tem a mesma regência (transitivo direto: \"respeitar algo/alguém\"). Os demais verbos das opções exigem preposição: \"lembrar-se DE\", \"obedecer A\", \"visar A\" (no sentido de almejar). (Fonte: prova de concurso público, banca não identificável no PDF original — questão do banco portugues/interpretacao-concursos.html deste site, tema Gramática; gabarito conferido por leitura gramatical direta.)" },

    /* 3. Regência Verbal (real, contextualizada — banco portugues/interpretacao-concursos.html do próprio site) */
    { tempoQuestao: 300, texto: `<p><b>SABIÁ GANHA STATUS DE AVE NACIONAL</b></p>
      <p>O sabiá sempre foi o pássaro escolhido por poetas e compositores brasileiros para representar o país. Já ganhou versos de alguns dos maiores artistas nacionais: de Gonçalves Dias, em sua "Canção do exílio", a Tom Jobim e Chico Buarque, em "Sabiá", passando por Luiz Gonzaga, na canção também chamada "Sabiá". Tamanho currículo capacitou o passarinho de peito alaranjado a ser considerado a ave nacional do Brasil, desbancando uma concorrente de peso: a ararajuba, com suas vistosas penas verdes e amarelas.</p>
      <p>Um decreto assinado pelo Presidente da República confirmou que o Dia da Ave é 5 de outubro e informou que "o centro de interesse para as festividades desse dia será o sabiá, como símbolo representativo da fauna ornitológica brasileira e considerado popularmente Ave Nacional do Brasil."</p>
      <p>– A ave nacional de um país não pode ser escolhida em razão da cor da bandeira – afirma o ornitólogo Johan Dalgas Frisch, presidente da ONG Associação de Preservação da Vida Selvagem e um dos maiores cabos eleitorais do passarinho. – Ela representa o folclore, a música, a poesia, a alma do povo. E não existe qualquer música com ararajuba, poesia alguma.</p>
      <p>Dalgas Frisch lembra ainda que, se a ararajuba fosse indicada ave nacional, correria o risco de ser extinta: – Uma ararajuba vale hoje cerca de US$ 5 mil entre os traficantes de animais. Se fosse ave nacional, passaria a valer uns US$ 50 mil. Acabaria sendo extinta e não representaria o espírito poético e folclórico da nação.</p>
      <p>O Brasil, com 1.667 espécies de aves, era um dos poucos países a não ter ave nacional. A águia de cabeça branca, nos Estados Unidos, simboliza a união de todos os estados. Já o robim, na Grã-Bretanha, foi escolhido por ter inspirado William Shakespeare. Na Argentina, a ave nacional é o hornero (joão-de-barro), que representa o gaúcho dos pampas.</p>
      <p>A campanha de Frisch para que o sabiá se tornasse ave nacional tem mais de 35 anos. Remonta ao tempo em que o então presidente Costa e Silva assinou um decreto criando o Dia da Ave.</p>
      <p>– Foram anos de luta, mas ganhamos a batalha e ainda salvamos a ararajuba – comemora.</p>
      <p class="fonte">O Globo, 23 nov. 2002 (com adaptações) — questão de prova de concurso público.</p>`,
      pergunta: "Marque a opção em que a regência do verbo NÃO está adequada, conforme a norma culta:",
      opcoes: ["O pesquisador agregou-se ao grupo da universidade.", "O auxiliar inseriu os dados no computador.", "A criança agradeceu os primos o presente.", "Eu entreguei o requerimento ao advogado."],
      correta: "A criança agradeceu os primos o presente.",
      explicacao: "Pela norma culta, \"agradecer\" rege o objeto direto para a coisa e o objeto indireto (com \"a\") para a pessoa: \"agradeceu o presente aos primos\", nunca \"agradeceu os primos o presente\". As demais regências estão corretas: \"agregar-se a\" e \"entregar a\" são usos consagrados, assim como \"inserir em\". (Fonte: O Globo, 23 nov. 2002 — questão do banco portugues/interpretacao-concursos.html deste site, tema Gramática.)" },

    /* 4. Interpretação de Texto (real, contextualizada — ENEM 2017, Questão 31) */
    { tempoQuestao: 300, texto: `<p>No esporte-participação ou esporte popular, a manifestação ocorre no princípio do prazer lúdico, que tem como finalidade o bem-estar social dos seus praticantes. Está associado intimamente com o lazer e o tempo livre e ocorre em espaços não comprometidos com o tempo e fora das obrigações da vida diária. Tem como propósitos a descontração, a diversão, o desenvolvimento pessoal e o relacionamento com as pessoas. Pode-se afirmar que o esporte-participação, por ser a dimensão social do esporte mais inter-relacionada com os caminhos democráticos, equilibra o quadro de desigualdades de oportunidades esportivas encontrado na dimensão esporte-performance. Enquanto o esporte-performance só permite sucesso aos talentos ou àqueles que tiveram condições, o esporte-participação favorece o prazer a todos que dele desejarem tomar parte.</p>
      <p class="fonte">GODTSFRIEDT, J. Esporte e sua relação com a sociedade: uma síntese bibliográfica. EFDeportes, n. 142, mar. 2010. ENEM 2017 — Questão 31.</p>`,
      pergunta: "O sentido de esporte-participação construído no texto está fundamentalmente presente",
      opcoes: ["nos Jogos Olímpicos, uma vez que reúnem diversos países na disputa de diferentes modalidades esportivas.", "nos campeonatos oficiais de futebol, regionais e nacionais, por se tratar de uma modalidade esportiva muito popular no país.", "nas competições promovidas pelas federações e confederações, cujo objetivo é a formação e a descoberta de talentos.", "nas modalidades esportivas adaptadas, cujo objetivo é o maior engajamento dos cidadãos."],
      correta: "nas modalidades esportivas adaptadas, cujo objetivo é o maior engajamento dos cidadãos.",
      explicacao: "O texto define esporte-participação por oposição ao esporte-performance: não busca talentos nem premia apenas quem \"tem condições\" — busca incluir todo mundo que queira participar. As outras alternativas (Olimpíadas, campeonatos oficiais, competições de federações) são, todas, exemplos de esporte-performance disfarçados. Só as modalidades adaptadas, pensadas para incluir o maior número possível de pessoas, encarnam o conceito descrito no texto. (Fonte: ENEM 2017, Questão 31.)" },

    /* 5. Interpretação de Texto (real, contextualizada — ENEM 2019, Questão 37) */
    { tempoQuestao: 300, texto: `<p>Na semana passada, os alunos do colégio estadual organizaram um abaixo-assinado on-line contra o fechamento da biblioteca da escola, decisão anunciada pela direção por falta de verba para manutenção do espaço. Em poucos dias, a petição alcançou mais de duas mil assinaturas e ganhou repercussão nas redes sociais, mobilizando ex-alunos, professores e moradores do bairro. Pressionada pela repercussão, a direção recuou e anunciou uma campanha de arrecadação para manter a biblioteca funcionando.</p>
      <p class="fonte">GOMES, A. A revolução silenciosa e o impacto na sociedade das redes sociais. Disponível em: www.hsm.com.br. Acesso em: 31 jul. 2012 (adaptado). ENEM 2019 — Questão 37.</p>`,
      pergunta: "O texto aborda a temática das tecnologias da informação e comunicação, especificamente o uso de redes sociais. Muito se debate acerca dos benefícios e malefícios do uso desses recursos e, nesse sentido, o texto",
      opcoes: ["mostra que as reivindicações feitas nas redes sociais não têm impacto fora da internet.", "expõe a possibilidade de as redes sociais favorecerem comportamentos e manifestações violentos dos adolescentes que nelas se relacionam.", "trata as redes sociais como modo de agregar e empoderar grupos de pessoas, que se unem em prol de causas próprias ou de mudanças sociais.", "evidencia que as redes sociais são usadas inadequadamente pelos adolescentes, que, imaturos, não utilizam a ferramenta como forma de mudança social."],
      correta: "trata as redes sociais como modo de agregar e empoderar grupos de pessoas, que se unem em prol de causas próprias ou de mudanças sociais.",
      explicacao: "A mobilização (abaixo-assinado, repercussão, pressão sobre a direção) começa on-line mas termina com um efeito concreto no mundo real: a biblioteca é salva. Esse é o ponto-chave para eliminar a ideia de que as reivindicações feitas em redes sociais \"não têm impacto fora da internet\" — o texto mostra exatamente o oposto. As redes aparecem aqui como ferramenta de agregação e empoderamento coletivo, não como fonte de violência ou uso inadequado. (Fonte: ENEM 2019, Questão 37.)" },

    /* 6. Interpretação — ENEM */
    { tempoQuestao: 300, texto: `<p>Ora, sempre que surge uma nova técnica, ela quer demonstrar que revogará as regras e coerções que presidiram o nascimento de todas as outras invenções do passado. Ela se pretende orgulhosa e única. Como se a nova técnica carreasse com ela, automaticamente, para seus novos usuários, uma propensão natural a fazer economia de qualquer aprendizagem. Como se ela se preparasse para varrer tudo que a precedeu, ao mesmo tempo transformando em analfabetos todos os que ousassem repeli-la.</p>
      <p>Fui testemunha dessa mudança ao longo de toda a minha vida. Ao passo que, na realidade, é o contrário que acontece. Cada nova técnica exige uma longa iniciação numa nova linguagem, ainda mais longa na medida em que nosso espírito é formatado pela utilização das linguagens que precederam o nascimento da recém-chegada.</p>
      <p class="fonte">ECO, U.; CARRIÈRE, J.-C. Não contem com o fim do livro. Rio de Janeiro: Record, 2010 (adaptado). ENEM 2022 — Questão 39.</p>`,
      pergunta: "O texto revela que, quando a sociedade promove o desenvolvimento de uma nova técnica, o que mais impacta seus usuários é a",
      opcoes: ["dificuldade na apropriação da nova linguagem.", "valorização da utilização da nova tecnologia.", "suplantação imediata dos conhecimentos prévios.", "rapidez no aprendizado do manuseio das novas invenções."],
      correta: "dificuldade na apropriação da nova linguagem.",
      explicacao: "Cuidado com a armadilha: o texto começa descrevendo o que as novas técnicas \"querem parecer\" (fáceis, revolucionárias) — mas o segundo parágrafo desmente isso: \"é o contrário que acontece\". Eco argumenta que toda nova técnica, na prática, exige uma \"longa iniciação numa nova linguagem\"." },

    /* 7. Interpretação de Texto (real, contextualizada — ENEM 2017, Questão 17) */
    { tempoQuestao: 300, texto: `<p>Há um medo por parte dos pais e de alguns professores de as crianças desaprenderem quando navegam, medo de elas viciarem, de obterem informação não confiável, de elas se isolarem do mundo real, como se o computador fosse um agente do mal, um vilão. Esse medo é reforçado pela mídia, que costuma apresentar o computador como um agente negativo na aprendizagem e na socialização dos usuários. Nós sabemos que ninguém corre o risco de desaprender quando navega, seja em ambientes digitais ou em materiais impressos, mas é preciso ver o que se está aprendendo e algumas vezes interferir nesse processo a fim de otimizar ou orientar a aprendizagem, mostrando aos usuários outros temas, outros caminhos, outras possibilidades diferentes daquelas que eles encontraram sozinhos ou daquelas que eles costumam usar.</p>
      <p class="fonte">COSCARELLI, C. V. Linguagem em (Dis)curso, n. 3, set.-dez. 2009. ENEM 2017 — Questão 17.</p>`,
      pergunta: "A autora incentiva o uso da internet pelos estudantes, ponderando sobre a necessidade de orientação a esse uso, pois essa tecnologia",
      opcoes: ["está repleta de informações confiáveis que constituem fonte única para a aprendizagem dos alunos.", "tende a se tornar um agente negativo na aprendizagem e na socialização de crianças e jovens.", "possibilita maior ampliação do conhecimento de mundo quando a aprendizagem é direcionada.", "leva ao isolamento do mundo real e ao uso exclusivo do computador se a navegação for desmedida."],
      correta: "possibilita maior ampliação do conhecimento de mundo quando a aprendizagem é direcionada.",
      explicacao: "O truque desta questão é não parar no meio do texto. A autora LISTA os medos das pessoas (informação não confiável, agente negativo, isolamento) só para, em seguida, desmontá-los: \"sabemos que ninguém corre o risco de desaprender\". A tese dela não é contra a internet, é a favor do USO ORIENTADO — é isso que a opção sobre ampliar o conhecimento de mundo capta, e as demais opções descrevem justamente os medos que ela está refutando. (Fonte: ENEM 2017, Questão 17.)" },

    /* 8. Crase */
    { tempoQuestao: 300, texto: `<p>Em junho de 2015, a equipe de produção do cantor Caetano Veloso publicou nas redes sociais uma legenda anunciando "Homenagem à Bituca" — apelido do cantor e compositor Milton Nascimento. Irritado, Caetano gravou um vídeo corrigindo o erro ao vivo: como "Bituca" é apelido de um homem, não existe artigo feminino para se fundir com a preposição "a" ali.</p>
      <p class="fonte">Insper 2016, 2ª fase.</p>`,
      pergunta: "A irritação do cantor Caetano Veloso se justifica porque a inclusão indevida do acento grave na expressão \"Homenagem à Bituca\"",
      opcoes: ["apresenta conotação de caráter malicioso.", "reitera a deferência ao cantor homenageado.", "altera a identificação do real homenageado.", "impede a decodificação da mensagem."],
      correta: "altera a identificação do real homenageado.",
      explicacao: "A crase só ocorre quando a preposição \"a\" se funde com um artigo feminino diante de palavra feminina. \"Bituca\" é apelido masculino — o acento indevido sugere, pelo padrão visual \"à + palavra\", que o homenageado seria identificado por nome/apelido feminino, desvirtuando a identificação de quem de fato está sendo homenageado." },

    /* 9. Memórias Póstumas de Brás Cubas (real, contextualizada — FUVEST 2014, Cap. LXXI) */
    { tempoQuestao: 300, texto: `<p>Começo a arrepender-me deste livro. Não que ele me canse; eu não tenho que fazer; e, realmente, expedir alguns magros capítulos para esse mundo sempre é tarefa que distrai um pouco da eternidade. Mas o livro é enfadonho, cheira a sepulcro, traz certa contração cadavérica; vício grave, e aliás ínfimo, porque o maior defeito deste livro és tu, leitor. Tu tens pressa de envelhecer, e o livro anda devagar; tu amas a narração direita e nutrida, o estilo compassado e liso, e este livro e o meu estilo são como os ébrios, guinam à direita e à esquerda, andam e param, resmungam, urram, gargalham, ameaçam o céu, escorregam e caem...</p>
      <p>(Machado de Assis, "Memórias Póstumas de Brás Cubas", 1881 — trecho do Capítulo LXXI, "O senão do livro".)</p>
      <p class="fonte">FUVEST — 2014, 1ª fase, Prova V, Questão 83.</p>`,
      pergunta: "Um leitor que tivesse as mesmas inclinações atribuídas, pelo narrador, ao leitor de Memórias Póstumas de Brás Cubas teria maior probabilidade de impacientar-se, também, com a leitura de:",
      opcoes: ["Memórias de um sargento de milícias", "Viagens na minha terra", "O cortiço", "A cidade e as serras"],
      correta: "Viagens na minha terra",
      explicacao: "O narrador descreve seu próprio livro como digressivo, inconstante, sem a \"narração direita e nutrida\" que um leitor apressado espera. Viagens na Minha Terra, de Almeida Garrett, tem exatamente esse mesmo caráter: intercala crônica de viagem, novela sentimental e cartas, com pouquíssima linearidade — por isso um leitor impaciente com Brás Cubas se impacientaria igualmente com essa obra. Memórias de um sargento de milícias, O cortiço e A cidade e as serras, apesar de digressões pontuais, têm conduções narrativas bem mais lineares. (Fonte: FUVEST 2014.)" },

    /* 10. Interpretação de Texto (real, contextualizada — ENEM 2023, Questão 06) */
    { tempoQuestao: 300, texto: `<p>A sessão do Comitê Olímpico Internacional (COI) aprovou uma mudança histórica e inédita no lema olímpico, criado em 1894 pelo Barão Pierre de Coubertin para expressar os valores e a excelência do esporte. Mais de 120 anos depois, o lema tem sua primeira alteração para ressaltar a solidariedade e incluir a palavra "juntos": mais rápido, mais alto, mais forte — juntos. A mudança foi aprovada por unanimidade pelos membros do COI e celebrada pelo presidente da entidade.</p>
      <p class="fonte">Disponível em: https://ge.globo.com. Acesso em: 10 nov. 2021 (adaptado). ENEM 2023 — Questão 06.</p>`,
      pergunta: "De acordo com o texto, a alteração do lema olímpico teve como objetivo a",
      opcoes: ["unificação do lema anterior ao atual.", "junção do lema olímpico com os princípios esportivos.", "associação entre o lema olímpico e a cooperatividade.", "vinculação entre o lema olímpico e os eventos atléticos."],
      correta: "associação entre o lema olímpico e a cooperatividade.",
      explicacao: "O texto é curto, então a resposta está literalmente ali: a mudança serviu \"para ressaltar a solidariedade e incluir a palavra 'juntos'\". Solidariedade e \"juntos\" são sinônimos, no contexto esportivo, de cooperatividade. As outras opções inventam relações que o texto não estabelece: o lema não se junta formalmente aos \"princípios esportivos\" de modo genérico, não se limita a uma simples unificação do lema anterior, nem se vincula especificamente aos eventos atléticos. (Fonte: ENEM 2023, Questão 06.)" },

    /* 11. Funções da linguagem */
    { tempoQuestao: 300, texto: `<p>O telefone tocou.<br>— Alô? Quem fala?<br>— Como? Com quem deseja falar?<br>— Quero falar com o sr. Samuel Cardoso.<br>— É ele mesmo. Quem fala, por obséquio?<br>— Não se lembra mais da minha voz, seu Samuel? Faça um esforço.<br>— Lamento muito, minha senhora, mas não me lembro. Pode dizer-me de quem se trata?</p>
      <p class="fonte">ANDRADE, C. D. Contos de aprendiz. Rio de Janeiro: José Olympio, 1958. ENEM 2014 (3ª aplicação).</p>`,
      pergunta: "Pela insistência em manter o contato entre o emissor e o receptor, predomina no texto a função",
      opcoes: ["fática.", "referencial.", "emotiva.", "conativa."],
      correta: "fática.",
      explicacao: "A função fática se concentra no CANAL de comunicação — sua marca é verificar, prolongar ou interromper o contato entre quem fala e quem ouve, sem necessariamente transmitir informação nova. Isso fica evidente em todo o diálogo: os dois interlocutores só confirmam que a ligação continua ativa e identificam um ao outro." },

    /* 12. 1ª fase do Modernismo (real, contextualizada — USP/FUVEST 2023, via BLUEX)
       Candidata anterior (UNICAMP 2024, crítica de Mário de Andrade a Bilac)
       tinha sido descartada por duplicar a questão do Parnasianismo da prova
       2EM/2ºTri — substituída agora por esta, com fonte e tema diferentes. */
    { tempoQuestao: 300, texto: `<p>I.<br>"É indispensável romper com todas as diplomacias nocivas, mandar pro diabo qualquer forma de hipocrisia, suprimir as políticas literárias e conquistar uma profunda sinceridade pra com os outros e pra consigo mesmo. A convicção dessa urgência foi pra mim a melhor conquista até hoje do movimento que chamam de 'modernismo'. Foi ela que nos permitiu a intuição de que carecemos, sob pena de morte, de procurar uma arte de expressão nacional".</p>
      <p class="fonte-interna">HOLANDA, Sérgio Buarque de. O lado oposto e outros lados, 1926.</p>
      <p>II.<br>"Trazendo de países distantes nossas formas de convívio, nossas instituições, nossas ideias, e timbrando em manter tudo isso em ambiente muitas vezes desfavorável e hostil, somos ainda hoje uns desterrados em nossa terra".</p>
      <p class="fonte-interna">HOLANDA, Sérgio Buarque de. Raízes do Brasil, 1936.</p>
      <p class="fonte">FUVEST — USP 2023, 1ª fase, Questão 47.</p>`,
      pergunta: "Os dois excertos do historiador e crítico literário Sérgio Buarque de Holanda salientam que a cultura brasileira somente completará a sua formação quando:",
      opcoes: ["souber reproduzir fielmente os modelos externos.", "importar uma estética à altura da sua genialidade.", "abolir a necessidade de figurar o caráter nacional.", "firmar, na arte e na vida social, a sua autenticidade."],
      correta: "firmar, na arte e na vida social, a sua autenticidade.",
      explicacao: "No trecho I, Sérgio Buarque associa o modernismo à busca de \"sinceridade\" e de uma \"arte de expressão nacional\" — não mais copiada de fora. No trecho II, ele descreve o brasileiro como \"desterrado em sua terra\" por reproduzir formas e ideias estrangeiras num ambiente que não pede por elas. A síntese dos dois trechos é que a cultura brasileira só se completa quando afirma sua própria autenticidade, na arte e na vida social — e não enquanto continuar apenas reproduzindo (a) ou importando (b) modelos de fora, nem abolindo o caráter nacional (c), que é exatamente o oposto do que os textos defendem. (Fonte: FUVEST — USP 2023, 1ª fase, Questão 47.)" },

    /* 13. Pontuação */
    { pergunta: "Assinale a alternativa em que há erro de pontuação:",
      opcoes: ["Era do conhecimento de todos a hora da prova, mas, alguns se atrasaram.", "A hora da prova era do conhecimento de todos; alguns se atrasaram, porém.", "Todos conhecem a hora da prova; não se atrasem, pois.", "Todos conhecem a hora da prova, portanto não se atrasem."],
      correta: "Era do conhecimento de todos a hora da prova, mas, alguns se atrasaram.",
      explicacao: "O erro está na vírgula logo depois da conjunção adversativa \"mas\": não se separa a conjunção coordenativa do restante da oração com vírgula quando ela abre a oração normalmente — o certo seria \"mas alguns se atrasaram\", sem vírgula ali. Nas demais, a pontuação está correta. (Fonte: Vestibular F.E. Bauru)" },

    /* 14. Argumentação — questão MULTIMODAL (texto + campanha educativa), real —
       reaproveitada do banco já auditado enem.html (ENEM 2016, Questão 109).
       Imagem já existente em assets/img/questoes/. */
    { tempoQuestao: 300, texto: `<img src="/assets/img/questoes/transito.png" alt="Campanha educativa de trânsito combinando texto e imagem sobre o uso do celular ao volante.">
      <p class="fonte">Disponível em: www.paradapelavida.com.br. Acesso em: 15 nov. 2014. ENEM 2016 — Questão 109.</p>`,
      pergunta: "Nesse texto, a combinação de elementos verbais e não verbais configura-se como estratégia argumentativa para",
      opcoes: ["associar a utilização do celular às ocorrências de atropelamento de crianças.", "orientar pedestres e motoristas quanto à utilização responsável do telefone móvel.", "influenciar o comportamento de motoristas em relação ao uso de celular no trânsito.", "alertar a população para os riscos da falta de atenção no trânsito das grandes cidades."],
      correta: "influenciar o comportamento de motoristas em relação ao uso de celular no trânsito.",
      explicacao: "A campanha combina imagem e texto especificamente para atingir o comportamento do motorista que usa celular ao dirigir — o alvo principal do alerta é influenciar essa prática de risco específica, não apenas alertar genericamente sobre trânsito ou orientar pedestres e motoristas por igual. (Fonte: ENEM 2016, Questão 109.)" },

    /* 15. Machado de Assis (crônica, real, contextualizada — UNICAMP 2022, via BLUEX) */
    { tempoQuestao: 300, texto: `<p>"(...) eu sou um pobre relojoeiro que, cansado de ver que os relógios deste mundo não marcam a mesma hora, descri do ofício. (...) Um exemplo. O Partido Liberal, segundo li, estava encasacado e pronto para sair, com o relógio na mão, porque a hora pingava. Faltava-lhe só o chapéu, que seria o chapéu Dantas, ou o chapéu Saraiva (ambos da chapelaria Aristocrata); era só pô-lo na cabeça, e sair. Nisto passa o carro do paço com outra pessoa, e ele descobre que ou o seu relógio está adiantado, ou o de Sua Alteza é que se atrasara. Quem os porá de acordo?"</p>
      <p class="fonte">Machado de Assis, Bons dias. Introdução e notas John Gledson. 3. ed. Campinas: Editora da Unicamp, 2008, p. 79. Crônica publicada em 05 de abril de 1888 na Gazeta de Notícias. UNICAMP 2022, 1ª fase, Questão 5.</p>`,
      pergunta: "Com relação ao excerto da crônica de Machado de Assis, é correto afirmar que a metáfora mecânica faz referência à passagem do tempo, aludindo à expectativa de mudança de:",
      opcoes: ["regime a partir de discordâncias políticas que levaram à eleição do governo imperial.", "século, marcada pela perspectiva da chegada do meteorito de Bendegó na corte imperial.", "mentalidade escravagista, com um pacto político para suspensão de costumes imperiais.", "legislação, com a alternância entre partidos para a formação de um novo ministério do governo imperial."],
      correta: "legislação, com a alternância entre partidos para a formação de um novo ministério do governo imperial.",
      explicacao: "Machado usa a metáfora dos relógios dessincronizados (o do Partido Liberal e o \"de Sua Alteza\", o Imperador) para satirizar a expectativa de troca de ministério: o partido já estava \"pronto para sair\" — isto é, para assumir o poder —, mas o relógio da Corte marcava outra hora, adiando a alternância político-partidária típica do parlamentarismo às avessas do Segundo Reinado (onde o Imperador, e não o voto popular, decidia quando trocar o gabinete ministerial). Não há, no trecho, nenhuma menção a mudança de regime (república), a um meteorito, ou à escravidão — a crônica é sobre a demora de uma troca de ministério. (Fonte: UNICAMP 2022, 1ª fase, Questão 5.)" }
  ]
};
