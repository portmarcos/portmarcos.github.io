/* QUIZ — Obras Literárias mais cobradas no ENEM e vestibulares */
const QUIZ_DADOS = {
  id: "obras-enem",
  titulo: "Quiz — Obras Literárias do ENEM",
  descricao: "10 questões sobre as obras brasileiras mais cobradas: de Machado de Assis a Carolina Maria de Jesus.",
  tempoPorQuestao: 90,
  questoes: [
    { pergunta: "Em \"Memórias Póstumas de Brás Cubas\" (Machado de Assis), a grande inovação narrativa é:",
      opcoes: [
        "O narrador é um defunto que conta a vida após a morte, com total liberdade e ironia",
        "A história é narrada por uma criança",
        "O livro não tem narrador",
        "A narrativa é feita apenas por cartas"
      ],
      correta: "O narrador é um defunto que conta a vida após a morte, com total liberdade e ironia",
      explicacao: "O \"defunto autor\" rompe com o Romantismo: livre das convenções dos vivos, Brás Cubas expõe com ironia as hipocrisias da elite do século XIX." },
    { pergunta: "A dúvida central que move \"Dom Casmurro\" é:",
      opcoes: [
        "Se Capitu traiu ou não Bentinho — questão que o narrador parcial nunca permite resolver",
        "Quem matou Escobar na praia",
        "Se Bentinho será padre ou advogado",
        "A herança da família Pádua"
      ],
      correta: "Se Capitu traiu ou não Bentinho — questão que o narrador parcial nunca permite resolver",
      explicacao: "Bentinho narra já velho e enciumado: tudo que sabemos de Capitu passa pelo filtro dele. O \"narrador não confiável\" é o coração da obra." },
    { pergunta: "Em \"Iracema\" (José de Alencar), a personagem-título representa alegoricamente:",
      opcoes: [
        "A América/o Brasil que se entrega ao colonizador europeu",
        "A monarquia portuguesa",
        "A escravidão africana",
        "A República que viria"
      ],
      correta: "A América/o Brasil que se entrega ao colonizador europeu",
      explicacao: "Iracema (anagrama de América) ama Martim, o português, e morre ao gerar Moacir, o primeiro \"brasileiro\" — alegoria romântica da formação nacional." },
    { pergunta: "Em \"Senhora\" (Alencar), Aurélia compra o próprio marido. A obra critica:",
      opcoes: [
        "O casamento tratado como transação comercial na sociedade burguesa",
        "A vida no campo brasileiro",
        "O sistema educacional do Império",
        "A religiosidade popular"
      ],
      correta: "O casamento tratado como transação comercial na sociedade burguesa",
      explicacao: "Aurélia, rica, \"adquire\" Fernando Seixas em contrato de dote — Alencar expõe o casamento por interesse, ainda dentro do Romantismo urbano." },
    { pergunta: "\"O Cortiço\" (Aluísio Azevedo) é a obra-símbolo do Naturalismo porque:",
      opcoes: [
        "Mostra o ser humano determinado pelo meio, pela raça e pelo momento, com o cortiço como personagem coletivo",
        "Idealiza a vida dos trabalhadores",
        "Narra a vida na corte de forma elegante",
        "É escrito em versos"
      ],
      correta: "Mostra o ser humano determinado pelo meio, pela raça e pelo momento, com o cortiço como personagem coletivo",
      explicacao: "O determinismo naturalista trata as personagens quase como animais moldados pelo ambiente — e o cortiço \"vive\" como um organismo." },
    { pergunta: "Em \"Vidas Secas\" (Graciliano Ramos), a linguagem enxuta e a fala quase ausente das personagens:",
      opcoes: [
        "Espelham a aridez do sertão e a desumanização da família retirante",
        "Indicam que o autor não dominava a norma culta",
        "Imitam o estilo dos romances românticos",
        "Mostram a riqueza da vida urbana"
      ],
      correta: "Espelham a aridez do sertão e a desumanização da família retirante",
      explicacao: "Forma e conteúdo se fundem: a secura da prosa é a secura da vida de Fabiano, Sinha Vitória, os meninos e a cachorra Baleia." },
    { pergunta: "\"Grande Sertão: Veredas\" (Guimarães Rosa) revolucionou a literatura brasileira principalmente:",
      opcoes: [
        "Pela linguagem reinventada, que mistura fala sertaneja, neologismos e poesia na prosa",
        "Por ser o primeiro romance ambientado em São Paulo",
        "Pela narrativa em terceira pessoa objetiva",
        "Por evitar qualquer tema filosófico"
      ],
      correta: "Pela linguagem reinventada, que mistura fala sertaneja, neologismos e poesia na prosa",
      explicacao: "Riobaldo narra a travessia — jagunçagem, o pacto, o amor por Diadorim — numa língua única. \"Viver é muito perigoso\" virou síntese da obra." },
    { pergunta: "O Jeca Tatu, de \"Urupês\" (Monteiro Lobato), tornou-se símbolo:",
      opcoes: [
        "Do caboclo abandonado pelo poder público, sem saúde e sem escola",
        "Do fazendeiro rico do café",
        "Do imigrante italiano em São Paulo",
        "Do funcionário público da capital"
      ],
      correta: "Do caboclo abandonado pelo poder público, sem saúde e sem escola",
      explicacao: "O próprio Lobato depois reviu o personagem: o Jeca não é preguiçoso — é doente e esquecido. Crítica social do Pré-Modernismo." },
    { pergunta: "\"Capitães da Areia\" (Jorge Amado) narra a vida de:",
      opcoes: [
        "Meninos abandonados que vivem num trapiche em Salvador, entre o crime e a ternura",
        "Pescadores idosos do litoral paulista",
        "Estudantes ricos de um internato",
        "Soldados da Guerra do Paraguai"
      ],
      correta: "Meninos abandonados que vivem num trapiche em Salvador, entre o crime e a ternura",
      explicacao: "Pedro Bala, Professor, Gato e os outros: o romance de 30 denuncia o abandono da infância — tema que segue atual nas provas." },
    { pergunta: "\"Quarto de Despejo\" (Carolina Maria de Jesus) é um marco porque:",
      opcoes: [
        "Traz o diário real de uma catadora de papel da favela do Canindé, dando voz literária à fome e à exclusão",
        "É o primeiro romance de ficção científica nacional",
        "Narra a vida na corte imperial",
        "Foi escrito originalmente em francês"
      ],
      correta: "Traz o diário real de uma catadora de papel da favela do Canindé, dando voz literária à fome e à exclusão",
      explicacao: "Publicado em 1960, o diário de Carolina rompeu o silêncio sobre a favela na literatura — obra cada vez mais presente no ENEM." }
  ]
};
