/* ENEM 2025 — Leitura, Linguagem e Literatura · Questões reais (Caderno Azul, 1º dia) */
const QUIZ_DADOS = {
  id: "enem-2025-linguagens",
  titulo: "ENEM 2025 — Linguagens (Prova Real)",
  descricao: "Questões reais do ENEM 2025 (Caderno Azul, 1º dia): a crônica “De próprio punho”, Inocência de Taunay, a crônica como gênero e o parasurf. Referência ao final de cada questão.",
  tempoPorQuestao: 160,
  questoes: [
    { texto: "<p><strong>De próprio punho</strong> (Ana Elisa Ribeiro — fragmento condensado)</p><p>Estranhei muito na primeira vez que escutei a expressão “de próprio punho”. Foi numa situação bancária, e eu devia escrever algo breve com as próprias mãos — o que importava era a autenticidade da caligrafia. [...] As formas de escrever mudam, as necessidades também, e o resultado é um elenco complexo, em que nada dispensa nada. Estão aí minha farta comunicação via bilhetes, minha gaveta alegre de post-its de toda cor, e o cheque do cartório, em que quase tudo já é digital. “Do punho ao pixel” não é uma frase filosoficamente correta. O negócio é mais “o punho e o pixel”.</p><p class='fonte'>ENEM 2025, Questão 06 (adaptado). RIBEIRO, A. E. Disponível em: https://cascunha.com.br</p>",
      pergunta: "No que diz respeito ao gênero bilhete, a autora dessa crônica:",
      opcoes: [
        "Apresenta a diversidade de usos no cotidiano",
        "Ressalta a formalidade na comunicação com as pessoas de sua convivência",
        "Critica a ansiedade causada pela velocidade da comunicação",
        "Expressa a obrigatoriedade de concisão nas anotações",
        "Questiona a prática da escrita de próprio punho"
      ],
      correta: "Apresenta a diversidade de usos no cotidiano",
      explicacao: "(ENEM 2025, Q06) “Minha farta comunicação via bilhetes, minha gaveta alegre de post-its” mostra o bilhete como um entre vários usos vivos da escrita — a tese é de coexistência (“o punho e o pixel”), não de crítica ou obrigatoriedade." },

    { texto: "<p><strong>De próprio punho</strong> (Ana Elisa Ribeiro — fragmento condensado)</p><p>Estranhei muito na primeira vez que escutei a expressão “de próprio punho”. Parecia que eu ia bater em alguém. Foi numa situação bancária burocrática, e eu devia escrever algo breve com as mãos. [...] Minha letra, hoje, tem uma espécie de alternância: dia sim, dia não, trêmula e firme. [...] Mas isso não é um feito individual; em larga medida, é social.</p><p class='fonte'>ENEM 2025, Questão 07 (adaptado). RIBEIRO, A. E.</p>",
      pergunta: "O elemento que caracteriza esse texto como uma crônica é a:",
      opcoes: [
        "Abordagem de fatos do contexto pessoal em uma perspectiva reflexiva",
        "Defesa de uma tese com dados e argumentos de autoridade",
        "Narração de uma sequência de ações com início, meio e fim ficcionais",
        "Descrição técnica e impessoal de um processo histórico",
        "Apresentação de instruções para a realização de uma tarefa"
      ],
      correta: "Abordagem de fatos do contexto pessoal em uma perspectiva reflexiva",
      explicacao: "(ENEM 2025, Q07) A crônica parte de um fato pequeno e pessoal (escrever “de próprio punho” no banco) para tecer uma reflexão maior sobre escrita, tecnologia e sociedade — esse é o “DNA” do gênero, distinto do artigo de opinião ou do conto." },

    { texto: "<p><strong>De próprio punho</strong> (Ana Elisa Ribeiro — fragmento condensado)</p><p>A autora contrapõe a escrita manuscrita (“de próprio punho”, com sua caligrafia única) à escrita digital, descrevendo como, no computador, sua “letra” pessoal é substituída pela escolha de fontes padronizadas, como Times New Roman, Arial, Calibri.</p><p class='fonte'>ENEM 2025, Questão 08 (adaptado). RIBEIRO, A. E.</p>",
      pergunta: "Nesse texto, o que caracteriza a escrita “de próprio punho” é a letra manuscrita, enquanto a escrita digital é ilustrada pela:",
      opcoes: [
        "Diversidade de fontes tipográficas que estão disponíveis",
        "Utilização de tecnologias diversificadas",
        "Possibilidade de interações mediadas por dispositivos",
        "Padronização imposta pelos programas de edição",
        "Velocidade maior na produção de textos"
      ],
      correta: "Diversidade de fontes tipográficas que estão disponíveis",
      explicacao: "(ENEM 2025, Q08) O enunciado pede o exemplo CONCRETO que a autora usa para a escrita digital: a substituição de sua “letra” única pelas fontes padronizadas (Times, Arial, Calibri). A caligrafia individual dá lugar à diversidade de tipografias prontas." },

    { texto: "<p><strong>De próprio punho</strong> (Ana Elisa Ribeiro — fragmento condensado)</p><p>“As formas de escrever mudam, as necessidades também, e o resultado é um elenco complexo, em que nada dispensa nada, a depender da tarefa ou da importância das coisas. [...] A escrita e suas tecnologias vão se reposicionando, mudando de status, numa ciranda interessante. Não adianta muito pensar sempre como se tudo fosse excludente.”</p><p class='fonte'>ENEM 2025, Questão 09 (adaptado). RIBEIRO, A. E.</p>",
      pergunta: "A autora conclui que as novas tecnologias de escrita:",
      opcoes: [
        "Coexistem com as formas anteriores, sem substituí-las",
        "Superam definitivamente a escrita manuscrita",
        "Empobrecem a qualidade da comunicação cotidiana",
        "Tornam obsoletos os gêneros como o bilhete",
        "Dependem exclusivamente do domínio da caligrafia"
      ],
      correta: "Coexistem com as formas anteriores, sem substituí-las",
      explicacao: "(ENEM 2025, Q09) “Nada dispensa nada” e “não adianta pensar como se tudo fosse excludente” sintetizam a tese da convivência: o digital não elimina o manual — eles se reposicionam e coexistem conforme a tarefa." },

    { texto: "<p><strong>De próprio punho</strong> (Ana Elisa Ribeiro — fragmento condensado)</p><p>O texto se encerra: “Do punho ao pixel” não é uma frase filosoficamente correta. O negócio é mais “o punho e o pixel”.</p><p class='fonte'>ENEM 2025, Questão 10 (adaptado). RIBEIRO, A. E.</p>",
      pergunta: "O recurso linguístico usado para marcar a síntese da opinião da autora sobre o tema é a:",
      opcoes: [
        "Substituição da expressão “Do punho ao pixel” pela expressão “o punho e o pixel”",
        "Repetição da palavra “punho” ao longo de toda a crônica",
        "Utilização de aspas para destacar termos técnicos da informática",
        "Presença de perguntas retóricas dirigidas ao leitor",
        "Emprego de adjetivos para qualificar as tecnologias de escrita"
      ],
      correta: "Substituição da expressão “Do punho ao pixel” pela expressão “o punho e o pixel”",
      explicacao: "(ENEM 2025, Q10) A troca da preposição “de... ao” (que sugere passagem/substituição) pela conjunção aditiva “e” (que sugere coexistência) é o arremate exato da tese: punho E pixel convivem. Todas as alternativas citam recursos do texto, mas só esta encapsula a conclusão." },

    { texto: "<p><strong>Inocência</strong> (Visconde de Taunay — fragmento condensado)</p><p>Pereira, pai de Inocência, conversa com o forasteiro: “Vejo que o doutor não é nenhum pé-rapado, mas nunca é bom facilitar... Minha filha Inocência fez 18 anos pelo Natal, e é rapariga que pela feição parece moça de cidade, muito arisca, mas bonita e boa deveras... Coitada, foi criada sem mãe, e aqui nestes fundões. [...] Quando vi a menina tomar corpo, tratei logo de casá-la.” O casamento já estaria “apalavrado” com Manecão Doca, um vaqueiro que labuta no costeio do gado para São Paulo.</p><p class='fonte'>ENEM 2025, Questão 11 (adaptado). TAUNAY, A. d'E. Inocência. Disponível em: www.dominiopublico.gov.br</p>",
      pergunta: "Nesse trecho, ao se referir à sua filha, o pai de Inocência reproduz os ideais românticos presentes na:",
      opcoes: [
        "Figura decorativa da mulher ante o protagonismo masculino",
        "Valorização do ambiente rural na formação moral da mulher",
        "Equivalência de origem social para a harmonia do casal",
        "Importância do dote como condição para o casamento",
        "Aura de mistério sobre a identidade da jovem"
      ],
      correta: "Figura decorativa da mulher ante o protagonismo masculino",
      explicacao: "(ENEM 2025, Q11) No diálogo, Inocência é descrita por sua aparência (“bonita”, “parece moça de cidade”) e tratada como objeto passivo: o pai já a “apalavrou” em casamento sem consultá-la. As decisões cabem aos homens — a mulher é figura decorativa diante do protagonismo masculino, marca do patriarcalismo romântico/regionalista." },

    { texto: "<p>Reflexão sobre o gênero crônica (fragmento condensado): muitos pensam que narrativa curta é sinônimo de conto, mas o conto tem densidade específica, centrando-se num instante da condição humana. A crônica conservou a marca do registro circunstancial feito por um narrador-repórter que relata um fato para um público determinado. Sendo soma de jornalismo e literatura, dirige-se a uma classe que tem preferência pelo jornal em que é publicada — o que significa certa limitação. Além disso, o pouco espaço do suporte molda sua forma.</p><p class='fonte'>ENEM 2025, Questão 32 (adaptado).</p>",
      pergunta: "Segundo o texto, qual fator de natureza tecnológica molda a forma da crônica?",
      opcoes: [
        "A restrição de espaço imposta pelo suporte (o jornal)",
        "A ideologia do veículo em que ela é publicada",
        "O perfil do público leitor que prefere certo jornal",
        "A densidade temática herdada do gênero conto",
        "A formação literária do narrador-repórter"
      ],
      correta: "A restrição de espaço imposta pelo suporte (o jornal)",
      explicacao: "(ENEM 2025, Q32) Público e ideologia são distratores fortes, mas o enunciado pede o fator TECNOLÓGICO — ligado à materialidade do suporte. É a limitação de espaço no jornal que condiciona a forma enxuta e a estrutura da crônica." },

    { texto: "<p>O Ministério do Esporte lançou, em 2024 (ano dos Jogos Paralímpicos de Paris), o programa <strong>Maré Inclusiva</strong>, que visa ampliar as oportunidades para pessoas com deficiência que desejam praticar o surf. O parasurf é a prática do surf adaptada para permitir que pessoas com deficiência pratiquem o esporte em todas as suas categorias, modalidades e manifestações.</p><p class='fonte'>ENEM 2025 (adaptado).</p>",
      pergunta: "De acordo com esse texto, o programa voltado ao estímulo da prática do parasurf tem por objetivo:",
      opcoes: [
        "Ampliar o acesso de pessoas com deficiência ao esporte",
        "Formar atletas de alto rendimento para os Jogos Paralímpicos",
        "Substituir as modalidades tradicionais do surf competitivo",
        "Restringir a prática do surf a categorias adaptadas",
        "Divulgar o turismo de praia no litoral brasileiro"
      ],
      correta: "Ampliar o acesso de pessoas com deficiência ao esporte",
      explicacao: "(ENEM 2025) O programa Maré Inclusiva “visa ampliar as oportunidades para pessoas com deficiência que desejam praticar o surf” — o foco é inclusão e acesso, não alto rendimento nem substituição de modalidades." },

    { texto: "<p>O tema da redação do ENEM 2025 foi <strong>“Perspectivas acerca do envelhecimento na sociedade brasileira”</strong>. A discussão proposta envolve não só saúde e previdência, mas também o combate ao etarismo e a valorização do papel do idoso na sociedade.</p><p class='fonte'>ENEM 2025 (adaptado).</p>",
      pergunta: "O termo “etarismo”, central na proposta de redação de 2025, refere-se à:",
      opcoes: [
        "Discriminação de uma pessoa em razão de sua idade",
        "Valorização exclusiva da juventude no mercado de trabalho",
        "Política pública de incentivo à natalidade",
        "Doença associada ao processo natural de envelhecimento",
        "Tendência de envelhecimento da população brasileira"
      ],
      correta: "Discriminação de uma pessoa em razão de sua idade",
      explicacao: "Questão autoral baseada no tema oficial do ENEM 2025. Etarismo (ou idadismo) é o preconceito ou a discriminação dirigida a alguém por causa da idade — frequentemente contra idosos. Não se confunde com o envelhecimento populacional (que é o fenômeno demográfico), nem é uma doença." },

    { texto: "<p>A crônica “De próprio punho”, de Ana Elisa Ribeiro, e o trecho de “Inocência”, de Taunay, embora separados por mais de um século, foram ambos cobrados na prova de Linguagens do ENEM 2025. O primeiro discute as tecnologias da escrita no presente; o segundo, escrito no século XIX, integra a vertente regionalista de um movimento literário brasileiro.</p><p class='fonte'>Questão de síntese (autoral), com base no ENEM 2025.</p>",
      pergunta: "A obra Inocência, de Visconde de Taunay, filia-se a qual movimento literário brasileiro?",
      opcoes: [
        "Romantismo, em sua vertente regionalista, com amor idealizado e cenário sertanejo",
        "Realismo, com análise crítica e objetiva dos comportamentos da sociedade",
        "Modernismo, com ruptura formal e linguagem coloquial brasileira",
        "Parnasianismo, com culto à forma perfeita e à objetividade na poesia",
        "Barroco, com linguagem rebuscada e tensão entre o sagrado e o profano"
      ],
      correta: "Romantismo, em sua vertente regionalista, com amor idealizado e cenário sertanejo",
      explicacao: "Questão autoral de contextualização. Inocência (1872) é um marco do Romantismo regionalista brasileiro: ambientada no sertão de Mato Grosso, retrata costumes do interior e ideais românticos como o amor idealizado e o papel patriarcal da mulher — exatamente o que a Q11 do ENEM 2025 explorou." }
  ]
};
