import { itemVenda } from "./ItemVenda";
let contador:number = 0;
export class VendaPaes {
    idVenda:number;
    cpf: number;
    itens: itemVenda[];
    total : number;

    constructor(cpf:number, itens : itemVenda[], total:number){
        this.cpf = cpf;
        this.itens = itens;
        this.total = total;
        this.idVenda = this.geraId();
    }
    private geraId(): number {
        return ++contador;
    }
}