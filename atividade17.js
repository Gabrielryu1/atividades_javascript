const ler = require('readline-sync');

const idadehomem1 = parseInt(ler.question('Digite a idade do primeiro homem: '), 10);
const idadehomem2 = parseInt(ler.question('Digite a idade do segundo homem: '), 10);

const idademulher1 = parseInt(ler.question('Digite a idade da primeira mulher: '), 10);
const idademulher2 = parseInt(ler.question('Digite a idade da segunda mulher: '), 10);

const homemMaisVelho = Math.max(idadehomem1, idadehomem2);
const homemMaisNovo = Math.min(idadehomem1, idadehomem2);

const mulherMaisVelha = Math.max(idademulher1, idademulher2);
const mulherMaisNova = Math.min(idademulher1, idademulher2);

const somaIdades = homemMaisVelho + mulherMaisNova;

const produtoIdades = homemMaisNovo * mulherMaisVelha;

console.log(`a soma das idades do homem mais velho com a mulher mais nova e: ${somaIdades}`);
console.log(`o produto das idades do homem mais novo com a mulher mais velha é: ${produtoIdades}`);
