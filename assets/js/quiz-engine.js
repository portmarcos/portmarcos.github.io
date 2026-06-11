/* ============================================================
   MOTOR DE QUIZ v2 — reutilizável
   Novidades: campos de nome/turma e envio automático do
   resultado para o Google Sheets (se configurado em
   assets/js/config-sheets.js).
   ============================================================ */
(function () {
  const d = QUIZ_DADOS;
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

  let indice = 0, acertos = 0, cronometro = null, restante = 0;
  const TEMPO = (d.tempoPorQuestao || 45) * 10;
  const CHAVE_PLACAR = "placar:" + d.id;

  /* Sheets configurado? */
  const sheetsAtivo = typeof SHEETS_URL === "string" && SHEETS_URL.startsWith("https://");

  /* Preenche a tela inicial */
  $("quiz-titulo").textContent = d.titulo;
  $("quiz-descricao").textContent = d.descricao || "";
  $("info-questoes").textContent = d.questoes.length + " questões";
  $("info-tempo").textContent = (d.tempoPorQuestao || 45) + "s por questão";
  const melhorSalvo = localStorage.getItem(CHAVE_PLACAR);
  if (melhorSalvo) $("info-melhor").textContent = "🏆 Seu recorde: " + melhorSalvo;

  /* Injeta os campos de identificação (nome e turma) antes do botão */
  const blocoId = document.createElement("div");
  blocoId.innerHTML = `
    <label style="display:block;font-weight:700;font-size:.9rem;margin-bottom:4px" for="aluno-nome">Seu nome</label>
    <input id="aluno-nome" class="busca" type="text" placeholder="Nome completo" autocomplete="name" style="margin-bottom:12px">
    <label style="display:block;font-weight:700;font-size:.9rem;margin-bottom:4px" for="aluno-turma">Sua turma</label>
    <input id="aluno-turma" class="busca" type="text" placeholder="Ex.: 2EM A" style="margin-bottom:16px">
  `;
  telaInicio.insertBefore(blocoId, $("btn-comecar"));
  /* Lembra o nome do aluno entre atividades (no aparelho dele) */
  $("aluno-nome").value  = localStorage.getItem("aluno-nome")  || "";
  $("aluno-turma").value = localStorage.getItem("aluno-turma") || "";

  function embaralhar(lista) {
    const c = [...lista];
    for (let i = c.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [c[i], c[j]] = [c[j], c[i]];
    }
    return c;
  }
  function mostrar(tela) {
    [telaInicio, telaQuestao, telaFinal].forEach(t => t.hidden = true);
    tela.hidden = false;
  }

  /* ---------- Timer ---------- */
  function iniciarTimer() {
    pararTimer(); restante = TEMPO; atualizarBarra();
    cronometro = setInterval(() => {
      restante--; atualizarBarra();
      if (restante <= 0) responder(null);
    }, 100);
  }
  function pararTimer() { if (cronometro) clearInterval(cronometro); cronometro = null; }
  function atualizarBarra() {
    const pct = (restante / TEMPO) * 100;
    elBarra.style.width = pct + "%";
    elBarra.classList.toggle("alerta",  pct <= 50 && pct > 20);
    elBarra.classList.toggle("critico", pct <= 20);
  }

  /* ---------- Fluxo ---------- */
  function comecar() {
    const nome = $("aluno-nome").value.trim();
    if (!nome) { $("aluno-nome").focus(); $("aluno-nome").placeholder = "⚠ Digite seu nome para começar"; return; }
    localStorage.setItem("aluno-nome", nome);
    localStorage.setItem("aluno-turma", $("aluno-turma").value.trim());
    indice = 0; acertos = 0;
    mostrar(telaQuestao); desenharQuestao();
  }

  function desenharQuestao() {
    const q = d.questoes[indice];
    elProgresso.textContent = `Questão ${indice + 1} de ${d.questoes.length}`;
    elEnunciado.textContent = q.pergunta;
    elExplica.hidden = true; btnProxima.hidden = true;
    elOpcoes.innerHTML = "";
    embaralhar(q.opcoes).forEach(texto => {
      const b = document.createElement("button");
      b.className = "opcao"; b.textContent = texto;
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
    elOpcoes.querySelectorAll(".opcao").forEach(b => {
      b.disabled = true;
      if (b.textContent === q.correta) b.classList.add("correta");
      else if (b.textContent === escolha) b.classList.add("errada");
    });
    const rotulo = escolha === null ? "⏰ Tempo esgotado!" : (acertou ? "✅ Acertou!" : "❌ Não foi dessa vez.");
    elExplica.innerHTML = `<strong>${rotulo}</strong> ${q.explicacao || ""}`;
    elExplica.hidden = false;
    btnProxima.textContent = indice + 1 < d.questoes.length ? "Próxima questão →" : "Ver resultado 🏁";
    btnProxima.hidden = false; btnProxima.focus();
  }

  function proxima() {
    indice++;
    if (indice < d.questoes.length) desenharQuestao(); else finalizar();
  }

  function finalizar() {
    mostrar(telaFinal);
    const total = d.questoes.length;
    const pct = Math.round((acertos / total) * 100);
    $("nota-final").textContent = `${acertos}/${total}`;
    $("nota-pct").textContent = pct + "% de acerto";

    const recorde = Number(localStorage.getItem(CHAVE_PLACAR) || 0);
    if (acertos > recorde) {
      localStorage.setItem(CHAVE_PLACAR, acertos);
      $("nota-melhor").textContent = "🏆 Novo recorde pessoal!";
    } else if (recorde) {
      $("nota-melhor").textContent = `Seu recorde: ${recorde}/${total}`;
    }

    if (pct >= 70 && typeof confetti === "function") {
      confetti({ particleCount: 120, spread: 75, origin: { y: 0.6 } });
    }

    /* ---------- Envio para o Google Sheets ---------- */
    if (sheetsAtivo) {
      fetch(SHEETS_URL, {
        method: "POST",
        mode: "no-cors", /* Apps Script não devolve CORS; o envio funciona mesmo assim */
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          atividade: d.titulo,
          nome:  localStorage.getItem("aluno-nome")  || "(sem nome)",
          turma: localStorage.getItem("aluno-turma") || "(sem turma)",
          acertos: acertos,
          total: total,
          pct: pct
        })
      }).then(() => {
        const aviso = document.createElement("p");
        aviso.style.cssText = "color:var(--cor-materia);font-weight:700;font-size:.9rem";
        aviso.textContent = "📤 Resultado enviado ao professor!";
        $("nota-melhor").after(aviso);
      }).catch(() => {});
    }
  }

  $("btn-comecar").addEventListener("click", comecar);
  btnProxima.addEventListener("click", proxima);
  $("btn-refazer").addEventListener("click", comecar);
})();
