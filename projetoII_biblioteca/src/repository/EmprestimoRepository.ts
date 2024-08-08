import { executarComandoSQL } from "../database/mysql";
import { Emprestimo } from "../model/Emprestimo";


export class EmprestimoRepository{

    constructor(){
        this.createTable();
    }

    private async createTable() {
        const query = `
        CREATE TABLE IF NOT EXISTS biblioteca.Emprestimo (
            id INT AUTO_INCREMENT PRIMARY KEY,
            livroID INT NOT NULL,
            usuarioID INT NOT NULL,
            dataEmprestimo DATE NOT NULL,
            dataDevolucao DATE NOT NULL,
            FOREIGN KEY (livroID)
            REFERENCES biblioteca.Livro(id),
            FOREIGN KEY (usuarioID)
            REFERENCES biblioteca.Usuario(id)
        )`;

        try {
                const resultado =  await executarComandoSQL(query, []);
                console.log('Query executada com sucesso:', resultado);
        } catch (err) {
            console.error('Error');
        }
    }

    async insertEmprestimo(emprestimo:Emprestimo) :Promise<Emprestimo>{
        const query = "INSERT INTO biblioteca.Emprestimo (livroID, usuarioID, dataEmprestimo, dataDevolucao) VALUES (?, ?, ?, ?)" ;

        try {
            const resultado = await executarComandoSQL(query, [emprestimo.livroID, emprestimo.usuarioID, emprestimo.dataEmprestimo, emprestimo.dataDevolucao]);
            console.log('Emprestimo inserido com sucesso, ID: ', resultado.insertId);
            emprestimo.id = resultado.insertId;
            return new Promise<Emprestimo>((resolve)=>{
                resolve(emprestimo);
            })
        } catch (err) {
            console.error('Erro ao inserir o emprestimo:', err);
            throw err;
        }
    }

    async updateEmprestimo(emprestimo:Emprestimo) :Promise<Emprestimo>{
        const query = "UPDATE biblioteca.Emprestimo set livroID = ?, usuarioID = ?, dataEmprestimo = ?, dataDevolucao = ? where id = ?;" ;

        try {
            const resultado = await executarComandoSQL(query, [emprestimo.livroID, emprestimo.id]);
            console.log('Emprestimo atualizado com sucesso, ID: ', resultado);
            return new Promise<Emprestimo>((resolve)=>{
                resolve(emprestimo);
            })
        } catch (err:any) {
            console.error(`Erro ao atualizar o emprestimo de ID ${emprestimo.id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async deleteEmprestimo(emprestimo:Emprestimo) :Promise<Emprestimo>{
        const query = "DELETE FROM biblioteca.Emprestimo where id = ?;" ;

        try {
            const resultado = await executarComandoSQL(query, [emprestimo.id]);
            console.log('Emprestimo deletado com sucesso: ', emprestimo);
            return new Promise<Emprestimo>((resolve)=>{
                resolve(emprestimo);
            })
        } catch (err:any) {
            console.error(`Falha ao deletar o emprestimo de ID ${emprestimo.id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async filterEmprestimo(id: number) :Promise<Emprestimo>{
        const query = "SELECT * FROM biblioteca.Emprestimo where id = ?" ;

        try {
            const resultado = await executarComandoSQL(query, [id]);
            console.log('Emprestimo localizado com sucesso, ID: ', resultado);
            return new Promise<Emprestimo>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao procurar o emprestimo de ID ${id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async filterAllEmprestimo() :Promise<Emprestimo[]>{
        const query = "SELECT * FROM biblioteca.Emprestimo" ;

        try {
            const resultado = await executarComandoSQL(query, []);
            return new Promise<Emprestimo[]>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao listar os emprestimos gerando o erro: ${err}`);
            throw err;
        }
    }

    
}