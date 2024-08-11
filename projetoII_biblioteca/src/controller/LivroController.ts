import { LivroService } from "../service/LivroService";
import { Route, Tags, Post, Body, Res, TsoaResponse, Controller, Put, Delete, Get, Path, Query} from "tsoa";
import { BasicResponseDto } from "../model/dto/BasicResponseDto";
import { LivroRequestDto} from "../model/dto/LivroDTO/LivroRequestDto";
import { LivroDto } from "../model/dto/LivroDTO/LivroDto";
import { Livro } from "../model/entity/Livro";



@Route("livro")
@Tags("Livro")
export class LivroController extends Controller{
    serviceLivro = new LivroService();

    @Post()
    async cadastrarLivro(
        @Body() dto: LivroRequestDto,
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<201, BasicResponseDto>
    ): Promise<void> {
        try {
            console.log("TRY DO CONTROLLER", dto);
            const product = await this.serviceLivro.cadastrarLivro(dto);
            return success(201, new BasicResponseDto("Livro criado com sucesso!", product));
        } catch (error: any) {
            return fail(400, new BasicResponseDto(error.message, undefined));
        }
    }
 
    @Put()
    async atualizarLivro(
        @Body() dto: LivroDto,
        @Res() notFound: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<200, BasicResponseDto>
    ): Promise<void> {
        try {
            console.log("TRY DO CONTROLLER ATT", dto);
            const livro = await this.serviceLivro.atualizarLivro(dto);
            return success(200, new BasicResponseDto("Livro atualizado com sucesso!", livro));
        } catch (error: any) {
            return notFound(400, new BasicResponseDto(error.message, undefined));
        }
    }

    @Delete()
    async deletarLivro (
        @Body() dto: LivroDto,
        @Res() notFound: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<200, BasicResponseDto>
    ): Promise<void> {
        try {
            const livro = await this.serviceLivro.deletarLivro(dto);
            return success(200, new BasicResponseDto("Livro deletado com sucesso!", livro));
        } catch (error: any) {
            return notFound(400, new BasicResponseDto(error.message, undefined));
        }
    }
    @Get("id/{id}")
    async filtrarLivroPorId(
        @Path() id: number,
        @Res() notFound: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<200, BasicResponseDto>
    ): Promise<void> {
        try {
            const livro = await this.serviceLivro.buscaLivroPorID(id);
            return success(200, new BasicResponseDto("Livro encontrado!", livro));
        } catch (error: any) {
            return notFound(400, new BasicResponseDto(error.message, undefined));
        }
    }

    @Get("nome")
    async filtrarLivroPorNome(
        @Query() titulo: string,
        @Res() notFound: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<200, BasicResponseDto>
    ): Promise<void> {
        try {
            const livro = await this.serviceLivro.buscaLivroPorTitulo(titulo);
            return success(200, new BasicResponseDto("Livro encontrado!", livro));
        } catch (error: any) {
            return notFound(400, new BasicResponseDto(error.message, undefined));

        }
    }

    @Get("all")
    async listarTodosLivros(
        @Res() notFound: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<200, BasicResponseDto>
    ): Promise<void> {
        try {
            const livros: Livro[] = await this.serviceLivro.listarTodasLivros();
            return success(200, new BasicResponseDto("Livros listados com sucesso!", livros));
        } catch (error: any) {
            return notFound(400, new BasicResponseDto(error.message, undefined));
        }
    }

}
