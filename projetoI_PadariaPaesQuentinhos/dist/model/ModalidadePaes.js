"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalidadePaes = void 0;
let contador = 0;
class ModalidadePaes {
    constructor(name, vegan) {
        this.id = this.geraId();
        this.name = name;
        this.vegano = vegan;
    }
    geraId() {
        return ++contador;
    }
}
exports.ModalidadePaes = ModalidadePaes;
