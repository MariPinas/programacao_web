import { globalData } from "../global/globalData";
import { VendaPaes } from "../model/VendaPaes";


export class VendaRepository{

    insereVenda(novaVenda: any):VendaPaes{
        globalData.vendaPaesList.push(novaVenda);
        return novaVenda;
       
    }

    filtraVendaPorId(id:number): VendaPaes|undefined{
        return globalData.vendaPaesList.find(venda => venda.idVenda === id);
    }
}