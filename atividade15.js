const ler = require('readline-sync');
const valormeta=1.400;

let funcionario = ler.question("Digite o valor total que voce fez de vendas:  ");

if (funcionario >=1.400) {
    console.log("Parabens voce bateu a meta");
} else {
    console.log("infelizmente nao bateu");
}