// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

function pertenceFibonacci(n) {
  let a = 0, b = 1;

  if (n === a || n === b) {
    console.log(`${n} pertence à sequência de Fibonacci.`);
    return;
  }
  while (b <= n) {
    let temp = a + b;
    a = b;
    b = temp;

    if (b === n) {
      console.log(`${n} pertence à sequência de Fibonacci.`);
      return;
    }
  }
  console.log(`${n} não pertence à sequência de Fibonacci.`);
}


Fibonacci(13);
Fibonacci(14);

