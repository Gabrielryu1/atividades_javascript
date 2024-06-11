const readline = require('readline-sync');

const precoEtiqueta = parseFloat(readline.question("Digite o preco do produto: "));
const codigoCondicao = parseInt(readline.question("Digite o codigo da condicao de pagamento: "));

let precoFinal;

switch (codigoCondicao) {
    case 1:
        precoFinal = precoEtiqueta * 0.9; 
        break;
    case 2:
        precoFinal = precoEtiqueta * 0.85;
        break;
    case 3:
        precoFinal = precoEtiqueta; 
        break;
    case 4:
        precoFinal = precoEtiqueta * 1.1; 
        break;
    default:
        console.log("Código de condição inválido!");
        return;
}

console.log("Preço a ser pago: $", precoFinal.toFixed(2));
