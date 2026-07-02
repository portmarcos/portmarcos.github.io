# Como receber os resultados dos quizzes no Google Sheets

## Passo 1 — Criar a planilha
1. Acesse sheets.google.com e crie uma planilha nova.
2. Dê um nome, por exemplo: **Resultados — Portal**.

## Passo 2 — Colar o código
1. Na planilha, abra **Extensões → Apps Script**.
2. Apague o que estiver lá e cole TODO o conteúdo do arquivo `APPS-SCRIPT.gs`.
3. Clique no ícone de salvar (💾).

## Passo 3 — Implantar
1. Clique em **Implantar → Nova implantação**.
2. Em "Tipo", escolha **App da Web**.
3. Configure:
   - Executar como: **Eu** (sua conta)
   - Quem pode acessar: **Qualquer pessoa**
4. Clique em **Implantar** e autorize com sua conta Google.
5. **Copie a URL** que aparece (termina em `/exec`).

## Passo 4 — Conectar o site
1. Abra o arquivo `assets/js/config-sheets.js`.
2. Troque `COLE_AQUI_URL_DO_APPS_SCRIPT` pela URL copiada
   (mantenha as aspas).
3. Suba o arquivo atualizado no GitHub.

## Pronto!
A partir daí, toda vez que um aluno terminar um quiz, vai aparecer
uma linha nova na aba **Resultados** com: data, atividade, nome,
turma, acertos e porcentagem.

> Dica: se um dia você mudar o código do Apps Script, é preciso
> implantar de novo (Implantar → Gerenciar implantações → editar →
> Nova versão).
