import { Request, Response } from "express";
import { ModalidadeService} from "../service/ModalidadeService";

const modalidadeService = new ModalidadeService();

export function cadastrarModalidade (req: Request, res: Response){
    try {
        const novaModalidade = modalidadeService.cadastrarModalidade(req.body);
        res.status(200).json(
            {
                mensagem:"Modalidade adicionada com sucesso!",
                produto:novaModalidade
            }
            );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

export function pesquisarTipoPao (req: Request, res: Response){
    try {
        const tipoPao = modalidadeService.consultarModalidade(req.params.id);
        if(tipoPao){
        res.status(200).json(
            {
                mensagem:"Tipo de pao encontrado com sucesso!",
                produto:tipoPao
            }
            );
        }else{
            res.status(404).json({mensagem:"Tipo de pao não encontrado."});
        }
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

export function listaModalidades (req: Request, res: Response){
    try {
        res.status(200).json(modalidadeService.getModalidades(req.query.ordem));
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

export function deletarModalidade(req: Request, res: Response){
    try{
        modalidadeService.deletarModalidade(req.params.id);
        res.status(200).json({message: "Modalidade deletado com sucesso!"});
    }catch(error:any){
        res.status(400).json({message: error.message})
    }
};

export function atualizarModalidade (req: Request, res: Response){
    try {
        const tipoPao = modalidadeService.atualizarModalidade(req.body);
        res.status(201).json(
            {
                mensagem:"Modalidade atualizado com sucesso!",
                produto:tipoPao
            }
            );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};