import { Request, Response } from "express";
import { LivroService } from "../service/LivroService";

const livroService = new LivroService();

export async function cadastrarLivro (req: Request, res: Response){
    try {
        const novoLivro = await livroService.cadastrarLivro(req.body);
        res.status(201).json(
            {
                mensagem:"Livro adicionado com sucesso!",
                livro:novoLivro
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};
export async function listarTodosLivros (req: Request, res: Response){
    try {
        const livros = await livroService.listarTodosLivros();
        res.status(200).json(
            {
                mensagem:"Livros listados com sucesso!",
                livros:livros
            }
            );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

export async function filtrarLivro (req: Request, res: Response){
    try {
        const Livro = await livroService.filtrarLivro(req.params.id);
        res.status(200).json(
            {
                mensagem:"Livro encontrado com sucesso!",
                livro:Livro
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

export async function atualizarLivro (req: Request, res: Response){
    try {
        const livro = await livroService.atualizarLivro(req.body);
        res.status(200).json(
            {
                mensagem:"Livro atualizado com sucesso!",
                livro: livro
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};
/*


export async function deletarProduto (req: Request, res: Response){
    try {
        const produto = await productService.deletarProduto(req.body);
        res.status(200).json(
            {
                mensagem:"Produto deletado com sucesso!",
                produto:produto
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};



export async function listarTodosProduto (req: Request, res: Response){
    try {
        const produtos = await productService.listarTodosProdutos();
        res.status(200).json(
            {
                mensagem:"Produtos listados com sucesso!",
                produtos:produtos
            }
            );
    } catch (error: any) {
    }
};
*/