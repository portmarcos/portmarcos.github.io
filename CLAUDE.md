# Portal ENEM — portmarcos.github.io

## Guia de Gramática (16/ago/2026)
`portugues/gramatica.html` — 20 tópicos em 5 níveis (Fundamentos, Morfologia,
Sintaxe, Norma-padrão em ação, Semântica & estilo), cada um com explicação em
seções, exemplos comentados, quiz, jogo e progresso salvo em `localStorage`.
Estrutura de dados: `const TOPICOS = [...]` numa única linha minificada de
JSON (gerada por `json.dumps(..., ensure_ascii=False)`), seguida de
`const NIVEIS = [...]`. Cada tópico tem `secoes` (título + parágrafos e/ou
lista, opcionalmente uma `tabela`), `exemplos`, `quiz` (4 alternativas, não 5
como no banco ENEM), `jogo` (classifique/julgue/complete), `mnem`, `sabia` e,
desde essa sessão, `mapa` (mapa mental).

**Nunca editar essa linha `const TOPICOS = [...]` manualmente no editor** —
ela é grande demais e qualquer aspas/vírgula fora do lugar quebra a página
inteira sem erro visível no HTML. Para alterar dado de tópico (novo mapa,
tabela, questão), sempre passar por um script Python: ler o arquivo com
`encoding="utf-8", newline=""` (o arquivo é CRLF; abrir sem `newline=""`
faz o Python normalizar pra LF e gera um diff gigante trocando toda quebra
de linha), extrair o bloco com regex `r"const TOPICOS = (\[.*?\]);\r?\n"`,
`json.loads`, editar o dict Python, `json.dumps(data, ensure_ascii=False)` e
reescrever só esse trecho — nunca reescrever o arquivo inteiro à mão. Depois
de qualquer merge, validar com `json.loads` de novo antes de considerar
pronto (um JSON inválido quebra a página inteira, ela "trava" — não dá erro
parcial, o script inteiro para de rodar).

**Aba "Mapa mental" nova** (6ª aba, depois de Jogo): renderizada por
`renderMapa(t)` em HTML/CSS puro (`.mapa-central` + `.mapa-grid` de
`.mapa-ramo`), não em SVG com coordenadas calculadas — decisão deliberada
pra evitar overlap de texto em 20 conteúdos de tamanho variável (SVG com
texto posicionado à mão não escala bem pra conteúdo dinâmico; grid CSS
`auto-fit` sempre encaixa, em qualquer largura de tela, sem cálculo).
Campo `mapa: {centro, ramos:[{t, itens:[...]}]}` obrigatório em todo
tópico — o código tem fallback (`renderMapa` retorna aviso em vez de
quebrar) mas a ausência nunca deveria acontecer nos 20 tópicos atuais.

**Tabelas-resumo** (`s.tabela` dentro de uma entrada de `secoes`, campo
`{cab:[...], linhas:[[...]], legenda?}`) renderizadas como
`<table class="tabela-gram">` dentro de `.tabela-wrap` (scroll horizontal
próprio via `overflow-x:auto`, nunca deixa a página inteira rolar de lado
no celular). Adicionadas em 15 dos 20 tópicos onde um paradigma/lista
tabular ajuda mais que prosa (pronomes pessoais, conjugação regular,
regência verbal, crase, colocação pronominal, figuras de linguagem etc.) —
`fonologia`, `nomes`, `complementos`, `oracao` e `funcoes` ficaram sem
tabela por não terem um paradigma tabular natural.

Quiz expandido de 3 para 7 questões por tópico (pontuação já tinha 8 e não
foi mexida) — 76 questões novas escritas por 5 agentes em paralelo (um por
nível), cada um seguindo o padrão de qualidade já estabelecido no quiz de
`fonologia` (4 alternativas, todo distrator com erro de raciocínio real
explicado em `expl`, não pegadinha gratuita). Diferente do banco ENEM, essas
são questões pedagógicas originais (não extraídas de prova real), então não
se aplica a regra de "confirmar gabarito em fonte externa" — a rigor aqui é
gramatical (norma culta / NGB), verificado por leitura própria antes do
merge. Os agentes devolveram os campos `enun`/`expl` com `<b>`/`<i>` como
entidades HTML escapadas (`&lt;b&gt;`) em vez de tags literais — o script de
merge usa `html.unescape()` recursivo em todo string antes de injetar no
JSON, senão as tags apareciam como texto cru na tela em vez de renderizar.

**"Imagens"**: não há fotos/assets externos nessa página — o pedido de
"exemplos com imagens" foi atendido com diagramas HTML/CSS (mapa mental,
tabelas), não arquivos de imagem, por ser mais robusto (nunca quebra link,
sempre no tema claro/escuro) e mais útil pra gramática do que foto
decorativa. Se um pedido futuro for por ilustração de fato (ex.: charge,
foto de placa com erro de português), aplicar o mesmo fluxo do banco ENEM:
pedir o arquivo ao usuário, salvar em `assets/img/questoes/`, nunca base64
inline.

