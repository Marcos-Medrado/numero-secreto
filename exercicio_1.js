/**
 * Pergunte ao usuário qual é o dia da semana. 
 * Se a resposta for "Sábado" ou "Domingo", 
 * mostre "Bom fim de semana!". Caso contrário, 
 * mostre "Boa semana!".
 */

const prompt = require("prompt-sync")();

let diaDaSemana = prompt("Informe o dia da semana: ");
let mensagem = "";

if (diaDaSemana.toLowerCase() == "sábado" || diaDaSemana.toLowerCase() == "domingo") {
    mensagem = ("Bom fim de semana!");
} else {
    mensagem = ("Boa semana!");
}
console.log(mensagem);
