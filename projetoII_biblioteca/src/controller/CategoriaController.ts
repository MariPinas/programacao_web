import { Request, Response } from "express";
import { CategoriaService } from "../service/CategoriaService";
import { Route, Tags, Post, Body, Res, TsoaResponse, Controller} from "tsoa";
import { LivroService } from "../service/LivroService";
import { LivroRequestDto } from "../model/dto/ProductRequestDto";
import { BasicResponseDto } from "../model/dto/BasicResponseDto";

const categoriaService = new CategoriaService();


@Route("categoria")
@Tags("Categoria")
export class CategoriaController extends Controller{
    productService = new CategoriaService () ;

    @Post() 
    async cadastrarCategoria (
        @Body() dto:LivroRequestDto,
        @Res() fail:TsoaResponse <400,BasicResponseDto>,
        @Res() success:TsoaResponse <201,BasicResponseDto>
    ):Promise<void>{
        try {
            const novaCategoria = await categoriaService.cadastrarCategoria(dto);
            return success(201,new BasicResponseDto("Categoria adicionada com sucesso!",novaCategoria));
        } catch (error:any){
        return fail(400, new BasicResponseDto(error.message,undefined));
        }
    }

    async cadastrarCategoria2 (req: Request, res: Response){
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
}




/*export async function atualizarCategoria (req: Request, res: Response){
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
@delete
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
@get
export async function listarTodasCategorias (req: Request, res: Response){
    try {
        const categorias = await categoriaService.listarTodasCategorias(); @query() id:number
        res.status(200).json(
            {
                mensagem:"Categorias listadas com sucesso!",
                categorias:categorias
            }
            );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};*/