import { executarComandoSQL } from "../database/mysql";
import { TipoConta } from "../model/TipoConta";



export class TipoContaRepository{
    constructor(){
        this.createTable();
    }

    private async createTable() {
        const query = `
        CREATE TABLE IF NOT EXISTS Banco.tipoconta (
            id INT AUTO_INCREMENT PRIMARY KEY,
            descricao VARCHAR(255) NOT NULL,
            codigoTipoConta DECIMAL(10,2) NOT NULL
        )`;

        try {
                const resultado =  await executarComandoSQL(query, []);
                console.log('Query executada com sucesso:', resultado);
        } catch (err) {
            console.error('Error');
        }
    }

    async deletaTipoConta(id: number, descricao:string, codigoTipoConta:number) :Promise<TipoConta>{
        const query = "DELETE FROM banco.tipoconta where id = ?;" ;
        try {
            const resultado = await executarComandoSQL(query, [id, descricao, codigoTipoConta]);
            console.log('Produto deletado com sucesso, ID: ', resultado);
            const tipoconta = new TipoConta(id, descricao, codigoTipoConta);
            return new Promise<TipoConta>((resolve)=>{
                resolve(tipoconta);
            })
        } catch (err:any) {
            console.error(`Falha ao deletar o produto de ID ${id} gerando o erro: ${err}`);
            throw err;
        }
    }
}
