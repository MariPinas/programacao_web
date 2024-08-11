export class UsuarioDto{
    id: number;
    nome: string;
    email: string;
    senha: string;
    idPessoa: number;

    constructor(id?:number, nome?:string, email?:string, senha?:string, idPessoa?:number){
        console.log("CLASSE PESSOA DTO ID E NOME e email e senha e idpessoa:", id, nome, email, senha, idPessoa);
        this.id = id || 0;
        this.nome = nome || '';
        this.email = email || '';
        this.senha = senha || '';
        this.idPessoa = idPessoa || 0;
    }
    
}