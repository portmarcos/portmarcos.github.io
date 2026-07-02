/* ============================================================
   Service Worker — Portal de Aulas (Prof. Marcos)
   Faz o portal abrir e funcionar mesmo sem internet depois da
   primeira visita. Estratégia:
     • Navegação/HTML  → rede primeiro, cai no cache se offline
     • CSS/JS/imagens   → cache primeiro (rápido), atualiza por trás
   Para forçar atualização de tudo, troque o número da versão.
   ============================================================ */
const VERSAO = "portal-v16";
const ESSENCIAIS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./assets/css/design-system.css",
  "./assets/js/quiz-engine.js",
  "./assets/js/flashcards-engine.js",
  "./assets/js/config-sheets.js"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(VERSAO).then((c) => c.addAll(ESSENCIAIS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((nomes) => Promise.all(nomes.filter((n) => n !== VERSAO).map((n) => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  // Só cuidamos do nosso próprio domínio (fontes/CDN passam direto).
  if (url.origin !== self.location.origin) return;

  const ehNavegacao = req.mode === "navigate" || req.destination === "document";

  if (ehNavegacao) {
    // Rede primeiro: conteúdo sempre fresco; offline → cache.
    e.respondWith(
      fetch(req)
        .then((res) => {
          const copia = res.clone();
          caches.open(VERSAO).then((c) => c.put(req, copia));
          return res;
        })
        .catch(() => caches.match(req).then((r) => r || caches.match("./index.html")))
    );
    return;
  }

  // Demais arquivos: cache primeiro, atualizando em segundo plano.
  e.respondWith(
    caches.match(req).then((cacheado) => {
      const rede = fetch(req)
        .then((res) => {
          if (res && res.status === 200) {
            const copia = res.clone();
            caches.open(VERSAO).then((c) => c.put(req, copia));
          }
          return res;
        })
        .catch(() => cacheado);
      return cacheado || rede;
    })
  );
});
