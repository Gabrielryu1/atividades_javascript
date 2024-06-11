const readline = require('readline-sync');

const peso = parseFloat(readline.question('Digite o peso (em kg): '));
const altura = parseFloat(readline.question('Digite a altura (em metros): '));

const imc = peso / (altura * altura);

let condicao;

if (imc < 18.5) {
    condicao = "Abaixo do peso";
} else if (imc >= 18.5 && imc < 25) {
    condicao = "Peso normal";
} else if (imc >= 25 && imc < 30) {
    condicao = "Acima do peso";
} else {
    condicao = "Obeso";
}

console.log("IMC:", imc.toFixed(2));
console.log("Condição:", condicao);

