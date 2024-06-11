const ler = require('readline-sync');


let A = parseInt(ler.question("Digite um numero: "));
let B = parseInt(ler.question("Digite o segundo numero: "));
let C = parseInt(ler.question("Digite o ultimo numero: "));

 
 if (A !== B && A !== C && B !== C) {

    var maior = Math.max(A,B,C);
  
    var menor = Math.min(A,B,C);

    var meio = (A+ B + C) - maior - menor;

    
    console.log("Valores em ordem decrescente:");
    console.log(maior);
    console.log(meio);
    console.log(menor);
} else {
    console.log("Os valores digitados devem ser diferentes.");
}
