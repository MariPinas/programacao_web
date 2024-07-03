"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalidadeService = void 0;
const ModalidadePaes_1 = require("../model/ModalidadePaes");
const ModalidadeRepository_1 = require("../repository/ModalidadeRepository");
class ModalidadeService {
    constructor() {
        this.productRepository = new ModalidadeRepository_1.ModalidadeRepository();
    }
    cadastrarModalidade(produtoData) {
        const { name, vegan } = produtoData;
        if (!name || !(typeof vegan == "boolean")) {
            throw new Error("Informações incompletas");
        }
        const produtoEncontrado = this.consultarModalidade(undefined);
        if (produtoEncontrado) {
            throw new Error("Modalidade já cadastrada!!!");
        }
        const novaModalidade = new ModalidadePaes_1.ModalidadePaes(name, vegan);
        this.productRepository.insereModalidade(novaModalidade);
        return novaModalidade;
    }
    consultarModalidade(id) {
        if (id) {
            const idNumber = parseInt(id, 10);
            console.log("Checando modalidade pelo ID: ", idNumber);
            return this.productRepository.filtraModalidadePorId(idNumber);
        }
        console.log(id);
        return undefined;
    }
    getModalidades(ordem) {
        if (ordem === "desc") {
            return this.productRepository.filtraTodasModalidades().sort((a, b) => b.id - a.id);
        }
        return this.productRepository.filtraTodasModalidades().sort((a, b) => a.id - b.id);
    }
    deletarModalidade(id) {
        const product = this.consultarModalidade(id);
        if (!product) {
            throw new Error("Modalidade não encontrada");
        }
        this.productRepository.deletaModalidade(product);
    }
    atualizarModalidade(modalidadeData) {
        const { id, name, vegan } = modalidadeData;
        if (!id || !name || !(typeof vegan == "boolean")) {
            throw new Error("Informações incompletas");
        }
        let modalidadeEncontrado = this.consultarModalidade(id);
        if (!modalidadeEncontrado) {
            throw new Error("modalidade não cadastrada!!!");
        }
        modalidadeEncontrado.id = id;
        modalidadeEncontrado.name = name;
        modalidadeEncontrado.vegano = vegan;
        this.productRepository.atualizaModalidade(modalidadeEncontrado);
        return modalidadeEncontrado;
    }
}
exports.ModalidadeService = ModalidadeService;
