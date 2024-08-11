export class Categoria{
    id: number;
    nome: string;


    constructor(id?:number, nome?:string){
        this.validatesInformation(nome);
        this.id = id || 0;
        this.nome = nome || '';
    }

    private validatesInformation(nome:any){
        let error ='';
        if (typeof nome !== 'string') {
            console.log("CLASSE CATEGORIA", nome);
            error += ("Informações incompletas ou incorretas."); 
            throw new Error(error);
        }
    }
}