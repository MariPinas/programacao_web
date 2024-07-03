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
        const novaVenda = vendaService.inserirVenda(req.body);
        return res.status(200).json({novaVenda});

    } catch (error: any) {
        
        return res.status(400).json({ erro: error.message });
    }
}