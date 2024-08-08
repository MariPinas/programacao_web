import { Livro } from "../model/Livro";
import { LivroRepository } from "../repository/LivroRepository";

export class LivroService{

    livroRepository: LivroRepository = new LivroRepository(); //

    async cadastrarLivro(livroData: any): Promise<Livro> {
        const { titulo, autor, categoriaID } = livroData;
        
        const livro = new Livro(undefined, titulo, autor, categoriaID)

        const novoLivro =  await this.livroRepository.insertLivro(livro);
        console.log("Service - Insert ", novoLivro);
        return novoLivro;
    }

    async atualizarLivro(livroData: any): Promise<Livro> {
        const { id, titulo, autor, categoriaID } = livroData;

        const livro = new Livro(id, titulo, autor, categoriaID)

        await this.livroRepository.updateLivro(livro);
        console.log("Service - Update ", livro);
        return livro;
    }

    async deletarLivro(livroData: any): Promise<Livro> {
        const { id, titulo, autor, categoriaID } = livroData;

        const livro = new Livro(id, titulo, autor, categoriaID)

        await this.livroRepository.deleteLivro(livro);
        console.log("Service - Delete ", livro);
        return livro;
    }

    async filtrarLivro(livroData: any): Promise<Livro> {
        const idNumber = parseInt(livroData, 10);

        const livro =  await this.livroRepository.filterLivro(idNumber);
        console.log("Service - Filtrar", livro);
        return livro;
    }

    async listarTodosLivros(): Promise<Livro[]> {
        const livro =  await this.livroRepository.filterAllLivro();
        console.log("Service - Filtrar Todos", livro);
        return livro;
    }

}