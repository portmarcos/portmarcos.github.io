/* ============================================================
   APP.JS — Prof. Marcos Cruz v2
   Inicialização, scroll indicator, navbar, reveal
   ============================================================ */

'use strict';

// ── Utilitários ────────────────────────────────────────────

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

// ── Navbar: fundo ao rolar ─────────────────────────────────

function initNavbar() {
  const navbar = $('.navbar');
  if (!navbar) return;

  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ── Scroll indicator (barra de progresso topo) ─────────────

function initScrollIndicator() {
  const bar = document.createElement('div');
  bar.className = 'scroll-indicator';
  document.body.prepend(bar);

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const total    = document.documentElement.scrollHeight - window.innerHeight;
    const pct      = total > 0 ? (scrolled / total) * 100 : 0;
    bar.style.width = pct + '%';
  }, { passive: true });
}

// ── Active nav link por seção ──────────────────────────────

function initActiveLinks() {
  const navLinks  = $$('.navbar__link[href^="#"]');
  const mobileLinks = $$('.mobile-nav__link[href^="#"]');
  const allLinks  = [...navLinks, ...mobileLinks];

  if (!allLinks.length) return;

  const sections = allLinks
    .map(a => $(a.getAttribute('href')))
    .filter(Boolean);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = '#' + entry.target.id;
        allLinks.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === id);
        });
      }
    });
  }, { rootMargin: `-${getComputedStyle(document.documentElement).getPropertyValue('--navbar-h')} 0px -50% 0px` });

  sections.forEach(s => observer.observe(s));
}

// ── Scroll reveal (IntersectionObserver) ──────────────────

function initReveal() {
  const items = $$('[data-reveal]');
  if (!items.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  items.forEach(el => observer.observe(el));
}

// ── Mobile nav (hamburger) ─────────────────────────────────

function initMobileNav() {
  const btn     = $('.navbar__hamburger');
  const nav     = $('.mobile-nav');
  const bg      = $('.mobile-nav__bg');
  const links   = $$('.mobile-nav__link');

  if (!btn || !nav) return;

  const open  = () => { nav.classList.add('open');  btn.setAttribute('aria-expanded', 'true');  document.body.style.overflow = 'hidden'; };
  const close = () => { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); document.body.style.overflow = ''; };
  const toggle = () => nav.classList.contains('open') ? close() : open();

  btn.addEventListener('click', toggle);
  bg?.addEventListener('click', close);
  links.forEach(l => l.addEventListener('click', close));

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && nav.classList.contains('open')) close();
  });
}

// ── Counters animados nas stats ────────────────────────────

function initCounters() {
  const nums = $$('[data-count]');
  if (!nums.length) return;

  const countUp = (el) => {
    const target   = parseFloat(el.dataset.count);
    const duration = 1400;
    const suffix   = el.dataset.suffix || '';
    const prefix   = el.dataset.prefix || '';
    const decimals = el.dataset.decimals ? parseInt(el.dataset.decimals) : 0;
    const start    = performance.now();

    const step = (now) => {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out-expo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const value = eased * target;
      el.textContent = prefix + value.toFixed(decimals) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        countUp(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.6 });

  nums.forEach(el => observer.observe(el));
}

// ── Toast simples ──────────────────────────────────────────

export function showToast(message, type = 'success', duration = 4000) {
  let container = $('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const icons = { success: '✓', error: '✕', info: 'ℹ' };

  const toast = document.createElement('div');
  toast.className = `toast toast--${type}`;
  toast.innerHTML = `<span>${icons[type] || ''}</span><span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(20px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// ── Init ───────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScrollIndicator();
  initActiveLinks();
  initReveal();
  initMobileNav();
  initCounters();

  console.log('%c Prof. Marcos Cruz — v2 🚀', 'font-size:14px;color:#6C63FF;font-weight:bold;');
});
