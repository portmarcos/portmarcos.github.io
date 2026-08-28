/* Prova — 3º Ano EM, 3º Trimestre 2026 (Língua Portuguesa)
   13 questões misturando os assuntos pedidos pelo professor: Pré-Modernismo,
   Regência Verbal, Pronomes, Estratégias argumentativas, Interpretação
   (ENEM + concurso), Crase, Memórias Póstumas de Brás Cubas, Funções da
   linguagem, 1ª fase do Modernismo e Pontuação.
   Estado em 28/ago/2026 (sessão de contextualização com questões reais):
   12 das 13 questões são reais de vestibular/ENEM/concurso, cada uma com
   texto de apoio (contextualizada) — só 1 segue pedagógica (1ª fase do
   Modernismo, tópico 12: a única candidata real encontrada, UNICAMP 2024,
   é duplicata exata da questão já usada no Parnasianismo da prova 2EM/2ºTri,
   por isso foi descartada). A questão de Pontuação (tópico 13) é real
   (Vestibular F.E. Bauru) mas ainda sem texto de apoio próprio — nenhuma
   substituta contextualizada e não-duplicada foi confirmada até agora. */
const QUIZ_DADOS = {
  id: "prova-3em-3tri-2026-portugues",
  titulo: "Prova — 3º Ano EM · 3º Trimestre (Língua Portuguesa)",
  descricao: "13 questões misturando literatura (Pré-Modernismo, 1ª fase do Modernismo, Memórias Póstumas de Brás Cubas), gramática (regência, pronomes, crase, pontuação, funções da linguagem), interpretação de texto e redação.",
  tempoPorQuestao: 120,
  questoes: [

    /* 1. Pré-Modernismo (real, contextualizada — VUNESP/UNESP 2021) */
    { texto: `<p>Percorrendo certa vez, nos fins de setembro [de 1897], as cercanias de Canudos, fugindo à monotonia de um canhoneio frouxo de tiros espaçados e soturnos, encontramos, no descer de uma encosta, anfiteatro irregular, onde as colinas se dispunham circulando um vale único. Pequenos arbustos, icozeiros virentes viçando em tufos intermeados de palmatórias de flores rutilantes, davam ao lugar a aparência exata de algum velho jardim em abandono. Ao lado uma árvore única, uma quixabeira alta, sobranceando a vegetação franzina.</p>
      <p>(Euclides da Cunha, "Os Sertões", 1902 — trecho da parte "A terra". A obra, dividida em três partes — "A terra", "O homem" e "A luta" —, nasceu da cobertura jornalística que o autor fez da Guerra de Canudos para o jornal <i>O Estado de S. Paulo</i>, entre agosto e outubro de 1897.)</p>
      <p class="fonte">VUNESP — UNESP 2021, 1ª fase, 1º dia, Questão 13.</p>`,
      pergunta: "Além da primeira parte, intitulada \"A terra\", outras duas partes, intituladas \"O homem\" e \"A luta\", compõem Os sertões. Verifica-se, assim, na própria estrutura da obra, uma nítida influência do(a):",
      opcoes: ["Determinismo", "Idealismo", "Iluminismo", "Socialismo"],
      correta: "Determinismo",
      explicacao: "A divisão tripartite da obra (A terra / O homem / A luta) reproduz a tríade determinista difundida no século XIX por Hippolyte Taine — meio, raça e momento histórico —, segundo a qual o comportamento humano é moldado por esses três fatores: o meio geográfico árido (\"A terra\") molda um tipo humano, o sertanejo (\"O homem\"), que entra em confronto com o Estado (\"A luta\"). Idealismo, Iluminismo e Socialismo não correspondem à base filosófico-científica que orienta a composição da obra, marcadamente naturalista-determinista. (Fonte: VUNESP — UNESP 2021.)" },

    /* 2. Regência Verbal (real, contextualizada — banco portugues/interpretacao-concursos.html do próprio site) */
    { texto: `<p>Ele não aceitava a moça. Ela foi, foi, conversou, conversou, rodou, rodou, artimanhou, manhou, arte e manha, miou, afinal rendeu. Criança de emoções superficiais, rápidas, espontâneas e passageiras, ele cedeu. Aceitou-a.</p>
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
    { texto: `<p><b>SABIÁ GANHA STATUS DE AVE NACIONAL</b></p>
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

    /* 4. Pronomes (real, contextualizada — banco portugues/interpretacao-concursos.html do próprio site) */
    { texto: `<p>Olívia se aproximou de Eugênio e com um lenço enxugou-lhe o suor da testa. Estava terminada a traqueostomia. A enfermeira juntava os ferros.</p>
      <p>Ruído de metais tinindo, de mesas se arrastando.</p>
      <p>Eugênio tirou as luvas e foi tomar o pulso do pequeno paciente. A criança como que ressuscitava.</p>
      <p>A respiração voltava lentamente, a princípio superficial, depois mais funda e visível. O rosto perdia aos poucos a rigidez cianótica.</p>
      <p><b>Eugênio examinava-lhe as mudanças do rosto</b> com comovida atenção.</p>
      <p>Vencera! Salvara a vida de uma criança!</p>
      <p>A vida é boa! – pensava Eugênio. Ele tinha salvo uma criança. Começou a cantarolar baixinho uma canção antiga que julgava esquecida. Sorvia com delícia o refresco impregnado do cheiro da gasolina queimada. Sentia-se leve e aéreo. Era como se dentro dele as nuvens de tempestade se tivessem despejado em chuva e sua alma agora estivesse límpida, fresca e estrelada como a noite.</p>
      <p>– Por que será – perguntou ele a Olívia – por que será que às vezes de repente a gente tem a impressão de que acabou de nascer... ou de que o mundo ainda está fresquinho, recém-saído das mãos de quem o fez?</p>
      <p class="fonte">VERÍSSIMO, Érico. Olhai os lírios do campo. Rio de Janeiro: Globo, 1987 (fragmento) — questão de prova de concurso público.</p>`,
      pergunta: "Na passagem \"Eugênio examinava-lhe as mudanças do rosto com comovida atenção\", o pronome oblíquo \"lhe\" exerce função sintática idêntica ao termo destacado em:",
      opcoes: ["\"Olívia se aproximou de Eugênio...\"", "\"A enfermeira juntava os ferros.\"", "\"A respiração voltava lentamente,\"", "\"Sentia-se leve e aéreo.\""],
      correta: "\"Olívia se aproximou de Eugênio...\"",
      explicacao: "\"Lhe\" em \"examinava-lhe as mudanças do rosto\" é objeto indireto do verbo (dativo, equivalente a \"examinava as mudanças do rosto dele\"). \"De Eugênio\", em \"aproximou-se de Eugênio\", também é objeto indireto, complemento exigido pela regência do verbo pronominal \"aproximar-se de\", tendo assim a mesma função sintática. As demais opções trazem sujeito (\"a enfermeira\", \"a respiração\") ou uma construção reflexiva sem valor de objeto indireto equivalente. (Fonte: Érico Veríssimo, Olhai os lírios do campo, 1987 — questão do banco portugues/interpretacao-concursos.html deste site, tema Gramática.)" },

    /* 5. Estratégias argumentativas (real, contextualizada — ENEM PPL 2015) */
    { texto: `<p>Ao interagirmos socialmente, é comum deixarmos claro nosso posicionamento a respeito do assunto discutido. Para isso, muitas vezes, recorremos a determinadas estratégias argumentativas, dentre as quais se encontra o argumento de autoridade.</p>
      <p><b>Trecho 1:</b> "Seja curioso, saboreie os momentos da vida e tome consciência de como se sente. Refletir sobre suas experiências ajuda a descobrir o que realmente importa."</p>
      <p><b>Trecho 2:</b> "As pesquisas mostram que quem tem menos de três pessoas em sua rede de contatos próxima — entre família e amigos — tem mais chance de desenvolver uma doença mental."</p>
      <p><b>Trecho 3:</b> "Caminhe ou corra, ande de bicicleta, pratique um esporte, dance. Os exercícios fazem as pessoas se sentirem bem."</p>
      <p><b>Trecho 4:</b> "Fazer parte de uma comunidade traz benefícios — entre eles, relações sociais mais significativas."</p>
      <p class="fonte">ENEM PPL 2015 — 2ª Aplicação, 2º dia, Caderno 13 (Cinza), Questão 102.</p>`,
      pergunta: "Considerando o texto em suas partes, constata-se que há o emprego de argumento de autoridade no trecho:",
      opcoes: ["Trecho 1", "Trecho 2", "Trecho 3", "Trecho 4"],
      correta: "Trecho 2",
      explicacao: "O argumento de autoridade consiste em sustentar uma afirmação recorrendo a uma fonte especializada, institucional ou reconhecida socialmente — no Trecho 2, a expressão \"as pesquisas mostram\" cumpre exatamente esse papel, transferindo credibilidade científica à recomendação. Os demais trechos usam outras estratégias (apelo à reflexão pessoal, recomendação de hábito, afirmação genérica sobre benefício social), mas nenhum deles cita uma fonte externa que valide a afirmação. (Fonte: ENEM PPL 2015, 2ª Aplicação.)" },

    /* 6. Interpretação — ENEM */
    { texto: `<p>Ora, sempre que surge uma nova técnica, ela quer demonstrar que revogará as regras e coerções que presidiram o nascimento de todas as outras invenções do passado. Ela se pretende orgulhosa e única. Como se a nova técnica carreasse com ela, automaticamente, para seus novos usuários, uma propensão natural a fazer economia de qualquer aprendizagem. Como se ela se preparasse para varrer tudo que a precedeu, ao mesmo tempo transformando em analfabetos todos os que ousassem repeli-la.</p>
      <p>Fui testemunha dessa mudança ao longo de toda a minha vida. Ao passo que, na realidade, é o contrário que acontece. Cada nova técnica exige uma longa iniciação numa nova linguagem, ainda mais longa na medida em que nosso espírito é formatado pela utilização das linguagens que precederam o nascimento da recém-chegada.</p>
      <p class="fonte">ECO, U.; CARRIÈRE, J.-C. Não contem com o fim do livro. Rio de Janeiro: Record, 2010 (adaptado). ENEM 2022 — Questão 39.</p>`,
      pergunta: "O texto revela que, quando a sociedade promove o desenvolvimento de uma nova técnica, o que mais impacta seus usuários é a",
      opcoes: ["dificuldade na apropriação da nova linguagem.", "valorização da utilização da nova tecnologia.", "suplantação imediata dos conhecimentos prévios.", "rapidez no aprendizado do manuseio das novas invenções."],
      correta: "dificuldade na apropriação da nova linguagem.",
      explicacao: "Cuidado com a armadilha: o texto começa descrevendo o que as novas técnicas \"querem parecer\" (fáceis, revolucionárias) — mas o segundo parágrafo desmente isso: \"é o contrário que acontece\". Eco argumenta que toda nova técnica, na prática, exige uma \"longa iniciação numa nova linguagem\"." },

    /* 7. Interpretação — prova de concurso */
    { texto: `<p>É costume que a gente ouça sobre a importância da prática de um exercício físico regularmente.</p>
      <p>Os benefícios apontados não são poucos. Vão desde a melhora do condicionamento físico, passando pelos impactos positivos na saúde mental e na prevenção de doenças como diabetes e hipertensão, comuns na vida dos brasileiros.</p>
      <p>Assim, estar em contato com um esporte ou atividade física regular nos traz bons resultados — físicos e psicológicos — e também nos conecta com o mundo e com a gente mesmo.</p>
      <p>Apesar das vantagens, 47% dos brasileiros são sedentários, e esse número cresce na faixa etária mais jovem, pois apenas 16% das pessoas nesse grupo praticam algum tipo de exercício.</p>
      <p class="fonte">Disponível em: https://vidasimples.com. Acesso em: 28 jan. 2023. Adaptado. Prova de concurso público.</p>`,
      pergunta: "Analise as afirmativas a seguir tendo em vista o texto. I – O índice de brasileiros que não praticam qualquer atividade física é 47%. II – O índice de brasileiros mais jovens que praticam atividade física é 16%. III – A prática de atividade física traz benefícios exclusivamente à saúde física. IV – A prática de um esporte ou uma atividade física contribui para a socialização. V – A prática de atividade física não é recomendável para pessoas hipertensas. Estão CORRETAS as afirmativas",
      opcoes: ["II, III, IV e V, apenas.", "I, II e IV, apenas.", "III, IV e V, apenas.", "I, II, III, IV e V."],
      correta: "I, II e IV, apenas.",
      explicacao: "I e II reproduzem com precisão os dados do texto: 47% de sedentarismo geral e 16% de prática entre os mais jovens. IV procede, pois o texto diz que a atividade física \"nos conecta com o mundo\", ideia associada à socialização. III é falsa: o texto menciona expressamente benefícios psicológicos, não só físicos. V é falsa: a atividade física é apresentada como prevenção da hipertensão, não como algo contraindicado." },

    /* 8. Crase */
    { texto: `<p>Em junho de 2015, a equipe de produção do cantor Caetano Veloso publicou nas redes sociais uma legenda anunciando "Homenagem à Bituca" — apelido do cantor e compositor Milton Nascimento. Irritado, Caetano gravou um vídeo corrigindo o erro ao vivo: como "Bituca" é apelido de um homem, não existe artigo feminino para se fundir com a preposição "a" ali.</p>
      <p class="fonte">Insper 2016, 2ª fase.</p>`,
      pergunta: "A irritação do cantor Caetano Veloso se justifica porque a inclusão indevida do acento grave na expressão \"Homenagem à Bituca\"",
      opcoes: ["apresenta conotação de caráter malicioso.", "reitera a deferência ao cantor homenageado.", "altera a identificação do real homenageado.", "impede a decodificação da mensagem."],
      correta: "altera a identificação do real homenageado.",
      explicacao: "A crase só ocorre quando a preposição \"a\" se funde com um artigo feminino diante de palavra feminina. \"Bituca\" é apelido masculino — o acento indevido sugere, pelo padrão visual \"à + palavra\", que o homenageado seria identificado por nome/apelido feminino, desvirtuando a identificação de quem de fato está sendo homenageado." },

    /* 9. Memórias Póstumas de Brás Cubas (real, contextualizada — FUVEST 2014, Cap. LXXI) */
    { texto: `<p>Começo a arrepender-me deste livro. Não que ele me canse; eu não tenho que fazer; e, realmente, expedir alguns magros capítulos para esse mundo sempre é tarefa que distrai um pouco da eternidade. Mas o livro é enfadonho, cheira a sepulcro, traz certa contração cadavérica; vício grave, e aliás ínfimo, porque o maior defeito deste livro és tu, leitor. Tu tens pressa de envelhecer, e o livro anda devagar; tu amas a narração direita e nutrida, o estilo compassado e liso, e este livro e o meu estilo são como os ébrios, guinam à direita e à esquerda, andam e param, resmungam, urram, gargalham, ameaçam o céu, escorregam e caem...</p>
      <p>(Machado de Assis, "Memórias Póstumas de Brás Cubas", 1881 — trecho do Capítulo LXXI, "O senão do livro".)</p>
      <p class="fonte">FUVEST — 2014, 1ª fase, Prova V, Questão 83.</p>`,
      pergunta: "Um leitor que tivesse as mesmas inclinações atribuídas, pelo narrador, ao leitor de Memórias Póstumas de Brás Cubas teria maior probabilidade de impacientar-se, também, com a leitura de:",
      opcoes: ["Memórias de um sargento de milícias", "Viagens na minha terra", "O cortiço", "A cidade e as serras"],
      correta: "Viagens na minha terra",
      explicacao: "O narrador descreve seu próprio livro como digressivo, inconstante, sem a \"narração direita e nutrida\" que um leitor apressado espera. Viagens na Minha Terra, de Almeida Garrett, tem exatamente esse mesmo caráter: intercala crônica de viagem, novela sentimental e cartas, com pouquíssima linearidade — por isso um leitor impaciente com Brás Cubas se impacientaria igualmente com essa obra. Memórias de um sargento de milícias, O cortiço e A cidade e as serras, apesar de digressões pontuais, têm conduções narrativas bem mais lineares. (Fonte: FUVEST 2014.)" },

    /* 10. Memórias Póstumas de Brás Cubas (real, contextualizada — FUVEST 2015, Cap. CVII-CVIII) */
    { texto: `<p><i>[Capítulo "Bilhete": Virgília, temendo que o marido, Lobo Neves, desconfie do caso extraconjugal dela com Brás Cubas, manda-lhe às pressas um recado.]</i></p>
      <p>"Não houve nada, mas ele suspeita alguma coisa; está muito sério e não fala; agora saiu. Sorriu uma vez somente, para Nhonhô, depois de o fitar muito tempo, carrancudo. Não me tratou mal nem bem. Não sei o que vai acontecer; Deus queira que isto passe. Muita cautela, por ora, muita cautela."</p>
      <p>Eis aí o drama, eis aí a ponta da orelha trágica de Shakespeare. Esse retalhinho de papel, garatujado em partes, machucado das mãos, era um documento de análise, que eu não farei neste capítulo, nem no outro, nem talvez em todo o resto do livro. Poderia eu tirar ao leitor o gosto de notar por si mesmo a frieza, a perspicácia e o ânimo dessas poucas linhas traçadas à pressa; e por trás delas a tempestade de outro cérebro, a raiva dissimulada, o desespero que se constrange e medita, porque tem de resolver-se na lama, ou nas lágrimas?</p>
      <p class="fonte">Machado de Assis, "Memórias Póstumas de Brás Cubas", 1881 — Capítulos CVII-CVIII. FUVEST — 2015, 1ª fase, Prova V, Questão 30.</p>`,
      pergunta: "Ao comentar o bilhete de Virgília, o narrador afirma que não fará a análise do documento — e, na frase seguinte, passa a apontar exatamente a \"frieza\", a \"perspicácia\" e o \"ânimo\" das linhas escritas por ela. Esse procedimento configura a figura de linguagem chamada:",
      opcoes: ["Hipérbato", "Hipérbole", "Preterição", "Eufemismo"],
      correta: "Preterição",
      explicacao: "Preterição é a figura pela qual se finge não querer falar de algo sobre o qual, no entanto, se está efetivamente falando — exatamente o que o narrador faz: anuncia que não analisará o bilhete e, na sequência, tece uma análise detalhada dele. Hipérbato é inversão da ordem das palavras, hipérbole é exagero expressivo e eufemismo é a substituição de uma expressão desagradável por outra mais suave — nenhuma dessas descreve o gesto de \"dizer que não vai dizer\" que caracteriza o trecho. (Fonte: FUVEST 2015.)" },

    /* 11. Funções da linguagem */
    { texto: `<p>O telefone tocou.<br>— Alô? Quem fala?<br>— Como? Com quem deseja falar?<br>— Quero falar com o sr. Samuel Cardoso.<br>— É ele mesmo. Quem fala, por obséquio?<br>— Não se lembra mais da minha voz, seu Samuel? Faça um esforço.<br>— Lamento muito, minha senhora, mas não me lembro. Pode dizer-me de quem se trata?</p>
      <p class="fonte">ANDRADE, C. D. Contos de aprendiz. Rio de Janeiro: José Olympio, 1958. ENEM 2014 (3ª aplicação).</p>`,
      pergunta: "Pela insistência em manter o contato entre o emissor e o receptor, predomina no texto a função",
      opcoes: ["fática.", "referencial.", "emotiva.", "conativa."],
      correta: "fática.",
      explicacao: "A função fática se concentra no CANAL de comunicação — sua marca é verificar, prolongar ou interromper o contato entre quem fala e quem ouve, sem necessariamente transmitir informação nova. Isso fica evidente em todo o diálogo: os dois interlocutores só confirmam que a ligação continua ativa e identificam um ao outro." },

    /* 12. 1ª fase do Modernismo (pedagógica — mantida)
       Candidata real encontrada (UNICAMP 2024, Q11: crítica de Mário de
       Andrade a Olavo Bilac + poema "As Estrelas") foi DESCARTADA por
       duplicar exatamente a questão já usada no tópico "Parnasianismo" da
       prova do 2º Ano/2º Trimestre deste mesmo site — mesmo texto, mesmo
       gabarito. Segue pedagógica até surgir um substituto real e diferente. */
    { pergunta: "O que tornou a Semana de Arte Moderna de 1922 um escândalo para boa parte do público da época?",
      opcoes: ["Ela repetia com fidelidade as regras da poesia parnasiana da época.", "Ela era restrita a convidados, sem nenhuma repercussão fora do teatro.", "Ela rompia com as formas tradicionais e causou estranhamento na plateia.", "Ela reproduzia exatamente as obras já aceitas nos salões oficiais."],
      correta: "Ela rompia com as formas tradicionais e causou estranhamento na plateia.",
      explicacao: "A Semana de 22 rompia justamente com o que se esperava da arte \"séria\" da época — versos livres, formas distorcidas, temas do cotidiano. Por isso causou tanto espanto: era novidade demais para uma plateia acostumada com outra coisa. Marca o início da 1ª fase do Modernismo brasileiro." },

    /* 13. Pontuação */
    { pergunta: "Assinale a alternativa em que há erro de pontuação:",
      opcoes: ["Era do conhecimento de todos a hora da prova, mas, alguns se atrasaram.", "A hora da prova era do conhecimento de todos; alguns se atrasaram, porém.", "Todos conhecem a hora da prova; não se atrasem, pois.", "Todos conhecem a hora da prova, portanto não se atrasem."],
      correta: "Era do conhecimento de todos a hora da prova, mas, alguns se atrasaram.",
      explicacao: "O erro está na vírgula logo depois da conjunção adversativa \"mas\": não se separa a conjunção coordenativa do restante da oração com vírgula quando ela abre a oração normalmente — o certo seria \"mas alguns se atrasaram\", sem vírgula ali. Nas demais, a pontuação está correta. (Fonte: Vestibular F.E. Bauru)" }
  ]
};
