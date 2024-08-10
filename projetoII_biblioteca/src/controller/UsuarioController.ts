/*
import { Request, Response } from "express";
import { UsuarioService } from "../service/UsuarioService";

const usuarioService = new UsuarioService();

export async function cadastrarUsuario (req: Request, res: Response){
    try {
        const novoUsuario = await usuarioService.cadastrarUsuario(req.body);
        res.status(201).json(
            {
                mensagem:"Usuario adicionado com sucesso!",
                usuario:novoUsuario
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

export async function atualizarUsuario (req: Request, res: Response){
    try {
        const usuario = await usuarioService.atualizarUsuario(req.body);
        res.status(200).json(
            {
                mensagem:"Usuario atualizado com sucesso!",
                usuario:usuario
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

export async function deletarUsuario (req: Request, res: Response){
    try {
        const usuario = await usuarioService.deletarUsuario(req.body);
        res.status(200).json(
            {
                mensagem:"Usuario deletado com sucesso!",
                usuario:usuario
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

export async function filtrarUsuario (req: Request, res: Response){
    try {
        const usuario = await usuarioService.filtrarUsuario(req.query.id);
        res.status(200).json(
            {
                mensagem:"Usuario encontrado com sucesso!",
                usuario:usuario
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

export async function listarTodosUsuarios (req: Request, res: Response){
    try {
        const usuarios = await usuarioService.listarTodosUsuarios();
        res.status(200).json(
            {
                mensagem:"Usuarios listados com sucesso!",
                usuarios:usuarios
            }
            );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};*/