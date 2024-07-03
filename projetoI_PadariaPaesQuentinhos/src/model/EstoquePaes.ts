let contador:number = 0;
export class EstoquePaes {
    id: number;
    modalidadeID: number;
    quantidade : number;
    precoVenda : number;

    constructor(modalidadeId:number, quantidade : number, precoVenda:number){
        this.id = this.geraId(); 
        this.modalidadeID = modalidadeId;
        this.quantidade = quantidade;
        this.precoVenda = precoVenda;
      
    }

    private geraId(): number {
        return ++contador;
    }
}