### Sessão de 17/ago/2026: prova, teoria completa, questões reais
Pedido do professor: "mais completo", questões reais de vestibular/ENEM
(não só pedagógicas), textos reais nas explicações, e uma função de
criar prova — tudo isso sem "travar" (esclarecido que era o **app**
Claude Code travando em sessão anterior, não a página — daí o cuidado
de trabalhar em lotes pequenos, commitando e dando push a cada lote
concluído, em vez de uma única operação gigante no fim).

**Gerador de provas** (`#prova-over` config + `#prova-view` folha):
reaproveita quase 1:1 o padrão já usado no Gerador de Provas do
`enem.html` (`ger-tema-card`, `prova-folha`, truque
`body:has(#prova-view.on) > *:not(#prova-view){display:none!important}`
pra isolar a folha na impressão), só adaptado pro tema escuro do site
e pra estrutura de `TOPICOS` (em vez de `BANCO`). A folha impressa
sempre usa papel branco (`#fff`) independente do tema do site — herdado
de propósito do enem.html, não é bug.

**Teoria "completíssima"**: 3 seções novas por tópico (60 seções no
total, 92→162), escritas por 5 agentes em paralelo por nível, cada um
com instrução explícita de ler `secoes`/`tabela`/`mapa`/`quiz`
existentes antes de escrever, pra não repetir conteúdo. Se um tópico já
termina com uma seção `tabela` (quadro-resumo), o merge insere as
seções novas ANTES dela, não depois — a tabela continua sendo o
fechamento do tópico. Script de merge: `merge_theory.py` no scratchpad
da sessão (não ficou no repo, só o resultado).

**Questões reais de vestibular/ENEM** (campo novo `fonte`, e `texto`
quando há texto-base — mesmo padrão dos campos que o Gerador de Provas
já esperava, então não precisou mexer no `renderProva`; só precisou
adicionar renderização de `q.fonte`/`q.texto` no quiz do próprio tópico
e no simulado-relâmpago, que antes só mostravam `enun`/`alts`/`expl`).
36 questões novas, 5 agentes em paralelo por nível com acesso a
WebSearch/WebFetch, cada um instruído a **devolver zero questões pra um
tópico em vez de arriscar gabarito não confirmado em pelo menos 2 fontes
independentes** — path já testado no `interpretacao-concursos.html` e
reaplicado aqui. Na primeira tentativa os 5 agentes de pesquisa
falharam por limite de sessão da conta (resetava 18h20 BRT); relançados
depois do reset, sem alterar o prompt.

**Uma questão foi descartada por mim mesmo, não pelo agente**: o agente
do nível 4 (`colocacao`) devolveu uma questão citando "Banco do Brasil"
como fonte, mas confessou no próprio resumo que **reconstruiu as
alternativas** porque não achou o gabarito original — isso não é uma
questão real verificada, é uma questão inventada com fonte real colada
em cima. Removida antes do merge. Regra pra próximas rodadas: sempre
ler o resumo em prosa do agente (fora do bloco JSON) antes de confiar
cegamente no JSON — é lá que esse tipo de confissão aparece.

**Textos-base reais reproduzidos** (poema completo "Anatomia" de
Ademir Assunção/A. Caetano no ENEM PPL 2021, trecho de Vinicius de
Moraes na FUVEST 2012, trecho de Machado de Assis na FUVEST, diálogo de
Drummond em "Contos de Aprendiz" no ENEM 2014, Lira XIV de Tomás
Antônio Gonzaga na UFMG): mesmo padrão já usado nos temas de
Literatura do `enem.html` (reproduzir o texto de apoio necessário pra
resolver a questão real de vestibular é prática padrão de site de
preparatório, não viola nada) — não reproduzir letra de música em
nenhuma hipótese continua valendo (um agente encontrou uma candidata
forte baseada em "O Meu Guri" e descartou sozinho, corretamente, sem
eu precisar intervir).

**Questão ENEM 2009 sinalizada**: a prova de 2009 vazou antes da
aplicação oficial e foi cancelada/reaplicada em dezembro daquele ano —
a questão sobre coesão referencial (cavalo de Troia) usada aqui circula
amplamente em material de estudo com gabarito consistente entre fontes,
mas não tem publicação oficial do INEP pra essa versão específica. Isso
está documentado no próprio campo `fonte` dessa questão no `BANCO`, à
vista do professor — não escondido.

Contagem final dessa sessão: 20 mapas mentais, 15 tabelas-resumo,
162 seções teóricas (era 92), 177 questões de quiz (era 60: 65 depois do
lote de mapas/tabelas, 141 depois do lote de expansão pedagógica, 177
depois das 36 questões reais) — todas com badge `[fonte]` visível
diferenciando-as das pedagógicas.

