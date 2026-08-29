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

  // Ativa o card "Apostila — Segurança da Informação" em informatica/index.html
  // (antes um placeholder "em breve", cinza e sem link). A edição estática do
  // HTML/JSX não sobrevive sozinha: o bundle compilado do Next ainda tem os
  // dados antigos (soon:true, sem href) pra esse item, e qualquer hover em
  // QUALQUER card da grade dispara setHov() no componente pai, que re-renderiza
  // TODOS os ContentCard — inclusive este, revertendo pro placeholder cinza.
  // Por isso o patch roda de novo (MutationObserver) sempre que o React desfizer.
  function ativarApostilaSeguranca() {
    var p = location.pathname;
    if (p !== '/informatica/' && p !== '/informatica/index.html' && p !== '/informatica') return;

    var TEMPLATE = '<a href="/informatica/seguranca/apostila.html" class="spotlight group relative rounded-2xl border p-6 transition-all duration-300 block overflow-hidden cursor-pointer" style="border-color:rgba(51,65,85,0.6);background:rgba(15,23,42,0.4);transform:translateY(0);box-shadow:none;opacity:1;--spot:#10B98122">' +
      '<span class="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style="background:radial-gradient(320px circle at var(--mx) var(--my), var(--spot), transparent 60%)"></span>' +
      '<div class="relative"><div class="flex items-start justify-between mb-4">' +
      '<div class="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110" style="background:linear-gradient(145deg,#10B98133,#10B98114);color:#10B981;box-shadow:inset 0 1px 0 rgba(255,255,255,0.2),0 0 0 1px #10B98126">' +
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.8 4.6 5.6v6c0 5 3.2 8.3 7.4 9.6 4.2-1.3 7.4-4.6 7.4-9.6v-6L12 2.8Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M8.8 12.2l2.3 2.3 4.1-4.6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
      '</div><span class="text-xs font-mono2 px-2 py-0.5 rounded-full" style="color:#10B981;background-color:#10B9811f">apostila</span></div>' +
      '<h3 class="font-display font-semibold text-base mb-1.5 text-slate-100">Apostila — Segurança da Informação</h3>' +
      '<p class="text-sm text-slate-500 leading-snug mb-4">Tríade CID, malware, criptografia, função hash, segurança física e ambiental — com quiz interativo.</p>' +
      '<div class="flex items-center justify-between"><span class="font-mono2 text-xs text-slate-500">Curso Técnico · leitura</span>' +
      '<div class="w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-300" style="border-color:rgba(51,65,85,0.8);color:#64748B;transform:translateX(0)">' +
      '<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>' +
      '</div></div></div></a>';

    function findPlaceholder() {
      var hs = document.querySelectorAll('h3');
      for (var i = 0; i < hs.length; i++) {
        if ((hs[i].textContent || '').trim() === 'Segurança e Malware') {
          return hs[i].closest('.spotlight') || hs[i].closest('[class*="rounded-2xl"]');
        }
      }
      return null;
    }

    function patch() {
      var card = findPlaceholder();
      if (!card) return; // já ativado (ou ainda não renderizado)
      card.outerHTML = TEMPLATE;
    }

    patch();
    if (!window.__pmApostilaSegObs) {
      var host = document.querySelector('#__next') || document.body;
      window.__pmApostilaSegObs = new MutationObserver(function () { patch(); });
      window.__pmApostilaSegObs.observe(host, { childList: true, subtree: true });
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ativarApostilaSeguranca);
  else ativarApostilaSeguranca();
  window.addEventListener('load', function () { setTimeout(ativarApostilaSeguranca, 400); });
})();
