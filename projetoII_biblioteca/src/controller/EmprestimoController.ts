import { EmprestimoService } from "../service/EmprestimoService";
import { Route, Tags, Post, Body, Res, TsoaResponse, Controller, Put, Delete, Get, Path, Query} from "tsoa";
import { BasicResponseDto } from "../model/dto/BasicResponseDto";
import { EmprestimoRequestDto} from "../model/dto/EmprestimoDTO/EmprestimoRequestDto";
import { EmprestimoDto } from "../model/dto/EmprestimoDTO/EmprestimoDto";
import { Emprestimo } from "../model/entity/Emprestimo";



@Route("emprestimo")
@Tags("Emprestimo")
export class EmprestimoController extends Controller{
    serviceEmprestimo = new EmprestimoService();

    @Post()
    async cadastrarEmprestimo(
        @Body() dto: EmprestimoRequestDto,
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<201, BasicResponseDto>
    ): Promise<void> {
        try {
            console.log("TRY DO CONTROLLER", dto);
            const product = await this.serviceEmprestimo.cadastrarEmprestimo(dto);
            return success(201, new BasicResponseDto("Emprestimo criado com sucesso!", product));
        } catch (error: any) {
            return fail(400, new BasicResponseDto(error.message, undefined));
        }
    }
 
    @Put()
    async atualizarEmprestimo(
        @Body() dto: EmprestimoDto,
        @Res() notFound: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<200, BasicResponseDto>
    ): Promise<void> {
        try {
            console.log("TRY DO CONTROLLER ATT", dto);
            const emprestimo = await this.serviceEmprestimo.atualizarEmprestimo(dto);
            return success(200, new BasicResponseDto("Emprestimo atualizado com sucesso!", emprestimo));
        } catch (error: any) {
            return notFound(400, new BasicResponseDto(error.message, undefined));
        }
    }

    @Delete()
    async deletarEmprestimo (
        @Body() dto: EmprestimoDto,
        @Res() notFound: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<200, BasicResponseDto>
    ): Promise<void> {
        try {
            const emprestimo = await this.serviceEmprestimo.deletarEmprestimo(dto);
            return success(200, new BasicResponseDto("Emprestimo deletado com sucesso!", emprestimo));
        } catch (error: any) {
            return notFound(400, new BasicResponseDto(error.message, undefined));
        }
    }
    @Get("id/{id}")
    async filtrarEmprestimoPorId(
        @Path() id: number,
        @Res() notFound: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<200, BasicResponseDto>
    ): Promise<void> {
        try {
            const emprestimo = await this.serviceEmprestimo.buscaEmprestimoPorID(id);
            return success(200, new BasicResponseDto("Emprestimo encontrado!", emprestimo));
        } catch (error: any) {
            return notFound(400, new BasicResponseDto(error.message, undefined));
        }
    }

    @Get("idLivro/{livroID}")
    async filtrarEmprestimoPorLivroId(
        @Path() livroID: number,
        @Res() notFound: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<200, BasicResponseDto>
    ): Promise<void> {
        try {
            const emprestimo = await this.serviceEmprestimo.buscaEmprestimoPorLivroId(livroID);
            return success(200, new BasicResponseDto("Emprestimo encontrado!", emprestimo));
        } catch (error: any) {
            return notFound(400, new BasicResponseDto(error.message, undefined));

        }
    }

    @Get("IdUsuario/{usuarioID}")
    async filtrarEmprestimoPorUsuarioId(
        @Path() usuarioID: number,
        @Res() notFound: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<200, BasicResponseDto>
    ): Promise<void> {
        try {
            const emprestimo = await this.serviceEmprestimo.buscaEmprestimoPorUsuarioId(usuarioID);
            return success(200, new BasicResponseDto("Emprestimo encontrado!", emprestimo));
        } catch (error: any) {
            return notFound(400, new BasicResponseDto(error.message, undefined));

        }
    }

    @Get("all")
    async listarTodosEmprestimos(
        @Res() notFound: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<200, BasicResponseDto>
    ): Promise<void> {
        try {
            const emprestimos: Emprestimo[] = await this.serviceEmprestimo.listarTodasEmprestimos();
            return success(200, new BasicResponseDto("Emprestimos listados com sucesso!", emprestimos));
        } catch (error: any) {
            return notFound(400, new BasicResponseDto(error.message, undefined));
        }
    }

}
