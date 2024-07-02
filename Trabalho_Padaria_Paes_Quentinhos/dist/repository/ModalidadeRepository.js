"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalidadeRepository = void 0;
const globalData_1 = require("../global/globalData");
class ModalidadeRepository {
    insereModalidade(tipoPao) {
        globalData_1.globalData.modalidadeList.push(tipoPao);
    }
    filtraModalidadePorId(id) {
        return globalData_1.globalData.modalidadeList.find(tipoPao => tipoPao.id === id);
    }
    filtraModalidadePorNome(name) {
        return globalData_1.globalData.modalidadeList.find(tipoPao => tipoPao.name === name);
    }
    filtraTodasModalidades() {
        return globalData_1.globalData.modalidadeList;
    }
    deletaModalidade(tipoPao) {
        const index = globalData_1.globalData.modalidadeList.indexOf(tipoPao);
        if (index !== -1) {
            globalData_1.globalData.modalidadeList.splice(index, 1);
        }
    }
    atualizaModalidade(tipoPao) {
        const index = globalData_1.globalData.modalidadeList.indexOf(tipoPao);
        if (index !== -1) {
            globalData_1.globalData.modalidadeList[index] = tipoPao;
        }
        return index;
    }
}
exports.ModalidadeRepository = ModalidadeRepository;
