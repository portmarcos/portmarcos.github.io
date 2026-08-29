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

  // Atalho pra Prova 3EM/3ºTri. Tentei inserir um <li> a mais dentro do
  // rodapé (que é HTML estático exportado pelo Next.js), mas essa página
  // hidrata e RECONCILIA a árvore inteira repetidamente — qualquer nó extra
  // que o bundle compilado não espera é removido de novo assim que o React
  // re-renderiza, não importa quanto se espere (~10s de teste real, sempre
  // removido de novo). Por isso o atalho vai FORA de #__next, direto no
  // <body>, como um botão flutuante — o React nunca gerencia nem reconcilia
  // nada fora da raiz onde foi montado, então este elemento não pode ser
  // apagado por ele.
  function adicionarAtalhoProva() {
    // só na página inicial — este script também roda em informatica/index.html e jogos/index.html
    var p = location.pathname;
    if (p !== '/' && p !== '/index.html') return;
    if (document.getElementById('pm-atalho-prova')) return;
    var a = document.createElement('a');
    a.id = 'pm-atalho-prova';
    a.href = '/atividades/prova-3em-3tri-portugues.html';
    a.textContent = '📝 Prova 3º EM — 2º Tri';
    a.style.cssText = [
      'position:fixed', 'right:18px', 'bottom:18px', 'z-index:9999',
      'display:inline-flex', 'align-items:center', 'gap:8px',
      'padding:11px 18px', 'border-radius:999px',
      'background:#22D3EE', 'color:#020617',
      'font-family:Inter,system-ui,sans-serif', 'font-weight:700', 'font-size:13px',
      'text-decoration:none', 'box-shadow:0 8px 24px rgba(34,211,238,0.35)',
      'transition:transform .2s'
    ].join(';');
    a.addEventListener('mouseenter', function () { a.style.transform = 'translateY(-2px)'; });
    a.addEventListener('mouseleave', function () { a.style.transform = 'none'; });
    document.body.appendChild(a);
  }
  adicionarAtalhoProva();
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', adicionarAtalhoProva);
  window.addEventListener('load', adicionarAtalhoProva);

  // Mesmo atalho flutuante, agora pra Prova 2EM/2ºTri — empilhado ACIMA do
  // botão do 3º ano (bottom:78px em vez de 18px) pra não sobrepor os dois.
  function adicionarAtalhoProva2Ano() {
    var p = location.pathname;
    if (p !== '/' && p !== '/index.html') return;
    if (document.getElementById('pm-atalho-prova-2ano')) return;
    var a = document.createElement('a');
    a.id = 'pm-atalho-prova-2ano';
    a.href = '/atividades/prova-2em-2tri-portugues.html';
    a.textContent = '📝 Prova 2º EM — 2º Tri';
    a.style.cssText = [
      'position:fixed', 'right:18px', 'bottom:78px', 'z-index:9999',
      'display:inline-flex', 'align-items:center', 'gap:8px',
      'padding:11px 18px', 'border-radius:999px',
      'background:#D8B36A', 'color:#0C0A15',
      'font-family:Inter,system-ui,sans-serif', 'font-weight:700', 'font-size:13px',
      'text-decoration:none', 'box-shadow:0 8px 24px rgba(216,179,106,0.35)',
      'transition:transform .2s'
    ].join(';');
    a.addEventListener('mouseenter', function () { a.style.transform = 'translateY(-2px)'; });
    a.addEventListener('mouseleave', function () { a.style.transform = 'none'; });
    document.body.appendChild(a);
  }
  adicionarAtalhoProva2Ano();
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', adicionarAtalhoProva2Ano);
  window.addEventListener('load', adicionarAtalhoProva2Ano);

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run);
  else run();
  // reexecuta após hidratação do Next.js
  window.addEventListener('load', function () { setTimeout(run, 400); });
})();
