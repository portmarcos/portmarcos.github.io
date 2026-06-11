/* ============================================================
   MARQUINHOS — o mascote que recepciona os visitantes.
   Aparece no canto, acena, fala e pode ser dispensado.
   ============================================================ */
(function () {
  const css = document.createElement("style");
  css.textContent = `
    #marquinhos { position:fixed;right:14px;bottom:14px;z-index:99;
      display:flex;align-items:flex-end;gap:10px;
      animation:mq-entrar .7s cubic-bezier(.34,1.56,.64,1) both; }
    @keyframes mq-entrar { from{transform:translateY(120%);opacity:0} to{transform:none;opacity:1} }
    #mq-balao { background:#fff;border:1px solid var(--linha,#E3E7EE);
      border-radius:16px 16px 4px 16px;box-shadow:0 8px 26px rgba(27,36,48,.18);
      padding:12px 30px 12px 14px;max-width:230px;font-size:.88rem;line-height:1.45;
      color:#1B2430;position:relative;font-family:inherit; }
    #mq-balao strong { color:#1565C0; }
    #mq-fechar { position:absolute;top:6px;right:8px;border:none;background:none;
      font-size:1rem;cursor:pointer;color:#5A6473;padding:2px;line-height:1; }
    #mq-svg { width:88px;height:88px;flex:0 0 auto;cursor:pointer;
      filter:drop-shadow(0 6px 14px rgba(27,36,48,.25)); }
    #mq-braco { transform-origin:74px 62px;animation:mq-acenar 1.6s ease-in-out infinite; }
    @keyframes mq-acenar { 0%,100%{transform:rotate(0)} 30%{transform:rotate(-28deg)} 60%{transform:rotate(8deg)} }
    .mq-olho { animation:mq-piscar 4.2s infinite; transform-origin:center; }
    @keyframes mq-piscar { 0%,93%,100%{transform:scaleY(1)} 96%{transform:scaleY(.1)} }
    @media (prefers-reduced-motion:reduce){ #marquinhos,#mq-braco,.mq-olho{animation:none} }
  `;
  document.head.appendChild(css);

  const el = document.createElement("div");
  el.id = "marquinhos";
  el.innerHTML = `
    <div id="mq-balao">
      <button id="mq-fechar" aria-label="Fechar mascote">✕</button>
      Olá! Eu sou o <strong>Marquinhos</strong> 👋<br>
      Vou te guiar ao conhecimento. Escolha uma seção acima ou use a busca!
    </div>
    <svg id="mq-svg" viewBox="0 0 96 96" role="img" aria-label="Marquinhos, o mascote do portal">
      <!-- corpo: polo azul-marinho -->
      <path d="M22 96 V74 q0-14 14-16 h24 q14 2 14 16 V96 Z" fill="#1B3A6B"/>
      <path d="M40 58 h16 l-8 12 Z" fill="#fff" opacity=".9"/>
      <!-- braço que acena -->
      <g id="mq-braco">
        <rect x="68" y="48" width="9" height="22" rx="4.5" fill="#1B3A6B"/>
        <circle cx="72.5" cy="44" r="6" fill="#E0A878"/>
      </g>
      <!-- cabeça -->
      <circle cx="48" cy="34" r="20" fill="#E0A878"/>
      <!-- cabelo curto -->
      <path d="M28 32 q2-18 20-18 q18 0 20 18 q-6-10-20-10 q-14 0-20 10 Z" fill="#2B2018"/>
      <!-- sobrancelhas -->
      <rect x="36" y="27" width="9" height="2.6" rx="1.3" fill="#2B2018"/>
      <rect x="51" y="27" width="9" height="2.6" rx="1.3" fill="#2B2018"/>
      <!-- olhos -->
      <circle class="mq-olho" cx="41" cy="34" r="2.6" fill="#1B2430"/>
      <circle class="mq-olho" cx="55" cy="34" r="2.6" fill="#1B2430"/>
      <!-- sorriso -->
      <path d="M40 42 q8 7 16 0" stroke="#7A4A2B" stroke-width="2.4" fill="none" stroke-linecap="round"/>
    </svg>`;
  document.body.appendChild(el);

  document.getElementById("mq-fechar").addEventListener("click", () => el.remove());
  /* Tocar no boneco também mostra/esconde o balão */
  document.getElementById("mq-svg").addEventListener("click", () => {
    const b = document.getElementById("mq-balao");
    b.style.display = b.style.display === "none" ? "" : "none";
  });
})();
