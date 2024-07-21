import { Livro } from "../model/Livro";
import { LivroRepository } from "../repository/LivroRepository";

export class LivroService{

    livroRepository: LivroRepository = new LivroRepository();

    async cadastrarLivro(LivroData: any): Promise<Livro> {
        const { title, author, publishedDate, isbn, pages, language, publisher} = LivroData;
        console.log(title, author, publishedDate, isbn, pages, language, publisher);
        if(!title || !author || !publishedDate || !isbn || !pages|| !language || !publisher){
            throw new Error("400 Bad Request - Informações incompletas");
        }
        const livroEncontrado = await this.livroRepository.filtrarLivroPorISBN(LivroData.isbn);
        if(livroEncontrado.length==0){
            const novoLivro =  await this.livroRepository.insertLivro(title, author, publishedDate, isbn, pages, language, publisher);
            console.log("Service - Insert ", novoLivro);
            return novoLivro;
        }else{
            throw new Error("409 Conflict - Livro com este ISBN já foi cadastrado!!!");
        }
        
    }

    async listarTodosLivros(): Promise<Livro[]> {
        const livros =  await this.livroRepository.filterAllLivro();
        console.log("Service - Filtrar Todos", livros);
        return livros;
    }

    async filtrarLivro(LivroData: any): Promise<Livro> {
        if(!LivroData){
            throw new Error("400 Bad Request - Informações incompletas");
        }
        const id = parseInt(LivroData, 10);

        const livroEncontrado =  await this.livroRepository.filtrarLivro(id);
        console.log("Service - Filtrar", Livro);
        if (livroEncontrado){
            console.log('Livro foi localizado com sucesso, id: ', livroEncontrado);
            return livroEncontrado;
        }else{
            throw new Error("404 Not Found - Nao foi encontrado este livro!!!");
        }
        
    }
    
    async atualizarLivro(id:number, LivroData: any): Promise<Livro> {
        const {title, author, publishedDate, isbn, pages, language, publisher} = LivroData;
        console.log(id, title, author, publishedDate, isbn, pages, language, publisher);
        if(!id || !title || !author || !publishedDate || !isbn || !pages|| !language || !publisher){
            throw new Error("400 Bad Request - Informações incompletas");
        }

        let Livro = this.filtrarLivro(id);
        if(!Livro){
            throw new Error("404 Not Found - Livro não cadastrado!!!");
        }
        
        const livro =  await this.livroRepository.updateLivro(id, title, author, publishedDate, isbn, pages, language, publisher);
        console.log("Service - Update ", livro);
        return livro;
    }

    async deletarLivro(id:number, LivroData: any): Promise<Livro> {
        const {title, author, publishedDate, isbn, pages, language, publisher} = LivroData;
        console.log(id, title, author, publishedDate, isbn, pages, language, publisher);
        if(!id || !title || !author || !publishedDate || !isbn || !pages|| !language || !publisher){
            throw new Error("400 Bad Request - Informações incompletas");
        }

        const livro =  await this.livroRepository.deleteLivro(id, title, author, publishedDate, isbn, pages, language, publisher);
        console.log("Service - Delete ", livro);
        return livro;
    }
}