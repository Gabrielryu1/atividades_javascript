const ler = require('readline-sync');


const letra = ler.question('Digite uma letra: ').toLowerCase();


if (letra.length !== 1 || !/[a-z]/.test(letra)) {
    console.log('Entrada invalida. POR FAVOR, digite uma única letra do alfabeto.');
    process.exit(1); 
}


const vogais = ['a', 'e', 'i', 'o', 'u'];
if (vogais.includes(letra)) {
    console.log('A letra e uma vogal.');
} else {
    console.log('A letra e uma consoante.');
}
