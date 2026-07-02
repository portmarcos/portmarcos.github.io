/* ============================================================
   CURSOR.JS — Prof. Marcos Cruz v2
   Cursor personalizado com anel seguidor
   ============================================================ */

'use strict';

export function initCursor() {
  // Não ativa em dispositivos touch
  if (window.matchMedia('(hover: none)').matches) return;

  const dot  = document.createElement('div');
  const ring = document.createElement('div');

  dot.className  = 'cursor cursor__dot';
  ring.className = 'cursor cursor__ring';

  document.body.appendChild(dot);
  document.body.appendChild(ring);

  let mouseX = -100, mouseY = -100;
  let ringX  = -100, ringY  = -100;
  let hovering = false;

  // Posição exata do dot
  window.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + 'px';
    dot.style.top  = mouseY + 'px';
  });

  // Ring com lag suave (lerp)
  function lerp(a, b, t) { return a + (b - a) * t; }

  function animateRing() {
    ringX = lerp(ringX, mouseX, 0.14);
    ringY = lerp(ringY, mouseY, 0.14);
    ring.style.left = ringX + 'px';
    ring.style.top  = ringY + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  // Hover em elementos interativos
  const interactives = 'a, button, [role="button"], input, textarea, select, label, .area-card, .material-card, .search-item, .navbar__search-trigger';

  document.addEventListener('mouseover', e => {
    if (e.target.closest(interactives)) {
      ring.classList.add('cursor--hover');
      hovering = true;
    }
  });

  document.addEventListener('mouseout', e => {
    if (e.target.closest(interactives)) {
      ring.classList.remove('cursor--hover');
      hovering = false;
    }
  });

  // Click feedback
  document.addEventListener('mousedown', () => {
    ring.classList.add('cursor--click');
  });

  document.addEventListener('mouseup', () => {
    ring.classList.remove('cursor--click');
  });

  // Oculta ao sair da janela
  document.addEventListener('mouseleave', () => {
    dot.style.opacity  = '0';
    ring.style.opacity = '0';
  });

  document.addEventListener('mouseenter', () => {
    dot.style.opacity  = '1';
    ring.style.opacity = '1';
  });
}

document.addEventListener('DOMContentLoaded', initCursor);
