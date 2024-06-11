const ler = require('readline-sync');

let A = parseInt(ler.question("Digite um numero"));

if (A % 3 === 0) {
    console.log(numero + " é multiplo de 3.");
} else {
    console.log(numero + " não é multiplo de 3.");
}