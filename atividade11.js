const ler = require('readline-sync');


let numero = parseInt(ler.question("Digite um numero: "));
if (numero % 10 === 0) {
    console.log(numero + " e divisivel por 10.");
}

else if (numero % 5 === 0) {
    console.log(numero + " e divisivel por 5, mas nao por 10.");
}

else if (numero % 2 === 0) {
    console.log(numero + " e divisível por 2, mas nao por 5 nem por 10.");
}

else {
    console.log(numero + " nao e divisivel por 10, por 5 nem por 2.");
}
