import { Categoria } from "../model/entity/Categoria";
import { CategoriaRepository } from "../repository/CategoriaRepository";

export class CategoriaService{

    private categoriaRepository = CategoriaRepository.getInstance();

    async cadastrarCategoria(categoriaData:any): Promise<Categoria> {
        const {nome} = categoriaData;
        console.log("SERVICE CADASTRAR CATEGORIA", nome);

        if(!nome){
            throw new Error("400 Bad Request - Informações incompletas");
        }
        const categoriaEncontrada = await this.categoriaRepository.buscaCategoriaporNome(categoriaData.nome);
        if(!categoriaEncontrada){
            const categoria = new Categoria(undefined, nome)
            const novaCategoria =  await this.categoriaRepository.insertCategoria(categoria);
            console.log("Service - Insert ", novaCategoria);
            return novaCategoria;
        }else{
            throw new Error("409 Conflict - Categoria com esse nome já foi cadastrada!!!");
        }

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
        throw new Error("409 Conflict - Categoria com esse nome já foi cadastrada!!!");
        } 
    }

    async deletarCategoria(categoriaData: any): Promise<Categoria> {
        const {id, nome} = categoriaData;
        if(!id || !nome){
            throw new Error("400 Bad Request - Informações incompletas");
        }
        const categoriaEncontrada =  await this.categoriaRepository.buscaCategoriaporIDeNome(id, nome);
        if(categoriaEncontrada){
            const categoria = new Categoria(id, nome)
            await this.categoriaRepository.deleteCategoria(categoria);
            console.log("Service - Delete ", categoria);
            return categoria;
        }else{
            throw new Error("409 Conflict - Categoria com esse nome já foi cadastrada!!!");
        }
    }

    async buscaCategoriaPorNome(categoriaData: any): Promise<Categoria> {
        const {nome} = categoriaData;
        if(nome){
            throw new Error("400 Bad Request - Informações incompletas");
        }
        const categoriaEncontrada =  await this.categoriaRepository.buscaCategoriaporNome(nome);
        if(categoriaEncontrada){
            console.log("Service - Filtrar", categoriaEncontrada);
            return categoriaEncontrada;
        }else{
            throw new Error("409 Conflict - Categoria com esse nome já foi cadastrada!!!");
        }
        
    }

    async buscaCategoriaPorID(categoriaData: any): Promise<Categoria> {
        const idNumber = parseInt(categoriaData, 10);
        if(!idNumber){
            throw new Error("400 Bad Request - Informações incompletas");
        }
        const categoria =  await this.categoriaRepository.buscaCategoriaporID(idNumber);
        if(categoria){
            console.log("Service - Filtrar", categoria);
            return categoria;
        }else{
            throw new Error("409 Conflict - Categoria com esse nome já foi cadastrada!!!");
        }
        
    }

    async listarTodasCategorias(): Promise<Categoria[]> {
        const categoria =  await this.categoriaRepository.buscaAllCategorias();
        console.log("Service - Filtrar Todos", categoria);
        return categoria;
    }

}