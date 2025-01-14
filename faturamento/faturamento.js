// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.



const fs = require('fs');

const faturamentos = JSON.parse(fs.readFileSync('../faturamento.json', 'utf8'));

function Faturamento(faturamentos) {
  let somaF = 0;
  let diasComFaturamento = 0
  let diasAcimaDaMedia = 0

  let menorF = Infinity
  let maiorF = -Infinity

  for (let i = 0; i < faturamentos.length; i++) {
    const valor = faturamentos[i].valor;

    if (valor > 0) {
      somaF += valor;
      diasComFaturamento++;


      if (valor < menorF) {
        menorF = valor;
      }

      if (valor > maiorF) {
        maiorF = valor;
      }
    }
  }

  let mediaMensal = somaF / diasComFaturamento;

  for (let i = 0; i < faturamentos.length; i++) {
    if (faturamentos[i].valor > mediaMensal) {
      diasAcimaDaMedia++;
    }
  }

  menorF = menorF === Infinity ? 0 : menorF.toLocaleString('pt-BR')
  maiorF = maiorF === -Infinity ? 0 : maiorF.toLocaleString('pt-BR')

  console.log(`Menor faturamento: R$ ${menorF}`)
  console.log(`Maior faturamento: R$ ${maiorF}`)
  console.log(`Dias com faturamento superior à média mensal: ${diasAcimaDaMedia}`)
}

Faturamento(faturamentos);
