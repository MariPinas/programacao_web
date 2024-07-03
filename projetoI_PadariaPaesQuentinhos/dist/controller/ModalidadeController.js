"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.atualizarModalidade = exports.deletarModalidade = exports.listaModalidades = exports.pesquisarTipoPao = exports.cadastrarModalidade = void 0;
const ModalidadeService_1 = require("../service/ModalidadeService");
const modalidadeService = new ModalidadeService_1.ModalidadeService();
function cadastrarModalidade(req, res) {
    try {
        const novaModalidade = modalidadeService.cadastrarModalidade(req.body);
        res.status(200).json({
            mensagem: "Modalidade adicionada com sucesso!",
            produto: novaModalidade
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.cadastrarModalidade = cadastrarModalidade;
;
function pesquisarTipoPao(req, res) {
    try {
        const tipoPao = modalidadeService.consultarModalidade(req.params.id);
        if (tipoPao) {
            res.status(200).json({
                mensagem: "Tipo de pao encontrado com sucesso!",
                produto: tipoPao
            });
        }
        else {
            res.status(404).json({ mensagem: "Tipo de pao não encontrado." });
        }
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.pesquisarTipoPao = pesquisarTipoPao;
;
function listaModalidades(req, res) {
    try {
        res.status(200).json(modalidadeService.getModalidades(req.query.ordem));
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.listaModalidades = listaModalidades;
;
function deletarModalidade(req, res) {
    try {
        modalidadeService.deletarModalidade(req.params.id);
        res.status(200).json({ message: "Modalidade deletado com sucesso!" });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.deletarModalidade = deletarModalidade;
;
function atualizarModalidade(req, res) {
    try {
        const tipoPao = modalidadeService.atualizarModalidade(req.body);
        res.status(201).json({
            mensagem: "Modalidade atualizado com sucesso!",
            produto: tipoPao
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.atualizarModalidade = atualizarModalidade;
;
