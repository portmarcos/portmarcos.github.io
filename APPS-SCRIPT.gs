/**
 * RECEPTOR DE RESULTADOS — Portal do Professor Marcos Cruz
 * Cole este código no Apps Script da sua planilha
 * (Extensões → Apps Script) e implante como App da Web.
 */
function doPost(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let aba = ss.getSheetByName("Resultados");
  if (!aba) {
    aba = ss.insertSheet("Resultados");
    aba.appendRow(["Data e hora", "Atividade", "Nome do aluno", "Turma",
                   "Acertos", "Total", "Porcentagem"]);
    aba.getRange(1, 1, 1, 7).setFontWeight("bold").setBackground("#E8F0FE");
  }
  const d = JSON.parse(e.postData.contents);
  aba.appendRow([new Date(), d.atividade, d.nome, d.turma,
                 d.acertos, d.total, d.pct + "%"]);
  return ContentService.createTextOutput("ok");
}
