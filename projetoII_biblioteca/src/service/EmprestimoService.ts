/*import { Emprestimo } from "../model/Emprestimo";
import { EmprestimoRepository } from "../repository/EmprestimoRepository";

export class EmprestimoService{

    emprestimoRepository: EmprestimoRepository = new EmprestimoRepository(); //

    async cadastrarEmprestimo(emprestimoData: any): Promise<Emprestimo> {
        const { livroID, usuarioID, dataEmprestimo, dataDevolucao } = emprestimoData;
        
        const emprestimo = new Emprestimo(undefined, livroID, usuarioID, dataEmprestimo, dataDevolucao)

        const novoEmprestimo =  await this.emprestimoRepository.insertEmprestimo(emprestimo);
        console.log("Service - Insert ", novoEmprestimo);
        return novoEmprestimo;
    }

    async atualizarEmprestimo(emprestimoData: any): Promise<Emprestimo> {
        const { id, livroID, usuarioID, dataEmprestimo, dataDevolucao } = emprestimoData;

        const emprestimo = new Emprestimo(id, livroID, usuarioID, dataEmprestimo, dataDevolucao)

        await this.emprestimoRepository.updateEmprestimo(emprestimo);
        console.log("Service - Update ", emprestimo);
        return emprestimo;
    }

    async deletarEmprestimo(emprestimoData: any): Promise<Emprestimo> {
        const { id, livroID, usuarioID, dataEmprestimo, dataDevolucao } = emprestimoData;

        const emprestimo = new Emprestimo(id, livroID, usuarioID, dataEmprestimo, dataDevolucao)

        await this.emprestimoRepository.deleteEmprestimo(emprestimo);
        console.log("Service - Delete ", emprestimo);
        return emprestimo;
    }

    async filtrarEmprestimo(emprestimoData: any): Promise<Emprestimo> {
        const idNumber = parseInt(emprestimoData, 10);

        const emprestimo =  await this.emprestimoRepository.filterEmprestimo(idNumber);
        console.log("Service - Filtrar", emprestimo);
        return emprestimo;
    }

    async listarTodosEmprestimos(): Promise<Emprestimo[]> {
        const emprestimos =  await this.emprestimoRepository.filterAllEmprestimo();
        console.log("Service - Filtrar Todos", emprestimos);
        return emprestimos;
    }

}*/