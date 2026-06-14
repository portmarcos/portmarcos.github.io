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
  let abertas = [];   /* respostas dissertativas do aluno */
  const TEMPO = (d.tempoPorQuestao || 45) * 10;
  const CHAVE_PLACAR = "placar:" + d.id;

  /* Sheets configurado? */
  const urlSheets = (typeof SHEETS_URL === "string" ? SHEETS_URL : "").trim();
  const sheetsAtivo = urlSheets.startsWith("https://");

  /* Vídeo da atividade (se houver) */
  if (d.video) {
    const wrap = document.createElement("div");
    wrap.className = "video-wrap";
    wrap.innerHTML = `<iframe src="https://www.youtube.com/embed/${d.video}"
      title="Vídeo da atividade" allowfullscreen
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>`;
    telaInicio.parentNode.insertBefore(wrap, telaInicio);
  }

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
    indice = 0; acertos = 0; abertas = [];
    mostrar(telaQuestao); desenharQuestao();
  }

  function desenharQuestao() {
    const q = d.questoes[indice];
    elProgresso.textContent = `Questão ${indice + 1} de ${d.questoes.length}`;
    /* Texto-base (para questões com texto de apoio) */
    let tb = document.getElementById("texto-base");
    if (q.texto) {
      if (!tb) {
        tb = document.createElement("div");
        tb.id = "texto-base";
        tb.className = "texto-base";
        elEnunciado.parentNode.insertBefore(tb, elEnunciado);
      }
      tb.innerHTML = q.texto;
      tb.hidden = false;
    } else if (tb) { tb.hidden = true; }
    elEnunciado.textContent = q.pergunta;
    elExplica.hidden = true; btnProxima.hidden = true;
    elOpcoes.innerHTML = "";
    if (q.tipo === "aberta") {
      /* ---------- Questão dissertativa ---------- */
      elOpcoes.innerHTML = `
        <textarea id="resposta-aberta" class="busca" rows="5"
          placeholder="Escreva sua resposta aqui…" style="resize:vertical"></textarea>
        <button id="btn-revelar" class="btn btn-secundario">📖 Ver resposta esperada</button>`;
      document.getElementById("btn-revelar").addEventListener("click", revelarAberta);
      iniciarTimer();
      return;
    }
    elOpcoes.setAttribute("role", "group");
    elOpcoes.setAttribute("aria-label", "Alternativas — use as setas para navegar e Enter para responder");
    const letras = ["A", "B", "C", "D", "E", "F"];
    embaralhar(q.opcoes).forEach((texto, i) => {
      const b = document.createElement("button");
      b.className = "opcao";
      b.type = "button";
      b.textContent = texto;
      // rótulo de letra para leitor de tela e para a tecla de atalho
      const letra = letras[i] || String(i + 1);
      b.setAttribute("aria-label", letra + ": " + texto);
      b.dataset.letra = letra;
      b.tabIndex = i === 0 ? 0 : -1; // navegação tipo "radiogroup": só um na ordem de tab
      b.addEventListener("click", () => responder(texto));
      elOpcoes.appendChild(b);
    });
    // primeiro botão recebe foco para quem usa só teclado
    const primeiro = elOpcoes.querySelector(".opcao");
    if (primeiro) primeiro.focus();
    // dica de teclado, mostrada só na 1ª questão de cada tentativa
    if (indice === 0 && !document.getElementById("dica-teclado")) {
      const dica = document.createElement("p");
      dica.id = "dica-teclado";
      dica.style.cssText = "font-size:.8rem;opacity:.6;margin:10px 0 0;text-align:center";
      dica.textContent = "💡 Dica: use as teclas A, B, C… ou as setas + Enter para responder.";
      elOpcoes.parentNode.insertBefore(dica, elOpcoes.nextSibling);
    }
    iniciarTimer();
  }

  // ── Navegação por teclado nas alternativas ──────────────────
  // Setas ↑↓←→ movem o foco; A–F (ou 1–6) respondem direto.
  function tratarTeclado(e) {
    if (telaQuestao.hidden) return;
    const botoes = [...elOpcoes.querySelectorAll(".opcao:not([disabled])")];
    if (!botoes.length) return;

    // atalho por letra (A, B, C, D, E…)
    const tecla = e.key.toUpperCase();
    const porLetra = botoes.find(b => b.dataset.letra === tecla);
    if (porLetra) { e.preventDefault(); porLetra.click(); return; }

    const atual = document.activeElement;
    let idx = botoes.indexOf(atual);
    if (["ArrowDown", "ArrowRight"].includes(e.key)) {
      e.preventDefault();
      idx = (idx + 1) % botoes.length;
      moverFoco(botoes, idx);
    } else if (["ArrowUp", "ArrowLeft"].includes(e.key)) {
      e.preventDefault();
      idx = (idx - 1 + botoes.length) % botoes.length;
      moverFoco(botoes, idx);
    }
  }
  function moverFoco(botoes, idx) {
    botoes.forEach((b, i) => b.tabIndex = i === idx ? 0 : -1);
    botoes[idx].focus();
  }

  function revelarAberta() {
    pararTimer();
    const q = d.questoes[indice];
    const resp = (document.getElementById("resposta-aberta") || {}).value || "";
    abertas.push({ q: q.pergunta.slice(0, 120), r: resp.slice(0, 400) });
    document.getElementById("resposta-aberta").disabled = true;
    document.getElementById("btn-revelar").remove();
    elExplica.innerHTML = `<strong>📖 Resposta esperada:</strong> ${q.respostaModelo || ""}
      <div style="margin-top:12px;font-weight:700">Compare com a sua resposta. Como você se saiu?</div>
      <div style="display:flex;gap:8px;margin-top:8px;flex-wrap:wrap">
        <button class="btn btn-secundario" style="flex:1;padding:10px" data-av="1">✅ Acertei</button>
        <button class="btn btn-secundario" style="flex:1;padding:10px" data-av="0.5">🟡 Parcial</button>
        <button class="btn btn-secundario" style="flex:1;padding:10px" data-av="0">❌ Errei</button>
      </div>`;
    elExplica.hidden = false;
    elExplica.querySelectorAll("[data-av]").forEach(b => b.addEventListener("click", () => {
      acertos += Number(b.dataset.av);
      elExplica.querySelectorAll("[data-av]").forEach(x => x.disabled = true);
      b.style.borderColor = "var(--cor-materia)"; b.style.fontWeight = "800";
      btnProxima.textContent = indice + 1 < d.questoes.length ? "Próxima questão →" : "Ver resultado 🏁";
      btnProxima.hidden = false; btnProxima.focus();
    }));
  }

  function responder(escolha) {
    if (d.questoes[indice].tipo === "aberta") { revelarAberta(); return; }
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
    const fmt = n => Number.isInteger(n) ? n : String(n.toFixed(1)).replace(".", ",");
    $("nota-final").textContent = `${fmt(acertos)}/${total}`;
    $("nota-pct").textContent = pct + "% de acerto";

    const recorde = Number(localStorage.getItem(CHAVE_PLACAR) || 0);
    if (acertos > recorde) {
      localStorage.setItem(CHAVE_PLACAR, acertos);
      $("nota-melhor").textContent = "🏆 Novo recorde pessoal!";
    } else if (recorde) {
      $("nota-melhor").textContent = `Seu recorde: ${fmt(recorde)}/${total}`;
    }

    if (pct >= 70 && typeof confetti === "function") {
      confetti({ particleCount: 120, spread: 75, origin: { y: 0.6 } });
    }

    /* ---------- Envio para o Google Sheets ---------- */
    if (sheetsAtivo) {
      fetch(urlSheets, {
        method: "POST",
        mode: "no-cors", /* Apps Script não devolve CORS; o envio funciona mesmo assim */
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          atividade: d.titulo,
          nome:  localStorage.getItem("aluno-nome")  || "(sem nome)",
          turma: localStorage.getItem("aluno-turma") || "(sem turma)",
          acertos: acertos,
          total: total,
          pct: pct,
          abertas: abertas.map(a => "P: " + a.q + " | R: " + a.r).join("  •  ")
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
  document.addEventListener("keydown", tratarTeclado);
})();
