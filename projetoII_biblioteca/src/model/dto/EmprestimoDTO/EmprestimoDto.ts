export class EmprestimoDto {
    id: number;
    livroID: number;
    usuarioID: number;
    dataEmprestimo: string;
    dataDevolucao: string;


    constructor(id?:number, livroID?:number, usuarioID?: number, dataEmprestimo?: string, dataDevolucao?: string){
       
        this.id = id || 0;
        this.livroID = livroID || 0;
        this.usuarioID = usuarioID || 0;
        this.dataEmprestimo = dataEmprestimo || '';
        this.dataDevolucao = dataDevolucao || '';
    }
}