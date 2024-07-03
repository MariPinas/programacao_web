import { Request, Response } from 'express';
import { VendaService } from '../service/VendaService';
const vendaService = new VendaService();

export function realizarVenda(req: Request, res: Response) {
    try {

        const novaVenda = vendaService.inserirVenda(req.body);
        return res.status(200).json({novaVenda});

    } catch (error: any) {
        
        return res.status(400).json({ erro: error.message });
    }
}

export function pesquisarVenda(req: Request, res: Response){
    try {
        const Venda = vendaService.recuperarVenda(req.params.id);
        if(Venda){
        res.status(200).json(
            {
                mensagem:"Venda encontrada com sucesso!",
                venda:Venda
            }
            );
        }else{
            res.status(404).json({mensagem:"venda não encontrado."});
        }
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};