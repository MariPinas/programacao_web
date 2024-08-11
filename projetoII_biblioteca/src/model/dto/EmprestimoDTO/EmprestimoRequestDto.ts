export class EmprestimoRequestDto {
    livroID: number;
    usuarioID: number;
    dataEmprestimo: string;
    dataDevolucao: string;


    constructor(livroID?:number, usuarioID?: number, dataEmprestimo?: string, dataDevolucao?: string){
        this.livroID = livroID || 0;
        this.usuarioID = usuarioID || 0;
        this.dataEmprestimo = dataEmprestimo || '';
        this.dataDevolucao = dataDevolucao || '';
    }
}