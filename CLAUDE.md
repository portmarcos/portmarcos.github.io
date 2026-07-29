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

## Estado confirmado em 28/jul/2026
- 13 temas, 376 questões reais no total (contagem batida via grep, não confiar
  em badge antigo sem checar)
- Badges e os 4 contadores gerais corretos nessa data (commit `8c32376`)
- Bug antigo do card "128" em index.html (que uma nota anterior dizia já
  corrigido) na verdade nunca tinha ido pro remoto — corrigido de vez no
  commit `f8027ff`. Lição: não confiar em nota de sessão anterior dizendo
  "já corrigido" sem checar o arquivo atual.
- Quiz agora divide temas com mais de ~20 questões em blocos de ~15-18
  (função `getBlocos()` em enem.html) — é só paginação da apresentação,
  continua sendo 1 tentativa/nota por tema (commit `719b4d4`).
- Auditoria da Figuras de Linguagem (28/jul/2026) achou uma questão com
  enunciado/gabarito FABRICADOS (não correspondia a nenhuma questão real
  do ENEM 2018, confirmado contra o PDF oficial do INEP) — removida
  (commit `f8027ff`). Os outros 12 temas (345 questões) ainda NÃO foram
  reauditados dessa forma; o padrão pode não ser um caso isolado.
- Achado maior no mesmo dia: muitas questões (principalmente as que citam
  charge/cartaz/tirinha/propaganda) tinham o campo `texto` como uma
  DESCRIÇÃO em terceira pessoa da imagem, em vez do conteúdo real. Todas as
  ~29 identificadas foram corrigidas (commits `ebb3039`, `638009d`,
  `ef78327` — imagens reais embutidas como arquivo estático em
  `assets/img/questoes/`, referenciadas via `<img src='/assets/img/questoes/nome.ext'>`
  — NÃO usar base64 inline, é o padrão antigo que inflou o arquivo).
  Essa varredura cobriu principalmente Verbal e Não Verbal, Argumentação,
  Semântica, Intertextualidade, Gêneros Textuais, Coesão, Figuras e (parcial)
  Multiletramentos — ainda NÃO foi feita em Literatura e Literatura II.
- Bug do "undefined" em Meu Desempenho (commit `65ba4ef`): `TEMAS_INFO` só
  tem `titulo/num/cor`, NÃO tem `emoji` — quem tem emoji é `BANCO[tema].emoji`.
  Qualquer código novo que precisar do emoji de um tema tem que buscar em
  `BANCO[tema].emoji`, nunca em `TEMAS_INFO[tema].emoji` (isso sempre foi
  undefined, incluindo em código antigo que já existia antes desta sessão).
  De quebra, preenchidos os emoji que estavam vazios em BANCO: intertextualidade
  🔗, coesao 🧵, funcoes 💬, argumentacao ⚖️.
- Fluxo pra pedir imagem ao usuário: ele consegue ver/colar imagem no chat
  mas Claude Code NÃO consegue extrair bytes de imagem colada — só de
  arquivo em disco. Pedir pra ele salvar em `assets/img/questoes/` com um
  nome identificável (ou "questao<N>.enem<ANO>.ext") e avisar.
- Quiz não trava mais ao refazer um tema (commit `c65b2c8`): AUTH.saveResult
  guarda histórico de tentativas e só atualiza o resultado "oficial" mostrado
  se a nova tentativa empatar ou superar o percentual anterior — nunca perde
  o melhor resultado já feito.
- Análise de resultado (commit `7fb8894`) não tem mais senha, filtra
  Todas/Erros/Acertos/Sem resposta e abre os erros automaticamente.

## Tema mais fraco: Semântica (17 questões)
Anos já cobertos nesse tema: 2011, 2012, 2012 PPL, 2013, 2014 (3ª aplicação),
2016, 2017, 2017 PPL, 2018, 2019, 2020, 2024 PPL, 2025.
Ainda sem candidata confiável (busca extensa já feita, inclusive nos PDFs
oficiais do INEP): 2004, 2006, 2007, 2008, 2009, 2010, 2015, 2021, 2022, 2023.
Não repetir essa busca do zero sem motivo — já foi extensa e não achou nada
confiável nesses anos.

### Candidatas já verificadas e REJEITADAS (já existem em outro tema — não repetir)
- ENEM 2014 (2º dia, Caderno 7) — charge de Iotti sobre Guernica de Picasso,
  "quadro dramático" → já está em Intertextualidade
- ENEM 2025 — "Palavras intraduzíveis" de Marija Tiurina → já está em Verbal
- ENEM 2016 (2º dia, Caderno 7) — "pirilampo" / tabu linguístico → já está em
  Variação Linguística
- ENEM 2025 — gírias automatizadas ("cringe", "resiliência", "fora da caixinha")
  → já está em Coesão e Coerência
- ENEM 2021 (caderno azul, dia 1, Q12) — campanha "PET" (garrafa/cachorro)
  → já está em Verbal e Não Verbal
- ENEM 2025 (caderno azul, dia 1, Q34) — "VOCÊ (NÃO) ESTÁ SOZINHO"
  → já está em Funções de Linguagem
- ENEM 2018 Q42 — "Casa de Vidro" → já está em Literatura/Movimentos
- ENEM 2009 Q124 — oxímoro (é figura de linguagem, não polissemia)
- Suposta questão sobre a palavra "animal" numa carta de José Fuzeira a
  Getúlio Vargas (ENEM 2010) — NÃO existe no PDF oficial do INEP nesse
  formato; provável erro de mistura de trechos por ferramenta de busca,
  não usar sem confirmar em fonte primária de novo

Sessões anteriores (ver commits `c0ceab9`, `6ace5af` e `8c32376`) já
garimparam bastante esse mesmo acervo de provas — esperar duplicatas com
frequência ao buscar por palavra-chave; sempre confirmar contra o arquivo
INTEIRO antes de adicionar.

## Regras de trabalho (seguir sempre)
1. NUNCA implementar uma questão sem confirmar o gabarito em pelo menos uma
   fonte externa confiável (plataformaassaad.com.br, qconcursos, descomplica,
   ou o PDF oficial do INEP) além de checar se o enunciado bate com o texto real.
   Se não conseguir confirmar com segurança, avisar em vez de arriscar.
2. Antes de adicionar, buscar por um trecho característico do enunciado no
   arquivo enem.html INTEIRO (não só no tema-alvo) para não duplicar.
3. Distribuir questões só nos 13 temas já existentes.
4. Validar mudanças testando ao vivo no navegador antes de commitar (node/python
   não estão disponíveis neste ambiente Windows — sem `node --check`). Servir a
   pasta localmente com um servidor estático simples (ex: HttpListener via
   PowerShell) e usar o Browser tool pra rodar um quiz de verdade e checar o
   console. Pedir confirmação ao usuário antes de rodar `git push` se ele travar
   esperando login interativo do Git Credential Manager (aconteceu antes).
5. Recalcular e corrigir badges e contadores gerais nos 4 lugares listados acima.
6. Trabalhar em lotes (ex: uma prova inteira, ou um tema inteiro), commits
   descritivos, git push, avisar ao final de cada lote.
7. Só parar e perguntar se encontrar ambiguidade real ou conflito de fontes
   que não consiga resolver sozinho.

## Provas ENEM disponíveis para consulta
2004, 2006 a 2025 (faltam apenas os anos anteriores a 2004 e 2005/2009/2010)
