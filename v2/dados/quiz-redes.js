/* DADOS DO QUIZ — Redes: DNS, DHCP e Endereçamento IP */
const QUIZ_DADOS = {
  id: "redes-basico",
  titulo: "Redes: DNS, DHCP e IP",
  descricao: "8 questões sobre os protocolos e conceitos que fazem a internet funcionar.",
  tempoPorQuestao: 45,
  questoes: [
    { pergunta: "Qual é a função do DNS?",
      opcoes: [
        "Traduzir nomes de domínio em endereços IP",
        "Atribuir endereços IP automaticamente",
        "Criptografar o tráfego da rede",
        "Bloquear sites perigosos"
      ],
      correta: "Traduzir nomes de domínio em endereços IP",
      explicacao: "O DNS é a \"agenda telefônica\" da internet: você digita google.com e ele descobre o IP do servidor." },
    { pergunta: "O que o protocolo DHCP faz na rede?",
      opcoes: [
        "Atribui endereços IP automaticamente aos dispositivos",
        "Converte nomes em endereços IP",
        "Gerencia as senhas do Wi-Fi",
        "Acelera a velocidade da conexão"
      ],
      correta: "Atribui endereços IP automaticamente aos dispositivos",
      explicacao: "Sem o DHCP, você teria que configurar manualmente o IP de cada celular e computador que entra na rede." },
    { pergunta: "Qual destas faixas é de IP PRIVADO?",
      opcoes: [
        "192.168.0.0 a 192.168.255.255",
        "8.8.8.0 a 8.8.8.255",
        "200.150.0.0 a 200.150.255.255",
        "1.1.1.0 a 1.1.1.255"
      ],
      correta: "192.168.0.0 a 192.168.255.255",
      explicacao: "As faixas privadas são 10.x.x.x, 172.16–31.x.x e 192.168.x.x — válidas só dentro da rede local." },
    { pergunta: "O comando tracert (ou traceroute) serve para:",
      opcoes: [
        "Mostrar o caminho de roteadores até o destino",
        "Medir a velocidade do download",
        "Listar os dispositivos da rede local",
        "Trocar o endereço IP da máquina"
      ],
      correta: "Mostrar o caminho de roteadores até o destino",
      explicacao: "Cada linha do tracert é um \"salto\": um roteador que o pacote atravessa no caminho até o servidor." },
    { pergunta: "A porta padrão do HTTPS é a:",
      opcoes: ["443", "80", "21", "53"],
      correta: "443",
      explicacao: "HTTP usa a porta 80; o HTTPS (com criptografia) usa a 443. A porta 53 é do DNS e a 21 do FTP." },
    { pergunta: "Quando você executa \"ping 8.8.8.8\" com sucesso, isso prova que:",
      opcoes: [
        "Há conectividade com a internet (o DNS público do Google respondeu)",
        "O Wi-Fi está com sinal máximo",
        "O DNS da sua rede está funcionando",
        "Seu IP é público"
      ],
      correta: "Há conectividade com a internet (o DNS público do Google respondeu)",
      explicacao: "8.8.8.8 é um IP direto — se ele responde mas sites não abrem, o problema provavelmente é o DNS, não a conexão." },
    { pergunta: "O que o NAT permite?",
      opcoes: [
        "Que vários dispositivos compartilhem um único IP público",
        "Que a rede funcione sem roteador",
        "Que o IP privado seja acessado de qualquer lugar",
        "Que dois dispositivos tenham o mesmo IP privado na mesma rede"
      ],
      correta: "Que vários dispositivos compartilhem um único IP público",
      explicacao: "O roteador \"traduz\" os IPs privados da casa para o único IP público da operadora — por isso todos navegam ao mesmo tempo." },
    { pergunta: "A máscara de sub-rede 255.255.255.0 indica que:",
      opcoes: [
        "Os três primeiros octetos identificam a rede e o último, o host",
        "A rede aceita apenas 255 dispositivos ao todo",
        "Todos os IPs são públicos",
        "O roteador está bloqueando conexões"
      ],
      correta: "Os três primeiros octetos identificam a rede e o último, o host",
      explicacao: "Em 192.168.1.50 com máscara 255.255.255.0, a rede é 192.168.1 e o host é o 50 — com até 254 endereços utilizáveis." }
  ]
};
