/**********************************************************************************************
 *
 *DESAFIO:  Consumo Médio do automóvel
 *
 *Elabore um programa que possuas as características abaixo:
 *Você deve calcular o consumo médio de um automóvel onde será informada a distância total percorrida (em Km) e o total de combustível consumido (em litros).
 *
 *Entrada: Você receberá dois valores: um valor inteiro X com a distância total percorrida (em Km), e um valor real Y que representa o total de combustível consumido, com um dígito após o ponto decimal.
 *
 *Saída: Exiba o valor que representa o consumo médio do automóvel (3 casas após a vírgula), incluindo no final a mensagem "km/l".
 *
 * Exemplo: entrada = 500 35.0 -> 14.286 km/l
 *
 ********************************************************************************************/
let X = parseInt(gets());
let Y = parseFloat(gets());
let consumoMedio = parseFloat(X / Y).toFixed(3);

console.log(consumoMedio + " km/l");
