import { executarComandoSQL } from "../database/mysql";
import {Pessoa} from "../model/entity/Pessoa";


export class PessoaRepository{
    private static instance: PessoaRepository;
    constructor(){
        this.createTable();
    }
    public static getInstance(): PessoaRepository {
        if (!this.instance) {
            this.instance = new PessoaRepository();
        }
        return this.instance
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
        console.log("REPOSITORY CATEGORIA", pessoa);
        const query = "INSERT INTO biblioteca.Pessoa (nome) VALUES (?)" ;

        try {
            const resultado = await executarComandoSQL(query, [pessoa.nome]);
            console.log('pessoa inserida com sucesso, ID: ', resultado.insertId);
            pessoa.id = resultado.insertId;
            return new Promise<Pessoa>((resolve)=>{
                resolve(pessoa);
            })
        } catch (err) {
            console.error('Erro ao inserir a pessoa:', err);
            throw err;
        }
    }

    async updatePessoa(pessoa:Pessoa) :Promise<Pessoa>{
        console.log("REPOSITORY CATEGORIA", pessoa);
        const query = "UPDATE biblioteca.Pessoa set nome = ? where id = ?;" ;

        try {
            const resultado = await executarComandoSQL(query, [pessoa.nome, pessoa.id]);
            console.log('Pessoa atualizada com sucesso, ID: ', resultado);
            return new Promise<Pessoa>((resolve)=>{
                resolve(pessoa);
            })
        } catch (err:any) {
            console.error(`Erro ao atualizar a pessoa de ID ${pessoa.id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async deletePessoa(pessoa:Pessoa) :Promise<Pessoa[]>{
        const query = "DELETE FROM biblioteca.Pessoa where id = ?;" ;

        try {
            const resultado: Pessoa[] = await executarComandoSQL(query, [pessoa.id]);
            console.log('Pessoa deletada com sucesso: ', pessoa);
            return new Promise<Pessoa[]>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao deletar a pessoa de ID ${pessoa.id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async buscaPessoaporID(id: number) :Promise<Pessoa>{
        const query = "SELECT * FROM biblioteca.Pessoa where id = ?" ;

        try {
            const resultado = await executarComandoSQL(query, [id]);
            console.log('Pessoa localizada com sucesso, ID: ', resultado);
            return new Promise<Pessoa>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao procurar a pessoa de ID ${id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async buscaPessoaporIDeNome(id: number, nome:number) :Promise<Pessoa[]>{
        const query = "SELECT * FROM biblioteca.Pessoa where id = ? and nome = ?" ;

        try {
            const resultado: Pessoa[] = await executarComandoSQL(query, [id, nome]);
            console.log('Pessoa localizada com sucesso, id e nome:', resultado);
            return new Promise<Pessoa[]>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao procurar a pessoa de ID ${id} e Nome ${nome} gerando o erro: ${err}`);
            throw err;
        }
    }

    async buscaPessoaporNome(nome: string) :Promise<Pessoa[]>{
        const query = "SELECT * FROM biblioteca.Pessoa where nome = ?" ;

        try {
            const resultado: Pessoa[] = await executarComandoSQL(query, [nome]);
            console.log('Pessoa localizada com sucesso, Nome: ', resultado);
            return new Promise<Pessoa[]>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao procurar a pessoa de nome ${nome} gerando o erro: ${err}`);
            throw err;
        }
    }

    async buscaAllPessoas() :Promise<Pessoa[]>{
        const query = "SELECT * FROM biblioteca.Pessoa" ;

        try {
            const resultado = await executarComandoSQL(query, []);
            return new Promise<Pessoa[]>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao listar as pessoas gerando o erro: ${err}`);
            throw err;
        }
    }

    
}