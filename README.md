# Repositório de Soluções do Estágio - Target Sistemas

Este repositório contém as soluções para os desafios propostos durante o recrutamento de estágio na Target Sistemas. As soluções foram implementadas utilizando a linguagem **JavaScript**.

## Descrição dos Desafios

Os desafios abordam conceitos fundamentais da programação, como manipulação de arrays, loops, cálculos e lógica de programação. Cada solução foi implementada de forma simples, objetiva e eficiente, com o objetivo de facilitar o entendimento dos conceitos envolvidos.

## Desafios e Soluções

### 1. **Soma de Números**

**Descrição:**  
Este desafio solicita a soma de uma sequência de números inteiros a partir de um índice fornecido. O programa começa com a variável `K` igual a 0 e, enquanto o valor de `K` for menor que o índice dado (13 neste caso), o valor de `K` é incrementado e somado à variável `SOMA`.

**Objetivo:** Calcular o valor total de `SOMA` ao final do processamento.

**Solução:**  
A soma dos números de 1 a 13 resulta em **91**.

[Veja a solução completa aqui.](https://github.com/Kayan33/teste-tecnico-targetsistemas/blob/main/calcularSoma/calcularSoma.js)

---

### 2. **Sequência de Fibonacci**

**Descrição:**  
Este desafio envolve a criação de um programa que calcula a sequência de Fibonacci e verifica se um número informado pertence a essa sequência. A sequência inicia com 0 e 1, e cada número subsequente é a soma dos dois números anteriores.

**Objetivo:** Verificar se um número informado pertence à sequência de Fibonacci.

**Solução:**  
O programa calcula a sequência até o número informado e retorna uma mensagem indicando se o número pertence ou não à sequência.

[Veja a solução completa aqui.](https://github.com/Kayan33/teste-tecnico-targetsistemas/blob/main/Fibonacci/fibonacci.js)

---

### 3. **Estatísticas de Faturamento**

**Descrição:**  
Dado um vetor com os valores de faturamento diário de uma distribuidora, o desafio é calcular:
- O menor valor de faturamento de um dia do mês.
- O maior valor de faturamento de um dia do mês.
- O número de dias com faturamento superior à média mensal.

**Importante:**  
Os dias sem faturamento (como finais de semana e feriados) devem ser ignorados no cálculo da média.

**Solução:**  
A solução calcula as estatísticas de faturamento considerando apenas os dias úteis com faturamento.

[Veja a solução completa aqui.](https://github.com/Kayan33/teste-tecnico-targetsistemas/blob/main/faturamento/faturamento.js)

---

### 4. **Percentual de Faturamento por Estado**

**Descrição:**  
Este desafio calcula o percentual de faturamento de cada estado dentro do valor total mensal de uma distribuidora. O valor do faturamento de cada estado é fornecido.

**Estados e valores:**
- SP – R$67.836,43
- RJ – R$36.678,66
- MG – R$29.229,88
- ES – R$27.165,48
- Outros – R$19.849,53

**Objetivo:**  
Calcular o percentual de cada estado em relação ao faturamento total.

[Veja a solução completa aqui.](https://github.com/Kayan33/teste-tecnico-targetsistemas/blob/main/faturamentoEstado/faturamentoEstado.js)

---

### 5. **Inverter String**

**Descrição:**  
Neste desafio, é necessário escrever um programa que inverta os caracteres de uma string fornecida.

**Importante:**  
Evite o uso de funções prontas como `reverse`.

**Objetivo:**  
O programa deve inverter a string e exibir o resultado.

[Veja a solução completa aqui.](https://github.com/Kayan33/teste-tecnico-targetsistemas/blob/main/inversaoCaracteres/inversaoCaracteres.js)

---

## Como Rodar o Código

1. Clone o repositório:

   ```bash
   git clone https://github.com/Kayan33/teste-tecnico-targetsistemas.git
