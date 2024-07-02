import { VendaPaes } from "./VendaPaes";
import { EstoquePaes } from "./EstoquePaes";

export class itemVenda{
        estoquePaesId : number;
        quantidade : number;


        constructor(estoquePaesId:number, quantidade:number){
            this.quantidade = quantidade;
            this.estoquePaesId = this.geraId();
        }
        private geraId():number{
            return Date.now();
        }
}