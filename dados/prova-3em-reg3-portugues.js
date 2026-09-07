/* Prova 3º Reg. 3 — 3º Ano EM, Língua Portuguesa (VERSÃO SIMPLIFICADA)
   Gerada a partir da prova "prova-3em-3tri-portugues" (2º Trimestre 2026):
   mesmos 15 temas/habilidades e mesmo gabarito, mas com textos de apoio
   bem mais curtos e diretos — feita para reduzir a carga de leitura sem
   abaixar o nível esperado do 3º ano. Arquivo/página são NOVOS e NÃO
   substituem a prova original (prova-3em-3tri-portugues.html), que
   continua no ar normalmente. */
const QUIZ_DADOS = {
  id: "prova-3em-reg3-2026-portugues",
  titulo: "Prova 3º Reg. 3 — 3º Ano EM (Língua Portuguesa)",
  descricao: "Versão simplificada da avaliação de Língua Portuguesa: 15 questões (literatura, gramática e interpretação de texto) com textos de apoio mais curtos.",
  tempoPorQuestao: 120,
  questoes: [

    { tempoQuestao: 200, texto: `<p>Ao visitar a região de Canudos, o narrador descreve um vale cercado de colinas, com arbustos, flores coloridas e uma árvore alta — uma quixabeira — que se destaca da vegetação baixa ao redor.</p>
      <p class="fonte">(Euclides da Cunha, "Os Sertões", 1902 — trecho adaptado da parte "A terra".) VUNESP — UNESP 2021 (questão adaptada).</p>`,
      pergunta: "As três partes de \"Os Sertões\" — \"A terra\", \"O homem\" e \"A luta\" — mostram a influência de qual corrente de pensamento do século XIX?",
      opcoes: ["Determinismo", "Idealismo", "Iluminismo", "Socialismo"],
      correta: "Determinismo",
      explicacao: "A divisão da obra reproduz a tríade determinista (meio, raça e momento histórico): o meio geográfico molda o sertanejo (\"O homem\"), que entra em confronto com o Estado (\"A luta\"). Idealismo, Iluminismo e Socialismo não explicam essa estrutura." },

    { tempoQuestao: 200, texto: `<p>"Ser aceito implica mecanismos mais sutis do que os da razão. Implica intuição, compreensão e cuidado com o outro."</p>
      <p class="fonte">Artur da Távola, "Da arte de aceitar" (crônica) — trecho adaptado.</p>`,
      pergunta: "No trecho, o verbo \"implicar\" é usado sem preposição. Assinale a opção com a MESMA regência:",
      opcoes: ["Lembrar-se.", "Obedecer.", "Visar (no sentido de almejar).", "Respeitar."],
      correta: "Respeitar.",
      explicacao: "\"Implicar\" (envolver, acarretar) é transitivo direto, sem preposição — assim como \"respeitar\" (respeitar algo/alguém). Os demais verbos exigem preposição: \"lembrar-se DE\", \"obedecer A\", \"visar A\"." },

    { tempoQuestao: 200, texto: `<p>O sabiá foi escolhido como ave nacional do Brasil, superando a ararajuba. Um decreto oficial confirmou a escolha, e um ornitólogo defendeu que o sabiá representa melhor a cultura popular brasileira.</p>
      <p class="fonte">O Globo, 2002 (adaptado e resumido).</p>`,
      pergunta: "Marque a opção em que a regência do verbo NÃO está de acordo com a norma culta:",
      opcoes: ["O pesquisador agregou-se ao grupo da universidade.", "O auxiliar inseriu os dados no computador.", "A criança agradeceu os primos o presente.", "Eu entreguei o requerimento ao advogado."],
      correta: "A criança agradeceu os primos o presente.",
      explicacao: "\"Agradecer\" pede objeto direto para a coisa e indireto (com \"a\") para a pessoa: \"agradeceu o presente aos primos\", nunca \"agradeceu os primos o presente\". As demais regências estão corretas." },

    { tempoQuestao: 200, texto: `<p>O esporte-participação busca lazer e bem-estar, não a formação de talentos. É mais democrático que o esporte-performance, pois inclui todos que quiserem participar, não apenas quem já tem talento ou boas condições.</p>
      <p class="fonte">GODTSFRIEDT, J. ENEM 2017 (adaptado).</p>`,
      pergunta: "O sentido de esporte-participação, descrito no texto, aparece principalmente:",
      opcoes: ["nos Jogos Olímpicos, que reúnem vários países competindo.", "nos campeonatos oficiais de futebol, por serem muito populares.", "nas competições das federações, que buscam revelar talentos.", "nas modalidades esportivas adaptadas, feitas para incluir mais pessoas."],
      correta: "nas modalidades esportivas adaptadas, feitas para incluir mais pessoas.",
      explicacao: "O texto define esporte-participação por oposição ao esporte-performance: não busca talentos, busca incluir todo mundo. As demais opções são, na prática, exemplos de esporte-performance." },

    { tempoQuestao: 200, texto: `<p>Alunos criaram um abaixo-assinado on-line contra o fechamento da biblioteca da escola. A petição ganhou milhares de assinaturas e repercussão nas redes sociais. Por causa da pressão popular, a direção recuou e manteve a biblioteca aberta.</p>
      <p class="fonte">GOMES, A. ENEM 2019 (adaptado).</p>`,
      pergunta: "Sobre o uso das redes sociais, o texto mostra que elas:",
      opcoes: ["não têm impacto fora da internet.", "podem incentivar comportamentos violentos entre jovens.", "ajudam a unir pessoas em torno de causas e mudanças sociais.", "são usadas de forma inadequada pelos adolescentes."],
      correta: "ajudam a unir pessoas em torno de causas e mudanças sociais.",
      explicacao: "A mobilização começa on-line mas gera um efeito concreto: a biblioteca é salva. O texto mostra as redes como ferramenta de união e ação coletiva, não como fonte de violência ou uso inadequado." },

    { tempoQuestao: 200, texto: `<p>Toda vez que surge uma nova tecnologia, ela parece fácil e revolucionária. Mas, na prática, aprender a usá-la bem sempre exige tempo e esforço — o oposto do que parecia no início.</p>
      <p class="fonte">ECO, U.; CARRIÈRE, J.-C. ENEM 2022 (adaptado).</p>`,
      pergunta: "Segundo o texto, o que mais afeta quem usa uma nova tecnologia é:",
      opcoes: ["a dificuldade de aprender a nova linguagem dela.", "a valorização imediata da nova tecnologia.", "o esquecimento repentino do que já se sabia.", "a rapidez em aprender a usá-la."],
      correta: "a dificuldade de aprender a nova linguagem dela.",
      explicacao: "Cuidado com a armadilha: o texto começa descrevendo o que as tecnologias \"parecem\" ser (fáceis) para depois desmentir isso — na prática, exigem uma \"longa iniciação numa nova linguagem\"." },

    { tempoQuestao: 200, texto: `<p>Muitos pais e professores temem que a internet prejudique o aprendizado das crianças. Mas a autora defende que, se bem orientado, o uso da internet amplia o conhecimento dos estudantes.</p>
      <p class="fonte">COSCARELLI, C. V. ENEM 2017 (adaptado).</p>`,
      pergunta: "A autora defende o uso da internet pelos estudantes porque essa tecnologia:",
      opcoes: ["tem apenas informações confiáveis.", "sempre prejudica a aprendizagem dos jovens.", "amplia o conhecimento quando bem orientada.", "isola os jovens do mundo real."],
      correta: "amplia o conhecimento quando bem orientada.",
      explicacao: "A autora lista os medos das pessoas só para desmontá-los em seguida: ela defende o USO ORIENTADO da internet, não é contra a tecnologia. As demais opções descrevem justamente os medos que ela refuta." },

    { tempoQuestao: 200, texto: `<p>Em 2015, uma legenda dizia "Homenagem à Bituca", apelido de Milton Nascimento. Caetano Veloso corrigiu o erro: como "Bituca" é apelido masculino, não pode haver crase ali.</p>
      <p class="fonte">Insper 2016 (adaptado).</p>`,
      pergunta: "O erro na expressão \"Homenagem à Bituca\" incomodou Caetano porque:",
      opcoes: ["tem sentido malicioso.", "reforça o respeito ao homenageado.", "muda a identificação de quem é homenageado.", "impede entender a frase."],
      correta: "muda a identificação de quem é homenageado.",
      explicacao: "A crase só existe quando o \"a\" se funde com um artigo feminino diante de palavra feminina. \"Bituca\" é apelido masculino — o acento indevido sugere, erradamente, um homenageado do gênero feminino." },

    { tempoQuestao: 220, texto: `<p>"Começo a arrepender-me deste livro... o maior defeito deste livro és tu, leitor. Tu tens pressa de envelhecer, e o livro anda devagar; [...] este livro e o meu estilo são como os ébrios, guinam à direita e à esquerda, andam e param..."</p>
      <p class="fonte">(Machado de Assis, "Memórias Póstumas de Brás Cubas", 1881 — Cap. LXXI.) FUVEST 2014.</p>`,
      pergunta: "Um leitor impaciente com o estilo de Brás Cubas também teria dificuldade para ler:",
      opcoes: ["Memórias de um sargento de milícias", "Viagens na minha terra", "O cortiço", "A cidade e as serras"],
      correta: "Viagens na minha terra",
      explicacao: "O narrador descreve seu livro como digressivo e sem \"narração direita\". Viagens na Minha Terra, de Almeida Garrett, tem esse mesmo caráter: mistura crônica, novela e cartas, com pouca linearidade." },

    { tempoQuestao: 180, texto: `<p>O lema olímpico mudou pela primeira vez em mais de 120 anos: passou a incluir a palavra "juntos", para destacar a solidariedade entre os atletas.</p>
      <p class="fonte">ENEM 2023 (adaptado).</p>`,
      pergunta: "A mudança no lema olímpico teve como objetivo:",
      opcoes: ["unificar o lema anterior ao atual.", "juntar o lema aos princípios esportivos.", "associar o lema à cooperação entre as pessoas.", "vincular o lema aos eventos atléticos."],
      correta: "associar o lema à cooperação entre as pessoas.",
      explicacao: "A resposta está no próprio texto: a mudança serviu \"para ressaltar a solidariedade e incluir a palavra 'juntos'\" — solidariedade e \"juntos\" remetem à cooperação." },

    { tempoQuestao: 180, texto: `<p>"O telefone tocou.<br>— Alô? Quem fala?<br>— Como? Com quem deseja falar?<br>— Quero falar com o sr. Samuel Cardoso.<br>— É ele mesmo. Quem fala, por obséquio?<br>— Não se lembra mais da minha voz, seu Samuel?"</p>
      <p class="fonte">ANDRADE, C. D. Contos de aprendiz, 1958. ENEM 2014.</p>`,
      pergunta: "Pela insistência em manter o contato entre quem fala e quem ouve, predomina no texto a função:",
      opcoes: ["fática.", "referencial.", "emotiva.", "conativa."],
      correta: "fática.",
      explicacao: "A função fática se concentra no CANAL de comunicação — verificar, prolongar ou interromper o contato entre quem fala e quem ouve. É exatamente o que os dois interlocutores fazem no diálogo." },

    { tempoQuestao: 220, texto: `<p>Sérgio Buarque de Holanda defende que a cultura brasileira só estará completa quando deixar de copiar modelos estrangeiros e afirmar sua própria identidade, na arte e na vida social.</p>
      <p class="fonte">HOLANDA, Sérgio Buarque de. FUVEST — USP 2023 (adaptado).</p>`,
      pergunta: "Segundo o autor, a cultura brasileira completará sua formação quando:",
      opcoes: ["souber reproduzir fielmente os modelos externos.", "importar uma estética à altura da sua genialidade.", "abolir a necessidade de figurar o caráter nacional.", "firmar, na arte e na vida social, a sua autenticidade."],
      correta: "firmar, na arte e na vida social, a sua autenticidade.",
      explicacao: "O autor defende \"sinceridade\" e uma \"arte de expressão nacional\", não a cópia (a) ou importação (b) de modelos estrangeiros, nem abolir o caráter nacional (c) — e sim afirmar autenticidade própria." },

    { pergunta: "Assinale a alternativa em que há erro de pontuação:",
      opcoes: ["Era do conhecimento de todos a hora da prova, mas, alguns se atrasaram.", "A hora da prova era do conhecimento de todos; alguns se atrasaram, porém.", "Todos conhecem a hora da prova; não se atrasem, pois.", "Todos conhecem a hora da prova, portanto não se atrasem."],
      correta: "Era do conhecimento de todos a hora da prova, mas, alguns se atrasaram.",
      explicacao: "Não se separa a conjunção \"mas\" do restante da oração com vírgula quando ela abre a oração normalmente — o certo seria \"mas alguns se atrasaram\", sem vírgula. (Fonte: Vestibular F.E. Bauru.)" },

    { tempoQuestao: 180, texto: `<p>Uma campanha educativa sobre trânsito combina texto e imagem para alertar sobre o uso do celular ao volante.</p>
      <p class="fonte">ENEM 2016 (adaptado).</p>`,
      pergunta: "Nesse tipo de campanha, a combinação de texto e imagem serve para:",
      opcoes: ["associar o uso do celular a atropelamentos de crianças.", "orientar pedestres e motoristas sobre o uso do telefone.", "influenciar o comportamento de motoristas quanto ao uso do celular.", "alertar sobre os riscos gerais da falta de atenção no trânsito."],
      correta: "influenciar o comportamento de motoristas quanto ao uso do celular.",
      explicacao: "A campanha mira especificamente o motorista que usa celular ao dirigir — o alvo é essa prática de risco, não um alerta genérico sobre trânsito ou uma orientação igual para pedestres e motoristas." },

    { tempoQuestao: 220, texto: `<p>Machado de Assis compara a demora na troca do governo a relógios que não marcam a mesma hora, questionando: "Quem os porá de acordo?"</p>
      <p class="fonte">Machado de Assis, crônica de 1888. UNICAMP 2022.</p>`,
      pergunta: "A metáfora dos relógios se refere à expectativa de mudança de:",
      opcoes: ["regime, a partir de discordâncias políticas.", "século, marcada pela chegada de um meteorito.", "mentalidade escravagista, com um pacto político.", "legislação, com a troca de ministério do governo imperial."],
      correta: "legislação, com a troca de ministério do governo imperial.",
      explicacao: "Machado usa os relógios dessincronizados (do Partido Liberal e do Imperador) para satirizar a demora na troca de ministério, típica do parlamentarismo às avessas do Segundo Reinado." }
  ]
};
