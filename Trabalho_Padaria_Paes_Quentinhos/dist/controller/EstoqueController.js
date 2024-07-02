"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.atualizarEstoque = exports.deletarEstoque = exports.listaEstoques = exports.pesquisarNoEstoque = exports.adicionaItem = void 0;
const EstoqueService_1 = require("../service/EstoqueService");
const estoqueService = new EstoqueService_1.EstoqueService();
//checar se modalidade ainda existe
const ModalidadeService_1 = require("../service/ModalidadeService");
const modalidadeService = new ModalidadeService_1.ModalidadeService();
function adicionaItem(req, res) {
    try {
        const novoEstoque = estoqueService.adicionarItem(req.body);
        res.status(201).json({
            mensagem: "Item adicionado ao estoque com sucesso!",
            Estoque: novoEstoque
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.adicionaItem = adicionaItem;
function pesquisarNoEstoque(req, res) {
    try {
        const Estoque = estoqueService.consultarItemPorID(req.params.id);
        if (Estoque) {
            res.status(200).json({
                mensagem: "Item encontrado com sucesso no estoque!",
                Estoque: Estoque
            });
        }
        else {
            res.status(404).json({ mensagem: "Estoque não encontrado." });
        }
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.pesquisarNoEstoque = pesquisarNoEstoque;
;
function listaEstoques(req, res) {
    try {
        const modalidadeEncontrada = modalidadeService.getModalidades(req.query.ordem);
        if (modalidadeEncontrada.length !== -1) {
            res.status(200).json(estoqueService.getEstoques(req.query.ordem));
        }
        else {
            res.status(404).json({ mensagem: "Nao existe nenhuma modalidade cadastrada no estoque." });
        }
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.listaEstoques = listaEstoques;
;
function deletarEstoque(req, res) {
    try {
        estoqueService.deletarEstoque(req.body.id, req.body.modalidadeId, req.body.quantidade);
        res.status(200).json({ message: "Estoque deletado com sucesso!" });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.deletarEstoque = deletarEstoque;
;
function atualizarEstoque(req, res) {
    try {
        const id = parseInt(req.body.id);
        console.log("ID: ", id);
        const item = estoqueService.consultarItemPorID(id);
        if (item) {
            const novoEstoque = estoqueService.atualizarEstoque(req.body);
            res.status(201).json({
                mensagem: "Estoque atualizado com sucesso!",
                Estoque: novoEstoque,
            });
        }
        else {
            res.status(400).json({ mensagem: "Item não encontrado. " });
        }
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.atualizarEstoque = atualizarEstoque;
;
