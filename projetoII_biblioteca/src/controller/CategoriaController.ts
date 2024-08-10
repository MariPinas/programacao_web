import { CategoriaService } from "../service/CategoriaService";
import { Route, Tags, Post, Body, Res, TsoaResponse, Controller, Put, Delete, Get, Path, Query} from "tsoa";
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

    @Delete()
    async deletarCategoria (
        @Body() dto: CategoriaDto,
        @Res() notFound: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<200, BasicResponseDto>
    ): Promise<void> {
        try {
            const categoria = await this.categoriaService.deletarCategoria(dto);
            return success(200, new BasicResponseDto("Categoria deletada com sucesso!", categoria));
        } catch (error: any) {
            return notFound(400, new BasicResponseDto(error.message, undefined));
        }
    }
    @Get("id/{id}")
    async filtrarCategoriaPorId(
        @Path() id: number,
        @Res() notFound: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<200, BasicResponseDto>
    ): Promise<void> {
        try {
            const categoria = await this.categoriaService.buscaCategoriaPorID(id);
            return success(200, new BasicResponseDto("Categoria encontrada!", categoria));
        } catch (error: any) {
            return notFound(400, new BasicResponseDto(error.message, undefined));
        }
    }

    @Get("nome/{nome}")
    async filtrarProdutoPorNome(
        @Query() nome: string,
        @Res() notFound: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<200, BasicResponseDto>
    ): Promise<void> {
        try {
            const categoria = await this.categoriaService.buscaCategoriaPorNome(nome);
            return success(200, new BasicResponseDto("Produto encontrado!", categoria));
        } catch (error: any) {
            return notFound(400, new BasicResponseDto(error.message, undefined));
        }
    }

    @Get("all")
    async listarTodosProduto(
        @Res() notFound: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<200, BasicResponseDto>
    ): Promise<void> {
        try {
            const categorias: Categoria[] = await this.categoriaService.listarTodasCategorias();
            return success(200, new BasicResponseDto("Produtos listados com sucesso!", categorias));
        } catch (error: any) {
            return notFound(400, new BasicResponseDto(error.message, undefined));
        }
    }

}
