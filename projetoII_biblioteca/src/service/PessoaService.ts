import { Pessoa } from "../model/entity/Pessoa";
import { PessoaRepository } from "../repository/PessoaRepository";

export class PessoaService{

    private pessoaRepository = PessoaRepository.getInstance();

    async cadastrarPessoa(pessoaData: any): Promise<Pessoa> {
        const {nome, email} = pessoaData;

        const pessoa = new Pessoa(undefined, nome, email);

        const pessoasEncontradas = await this.pessoaRepository.buscaPessoaporNome(nome);
        if (pessoasEncontradas.length > 0) {
            throw new Error("Pessoa com esse nome já existe.");
        }

        const novaPessoa = await this.pessoaRepository.insertPessoa(pessoa);
        console.log("Service - Insert Pessoa", novaPessoa);
        return novaPessoa;
    }

    async atualizarPessoa(pessoaData: any): Promise<Pessoa> {
        const {id, nome, email} = pessoaData;
        console.log("SERVICE ATT CATEGORIA - ", id, nome, email);
        if(!nome){
            throw new Error("400 Bad Request - Informações incompletas");
        }
        const pessoaEncontrada =  await this.pessoaRepository.buscaPessoaporID(id);
        if(pessoaEncontrada){
            const pessoa = new Pessoa(id, nome, email)
            await this.pessoaRepository.updatePessoa(pessoa);
            console.log("Service - Update ", pessoa);
            return pessoa;
        }else{
        throw new Error("400 Bad Request - Nao foi possivel atualizar!!!");
        } 
    }

    async deletarPessoa(pessoaData: any): Promise<Pessoa[]> {
        const {id, nome, email} = pessoaData;
        if(nome.trim() === ''||email.trim() === ''){
            throw new Error("400 Bad Request - Informações erradas");
        }
        const pessoa = new Pessoa(id, nome, email)
        const pessoaEncontrada =  await this.pessoaRepository.buscaPessoaporIDeNome(id, nome);
        
        if(pessoaEncontrada.length != 0){
            await this.pessoaRepository.deletePessoa(pessoa);
            console.log("Service - Delete ", pessoa);
            return pessoaEncontrada;
        }else{
            throw new Error("404!!! Not Found - Pessoa nao encontrada!!");
        }
    }

    async buscaPessoaPorNome(name: string): Promise<Pessoa[]> {
        const nome:string = name;
        if(!nome || nome.trim() === ''){
            throw new Error("400 Bad Request - Informações incompletas");
        }
        const pessoa =  await this.pessoaRepository.buscaPessoaporNome(nome);
        if(pessoa.length != 0){
            console.log("Service - Filtrar Nome", pessoa);
            return pessoa;
        }else{
            throw new Error("404 Not Found - Pessoa com esse nome nao existe!!!");
        }
    }

    async buscaPessoaPorID(pessoaData: any): Promise<Pessoa> {
        const idNumber = parseInt(pessoaData, 10);
        if(!idNumber){
            throw new Error("400 Bad Request - Informações incompletas");
        }
        const pessoa =  await this.pessoaRepository.buscaPessoaporID(idNumber);
        if(pessoa){
            console.log("Service - Filtrar ID", pessoa);
            return pessoa;
        }else{
            throw new Error("404 Not Found  - Pessoa com esse id nao existe!!!");
        }
        
    }

    async listarTodasPessoas(): Promise<Pessoa[]> {
        const pessoa =  await this.pessoaRepository.buscaAllPessoas();
        console.log("Service - Filtrar Todos", pessoa);
        return pessoa;
    }

}