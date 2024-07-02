"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstoqueService = void 0;
const EstoqueRepository_1 = require("./../repository/EstoqueRepository");
const EstoquePaes_1 = require("./../model/EstoquePaes");
//Checar se a modalidade existe
const ModalidadeService_1 = require("../service/ModalidadeService");
const ModalidadeRepository_1 = require("../repository/ModalidadeRepository");
const modalidadeService = new ModalidadeService_1.ModalidadeService();
const modalidadeRepository = new ModalidadeRepository_1.ModalidadeRepository();
class EstoqueService {
    constructor() {
        this.estoqueRepository = new EstoqueRepository_1.EstoqueRepository();
    }
    adicionarItem(EstoqueData) {
        const { id, modalidadeID, quantidade, precoVenda } = EstoqueData;
        if (!modalidadeID || !quantidade || !precoVenda) {
            throw new Error("Informações incompletas");
        }
        const ModalidadeEncontrada = this.estoqueRepository.filtraProdutoPorId(modalidadeID);
        if (ModalidadeEncontrada) {
            throw new Error("Nao foi possivel adicionar item, o item já esta cadastrado"); //verificar
        }
        const ModalidadeExiste = modalidadeService.consultarModalidade(modalidadeID);
        if (!ModalidadeExiste) {
            console.log("voce digitou:" || modalidadeID);
            console.log("mas foi retornado: " || ModalidadeExiste);
            throw new Error("Modalidade nao existe");
        }
        const novoEstoque = new EstoquePaes_1.EstoquePaes(modalidadeID, quantidade, precoVenda);
        this.estoqueRepository.insereItem(novoEstoque);
        return novoEstoque;
    }
    consultarItemPorID(id) {
        if (id) {
            const idNumber = parseInt(id, 10);
            console.log("Checando estoque pelo ID: ", idNumber);
            return this.estoqueRepository.filtraProdutoPorId(idNumber);
        }
        console.log("Nao obteve o ID");
        return undefined;
    }
    getEstoques(ordem) {
        return this.estoqueRepository.filtraTodosEstoques().sort((a, b) => a.id - b.id);
    }
    deletarEstoque(id, modalidadeID, quantidade) {
        const Estoque = this.consultarItemPorID(id);
        if (!Estoque) {
            throw new Error("Estoque não encontrado");
        }
        this.estoqueRepository.deletaEstoque(Estoque);
    }
    atualizarEstoque(EstoqueData) {
        const { id, modalidadeId, quantidade, precoVenda } = EstoqueData;
        if (!id || !modalidadeId || !quantidade || !precoVenda) {
            throw new Error("Informações incompletas");
        }
        let EstoqueEncontrado = this.consultarItemPorID(id);
        if (!EstoqueEncontrado) {
            throw new Error("Produto não cadastrado!!!");
        }
        EstoqueEncontrado.quantidade += quantidade;
        EstoqueEncontrado.precoVenda = precoVenda;
        this.estoqueRepository.atualizaEstoque(EstoqueEncontrado);
        return EstoqueEncontrado;
    }
}
exports.EstoqueService = EstoqueService;
