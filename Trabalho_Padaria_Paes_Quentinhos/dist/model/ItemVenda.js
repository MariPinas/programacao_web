"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemVenda = void 0;
class itemVenda {
    constructor(estoquePaes, quantidade, nome) {
        this.quantidade = quantidade;
        this.estoquePaesId = this.geraId();
    }
    geraId() {
        return Date.now();
    }
}
exports.itemVenda = itemVenda;
