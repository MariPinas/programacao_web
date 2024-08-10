/*import { executarComandoSQL } from "../database/mysql";
import {Pessoa} from "../model/entity/Pessoa";


export class PessoaRepository{

    constructor(){
        this.createTable();
    }

    private async createTable() {
        const query = `
        CREATE TABLE IF NOT EXISTS biblioteca.Pessoa (
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

    async insertPessoa(pessoa:Pessoa) :Promise<Pessoa>{
        const query = "INSERT INTO biblioteca.Pessoa (nome) VALUES (?)" ;

        try {
            const resultado = await executarComandoSQL(query, [pessoa.nome]);
            console.log('Pessoa inserido com sucesso, ID: ', resultado.insertId);
            pessoa.id = resultado.insertId;
            return new Promise<Pessoa>((resolve)=>{
                resolve(pessoa);
            })
        } catch (err) {
            console.error('Erro ao inserir o pessoa:', err);
            throw err;
        }
    }

    async updatePessoa(pessoa:Pessoa) :Promise<Pessoa>{
        const query = "UPDATE biblioteca.Pessoa set nome = ? where id = ?;" ;

        try {
            const resultado = await executarComandoSQL(query, [pessoa.nome, pessoa.id]);
            console.log('Pessoa atualizado com sucesso, ID: ', resultado);
            return new Promise<Pessoa>((resolve)=>{
                resolve(pessoa);
            })
        } catch (err:any) {
            console.error(`Erro ao atualizar o pessoa de ID ${pessoa.id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async deletePessoa(pessoa:Pessoa) :Promise<Pessoa>{
        const query = "DELETE FROM biblioteca.Pessoa where id = ?;" ;

        try {
            const resultado = await executarComandoSQL(query, [pessoa.id]);
            console.log('Pessoa deletado com sucesso: ', pessoa);
            return new Promise<Pessoa>((resolve)=>{
                resolve(pessoa);
            })
        } catch (err:any) {
            console.error(`Falha ao deletar o pessoa de ID ${pessoa.id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async filterPessoa(id: number) :Promise<Pessoa>{
        const query = "SELECT * FROM biblioteca.Pessoa where id = ?" ;

        try {
            const resultado = await executarComandoSQL(query, [id]);
            console.log('Pessoa localizado com sucesso, ID: ', resultado);
            return new Promise<Pessoa>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao procurar o pessoa de ID ${id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async filterAllPessoa() :Promise<Pessoa[]>{
        const query = "SELECT * FROM biblioteca.Pessoa" ;

        try {
            const resultado = await executarComandoSQL(query, []);
            return new Promise<Pessoa[]>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao listar os pessoas gerando o erro: ${err}`);
            throw err;
        }
    }

    
}*/