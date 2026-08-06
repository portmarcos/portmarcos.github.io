# Portal ENEM — portmarcos.github.io

## Google Sheets + identidade do aluno (commit `a2805d8`)
enem.html carrega `/assets/js/config-sheets.js` (define `SHEETS_URL`,
MESMA planilha/Apps Script que as outras atividades do site usam) e
`finalizarQuiz()` faz POST no-cors pra lá a cada simulado terminado
(função `enviarResultadoSheets`). Campos: atividade, nome, turma,
acertos, total, pct, abertas (lista de enunciados errados).

O app não tinha captura de nome de aluno (todo mundo "Estudante"
genérico) — agora tem `editarIdentidade()` (ícone de lápis no
dashboard + prompt automático na primeira visita). NUNCA testar o
envio ao Sheets sem mockar `window.fetch` antes — o endpoint é real e
grava na planilha de verdade do professor.

## Meu Desempenho v2 (commit `be652fc`)
Selos dos ícones agora usam gradiente radial + sombra (efeito glossy),
classes `.prog-icon-badge`/`.prog-mini-badge` com sufixo
`.alta/.media/.baixa/.vazio` — não usar `style="background:..."` inline
pra essas, sempre a classe (havia uma definição CSS duplicada antiga
que sobrescrevia a nova; cuidado ao editar essa área de novo).
Gráfico de barras (flex) trocado por grid de cards (`.prog-grid-temas`) —
mais robusto pra centralização, não usar flex-chart de novo pra isso.
Ícones sempre em selo circular (`.prog-icon-badge`/`.prog-mini-badge`),
nunca emoji solto. Tem um guia estático de erros de interpretação
(`guiaErrosHTML()`) e uma seção "Questões para revisar" por tema.

IMPORTANTE: `finalizarQuiz()` agora salva `enun/alts/expl` de cada questão
dentro de `respostas` (não só a posição/índice) — antes disso, reabrir uma
tentativa antiga podia casar a resposta com a questão errada, já que
`BANCO[tema].questoes` é reembaralhado a cada `iniciarQuiz()`. Qualquer
função nova que precise reconstruir "qual questão foi essa resposta" deve
usar esses campos salvos, nunca `BANCO[tema].questoes[i]` com o índice de
uma tentativa antiga.

Bug conhecido, não corrigido (tarefa separada aberta): `irMatriz()` /
`filtrarRep()` quebram porque `#repLista` não existe mais no HTML.

## Gerador de provas (commit `42fbb22`)
Tela `sc-gerador` (escolher tema + quantidade) → `sc-prova` (folha pronta
pra imprimir, com gabarito opcional). Usa `BANCO[tema].questoes` direto,
sem mutar a ordem original (embaralha cópia via `.slice()`). CSS de
impressão é escopado só pra `#sc-prova` — a regra `@media print` antiga do
site tornava TODAS as `.screen` visíveis ao imprimir; isso foi corrigido
no processo (rule mais específica/posterior no CSS vence). Usa `:has()`
pra esconder a navegação do site enquanto a prova está em tela, não só
na impressão.

## Sistema de ícones (commit `fcea41c`)
Emoji soltos foram substituídos por 13 ícones SVG de linha (um por tema),
num objeto único `TEMA_ICONS` + função `temaIconSVG(key)` (definidos logo
depois de `TEMAS_INFO`, perto da linha 5960). Usado em TODO lugar que antes
tinha emoji: cards do dashboard (`.tc-ico`, injetado via JS a partir de
`data-tema="..."` no card — os 13 `<div class="topic-card">` precisam manter
esse atributo), cabeçalho do quiz, cards do gerador de provas (`.tema-icon`,
ícone inline colorido via `style="color:${info.cor}"`), e Meu Desempenho.

