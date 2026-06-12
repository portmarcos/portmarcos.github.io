/**
 * RECEPTOR DE RESULTADOS v2 — Portal do Professor Marcos Cruz
 * Cole na sua planilha (Extensões → Apps Script), salve e
 * reimplante: Implantar → Gerenciar implantações → ✏️ → Nova versão.
 */
function doPost(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let aba = ss.getSheetByName("Resultados");
  if (!aba) {
    aba = ss.insertSheet("Resultados");
    aba.appendRow(["Data e hora", "Atividade", "Nome do aluno", "Turma",
                   "Acertos", "Total", "Porcentagem", "Respostas abertas"]);
    aba.getRange(1, 1, 1, 8).setFontWeight("bold").setBackground("#E8F0FE");
  }
  const d = JSON.parse(e.postData.contents);
  aba.appendRow([new Date(), d.atividade, d.nome, d.turma,
                 d.acertos, d.total, d.pct + "%", d.abertas || ""]);
  return ContentService.createTextOutput("ok");
}

/** Teste no navegador: abrir a URL deve mostrar a mensagem abaixo. */
function doGet() {
  return ContentService.createTextOutput("✅ Receptor funcionando! Pode fechar esta página.");
}
