"use strict";
/* export function imprimir(value: string):void{
    console.log(value);
}

export function reverte(str, callback: (param:string)=>void):void{
    let op = str;
    callback(op);
}
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.exibeFrase = exports.reverterString = void 0;
function reverterString(s, callback) {
    const op = s.split('').reverse().join('');
    const resultado = callback(op);
    console.log(resultado);
}
exports.reverterString = reverterString;
function exibeFrase(frase) {
    return `A INVERSÃO DA SETENÇA RESULTOU EM: ${frase.toUpperCase()}`;
}
exports.exibeFrase = exibeFrase;
