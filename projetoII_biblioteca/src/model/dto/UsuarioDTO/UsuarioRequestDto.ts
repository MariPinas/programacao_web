export class UsuarioRequestDto { 
    nome: string;
    senha: string;
    idPessoa: number;

    constructor(nome?:string, senha?:string, idPessoa?:number){
        console.log("CLASSE PESSOA DTO ID E NOME e email e senha e idpessoa:", nome, senha, idPessoa);
        this.nome = nome || '';
        this.senha = senha || '';
        this.idPessoa = idPessoa || 0;
    }
}