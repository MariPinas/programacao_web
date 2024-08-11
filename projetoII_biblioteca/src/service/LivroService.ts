import { Livro } from "../model/entity/Livro";
import { LivroRepository } from "../repository/LivroRepository";

export class LivroService{

    private livroRepository = LivroRepository.getInstance();

    async cadastrarLivro(livroData: any): Promise<Livro> {
        const {titulo, autor, categoriaID} = livroData;

        const livro = new Livro(undefined, titulo, autor, categoriaID);

        const livrosDeNomeExistente = await this.livroRepository.buscaLivroporTitulo(titulo);
        if (livrosDeNomeExistente.length > 0) {
            throw new Error("Livro com esse nome ja existe!.");
        }
        const livroEncontrado = await this.livroRepository.buscaLivroporidCategoria(categoriaID);
        if (livroEncontrado.length == 0) {
            throw new Error("Essa categoria nao existe.");
        }
        const novoLivro = await this.livroRepository.insertLivro(livro);
        console.log("Service - Insert Livro", novoLivro);
        return novoLivro;
    }

    async atualizarLivro(livroData: any): Promise<Livro> {
        const {id, titulo, autor, categoriaID} = livroData;
        console.log("SERVICE ATT CATEGORIA - ", id, titulo, autor, categoriaID);
        const livroEncontrado =  await this.livroRepository.buscaLivroporID(id);
        if(livroEncontrado){
            const livro = new Livro(id, titulo, autor, categoriaID)
            await this.livroRepository.updateLivro(livro);
            console.log("Service - Update ", livro);
            return livro;
        }else{
        throw new Error("400 Bad Request - Nao foi possivel atualizar!!!");
        } 
    }

    async deletarLivro(livroData: any): Promise<Livro[]> {
        const {id, titulo, autor, categoriaID} = livroData;
        
        const livro = new Livro(id, titulo, autor, categoriaID)
        const livroEncontrado =  await this.livroRepository.buscaLivroporIDeTitulo(id, titulo);
        
        if(livroEncontrado.length != 0){
            await this.livroRepository.deleteLivro(livro);
            console.log("Service - Delete ", livro);
            return livroEncontrado;
        }else{
            throw new Error("404!!! Not Found - Livro nao encontrado!!");
        }
    }

    async buscaLivroPorTitulo(title: string): Promise<Livro[]> {
        const titulo:string = title;
        if(!titulo || titulo.trim() === ''){
            throw new Error("400 Bad Request - Informações incompletas");
        }
        const livro =  await this.livroRepository.buscaLivroporTitulo(titulo);
        if(livro.length != 0){
            console.log("Service - Filtrar Titulo", livro);
            return livro;
        }else{
            throw new Error("404 Not Found - Livro com esse nome nao existe!!!");
        }
    }

    async buscaLivroPorID(livroData: any): Promise<Livro> {
        const idNumber = parseInt(livroData, 10);
        if(!idNumber){
            throw new Error("400 Bad Request - Informações incompletas");
        }
        const livro =  await this.livroRepository.buscaLivroporID(idNumber);
        if(livro){
            console.log("Service - Filtrar ID", livro);
            return livro;
        }else{
            throw new Error("404 Not Found  - Livro com esse id nao existe!!!");
        }
        
    }

    async listarTodasLivros(): Promise<Livro[]> {
        const livro =  await this.livroRepository.buscaAllLivros();
        console.log("Service - Filtrar Todos", livro);
        return livro;
    }

}