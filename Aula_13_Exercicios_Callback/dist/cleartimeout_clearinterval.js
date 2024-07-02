"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testClearTimeout = testClearTimeout;
exports.testClearInterval = testClearInterval;
function testClearTimeout() {
    let frase = "Executando o comando.";
    let timeout = setTimeout(function () {
        console.log("Rodando o setTimeout");
    }, 2000);
    frase = "Rodando o clearTimeout";
    if (frase != "Executando o comando.") {
        clearTimeout(timeout);
        console.log(frase);
    }
}
function testClearInterval() {
    let contador = 0;
    const interval = setInterval(() => {
        contador++;
        console.log("Rodando o setInterval");
        if (contador == 3) {
            clearInterval(interval);
        }
    }, 500);
    setTimeout(function () {
        console.log("Intervalo cancelado após 3 execuções.");
    }, 2000);
}
