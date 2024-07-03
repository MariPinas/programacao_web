"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstoquePaes = void 0;
let contador = 0;
class EstoquePaes {
    constructor(modalidadeId, quantidade, precoVenda) {
        this.id = this.geraId();
        this.modalidadeID = modalidadeId;
        this.quantidade = quantidade;
        this.precoVenda = precoVenda;
    }
    geraId() {
        return ++contador;
    }
}
exports.EstoquePaes = EstoquePaes;
