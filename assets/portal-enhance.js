/* ── Portal do Prof. Marcos Cruz — melhorias de interação ── */
(function () {
  function hexToAccent(el) {
    // tenta descobrir a cor de destaque do cartão (borda colorida, ícone, etc.)
    var probe = el.querySelector('[style*="color:#"], [class*="text-"]');
    return null;
  }

  function run() {
    // 1) Marca cartões para o brilho que segue o cursor
    var cards = document.querySelectorAll(
      'a.group.rounded-2xl, div.group.rounded-2xl, .spotlight, a[class*="rounded-2xl"][class*="border"], a.rounded-2xl.border'
    );
    cards.forEach(function (c) {
      if (!c.classList.contains('spotlight')) c.classList.add('pm-glow');
      // define a cor do brilho a partir do gradiente/acento já presente no cartão
      var accented = c.querySelector('[style*="border:1px solid #"], [style*="border-color:#"]');
      var m = null;
      if (accented) m = (accented.getAttribute('style') || '').match(/#([0-9A-Fa-f]{6})/);
      if (!m) {
        var grad = c.querySelector('[style*="linear-gradient"]');
        if (grad) m = (grad.getAttribute('style') || '').match(/#([0-9A-Fa-f]{6})/);
      }
      if (m) c.style.setProperty('--pm-spot', 'rgba(' + hexRgb(m[1]) + ',0.20)');
    });

    // 2) Ícone-tiles mais modernos
    document.querySelectorAll('.group .rounded-2xl.flex.items-center.justify-center, .spotlight .rounded-xl.flex.items-center.justify-center')
      .forEach(function (i) { i.classList.add('pm-icon'); });

    // 3) Transforma os selos "escape room" (e afins) em chips elegantes
    document.querySelectorAll('span').forEach(function (s) {
      var t = (s.textContent || '').trim().toLowerCase();
      if ((t === 'escape room' || t === 'destaque' || t === 'jogo' || t === 'prova real' || t === 'literatura')
          && s.className.indexOf('rounded-full') > -1) {
        s.classList.add('pm-badge');
        // remove o fundo "caixa" antigo, preservando a cor
        s.style.background = '';
        s.style.backgroundColor = '';
        s.style.padding = '';
      }
    });

    // 4) Brilho seguindo o cursor
    document.addEventListener('pointermove', function (e) {
      var el = e.target.closest ? e.target.closest('.spotlight, .pm-glow') : null;
      if (!el) return;
      var r = el.getBoundingClientRect();
      el.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      el.style.setProperty('--my', (e.clientY - r.top) + 'px');
    }, { passive: true });
  }

  function hexRgb(h) {
    return parseInt(h.substr(0, 2), 16) + ',' + parseInt(h.substr(2, 2), 16) + ',' + parseInt(h.substr(4, 2), 16);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run);
  else run();
  // reexecuta após hidratação do Next.js
  window.addEventListener('load', function () { setTimeout(run, 400); });
})();
