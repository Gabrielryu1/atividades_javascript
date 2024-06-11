const ler = require('readline-sync');

let T1 = ler.question("Digite o numero de gols do time um")
let T2 = ler.question("Digite o numero de gols do time dois")


if (T1>T2) {
    console.log("O time um ganhou do time dois");
    
} else if(T1<T2){
    console.log("o time dois ganhou do time 1");
}else{
console.log("o jogo ficou empatado");
}