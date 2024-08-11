export class PessoaRequestDto { 
    nome:string;
    constructor(nome?:string){
        this.nome=nome || '';
        console.log("CLASSE REQUEST DTO PESSOA", nome);
    }
    
}