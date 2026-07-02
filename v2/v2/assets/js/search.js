/* ============================================================
   SEARCH.JS — Prof. Marcos Cruz v2
   Command palette ⌘K / Ctrl+K
   ============================================================ */

'use strict';

// ── Catálogo de materiais (edite aqui para adicionar) ──────

const CATALOG = [
  // ── Informática ──
  {
    id: 'redes',
    title: 'Quiz — Redes de Computadores',
    meta: 'Informática · Quiz interativo',
    icon: '🌐',
    tag: 'HTML',
    tagClass: 'badge--html',
    href: '#',        // ← substitua pelo caminho real
    keywords: ['redes', 'computadores', 'quiz', 'informática', 'tcp', 'ip']
  },
  {
    id: 'abnt',
    title: 'Quiz — Normas ABNT',
    meta: 'Informática · Quiz interativo',
    icon: '📄',
    tag: 'HTML',
    tagClass: 'badge--html',
    href: '#',
    keywords: ['abnt', 'normas', 'formatação', 'quiz', 'informática']
  },
  {
    id: 'fato-opiniao',
    title: 'Quiz — Fato ou Opinião?',
    meta: 'Informática · Raciocínio crítico',
    icon: '🤔',
    tag: 'HTML',
    tagClass: 'badge--html',
    href: '#',
    keywords: ['fato', 'opinião', 'quiz', 'raciocínio', 'lógica']
  },
  {
    id: 'html5-ref',
    title: 'Página Didática HTML5',
    meta: 'Informática · Referência de elementos',
    icon: '🏷️',
    tag: 'HTML',
    tagClass: 'badge--html',
    href: '#',
    keywords: ['html', 'html5', 'elementos', 'referência', 'didática']
  },
  // ── Matemática ──
  {
    id: 'mat-fin',
    title: 'Matemática Financeira',
    meta: 'Matemática · EJA / Ensino Médio',
    icon: '💰',
    tag: 'Matemática',
    tagClass: 'badge--math',
    href: '#',
    keywords: ['matemática', 'financeira', 'juros', 'porcentagem', 'eja']
  },
  {
    id: 'geometria',
    title: 'Geometria Plana',
    meta: 'Matemática · Formas e áreas',
    icon: '📐',
    tag: 'Matemática',
    tagClass: 'badge--math',
    href: '#',
    keywords: ['geometria', 'plana', 'área', 'perímetro', 'formas']
  },
  // ── Festas e Cultura ──
  {
    id: 'festa-junina',
    title: 'Atividade — Festa Junina',
    meta: 'Arte · Cultura brasileira · Pintura',
    icon: '🎪',
    tag: 'Arte',
    tagClass: 'badge--slides',
    href: '#',
    keywords: ['festa', 'junina', 'arte', 'cultura', 'pintura', 'quadrilha']
  },
  {
    id: 'copa',
    title: 'Atividade — Copa do Mundo',
    meta: 'Arte · Técnicas de pintura',
    icon: '⚽',
    tag: 'Arte',
    tagClass: 'badge--slides',
    href: '#',
    keywords: ['copa', 'mundo', 'futebol', 'arte', 'pintura']
  },
];

// ── Render de resultado ────────────────────────────────────

function renderItem(item, focused = false) {
  return `
    <a class="search-item${focused ? ' focused' : ''}" href="${item.href}" data-id="${item.id}">
      <div class="search-item__icon">${item.icon}</div>
      <div>
        <div class="search-item__title">${highlight(item.title)}</div>
        <div class="search-item__meta">${item.meta}</div>
      </div>
      <span class="search-item__tag material-card__badge ${item.tagClass}">${item.tag}</span>
    </a>
  `;
}

let _query = '';
function highlight(text) {
  if (!_query) return text;
  const re = new RegExp(`(${_query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(re, '<mark style="background:rgba(108,99,255,0.3);color:inherit;border-radius:2px">$1</mark>');
}

// ── Filtragem ──────────────────────────────────────────────

function filter(query) {
  if (!query.trim()) return CATALOG;
  const q = query.toLowerCase();
  return CATALOG.filter(item =>
    item.title.toLowerCase().includes(q) ||
    item.meta.toLowerCase().includes(q)  ||
    item.keywords.some(k => k.includes(q))
  );
}

// ── Inicialização ──────────────────────────────────────────

export function initSearch() {
  const overlay   = document.querySelector('.search-overlay');
  const modal     = document.querySelector('.search-modal');
  const input     = document.querySelector('.search-input');
  const results   = document.querySelector('.search-results');
  const triggers  = document.querySelectorAll('[data-search-open]');

  if (!overlay || !input || !results) return;

  let focusedIdx = -1;
  let currentResults = [];

  // ── Abrir / fechar ──
  const open = () => {
    overlay.classList.add('open');
    input.value = '';
    _query = '';
    renderResults('');
    setTimeout(() => input.focus(), 50);
    document.body.style.overflow = 'hidden';
  };

  const close = () => {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    focusedIdx = -1;
  };

  triggers.forEach(t => t.addEventListener('click', open));
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });

  // ── Atalho de teclado Ctrl+K / ⌘K ──
  document.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      overlay.classList.contains('open') ? close() : open();
    }
    if (e.key === 'Escape' && overlay.classList.contains('open')) close();
  });

  // ── Navegação por setas ──
  document.addEventListener('keydown', e => {
    if (!overlay.classList.contains('open')) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      focusedIdx = Math.min(focusedIdx + 1, currentResults.length - 1);
      updateFocus();
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      focusedIdx = Math.max(focusedIdx - 1, -1);
      updateFocus();
    }

    if (e.key === 'Enter' && focusedIdx >= 0) {
      const item = currentResults[focusedIdx];
      if (item) {
        window.location.href = item.href;
        close();
      }
    }
  });

  function updateFocus() {
    document.querySelectorAll('.search-item').forEach((el, i) => {
      el.classList.toggle('focused', i === focusedIdx);
    });
  }

  // ── Input / busca ──
  input.addEventListener('input', () => {
    _query = input.value;
    focusedIdx = -1;
    renderResults(input.value);
  });

  function renderResults(query) {
    currentResults = filter(query);

    if (!currentResults.length) {
      results.innerHTML = `
        <div style="padding:2.5rem;text-align:center;color:var(--color-text-faint);font-size:var(--text-sm)">
          Nenhum material encontrado para "<strong style="color:var(--color-text-muted)">${query}</strong>"
        </div>`;
      return;
    }

    const groups = {};
    currentResults.forEach(item => {
      const cat = item.meta.split('·')[0].trim();
      if (!groups[cat]) groups[cat] = [];
      groups[cat].push(item);
    });

    results.innerHTML = Object.entries(groups).map(([label, items]) => `
      <div class="search-group-label">${label}</div>
      ${items.map(item => renderItem(item)).join('')}
    `).join('');
  }
}

document.addEventListener('DOMContentLoaded', initSearch);
