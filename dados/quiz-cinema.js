/* DADOS DO QUIZ — Linguagem Audiovisual / Cinema */
const QUIZ_DADOS = {
  id: "linguagem-cinema",
  titulo: "Linguagem do Cinema",
  descricao: "8 questões sobre planos, ângulos e montagem — os truques que os filmes usam para mexer com você.",
  tempoPorQuestao: 45,
  questoes: [
    { pergunta: "A câmera filma de CIMA para baixo (plongée). Qual o efeito sobre o personagem?",
      opcoes: [
        "Ele parece menor, frágil ou vulnerável",
        "Ele parece maior e mais poderoso",
        "Ele parece estar correndo",
        "Não há efeito; é só uma escolha técnica"
      ],
      correta: "Ele parece menor, frágil ou vulnerável",
      explicacao: "O plongée \"esmaga\" o personagem na tela — por isso é usado em cenas de derrota, medo ou humilhação." },
    { pergunta: "E quando a câmera filma de BAIXO para cima (contre-plongée)?",
      opcoes: [
        "O personagem parece maior, imponente, poderoso",
        "O personagem parece menor e indefeso",
        "A cena parece mais rápida",
        "O cenário desaparece"
      ],
      correta: "O personagem parece maior, imponente, poderoso",
      explicacao: "Vilões, heróis e prédios gigantes adoram o contre-plongée: a câmera olha para cima e tudo se agiganta." },
    { pergunta: "Para mostrar a EMOÇÃO no rosto de um personagem, o diretor usa:",
      opcoes: ["Close-up", "Plano geral", "Plano americano", "Câmera subjetiva"],
      correta: "Close-up",
      explicacao: "O close-up enche a tela com o rosto — cada lágrima e cada hesitação ficam impossíveis de ignorar." },
    { pergunta: "O plano geral serve principalmente para:",
      opcoes: [
        "Situar o personagem no ambiente, dando contexto espacial",
        "Mostrar detalhes de objetos pequenos",
        "Esconder o cenário",
        "Destacar a expressão facial"
      ],
      correta: "Situar o personagem no ambiente, dando contexto espacial",
      explicacao: "É o plano que responde \"onde estamos?\" — o personagem aparece pequeno dentro do cenário completo." },
    { pergunta: "Travelling é:",
      opcoes: [
        "O movimento da câmera acompanhando a ação",
        "Um corte brusco entre duas cenas",
        "O som ambiente do filme",
        "A iluminação lateral do rosto"
      ],
      correta: "O movimento da câmera acompanhando a ação",
      explicacao: "A câmera \"viaja\" — sobre trilhos, steadicam ou drone — seguindo o personagem pela cena." },
    { pergunta: "Som DIEGÉTICO é aquele que:",
      opcoes: [
        "Existe dentro do mundo do filme (os personagens podem ouvir)",
        "Só o espectador ouve, como a trilha de suspense",
        "Foi gravado depois das filmagens",
        "Vem sempre de instrumentos de orquestra"
      ],
      correta: "Existe dentro do mundo do filme (os personagens podem ouvir)",
      explicacao: "O rádio ligado na cena é diegético; a orquestra que cresce no clímax, que só nós ouvimos, é extradiegética." },
    { pergunta: "Montagem paralela é quando o filme:",
      opcoes: [
        "Alterna entre duas ações que acontecem ao mesmo tempo",
        "Repete a mesma cena duas vezes",
        "Usa câmera lenta",
        "Mostra o passado do personagem"
      ],
      correta: "Alterna entre duas ações que acontecem ao mesmo tempo",
      explicacao: "O herói corre / a bomba conta os segundos / o herói corre... A alternância cria tensão crescente." },
    { pergunta: "O jump cut provoca no espectador a sensação de:",
      opcoes: [
        "Salto ou quebra no tempo",
        "Calma e continuidade",
        "Zoom lento",
        "Som mais alto"
      ],
      correta: "Salto ou quebra no tempo",
      explicacao: "É um corte \"errado\" de propósito: a imagem pula, o tempo tropeça — ótimo para urgência ou desconforto." }
  ]
};