## Portal SAEB — conteúdo e tema escuro (17/ago/2026)
Pedido do professor: deixar `saeb/` "Perfeito", com conteúdo mais rico E
"um design como o resto do site" — inicialmente interpretei isso como só
conteúdo (adicionei `<section class="dica-ouro painel">` e
`<section class="painel glossario">` em 8 descritores que estavam mais
fracos: D06, D07, D10, D13, D14, D19, D25/D26/D27/D28), sem mexer no
visual, por julgamento próprio de que o azul/dourado "oficial" combinava
com o clima de prova. **Julgamento errado** — o professor confirmou
explicitamente (`AskUserQuestion`) que queria o tema escuro (Cormorant
Garamond + Inter, paleta do Guia de Gramática/Banco de Questões) também,
não só mais conteúdo. Lição: quando o pedido original já mencionar
"design", não decidir sozinho que a página deve ficar diferente do resto
do site sem perguntar antes.

**Redesign técnico**: as 21 páginas de descritor + `d21-23-25-28.html`
compartilham um bloco `<style>` quase idêntico (só variam num pequeno
trecho final por página — algumas têm CSS extra tipo `.func-*`/`.tese-box`
de D07/D08/D13 etc., outras não têm o jogo de classificação
`.cat-btn.cat-*`). Por isso o find-and-replace do bloco inteiro (como fiz
no Guia de Gramática) não funcionou pra 20 dos 21 arquivos — só D01 bateu
exato. Solução: diff linha a linha entre o CSS antigo e o novo (só 41 das
157 linhas realmente mudam valor — a maioria das regras usa
`var(--azul)` etc. e herda o novo tema automaticamente só remapeando o
`:root`) e aplicar cada par (linha antiga → linha nova) como replace
independente em cada arquivo, tolerando 0 ocorrências (regra que não
existe naquele arquivo, ex.: `.cat-btn.cat-tema.ok` só existe em quem tem
o jogo de classificar). Nomes de variável CSS mantidos idênticos
(`--azul`, `--branco` etc.) — só os VALORES mudaram — de propósito, pra
não precisar caçar cada `var(--branco)` em 22 arquivos.

**Cor hardcoded fora do bloco `<style>`, dentro do próprio conteúdo**: as
questões (`const QRAW=[...]`) têm caixas de texto-suporte com
`style="background:#f7f9fc;border-left:4px solid #235a8c"` inline, coladas
questão por questão — eram cores do tema claro escritas direto no HTML da
questão, não numa classe CSS, então o replace do bloco `<style>` não
alcançava. Motivo de existir: essas caixas citam "TEXTO 1"/"TEXTO 2" ou
rótulos como "ANÚNCIO" dentro do enunciado, coloridas à mão questão a
questão. Resolvido com um dicionário de ~20 cores hex antigas → equivalente
escuro (aplicado como replace literal de string, sem tocar na estrutura
JSON/HTML ao redor — seguro porque cor hex é um token isolado). Validado
com `json.loads` do `QRAW` de cada arquivo depois do replace pra garantir
que nada quebrou.

**Bug de contraste que o remapeamento ingênuo teria causado**: `.badge`,
`.qnum` e `.btn.ouro` usam fundo `var(--ouro)` (âmbar) com texto
`var(--azul)` — no tema claro `--azul` era azul-marinho quase preto,
ótimo contraste sobre âmbar. Só trocar o VALOR de `--azul` pro azul vivo
`#3B82F6` do tema escuro teria deixado azul-vivo sobre âmbar (dois tons
médios, contraste ruim). Corrigido trocando o texto desses três pra
`var(--bg)` (quase preto) especificamente — mesmo ajuste replicado em
`saeb/index.html` pro `.badge-header` e `.btn-card.breve-btn`.

**Bug de input invisível**: `.gate-field input[type=text]` (nome do
aluno) e `.senha-box input[type=password]` nunca tinham `background`
explícito no CSS original — dependiam do branco padrão do navegador. Com
`color:var(--txt)` virando quase-branco no tema escuro, o texto digitado
ficava branco sobre fundo branco do input (invisível). Corrigido
adicionando `background:var(--branco)` explícito nos dois.

**`saeb/index.html`** tratado à parte (estrutura de dashboard bem
diferente dos descritores — grid de cards, legenda, tabela de matriz — não
o mesmo bloco `<style>` compartilhado): mesma técnica de remapear
`:root` (incluindo `--lilas`/`--lilas-c`, aparentemente não usadas em
lugar nenhum do arquivo, mas mantidas por precaução) e headings pra
Cormorant Garamond, mais o mesmo fix de contraste do badge/botão âmbar.
Como a "Matriz de Referência Completa" desse painel tem CSS de impressão
dedicado (`.aviso-print`, `page-break-before`) — é claramente pensada pra
ser impressa —, adicionado um bloco `@media print` extra forçando
`body`/`.matrix-ref`/tabela de volta pras cores do tema claro só na
impressão, senão o texto quase-branco do tema escuro ficaria ilegível em
papel branco (o navegador normalmente descarta `background` no print mas
mantém `color`). Os 21 descritores individuais NÃO receberam esse mesmo
reforço de impressão — eles não têm um fluxo de impressão dedicado
equivalente (diferente do Gerador de Provas do Guia de Gramática), então
ficou fora de escopo por ora.

