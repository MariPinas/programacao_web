export class PessoaDto{
    id: number;
    nome: string;
    email: string;

    constructor(id?:number, nome?:string, email?: string){
        this.id = id || 0;
        this.nome = nome || '';
        this.email = email || '';
        console.log("CLASSE PESSOA DTO ID E NOME:", id, nome);
    }
}