"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendaService = void 0;
const VendaPaes_1 = require("../model/VendaPaes");
const VendaRepository_1 = require("../repository/VendaRepository");
const ItemVenda_1 = require("../model/ItemVenda");
const globalData_1 = require("../global/globalData");
class VendaService {
    constructor() {
        this.vendaRepository = new VendaRepository_1.VendaRepository();
    }
    inserirVenda(vendaData) {
        const { cpf, itens } = vendaData;
        if (!cpf || !itens || !Array.isArray(itens)) { //verificar se colocou as informacoes
            throw new Error("Informações incompletas");
        }
        const novaVenda = this.processarVenda(cpf, itens);
        return novaVenda;
    }
    processarVenda(cpf, itens) {
        let resumoVenda = [];
        let total = 0;
        for (const item of itens) {
            const estoqueItem = globalData_1.globalData.estoqueList.find((estoque) => estoque.id === item.estoquePaesID);
            const nomeItem = globalData_1.globalData.modalidadeList.find((modalidade) => modalidade.id === (estoqueItem === null || estoqueItem === void 0 ? void 0 : estoqueItem.modalidadeID));
            if (!estoqueItem) {
                throw new Error(`Item com ID ${item.estoquePaesID} não encontrado`);
            }
            if (!nomeItem) {
                throw new Error(`Nome de item '${item.nome}' não encontrado em modalidades`);
            }
            if (estoqueItem.quantidade < item.quantidade) {
                throw new Error(`Quantidade solicitada ultrapassa a quantidade em estoque do item ${estoqueItem.modalidadeID}`);
            }
            const quantidadeVenda = item.quantidade;
            estoqueItem.quantidade -= quantidadeVenda;
            total += quantidadeVenda * estoqueItem.precoVenda;
            resumoVenda.push(new ItemVenda_1.itemVenda(estoqueItem.id, quantidadeVenda, nomeItem.name));
        }
        const novaVenda = new VendaPaes_1.VendaPaes(cpf, resumoVenda, total);
        return this.vendaRepository.insereVenda(novaVenda);
    }
    recuperarVenda(id) {
        if (id) {
            const idNumber = parseInt(id, 10);
            console.log("Checando Venda pelo ID: ", idNumber);
            return this.vendaRepository.filtraVendaPorId(idNumber);
        }
        console.log(id);
        return undefined;
    }
}
exports.VendaService = VendaService;
