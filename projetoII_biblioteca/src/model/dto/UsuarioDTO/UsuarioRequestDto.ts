export class UsuarioRequestDto { 
    nome: string;
    email: string;
    senha: string;
    idPessoa: number;

    constructor(nome?:string, email?:string, senha?:string, idPessoa?:number){
        console.log("CLASSE PESSOA DTO ID E NOME e email e senha e idpessoa:", nome, email, senha, idPessoa);
        this.nome = nome || '';
        this.email = email || '';
        this.senha = senha || '';
        this.idPessoa = idPessoa || 0;
    }
}