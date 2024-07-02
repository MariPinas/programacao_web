"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalData = exports.globalClass = void 0;
//classe global para juntar/ligar todos arrays em uma classe e depois instanciar
class globalClass {
    constructor() {
        this.modalidadeList = [];
        this.estoqueList = [];
        this.itemVendaList = [];
        this.vendaPaesList = [];
    }
}
exports.globalClass = globalClass;
//instancia que vai conter todos os arrays
exports.globalData = new globalClass();
