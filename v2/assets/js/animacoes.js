/* Cards surgem suavemente conforme a página rola */
(function () {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const css = document.createElement("style");
  css.textContent = `
    .anim-up { opacity:0; transform:translateY(16px); transition:opacity .5s, transform .5s; }
    .anim-up.visivel { opacity:1; transform:none; }`;
  document.head.appendChild(css);

  const obs = new IntersectionObserver(entradas => {
    entradas.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visivel"); obs.unobserve(e.target); } });
  }, { threshold: .08 });

  function observar() {
    document.querySelectorAll(".card-atividade:not(.anim-up), .obra-card:not(.anim-up), .card-breve:not(.anim-up)")
      .forEach(c => { c.classList.add("anim-up"); obs.observe(c); });
  }
  observar();
  /* Reobserva quando filtros redesenham os cards */
  new MutationObserver(observar).observe(document.body, { childList: true, subtree: true });
})();
