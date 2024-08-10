/*import { Request, Response } from "express";
import { EmprestimoService } from "../service/EmprestimoService";

const emprestimoService = new EmprestimoService();

export async function cadastrarEmprestimo (req: Request, res: Response){
    try {
        const novoEmprestimo = await emprestimoService.cadastrarEmprestimo(req.body);
        res.status(201).json(
            {
                mensagem:"Emprestimo adicionado com sucesso!",
                emprestimo:novoEmprestimo
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

export async function atualizarEmprestimo (req: Request, res: Response){
    try {
        const emprestimo = await emprestimoService.atualizarEmprestimo(req.body);
        res.status(200).json(
            {
                mensagem:"Emprestimo atualizado com sucesso!",
                emprestimo:emprestimo
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

export async function deletarEmprestimo (req: Request, res: Response){
    try {
        const emprestimo = await emprestimoService.deletarEmprestimo(req.body);
        res.status(200).json(
            {
                mensagem:"Emprestimo deletado com sucesso!",
                emprestimo:emprestimo
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

export async function filtrarEmprestimo (req: Request, res: Response){
    try {
        const emprestimo = await emprestimoService.filtrarEmprestimo(req.query.id);
        res.status(200).json(
            {
                mensagem:"Emprestimo encontrado com sucesso!",
                emprestimo:emprestimo
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

export async function listarTodosEmprestimos (req: Request, res: Response){
    try {
        const emprestimos = await emprestimoService.listarTodosEmprestimos();
        res.status(200).json(
            {
                mensagem:"Emprestimos listados com sucesso!",
                emprestimos:emprestimos
            }
            );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};*/