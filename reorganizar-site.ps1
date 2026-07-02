# ============================================================
# Reorganizacao da raiz do site portmarcos.github.io
# Execute este script DENTRO da pasta do repositorio local
# (a mesma pasta que aparece no GitHub Desktop / Explorador)
#
# Antes de rodar: de um "Fetch origin" + "Pull" no GitHub Desktop
# pra garantir que sua copia local esta igual ao que ja esta no GitHub.
# ============================================================

$pastas = @("docs", "_arquivo-antigo", "saeb")
foreach ($p in $pastas) {
    if (-not (Test-Path $p)) {
        New-Item -ItemType Directory -Path $p | Out-Null
        Write-Host "Criada pasta: $p"
    }
}

function Mover($origem, $destino) {
    if (Test-Path $origem) {
        Move-Item -Path $origem -Destination $destino -Force
        Write-Host "Movido: $origem -> $destino"
    } else {
        Write-Host "Aviso: $origem nao encontrado (talvez ja tenha sido movido)" -ForegroundColor Yellow
    }
}

# Documentacao e scripts pessoais -> docs/
Mover "APPS-SCRIPT.gs" "docs\"
Mover "INSTRUCOES-SHEETS.md" "docs\"
Mover "LEIA-ME.md" "docs\"
Mover "LEIA-ME-ATUALIZACAO.txt" "docs\"
Mover "favicon-preview.html" "docs\"

# Paginas antigas duplicadas, nao usadas pelo index.html atual -> _arquivo-antigo/
Mover "jogos_index.html" "_arquivo-antigo\"
Mover "informatica_index.html" "_arquivo-antigo\"
Mover "portugues_index.html" "_arquivo-antigo\"

# Placeholder da pasta saeb, so pra o git conseguir rastrear a pasta mesmo vazia
if (-not (Test-Path "saeb\README.md")) {
    $conteudoSaeb = "# Portal SAEB/SIMAVE`n`nPasta reservada para o portal de atividades de Lingua Portuguesa baseado na Matriz SIMAVE (9o ano).`n`nArquivos a adicionar: index.html + uma pagina por descritor (d01.html, d02.html...)."
    Set-Content -Path "saeb\README.md" -Value $conteudoSaeb -Encoding UTF8
    Write-Host "Criado: saeb\README.md"
}

Write-Host ""
Write-Host "Pronto! Abra o GitHub Desktop, confira as mudancas (devem aparecer como 'renamed'), escreva uma mensagem de commit e clique em Push." -ForegroundColor Green