## Banco de Questões de Português (17/ago/2026)
`portugues/banco-questoes.html` — novo, a pedido do professor inspirado no
site tudosaladeaula.com (só como referência de conceito/organização por
campo de atuação — nunca copiado; aviso de direitos autorais deles proíbe
reprodução, então o conteúdo aqui é 100% autoral ou de domínio público
verificado, com pipeline próprio). Reaproveita quase 1:1 a arquitetura do
Guia de Gramática (mesmo tema escuro, mesmo padrão `.over`/`.sheet`,
mesmo `ligarQuiz`, mesmo gerador de lista/prova com `body:has()`), só
trocando `TOPICOS` por `ATIVIDADES` e `NIVEIS` por `CAMPOS_INFO` (os 4
campos de atuação da BNCC: jornalístico-midiático, artístico-literário,
vida pública, estudo e pesquisa). Cada atividade = texto-base + 4-5
questões (schema com `alts` de 4, não 5 como no banco ENEM). Filtro duplo
por campo E por ano (6º-9º, array `ano` em cada atividade — uma atividade
pode servir a mais de um ano).

**25 atividades, 119 questões**, escritas por 4 agentes em paralelo (um
por campo), cada um seguindo o padrão de rigor do `saeb/D01.html` (texto
com fonte citada, gabarito com `expl` justificando cada alternativa).
Regra de direitos autorais seguida à risca: textos de domínio público só
com autor morto há mais de 70 anos, **verificados via WebFetch antes de
reproduzir** (um agente confirmou "Um Apólogo" de Machado de Assis, "Meus
Oito Anos" de Casimiro de Abreu e o soneto de Bilac direto em
machadodeassis.net/culturagenial antes de usá-los) — todo o resto é texto
original assinado como tal no campo `fonte` ("Texto original, elaborado
para fins didáticos"), incluindo cartas, biografias (só fatos genéricos
e amplamente conhecidos, sem data/número inventado), verbetes e
infográficos de ciências/geografia/história. Nenhuma letra de música em
nenhuma hipótese — um agente encontrou candidata forte e descartou sozinho.

**Gênero "Manifesto"/"Campanha" não existe como valor de `genero`** — não
tem ícone próprio em `GEN_ICONS`. Um agente sinalizou isso e usou
"Artigo de opinião" para os dois textos de opinião/manifesto que escreveu,
solução mantida. Se pedir mais desse tipo de texto no futuro, ou criar
ícone novo ou continuar usando esse mapeamento.

**2 dos 4 agentes de conteúdo falharam na primeira tentativa** (erro de
API / resposta truncada) — relançados com o mesmo prompt mais um aviso
final pra manter enunciados/explicações objetivos e evitar corte no meio
da resposta; os dois deram certo na segunda tentativa, sem alterar o
padrão de qualidade.

## Interpretação em Provas de Concurso (commit `2843986`)
`portugues/interpretacao-concursos.html` — quiz separado do banco ENEM, com
393 questões reais de português de provas de concurso público (pciconcursos.com.br
+ Cesgranrio, PDFs em `materiais/materiais-concursos-interpretacao/` e
`materiais/materiais-provas-cesgranrio-interpretacao/`, ambos **gitignorados**
— não republicar o PDF inteiro no repo público, só as questões extraídas como
texto são commitadas). **Estrutura atual (desde 15/ago/2026, ver
"Reestruturação: cargo → tema + dificuldade" mais abaixo): 3 temas por
ASSUNTO**, não por cargo: `interpretacao` (141), `gramatica` (142), `coesao`
(110), cada um com filtro de dificuldade (fácil/médio/difícil/todas) dentro
do tema — em `TEMAS_ORDEM`/`TEMAS_INFO`/`TEMA_ICONS` dentro do próprio HTML
(BANCO grande demais pra manter num arquivo separado, igual ao padrão do
enem.html). Os parágrafos logo abaixo (sobre o lote pciconcursos original de
160 questões e o cargo `administrador`/`advogado`/`agente_administrativo`)
descrevem a estrutura ANTIGA por cargo — mantidos por history/contexto do
pipeline de extração (que continua igual), mas a organização de navegação do
quiz mudou.

**Particularidade importante desse banco**: diferente do ENEM, essas provas
da pciconcursos vêm **sem gabarito** (nem no PDF nem em fonte externa
rastreável — os PDFs não têm capa com nome do concurso/banca/ano, só
começam direto nas questões). Não dá pra aplicar a regra de ouro do ENEM
("confirmar gabarito em fonte externa") porque não existe fonte externa pra
essas provas especificamente. Em vez disso, o gabarito e a explicação de
cada questão foram determinados por leitura cuidadosa do texto-base e análise
gramatical (16 agentes em paralelo, um por prova, cada um com campo
`confianca` alta/media/baixa e `duvida` explicando o raciocínio nos casos
mais discutíveis). Questões de interpretação/gramática amarradas a um texto
dado são autoverificáveis dessa forma — não é o mesmo risco de fabricação
de uma questão inteira inventada.

