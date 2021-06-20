/**********************************************************************************************
 *
 *DESAFIO:  Contagem de Cédulas
 *
 *Elabore um programa que possuas as características abaixo:
 *Faça a leitura de um valor inteiro. 
 * Calcule o menor número de notas possíveis (cédulas) onde o valor pode ser decomposto. 
 * As notas que você deve considerar são de 100, 50, 20, 10, 5, 2 e 1. 
 * Na sequência mostre o valor lido e a relação de notas necessárias.
 * 
 *Entrada: Você receberá um valor inteiro N (0 < N < 1000000).
 * 
 *Saída: Exiba o valor lido e a quantidade mínima de notas de cada tipo necessárias.
 * Após cada linha deve ser imprimido o fim de linha.
 * 
 * Exemplo: entrada = 576 -> 576 
                              5 nota(s) de R$ 100,00
                              1 nota(s) de R$ 50,00
                              1 nota(s) de R$ 20,00
                              0 nota(s) de R$ 10,00
                              1 nota(s) de R$ 5,00
                              0 nota(s) de R$ 2,00
                              1 nota(s) de R$ 1,00

 ********************************************************************************************/

let notas = [100, 50, 20, 10, 5, 2, 1];
let nnotas = [0, 0, 0, 0, 0, 0, 0];
let valor = parseInt(gets());
let resto = valor;

while (resto >= 1) {
  let nota = notas.findIndex((value) => value <= resto);
  nnotas[nota] = Math.trunc(resto / notas[nota]);
  resto = resto % notas[nota];
}

console.log(valor);
console.log(nnotas[0] + " nota(s) de R$ 100,00");
console.log(nnotas[1] + " nota(s) de R$ 50,00");
console.log(nnotas[2] + " nota(s) de R$ 20,00");
console.log(nnotas[3] + " nota(s) de R$ 10,00");
console.log(nnotas[4] + " nota(s) de R$ 5,00");
console.log(nnotas[5] + " nota(s) de R$ 2,00");
console.log(nnotas[6] + " nota(s) de R$ 1,00");
