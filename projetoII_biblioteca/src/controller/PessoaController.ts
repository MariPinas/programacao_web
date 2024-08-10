/*
import { Request, Response } from "express";
import { PessoaService } from "../service/PessoaService";

const pessoaService = new PessoaService();

export async function cadastrarPessoa (req: Request, res: Response){
    try {
        const novoPessoa = await pessoaService.cadastrarPessoa(req.body);
        res.status(201).json(
            {
                mensagem:"Pessoa adicionado com sucesso!",
                pessoa:novoPessoa
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

export async function atualizarPessoa (req: Request, res: Response){
    try {
        const pessoa = await pessoaService.atualizarPessoa(req.body);
        res.status(200).json(
            {
                mensagem:"Pessoa atualizada com sucesso!",
                pessoa:pessoa
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

export async function deletarPessoa (req: Request, res: Response){
    try {
        const pessoa = await pessoaService.deletarPessoa(req.body);
        res.status(200).json(
            {
                mensagem:"Pessoa deletada com sucesso!",
                pessoa:pessoa
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

export async function filtrarPessoa (req: Request, res: Response){
    try {
        const pessoa = await pessoaService.filtrarPessoa(req.query.id);
        res.status(200).json(
            {
                mensagem:"Pessoa encontrada com sucesso!",
                pessoa:pessoa
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

export async function listarTodosPessoas (req: Request, res: Response){
    try {
        const pessoas = await pessoaService.listarTodosPessoas();
        res.status(200).json(
            {
                mensagem:"Pessoas listadas com sucesso!",
                pessoas:pessoas
            }
            );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};*/