import { ModalidadePaes } from "../model/ModalidadePaes";
import { globalData } from "../global/globalData";

export class ModalidadeRepository{
    insereModalidade(tipoPao: ModalidadePaes){
        globalData.modalidadeList.push(tipoPao);
    }
    

    filtraModalidadePorId(id:number): ModalidadePaes|undefined{
        return globalData.modalidadeList.find(tipoPao => tipoPao.id === id);
    }
    
    filtraModalidadePorNome(name: string): ModalidadePaes|undefined{
        return globalData.modalidadeList.find(tipoPao => tipoPao.name === name);
    }


    filtraTodasModalidades():ModalidadePaes[]{
        return globalData.modalidadeList;
    }

    deletaModalidade(tipoPao:ModalidadePaes){
        const index = globalData.modalidadeList.indexOf(tipoPao);
        if (index !== -1) {
            globalData.modalidadeList.splice(index, 1);
        }
    }

    atualizaModalidade(tipoPao:ModalidadePaes): number{
        const index = globalData.modalidadeList.indexOf(tipoPao);
        if(index !== -1){
            globalData.modalidadeList[index] = tipoPao;
        }
        return index;
    }
}

