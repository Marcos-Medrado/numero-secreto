/** EXERCÍCIO
 * 
 * Crie um programa de contagem regressiva. 
 * Peça um número e conte deste número até 0, 
 * usando um loop while no console do navegador.
 */

const prompt = require("prompt-sync")();
let numero = Number(prompt("Digite um número maios que zero: "));


while (numero >= 0) {
    console.log(`--> ${numero}`);
    numero--;


}