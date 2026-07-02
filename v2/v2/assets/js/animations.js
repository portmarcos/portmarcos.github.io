/* ============================================================
   ANIMATIONS.JS — Prof. Marcos Cruz v2
   Partículas sutis no hero
   ============================================================ */

'use strict';

// ── Partículas flutuantes no hero ──────────────────────────

export function initParticles() {
  const container = document.querySelector('.hero__bg');
  if (!container) return;

  // Reduz partículas em mobile
  const count = window.innerWidth < 600 ? 12 : 22;

  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');

    const size    = Math.random() * 3 + 1.5;    // 1.5–4.5px
    const left    = Math.random() * 100;
    const top     = Math.random() * 100;
    const dur     = Math.random() * 14 + 10;    // 10–24s
    const delay   = Math.random() * -20;
    const opacity = Math.random() * 0.35 + 0.05;

    // Alterna entre cor primary e accent
    const color = Math.random() > 0.5
      ? 'rgba(108, 99, 255, ' + opacity + ')'
      : 'rgba(0, 212, 170, '  + opacity + ')';

    Object.assign(p.style, {
      position:     'absolute',
      width:        size + 'px',
      height:       size + 'px',
      left:         left + '%',
      top:          top  + '%',
      borderRadius: '50%',
      background:   color,
      pointerEvents:'none',
      animation:    `float-particle ${dur}s ${delay}s ease-in-out infinite`,
    });

    container.appendChild(p);
  }

  // Injeta o keyframe uma vez
  if (!document.querySelector('#particle-style')) {
    const style = document.createElement('style');
    style.id = 'particle-style';
    style.textContent = `
      @keyframes float-particle {
        0%   { transform: translate(0, 0) scale(1); }
        33%  { transform: translate(${rnd()}px, ${rnd()}px) scale(1.15); }
        66%  { transform: translate(${rnd()}px, ${rnd()}px) scale(0.9); }
        100% { transform: translate(0, 0) scale(1); }
      }
    `;
    document.head.appendChild(style);
  }
}

function rnd() { return (Math.random() - 0.5) * 60; }

// ── Typing effect no hero heading ─────────────────────────

export function initTyping() {
  const el    = document.querySelector('[data-typing]');
  if (!el) return;

  const words = el.dataset.typing.split('|');
  let wi = 0, ci = 0, deleting = false;
  const cursor = document.createElement('span');
  cursor.style.cssText = 'display:inline-block;width:3px;height:0.85em;background:var(--color-primary);margin-left:2px;vertical-align:middle;animation:blink 1s step-end infinite';
  el.after(cursor);

  function tick() {
    const word = words[wi];

    if (deleting) {
      ci--;
    } else {
      ci++;
    }

    el.textContent = word.slice(0, ci);

    let delay = deleting ? 60 : 100;

    if (!deleting && ci === word.length) {
      delay = 2000;
      deleting = true;
    } else if (deleting && ci === 0) {
      deleting = false;
      wi = (wi + 1) % words.length;
      delay = 400;
    }

    setTimeout(tick, delay);
  }

  tick();
}

// ── Init ───────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initTyping();
});
