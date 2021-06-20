/**********************************************************************************************
 *
 *DESAFIO: Analise de Números
 *
 *Elabore um programa que possuas as características abaixo:
 *Você deve fazer a leitura de 5 valores inteiros. 
 * Mostre quantos valores informados são pares, quantos são ímpares, quantos são positivos e quantos são negativos.
 * 
 *Entrada: Você receberá 5 valores inteiros.
 * 
 *Saída: Exiba a mensagem conforme o exemplo de saída abaixo, sendo uma mensagem por linha e não esquecendo o final de linha após cada uma.
 * 
 * Exemplo: entrada = -5 0 -3 -4 12 -> 3 valor(es) par(es) 2 valor(es) impar(es) 1 valor(es) positivo(s) 3 valor(es) negativo(s)

 ********************************************************************************************/
let num = Array(5);

for (let i = 0; i < num.length; i++) {
  num[i] = parseInt(gets());
}

let positivos = num.filter((value) => value > 0);
let negativos = num.filter((value) => value < 0);
let pares = num.filter((value) => value % 2 == 0);
let impares = num.filter((value) => value % 2 != 0);

console.log(pares.length + " valor(es) par(es)");
console.log(impares.length + " valor(es) impar(es)");
console.log(positivos.length + " valor(es) positivo(s)");
console.log(negativos.length + " valor(es) negativo(s)");
