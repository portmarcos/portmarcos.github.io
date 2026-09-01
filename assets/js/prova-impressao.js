/* Renderizador de versão impressa (backup sem energia/internet) das provas
   online. Lê o mesmo QUIZ_DADOS (dados/prova-*.js) usado pela prova online —
   fonte única, sem duplicar conteúdo — e monta folhas A4 compactas em 2
   colunas, paginando automaticamente por altura REAL medida no navegador
   (não por contagem de questões) para preencher cada folha sem estourar.
   Questões consecutivas que citam o MESMO texto de apoio (ignorando a
   linha de fonte, que pode diferir mesmo citando o mesmo trecho) são
   agrupadas: o texto aparece uma vez só, com as duas perguntas embaixo. */

function montarProvaImpressa(cfg) {
  const qs = QUIZ_DADOS.questoes;
  const letras = ["A", "B", "C", "D"];

  function textoSemFonte(t) {
    if (!t) return "";
    return t.replace(/<p class="fonte">[\s\S]*?<\/p>\s*$/, "").trim();
  }

  function renderOpcoes(opcoes) {
    const curto = opcoes.every(o => o.length <= 22);
    const cls = curto ? "opcoes grid" : "opcoes";
    const itens = opcoes.map((o, i) =>
      `<div class="opcao"><span class="box"></span><span><b>${letras[i]}</b>) ${o}</span></div>`
    ).join("");
    return `<div class="${cls}">${itens}</div>`;
  }

  // agrupa perguntas consecutivas que compartilham o mesmo texto de apoio
  // (ignorando a citação da fonte, que pode variar mesmo sendo o mesmo trecho)
  const grupos = [];
  for (let i = 0; i < qs.length; i++) {
    const atual = grupos[grupos.length - 1];
    const mesmoTexto = atual && qs[i].texto && atual.texto &&
      textoSemFonte(qs[i].texto) === textoSemFonte(atual.texto) && textoSemFonte(atual.texto) !== "";
    if (mesmoTexto) {
      atual.perguntas.push({ n: i + 1, q: qs[i] });
    } else {
      grupos.push({ texto: qs[i].texto, perguntas: [{ n: i + 1, q: qs[i] }] });
    }
  }

  function grupoHtml(g) {
    let h = `<div class="q">`;
    if (g.texto) h += `<div class="texto">${g.texto}</div>`;
    g.perguntas.forEach(({ n, q }) => {
      h += `<div class="pbloco">`;
      h += `<span class="qnum">${n}</span> <span class="pergunta">${q.pergunta}</span>`;
      h += renderOpcoes(q.opcoes);
      h += `</div>`;
    });
    h += `</div>`;
    return h;
  }

  const style = `
  <style>
    @page { size: A4; margin: 9mm 8mm; }
    * { box-sizing: border-box; }
    html, body { margin:0; padding:0; }
    body { font-family: Arial, Helvetica, sans-serif; font-size: 9.3pt; line-height: 1.27; color:#111; }
    .folha { width: 192mm; margin: 0 auto 6mm; page-break-after: always; }
    .folha:last-of-type { page-break-after: auto; }
    .cab { display:flex; justify-content:space-between; align-items:flex-end; border-bottom:1.4px solid #111; padding-bottom:1.5mm; margin-bottom:2.5mm; }
    .cab .esc { font-size:8.6pt; }
    .cab .esc b { font-size:10pt; }
    .cab .tit { text-align:right; font-size:9.6pt; font-weight:bold; }
    .cab .tit small { display:block; font-weight:normal; font-size:8pt; }
    .idcampos { display:flex; gap:6mm; font-size:8.6pt; margin-bottom:2.5mm; border-bottom:1px dotted #999; padding-bottom:2mm; flex-wrap:wrap; }
    .idcampos span { border-bottom:1px solid #333; padding:0 2mm 0.5mm 0; flex:none; }
    .idcampos .nome { min-width:70mm; }
    .idcampos .turma { min-width:22mm; }
    .idcampos .data { min-width:26mm; }
    .aviso { font-size:7.6pt; color:#444; margin-bottom:2.5mm; font-style:italic; }
    .questoes { column-count: 2; column-fill: balance; column-gap: 7mm; column-rule: 0.5px solid #ccc; }
    .q { break-inside: avoid; margin-bottom: 2.3mm; padding-bottom: 1.8mm; border-bottom: 0.5px dotted #bbb; }
    .texto { font-size: 8.15pt; font-style: italic; color:#222; background:#f6f6f6; border-left: 2px solid #999; padding: 1mm 1.6mm; margin-bottom: 1mm; }
    .texto p { margin: 0.6mm 0; }
    .texto .fonte, .texto .fonte-interna { font-size: 7.1pt; font-style: normal; color:#555; }
    .texto img { max-width: 38mm; display:block; margin: 0.8mm auto; }
    .texto small { font-size: 7.1pt; }
    .pbloco { margin-top: 1mm; }
    .qnum { display:inline-flex; align-items:center; justify-content:center; width:4.2mm; height:4.2mm; border-radius:50%; background:#111; color:#fff; font-size:7.6pt; font-weight:bold; }
    .pergunta { font-weight:600; font-size: 9.1pt; }
    .opcoes { margin-top: 0.8mm; }
    .opcoes .opcao { display:flex; gap:1mm; align-items:flex-start; font-size: 8.9pt; margin-bottom: 0.5mm; }
    .opcoes.grid { display:grid; grid-template-columns: 1fr 1fr; gap:0.3mm 3mm; }
    .opcoes .box { width:2.5mm; height:2.5mm; border:1px solid #333; flex:none; margin-top:0.8mm; }
    .rodape { font-size:7.1pt; color:#777; text-align:center; margin-top:2mm; }
    @media screen { body { background:#888; } .folha { background:#fff; box-shadow:0 0 4mm rgba(0,0,0,.3); padding:9mm 8mm; margin-top:6mm; } }
  </style>`;
  document.head.insertAdjacentHTML("beforeend", style);
  document.title = cfg.tituloProva + " — Versão Impressa";

  const cabecalho = `
    <div class="cab">
      <div class="esc"><b>${cfg.escola}</b><br>${cfg.cidade} · Prof. ${cfg.professor}</div>
      <div class="tit">${cfg.tituloProva}<small>${cfg.subtitulo}</small></div>
    </div>
    <div class="idcampos">
      <span class="nome">Nome: ________________________________________</span>
      <span class="turma">Turma: ________</span>
      <span class="data">Data: ___/___/2026</span>
    </div>
    <div class="aviso">${cfg.aviso || "Versão impressa de contingência (falta de energia/internet). Marque apenas 1 alternativa por questão, sem consulta. Cada questão vale o mesmo peso."}</div>`;

  // --- medição real de altura para uma estimativa inicial de paginação ---
  const mmToPx = mm => mm * 96 / 25.4;
  const colWidthPx = (mmToPx(192) - mmToPx(7)) / 2;
  const pageHeightPx = mmToPx(297 - 9 - 9); // A4 menos margens de impressão
  const rodapeHeightPx = 24;

  function medirAlturaHtml(html, largura) {
    const el = document.createElement("div");
    el.style.cssText = `position:absolute; visibility:hidden; top:-99999px; left:0; width:${largura}px;`;
    el.innerHTML = html;
    document.body.appendChild(el);
    const h = el.getBoundingClientRect().height;
    document.body.removeChild(el);
    return h;
  }

  const headerHeightPx = medirAlturaHtml(cabecalho, mmToPx(192));
  const alturas = grupos.map(g => medirAlturaHtml(grupoHtml(g), colWidthPx));
  const capacidadePagina = 2 * pageHeightPx - rodapeHeightPx;
  const capacidadePrimeiraPagina = capacidadePagina - headerHeightPx;

  // estimativa inicial (empacotamento por altura medida isoladamente —
  // aproximada, pois não reflete o balanceamento real do CSS multi-coluna)
  let folhas = [];
  let folhaAtual = [];
  let capacidadeRestante = capacidadePrimeiraPagina;
  grupos.forEach((g, idx) => {
    if (folhaAtual.length && alturas[idx] > capacidadeRestante) {
      folhas.push(folhaAtual);
      folhaAtual = [];
      capacidadeRestante = capacidadePagina;
    }
    folhaAtual.push(g);
    capacidadeRestante -= alturas[idx];
  });
  if (folhaAtual.length) folhas.push(folhaAtual);

  // --- correção real: renderiza, mede overflow de verdade (o CSS cria uma
  // 3ª coluna invisível quando o conteúdo não cabe em 2), e empurra o
  // último grupo da página que estourou pro início da próxima. Repete até
  // nenhuma página estourar. Isso é necessário porque a altura de um grupo
  // medido isoladamente não é igual à altura que ele ocupa dentro do
  // balanceamento real de 2 colunas do CSS. */
  const container = document.createElement("div");
  container.id = "prova-impressa-container";
  document.body.appendChild(container);

  function renderTentativa(folhasGrupos) {
    let html = "";
    folhasGrupos.forEach((grs, i) => {
      const isPrimeira = i === 0;
      const isUltima = i === folhasGrupos.length - 1;
      html += `<div class="folha">`;
      if (isPrimeira) html += cabecalho;
      html += `<div class="questoes">${grs.map(grupoHtml).join("")}</div>`;
      html += `<div class="rodape">Página ${i + 1}/${folhasGrupos.length}${isUltima ? " — " + cfg.tituloProva : ""}</div>`;
      html += `</div>`;
    });
    container.innerHTML = html;
  }

  function acharEstouro() {
    // com column-fill:balance e altura livre, a altura renderizada de
    // .questoes É a altura de cada coluna balanceada — se ultrapassar o
    // espaço disponível daquela página, a página não coube em 2 colunas.
    const els = container.querySelectorAll(".folha .questoes");
    for (let i = 0; i < els.length; i++) {
      const limite = (i === 0 ? pageHeightPx - headerHeightPx : pageHeightPx) - rodapeHeightPx;
      if (els[i].getBoundingClientRect().height > limite) return i;
    }
    return -1;
  }

  renderTentativa(folhas);
  let tentativas = 0;
  let folhaEstourada;
  while ((folhaEstourada = acharEstouro()) !== -1 && tentativas < 40) {
    const grs = folhas[folhaEstourada];
    if (grs.length <= 1) break; // não dá pra reduzir mais essa página
    const movido = grs.pop();
    if (!folhas[folhaEstourada + 1]) folhas.push([]);
    folhas[folhaEstourada + 1].unshift(movido);
    renderTentativa(folhas);
    tentativas++;
  }
  folhas = folhas.filter(f => f.length);

  // compactação: se uma página tem espaço de sobra, tenta puxar o próximo
  // grupo da página seguinte pra ela, testando de verdade (renderiza e
  // desfaz se estourar) — reduz espaço em branco deixado pela correção
  // anterior, que só empurra pra frente e nunca puxa pra trás.
  renderTentativa(folhas);
  let mudou = true;
  let rodadas = 0;
  while (mudou && rodadas < 60) {
    mudou = false;
    rodadas++;
    for (let i = 0; i < folhas.length - 1; i++) {
      if (!folhas[i + 1].length) continue;
      const candidato = folhas[i + 1][0];
      folhas[i].push(candidato);
      folhas[i + 1].shift();
      renderTentativa(folhas);
      if (acharEstouro() === -1) {
        mudou = true; // mudança aceita, segue com folhas já atualizado
      } else {
        folhas[i + 1].unshift(candidato);
        folhas[i].pop();
        renderTentativa(folhas);
      }
    }
    folhas = folhas.filter(f => f.length);
  }
  renderTentativa(folhas);
}
