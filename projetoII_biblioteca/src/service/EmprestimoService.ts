import { Emprestimo } from "../model/entity/Emprestimo";
import { EmprestimoRepository } from "../repository/EmprestimoRepository";

export class EmprestimoService{

    private emprestimoRepository = EmprestimoRepository.getInstance();

    async cadastrarEmprestimo(emprestimoData: any): Promise<Emprestimo> {
        const {livroID, usuarioID, dataEmprestimo, dataDevolucao} = emprestimoData;

        const emprestimo = new Emprestimo(undefined, livroID, usuarioID, dataEmprestimo, dataDevolucao);

        const emprestimosDeIdLivroExistente = await this.emprestimoRepository.buscaEmprestimoporIdLivro(livroID);
        if (emprestimosDeIdLivroExistente.length == 0) {
            throw new Error("Emprestimo nao pode ser feito, livro nao existe.");
        }
        const emprestimoDeIdUsuarioExistente = await this.emprestimoRepository.buscaEmprestimoporIdUsuario(usuarioID);
        if (emprestimoDeIdUsuarioExistente.length == 0) {
            throw new Error("Emprestimo nao pode ser feito, esse Usuario nao existe.");
        }
        const novoEmprestimo = await this.emprestimoRepository.insertEmprestimo(emprestimo);
        console.log("Service - Insert Emprestimo", novoEmprestimo);
        return novoEmprestimo;
    }

    async atualizarEmprestimo(emprestimoData: any): Promise<Emprestimo> {
        const {id, livroID, usuarioID, dataEmprestimo, dataDevolucao} = emprestimoData;
        const emprestimoEncontrado =  await this.emprestimoRepository.buscaEmprestimoporID(id);
        if(emprestimoEncontrado){
            const emprestimo = new Emprestimo(id, livroID, usuarioID, dataEmprestimo, dataDevolucao)
            await this.emprestimoRepository.updateEmprestimo(emprestimo);
            console.log("Service - Update ", emprestimo);
            return emprestimo;
        }else{
        throw new Error("400 Bad Request - Nao foi possivel atualizar!!!");
        } 
    }

    async deletarEmprestimo(emprestimoData: any): Promise<Emprestimo[]> {
        const {id,livroID, usuarioID, dataEmprestimo, dataDevolucao} = emprestimoData;
        
        const emprestimo = new Emprestimo(id,livroID, usuarioID, dataEmprestimo, dataDevolucao)
        const emprestimoEncontrado =  await this.emprestimoRepository.buscaEmprestimoporIdUsuarioeIdLivro(usuarioID, livroID);
        
        if(emprestimoEncontrado.length != 0){
            await this.emprestimoRepository.deleteEmprestimo(emprestimo);
            console.log("Service - Delete ", emprestimo);
            return emprestimoEncontrado;
        }else{
            throw new Error("404!!! Not Found - Emprestimo nao encontrado!!");
        }
    }

    async buscaEmprestimoPorLivroId(idLivro: number): Promise<Emprestimo[]> {
        const livroID:number = idLivro;
        if(!livroID){
            throw new Error("400 Bad Request - Informações incompletas");
        }
        const emprestimo =  await this.emprestimoRepository.buscaEmprestimoporIdLivro(livroID);
        if(emprestimo.length != 0){
            console.log("Service - Filtrar Livro ID", emprestimo);
            return emprestimo;
        }else{
            throw new Error("404 Not Found - Emprestimo com esse id de livro nao existe!!!");
        }
    }
    async buscaEmprestimoPorUsuarioId(idUsuario: number): Promise<Emprestimo[]> {
        const usuarioID:number = idUsuario;
        if(!usuarioID){
            throw new Error("400 Bad Request - Informações incompletas");
        }
        const emprestimo =  await this.emprestimoRepository.buscaEmprestimoporIdUsuario(usuarioID);
        if(emprestimo.length != 0){
            console.log("Service - Filtrar Usuario ID", emprestimo);
            return emprestimo;
        }else{
            throw new Error("404 Not Found - Emprestimo com esse id de usuario nao existe!!!");
        }
    }

    async buscaEmprestimoPorID(emprestimoData: any): Promise<Emprestimo[]> {
        const idNumber = parseInt(emprestimoData, 10);
        if(!idNumber){
            throw new Error("400 Bad Request - Informações incompletas");
        }
        const emprestimo =  await this.emprestimoRepository.buscaEmprestimoporID(idNumber);
        if(emprestimo){
            console.log("Service - Filtrar ID", emprestimo);
            return emprestimo;
        }else{
            throw new Error("404 Not Found  - Emprestimo com esse id nao existe!!!");
        }
        
    }

    async listarTodasEmprestimos(): Promise<Emprestimo[]> {
        const emprestimo =  await this.emprestimoRepository.buscaAllEmprestimos();
        console.log("Service - Filtrar Todos", emprestimo);
        return emprestimo;
    }

}