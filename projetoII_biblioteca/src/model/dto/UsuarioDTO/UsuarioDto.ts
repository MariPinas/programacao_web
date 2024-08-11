export class UsuarioDto{
    id: number;
    nome: string;
    senha: string;
    idPessoa: number;

    constructor(id?:number, nome?:string, senha?:string, idPessoa?:number){
        this.id = id || 0;
        this.nome = nome || '';
        this.senha = senha || '';
        this.idPessoa = idPessoa || 0;
    }
    
}