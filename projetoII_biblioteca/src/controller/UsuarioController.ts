import { UsuarioService } from "../service/UsuarioService";
import { Route, Tags, Post, Body, Res, TsoaResponse, Controller, Put, Delete, Get, Path, Query} from "tsoa";
import { BasicResponseDto } from "../model/dto/BasicResponseDto";
import { UsuarioRequestDto} from "../model/dto/UsuarioDTO/UsuarioRequestDto";
import { UsuarioDto } from "../model/dto/UsuarioDTO/UsuarioDto";
import { Usuario } from "../model/entity/Usuario";



@Route("usuario")
@Tags("Usuario")
export class UsuarioController extends Controller{
    serviceUsuario = new UsuarioService();

    @Post()
    async cadastrarUsuario(
        @Body() dto: UsuarioRequestDto,
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<201, BasicResponseDto>
    ): Promise<void> {
        try {
            console.log("TRY DO CONTROLLER", dto);
            const product = await this.serviceUsuario.cadastrarUsuario(dto);
            return success(201, new BasicResponseDto("Usuario criado com sucesso!", product));
        } catch (error: any) {
            return fail(400, new BasicResponseDto(error.message, undefined));
        }
    }
 
    @Put()
    async atualizarUsuario(
        @Body() dto: UsuarioDto,
        @Res() notFound: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<200, BasicResponseDto>
    ): Promise<void> {
        try {
            console.log("TRY DO CONTROLLER ATT", dto);
            const usuario = await this.serviceUsuario.atualizarUsuario(dto);
            return success(200, new BasicResponseDto("Usuario atualizado com sucesso!", usuario));
        } catch (error: any) {
            return notFound(400, new BasicResponseDto(error.message, undefined));
        }
    }

    @Delete()
    async deletarUsuario (
        @Body() dto: UsuarioDto,
        @Res() notFound: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<200, BasicResponseDto>
    ): Promise<void> {
        try {
            const usuario = await this.serviceUsuario.deletarUsuario(dto);
            return success(200, new BasicResponseDto("Usuario deletado com sucesso!", usuario));
        } catch (error: any) {
            return notFound(400, new BasicResponseDto(error.message, undefined));
        }
    }
    @Get("id/{id}")
    async filtrarUsuarioPorId(
        @Path() id: number,
        @Res() notFound: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<200, BasicResponseDto>
    ): Promise<void> {
        try {
            const usuario = await this.serviceUsuario.buscaUsuarioPorID(id);
            return success(200, new BasicResponseDto("Usuario encontrado!", usuario));
        } catch (error: any) {
            return notFound(400, new BasicResponseDto(error.message, undefined));
        }
    }

    @Get("nome")
    async filtrarUsuarioPorNome(
        @Query() nome: string,
        @Res() notFound: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<200, BasicResponseDto>
    ): Promise<void> {
        try {
            const usuario = await this.serviceUsuario.buscaUsuarioPorNome(nome);
            return success(200, new BasicResponseDto("Usuario encontrado!", usuario));
        } catch (error: any) {
            return notFound(400, new BasicResponseDto(error.message, undefined));

        }
    }

    @Get("all")
    async listarTodosUsuarios(
        @Res() notFound: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<200, BasicResponseDto>
    ): Promise<void> {
        try {
            const usuarios: Usuario[] = await this.serviceUsuario.listarTodasUsuarios();
            return success(200, new BasicResponseDto("Usuarios listados com sucesso!", usuarios));
        } catch (error: any) {
            return notFound(400, new BasicResponseDto(error.message, undefined));
        }
    }

}
