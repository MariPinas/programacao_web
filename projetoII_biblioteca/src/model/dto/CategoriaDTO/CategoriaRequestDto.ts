export class CategoriaRequestDto { 
    nome:string;
    constructor(nome?:string){
        this.nome=nome || '';
        console.log("CLASSE REQUEST DTO CATEGORIA", nome);
    }
    
}