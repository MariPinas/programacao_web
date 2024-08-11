export class PessoaDto{
    id: number;
    nome: string;

    constructor(id?:number, nome?:string){
        this.id = id || 0;
        this.nome = nome || '';
        console.log("CLASSE PESSOA DTO ID E NOME:", id, nome);
    }
}