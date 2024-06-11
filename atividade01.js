const ler = require('readline-sync');

let num1 = parseFloat(ler.question("Digite o primeiro numero: "));
let num2 = parseFloat(ler.question("Digite o segundo numero: "));
let num3 = parseFloat(ler.question("Digite o terceiro numero: "));

let soma = num1 + num2;

if (soma < num3) {
    console.log("A soma de A+B é menor que C");
} else {
    console.log("A soma de A+B é maior ou igual a C");
}
