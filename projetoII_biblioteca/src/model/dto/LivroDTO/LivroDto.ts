export class LivroDto {
    id: number;
    titulo: string;
    autor: string;
    categoriaID: number;

    constructor(id?:number, titulo?: string, autor?: string, categoriaID?: number) {
        this.id = id || 0;
        this.titulo = titulo || '';
        this.autor = autor || '';
        this.categoriaID = categoriaID || 0;
    }
}