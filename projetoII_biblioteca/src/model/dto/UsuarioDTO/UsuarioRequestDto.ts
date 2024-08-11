export class UsuarioRequestDto { 
    nome: string;
    senha: string;
    idPessoa: number;

    constructor(nome?:string, senha?:string, idPessoa?:number){
        this.nome = nome || '';
        this.senha = senha || '';
        this.idPessoa = idPessoa || 0;
    }
}