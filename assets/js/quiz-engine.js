/* ============================================================
   MOTOR DE QUIZ — reutilizável
   Lê a constante global QUIZ_DADOS (definida no arquivo de dados
   carregado antes deste script) e controla todo o jogo.

   Para criar um quiz novo NÃO é preciso mexer aqui:
   basta criar outro arquivo de dados e outra página HTML.
   ============================================================ */
(function () {
  const d = QUIZ_DADOS;

  /* ---------- Elementos da página ---------- */
  const $ = id => document.getElementById(id);
  const telaInicio  = $("tela-inicio");
  const telaQuestao = $("tela-questao");
  const telaFinal   = $("tela-final");
  const elProgresso = $("progresso");
  const elBarra     = $("timer-barra");
  const elEnunciado = $("enunciado");
  const elOpcoes    = $("opcoes");
  const elExplica   = $("explicacao");
  const btnProxima  = $("btn-proxima");

  /* ---------- Estado ---------- */
  let indice = 0;          // questão atual
  let acertos = 0;
  let cronometro = null;   // setInterval do timer
  let restante = 0;        // décimos de segundo restantes

  const TEMPO = (d.tempoPorQuestao || 45) * 10; // em décimos de segundo
  const CHAVE_PLACAR = "placar:" + d.id;        // melhor nota no localStorage

  /* Preenche título e informações da tela inicial */
  $("quiz-titulo").textContent = d.titulo;
  $("quiz-descricao").textContent = d.descricao || "";
  $("info-questoes").textContent = d.questoes.length + " questões";
  $("info-tempo").textContent = (d.tempoPorQuestao || 45) + "s por questão";
  const melhorSalvo = localStorage.getItem(CHAVE_PLACAR);
  if (melhorSalvo) $("info-melhor").textContent = "🏆 Seu recorde: " + melhorSalvo;

  /* ---------- Utilidades ---------- */
  function embaralhar(lista) {
    const copia = [...lista];
    for (let i = copia.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
  }

  function mostrar(tela) {
    [telaInicio, telaQuestao, telaFinal].forEach(t => t.hidden = true);
    tela.hidden = false;
  }

  /* ---------- Timer ---------- */
  function iniciarTimer() {
    pararTimer();
    restante = TEMPO;
    atualizarBarra();
    cronometro = setInterval(() => {
      restante--;
      atualizarBarra();
      if (restante <= 0) responder(null); // tempo esgotado conta como erro
    }, 100);
  }
  function pararTimer() { if (cronometro) clearInterval(cronometro); cronometro = null; }
  function atualizarBarra() {
    const pct = (restante / TEMPO) * 100;
    elBarra.style.width = pct + "%";
    elBarra.classList.toggle("alerta",  pct <= 50 && pct > 20);
    elBarra.classList.toggle("critico", pct <= 20);
  }

  /* ---------- Fluxo do jogo ---------- */
  function comecar() {
    indice = 0;
    acertos = 0;
    mostrar(telaQuestao);
    desenharQuestao();
  }

  function desenharQuestao() {
    const q = d.questoes[indice];
    elProgresso.textContent = `Questão ${indice + 1} de ${d.questoes.length}`;
    elEnunciado.textContent = q.pergunta;
    elExplica.hidden = true;
    btnProxima.hidden = true;

    /* Cria os botões de opção em ordem aleatória */
    elOpcoes.innerHTML = "";
    embaralhar(q.opcoes).forEach(texto => {
      const b = document.createElement("button");
      b.className = "opcao";
      b.textContent = texto;
      b.addEventListener("click", () => responder(texto));
      elOpcoes.appendChild(b);
    });

    iniciarTimer();
  }

  function responder(escolha) {
    pararTimer();
    const q = d.questoes[indice];
    const acertou = escolha === q.correta;
    if (acertou) acertos++;

    /* Pinta as opções: a correta sempre fica verde */
    elOpcoes.querySelectorAll(".opcao").forEach(b => {
      b.disabled = true;
      if (b.textContent === q.correta) b.classList.add("correta");
      else if (b.textContent === escolha) b.classList.add("errada");
    });

    /* Mostra a explicação */
    const rotulo = escolha === null ? "⏰ Tempo esgotado!" : (acertou ? "✅ Acertou!" : "❌ Não foi dessa vez.");
    elExplica.innerHTML = `<strong>${rotulo}</strong> ${q.explicacao || ""}`;
    elExplica.hidden = false;

    btnProxima.textContent = indice + 1 < d.questoes.length ? "Próxima questão →" : "Ver resultado 🏁";
    btnProxima.hidden = false;
    btnProxima.focus();
  }

  function proxima() {
    indice++;
    if (indice < d.questoes.length) desenharQuestao();
    else finalizar();
  }

  function finalizar() {
    mostrar(telaFinal);
    const total = d.questoes.length;
    const pct = Math.round((acertos / total) * 100);
    $("nota-final").textContent = `${acertos}/${total}`;
    $("nota-pct").textContent = pct + "% de acerto";

    /* Guarda o recorde no navegador do aluno */
    const recorde = Number(localStorage.getItem(CHAVE_PLACAR) || 0);
    if (acertos > recorde) {
      localStorage.setItem(CHAVE_PLACAR, acertos);
      $("nota-melhor").textContent = "🏆 Novo recorde pessoal!";
    } else if (recorde) {
      $("nota-melhor").textContent = `Seu recorde: ${recorde}/${total}`;
    }

    /* Confete na conclusão com 70% ou mais (se a biblioteca carregou) */
    if (pct >= 70 && typeof confetti === "function") {
      confetti({ particleCount: 120, spread: 75, origin: { y: 0.6 } });
    }
  }

  /* ---------- Botões ---------- */
  $("btn-comecar").addEventListener("click", comecar);
  btnProxima.addEventListener("click", proxima);
  $("btn-refazer").addEventListener("click", comecar);
})();
