/**
 * Verifique se um número digitado pelo usuário é positivo ou
 * negativo. Mostre um alerta informando.
 */

const prompt = require("prompt-sync")();

const numero = Number(prompt("Informe um número: "));

let alerta = "";
if (numero > 0) {
    alerta = `O número ${numero} é positovo.`;
} else if (numero < 0) {
    alerta = `O número ${numero} é negativo.`;
} else {
    alerta = "O número digitado é o ZERO!"
}

console.log(alerta);