/*import { executarComandoSQL } from "../database/mysql";
import { Usuario } from "../model/entity/Usuario";


export class UsuarioRepository{

    constructor(){
        this.createTable();
    }

    private async createTable() {
        const query = `
        CREATE TABLE IF NOT EXISTS biblioteca.Usuario (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nome VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
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
        const query = "INSERT INTO biblioteca.Usuario (nome, email, senha, idPessoa) VALUES (?, ?, ?, ?)" ;

        try {
            const resultado = await executarComandoSQL(query, [usuario.nome, usuario.email, usuario.senha, usuario.idPessoa]);
            console.log('Usuario inserido com sucesso, ID: ', resultado.insertId);
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
        const query = "UPDATE biblioteca.Usuario set nome = ?, email = ?, senha = ?, idPessoa = ? where id = ?;" ;

        try {
            const resultado = await executarComandoSQL(query, [usuario.nome, usuario.email, usuario.senha, usuario.idPessoa, usuario.id]);
            console.log('Usuario atualizado com sucesso, ID: ', resultado);
            return new Promise<Usuario>((resolve)=>{
                resolve(usuario);
            })
        } catch (err:any) {
            console.error(`Erro ao atualizar o usuario de ID ${usuario.id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async deleteUsuario(usuario:Usuario) :Promise<Usuario>{
        const query = "DELETE FROM biblioteca.Usuario where id = ?;" ;

        try {
            const resultado = await executarComandoSQL(query, [usuario.id]);
            console.log('Usuario deletado com sucesso: ', usuario);
            return new Promise<Usuario>((resolve)=>{
                resolve(usuario);
            })
        } catch (err:any) {
            console.error(`Falha ao deletar o usuario de ID ${usuario.id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async filterUsuario(id: number) :Promise<Usuario>{
        const query = "SELECT * FROM biblioteca.Usuario where id = ?" ;

        try {
            const resultado = await executarComandoSQL(query, [id]);
            console.log('Usuario localizado com sucesso, ID: ', resultado);
            return new Promise<Usuario>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao procurar o usuario de ID ${id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async filterAllUsuario() :Promise<Usuario[]>{
        const query = "SELECT * FROM biblioteca.Usuario" ;

        try {
            const resultado = await executarComandoSQL(query, []);
            return new Promise<Usuario[]>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao listar os usuarios gerando o erro: ${err}`);
            throw err;
        }
    }

    
}*/