import { VendaPaes } from "./VendaPaes";
import { EstoquePaes } from "./EstoquePaes";

export class itemVenda{
        estoquePaesId : number;
        quantidade : number;


        constructor(estoquePaes:number, quantidade:number, nome : string){
            this.quantidade = quantidade;
            this.estoquePaesId = this.geraId();
        }
        private geraId():number{
            return Date.now();
        }
}