/* Portal Marcos Cruz — service worker DESATIVADO (kill-switch).
   Substitui o antigo worker que estava travando as atualizações do site.
   Ele apaga todos os caches antigos, se remove do navegador e não intercepta
   mais nenhuma requisição — o site passa a carregar sempre direto da rede. */
self.addEventListener('install', function () {
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil((async function () {
    try {
      var keys = await caches.keys();
      await Promise.all(keys.map(function (k) { return caches.delete(k); }));
    } catch (e) {}
    try { await self.registration.unregister(); } catch (e) {}
    try {
      var cs = await self.clients.matchAll({ type: 'window' });
      cs.forEach(function (c) { c.postMessage({ type: 'pm-sw-removed' }); });
    } catch (e) {}
  })());
});
/* Propositalmente SEM handler de 'fetch': nada é servido do cache. */
