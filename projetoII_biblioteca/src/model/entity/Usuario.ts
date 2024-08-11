export class Usuario{
    id: number;
    nome: string;
    senha: string;
    idPessoa: number;


    constructor(id?:number, nome?:string, senha?:string, idPessoa?:number){
        this.validatesInformation(nome, senha, idPessoa);
        this.id = id || 0;
        this.nome = nome || '';
        this.senha = senha || '';
        this.idPessoa = idPessoa || 0;
    }

    private validatesInformation(nome:any, senha:any, idPessoa: any){
        let error ='';
        if (typeof nome !== 'string' || typeof senha !== 'string' ||typeof idPessoa != 'number' ) {
            error += ("Informações incompletas ou incorretas. ");
        }
        if(error != ''){
            throw new Error(error);
        }
    }
}