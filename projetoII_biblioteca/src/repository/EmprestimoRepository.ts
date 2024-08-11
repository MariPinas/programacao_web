import { executarComandoSQL } from "../database/mysql";
import { Emprestimo } from "../model/entity/Emprestimo";


export class EmprestimoRepository{
    private static instance: EmprestimoRepository;

    constructor(){
        this.createTable();
    }
    public static getInstance(): EmprestimoRepository {
        if (!this.instance) {
            this.instance = new EmprestimoRepository();
        }
        return this.instance
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
        console.log("REPOSITORY EMPRESTIMO", emprestimo);
        const query = "INSERT INTO biblioteca.Emprestimo (livroID, usuarioID, dataEmprestimo, dataDevolucao) VALUES (?,?,?,?)" ;

        try {
            const resultado = await executarComandoSQL(query, [emprestimo.livroID,emprestimo.usuarioID,emprestimo.dataEmprestimo, emprestimo.dataDevolucao]);
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
        console.log("REPOSITORY EMPRESTIMO", emprestimo);
        const query = "UPDATE biblioteca.Emprestimo set titulo = ?, autor=?, categoriaID=? where id = ?;" ;

        try {
            const resultado = await executarComandoSQL(query, [emprestimo.livroID,emprestimo.usuarioID,emprestimo.dataEmprestimo, emprestimo.dataDevolucao, emprestimo.id]);
            console.log('Emprestimo atualizado com sucesso, ID: ', resultado);
            return new Promise<Emprestimo>((resolve)=>{
                resolve(emprestimo);
            })
        } catch (err:any) {
            console.error(`Erro ao atualizar o emprestimo de ID ${emprestimo.id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async deleteEmprestimo(emprestimo:Emprestimo) :Promise<Emprestimo[]>{
        const query = "DELETE FROM biblioteca.Emprestimo where id = ?;" ;

        try {
            const resultado: Emprestimo[] = await executarComandoSQL(query, [emprestimo.id]);
            console.log('Emprestimo deletada com sucesso: ', emprestimo);
            return new Promise<Emprestimo[]>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao deletar a emprestimo de ID ${emprestimo.id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async buscaEmprestimoporID(id: number) :Promise<Emprestimo[]>{
        const query = "SELECT * FROM biblioteca.Emprestimo where id = ?" ;

        try {
            const resultado = await executarComandoSQL(query, [id]);
            console.log('Emprestimo localizada com sucesso, ID: ', resultado);
            return new Promise<Emprestimo[]>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao procurar a emprestimo de ID ${id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async buscaEmprestimoporIdUsuarioeIdLivro(usuarioID: number, livroID:number) :Promise<Emprestimo[]>{
        const query = "SELECT * FROM biblioteca.Emprestimo where usuarioID = ? and livroID = ?" ;

        try {
            const resultado: Emprestimo[] = await executarComandoSQL(query, [usuarioID, livroID]);
            console.log('Emprestimo localizada com sucesso, id e titulo:', resultado);
            return new Promise<Emprestimo[]>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao procurar a emprestimo de ID de Usuario ${usuarioID} e ID de livro ${livroID} gerando o erro: ${err}`);
            throw err;
        }
    }

    async buscaEmprestimoporIdLivro(livroID: number) :Promise<Emprestimo[]>{
        const query = "SELECT * FROM biblioteca.Emprestimo where livroID = ?" ;

        try {
            const resultado: Emprestimo[] = await executarComandoSQL(query, [livroID]);
            console.log('Emprestimo localizada com sucesso com livro ID: ', resultado);
            return new Promise<Emprestimo[]>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao procurar a emprestimo de livro ID ${livroID} gerando o erro: ${err}`);
            throw err;
        }
    }

    async buscaEmprestimoporIdUsuario(usuarioID: number) :Promise<Emprestimo[]>{
        const query = "SELECT * FROM biblioteca.Emprestimo where usuarioID = ?" ;

        try {
            const resultado: Emprestimo[] = await executarComandoSQL(query, [usuarioID]);
            console.log('Emprestimo localizado por idUsuario: ', resultado);
            return new Promise<Emprestimo[]>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao procurar o emprestimo com id de Usuario ${usuarioID} gerando o erro: ${err}`);
            throw err;
        }
    }

    async buscaAllEmprestimos() :Promise<Emprestimo[]>{
        const query = "SELECT * FROM biblioteca.Emprestimo" ;

        try {
            const resultado = await executarComandoSQL(query, []);
            return new Promise<Emprestimo[]>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao listar as emprestimos gerando o erro: ${err}`);
            throw err;
        }
    }

}