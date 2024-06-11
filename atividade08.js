const ler = require('readline-sync');

let A = parseFloat(ler.question("Digite um numero"));
let B = parseFloat(ler.question("digite outro numero"));

var resultado = A + B;

if (resultado > 20) {
    resultado += 8
    
} else {
    resultado -=5;
    
}

console.log("Resultado: " + resultado);