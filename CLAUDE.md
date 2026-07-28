# Portal ENEM — portmarcos.github.io

## Estrutura do site
- Repo público no GitHub Pages: portmarcos/portmarcos.github.io
- Arquivo principal: enem.html (dentro de <script>, ~2.5MB)
  - `const BANCO = {...}` — objeto com 13 temas, cada um com `questoes: [...]`
  - Cada questão tem: texto, fonte, enun, alts (5 alternativas), correta (índice 0-4), expl
  - `const TEMAS_INFO` — título/emoji de cada tema
- Cards da grade (`<div class="topic-card">`) têm um badge `<span class="tc-count">`
  com o número de questões — PRECISA bater com a contagem real (conte "enun:"
  dentro dos limites de cada tema via grep, nunca assuma)
- Contadores gerais "X questões" / "Y temas" aparecem em 4 lugares — atualizar
  todos sempre que adicionar questões:
  1. enem.html (badges de cada card + texto geral)
  2. index.html (cards de estatística da home)
  3. website/pages/index.jsx
  4. chunk compilado em _next/static/chunks/pages/index-*.js

## Os 13 temas (não criar tema novo sem pedido explícito)
Variação Linguística, Literatura, Literatura II, Funções de Linguagem,
Gêneros Textuais, Argumentação, Verbal e Não Verbal, Figuras de Linguagem,
Interpretação de Texto, Coesão e Coerência, Multiletramentos, Semântica,
Intertextualidade

## Estado confirmado em 27/jul/2026
- 13 temas, 369 questões reais no total (contagem batida via grep, não confiar
  em badge antigo sem checar)
- Badges já estavam corretos nessa data
- Bug já corrigido: index.html tinha um card de estatística travado em "128"
  em vez de "369" (commit `6c68b42`, aplicar/verificar se já foi pro remoto)

## Tema mais fraco: Semântica (9 questões)
Anos já cobertos nesse tema: 2012, 2012 PPL, 2013, 2016, 2017, 2017 PPL, 2020.
Focar em anos NÃO cobertos: 2004, 2006-2011, 2014, 2015, 2018, 2019, 2021-2025.

### Candidatas já verificadas e REJEITADAS (já existem em outro tema — não repetir)
- ENEM 2014 (2º dia, Caderno 7) — charge de Iotti sobre Guernica de Picasso,
  "quadro dramático" → já está em Intertextualidade
- ENEM 2025 — "Palavras intraduzíveis" de Marija Tiurina → já está em Verbal
- ENEM 2016 (2º dia, Caderno 7) — "pirilampo" / tabu linguístico → já está em
  Variação Linguística
- ENEM 2025 — gírias automatizadas ("cringe", "resiliência", "fora da caixinha")
  → já está em Coesão e Coerência

Sessões anteriores (ver commits `c0ceab9` e `6ace5af`) já garimparam bastante
esse mesmo acervo de provas — esperar duplicatas com frequência ao buscar por
palavra-chave; sempre confirmar contra o arquivo INTEIRO antes de adicionar.

## Regras de trabalho (seguir sempre)
1. NUNCA implementar uma questão sem confirmar o gabarito em pelo menos uma
   fonte externa confiável (plataformaassaad.com.br, qconcursos, descomplica,
   ou o PDF oficial do INEP) além de checar se o enunciado bate com o texto real.
   Se não conseguir confirmar com segurança, avisar em vez de arriscar.
2. Antes de adicionar, buscar por um trecho característico do enunciado no
   arquivo enem.html INTEIRO (não só no tema-alvo) para não duplicar.
3. Distribuir questões só nos 13 temas já existentes.
4. Validar sintaxe JS com `node --check` no script extraído antes de commitar.
5. Recalcular e corrigir badges e contadores gerais nos 4 lugares listados acima.
6. Trabalhar em lotes (ex: uma prova inteira, ou um tema inteiro), commits
   descritivos, git push, avisar ao final de cada lote.
7. Só parar e perguntar se encontrar ambiguidade real ou conflito de fontes
   que não consiga resolver sozinho.

## Provas ENEM disponíveis para consulta
2004, 2006 a 2025 (faltam apenas os anos anteriores a 2004 e 2005/2009/2010)
