import { executarComandoSQL } from "../database/mysql";
import { Livro } from "../model/Livro";


export class LivroRepository{

    constructor(){
        this.createTable();
    }

    private async createTable() {
        const query = `
        CREATE TABLE IF NOT EXISTS biblioteca.Livro (
            id INT AUTO_INCREMENT PRIMARY KEY,
            titulo VARCHAR(255) NOT NULL,
            autor VARCHAR(255) NOT NULL,
            categoriaID INT NOT NULL,
            FOREIGN KEY (categoriaID)
            REFERENCES biblioteca.Categoria(id)
        )`;

        try {
                const resultado =  await executarComandoSQL(query, []);
                console.log('Query executada com sucesso:', resultado);
        } catch (err) {
            console.error('Error');
        }
    }

    async insertLivro(livro:Livro) :Promise<Livro>{
        const query = "INSERT INTO biblioteca.Livro (titulo, autor, categoriaID) VALUES (?, ?, ?)" ;

        try {
            const resultado = await executarComandoSQL(query, [livro.titulo, livro.autor, livro.categoriaID]);
            console.log('Livro inserido com sucesso, ID: ', resultado.insertId);
            livro.id = resultado.insertId;
            return new Promise<Livro>((resolve)=>{
                resolve(livro);
            })
        } catch (err) {
            console.error('Erro ao inserir o livro:', err);
            throw err;
        }
    }

    async updateLivro(livro:Livro) :Promise<Livro>{
        const query = "UPDATE biblioteca.Livro set titulo = ?, autor = ?, categoriaID = ? where id = ?;" ;

        try {
            const resultado = await executarComandoSQL(query, [livro.titulo, livro.autor, livro.categoriaID, livro.id]);
            console.log('Livro atualizado com sucesso, ID: ', resultado);
            return new Promise<Livro>((resolve)=>{
                resolve(livro);
            })
        } catch (err:any) {
            console.error(`Erro ao atualizar o livro de ID ${livro.id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async deleteLivro(livro:Livro) :Promise<Livro>{
        const query = "DELETE FROM biblioteca.Livro where id = ?;" ;

        try {
            const resultado = await executarComandoSQL(query, [livro.id]);
            console.log('Livro deletado com sucesso: ', livro);
            return new Promise<Livro>((resolve)=>{
                resolve(livro);
            })
        } catch (err:any) {
            console.error(`Falha ao deletar o livro de ID ${livro.id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async filterLivro(id: number) :Promise<Livro>{
        const query = "SELECT * FROM biblioteca.Livro where id = ?" ;

        try {
            const resultado = await executarComandoSQL(query, [id]);
            console.log('Livro localizado com sucesso, ID: ', resultado);
            return new Promise<Livro>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao procurar o livro de ID ${id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async filterAllLivro() :Promise<Livro[]>{
        const query = "SELECT * FROM biblioteca.Livro" ;

        try {
            const resultado = await executarComandoSQL(query, []);
            return new Promise<Livro[]>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao listar os livros gerando o erro: ${err}`);
            throw err;
        }
    }

    
}