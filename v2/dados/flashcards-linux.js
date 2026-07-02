/* ============================================================
   DADOS DOS FLASHCARDS — Comandos do Linux Mint
   Para criar outro baralho, copie este arquivo e troque as cartas.
   ============================================================ */
const FLASHCARDS_DADOS = {
  id: "linux-comandos",
  titulo: "Comandos do Linux Mint",
  descricao: "Toque na carta para ver a resposta. Use as setas para navegar.",

  cartas: [
    { frente: "ls -la", verso: "Lista todos os arquivos do diretório, incluindo os ocultos, mostrando permissões, dono e tamanho." },
    { frente: "cd ~",   verso: "Vai direto para o diretório home do usuário (a sua pasta pessoal)." },
    { frente: "mkdir -p pasta/sub", verso: "Cria o diretório e os subdiretórios de uma vez só, mesmo que o caminho ainda não exista." },
    { frente: "rm -rf pasta/", verso: "Remove o diretório e TODO o conteúdo dele, sem pedir confirmação. Use com muito cuidado!" },
    { frente: "chmod 755 arquivo", verso: "Define permissões: dono pode tudo (rwx); grupo e outros podem ler e executar (r-x)." },
    { frente: "sudo apt update && sudo apt upgrade", verso: "Atualiza a lista de pacotes disponíveis e instala as atualizações do sistema." },
    { frente: "cat /etc/os-release", verso: "Mostra as informações da distribuição instalada: nome, versão e codinome." },
    { frente: "grep -r \"texto\" .", verso: "Procura a palavra \"texto\" dentro de todos os arquivos do diretório atual e subpastas." },
    { frente: "ps aux", verso: "Lista todos os processos em execução no sistema, com usuário, consumo de CPU e memória." },
    { frente: "top", verso: "Abre o monitor de processos em tempo real. Aperte Q para sair." }
  ]
};
