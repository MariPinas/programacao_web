import { Request, Response } from "express";
import { CategoriaService } from "../service/CategoriaService";

const categoriaService = new CategoriaService();

export async function cadastrarCategoria (req: Request, res: Response){
    try {
        const novaCategoria = await categoriaService.cadastrarCategoria(req.body);
        res.status(201).json(
            {
                mensagem:"Categoria adicionada com sucesso!",
                categoria:novaCategoria
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

export async function atualizarCategoria (req: Request, res: Response){
    try {
        const categoria = await categoriaService.atualizarCategoria(req.body);
        res.status(200).json(
            {
                mensagem:"Categoria atualizada com sucesso!",
                categoria:categoria
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

export async function deletarCategoria (req: Request, res: Response){
    try {
        const categoria = await categoriaService.deletarCategoria(req.body);
        res.status(200).json(
            {
                mensagem:"Categoria deletada com sucesso!",
                categoria:categoria
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

export async function filtrarCategoria (req: Request, res: Response){
    try {
        const categoria = await categoriaService.filtrarCategoria(req.query.id);
        res.status(200).json(
            {
                mensagem:"Categoria encontrada com sucesso!",
                categoria:categoria
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

export async function listarTodasCategorias (req: Request, res: Response){
    try {
        const categorias = await categoriaService.listarTodasCategorias();
        res.status(200).json(
            {
                mensagem:"Categorias listadas com sucesso!",
                categorias:categorias
            }
            );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};