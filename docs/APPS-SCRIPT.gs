/**
 * RECEPTOR DE RESULTADOS v3 — Portal do Professor Marcos Cruz
 * Cole na sua planilha (Extensões → Apps Script), salve e
 * reimplante: Implantar → Gerenciar implantações → ✏️ → Nova versão.
 */
function doPost(e) {
  const d = JSON.parse(e.postData.contents);
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  if (d.tipo === "redacao") {
    let aba = ss.getSheetByName("Redações");
    if (!aba) {
      aba = ss.insertSheet("Redações");
      aba.appendRow(["Data e hora", "Nome do aluno", "Turma", "Tema",
                     "Introdução", "Desenvolvimento 1", "Desenvolvimento 2",
                     "Conclusão", "Total de palavras"]);
      aba.getRange(1, 1, 1, 9).setFontWeight("bold").setBackground("#E8F0FE");
      aba.setColumnWidths(5, 4, 320);
    }
    aba.appendRow([new Date(), d.nome, d.turma, d.tema,
                   d.introducao || "", d.dev1 || "", d.dev2 || "",
                   d.conclusao || "", d.totalPalavras || ""]);
    return ContentService.createTextOutput("ok");
  }

  let aba = ss.getSheetByName("Resultados");
  if (!aba) {
    aba = ss.insertSheet("Resultados");
    aba.appendRow(["Data e hora", "Atividade", "Nome do aluno", "Turma",
                   "Acertos", "Total", "Porcentagem", "Respostas abertas"]);
    aba.getRange(1, 1, 1, 8).setFontWeight("bold").setBackground("#E8F0FE");
  }
  aba.appendRow([new Date(), d.atividade, d.nome, d.turma,
                 d.acertos, d.total, d.pct + "%", d.abertas || ""]);
  return ContentService.createTextOutput("ok");
}

/** Teste no navegador: abrir a URL deve mostrar a mensagem abaixo. */
function doGet() {
  return ContentService.createTextOutput("✅ Receptor funcionando! Pode fechar esta página.");
}
