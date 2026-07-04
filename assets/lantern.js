/* Portal Marcos Cruz — cursor "lanterna" global (segue o cursor em todo o site) */
(function () {
  if (window.__pmLantern) return; window.__pmLantern = true;
  var mm = window.matchMedia;
  if (mm && mm('(prefers-reduced-motion: reduce)').matches) return;
  if (mm && !mm('(pointer:fine)').matches) return; // sem cursor (toque) → ignora

  var css = '#pm-lantern{position:fixed;inset:0;pointer-events:none;z-index:9998;opacity:0;'
    + 'transition:opacity .35s ease;will-change:opacity;'
    + 'background:radial-gradient(360px circle at var(--lx,50%) var(--ly,50%),'
    + 'rgba(130,180,255,.12),rgba(168,85,247,.07) 42%,transparent 64%);'
    + 'mix-blend-mode:screen}';
  var st = document.createElement('style'); st.textContent = css;
  (document.head || document.documentElement).appendChild(st);

  var el = document.createElement('div'); el.id = 'pm-lantern';
  function mount() { (document.body || document.documentElement).appendChild(el); }
  if (document.body) mount(); else document.addEventListener('DOMContentLoaded', mount);

  var shown = false, rafId = null, px = 0, py = 0;
  function apply() {
    rafId = null;
    el.style.setProperty('--lx', px + 'px');
    el.style.setProperty('--ly', py + 'px');
    if (!shown) { el.style.opacity = '1'; shown = true; }
  }
  window.addEventListener('pointermove', function (e) {
    px = e.clientX; py = e.clientY;
    if (rafId == null) rafId = requestAnimationFrame(apply);
  }, { passive: true });
  document.addEventListener('mouseleave', function () { el.style.opacity = '0'; shown = false; });
  window.addEventListener('blur', function () { el.style.opacity = '0'; shown = false; });
})();
