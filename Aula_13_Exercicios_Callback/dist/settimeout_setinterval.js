"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testTimeout = testTimeout;
exports.testInterval = testInterval;
function exibeText() {
    console.log("Executando o comando.");
}
function testTimeout() {
    console.log("Antes do setTimeout.");
    setTimeout(exibeText, 2000);
    console.log("Depois do setTimeout");
}
function testInterval() {
    console.log("Antes do setInterval.");
    setInterval(exibeText, 3000);
    console.log("Depois do setInterval.");
}
