const ler = require('readline-sync');


let salario = parseFloat(ler.question("Digite o salario bruto: "));
let Prestacao = parseFloat(ler.question("Digite o valor da prestação: "));


let limitePrestacao = salario * 0.25;


if (Prestacao <= limitePrestacao) {
    console.log("Emprestimo pode ser concedido.");
} else {
    console.log("Emprestimo nao pode ser concedido.");
}
