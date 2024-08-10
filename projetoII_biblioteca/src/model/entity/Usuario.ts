export class Usuario{
    id: number;
    nome: string;
    email: string;
    senha: string;
    idPessoa: number;


    constructor(id?:number, nome?:string, email?:string, senha?:string, idPessoa?:number){
        this.validatesInformation(nome, email, senha, idPessoa);
        this.id = id || 0;
        this.nome = nome || '';
        this.email = email || '';
        this.senha = senha || '';
        this.idPessoa = idPessoa || 0;
    }

    private validatesInformation(nome:any, email:any, senha:any, idPessoa: any){
        let error ='';
        if (typeof nome !== 'string' || typeof email !== 'string' || typeof senha !== 'string' || typeof idPessoa !== 'number') {
            error += ("Informações incompletas ou incorretas. ");
        }

        if(error != ''){
            throw new Error(error);
        }
    }
}