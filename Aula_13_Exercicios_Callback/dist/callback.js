"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imprimir = imprimir;
exports.concatenar = concatenar;
exports.somar = somar;
function imprimir(value) {
    console.log("A operação efetuada resultou em: " + value);
}
function concatenar(a, b, callback) {
    var op = a + " " + b;
    callback(op);
}
function somar(a, b, callback) {
    var op = a + b;
    callback(op);
}
