"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ave = void 0;
class Ave {
    constructor(nome) {
        this.nome = nome;
    }
    ehLactante() {
        return false;
    }
    ehOviparo() {
        return true;
    }
}
exports.Ave = Ave;
