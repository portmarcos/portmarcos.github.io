/* QUIZ — Obras Literárias II (estilo Fuvest/Unicamp/ENEM) */
const QUIZ_DADOS = {
  id: "obras-enem-2",
  titulo: "Quiz — Obras Literárias II",
  descricao: "Mais 10 obras essenciais, no estilo das questões de vestibular: de O Guarani a Torto Arado.",
  tempoPorQuestao: 90,
  questoes: [
    { pergunta: "Em \"O Guarani\" (Alencar), a relação de Peri com Cecília reproduz, em chave indianista, o modelo:",
      opcoes: [
        "Do cavaleiro medieval devotado à sua dama",
        "Do colonizador que escraviza o nativo",
        "Do casal burguês interesseiro",
        "Da rivalidade entre povos indígenas"
      ],
      correta: "Do cavaleiro medieval devotado à sua dama",
      explicacao: "Alencar 'medievaliza' o índio: a lealdade absoluta de Peri a Ceci transpõe o ideal cavaleiresco europeu para a natureza americana." },
    { pergunta: "O desfecho de \"A Moreninha\" (Macedo) revela que Augusto e Carolina:",
      opcoes: [
        "Já haviam trocado juras de amor na infância, sem se reconhecerem",
        "Eram irmãos separados no nascimento",
        "Nunca chegam a se encontrar",
        "Desistem do amor por causa das famílias"
      ],
      correta: "Já haviam trocado juras de amor na infância, sem se reconhecerem",
      explicacao: "A descoberta do amor de infância resolve a trama e 'cura' a inconstância de Augusto — final típico do folhetim romântico." },
    { pergunta: "Leonardo, de \"Memórias de um Sargento de Milícias\", difere dos heróis românticos porque:",
      opcoes: [
        "É um anti-herói malandro, sem grandeza nem idealização",
        "Morre tragicamente por amor",
        "É um índio idealizado",
        "Luta em guerras pela pátria"
      ],
      correta: "É um anti-herói malandro, sem grandeza nem idealização",
      explicacao: "O romance foge à regra do seu tempo: humor, costumes populares e um protagonista que vence pela esperteza, não pela virtude." },
    { pergunta: "Em \"O Ateneu\" (Raul Pompeia), o internato funciona como:",
      opcoes: [
        "Microcosmo da sociedade, com suas hierarquias e violências",
        "Refúgio idealizado da infância feliz",
        "Cenário de aventuras fantásticas",
        "Espaço democrático de igualdade"
      ],
      correta: "Microcosmo da sociedade, com suas hierarquias e violências",
      explicacao: "Sob o verniz educativo, o Ateneu reproduz opressões do mundo adulto — a memória amarga de Sérgio é também crítica social." },
    { pergunta: "Macunaíma é chamado de \"herói sem nenhum caráter\" porque:",
      opcoes: [
        "Sintetiza as contradições brasileiras, sem identidade fixa",
        "É covarde em todas as situações",
        "Não aparece na própria história",
        "Recusa-se a falar português"
      ],
      correta: "Sintetiza as contradições brasileiras, sem identidade fixa",
      explicacao: "\"Sem caráter\" = sem identidade definida: preguiçoso e esperto, índio e urbano. Mário pergunta pela identidade nacional em forma de rapsódia." },
    { pergunta: "Em \"O Quinze\" (Rachel de Queiroz), Conceição recusa o casamento com Vicente principalmente porque:",
      opcoes: [
        "Percebe a distância intelectual e de projetos de vida entre os dois",
        "Ama outro homem da capital",
        "A família proíbe a união",
        "Vicente parte para a Europa"
      ],
      correta: "Percebe a distância intelectual e de projetos de vida entre os dois",
      explicacao: "Leitora e professora, Conceição escolhe a independência — protagonismo feminino raríssimo num romance de 1930." },
    { pergunta: "Em \"Morte e Vida Severina\" (João Cabral), o nascimento do menino no final significa:",
      opcoes: [
        "A teimosia da vida, que insiste mesmo 'severina', franzina",
        "A solução definitiva da seca",
        "O enriquecimento da família",
        "O retorno de Severino ao sertão"
      ],
      correta: "A teimosia da vida, que insiste mesmo 'severina', franzina",
      explicacao: "Quando Severino pensa em desistir, a vida responde nascendo — frágil, mas 'bela como um sim numa sala negativa'." },
    { pergunta: "Em \"A Hora da Estrela\" (Clarice Lispector), a presença do narrador Rodrigo S.M. evidencia:",
      opcoes: [
        "A metalinguagem: o ato de narrar vira parte do drama",
        "Um romance policial tradicional",
        "A ausência de reflexão na obra",
        "O foco narrativo em primeira pessoa de Macabéa"
      ],
      correta: "A metalinguagem: o ato de narrar vira parte do drama",
      explicacao: "Rodrigo sofre, hesita e se confessa enquanto narra — Clarice expõe a dificuldade (e a violência) de dar voz a uma invisível." },
    { pergunta: "O humor de \"Auto da Compadecida\" (Suassuna) se constrói principalmente:",
      opcoes: [
        "Pela esperteza popular de João Grilo diante dos poderosos",
        "Por piadas sobre outros países",
        "Pela sátira aos costumes indígenas",
        "Pelo nonsense sem crítica social"
      ],
      correta: "Pela esperteza popular de João Grilo diante dos poderosos",
      explicacao: "Na tradição do cordel e da commedia dell'arte, o pobre engana padeiro, padre e bispo — e o riso julga a hipocrisia dos de cima." },
    { pergunta: "Em \"Torto Arado\" (Itamar Vieira Junior), o episódio da faca que une as irmãs simboliza:",
      opcoes: [
        "O destino compartilhado: uma passa a ser a voz da outra",
        "Uma simples briga de infância",
        "A riqueza da família",
        "A separação definitiva das duas"
      ],
      correta: "O destino compartilhado: uma passa a ser a voz da outra",
      explicacao: "Bibiana e Belonísia ficam ligadas para sempre: voz e silêncio entrelaçados — metáfora da herança e da luta das mulheres de Água Negra." }
  ]
};
