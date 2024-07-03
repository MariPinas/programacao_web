import { globalData } from "../global/globalData";
import { VendaPaes } from "../model/VendaPaes";


export class VendaRepository{

    insereVenda(novaVenda: any):VendaPaes{
        globalData.vendaPaesList.push(novaVenda);
        return novaVenda;
       
    }
}