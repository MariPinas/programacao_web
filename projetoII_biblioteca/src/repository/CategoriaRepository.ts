import { executarComandoSQL } from "../database/mysql";
import { Categoria } from "../model/entity/Categoria";


export class CategoriaRepository{
    private static instance: CategoriaRepository;

    constructor(){
        this.createTable();
    }

    public static getInstance(): CategoriaRepository {
        if (!this.instance) {
            this.instance = new CategoriaRepository();
        }
        return this.instance
    }

    private async createTable() {
        const query = `
        CREATE TABLE IF NOT EXISTS biblioteca.Categoria (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nome VARCHAR(255) NOT NULL
        )`;

        try {
                const resultado =  await executarComandoSQL(query, []);
                console.log('Query executada com sucesso:', resultado);
        } catch (err) {
            console.error('Error');
        }
    }

    async insertCategoria(categoria:Categoria) :Promise<Categoria>{
        console.log("REPOSITORY CATEGORIA", categoria);
        const query = "INSERT INTO biblioteca.Categoria (nome) VALUES (?)" ;

        try {
            const resultado = await executarComandoSQL(query, [categoria.nome]);
            console.log('categoria inserida com sucesso, ID: ', resultado.insertId);
            categoria.id = resultado.insertId;
            return new Promise<Categoria>((resolve)=>{
                resolve(categoria);
            })
        } catch (err) {
            console.error('Erro ao inserir a categoria:', err);
            throw err;
        }
    }

    async updateCategoria(categoria:Categoria) :Promise<Categoria>{
        console.log("REPOSITORY CATEGORIA", categoria);
        const query = "UPDATE biblioteca.Categoria set nome = ? where id = ?;" ;

        try {
            const resultado = await executarComandoSQL(query, [categoria.nome, categoria.id]);
            console.log('Categoria atualizada com sucesso, ID: ', resultado);
            return new Promise<Categoria>((resolve)=>{
                resolve(categoria);
            })
        } catch (err:any) {
            console.error(`Erro ao atualizar a categoria de ID ${categoria.id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async deleteCategoria(categoria:Categoria) :Promise<Categoria>{
        const query = "DELETE FROM biblioteca.Categoria where id = ?;" ;

        try {
            const resultado = await executarComandoSQL(query, [categoria.id]);
            console.log('Categoria deletada com sucesso: ', categoria);
            return new Promise<Categoria>((resolve)=>{
                resolve(categoria);
            })
        } catch (err:any) {
            console.error(`Falha ao deletar a categoria de ID ${categoria.id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async filterCategoria(id: number) :Promise<Categoria>{
        const query = "SELECT * FROM biblioteca.Categoria where id = ?" ;

        try {
            const resultado = await executarComandoSQL(query, [id]);
            console.log('Categoria localizada com sucesso, ID: ', resultado);
            return new Promise<Categoria>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao procurar a categoria de ID ${id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async filterAllCategoria() :Promise<Categoria[]>{
        const query = "SELECT * FROM biblioteca.Categoria" ;

        try {
            const resultado = await executarComandoSQL(query, []);
            return new Promise<Categoria[]>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao listar as categorias gerando o erro: ${err}`);
            throw err;
        }
    }

    
}