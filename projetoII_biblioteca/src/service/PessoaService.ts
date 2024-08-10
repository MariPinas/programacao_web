/*import { Pessoa } from "../model/entity/Pessoa";
import { PessoaRepository } from "../repository/PessoaRepository";

export class PessoaService{

    pessoaRepository: PessoaRepository = new PessoaRepository(); //

    async cadastrarPessoa(pessoaData: any): Promise<Pessoa> {
        const { nome, email, senha } = pessoaData;
        
        const pessoa = new Pessoa(undefined, nome, email, senha)

        const novaPessoa =  await this.pessoaRepository.insertPessoa(pessoa);
        console.log("Service - Insert ", novaPessoa);
        return novaPessoa;
    }

    async atualizarPessoa(pessoaData: any): Promise<Pessoa> {
        const { id, nome, email, senha } = pessoaData;

        const pessoa = new Pessoa(id, nome, email, senha)

        await this.pessoaRepository.updatePessoa(pessoa);
        console.log("Service - Update ", pessoa);
        return pessoa;
    }

    async deletarPessoa(pessoaData: any): Promise<Pessoa> {
        const { id, nome, email, senha } = pessoaData;

        const pessoa = new Pessoa(id, nome, email, senha)

        await this.pessoaRepository.deletePessoa(pessoa);
        console.log("Service - Delete ", pessoa);
        return pessoa;
    }

    async filtrarPessoa(pessoaData: any): Promise<Pessoa> {
        const idNumber = parseInt(pessoaData, 10);

        const pessoa =  await this.pessoaRepository.filterPessoa(idNumber);
        console.log("Service - Filtrar", pessoa);
        return pessoa;
    }

    async listarTodosPessoas(): Promise<Pessoa[]> {
        const pessoa =  await this.pessoaRepository.filterAllPessoa();
        console.log("Service - Filtrar Todos", pessoa);
        return pessoa;
    }

}*/