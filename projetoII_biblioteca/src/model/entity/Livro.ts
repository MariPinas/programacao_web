export class Livro{
    id: number;
    titulo: string;
    autor: string;
    categoriaID: number;


    constructor(id?:number, titulo?:string, autor?:string, categoriaID?: number){
        this.validatesInformation(titulo, autor, categoriaID);
        this.id = id || 0;
        this.titulo = titulo || '';
        this.autor = autor || '';
        this.categoriaID = categoriaID || 0;
    }

    private validatesInformation(titulo:any, autor:any, categoriaID:any){
        let error ='';
        if (typeof titulo !== 'string' || typeof autor !== 'string' || typeof categoriaID !== 'number') {
            console.log("CLASSE Livro", titulo, autor, categoriaID);
            error += ("Informações incompletas ou incorretas. ");
        }

        if(error != ''){
            throw new Error(error);
        }
    }
}