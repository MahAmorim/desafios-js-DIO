/**********************************************************************************************
 *
 *DESAFIO: Exibindo Números Pares
 *
 *
 *Elabore um programa que possuas as características abaixo:
 *Crie um programa que leia um número e mostre os números pares até esse número, inclusive ele mesmo.
 *
 *Entrada: Você receberá 1 valor inteiro N, onde N > 0.
 *
 *Saída: Exiba todos os números pares até o valor de entrada, sendo um em cada linha.
 *
 * Exemplo: entrada = 6 -> 2 4 6
 ********************************************************************************************/

var valor = 0;

valor = gets();

for (let num = 1; num <= valor; num++) {
  if (num % 2 === 0) {
    console.log(num);
  }
}
