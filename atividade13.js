const ler = require('readline-sync');


const precoAlcool = 4.70;
const precoGasolina = 5.86;


const tipoCombustivel = ler.question('Digite o tipo de combustível (A - alcool, G - gasolina): ').toUpperCase();
const quantidadeLitros = parseFloat(ler.question('Digite a quantidade de litros: '));


let precoPorLitro;
let descontoPorLitro;


if (tipoCombustivel === 'A') {
    precoPorLitro = precoAlcool;
    if (quantidadeLitros <= 25) {
        descontoPorLitro = 0.02; 
    } else {
        descontoPorLitro = 0.04; 
    }
} else if (tipoCombustivel === 'g') {
    precoPorLitro = precoGasolina;
    if (quantidadeLitros <= 25) {
        descontoPorLitro = 0.03; 
    } else {
        descontoPorLitro = 0.05; 
    }
} else {
    console.log('Tipo de combustivel invalido');
    process.exit(1); // Sair do programa com erro
}


const descontoTotal = quantidadeLitros * precoPorLitro * descontoPorLitro;
const valorTotalSemDesconto = quantidadeLitros * precoPorLitro;
const valorTotalComDesconto = valorTotalSemDesconto - descontoTotal;

// Exibir resultado
console.log(`O valor final a pagar e R$ ${valorTotalComDesconto.toFixed(2)}`);