Em Meu Desempenho os selos glossy antigos (`.prog-icon-badge`/`.prog-mini-badge`,
gradiente+brilho) FORAM REMOVIDOS e viraram `.tema-icon-ring` (+ modificador
`.mini`): fundo translúcido escuro, borda e ícone na cor do desempenho
(`.alta`=verde ≥75%, `.media`=amarelo 60-74%, `.baixa`=vermelho <60%,
`.vazio`=cinza). Não recriar os `.prog-icon-badge`/`.prog-mini-badge` antigos —
foram completamente substituídos, nenhum código deveria mais referenciá-los.
Se precisar adicionar um novo lugar que mostra ícone de tema, usar
`temaIconSVG(key)` + classe `.tema-icon` (inline) ou `.tema-icon-ring` (selo
circular do Desempenho) — nunca emoji cru ou `BANCO[tema].emoji` pra exibição
visual (esse campo `emoji` continua existindo no BANCO mas não é mais usado
na UI, só como fallback interno de algumas funções antigas).

## Auditoria de fabricação — CONCLUÍDA em 29/jul/2026
Depois da Figuras de Linguagem (28/jul), os outros 12 temas foram auditados
tema por tema contra fontes externas (INEP, plataformaassaad, descomplica,
qconcursos, xequematenem) via agentes em paralelo. Achados e já corrigidos:
- **Literatura II**: questão duplicada de Cruz e Sousa ("Vida obscura") — uma
  cópia tinha o poema completo mas fonte errada ("Questão 4", devia ser
  "Questão 124"), a outra tinha fonte certa mas o `texto` virou paráfrase em
  vez do poema. Mantida só a cópia com o poema real, fonte corrigida, cópia
  degradada removida.
- **Literatura II**: removida 1 questão que era real mas de **Ciências
  Humanas/História** (Barroco/Contrarreforma, ENEM PPL 2021 Q66) — não é de
  Linguagens, não deveria estar num banco de Português mesmo estando correta.
- **Argumentação**: gabarito errado (Rita Lee, ENEM 2024) — era D, correto C.
- **Coesão**: gabarito errado (ratos/vocalização, ENEM 2016 Q101) — era D
  ("consequência"), correto C ("condição").
- **Gêneros Textuais**: gabarito errado (Luís Bueno/Vidas Secas, ENEM 2007
  Q4) — era A, correto D.
- **Intertextualidade**: 2 rótulos de fonte imprecisos (diziam "2ª aplicação",
  eram PPL 2016 Q128 e PPL 2018 Q06).
- **Multiletramentos**: 1 número de questão errado na fonte (era "Questão
  109", correto "Questão 107").
- **Argumentação**: removida questão duplicada e incompleta (Antônio Prata x
  Graciliano Ramos, ENEM 2024 Q30) — faltava o Texto I (carta de Graciliano a
  Portinari), citado no enunciado e na explicação mas ausente do texto-base.
  Mantida a cópia completa (com os dois textos) já existente em Literatura.
- Todos os outros temas (Verbal, Variação, Semântica, Literatura, Interpretação)
  passaram limpos — nenhuma fabricação nova encontrada. A suspeita inicial de
  fabricação em Interpretação de Texto (ENEM 2022 Q39, Eco/Carrière) foi
  FALSO ALARME — confirmado depois como questão 100% real.

A pedido do professor, foi removida também a questão sobre a campanha da
Defensoria Pública contra violência doméstica na pandemia (Funções de
Linguagem, ENEM 2023) — questão real e correta, mas removida por decisão
editorial, não por problema de conteúdo.

**Contagem final: 372 questões reais** (não confiar em contagem por grep de
"enun:" no arquivo inteiro — sempre inclui 1 falso positivo de um
`enun: qi.enun,` em código JS não relacionado a `BANCO`; contar só dentro do
range de linhas de `const BANCO = {...}` ou usar `BANCO[tema].questoes.length`
via console, ou somar `BANCO[t].questoes.length` dos 13 temas).

**Pendência aberta**: em Funções de Linguagem (ENEM 2023 Q44, campanha do
Ministério da Saúde sobre amamentação), o campo `texto` continua mostrando por
engano o conteúdo da questão de violência doméstica que existia no mesmo tema
(removida a pedido do professor, mas o texto duplicado permaneceu colado nesta
questão, já que era uma cópia literal, não uma referência). Enunciado/
alternativas/gabarito da questão de amamentação já foram confirmados corretos
— só falta a imagem/texto real do cartaz da campanha de amamentação, que não
foi possível extrair via WebFetch (sites de gabarito renderizam a imagem via
JS). Pedir a imagem ao usuário (ver fluxo abaixo) antes de fechar.

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
