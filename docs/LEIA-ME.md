# Portal de Aulas — Guia rápido

## Estrutura de pastas

```
aulas/                          ← raiz do repositório (GitHub Pages)
├── index.html                  ← portal com busca e filtros
├── manifest.json               ← deixa o site "instalável" no celular
├── favicon.ico                 ← (use o seu favicon já existente)
├── assets/
│   ├── css/design-system.css   ← TODO o visual do site em um arquivo
│   ├── js/quiz-engine.js       ← motor do quiz (não precisa editar)
│   ├── js/flashcards-engine.js ← motor dos flashcards (não precisa editar)
│   └── img/                    ← capa do WhatsApp + ícones do app
├── atividades/                 ← uma página HTML por atividade
│   ├── quiz-premodernismo.html
│   └── flashcards-linux.html
└── dados/                      ← o CONTEÚDO de cada atividade
    ├── quiz-premodernismo.js
    └── flashcards-linux.js
```

## Como testar no seu computador

Basta dar **dois cliques no `index.html`**. Tudo funciona localmente —
os dados ficam em arquivos `.js` justamente para abrir sem servidor.

## Como criar um QUIZ novo (3 passos)

1. Copie `dados/quiz-premodernismo.js` → renomeie (ex.: `quiz-crase.js`)
   e edite o `id`, o `titulo` e as questões.
2. Copie `atividades/quiz-premodernismo.html` → renomeie (ex.: `quiz-crase.html`)
   e ajuste: o `<title>`, as meta tags do WhatsApp, a classe do `<body>`
   (`materia-portugues`, `materia-informatica` ou `materia-artes`)
   e a linha `<script src="../dados/quiz-crase.js">`.
3. Adicione um bloco no array `ATIVIDADES` do `index.html`.

Flashcards novos: mesmo processo com os arquivos de flashcards.

## A cor da matéria

A classe no `<body>` controla tudo:

| Classe                | Matéria      | Cor       |
|-----------------------|--------------|-----------|
| `materia-portugues`   | Português    | `#2E7D32` |
| `materia-informatica` | Informática  | `#1565C0` |
| `materia-artes`       | Artes        | `#E65100` |

## Tarefas pendentes para você

- [ ] Trocar os `url: "#"` no `index.html` pelos caminhos reais dos seus
      escape rooms, bingo e demais atividades já publicadas.
- [ ] Copiar seu `favicon.ico` existente para a raiz (os links já apontam para ele).
- [ ] Conferir se o endereço nas meta tags `og:image` bate com o seu repositório
      (está como `https://portmarcos.github.io/aulas/...`).

## Publicar

Envie todos os arquivos para o repositório do GitHub Pages mantendo
esta estrutura de pastas. Em 1–2 minutos o site atualiza.

## Recorde dos alunos

Cada quiz guarda o recorde no navegador do aluno (`localStorage`).
Não vai para nenhum servidor — é individual por aparelho.
