import { ModalidadePaes } from "../model/ModalidadePaes";
import { ModalidadeRepository} from "../repository/ModalidadeRepository";

export class ModalidadeService{

    productRepository: ModalidadeRepository = new ModalidadeRepository();

    cadastrarModalidade(produtoData: any): ModalidadePaes {
        const {name, vegan} = produtoData;
        if(!name ||  !(typeof vegan == "boolean")){
            throw new Error("Informações incompletas");
        }

        const produtoEncontrado = this.consultarModalidade(undefined);
        if(produtoEncontrado){
            throw new Error("Modalidade já cadastrada!!!");
        }
        const novaModalidade = new ModalidadePaes(name, vegan);
        this.productRepository.insereModalidade(novaModalidade);
        return novaModalidade;
    }

    consultarModalidade(id:any): ModalidadePaes|undefined{
         if(id){
            const idNumber: number = parseInt(id, 10);
            console.log("Checando modalidade pelo ID: ", idNumber);
            return this.productRepository.filtraModalidadePorId(idNumber);
        }
        return undefined;
    }

    

    getModalidades(ordem:any):ModalidadePaes[]{
        if(ordem === "desc"){
            return this.productRepository.filtraTodasModalidades().sort((a,b) => b.id - a.id);
        }
        return this.productRepository.filtraTodasModalidades().sort((a,b) => a.id - b.id);
    }

    deletarModalidade(id:any){
        const product = this.consultarModalidade(id);
        if(!product){
            throw new Error("Modalidade não encontrada");
        }
        
        this.productRepository.deletaModalidade(product);
    }

    atualizarModalidade(modalidadeData: any): ModalidadePaes {
        const {id, name, vegan } = modalidadeData;
        if(!id || !name || !(typeof vegan == "boolean")){
            throw new Error("Informações incompletas");
        }

        let modalidadeEncontrado = this.consultarModalidade(id);
        if(!modalidadeEncontrado){
            throw new Error("modalidade não cadastrada!!!");
        }
        modalidadeEncontrado.id =id;
        modalidadeEncontrado.name = name;
        modalidadeEncontrado.vegano = vegan;
        this.productRepository.atualizaModalidade(modalidadeEncontrado);
        return modalidadeEncontrado;
    }
}