"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendaRepository = void 0;
const globalData_1 = require("../global/globalData");
class VendaRepository {
    insereVenda(novaVenda) {
        globalData_1.globalData.vendaPaesList.push(novaVenda);
        return novaVenda;
    }
    filtraVendaPorId(id) {
        return globalData_1.globalData.vendaPaesList.find(venda => venda.idVenda === id);
    }
}
exports.VendaRepository = VendaRepository;
