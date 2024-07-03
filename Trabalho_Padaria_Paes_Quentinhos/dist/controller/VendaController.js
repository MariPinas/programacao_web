"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.realizarVenda = void 0;
const VendaService_1 = require("../service/VendaService");
const vendaService = new VendaService_1.VendaService();
function realizarVenda(req, res) {
    try {
        const novaVenda = vendaService.inserirVenda(req.body);
        return res.status(200).json({ novaVenda });
    }
    catch (error) {
        return res.status(400).json({ erro: error.message });
    }
}
exports.realizarVenda = realizarVenda;
