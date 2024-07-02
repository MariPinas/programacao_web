import { globalData } from "../global/globalData";


export class VendaRepository{

    insereVenda(novaVenda: any){

       return globalData.vendaPaesList.push(novaVenda);
       
    }
}