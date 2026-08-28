/* Prova — 3º Ano EM, 3º Trimestre 2026 (Língua Portuguesa)
   13 questões misturando os assuntos pedidos pelo professor: Pré-Modernismo,
   Regência Verbal, Pronomes, Texto dissertativo-argumentativo, Interpretação
   (ENEM + concurso), Crase, Memórias Póstumas de Brás Cubas (enredo),
   Funções da linguagem, 1ª fase do Modernismo e Pontuação.
   Questões marcadas "(pedagógica)" no campo explicacao são de autoria do
   professor/site, não de vestibular real — as demais têm fonte real citada. */
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

    /* 2. Regência Verbal */
    { pergunta: "Assinale a alternativa gramaticalmente correta quanto à regência verbal:",
      opcoes: ["Não tenham dúvidas que ele vencerá.", "O escravo ama e obedece o seu senhor.", "O livro que te referes é célebre.", "Se lhe disserem que não o respeito, enganam-no."],
      correta: "Se lhe disserem que não o respeito, enganam-no.",
      explicacao: "\"Respeitar\" é transitivo direto (\"respeitar alguém\"), por isso o pronome oblíquo correto é \"o\" — sem erro de regência aí. Nas demais: falta a preposição \"de\" depois de \"dúvidas\" (dúvidas DE que); falta a preposição \"a\" depois de \"obedece\" (obedece AO seu senhor); falta a preposição \"a\" antes do pronome relativo em \"referir-se\" (o livro A QUE te referes). (Fonte: FUVEST)" },

    /* 3. Regência Verbal */
    { pergunta: "Assinale a alternativa INCORRETA quanto à regência verbal:",
      opcoes: ["Ele custará muito para me entender.", "Hei de querer-lhe como se fosse minha filha.", "Em todos os recantos do sítio, as crianças sentem-se felizes, porque aspiram o ar puro.", "O presidente assiste em Brasília há quatro anos."],
      correta: "Ele custará muito para me entender.",
      explicacao: "\"Custar\", no sentido de \"ser difícil\", é verbo impessoal — só se conjuga na 3ª pessoa do singular, com a pessoa a quem custa vindo como objeto indireto (ex.: \"Custou-me muito entendê-lo\"). A frase inverte essa lógica, tratando \"ele\" como sujeito; o correto seria algo como \"Custou-lhe muito entender-me\". As demais estão corretas: \"querer-lhe\" (amá-lo) é transitivo indireto; \"aspirar\" no sentido de inalar é transitivo direto; \"assistir\" no sentido de morar rege \"em\". (Fonte: Mackenzie)" },

    /* 4. Pronomes */
    { pergunta: "Assinale a alternativa em que o pronome pessoal está empregado corretamente:",
      opcoes: ["Este é um problema para mim resolver.", "Entre eu e tu não há mais nada.", "Para mim, viajar de avião é um suplício.", "Quando voltei a si, não sabia onde me encontrava."],
      correta: "Para mim, viajar de avião é um suplício.",
      explicacao: "\"Mim\" (pronome oblíquo) segue corretamente a preposição \"para\", sem ser sujeito de verbo nenhum. Nas erradas: \"mim\" não pode ser sujeito de infinitivo (o certo seria \"para eu resolver\"); depois de preposição, usa-se a forma oblíqua também na segunda ocorrência (\"entre mim e ti\"); \"voltar a si\" descreve a 3ª pessoa, não quem fala na 1ª (o certo seria \"voltei a mim\"). (Fonte: FUVEST)" },

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
