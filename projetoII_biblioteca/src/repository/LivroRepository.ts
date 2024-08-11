import { executarComandoSQL } from "../database/mysql";
import { Livro } from "../model/entity/Livro";


export class LivroRepository{
    private static instance: LivroRepository;
    constructor(){
        this.createTable();
    }
    public static getInstance(): LivroRepository {
        if (!this.instance) {
            this.instance = new LivroRepository();
        }
        return this.instance
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
        const query = "INSERT INTO biblioteca.Livro (titulo, autor, categoriaId) VALUES (?,?,?)" ;

        try {
            const resultado = await executarComandoSQL(query, [livro.titulo,livro.autor,livro.categoriaID,]);
            console.log('livro inserido com sucesso, ID: ', resultado.insertId);
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
        const query = "UPDATE biblioteca.Livro set titulo = ?, autor=?, categoriaID=? where id = ?;" ;

        try {
            const resultado = await executarComandoSQL(query, [livro.titulo,livro.autor,livro.categoriaID, livro.id]);
            console.log('Livro atualizado com sucesso, ID: ', resultado);
            return new Promise<Livro>((resolve)=>{
                resolve(livro);
            })
        } catch (err:any) {
            console.error(`Erro ao atualizar o livro de ID ${livro.id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async deleteLivro(livro:Livro) :Promise<Livro[]>{
        const query = "DELETE FROM biblioteca.Livro where id = ?;" ;

        try {
            const resultado: Livro[] = await executarComandoSQL(query, [livro.id]);
            console.log('Livro deletada com sucesso: ', livro);
            return new Promise<Livro[]>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao deletar a livro de ID ${livro.id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async buscaLivroporID(id: number) :Promise<Livro>{
        const query = "SELECT * FROM biblioteca.Livro where id = ?" ;

        try {
            const resultado = await executarComandoSQL(query, [id]);
            console.log('Livro localizada com sucesso, ID: ', resultado);
            return new Promise<Livro>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao procurar a livro de ID ${id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async buscaLivroporIDeTitulo(id: number, titulo:number) :Promise<Livro[]>{
        const query = "SELECT * FROM biblioteca.Livro where id = ? and titulo = ?" ;

        try {
            const resultado: Livro[] = await executarComandoSQL(query, [id, titulo]);
            console.log('Livro localizada com sucesso, id e titulo:', resultado);
            return new Promise<Livro[]>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao procurar a livro de ID ${id} e Titulo ${titulo} gerando o erro: ${err}`);
            throw err;
        }
    }

    async buscaLivroporTitulo(titulo: string) :Promise<Livro[]>{
        const query = "SELECT * FROM biblioteca.Livro where titulo = ?" ;

        try {
            const resultado: Livro[] = await executarComandoSQL(query, [titulo]);
            console.log('Livro localizada com sucesso, Titulo: ', resultado);
            return new Promise<Livro[]>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao procurar a livro de titulo ${titulo} gerando o erro: ${err}`);
            throw err;
        }
    }

    async buscaLivroporidCategoria(categoriaID: number) :Promise<Livro[]>{
        const query = "SELECT * FROM biblioteca.Categoria where id = ?" ;

        try {
            const resultado: Livro[] = await executarComandoSQL(query, [categoriaID]);
            console.log('Livro localizado com sucesso, ID da categoria: ', resultado);
            return new Promise<Livro[]>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao procurar o livro com id de Livro ${categoriaID} gerando o erro: ${err}`);
            throw err;
        }
    }

    async buscaAllLivros() :Promise<Livro[]>{
        const query = "SELECT * FROM biblioteca.Livro" ;

        try {
            const resultado = await executarComandoSQL(query, []);
            return new Promise<Livro[]>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao listar as livros gerando o erro: ${err}`);
            throw err;
        }
    }

    
}