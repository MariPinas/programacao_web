
// Camada repository que vai ser responsavel por inserir, filtrar, deletar e atualizar o estoque
import { EstoquePaes } from "../model/EstoquePaes";

//Camada necessaria para que os repositorys "se comuniquem" por uma instancia global
import { globalData } from "../global/globalData"; 

export class EstoqueRepository{

    insereItem(novoItem: EstoquePaes){
        globalData.estoqueList.push(novoItem);
    }

    filtraProdutoPorId(id:number): EstoquePaes|undefined {
        return globalData.estoqueList.find(product => product.modalidadeID === id);
    }

    
    

    filtraTodosEstoques():EstoquePaes[]{
        return globalData.estoqueList;
    }

    deletaEstoque(tipoPao:EstoquePaes){
        const index = globalData.estoqueList.indexOf(tipoPao);
        if (index !== -1) {
            globalData.estoqueList.splice(index, 1);
        }
    }

    atualizaEstoque(tipoPao:EstoquePaes): number{
        const index = globalData.estoqueList.indexOf(tipoPao);
        if(index !== -1){
            globalData.estoqueList[index] = tipoPao;
        }
        return index;
    }
}