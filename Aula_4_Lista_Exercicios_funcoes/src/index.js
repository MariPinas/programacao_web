function maior() {
    var valores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        valores[_i] = arguments[_i];
    }
    var maior = -1;
    var i;
    for (var i_1 = 0; i_1 < 6; i_1++) {
        if (valores[i_1] > maior) {
            maior = valores[i_1];
        }
    }
    return maior;
}
//console.log ("Exercicio 1 : " , maior(1,2,3,4,5,6));
function par(val) {
    if (val % 2 == 0)
        return true;
    else
        return false;
}
//console.log ("Exercicio 2: ", par(2));
function media() {
    var valores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        valores[_i] = arguments[_i];
    }
    var i;
    var media = 0;
    for (i = 0; i < 6; i++) {
        media = media + valores[i];
    }
    return media / i;
}
console.log("Exercicio 3: ", media(1, 2, 3, 4, 5, 6));
