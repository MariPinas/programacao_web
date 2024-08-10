/*import { Usuario } from "../model/Usuario";
import { UsuarioRepository } from "../repository/UsuarioRepository";

export class UsuarioService{

    usuarioRepository: UsuarioRepository = new UsuarioRepository(); //

    async cadastrarUsuario(usuarioData: any): Promise<Usuario> {
        const { nome, email, senha } = usuarioData;
        
        const usuario = new Usuario(undefined, nome, email, senha)

        const novoUsuario =  await this.usuarioRepository.insertUsuario(usuario);
        console.log("Service - Insert ", novoUsuario);
        return novoUsuario;
    }

    async atualizarUsuario(usuarioData: any): Promise<Usuario> {
        const { id, nome, email, senha } = usuarioData;

        const usuario = new Usuario(id, nome, email, senha)

        await this.usuarioRepository.updateUsuario(usuario);
        console.log("Service - Update ", usuario);
        return usuario;
    }

    async deletarUsuario(usuarioData: any): Promise<Usuario> {
        const { id, nome, email, senha } = usuarioData;

        const usuario = new Usuario(id, nome, email, senha)

        await this.usuarioRepository.deleteUsuario(usuario);
        console.log("Service - Delete ", usuario);
        return usuario;
    }

    async filtrarUsuario(usuarioData: any): Promise<Usuario> {
        const idNumber = parseInt(usuarioData, 10);

        const usuario =  await this.usuarioRepository.filterUsuario(idNumber);
        console.log("Service - Filtrar", usuario);
        return usuario;
    }

    async listarTodosUsuarios(): Promise<Usuario[]> {
        const usuario =  await this.usuarioRepository.filterAllUsuario();
        console.log("Service - Filtrar Todos", usuario);
        return usuario;
    }

}*/