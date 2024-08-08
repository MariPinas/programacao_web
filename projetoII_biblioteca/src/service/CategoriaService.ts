import { Categoria } from "../model/Categoria";
import { CategoriaRepository } from "../repository/CategoriaRepository";

export class CategoriaService{

    categoriaRepository: CategoriaRepository = new CategoriaRepository(); //

    async cadastrarCategoria(categoriaData: any): Promise<Categoria> {
        const { name } = categoriaData;
        
        const categoria = new Categoria(undefined, name)

        const novaCategoria =  await this.categoriaRepository.insertCategoria(categoria);
        console.log("Service - Insert ", novaCategoria);
        return novaCategoria;
    }

    async atualizarCategoria(categoriaData: any): Promise<Categoria> {
        const { id, name } = categoriaData;

        const categoria = new Categoria(id, name)

        await this.categoriaRepository.updateCategoria(categoria);
        console.log("Service - Update ", categoria);
        return categoria;
    }

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

}