Pipeline usado (scripts descartáveis em `_build-concursos/`, gitignorado):
PDF → `pdftotext -enc UTF-8 -layout` → `parse_concursos.py` (isola a seção
"PROVA DE LÍNGUA PORTUGUESA", separa texto-suporte e questões, mecânico, sem
IA) → classificação por agentes (gabarito+explicação) → `image-manifest.json`
(mapeamento manual verificado visualmente de qual imagem real, em
`assets/img/questoes/concursos/`, cada texto-suporte precisa — várias
questões citam charge/tirinha/cartaz/infográfico onde só a legenda
"Disponível em: URL" foi extraída como texto, a imagem em si não) →
`merge_concursos.py` (junta tudo, mecânico) → `inject_html.py` (substitui
`BANCO_PLACEHOLDER` no HTML). Se for reprocessar ou adicionar mais provas,
reusar esse pipeline em vez de recomeçar do zero.

**`reflow_paragrafos()` em `merge_concursos.py`** (commit `5fe56d1`): o
`pdftotext -layout` quebra cada linha de coluna do PDF com `\n` (às vezes
`\n\n`) — nunca é quebra de parágrafo de verdade, só a largura da coluna
impressa. Sem isso, o texto-suporte aparecia picado, uma linha por
"parágrafo". A função rejunta em parágrafos corridos com uma heurística:
bloco curto (≤65 char) sem pontuação final = cabeçalho/título/autor, fica em
linha própria; do resto, só quebra parágrafo quando o bloco anterior termina
em pontuação de fechamento de frase (`.!?…”"')]`). Efeito colateral aceito:
em textos com numeração de linha para citação tipo "(Linha 45)", o número
some do início da linha e sobra solto no meio da frase corrida (ex: "...
utilizados no 5 cálculo do...") — não tentei remover esses dígitos soltos
porque não dá pra diferenciar com segurança "marcador de linha" de "número
que é conteúdo de verdade" só com regex; aceitar como resíduo cosmético
menor — não vale o risco de apagar um número que seja conteúdo real.

**Cuidado com o limiar `precisaImagem` do parser** (commit `a09dd0c`): ele só
marca um texto-suporte como "precisa de imagem" se `charCount < 150`, mas 6
tirinhas/anúncios com balões em colunas passaram batido nesse limiar porque o
pdftotext conseguia extrair ALGO de texto delas — só que fora de ordem de
leitura (os balões de quadros diferentes viram uma sopa de letra ilegível,
tipo "MARATONOU". SOU DO TEMPO EM ... E NÃO FICAR O HUNF!..."). Antes de
fechar o banco, sempre rodar uma varredura tipo `150 <= charCount < 500 and
not precisaImagem` em cada `_build-concursos/concursos-parse/*.json` e ler
manualmente o conteúdo de cada resultado — se não formar frase coesa, é
tirinha/anúncio embaralhado, não texto corrido. As imagens desses 6 casos já
estavam baixadas em `assets/img/questoes/concursos/` mas com o campo
`suprimirTexto: true` no manifesto (`merge_concursos.py` respeita esse campo
e usa só a imagem, descartando o texto embaralhado).

**Achados dessa auditoria, pra não repetir o trabalho**: duas duplicatas
completas descobertas por comparação par a par de todas as provas
(`administrador` ≡ `administrador_hospitalar`, `administrador4` ≡
`administrador_pessoal` — mesma prova de português reaplicada em cargos
diferentes do mesmo edital) — as duas cópias (`administrador_hospitalar`,
`administrador_pessoal`) foram excluídas do banco final, só continuam como
arquivo bruto em `_build-concursos/concursos-parse/` caso precise conferir.
A questão 18 de `advogado (1)` tem duas alternativas idênticas
("II, III e IV, apenas.") **no PDF original** — não é erro de extração,
conferido direto no PDF; mantida como está (fiel à fonte), só documentando
aqui pra não achar que é bug do parser numa auditoria futura.

### Lote Cesgranrio — 239 questões novas (15/ago/2026)
O professor colou 22 PDFs à mão em
`materiais/materiais-provas-cesgranrio-interpretacao/` (**gitignorado**,
mesmo padrão do outro lote) — provas reais da banca Cesgranrio (TRANSPETRO,
ELETRONUCLEAR, BNDES, CHESF, UNIRIO, TCE-RO, CEFET, INNOVA, DECEA/Aeronáutica,
Prefeitura de Manaus, MP-RO), baixadas manualmente porque o download direto
do pciconcursos.com.br é bloqueado por CAPTCHA (Cloudflare Turnstile) —
**nunca tentar automatizar esse download** (contornar CAPTCHA é proibido
pelas regras de segurança do agente; só o usuário pode clicar).

**Layout do PDF é diferente do lote pciconcursos genérico**: página em 2
colunas (texto-suporte à esquerda, questões à direita, lado a lado), então
`pdftotext -layout` intercala as duas colunas linha a linha e vira sopa de
letra ilegível. A solução foi extrair **sem** `-layout`
(`pdftotext -enc UTF-8 arquivo.pdf saida.txt`) — nessa banca especificamente,
isso dá a coluna inteira em ordem de leitura (texto todo, depois questões
todas), bem mais limpo. Script novo: `_build-concursos/parse_cesgranrio.py`
(não reusa `parse_concursos.py` — formato de marcador de questão é diferente,
Cesgranrio não usa "QUESTÃO N", só o número colado ou sozinho na linha).

**Particularidades do parser da Cesgranrio** (todas em `parse_cesgranrio.py`):
- Diferencia marcador de QUESTÃO de marcador de PARÁGRAFO do texto-suporte
  vendo se ~5 alternativas "(A)...(E)" aparecem logo a seguir (`ALT_LOOKAHEAD`
  = 1500 chars) — não dá pra confiar só em "número sozinho na linha vs.
  colado ao texto" porque os dois formatos aparecem para os dois tipos
  dependendo da prova.
- Busca a sequência 1, 2, 3... mas tolera buraco (questão anulada, ou questão
  fisicamente fora de ordem no fluxo de leitura por quebra de página/coluna —
  aconteceu de verdade em `decea0106_prova01`, onde Q7/8/9 aparecem ANTES de
  Q6 no texto extraído) — desiste depois de 4 falhas seguidas.
- `RE_NEXT_SUBJECT` fecha a seção de Português no cabeçalho da PRÓXIMA
  matéria (Inglês, Específicos etc.) — lista de palavras-chave montada na
  marra vendo caso a caso; **6 provas** (`5administrador`, `administraca2o`,
  `advogado (122)`, `prova_1_administrador_a_jnior`, `prova_objetiva`,
  `semsa0105_supadmini`, `sup_adm`) tinham nome de matéria seguinte fora da
  lista (ex.: "SISTEMA FINANCEIRO NACIONAL E CONHECIMENTOS BANCÁRIOS") e
  precisaram de corte manual por número de questão em `N_OVERRIDE` (valor
  conferido a mão na tabela de distribuição da capa de cada prova).
- **Provas com mais de um texto-suporte** ("Texto I" + "Texto II" dentro da
  mesma seção de Português): cada questão carrega seu PRÓPRIO campo `texto`
  (não um texto único por prova) — bug achado por um dos agentes de
  classificação (`administrador ()` tinha Texto II não capturado, questões
  12-20 ficavam sem o texto que citavam) e corrigido depois.
- `prova (1).json` (MP-RO, Analista em Administração) foi **excluída do
  lote inteiro** — a mesma classe de bug da reordenação do decea, só que
  aqui o resultado juntava o enunciado de uma questão com as alternativas de
  OUTRA (risco real de gabarito errado, não só perder questão), então não
  valia arriscar.
- 3 questões de `prova_1_administrador` (Q4, Q5, Q10) excluídas — dependem
  do conteúdo de imagens (charge, propaganda de cigarro) que não foi
  extraído como texto, mesmo problema de sempre, sem imagem manifestada
  ainda pra essas.
- `advogado (1).json` (ELETRONUCLEAR) é duplicata quase perfeita de
  `administrador (1).json` — mesmo edital, "Conhecimentos Básicos" idêntico
  pros dois cargos (só a prova de "Específicos", não usada aqui, difere).
  Excluída em `merge_cesgranrio.py::DUPLICATAS_EXCLUIR`.

**Gabarito**: uma das 22 provas (`administracao.pdf`, TRANSPETRO) veio com
o gabarito oficial real no mesmo lote colado pelo professor
(`gabarito administracao.pdf`) — usado direto, sem inferência, confiança
"alta" garantida nas 10 questões. As outras 20 (agora 21 provas úteis, já
que uma foi excluída) não têm gabarito rastreável, então seguiram o mesmo
método do lote pciconcursos: 21 agentes em paralelo, um por prova, campo
`confianca`/`duvida`. Ao rodar esse lote, **3 dos 21 agentes bateram no
limite de sessão da conta** no meio da tarefa — 2 ainda tinham escrito o
JSON completo antes de falhar (só precisou validar), 1 escreveu com uma
vírgula sobrando (JSON inválido, corrigido à mão). Lição: sempre validar
`json.load()` de cada arquivo em `cesgranrio-classified/` antes de assumir
que "failed" no agente = arquivo perdido — às vezes só falhou na confirmação
final, o trabalho já estava salvo.

**Limpeza de texto** (`merge_cesgranrio.py`): como a extração é sem
`-layout`, cada linha visual do PDF vira `\n\n` solto (não `\n` como no
outro lote) — `reflow_cesgranrio()` (diferente de `reflow_paragrafos()` do
outro pipeline) remove marcador de parágrafo solto (número sozinho na
linha) e rejunta hifenização de fim de linha (`"repen-" + "te"` →
`"repente"`, cuidado pra não comer o hífen de verdade de palavras compostas
tipo `"levantou-" + "-se"` → `"levantou-se"`, não `"levantouse"`). Ruído de
rodapé de página (nome do órgão/cargo colado no fim de enunciado ou
alternativa, tipo "...metais pesados. 2 PROFISSIONAL DE NÍVEL SUPERIOR
FORMAÇÃO: ADMINISTRADOR ELETRONUCLEAR") é cortado por heurística: depois da
última pontuação final de frase, se o que sobra não tem nenhuma sequência
de 3+ letras minúsculas, é rodapé (maiúscula/número/pontuação pura), não
prosa de verdade.

**Resultado**: 239 questões novas, todas dentro dos temas já existentes
(`administrador`: 80→309, `advogado`: 40→50 — nenhum tema novo criado dessa
vez, o professor não pediu cargo novo explicitamente nessa leva). Varredura
de sanidade rodada no BANCO final via console do navegador (sem ruído de
`pciconcursos`/`pcimarkpci` vazado, todas com exatamente 5 alternativas,
`correta` no range, sem hífen solto) — 0 problemas nas 239 questões novas.
Pipeline completo em `_build-concursos/parse_cesgranrio.py` +
`merge_cesgranrio.py`, reusa o `inject_html.py`... na verdade não usou
`inject_html.py` dessa vez (ele sobrescreve `TEMAS_ORDEM`/`TEMA_ICONS` do
zero, que já tinham os 3 temas certos) — o merge final com o `BANCO` já
injetado no HTML foi feito direto por um script Python ad-hoc que faz
`json.loads` do bloco `const BANCO = {...};`, dá `.extend()` nas listas de
questões dos temas certos, e escreve de volta. **Isso ficou obsoleto pela
reestruturação por tema/dificuldade documentada logo abaixo** — os temas não
são mais `administrador`/`advogado`/`agente_administrativo`, então uma prova
nova não entra mais "no tema certo" automaticamente, precisa passar pela
classificação de tema+dificuldade também.

### Reestruturação: cargo → tema + dificuldade (15/ago/2026)
Depois do lote Cesgranrio, o tema `administrador` ficou com 309 questões
num bloco só — grande demais pra navegar. A pedido do professor, o quiz
inteiro (as 399 questões que existiam até então: 160 do lote pciconcursos
original + 239 do lote Cesgranrio) foi reclassificado e reorganizado:

- **3 temas por ASSUNTO** (não mais por cargo): `interpretacao`
  ("Interpretação de Texto"), `gramatica` ("Gramática Normativa": crase,
  concordância, regência, colocação pronominal, pontuação, ortografia,
  sintaxe), `coesao` ("Coesão, Coerência e Semântica": sinônimo/antônimo,
  retomada pronominal, ambiguidade, figura de linguagem, valor semântico de
  conectivo, argumentação). Split final: interpretação 141, gramática 142,
  coesão 110 (393 — 6 a menos que 399, ver auditoria de ruído abaixo).
- **3 níveis de dificuldade** (`facil`/`medio`/`dificil`) como campo
  `dificuldade` em CADA questão — não é um tema novo, é um FILTRO dentro do
  tema. Tela nova `sc-dificuldade` (entre o dashboard e o quiz) deixa o
  aluno escolher o nível (ou "Todas as questões") antes de começar.
- Classificação feita por 8 agentes em paralelo (lotes de ~50 questões,
  usando só `enun`+`alts`+`expl` de cada questão — não precisa do texto-base
  inteiro pra saber se é regra de gramática ou compreensão geral). Cada
  questão já carregava sua explicação (`expl`) determinada nas etapas
  anteriores, o que torna essa classificação BEM mais barata/rápida que
  resolver a questão do zero — é só rotular o que já foi resolvido.

**Mudança estrutural relevante em `interpretacao-concursos.html`**: como
agora existe filtro por dificuldade, `iniciarQuiz(topico, dificuldade)`
filtra a partir de `BANCO[topico]._todas` (cópia intocada da lista
completa, populada uma vez logo após `TEMAS_ORDEM` ser definido) e guarda o
resultado embaralhado em `S.questoesAtivas` — TODO o código do quiz em
execução (render de questão, timer, resultado, gabarito) lê
`S.questoesAtivas`, nunca mais `BANCO[S.topico].questoes` diretamente.
Isso importa porque `iniciarQuiz` SOBRESCREVE `BANCO[topico].questoes` com
o subconjunto filtrado da tentativa atual (efeito colateral antigo, mantido
por compatibilidade) — qualquer código novo que precise da lista COMPLETA
de um tema (ex.: o Gerador de Provas, que soma questões de todos os temas
pra montar uma prova pra imprimir) tem que usar `BANCO[t]._todas`, nunca
`BANCO[t].questoes`, senão pega só o que sobrou da última tentativa de quiz
daquele tema. Resultado salvo em `AUTH.current.tentativas` agora usa chave
composta `"tema:dificuldade"` (ex.: `"interpretacao:facil"`), não mais só
o tema — os 4 níveis (facil/medio/dificil/todas) de um mesmo tema guardam
melhor resultado e histórico separados.

**Auditoria de ruído de rodapé (feita durante essa reestruturação, achado
por um dos 8 agentes de classificação por acaso, testando a prova de
verdade no navegador)**: a limpeza de rodapé de página do lote Cesgranrio
(`strip_footer_noise` em `merge_cesgranrio.py`) só cortava ruído colado
DEPOIS da última pontuação final de frase — alternativas curtas sem ponto
final (comuns em questão de vocabulário/gramática, tipo uma palavra só)
não passavam por nenhuma limpeza, deixando ruído tipo "UNIRIO",
"PROVA 8 3 ADMINISTRADOR", "JÚNIOR 2 INNOVA" grudado ou substituindo
alternativas inteiras. Rodada uma limpeza adicional direto no `BANCO` já
injetado no HTML (script ad-hoc, não ficou salvo como arquivo do
pipeline): heurística por PALAVRA (não regex de pontuação) — corta do fim
da alternativa qualquer sequência de 2+ tokens maiúsculo/número que bata
com uma lista de nomes de órgão/prova conhecidos (`UNIRIO`,
`ELETRONUCLEAR`, `TRANSPETRO`, `INNOVA`, `BNDES`, `PROVA`, etc.), desde que
sobre conteúdo de verdade (pelo menos 1 letra minúscula) depois do corte.
**6 questões** tinham uma alternativa INTEIRA substituída por ruído (não dava
pra recuperar o conteúdo real sem voltar no texto bruto da prova original)
e foram removidas do banco (399 → 393). De quebra, achado e corrigido um
caractere de área de uso privado Unicode (`U+F06C`) que aparecia no lugar
da letra "l" em citações tipo "(l. 45)" em 10 questões — resíduo de um
glifo especial da fonte do PDF original que o `pdftotext` não conseguiu
mapear pra Unicode normal.

**Lição pra próximas auditorias de ruído**: sempre testar um quiz de
verdade no navegador (não só rodar a varredura automática por regex) —
foi testando a UI ao vivo, respondendo questões de verdade, que esse
padrão de ruído em alternativa curta apareceu; a varredura automática
anterior (que só checava por comprimento excessivo de alternativa) não
pegava esse caso porque a alternativa corrompida ficava CURTA, não longa.

## Redação ENEM reformulada (commits `cbee059`, `129e4ee`)
50 temas de redação (era 9), em `const TEMAS` — cada um com `id`, `cor`,
`titulo`, `textos` (3 textos de apoio, no estilo excerto real do ENEM: um
com fonte/citação no fim tipo "Disponível em... Acesso em... (adaptado)",
um normativo/legal citando artigo de lei, e um com citação direta entre
aspas) e `dicas`, um objeto por etapa (intro/dev1/dev2/conclusao), cada
etapa com `{dica, conectivo, evitar}` — `dica` é a orientação de conteúdo,
`conectivo` sugere frase de abertura/conectivos pra aquela etapa, `evitar`
aponta um erro comum específico. **Não usar mais o formato antigo onde
`dicas.intro` era só uma string** — `renderEssay()` já suporta os dois
formatos (tem fallback), mas todo tema novo deve usar o objeto.

`TEMA_EIXOS` mapeia cada `id` pra um dos 10 eixos em `EIXOS_REDACAO`
(tecnologia, educação, saúde, ambiente, direitos, trabalho, cultura,
segurança, cidades, família) — usado no filtro por chip na tela de escolha
de tema (`renderEixoFiltro`/`filtrarEixo`). Ícones em `TEMA_REDACAO_ICONS`
+ `temaRedacaoIconSVG(id)`, mesmo padrão SVG de linha do banco de questões
— não usar emoji cru nem `t.emoji` (campo ainda existe mas ficou vazio,
não é mais usado na UI). Todo `id` novo precisa de entrada em AMBOS
`TEMA_EIXOS` e `TEMA_REDACAO_ICONS`, senão cai no ícone `_default`/fica
sem filtro.

**Cuidado com duplicata de tema**: numa sessão anterior um tema (`sus`)
ficou duplicado — uma cópia nova no meio do array e uma cópia antiga
esquecida bem no final, antes do `];` de fechamento. Antes de adicionar
temas novos, sempre conferir `TEMAS.map(t=>t.id)` por id repetido no
console do navegador.

Novo: botão "📤 Enviar para o professor" na etapa de revisão da redação
(`renderRevisao`) manda o texto completo pro Google Sheets numa aba
**Redações** separada (`enviarRedacaoSheets`, payload com `tipo:'redacao'`).
Só dispara com clique explícito do aluno (ao contrário do quiz, que envia
sozinho ao terminar) — o `doPost` do Apps Script (`docs/APPS-SCRIPT.gs`)
agora olha `d.tipo` pra decidir se escreve na aba Resultados ou Redações.
**Isso exige que o professor cole o `APPS-SCRIPT.gs` atualizado no editor
e implante uma Nova versão** — sem isso a aba Redações nunca é criada e o
envio falha silenciosamente (mesmo problema de sempre: salvar o código não
basta, precisa reimplantar). Ver fluxo de diagnóstico em `INSTRUCOES-SHEETS.md`.

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
