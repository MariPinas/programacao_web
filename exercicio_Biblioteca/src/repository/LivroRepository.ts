import { executarComandoSQL } from "../database/mysql";
import { Livro } from "../model/Livro";

export class LivroRepository{

    constructor(){
        this.createTable();
    }

    private async createTable() {
        const query = `
        CREATE TABLE IF NOT EXISTS biblioteca.livro (
            id INT AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            author VARCHAR(255),
            publishedDate DATE,
            isbn VARCHAR(255) NOT NULL,
            pages INT NOT NULL,
            language VARCHAR(255) NOT NULL,
            publisher VARCHAR(255) NOT NULL
        )`;

        try {
                const resultado =  await executarComandoSQL(query, []);
                console.log('Query executada com sucesso:', resultado);
        } catch (err) {
            console.error('Error');
        }
    }

    async insertLivro(title: string, author: string, publishedDate: Date, isbn: string, pages: number, language: string, publisher:string) :Promise<Livro>{
        const query = "INSERT INTO biblioteca.livro (title, author, publishedDate, isbn, pages, language, publisher) VALUES (?, ?, ?, ?, ?, ?, ?)" ;

        try {
            const resultado = await executarComandoSQL(query, [title, author, publishedDate, isbn, pages, language, publisher]);
            console.log('Livro inserido com sucesso, ID: ', resultado.insertId);
            const livro = new Livro(resultado.insertId, title, author, publishedDate, isbn, pages, language, publisher);
            return new Promise<Livro>((resolve)=>{
                resolve(livro);
            })
        } catch (err) {
            console.error('Erro ao inserir o livro:', err);
            throw err;
        }
    }

    async filtrarLivro(id: number) :Promise<Livro>{
        const query = "SELECT * FROM biblioteca.livro where id = ?" ;

        try {
            const resultado = await executarComandoSQL(query, [id]);
            if(resultado.length==0){
                throw new Error("Livro não existe!!!");
            }else{
            console.log('Livro localizado com sucesso, ID: ', resultado);
            return resultado;
        }
        } catch (err:any) {
            console.error(`Falha ao procurar o livro de ID ${id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async updateLivro(id: number, title: string, author: string, publishedDate: Date, isbn: string, pages: number, language: string, publisher:string) :Promise<Livro>{
        const query = "UPDATE biblioteca.livro set title = ?, author = ?, publishedDate = ?, isbn = ?, pages = ?, language = ?, publisher = ? where id = ?;" ;

        try {
            const resultado = await executarComandoSQL(query, [title, author, publishedDate, isbn, pages, language, publisher, id]);
            console.log('Livro atualizado com sucesso, ID: ', resultado);
            const livro = new Livro(id, title, author, publishedDate, isbn, pages, language, publisher);
            return new Promise<Livro>((resolve)=>{
                resolve(livro);
            })
        } catch (err:any) {
            console.error('Erro ao atualizar o livro:', err);
            throw err;
        }
    }

    async deleteLivro(id: number, title: string, author: string, publishedDate: Date, isbn: string, pages: number, language: string, publisher:string) :Promise<Livro>{
        const query = "DELETE FROM biblioteca.livro where id = ? and title = ? and author = ? and publishedDate = ? and isbn = ? and pages = ? and language = ? and publisher = ?;" ;

        try {
            const resultado = await executarComandoSQL(query, [id, title, author, publishedDate, isbn, pages, language, publisher]);
            console.log('Livro deletado com sucesso, ID: ', resultado);
            const livro = new Livro(id, title, author, publishedDate, isbn, pages, language, publisher);
            return new Promise<Livro>((resolve)=>{
                resolve(livro);
            })
        } catch (err:any) {
            console.error(`Falha ao deletar o livro de ID ${id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async filtrarLivroPorISBN(isbn: number) :Promise<Livro[]>{
        const query = "SELECT * FROM biblioteca.livro where isbn = ?" ;

        try {
            const resultado = await executarComandoSQL(query, [isbn]);
            console.log('Livro foi localizado com sucesso, isbn: ', resultado);
            return resultado;
        } catch (err:any) {
            console.error(`Falha ao procurar o livro de isbn ${isbn} gerando o erro: ${err}`);
            throw err;
        }
    }

    async filterAllLivro() :Promise<Livro[]>{
        const query = "SELECT * FROM biblioteca.livro" ;

        try {
            const resultado = await executarComandoSQL(query, []);
            return new Promise<Livro[]>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao listar os produtos gerando o erro: ${err}`);
            throw err;
        }
    }

    
}