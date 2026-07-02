import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <meta name="description" content="Portal do Professor Marcos Cruz — Português, ENEM, Informática, Artes, Jogos Educativos e Obras Literárias. Atividades interativas e questões reais." />
        <meta property="og:title" content="Portal do Professor Marcos Cruz" />
        <meta property="og:description" content="Quizzes, escape rooms, simulados com questões reais do ENEM e muito mais." />
        <meta property="og:image" content="https://portmarcos.github.io/assets/img/og-capa.png" />
        <meta property="og:url" content="https://portmarcos.github.io/" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://portmarcos.github.io/" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#020617" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script dangerouslySetInnerHTML={{ __html: `
          if ("serviceWorker" in navigator) {
            window.addEventListener("load", () => {
              navigator.serviceWorker.register("/sw.js").catch(() => {});
            });
          }
        ` }} />
      </body>
    </Html>
  );
}
