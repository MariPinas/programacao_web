
import { EstoqueRepository } from './../repository/EstoqueRepository';
import { EstoquePaes } from './../model/EstoquePaes';
//Checar se a modalidade existe
import { ModalidadeService } from "../service/ModalidadeService";
import { ModalidadeRepository } from '../repository/ModalidadeRepository';
const modalidadeService = new ModalidadeService();
const modalidadeRepository = new ModalidadeRepository();

export class EstoqueService{
    estoqueRepository: EstoqueRepository = new EstoqueRepository();

    adicionarItem(EstoqueData: any): EstoquePaes {
        const { id, modalidadeID, quantidade, precoVenda } = EstoqueData;
        if(!modalidadeID || !quantidade || !precoVenda ){
            throw new Error("Informações incompletas");
        }

        const ModalidadeEncontrada = this.estoqueRepository.filtraProdutoPorId(modalidadeID);
        if(ModalidadeEncontrada){
            throw new Error("Nao foi possivel adicionar item, o item já esta cadastrado"); //verificar
        }
        const ModalidadeExiste = modalidadeService.consultarModalidade(modalidadeID);
        if(!ModalidadeExiste){
            console.log("voce digitou:" || modalidadeID);
            console.log("mas foi retornado: " || ModalidadeExiste);
            throw new Error("Modalidade nao existe");
        }
       
        const novoEstoque = new EstoquePaes(modalidadeID, quantidade, precoVenda);
        this.estoqueRepository.insereItem(novoEstoque);
        return novoEstoque;
    }

    consultarItemPorID(id:any): EstoquePaes | undefined{
        if(id){
            const idNumber: number = parseInt(id, 10);
            console.log("Checando estoque pelo ID: ", idNumber);
            return this.estoqueRepository.filtraProdutoPorId(idNumber);
        }
        console.log("Nao obteve o ID");
        return undefined;
    }

    
    getEstoques(ordem:any):EstoquePaes[]{
        return this.estoqueRepository.filtraTodosEstoques().sort((a,b) => a.id - b.id);
    }

    deletarEstoque(itemData:any){
        const {id, modalidadeId, quantidadeDeletar} = itemData;
        if( !id || !modalidadeId|| !quantidadeDeletar ){
            throw new Error("Informações incompletas");
        }

        let EstoqueEncontrado = this.consultarItemPorID(id);
        if(!EstoqueEncontrado){
            throw new Error("Produto não cadastrado!!!");
        }else if(EstoqueEncontrado.quantidade < quantidadeDeletar){
            throw new Error(`Quantidade solicitada ultrapassa a quantidade em estoque do item ${EstoqueEncontrado.modalidadeID}`);
        }
        EstoqueEncontrado.quantidade -= quantidadeDeletar;
        this.estoqueRepository.atualizaEstoque(EstoqueEncontrado);
        return EstoqueEncontrado;
    }

    atualizarEstoque(EstoqueData: any): EstoquePaes {
        const {id, modalidadeId, quantidade, precoVenda } = EstoqueData;
        if( !id || !modalidadeId|| !quantidade ||!precoVenda ){
            throw new Error("Informações incompletas");
        }

        let EstoqueEncontrado = this.consultarItemPorID(id);
        if(!EstoqueEncontrado){
            throw new Error("Produto não cadastrado!!!");
        }
        EstoqueEncontrado.quantidade += quantidade;
        EstoqueEncontrado.precoVenda = precoVenda;
        this.estoqueRepository.atualizaEstoque(EstoqueEncontrado);
        return EstoqueEncontrado;
    }
}