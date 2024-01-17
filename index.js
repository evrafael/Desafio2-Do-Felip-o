function calcularNivel(vitorias, derrotas) {
    // Calcula o saldo de rankeadas (vitorias - derrotas)
    const saldoVitorias = vitorias - derrotas;
  
    // Determina o nível com base no saldo de vitórias
    let nivel;
  
    if (vitorias < 10) {
      nivel = "Ferro";
    } else if (vitorias <= 20) {
      nivel = "Bronze";
    } else if (vitorias <= 50) {
      nivel = "Prata";
    } else if (vitorias <= 80) {
      nivel = "Ouro";
    } else if (vitorias <= 90) {
      nivel = "Diamante";
    } else if (vitorias <= 100) {
      nivel = "Lendário";
    } else {
      nivel = "Imortal";
    }
  
    // Retorna o resultado em uma string
    return `O jogador tem um saldo de ${saldoVitorias}. Está no nível de ${nivel}.`;
  }
  
  // Exemplo de uso da função
  const resultado = calcularNivel(60, 20);
  console.log(resultado);