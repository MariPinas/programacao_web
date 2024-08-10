import { Categoria } from "../model/entity/Categoria";
import { CategoriaRepository } from "../repository/CategoriaRepository";

export class CategoriaService{

    private categoriaRepository = CategoriaRepository.getInstance();

    async cadastrarCategoria(categoriaData:any): Promise<Categoria> {
        const {nome} = categoriaData;
        console.log("SERVICE CADASTRAR CATEGORIA", nome);

        const categoria = new Categoria(undefined, nome)

        const novaCategoria =  await this.categoriaRepository.insertCategoria(categoria);
        console.log("Service - Insert ", novaCategoria);
        return novaCategoria;
    }

    async atualizarCategoria(categoriaData: any): Promise<Categoria> {
        const {id, nome} = categoriaData;
        console.log("SERVICE ATT CATEGORIA - ", id, nome);
        const categoria = new Categoria(id, nome)

        await this.categoriaRepository.updateCategoria(categoria);
        console.log("Service - Update ", categoria);
        return categoria;
    }
/*
    async deletarCategoria(categoriaData: any): Promise<Categoria> {
        const { id, name } = categoriaData;

        const categoria = new Categoria(id, name)

        await this.categoriaRepository.deleteCategoria(categoria);
        console.log("Service - Delete ", categoria);
        return categoria;
    }

    async filtrarCategoria(categoriaData: any): Promise<Categoria> {
        const idNumber = parseInt(categoriaData, 10);

        const categoria =  await this.categoriaRepository.filterCategoria(idNumber);
        console.log("Service - Filtrar", categoria);
        return categoria;
    }

    async listarTodasCategorias(): Promise<Categoria[]> {
        const categoria =  await this.categoriaRepository.filterAllCategoria();
        console.log("Service - Filtrar Todos", categoria);
        return categoria;
    }
*/
}