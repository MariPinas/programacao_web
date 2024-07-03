import { VendaPaes } from "./VendaPaes";
import { EstoquePaes } from "./EstoquePaes";
import { globalData } from "../global/globalData";

let contador:number = 0;
export class itemVenda{
        estoquePaesId : number;
        quantidade : number;
        nome: string;

        constructor(estoquePaesId:number, quantidade:number, nome: string){
            this.estoquePaesId = this.geraId();
            this.quantidade = quantidade;
            this.nome = nome;
        }

        private geraId(): number {
            return ++contador;
        }

    
}