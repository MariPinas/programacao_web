import { Categoria } from "../model/entity/Categoria";
import { CategoriaRepository } from "../repository/CategoriaRepository";

export class CategoriaService{

    private categoriaRepository = CategoriaRepository.getInstance();

    async cadastrarCategoria(categoriaData: any): Promise<Categoria> {
        const {nome} = categoriaData;

        if (!nome|| nome.trim() === '') {
            throw new Error("Nome nao pode ser vazio e tem que ser tipo string, digite um nome valido.");
        }

        const categoria = new Categoria(undefined, nome);

        const categoriasExistentes = await this.categoriaRepository.buscaCategoriaporNome(nome);
        if (categoriasExistentes.length > 0) {
            throw new Error("Categoria com esse nome já existe.");
        }

        const novaCategoria = await this.categoriaRepository.insertCategoria(categoria);
        console.log("Service - Insert Categoria", novaCategoria);
        return novaCategoria;
    }

    async atualizarCategoria(categoriaData: any): Promise<Categoria> {
        const {id, nome} = categoriaData;
        console.log("SERVICE ATT CATEGORIA - ", id, nome);
        if(!nome){
            throw new Error("400 Bad Request - Informações incompletas");
        }
        const categoriaEncontrada =  await this.categoriaRepository.buscaCategoriaporID(id);
        if(categoriaEncontrada){
            const categoria = new Categoria(id, nome)
            await this.categoriaRepository.updateCategoria(categoria);
            console.log("Service - Update ", categoria);
            return categoria;
        }else{
        throw new Error("400 Bad Request - Nao foi possivel atualizar!!!");
        } 
    }

    async deletarCategoria(categoriaData: any): Promise<Categoria[]> {
        const {id, nome} = categoriaData;
        if(!id || !nome || nome.trim() === ''){
            throw new Error("400 Bad Request - Informações incompletas");
        }
        const categoria = new Categoria(id, nome)
        const categoriaEncontrada =  await this.categoriaRepository.buscaCategoriaporIDeNome(id, nome);
        
        if(categoriaEncontrada.length != 0){
            await this.categoriaRepository.deleteCategoria(categoria);
            console.log("Service - Delete ", categoria);
            return categoriaEncontrada;
        }else{
            throw new Error("404!!! Not Found - Categoria nao encontrada!!");
        }
    }

    async buscaCategoriaPorNome(name: string): Promise<Categoria[]> {
        const nome:string = name;
        if(!nome || nome.trim() === ''){
            throw new Error("400 Bad Request - Informações incompletas");
        }
        const categoria =  await this.categoriaRepository.buscaCategoriaporNome(nome);
        if(categoria.length != 0){
            console.log("Service - Filtrar Nome", categoria);
            return categoria;
        }else{
            throw new Error("404 Not Found - Categoria com esse nome nao existe!!!");
        }
    }

    async buscaCategoriaPorID(categoriaData: any): Promise<Categoria> {
        const idNumber = parseInt(categoriaData, 10);
        if(!idNumber){
            throw new Error("400 Bad Request - Informações incompletas");
        }
        const categoria =  await this.categoriaRepository.buscaCategoriaporID(idNumber);
        if(categoria){
            console.log("Service - Filtrar ID", categoria);
            return categoria;
        }else{
            throw new Error("404 Not Found  - Categoria com esse id nao existe!!!");
        }
        
    }

    async listarTodasCategorias(): Promise<Categoria[]> {
        const categoria =  await this.categoriaRepository.buscaAllCategorias();
        console.log("Service - Filtrar Todos", categoria);
        return categoria;
    }

}