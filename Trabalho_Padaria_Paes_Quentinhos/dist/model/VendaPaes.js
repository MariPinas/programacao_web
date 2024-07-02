"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendaPaes = void 0;
class VendaPaes {
    constructor(cpf, itens, total) {
        this.cpf = cpf;
        this.itens = itens;
        this.total = total;
        this.idVenda = this.geraId();
    }
    geraId() {
        return Date.now();
    }
}
exports.VendaPaes = VendaPaes;
