/* ============================================================
   MOTOR DE FLASHCARDS — reutilizável
   Lê a constante global FLASHCARDS_DADOS e controla o baralho.
   Toque na carta para virar; setas do teclado também funcionam.
   ============================================================ */
(function () {
  const d = FLASHCARDS_DADOS;

  const $ = id => document.getElementById(id);
  const carta    = $("fc-carta");
  const elFrente = $("fc-frente-texto");
  const elVerso  = $("fc-verso-texto");
  const elCont   = $("fc-contador");

  let baralho = [...d.cartas];
  let indice = 0;

  $("fc-titulo").textContent = d.titulo;
  $("fc-descricao").textContent = d.descricao || "";

  function desenhar() {
    const c = baralho[indice];
    carta.classList.remove("virada");           // sempre mostra a frente primeiro
    elFrente.textContent = c.frente;
    elVerso.textContent = c.verso;
    elCont.textContent = `${indice + 1} / ${baralho.length}`;
  }

  function virar() { carta.classList.toggle("virada"); }

  function navegar(passo) {
    indice = (indice + passo + baralho.length) % baralho.length; // dá a volta
    desenhar();
  }

  function embaralhar() {
    for (let i = baralho.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [baralho[i], baralho[j]] = [baralho[j], baralho[i]];
    }
    indice = 0;
    desenhar();
  }

  /* ---------- Eventos ---------- */
  carta.addEventListener("click", virar);
  carta.addEventListener("keydown", e => {            // acessível por teclado
    if (e.key === " " || e.key === "Enter") { e.preventDefault(); virar(); }
  });
  $("btn-anterior").addEventListener("click", () => navegar(-1));
  $("btn-proximo").addEventListener("click", () => navegar(1));
  $("btn-embaralhar").addEventListener("click", embaralhar);
  document.addEventListener("keydown", e => {
    if (e.key === "ArrowRight") navegar(1);
    if (e.key === "ArrowLeft")  navegar(-1);
  });

  desenhar();
})();
