
import { VendaPaes } from "../model/VendaPaes";
import { VendaRepository } from "../repository/VendaRepository";
import { itemVenda } from "../model/ItemVenda";
import { globalData } from "../global/globalData";

export class VendaService{

    vendaRepository: VendaRepository = new VendaRepository();

    inserirVenda(vendaData: any): VendaPaes{
        const {cpf, itens} = vendaData;
        if(!cpf ||  !itens || !Array.isArray(itens)){ //verificar se colocou as informacoes
            throw new Error("Informações incompletas");
        }

        const novaVenda = this.processarVenda(cpf, itens);
        return novaVenda;
    }

    processarVenda(cpf: number, itens:any[]): VendaPaes{
        
        let resumoVenda : itemVenda[] = [];
        let total = 0;

        for(const item of itens){
            const estoqueItem = globalData.estoqueList.find((estoque) => estoque.id === item.estoquePaesID);
            const nomeItem = globalData.modalidadeList.find((modalidade):any => modalidade.name === item.nome);

            if(!estoqueItem){
                throw new Error (`Item com ID ${item.estoquePaesID} não encontrado`);
            }
            
            if (!nomeItem) {
                throw new Error(`Nome de item '${item.nome}' não encontrado em modalidades`);
            }

            if(estoqueItem.quantidade < item.quantidade) {
                throw new Error (`Quantidade solicitada ultrapassa a quantidade em estoque do item ${estoqueItem.modalidadeID}`);
            }

            const quantidadeVenda = item.quantidade;
            estoqueItem.quantidade -= quantidadeVenda;
            total += quantidadeVenda * estoqueItem.precoVenda;

    
            resumoVenda.push(
                new itemVenda(
                    estoqueItem.id, quantidadeVenda, nomeItem.name)
            );
        }

        const novaVenda = new VendaPaes(cpf, resumoVenda, total)
        return this.vendaRepository.insereVenda(novaVenda);
    }

 
}
