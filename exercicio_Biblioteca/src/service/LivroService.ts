import { isNumericLiteral } from "typescript";
import { Livro } from "../model/Livro";
import { LivroRepository } from "../repository/LivroRepository";

export class LivroService{

    livroRepository: LivroRepository = new LivroRepository();

    async cadastrarLivro(LivroData: any): Promise<Livro> {
        const { title, author, publishedDate, isbn, pages, language, publisher} = LivroData;
        if(!title || !author|| !publishedDate || !isbn || !pages|| !language || !publisher){
            throw new Error("Informações incompletas");
        }
        const livroEncontrado = await this.livroRepository.filtrarLivroPorISBN(isbn);
        if(livroEncontrado){
            throw new Error("Livro já cadastrado!!!");
        }
        const novoLivro =  await this.livroRepository.insertLivro(title, author, publishedDate, isbn, pages, language, publisher);
        console.log("Service - Insert ", novoLivro);
        return novoLivro;
    }

    async atualizarLivro(LivroData: any): Promise<Livro> {
        const { id, name, price } = LivroData;
        if(!name || !price || !id){
            throw new Error("Informações incompletas");
        }

        if(name != (typeof name == "string")){
            console.log("Service - update", name)
            throw new Error("Nome não é do tipo string");
        }else if(id != (typeof name == "number")){
            console.log("Service - update", id);
            throw new Error("ID não é do tipo number");
        }else if(price != (typeof name == "number")){
            console.log("Service - update", price);
            throw new Error("price não é do tipo number");
        }

        //let Livro = this.consultarLivro();
       /* if(!Livro){
            throw new Error("Livro não cadastrada!!!");
        }
        */
        const livro =  await this.livroRepository.updateLivro(id,name, price);
        console.log("Service - Update ", livro);
        return livro;
    }

    async deletarLivro(LivroData: any): Promise<Livro> {
        const { id, name, price } = LivroData;
        if(!name || !price || !id ){
            throw new Error("Informações incompletas");
        }

        const livro =  await this.livroRepository.deleteLivro(id,name, price);
        console.log("Service - Delete ", livro);
        return livro;
    }

    async filtrarLivro(LivroData: any): Promise<Livro> {
        if(!LivroData){
            throw new Error("Informações incompletas");
        }
        const id = parseInt(LivroData, 10);

        const livro =  await this.livroRepository.filtrarLivro(id);
        console.log("Service - Filtrar", Livro);
        return livro;
    }

    async listarTodosLivros(): Promise<Livro[]> {
        const livro =  await this.livroRepository.filterAllLivro();
        console.log("Service - Filtrar Todos", livro);
        return livro;
    }

}