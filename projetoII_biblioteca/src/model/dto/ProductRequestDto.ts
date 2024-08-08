export class LivroRequestDto {
    titulo: string;
    autor: string;
    categoriaID: number;

    constructor(titulo?: string, autor?: string, categoriaID?: number) {
        this.titulo = titulo || '';
        this.autor = autor || '';
        this.categoriaID = categoriaID || 0;
    }
}