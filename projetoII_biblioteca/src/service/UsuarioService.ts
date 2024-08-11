import { Usuario } from "../model/entity/Usuario";
import { UsuarioRepository } from "../repository/UsuarioRepository";

export class UsuarioService{

    private usuarioRepository = UsuarioRepository.getInstance();

    async cadastrarUsuario(usuarioData: any): Promise<Usuario> {
        const {nome, senha, idPessoa} = usuarioData;

        const usuario = new Usuario(undefined, nome, senha, idPessoa);

        const usuariosDeNomeExistente = await this.usuarioRepository.buscaUsuarioporNome(nome);
        if (usuariosDeNomeExistente.length > 0) {
            throw new Error("Usuario com esse nome já existe, escolha outro nome.");
        }
        const pessoaEncontrada = await this.usuarioRepository.buscaUsuarioporidPessoa(idPessoa);
        if (pessoaEncontrada.length == 0) {
            throw new Error("Essa pessoa nao existe.");
        }
        const novoUsuario = await this.usuarioRepository.insertUsuario(usuario);
        console.log("Service - Insert Usuario", novoUsuario);
        return novoUsuario;
    }

    async atualizarUsuario(usuarioData: any): Promise<Usuario> {
        const {id, nome, senha, idPessoa} = usuarioData;
        console.log("SERVICE ATT CATEGORIA - ", id, nome, senha, idPessoa);
        if(!nome){
            throw new Error("400 Bad Request - Informações incompletas");
        }
        const usuarioEncontrada =  await this.usuarioRepository.buscaUsuarioporID(id);
        if(usuarioEncontrada){
            const usuario = new Usuario(id, nome, senha, idPessoa)
            await this.usuarioRepository.updateUsuario(usuario);
            console.log("Service - Update ", usuario);
            return usuario;
        }else{
        throw new Error("400 Bad Request - Nao foi possivel atualizar!!!");
        } 
    }

    async deletarUsuario(usuarioData: any): Promise<Usuario[]> {
        const {id, nome, senha, idPessoa} = usuarioData;
        
        const usuario = new Usuario(id, nome, senha, idPessoa)
        const usuarioEncontrada =  await this.usuarioRepository.buscaUsuarioporIDeNome(id, nome);
        
        if(usuarioEncontrada.length != 0){
            await this.usuarioRepository.deleteUsuario(usuario);
            console.log("Service - Delete ", usuario);
            return usuarioEncontrada;
        }else{
            throw new Error("404!!! Not Found - Usuario nao encontrado!!");
        }
    }

    async buscaUsuarioPorNome(name: string): Promise<Usuario[]> {
        const nome:string = name;
        if(!nome || nome.trim() === ''){
            throw new Error("400 Bad Request - Informações incompletas");
        }
        const usuario =  await this.usuarioRepository.buscaUsuarioporNome(nome);
        if(usuario.length != 0){
            console.log("Service - Filtrar Nome", usuario);
            return usuario;
        }else{
            throw new Error("404 Not Found - Usuario com esse nome nao existe!!!");
        }
    }

    async buscaUsuarioPorID(usuarioData: any): Promise<Usuario[]> {
        const idNumber = parseInt(usuarioData, 10);
        if(!idNumber){
            throw new Error("400 Bad Request - Informações incompletas");
        }
        const usuario =  await this.usuarioRepository.buscaUsuarioporID(idNumber);
        if(usuario){
            console.log("Service - Filtrar ID", usuario);
            return usuario;
        }else{
            throw new Error("404 Not Found  - Usuario com esse id nao existe!!!");
        }
        
    }

    async listarTodasUsuarios(): Promise<Usuario[]> {
        const usuario =  await this.usuarioRepository.buscaAllUsuarios();
        console.log("Service - Filtrar Todos", usuario);
        return usuario;
    }

}