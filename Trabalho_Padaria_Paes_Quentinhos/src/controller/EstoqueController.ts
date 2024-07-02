import { Request, Response } from "express";
import { EstoqueService } from "../service/EstoqueService";
import { globalData } from "../global/globalData";

const estoqueService = new EstoqueService();

//checar se modalidade ainda existe
import { ModalidadeService } from "../service/ModalidadeService";
const modalidadeService = new ModalidadeService();

export function adicionaItem(req: Request, res: Response){
    try{
        const novoEstoque = estoqueService.adicionarItem(req.body);
        res.status(201).json(
            {
                mensagem: "Item adicionado ao estoque com sucesso!",
                Estoque: novoEstoque
            }
        )

    }catch(error:any){
        res.status(400).json({ message: error.message})
    }
}


export function pesquisarNoEstoque (req: Request, res: Response){
    try {
        const Estoque = estoqueService.consultarItemPorID(req.params.id);
        if(Estoque){
        res.status(200).json(
            {
                mensagem:"Item encontrado com sucesso no estoque!",
                Estoque:Estoque
            }
            );
        }else{
            res.status(404).json({mensagem:"Estoque não encontrado."});
        }
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

export function listaEstoques (req: Request, res: Response){
    try {
        const modalidadeEncontrada = modalidadeService.getModalidades(req.query.ordem);
        if(modalidadeEncontrada.length !== -1){
        res.status(200).json(estoqueService.getEstoques(req.query.ordem));
        }else{
            res.status(404).json({mensagem:"Nao existe nenhuma modalidade cadastrada no estoque."});
        }
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

export function deletarEstoque(req: Request, res: Response){
    try{
        estoqueService.deletarEstoque(req.body.id, req.body.modalidadeId, req.body.quantidade);
        res.status(200).json({message: "Estoque deletado com sucesso!"});
    }catch(error:any){
        res.status(400).json({message: error.message})
    }
};

export function atualizarEstoque (req: Request, res: Response){
    try {
        const id = parseInt(req.body.id);
        console.log("ID: ", id);
        const item = estoqueService.consultarItemPorID(id);
        if(item){
        const novoEstoque = estoqueService.atualizarEstoque(req.body);
        res.status(201).json(
            {
                mensagem:"Estoque atualizado com sucesso!",
                Estoque:novoEstoque,
            }
            );
        }else {
            res.status(400).json({ mensagem: "Item não encontrado. " });
        }
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};