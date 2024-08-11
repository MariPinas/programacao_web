import { executarComandoSQL } from "../database/mysql";
import { Pessoa } from "../model/entity/Pessoa";
import { Usuario } from "../model/entity/Usuario";


export class UsuarioRepository{
    private static instance: UsuarioRepository;

    constructor(){
        this.createTable();
    }

    public static getInstance(): UsuarioRepository {
        if (!this.instance) {
            this.instance = new UsuarioRepository();
        }
        return this.instance
    }

    private async createTable() {
        const query = `
        CREATE TABLE IF NOT EXISTS biblioteca.Usuario (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nome VARCHAR(255) NOT NULL,
            senha VARCHAR(255) NOT NULL,
            idPessoa INT NOT NULL,
            FOREIGN KEY (idPessoa)
            REFERENCES biblioteca.Pessoa(id)
        )`;

        try {
                const resultado =  await executarComandoSQL(query, []);
                console.log('Query executada com sucesso:', resultado);
        } catch (err) {
            console.error('Error');
        }
    }

    
    async insertUsuario(usuario:Usuario) :Promise<Usuario>{
        const query = "INSERT INTO biblioteca.Usuario (nome,senha, idPessoa) VALUES (?,?,?)" ;

        try {
            const resultado = await executarComandoSQL(query, [usuario.nome,usuario.senha,usuario.idPessoa,]);
            console.log('usuario inserido com sucesso, ID: ', resultado.insertId);
            usuario.id = resultado.insertId;
            return new Promise<Usuario>((resolve)=>{
                resolve(usuario);
            })
        } catch (err) {
            console.error('Erro ao inserir o usuario:', err);
            throw err;
        }
    }

    async updateUsuario(usuario:Usuario) :Promise<Usuario>{
        const query = "UPDATE biblioteca.Usuario set nome = ?, senha=?, idPessoa=? where id = ?;" ;

        try {
            const resultado = await executarComandoSQL(query, [usuario.nome,usuario.senha,usuario.idPessoa, usuario.id]);
            console.log('Usuario atualizado com sucesso, ID: ', resultado);
            return new Promise<Usuario>((resolve)=>{
                resolve(usuario);
            })
        } catch (err:any) {
            console.error(`Erro ao atualizar o usuario de ID ${usuario.id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async deleteUsuario(usuario:Usuario) :Promise<Usuario[]>{
        const query = "DELETE FROM biblioteca.Usuario where id = ?;" ;

        try {
            const resultado: Usuario[] = await executarComandoSQL(query, [usuario.id]);
            console.log('Usuario deletada com sucesso: ', usuario);
            return new Promise<Usuario[]>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao deletar a usuario de ID ${usuario.id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async buscaUsuarioporID(id: number) :Promise<Usuario[]>{
        const query = "SELECT * FROM biblioteca.Usuario where id = ?" ;

        try {
            const resultado = await executarComandoSQL(query, [id]);
            console.log('Usuario localizada com sucesso, ID: ', resultado);
            return new Promise<Usuario[]>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao procurar a usuario de ID ${id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async buscaUsuarioporIDeNome(id: number, nome:number) :Promise<Usuario[]>{
        const query = "SELECT * FROM biblioteca.Usuario where id = ? and nome = ?" ;

        try {
            const resultado: Usuario[] = await executarComandoSQL(query, [id, nome]);
            console.log('Usuario localizada com sucesso, id e nome:', resultado);
            return new Promise<Usuario[]>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao procurar a usuario de ID ${id} e Nome ${nome} gerando o erro: ${err}`);
            throw err;
        }
    }

    async buscaUsuarioporNome(nome: string) :Promise<Usuario[]>{
        const query = "SELECT * FROM biblioteca.Usuario where nome = ?" ;

        try {
            const resultado: Usuario[] = await executarComandoSQL(query, [nome]);
            console.log('Usuario localizada com sucesso, Nome: ', resultado);
            return new Promise<Usuario[]>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao procurar a usuario de nome ${nome} gerando o erro: ${err}`);
            throw err;
        }
    }

    async buscaUsuarioporidPessoa(idPessoa: string) :Promise<Pessoa[]>{
        const query = "SELECT * FROM biblioteca.Pessoa where id = ?" ;

        try {
            const resultado: Pessoa[] = await executarComandoSQL(query, [idPessoa]);
            console.log('Usuario localizado com sucesso, ID da Pessoa: ', resultado);
            return new Promise<Pessoa[]>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao procurar o usuario com id de Pessoa ${idPessoa} gerando o erro: ${err}`);
            throw err;
        }
    }

    async buscaAllUsuarios() :Promise<Usuario[]>{
        const query = "SELECT * FROM biblioteca.Usuario" ;

        try {
            const resultado = await executarComandoSQL(query, []);
            return new Promise<Usuario[]>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao listar as usuarios gerando o erro: ${err}`);
            throw err;
        }
    }


    
}