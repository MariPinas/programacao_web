import { CategoriaService } from "../service/CategoriaService";
import { Route, Tags, Post, Body, Res, TsoaResponse, Controller, Put} from "tsoa";
import { BasicResponseDto } from "../model/dto/BasicResponseDto";
import { CategoriaRequestDto} from "../model/dto/CategoriaDTO/CategoriaRequestDto";
import { CategoriaDto } from "../model/dto/CategoriaDTO/CategoriaDto";
import { Categoria } from "../model/entity/Categoria";

const categoriaService = new CategoriaService();

@Route("categoria")
@Tags("Categoria")
export class CategoriaController extends Controller{
    categoriaService = new CategoriaService () ;

    @Post() 
    async cadastrarCategoria(
        @Body() dto:CategoriaRequestDto,
        @Res() fail:TsoaResponse<400, BasicResponseDto>,
        @Res() success:TsoaResponse<201, BasicResponseDto>
    ): Promise<void> {
        try {
            console.log("TRY DO CONTROLLER", dto);
            const categoria = await this.categoriaService.cadastrarCategoria(dto);
            return success(201, new BasicResponseDto("Categoria criada com sucesso!", categoria));
        } catch (error: any) {
            return fail(400, new BasicResponseDto(error.message, undefined));
        }
    }

    @Put()
    async atualizarCategoria(
        @Body() dto: CategoriaDto,
        @Res() notFound: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<200, BasicResponseDto>
    ): Promise<void> {
        try {
            console.log("TRY DO CONTROLLER ATT", dto);
            const categoria = await this.categoriaService.atualizarCategoria(dto);
            return success(200, new BasicResponseDto("Categoria atualizada com sucesso!", categoria));
        } catch (error: any) {
            return notFound(400, new BasicResponseDto(error.message, undefined));
        }
    }

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