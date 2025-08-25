/** EXERCÍCIO
 * 
 * Crie um programa de contagem progressiva. 
 * Peça um número e conte de 0 até esse número, 
 * usando um loop while no console do navegador.
 */

const prompt = require("prompt-sync")();
const numero = Number(prompt("Digite um número maior que zero: "));
let cont = 0;

while (cont <= numero) {
    console.log(`--> ${cont}`);
    cont++;

}