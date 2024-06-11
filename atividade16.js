const readlineSync = require('readline-sync');

const nomeFuncionario = readlineSync.question('Digite o nome do funcionario: ');

const quantidadeprodutos = parseInt(readlineSync.question('Digite a quantidade de produtos vendidos: '), 10);


let comissaoporproduto;


if (quantidadeprodutos > 450) {
    comissaoporproduto = 10.00;
} else if (quantidadeprodutos > 200) {
    comissaoporproduto = 7.50;
} else {
    comissaoporproduto = 5.00;
}


const comissaoTotal = quantidadeprodutos * comissaoporproduto;

console.log(`O funcionário ${nomeFuncionario} vai receber uma comissão total de $ ${comissaoTotal.toFixed(2)}`);
