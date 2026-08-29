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

  // Ativa e recolore os cards de informatica/index.html cujos dados no bundle
  // compilado do Next estão desatualizados (cor antiga #10B981 pra todos, ou
  // no caso de Segurança, o placeholder "em breve" cinza sem link inteiro).
  // Edição estática de HTML/JSX sozinha NÃO sobrevive: qualquer hover em
  // QUALQUER card da grade dispara setHov() no componente pai, que re-renderiza
  // TODOS os ContentCard a partir do bundle antigo — inclusive os que não
  // foram hovered, revertendo cor/link. Um simples tweak de `style` também não
  // sobrevive (React ainda é dono do node e reaplica o `style` prop antigo no
  // próximo commit) — por isso cada card é TROCADO por um node novo via
  // outerHTML: o node antigo fica órfão na fiber do React (que não é mais
  // visível na tela), e o novo node, criado fora do React, nunca mais é
  // tocado por ele. O MutationObserver (childList) reaplica sempre que uma
  // troca de node acontecer de novo em algum lugar da árvore.
  var SVG_ICONS = {
    redes: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="4.6" r="2.4" stroke="currentColor" stroke-width="1.6"/><circle cx="4.6" cy="17.5" r="2.4" stroke="currentColor" stroke-width="1.6"/><circle cx="19.4" cy="17.5" r="2.4" stroke="currentColor" stroke-width="1.6"/><path d="M10.4 6.6 6.6 15.4M13.6 6.6l3.8 8.8M7.4 17.5h9.2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle cx="12" cy="4.6" r="0.9" fill="currentColor"/><circle cx="4.6" cy="17.5" r="0.9" fill="currentColor"/><circle cx="19.4" cy="17.5" r="0.9" fill="currentColor"/></svg>',
    cadeado: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4.5" y="10.5" width="15" height="10" rx="2.6" stroke="currentColor" stroke-width="1.6"/><path d="M7.5 10.5V7.8a4.5 4.5 0 0 1 9 0v2.7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle cx="12" cy="14.6" r="1.5" fill="currentColor"/><path d="M12 16.1v2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
    clipboard: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4.5" y="4.2" width="15" height="17.6" rx="2.4" stroke="currentColor" stroke-width="1.6"/><rect x="8.5" y="2.5" width="7" height="3.4" rx="1.4" stroke="currentColor" stroke-width="1.6"/><path d="M8 12h5.4M8 15.4h8M8 8.6h8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
    curso: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 9.4 12 5l9.5 4.4L12 13.8 2.5 9.4Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M6.6 11.4v4.3c0 1.6 2.4 2.9 5.4 2.9s5.4-1.3 5.4-2.9v-4.3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 9.6v5.6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle cx="21" cy="16.6" r="1" fill="currentColor"/></svg>',
    escudo: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.8 4.6 5.6v6c0 5 3.2 8.3 7.4 9.6 4.2-1.3 7.4-4.6 7.4-9.6v-6L12 2.8Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M8.8 12.2l2.3 2.3 4.1-4.6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  };
  // oldTitle: como o card aparece no bundle compilado (o que precisamos achar pra substituir)
  var CARD_FIXES = [
    { oldTitle: 'Apostila — Redes de Computadores', title: 'Apostila — Redes de Computadores', desc: 'IP, DNS, DHCP, gateway e protocolos explicados passo a passo.', meta: 'Curso Técnico · leitura', href: '/informatica/redes/apostila.html', badge: 'apostila', icon: 'redes', hex: '2563EB' },
    { oldTitle: 'Escape Room — Diagnóstico de Rede', title: 'Escape Room — Diagnóstico de Rede', desc: 'A rede da empresa caiu. Use DNS, DHCP e IP para descobrir o culpado.', meta: '2EM–3EM · 30 min', href: '/informatica/redes/escape-redes.html', badge: 'jogo', icon: 'cadeado', hex: 'F59E0B' },
    { oldTitle: 'Projeto de Pesquisa — Guia Completo', title: 'Projeto de Pesquisa — Guia Completo', desc: 'Guia para montar seu projeto científico do zero, módulo por módulo.', meta: 'Curso Técnico · contínuo', href: '/informatica/projeto-pesquisa.html', badge: 'projeto', icon: 'clipboard', hex: '7C3AED' },
    { oldTitle: 'Explorador Digital', title: 'Explorador Digital', desc: 'Curso autoinstrutivo de 15 aulas: hardware, software, internet, senhas, algoritmos e IA — com atividades e certificado ao final.', meta: '6º-7º ano · 15 aulas', href: '/informatica/explorador-digital.html', badge: 'curso', icon: 'curso', hex: 'EA580C' },
    { oldTitle: 'Segurança e Malware', title: 'Apostila — Segurança da Informação', desc: 'Tríade CID, malware, criptografia, função hash, segurança física e ambiental — com quiz interativo.', meta: 'Curso Técnico · leitura', href: '/informatica/seguranca/apostila.html', badge: 'apostila', icon: 'escudo', hex: 'DC2626' }
  ];

  function buildCardHTML(def) {
    return '<a href="' + def.href + '" data-pm-fixed="1" class="spotlight group relative rounded-2xl border p-6 transition-all duration-300 block overflow-hidden cursor-pointer" style="border-color:rgba(51,65,85,0.6);background:rgba(15,23,42,0.4);transform:translateY(0);box-shadow:none;opacity:1;--spot:#' + def.hex + '22">' +
      '<span class="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style="background:radial-gradient(320px circle at var(--mx) var(--my), var(--spot), transparent 60%)"></span>' +
      '<div class="relative"><div class="flex items-start justify-between mb-4">' +
      '<div class="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110" style="background:linear-gradient(145deg,#' + def.hex + '33,#' + def.hex + '14);color:#' + def.hex + ';box-shadow:inset 0 1px 0 rgba(255,255,255,0.2),0 0 0 1px #' + def.hex + '26">' +
      SVG_ICONS[def.icon] +
      '</div><span class="text-xs font-mono2 px-2 py-0.5 rounded-full" style="color:#' + def.hex + ';background-color:#' + def.hex + '1f">' + def.badge + '</span></div>' +
      '<h3 class="font-display font-semibold text-base mb-1.5 text-slate-100">' + def.title + '</h3>' +
      '<p class="text-sm text-slate-500 leading-snug mb-4">' + def.desc + '</p>' +
      '<div class="flex items-center justify-between"><span class="font-mono2 text-xs text-slate-500">' + def.meta + '</span>' +
      '<div class="w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-300" style="border-color:rgba(51,65,85,0.8);color:#64748B;transform:translateX(0)">' +
      '<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>' +
      '</div></div></div></a>';
  }

  function ativarCardsInformatica() {
    var p = location.pathname;
    if (p !== '/informatica/' && p !== '/informatica/index.html' && p !== '/informatica') return;

    function patch() {
      var hs = document.querySelectorAll('h3');
      for (var i = 0; i < hs.length; i++) {
        var text = (hs[i].textContent || '').trim();
        for (var j = 0; j < CARD_FIXES.length; j++) {
          if (text === CARD_FIXES[j].oldTitle) {
            var card = hs[i].closest('.spotlight') || hs[i].closest('[class*="rounded-2xl"]');
            // data-pm-fixed evita substituir de novo um card que já é o node novo
            // (título antigo e novo são iguais pros 4 cards que só mudam de cor,
            // então sem essa marca o MutationObserver entraria num loop infinito
            // de substituição, já que a própria troca dispara childList de novo)
            if (card && !card.hasAttribute('data-pm-fixed')) card.outerHTML = buildCardHTML(CARD_FIXES[j]);
          }
        }
      }
    }

    patch();
    if (!window.__pmCardsObs) {
      var host = document.querySelector('#__next') || document.body;
      window.__pmCardsObs = new MutationObserver(function () { patch(); });
      window.__pmCardsObs.observe(host, { childList: true, subtree: true });
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ativarCardsInformatica);
  else ativarCardsInformatica();
  window.addEventListener('load', function () { setTimeout(ativarCardsInformatica, 400); });
})();
