/**********************************************************************************************
 *
 *DESAFIO: Quantidade de Números Positivos
 *
 *Elabore um programa que possuas as características abaixo:
 * Crie um programa que leia 6 valores.
 * Você poderá receber valores negativos e/ou positivos como entrada, devendo desconsiderar os valores nulos.
 * Apresente a quantidade de valores positivos digitados.
 *
 *
 *Entrada: Você receberá seis valores, negativos e/ou positivos.
 *
 *Saída: Exiba uma mensagem dizendo quantos valores positivos foram lidos
 * Não esqueça da mensagem "valores positivos" ao final.
 *
 * Exemplo: entrada = 7 -5 6 -3.4 4.6 12 -> 4 valores positivos
 *********************************************************************************************/

let total = 0;
let i = 0;
let valor;

while (i <= 5) {
  valor = parseInt(gets());

  if (valor > 0) {
    total++;
  }

  i++;
}

console.log(total + " " + "valores positivos");
