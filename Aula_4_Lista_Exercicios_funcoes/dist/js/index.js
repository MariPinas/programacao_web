"use strict";
function maior(...valores) {
    let maior = -1;
    let i;
    for (let i = 0; i < 6; i++) {
        if (valores[i] > maior) {
            maior = valores[i];
        }
    }
    return maior;
}
console.log("Exercicio 1 : ", maior(1, 2, 3, 4, 5, 6));
function par(val) {
    if (val % 2 == 0)
        return true;
    else
        return false;
}
console.log("Exercicio 2: ", par(2), par(7), par(8));
function media(...valores) {
    let i;
    let media = 0;
    for (i = 0; i < 6; i++) {
        media = media + valores[i];
    }
    return media / i;
}
console.log("Exercicio 3: ", media(1, 2, 3, 4, 5, 6), media(2, 6, 9, 10, 60, 1), media(0, 1, 5, 80, 34, 2));
function upper(palavra) {
    return palavra.toUpperCase();
}
console.log("Exercicio 4", upper("hello world"), upper("teste"), upper("vai corinthians"));
function primo(var1) {
    let i;
    for (i = 2; i < var1; i++) {
        if (var1 % i == 0)
            return false;
    }
    return true;
}
console.log("Exercicio 5", primo(2), primo(3), primo(11), primo(14), primo(17));
function inverter(...num) {
    return num.reverse();
}
console.log("Exercicio 6", inverter(1, 2, 3, 4, 5, 6, 7, 8, 9));
function porcentagem(num, p) {
    return num * ((p / 100) + 1);
}
console.log("Exercicio 7", porcentagem(10, 75), porcentagem(20, 55), porcentagem(45, 80));
function invertePalavra(texto) {
    return texto.split('').reverse().toString();
}
console.log("Exercicio 8", invertePalavra("mariana"));
function somaPar(...num) {
    let soma = 0;
    for (let i = 0; i < 4; i++) {
        if (num[i] % 2 == 0) {
            soma = soma + num[i];
        }
    }
    return soma;
}
console.log("Exercicio 9", somaPar(1, 2, 3, 4, 5));
function fatorial(num) {
    if (num == 0)
        return 1;
    return num * fatorial(num - 1);
}
console.log("Exercicio 10", fatorial(2), fatorial(4), fatorial(6));
