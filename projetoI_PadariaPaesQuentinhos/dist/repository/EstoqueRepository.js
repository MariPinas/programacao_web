"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstoqueRepository = void 0;
//Camada necessaria para que os repositorys "se comuniquem" por uma instancia global
const globalData_1 = require("../global/globalData");
class EstoqueRepository {
    insereItem(novoItem) {
        globalData_1.globalData.estoqueList.push(novoItem);
    }
    filtraProdutoPorId(id) {
        return globalData_1.globalData.estoqueList.find(product => product.modalidadeID === id);
    }
    filtraTodosEstoques() {
        return globalData_1.globalData.estoqueList;
    }
    deletaEstoque(tipoPao) {
        const index = globalData_1.globalData.estoqueList.indexOf(tipoPao);
        if (index !== -1) {
            globalData_1.globalData.estoqueList.splice(index, 1);
        }
    }
    atualizaEstoque(tipoPao) {
        const index = globalData_1.globalData.estoqueList.indexOf(tipoPao);
        if (index !== -1) {
            globalData_1.globalData.estoqueList[index] = tipoPao;
        }
        return index;
    }
}
exports.EstoqueRepository = EstoqueRepository;
