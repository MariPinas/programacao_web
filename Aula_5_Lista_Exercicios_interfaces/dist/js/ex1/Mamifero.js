"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mamifero = void 0;
class Mamifero {
    constructor(nome) {
        this.nome = nome;
    }
    ehLactante() {
        return true;
    }
    ehOviparo() {
        return this.nome == "Ornitorrinco";
    }
}
exports.Mamifero = Mamifero;
