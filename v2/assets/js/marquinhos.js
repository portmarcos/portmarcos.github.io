/* MARQUINHOS v2 — mascote 3D que flutua e recepciona.
   Para usar o robô no lugar do rapaz, troque marquinhos.png
   por marquinhos-robo.png na linha do <img>. */
(function () {
  const css = document.createElement("style");
  css.textContent = `
    #marquinhos { position:fixed;right:12px;bottom:10px;z-index:99;
      display:flex;align-items:flex-end;gap:8px;
      animation:mq-entrar .8s cubic-bezier(.34,1.56,.64,1) both; }
    @keyframes mq-entrar { from{transform:translateY(130%);opacity:0} to{transform:none;opacity:1} }
    #mq-img { height:128px;width:auto;cursor:pointer;
      filter:drop-shadow(0 10px 16px rgba(27,36,48,.3));
      animation:mq-flutuar 3.4s ease-in-out infinite; }
    @keyframes mq-flutuar {
      0%,100%{transform:translateY(0) rotate(0)}
      50%{transform:translateY(-7px) rotate(-1.5deg)} }
    #mq-balao { background:#fff;border:1px solid #E3E7EE;
      border-radius:16px 16px 4px 16px;box-shadow:0 8px 26px rgba(27,36,48,.18);
      padding:12px 30px 12px 14px;max-width:225px;font-size:.88rem;line-height:1.45;
      color:#1B2430;position:relative;font-family:inherit;margin-bottom:14px;
      animation:mq-balao-surgir .5s .5s ease both; }
    @keyframes mq-balao-surgir { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:none} }
    #mq-balao strong { color:#1565C0; }
    #mq-fechar { position:absolute;top:6px;right:8px;border:none;background:none;
      font-size:1rem;cursor:pointer;color:#5A6473;padding:2px;line-height:1; }
    @media (prefers-reduced-motion:reduce){ #marquinhos,#mq-img,#mq-balao{animation:none} }
    @media (max-width:480px){ #mq-img{height:100px} #mq-balao{max-width:180px;font-size:.82rem} }
  `;
  document.head.appendChild(css);

  const el = document.createElement("div");
  el.id = "marquinhos";
  el.innerHTML = `
    <div id="mq-balao">
      <button id="mq-fechar" aria-label="Fechar mascote">✕</button>
      Olá! Eu sou o <strong>Marquinhos</strong> 👋<br>
      Vou te guiar ao conhecimento. Escolha uma seção ou use a busca!
    </div>
    <img id="mq-img" src="assets/img/marquinhos.png" alt="Marquinhos, o mascote do portal">`;
  document.body.appendChild(el);

  document.getElementById("mq-fechar").addEventListener("click", () => el.remove());
  document.getElementById("mq-img").addEventListener("click", () => {
    const b = document.getElementById("mq-balao");
    b.style.display = b.style.display === "none" ? "" : "none";
  });
})();
