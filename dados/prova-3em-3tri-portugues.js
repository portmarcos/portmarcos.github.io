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

    /* 1. Pré-Modernismo */
    { pergunta: "A obra \"Os Sertões\", de Euclides da Cunha, relata qual conflito histórico?",
      opcoes: ["A Guerra de Canudos", "A Revolta da Vacina", "A Guerra do Paraguai", "A Revolta da Chibata"],
      correta: "A Guerra de Canudos",
      explicacao: "Euclides cobriu a Guerra de Canudos (1896–1897) como correspondente do jornal O Estado de S. Paulo e transformou a experiência no livro publicado em 1902 — um dos marcos do Pré-Modernismo brasileiro." },

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

    /* 5. Texto dissertativo-argumentativo */
    { pergunta: "O texto dissertativo-argumentativo, como o exigido na redação do ENEM, se caracteriza por:",
      opcoes: ["Narrar um fato de sua vida com linguagem emotiva", "Descrever detalhadamente um cenário ou personagem", "Defender um ponto de vista sobre um tema com argumentos e evidências", "Listar informações sobre um assunto sem tomar partido"],
      correta: "Defender um ponto de vista sobre um tema com argumentos e evidências",
      explicacao: "O texto dissertativo-argumentativo exige a defesa de uma tese (ponto de vista) sobre um tema, sustentada por argumentos e repertório sociocultural — diferente da narração (contar um fato) e da descrição (detalhar um cenário)." },

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

    /* 9. Memórias Póstumas de Brás Cubas — enredo (pedagógica) */
    { pergunta: "No romance, Brás Cubas dedica boa parte da vida adulta a um projeto que nunca conclui. Do que se trata esse projeto?",
      opcoes: ["Um tratado filosófico sobre o Humanitismo", "Um emplasto (remédio) contra a hipocondria, que traria fama e cura à humanidade", "Uma candidatura a deputado pelo partido conservador", "Uma biografia do pai, Bento Cubas"],
      correta: "Um emplasto (remédio) contra a hipocondria, que traria fama e cura à humanidade",
      explicacao: "(Questão pedagógica, não de vestibular.) O \"emplasto Brás Cubas\" é a grande ambição da vida do narrador — um remédio contra a hipocondria que lhe daria fama e glória. Ele morre antes de terminá-lo, e o próprio livro é, em certo sentido, o produto que sobrou desse projeto fracassado." },

    /* 10. Memórias Póstumas de Brás Cubas — enredo (pedagógica) */
    { pergunta: "Brás Cubas considera Eugênia, filha de Dona Eusébia, moralmente superior às outras mulheres que conheceu, mas desiste de se casar com ela. Qual motivo ele mesmo confessa para essa desistência?",
      opcoes: ["A diferença de classe social entre as duas famílias", "A vaidade: tem vergonha de apresentar à sociedade uma esposa com uma deficiência física, já que ela é coxa", "A oposição da própria mãe de Brás Cubas ao casamento", "A descoberta de que Eugênia já amava outro homem"],
      correta: "A vaidade: tem vergonha de apresentar à sociedade uma esposa com uma deficiência física, já que ela é coxa",
      explicacao: "(Questão pedagógica, não de vestibular.) Apesar de reconhecer o valor de Eugênia, Brás Cubas confessa que a vaidade — o medo do julgamento social por causa da deficiência física dela — falou mais alto. É um dos momentos que mais expõem a mesquinhez do narrador." },

    /* 11. Funções da linguagem */
    { texto: `<p>O telefone tocou.<br>— Alô? Quem fala?<br>— Como? Com quem deseja falar?<br>— Quero falar com o sr. Samuel Cardoso.<br>— É ele mesmo. Quem fala, por obséquio?<br>— Não se lembra mais da minha voz, seu Samuel? Faça um esforço.<br>— Lamento muito, minha senhora, mas não me lembro. Pode dizer-me de quem se trata?</p>
      <p class="fonte">ANDRADE, C. D. Contos de aprendiz. Rio de Janeiro: José Olympio, 1958. ENEM 2014 (3ª aplicação).</p>`,
      pergunta: "Pela insistência em manter o contato entre o emissor e o receptor, predomina no texto a função",
      opcoes: ["fática.", "referencial.", "emotiva.", "conativa."],
      correta: "fática.",
      explicacao: "A função fática se concentra no CANAL de comunicação — sua marca é verificar, prolongar ou interromper o contato entre quem fala e quem ouve, sem necessariamente transmitir informação nova. Isso fica evidente em todo o diálogo: os dois interlocutores só confirmam que a ligação continua ativa e identificam um ao outro." },

    /* 12. 1ª fase do Modernismo */
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
