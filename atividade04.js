const ler = require('readline-sync');

var num1 = parseFloat(ler.question("digite um numero"));

var resultado;

if (num1 %2 ===0) {

    resultado = num1 + 8
    
} else {

   resultado =  num1 + 10
    
}

console.log("o resultado e " + resultado);