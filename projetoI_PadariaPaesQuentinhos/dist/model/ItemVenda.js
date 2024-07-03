"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemVenda = void 0;
let contador = 0;
class itemVenda {
    constructor(estoquePaesId, quantidade, nome) {
        this.estoquePaesId = this.geraId();
        this.quantidade = quantidade;
        this.nome = nome;
    }
    geraId() {
        return ++contador;
    }
}
exports.itemVenda = itemVenda;
