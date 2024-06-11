const ler = require('readline-sync');


let A = parseInt(ler.question("Digite o valor inteiro de A: "));
let B = parseInt(ler.question("Digite o valor inteiro de B: "));

let C;


if (A === B) {
    C = A + B;
} else {
    C = A * B;
}


console.log("O resultado é: " + C);