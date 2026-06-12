/* ATIVIDADE DE OBRA — O Cortiço (Aluísio Azevedo, 1890) */
const QUIZ_DADOS = {
  id: "obra-o-cortico",
  titulo: "O Cortiço — Atividade Completa",
  descricao: "Aluísio Azevedo, 1890 — a obra máxima do Naturalismo brasileiro. 5 questões fechadas e 2 dissertativas, com contexto completo.",
  tempoPorQuestao: 150,
  questoes: [
    { texto: "<p><strong>Trecho 1 — O cortiço desperta</strong></p><p>Nas páginas mais famosas do livro, a estalagem acorda como um ser vivo: o burburinho cresce, as portas se abrem, o pátio 'fervilha' — e o narrador descreve a massa de moradores como um corpo único que respira, sua e se agita.</p>",
      pergunta: "Essas descrições justificam a leitura tradicional de que o protagonista do romance é o próprio cortiço, porque nelas:",
      opcoes: [
        "O espaço ganha vida orgânica e age sobre os moradores, moldando comportamentos como um personagem coletivo",
        "O prédio narra os acontecimentos em primeira pessoa, recurso inédito na prosa do século XIX",
        "Nenhum morador chega a ser individualizado, permanecendo todos anônimos do início ao fim",
        "A estalagem permanece imutável do começo ao desfecho, enquanto as personagens se transformam"
      ],
      correta: "O espaço ganha vida orgânica e age sobre os moradores, moldando comportamentos como um personagem coletivo",
      explicacao: "O São Romão nasce, cresce, 'fermenta' e devora: no Naturalismo, o meio não é cenário — é força ativa. A estalagem transforma quem entra nela, como mostrará o caso de Jerônimo." },
    { texto: "<p><strong>Trecho 2 — Jerônimo e Rita Baiana</strong></p><p>O português Jerônimo chega ao cortiço como modelo de trabalho e disciplina. Aos poucos, seduzido pela mulata Rita Baiana, pelo café, pelo samba e pelo clima, 'abrasileira-se': abandona a enxada de aço pela preguiça morna, a esposa pela amante — e mata o capoeira Firmo para ficar com Rita.</p>",
      pergunta: "A transformação de Jerônimo é o exemplo mais claro, no romance, da tese naturalista de que:",
      opcoes: [
        "O meio determina o homem: o trópico dissolve a disciplina europeia e impõe seus próprios apetites",
        "O trabalho honesto sempre vence: o imigrante esforçado ascende socialmente no novo país",
        "O amor redime os caracteres: a paixão por Rita torna Jerônimo um homem melhor e mais livre",
        "A educação formal transforma destinos: Jerônimo muda porque aprende a ler já adulto"
      ],
      correta: "O meio determina o homem: o trópico dissolve a disciplina europeia e impõe seus próprios apetites",
      explicacao: "É o determinismo de meio, raça e momento aplicado como experimento: pega-se um europeu 'são' e observa-se o Brasil corrompê-lo. A visão é problemática (o trópico como força sensual e degeneradora), e discutir isso em aula é parte da leitura." },
    { pergunta: "João Romão enriquece explorando os moradores e, sobretudo, Bertoleza — escrava fugida que trabalha para ele como se fosse sua companheira, sem nada receber. A relação dos dois expõe, no romance:",
      opcoes: [
        "A acumulação primitiva do capital brasileiro erguida sobre o trabalho escravizado e a fraude",
        "O ideal burguês do casamento por amor, que o comerciante realiza ao final da narrativa",
        "A possibilidade real de ascensão social das mulheres negras no Rio de Janeiro do Império",
        "A generosidade do imigrante português, que abriga a escrava fugida por compaixão cristã"
      ],
      correta: "A acumulação primitiva do capital brasileiro erguida sobre o trabalho escravizado e a fraude",
      explicacao: "João Romão forja até a carta de alforria falsa para manter Bertoleza trabalhando de graça. O romance mostra, sem retoque, sobre o que se construiu a riqueza: exploração, usura e um corpo escravizado na cozinha." },
    { pergunta: "No desfecho, prestes a casar-se com a filha do rival Miranda, João Romão entrega Bertoleza aos antigos donos; ela se mata com a faca de cozinha — no momento em que ele recebe uma comissão de abolicionistas. Esse final produz, sobretudo, um efeito de:",
      opcoes: [
        "Ironia trágica: a ascensão do explorador é selada com o sangue de quem o enriqueceu, sob aplausos da boa sociedade",
        "Justiça poética: o comerciante é preso e arruinado, pagando pelos crimes cometidos ao longo do livro",
        "Redenção religiosa: arrependido, João Romão liberta os demais empregados e doa o cortiço",
        "Final aberto: o leitor não fica sabendo o destino de nenhuma das personagens principais"
      ],
      correta: "Ironia trágica: a ascensão do explorador é selada com o sangue de quem o enriqueceu, sob aplausos da boa sociedade",
      explicacao: "A cena é um soco: Bertoleza morta no chão da cozinha enquanto a comitiva entrega a João Romão o diploma de benemérito da abolição. O Naturalismo não pune o vilão — mostra que a sociedade o premia." },
    { pergunta: "O cortiço São Romão cresce à sombra do sobrado de Miranda, comerciante estabelecido que despreza e inveja o vizinho. A rivalidade entre os dois espaços organiza no romance o contraste entre:",
      opcoes: [
        "A burguesia de fachada e o capital novo e bruto — duas faces da mesma ambição, que o final irmana pelo casamento",
        "O Brasil rural decadente e o industrial moderno, tema central da literatura do período",
        "A aristocracia portuguesa tradicional e os escravizados libertos após a Lei Áurea",
        "O mundo do trabalho honesto, no sobrado, e o da malandragem improdutiva, na estalagem"
      ],
      correta: "A burguesia de fachada e o capital novo e bruto — duas faces da mesma ambição, que o final irmana pelo casamento",
      explicacao: "Miranda compra um título de barão; João Romão acumula sem lavar as mãos. O casamento entre as casas no desfecho revela que não há oposição moral: são etapas do mesmo arrivismo." },
    { tipo: "aberta",
      pergunta: "DISSERTATIVA — Explique a tese determinista do Naturalismo (o homem como produto de meio, raça e momento) e mostre como ela se aplica à trajetória de Jerônimo em O Cortiço.",
      respostaModelo: "Para o Naturalismo, herdeiro do cientificismo do século XIX, o comportamento humano é determinado por forças que o indivíduo não controla: o ambiente (meio), a herança biológica (raça) e as circunstâncias históricas (momento). Jerônimo é o experimento perfeito: português disciplinado e trabalhador, é progressivamente transformado pelo meio tropical — o calor, a comida, a música, e a sensualidade encarnada em Rita Baiana dissolvem seus valores até o desfecho violento (o assassinato de Firmo) e o abandono da família. A 'cientificidade' dessas ideias hoje é insustentável — há determinismo racial e visão preconceituosa do trópico —, e a boa leitura aponta tanto a coerência interna da tese no romance quanto seus limites ideológicos." },
    { tipo: "aberta",
      pergunta: "DISSERTATIVA — Compare as trajetórias de João Romão e de Bertoleza e explique o que esse contraste revela sobre a formação da riqueza no Brasil do século XIX.",
      respostaModelo: "João Romão parte de vendeiro pobre e termina capitalista, futuro barão por casamento: sua ascensão é construída com usura, furto de materiais, exploração dos moradores e, na base de tudo, o trabalho não pago de Bertoleza — escrava fugida que ele engana com uma falsa alforria e que cozinha, vende e economiza para ele durante décadas. A trajetória dela é o espelho invertido: trabalho incessante, nenhum direito, e o descarte final quando se torna inconveniente — entregue aos antigos donos, escolhe a morte. O contraste expõe a engrenagem da riqueza brasileira do período: o capital 'respeitável' que recebe comendas abolicionistas foi acumulado sobre corpos escravizados — e o romance fecha exatamente sobre essa imagem." }
  ]
};
